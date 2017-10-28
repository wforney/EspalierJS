System.register(["aurelia-framework", "./grid/enums", "./grid/espalier-filter", "./grid/espalier", "./grid/espalier-config"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function configure(config) {
        config.globalResources([
            aurelia_framework_1.PLATFORM.moduleName("./grid/espalier")
        ]);
    }
    exports_1("configure", configure);
    var aurelia_framework_1;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (enums_1_1) {
                exports_1({
                    "SortOrder": enums_1_1["SortOrder"],
                    "ColumnType": enums_1_1["ColumnType"]
                });
            },
            function (espalier_filter_1_1) {
                exports_1({
                    "EspalierFilter": espalier_filter_1_1["EspalierFilter"]
                });
            },
            function (espalier_1_1) {
                exports_1({
                    "EspalierCustomElement": espalier_1_1["EspalierCustomElement"]
                });
            },
            function (espalier_config_1_1) {
                exports_1({
                    "EspalierConfig": espalier_config_1_1["EspalierConfig"]
                });
            }
        ],
        execute: function () {
        }
    };
});
