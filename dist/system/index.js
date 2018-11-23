System.register(["aurelia-framework", "./grid/enums", "./grid/espalier-filter", "./grid/espalier", "./grid/espalier-config", "./grid/espalier-cell", "./grid/buttons-cell", "./grid/formatters/currency-formatter", "./grid/formatters/date-formatter", "./grid/formatters/integer-formatter", "./grid/formatters/number-formatter", "./grid/formatters/text-formatter"], function (exports_1, context_1) {
    "use strict";
    var aurelia_framework_1;
    var __moduleName = context_1 && context_1.id;
    function configure(config) {
        config.globalResources([
            aurelia_framework_1.PLATFORM.moduleName("./grid/espalier")
        ]);
    }
    exports_1("configure", configure);
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
            },
            function (espalier_cell_1_1) {
                exports_1({
                    "EspalierCell": espalier_cell_1_1["EspalierCell"]
                });
            },
            function (buttons_cell_1_1) {
                exports_1({
                    "ButtonsCell": buttons_cell_1_1["ButtonsCell"]
                });
            },
            function (currency_formatter_1_1) {
                exports_1({
                    "CurrencyFormatter": currency_formatter_1_1["CurrencyFormatter"]
                });
            },
            function (date_formatter_1_1) {
                exports_1({
                    "DateFormatter": date_formatter_1_1["DateFormatter"]
                });
            },
            function (integer_formatter_1_1) {
                exports_1({
                    "IntegerFormatter": integer_formatter_1_1["IntegerFormatter"]
                });
            },
            function (number_formatter_1_1) {
                exports_1({
                    "NumberFormatter": number_formatter_1_1["NumberFormatter"]
                });
            },
            function (text_formatter_1_1) {
                exports_1({
                    "TextFormatter": text_formatter_1_1["TextFormatter"]
                });
            }
        ],
        execute: function () {
        }
    };
});
