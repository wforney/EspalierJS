export class OptionsController {
  private currentlyDisplayedOptions: HTMLElement | undefined;

  constructor(private input: HTMLInputElement, private onSelected: (value: any) => Promise<void>) {
    this.input.addEventListener("blur", this.onBlur);
  }

  public clear() {
    if (this.currentlyDisplayedOptions) {
      this.currentlyDisplayedOptions.remove();
      this.currentlyDisplayedOptions = undefined;
    }
  }

  public showOptions(options: [string, any][]) {
    const optionsController = this;

    if (options && options.length) {
      const wrapper = document.createElement("div");
      wrapper.classList.add("esp-options");

      for (const option of options) {
        const itemElement = document.createElement("button");
        itemElement.innerText = option[0];
        itemElement.classList.add("esp-option-item");
        (<HTMLButtonElement>itemElement).onclick = () => {
          optionsController.onSelected(option[1]);

          if (optionsController.currentlyDisplayedOptions) {
            optionsController.currentlyDisplayedOptions.remove();
            optionsController.currentlyDisplayedOptions = undefined;
          }
        };
        (<HTMLButtonElement>itemElement).onkeydown = (e: KeyboardEvent) => {
          if (e.keyCode == 40 || e.key == "ArrowDown" && optionsController.currentlyDisplayedOptions) {
            optionsController.navigateItems(true);
            e.preventDefault();
          }
          if (e.keyCode == 38 || e.key == "ArrowUp" && optionsController.currentlyDisplayedOptions) {
            optionsController.navigateItems(false);
            e.preventDefault();
          }
        };
        (<HTMLButtonElement>itemElement).onblur = () => {
          optionsController.onBlur();
        };

        wrapper.appendChild(itemElement);
      }

      const inputBounds = optionsController.input.getBoundingClientRect();
      wrapper.style.setProperty("top", (inputBounds.bottom + window.pageYOffset) + "px");
      wrapper.style.setProperty("left", (inputBounds.left + window.pageXOffset) + "px");

      if (optionsController.currentlyDisplayedOptions) {
        optionsController.currentlyDisplayedOptions.replaceWith(wrapper);
      } else {
        document.body.appendChild(wrapper);
      }

      optionsController.currentlyDisplayedOptions = wrapper;
    }
  }

  public navigateItems(next: boolean) {
    const results = <HTMLDivElement>this.currentlyDisplayedOptions;
    const selected = results.querySelectorAll(":focus");
    const buttons = results.querySelectorAll("button");
    let elementToFocus: HTMLElement | undefined;

    if (selected.length > 0) {
      elementToFocus = next ?
        <HTMLElement>selected[0].nextElementSibling
        : selected[0].previousElementSibling != null ? <HTMLElement>selected[0].previousElementSibling : this.input;
    } else if (buttons.length > 0) {
      elementToFocus = next ? <HTMLButtonElement>buttons[0] : this.input;
    }

    if (elementToFocus) {
      elementToFocus.focus();
    }
  }

  private onBlur = () => {
    const optionsController = this;

    setTimeout(() => {
      if (optionsController.input !== document.activeElement
        && optionsController.currentlyDisplayedOptions != undefined
        && optionsController.currentlyDisplayedOptions.querySelectorAll(":focus").length == 0) {
        optionsController.clear();
      }
    }, 100);
  }
}
