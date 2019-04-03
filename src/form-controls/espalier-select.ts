import { bindable, customElement, bindingMode, inject } from "aurelia-framework";
import { IEspalierFormControl } from "./espalier-form-control";
import { ValidationController } from "aurelia-validation";
import { EventAggregator, Subscription } from "aurelia-event-aggregator";
import { EspalierValidationRenderer } from "./espalier-validation-renderer";

@customElement("esp-select")
@inject(ValidationController, EventAggregator, EspalierValidationRenderer)
export class EspalierSelect implements IEspalierFormControl {
  @bindable()
  public controlid: string;

  @bindable({ defaultBindingMode: bindingMode.twoWay })
  public value: any;

  @bindable()
  public label: string;

  @bindable()
  public selectOptions: [string, any][];

  protected select: HTMLSelectElement;
  protected focused = false;
  protected errors: string[] = [];
  private errorSub: Subscription;
  private removeErrorSub: Subscription;

  constructor(private controller: ValidationController, private eventAggregator: EventAggregator,
    private renderer: EspalierValidationRenderer) {
    controller.removeRenderer(renderer);
    controller.addRenderer(renderer);
  }

  public getControlId(): string {
    return this.controlid;
  }

  public focus() {
    this.focused = true;
    this.select.focus();
  }

  protected attached() {
    this.errorSub = this.eventAggregator.subscribe(`error:espalier:${this.controlid}`,
      (errorMessage: string) => this.errors.push(errorMessage));
    this.removeErrorSub = this.eventAggregator.subscribe(`removeerror:espalier:${this.controlid}`,
      (errorMessage: string) => {
        const index = this.errors.indexOf(errorMessage);
        if (index < 0) { return; }
        this.errors.splice(index, 1);
      }
    );
    this.select.addEventListener("focus", this.onFocus);
    this.select.addEventListener("blur", this.onBlur);
  }

  protected detached() {
    this.select.removeEventListener("focus", this.onFocus);
    this.select.removeEventListener("blur", this.onBlur);
    this.errorSub.dispose();
    this.removeErrorSub.dispose();
  }

  private onBlur = async () => {
    this.focused = false;

    setTimeout(async () => {
      this.renderer.specificElement = this;
      await this.controller.validate();
      this.renderer.specificElement = undefined;
    }, 250);
  }

  private onFocus = () => {
    this.focused = true;
  }
}
