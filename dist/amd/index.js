define(["require", "exports", "aurelia-framework", "./grid/enums", "./grid/espalier-filter", "./grid/espalier", "./grid/espalier-config"], function (require, exports, aurelia_framework_1, enums_1, espalier_filter_1, espalier_1, espalier_config_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SortOrder = enums_1.SortOrder;
    exports.ColumnType = enums_1.ColumnType;
    exports.EspalierFilter = espalier_filter_1.EspalierFilter;
    exports.EspalierCustomElement = espalier_1.EspalierCustomElement;
    exports.EspalierConfig = espalier_config_1.EspalierConfig;
    function configure(config) {
        config.globalResources([
            aurelia_framework_1.PLATFORM.moduleName("./grid/espalier")
        ]);
    }
    exports.configure = configure;
});
