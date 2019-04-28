import { FrameworkConfiguration, PLATFORM } from "aurelia-framework";
import { Polyfills } from "./polyfills";

export { IColumnDefinition } from "./grid/column-definition";
export { SortOrder, ColumnType } from "./grid/enums";
export { IEspalierSettings } from "./grid/espalier-settings";
export { EspalierFilter, IFilterToken } from "./grid/espalier-filter";
export { ITableButton } from "./grid/table-button";
export { EspalierGrid } from "./grid/espalier";
export { IEspalierPage } from "./grid/espalier-page";
export { EspalierConfig } from "./grid/espalier-config";
export { EspalierCell } from "./grid/espalier-cell";
export { ButtonsCell } from "./grid/buttons-cell";
export { IEspalierDataFormatter } from "./grid/espalier-data-formatter";
export { CurrencyFormatter } from "./grid/formatters/currency-formatter";
export { DateFormatter } from "./grid/formatters/date-formatter";
export { IntegerFormatter } from "./grid/formatters/integer-formatter";
export { NumberFormatter } from "./grid/formatters/number-formatter";
export { TextFormatter } from "./grid/formatters/text-formatter";
export { EspalierInput } from "./form-controls/espalier-input";
export { EspalierCheckbox } from "./form-controls/espalier-checkbox";
export { EspalierDate } from "./form-controls/espalier-date";
export { DataSourceFactory } from "./grid/data-sources/data-source-factory";

export function configure(config: FrameworkConfiguration) {
  new Polyfills().apply();

  config.globalResources([
    PLATFORM.moduleName("./grid/espalier"),
    PLATFORM.moduleName("./form-controls/espalier-checkbox"),
    PLATFORM.moduleName("./form-controls/espalier-input"),
    PLATFORM.moduleName("./form-controls/espalier-date"),
    PLATFORM.moduleName("./form-controls/espalier-select")
  ]);
}
