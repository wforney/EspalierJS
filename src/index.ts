import { FrameworkConfiguration, PLATFORM } from "aurelia-framework";

export { IColumnDefinition } from "./grid/column-definition";
export { SortOrder, ColumnType } from "./grid/enums";
export { IEspalierSettings } from "./grid/espalier-settings";
export { EspalierFilter } from "./grid/espalier-filter";
export { ITableButton } from "./grid/table-button";
export { EspalierCustomElement } from "./grid/espalier";
export { IEspalierPage } from "./grid/espalier-page";
export { EspalierConfig } from "./grid/espalier-config";

export function configure(config: FrameworkConfiguration) {
  config.globalResources([
    PLATFORM.moduleName("./grid/espalier")
  ]);
}
