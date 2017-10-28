import { PLATFORM } from "aurelia-framework";
export { SortOrder, ColumnType } from "./grid/enums";
export { EspalierFilter } from "./grid/espalier-filter";
export { EspalierCustomElement } from "./grid/espalier";
export { EspalierConfig } from "./grid/espalier-config";
export function configure(config) {
    config.globalResources([
        PLATFORM.moduleName("./grid/espalier")
    ]);
}
