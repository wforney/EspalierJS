import { customElement, bindable, bindingMode, inject } from "aurelia-framework";
import flatpickr from "flatpickr";
import { IEspalierFormControl } from "./espalier-form-control";
import { MaskController } from "./mask-controller";
import { ValidationController } from "aurelia-validation";
import { EspalierValidationRenderer } from "./espalier-validation-renderer";
import { EventAggregator, Subscription } from "aurelia-event-aggregator";

@customElement("esp-date")
@inject(ValidationController, EventAggregator, EspalierValidationRenderer)
export class EspalierDate implements IEspalierFormControl {
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
  protected focused = false;
  protected input: HTMLInputElement;
  protected theLabel: HTMLLabelElement;
  protected errors: string[] = [];
  private flatpickrInstance: flatpickr.Instance;
  private errorSub: Subscription;
  private removeErrorSub: Subscription;
  private maskController: MaskController;
  private uiInput: HTMLInputElement;

  constructor(private controller: ValidationController, private eventAggregator: EventAggregator,
    private renderer: EspalierValidationRenderer) {
    controller.removeRenderer(renderer);
    controller.addRenderer(renderer);
    this.mask = "00/00/0000";
  }

  public getControlId(): string {
    return this.controlid;
  }

  public focus(): void {
    this.uiInput.focus();
    this.focused = true;
    this.uiInput.setSelectionRange(0, this.uiInput.value.length);
  }

  protected attached() {
    this.flatpickrInstance = flatpickr(this.input, {
      allowInput: true,
      dateFormat: "Z",
      altFormat: "m/d/Y",
      altInput: true,
      defaultDate: this.value,
      onChange: () => {
        if (this.flatpickrInstance.selectedDates.length > 0) {
          this.value = this.flatpickrInstance.selectedDates[0].toISOString();
        } else {
          this.value = "";
        }
      },
      onOpen: [
        () => {
          this.focus();
        }
      ]
    });

    // flatpickr adds another input right after...
    this.uiInput = <HTMLInputElement>this.input.nextElementSibling;
    this.uiInput.id = `fp-${this.controlid}`;
    this.theLabel.htmlFor = this.uiInput.id;

    this.errorSub = this.eventAggregator.subscribe(
      `error:espalier:${this.controlid}`,
      (errorMessage: string) => this.errors.push(errorMessage));
    this.removeErrorSub = this.eventAggregator.subscribe(
      `removeerror:espalier:${this.controlid}`,
      (errorMessage: string) => {
        const index = this.errors.indexOf(errorMessage);
        if (index < 0) { return; }
        this.errors.splice(index, 1);
      }
    );
    this.uiInput.addEventListener("blur", this.onBlur);
    this.maskController = new MaskController(this.uiInput, this.mask);
  }

  protected detached() {
    this.uiInput.removeEventListener("blur", this.onBlur);
    this.errorSub.dispose();
    this.removeErrorSub.dispose();
    if (this.maskController) {
      this.maskController.dispose();
    }
  }

  private onBlur = async () => {
    this.focused = false;

    let date: Date | undefined = new Date(this.uiInput.value);

    if (isNaN(date.getDate())) {
      date = undefined;
    }

    this.flatpickrInstance.setDate(date ? date : "", true);

    setTimeout(async () => {
      this.renderer.specificElement = this;
      await this.controller.validate();
      this.renderer.specificElement = undefined;
    }, 250);
  }
}
