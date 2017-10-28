import { IEspalierDataFormatter } from "./espalier-data-formatter";
import { IColumnDefinition } from "./column-definition";
import { EspalierConfig } from "./espalier-config";
import { bindable, customElement, inject, InlineViewStrategy } from "aurelia-framework";
import { ColumnType } from "./enums";

@customElement("espalier-cell")
@inject(EspalierConfig)
export class EspalierCell {
  @bindable
  public column: IColumnDefinition<any>;

  @bindable
  public record: any;

  protected onClick: () => void;
  protected data: any;
  protected viewStrategy: InlineViewStrategy;
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

  constructor(private config: EspalierConfig) { }

  protected attached() {
    this.render();
  }

  private render() {
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
    const view = <string>this.config.cellViews.get(<string>this.column.templateName);
    this.viewStrategy = new InlineViewStrategy(view);
  }
}
