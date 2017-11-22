import { IEspalierDataFormatter } from "./espalier-data-formatter";
import { IColumnDefinition } from "./column-definition";
import { bindable, customElement, inject, noView, ViewSlot, ViewFactory, Container } from "aurelia-framework";
import { ColumnType } from "./enums";

@customElement("espalier-cell")
@noView()
@inject(ViewSlot, Container)
export class EspalierCell {
  @bindable
  public column: IColumnDefinition<any>;

  @bindable
  public record: any;

  @bindable
  public view: ViewFactory;

  protected onClick: () => void;
  protected data: any;
  protected get className(): string {
    switch (this.column.type) {
      case ColumnType.Currency:
        return "currency-cell";
      case ColumnType.Date:
        return "date-cell";
      case ColumnType.DateTime:
        return "date-time-cell";
      case ColumnType.Number:
        return "number-cell";
      case ColumnType.Time:
        return "time-cell";
      case ColumnType.Integer:
        return "time-integer";
      default:
        return "default-cell";
    }
  }
  private isAttached = false;

  constructor(private viewSlot: ViewSlot, private container: Container) { }

  protected attached() {
    this.isAttached = true;
    this.loadView();
  }

  protected viewChanged() {
    if (this.isAttached) {
      this.loadView();
    }
  }

  private loadView() {
    if (this.column.onClick) {
      this.onClick = () => {
        if (this.column.onClick == undefined) {
          return;
        }

        this.column.onClick(this.record);
      };
    }

    const propertyValue = this.record[this.column.propertyName];
    this.data = (<IEspalierDataFormatter>this.column.dataFormatter).format(propertyValue, this.record);
    let view = this.view.create(this.container);
    view.bind(this);
    this.viewSlot.add(view);
    this.viewSlot.attached();
  }
}
