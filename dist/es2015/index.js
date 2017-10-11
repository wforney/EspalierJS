import { PLATFORM } from "aurelia-framework";
export { SortOrder, ColumnType } from "./grid/enums";
export { EspalierFilter } from "./grid/espalier-filter";
export { TableButton } from "./grid/table-button";
export { EspalierCustomElement } from "./grid/espalier";
export function configure(config) {
    config.globalResources([
        PLATFORM.moduleName("./grid/espalier")
    ]);
}
