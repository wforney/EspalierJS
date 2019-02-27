import { bindable, customElement, bindingMode, inject } from "aurelia-framework";
import { IEspalierFormControl } from "./espalier-form-control";
import { ValidationController, ValidationRenderer, RenderInstruction } from "aurelia-validation";
import { EventAggregator, Subscription } from "aurelia-event-aggregator";

let isBlurCheck = false;

@customElement("esp-input")
@inject(ValidationController, EventAggregator)
export class EspalierInputCustomElement implements IEspalierFormControl, ValidationRenderer {
  @bindable()
  public controlid: string;

  @bindable({ defaultBindingMode: bindingMode.twoWay })
  public value: string;

  @bindable()
  public type: string;

  @bindable()
  public label: string;
  protected input: HTMLInputElement;
  protected errors: string[] = [];
  private blurCheckForMe = false;
  private errorSub: Subscription;

  constructor(private controller: ValidationController, private eventAggregator: EventAggregator) {
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

  protected async doBlur() {
    setTimeout(async () => {
      isBlurCheck = true;
      this.blurCheckForMe = true;
      await this.controller.validate();
      isBlurCheck = false;
      this.blurCheckForMe = false;
    }, 250);
  }

  protected attached() {
    this.errorSub = this.eventAggregator.subscribe(
      `error:espalier:${this.controlid}`,
      (errorMessage: string) => this.errors.push(errorMessage));
  }

  protected detached() {
    this.errorSub.dispose();
  }
}
