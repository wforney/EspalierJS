import { bindable, customElement, bindingMode } from "aurelia-framework";
import { IEspalierFormControl } from "./espalier-form-control";

@customElement("esp-checkbox")
export class EspalierCheckbox implements IEspalierFormControl {
  @bindable()
  public controlid: string;

  @bindable({ defaultBindingMode: bindingMode.twoWay })
  public checked: boolean | Array<any>;

  @bindable()
  public model: any;

  @bindable()
  public label: string;

  protected input: HTMLInputElement;
  protected errors: string[] = [];

  public getControlId(): string {
    return this.controlid;
  }

  public focus() {
    this.input.focus();
  }

  public pushError(message: string) {
    this.errors.push(message);
  }

  public clearErrors() {
    this.errors.splice(0);
  }
}
