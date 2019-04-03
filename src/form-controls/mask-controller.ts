import { OptionsController } from "./options-controller";

const alphaNumericRegex = new RegExp("^[a-zA-Z0-9]$");
const alphaRegex = new RegExp("^[a-zA-Z]$");
const numericRegex = new RegExp("^[0-9]$");

export class MaskController {
  private maskNonces: Array<string | RegExp> | undefined = undefined;
  private lastAutocompleteChecked: string = "";
  private optionsController: OptionsController;

  constructor(private input: HTMLInputElement, private mask: string,
    private autoCompleteFunction?: (value: string) => Promise<[string, any][]>,
    private autocompleteItemSelected?: (value: any) => Promise<void>) {
    if (this.autoCompleteFunction && this.autocompleteItemSelected) {
      this.optionsController = new OptionsController(this.input, this.autocompleteItemSelected);
    }
    this.input.addEventListener("keydown", this.keydown);
    this.input.addEventListener("keyup", this.keyup);
    this.maskNonces = [];

    if (this.mask) {
      for (const char of this.mask) {
        switch (char) {
          case "A":
            this.maskNonces.push(alphaRegex);
            continue;
          case "0":
            this.maskNonces.push(numericRegex);
            continue;
          case "W":
            this.maskNonces.push(alphaNumericRegex);
            continue;
          default:
            this.maskNonces.push(char);
            continue;
        }
      }
    }
  }

  public dispose() {
    this.input.removeEventListener("keydown", this.keydown);
    this.input.removeEventListener("keyup", this.keyup);
  }

  private keyup = () => {
    const newValue = this.input.value;
    const controller = this;

    if (newValue.length == 0 && controller.optionsController) {
      controller.optionsController.clear();
      return;
    }

    if (controller.autoCompleteFunction && newValue && controller.lastAutocompleteChecked !== newValue) {
      controller.lastAutocompleteChecked = newValue;
      controller.autoCompleteFunction(newValue)
        .then((matches: [string, any][]) => {
          this.optionsController.showOptions(matches);
        });
    }
  }

  private keydown = async (e: KeyboardEvent) => {
    if (e.keyCode == 40 || e.key == "ArrowDown" && this.optionsController) {
      this.optionsController.navigateItems(true);
      e.preventDefault();
      return;
    }

    if (!this.maskNonces || this.maskNonces.length == 0) {
      return;
    }

    const shiftModified = e.getModifierState("Shift");

    if (e.getModifierState("Control")
      || e.keyCode == 13 || e.key == "Enter"
      || e.keyCode == 17 || e.key == "Control"
      || e.keyCode == 9 || e.key == "Tab"
      || ((e.keyCode == 37 || e.key == "ArrowLeft") && shiftModified)
      || ((e.keyCode == 39 || e.key == "ArrowRight") && shiftModified)) {
      return;
    }

    let cursorPosition = this.input.selectionStart ? this.input.selectionStart : 0;

    if (e.keyCode == 37 || e.key == "ArrowLeft") {
      do {
        cursorPosition--;
      } while (!(this.maskNonces[cursorPosition] instanceof RegExp) && cursorPosition > 0);

      while (!(this.maskNonces[cursorPosition] instanceof RegExp) && cursorPosition < this.maskNonces.length) {
        cursorPosition++;
      }

      this.goToCursor(cursorPosition + 1);
      return;
    }

    if (e.keyCode == 39 || e.key == "ArrowRight") {
      do {
        cursorPosition++;
      } while (!(this.maskNonces[cursorPosition] instanceof RegExp) && cursorPosition < this.input.value.length);

      this.goToCursor(cursorPosition - 1);
      return;
    }

    if ((e.keyCode == 16 || e.key == "Shift") && !shiftModified) {
      /* We don't care if they just pushed the shift key. No input
      /* changes are necessary. */
      return;
    }

    e.preventDefault();
    e.stopImmediatePropagation();

    let chars: string[] = [];
    let maskedCharPosition = 0;
    let selectionLength = 0;

    for (let i = cursorPosition; i < (this.input.selectionEnd ? this.input.selectionEnd : cursorPosition); i++) {
      if (this.maskNonces[i] instanceof RegExp) {
        selectionLength++;
      }
    }

    while (this.maskNonces.length < cursorPosition + selectionLength
      && !(this.maskNonces[cursorPosition + selectionLength] instanceof RegExp)
      && (cursorPosition + selectionLength) <= this.input.value.length) {
      // Characters that are part of the mask will always be "selected" if they are after the cursor.
      selectionLength++;
    }

    for (let i = 0; i < this.maskNonces.length; i++) {
      if (this.maskNonces[i] instanceof RegExp /* This is a character set by the user. */
        && this.input.value.length > i) {
        chars.push(this.input.value.substring(i, i + 1));

        if (i < cursorPosition) {
          maskedCharPosition++;
        }
      }
    }

    if (e.keyCode == 8 || e.key == "Backspace") {
      if (selectionLength > 0) {
        chars.splice(maskedCharPosition, selectionLength);
      } else {
        if (maskedCharPosition == 0) {
          return;
        }

        do {
          cursorPosition--;
        } while (!(this.maskNonces[cursorPosition] instanceof RegExp) && cursorPosition > 0);
        maskedCharPosition--;
        chars.splice(maskedCharPosition, 1);
      }
      cursorPosition--;
    } else if (e.keyCode == 46 || e.key == "Delete") {
      chars.splice(maskedCharPosition, selectionLength ? selectionLength : 1);
      cursorPosition--;
    } else {
      if (cursorPosition >= this.maskNonces.length) {
        return;
      }

      if (this.input.value.length >= this.maskNonces.length && selectionLength == 0) {
        // The value is full, so we need to replace instead of insert.
        selectionLength = 1;
      }

      let nonce: string | RegExp;

      do {
        nonce = this.maskNonces[cursorPosition];

        if (!(nonce instanceof RegExp)) {
          cursorPosition++;
        }
      } while (!(nonce instanceof RegExp) && cursorPosition < this.maskNonces.length);

      if (!(nonce instanceof RegExp) || !nonce.test(e.key)) {
        return;
      }

      chars.splice(maskedCharPosition, selectionLength, e.key);
    }

    let newVal = "";
    let noUserEnteredChars = true;
    chars = chars.reverse();

    for (const nonce of this.maskNonces) {
      if (nonce instanceof RegExp) {
        const potentialVal = chars.pop();

        if (!potentialVal) {
          break;
        }

        if (nonce.test(potentialVal)) {
          noUserEnteredChars = false;
          newVal += potentialVal;
        }
        continue;
      }

      newVal += nonce;
    }

    this.input.value = noUserEnteredChars ? "" : newVal;

    do {
      cursorPosition++;
    } while (!(this.maskNonces[cursorPosition] instanceof RegExp) && cursorPosition <= this.input.value.length);

    this.goToCursor(cursorPosition);
  }

  private goToCursor(pos: number) {
    this.input.setSelectionRange(pos, pos);
  }
}
