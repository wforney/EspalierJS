import { bindable, customElement, bindingMode, inject, TaskQueue } from "aurelia-framework";
import { IEspalierFormControl } from "./espalier-form-control";
import { ValidationController, ValidationRenderer, RenderInstruction } from "aurelia-validation";
import { EventAggregator, Subscription } from "aurelia-event-aggregator";

let isBlurCheck = false;
const alphaNumericRegex = new RegExp("^[a-zA-Z0-9]$");
const alphaRegex = new RegExp("^[a-zA-Z]$");
const numericRegex = new RegExp("^[0-9]$");

@customElement("esp-input")
@inject(ValidationController, EventAggregator, TaskQueue)
export class EspalierInput implements IEspalierFormControl, ValidationRenderer {
  @bindable()
  public controlid: string;

  @bindable({ defaultBindingMode: bindingMode.twoWay })
  public value: string;

  @bindable()
  public type: string;

  @bindable()
  public mask: string;

  @bindable()
  public label: string;
  protected input: HTMLInputElement;
  protected focused = false;
  protected errors: string[] = [];
  private blurCheckForMe = false;
  private errorSub: Subscription;
  private maskNonces: Array<string | RegExp> | undefined = undefined;

  constructor(private controller: ValidationController, private eventAggregator: EventAggregator,
    private queue: TaskQueue) {
    controller.addRenderer(this);
  }

  public focus() {
    this.input.focus();
  }

  public render(instruction: RenderInstruction) {
    if (isBlurCheck && !this.blurCheckForMe) { return; }

    for (const { result, elements } of instruction.unrender) {
      for (const element of elements) {
        if (!(element["au"].controller.viewModel == this) || !result.message) { continue; }
        const index = this.errors.indexOf(result.message);
        if (index < 0) { continue; }
        this.errors.splice(index, 1);
      }
    }

    for (const { result, elements } of instruction.render) {
      if (result.valid || !result.message) { continue; }

      for (const element of elements) {
        if (!((<any>element["au"]).controller.viewModel == this)
          || this.errors.indexOf(result.message) > -1) { continue; }
        this.errors.push(result.message);
      }
    }
  }

  protected hasFocus() {
    this.focused = true;

    // if (this.maskNonces) {

    // }

    this.input.setSelectionRange(0, this.input.value.length);
  }

  protected async doBlur() {
    this.focused = false;

    setTimeout(async () => {
      isBlurCheck = true;
      this.blurCheckForMe = true;
      await this.controller.validate();
      isBlurCheck = false;
      this.blurCheckForMe = false;
    }, 250);
  }

  protected attached() {
    this.input.addEventListener("keydown", (ev: KeyboardEvent) => this.keydown(ev));
    this.errorSub = this.eventAggregator.subscribe(
      `error:espalier:${this.controlid}`,
      (errorMessage: string) => this.errors.push(errorMessage));

    if (this.mask) {
      if (!this.maskNonces) {
        this.maskNonces = [];

        for (const char of this.mask/*.split("")*/) {
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
  }

  protected detached() {
    this.errorSub.dispose();
  }

  protected keydown(e: KeyboardEvent) {
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
      } while (!(this.maskNonces[cursorPosition] instanceof RegExp) && cursorPosition < this.value.length);

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
      && (cursorPosition + selectionLength) <= this.value.length) {
      // Characters that are part of the mask will always be "selected" if they are after the cursor.
      selectionLength++;
    }

    for (let i = 0; i < this.maskNonces.length; i++) {
      if (this.maskNonces[i] instanceof RegExp /* This is a character set by the user. */
        && this.value.length > i) {
        chars.push(this.value.substring(i, i + 1));

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

      if (this.value.length >= this.maskNonces.length && selectionLength == 0) {
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

    this.value = noUserEnteredChars ? "" : newVal;

    do {
      cursorPosition++;
    } while (!(this.maskNonces[cursorPosition] instanceof RegExp) && cursorPosition <= this.value.length);

    this.goToCursor(cursorPosition);
  }

  private goToCursor(pos: number) {
    this.queue.queueMicroTask(() => {
      this.input.setSelectionRange(pos, pos);
    });
  }
}
