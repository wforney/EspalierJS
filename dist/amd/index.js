define(["require", "exports", "aurelia-framework", "./grid/enums", "./grid/espalier-filter", "./grid/espalier", "./grid/espalier-config", "./grid/espalier-cell", "./grid/buttons-cell", "./grid/formatters/currency-formatter", "./grid/formatters/date-formatter", "./grid/formatters/integer-formatter", "./grid/formatters/number-formatter", "./grid/formatters/text-formatter", "./form-controls/espalier-input", "./form-controls/espalier-checkbox"], function (require, exports, aurelia_framework_1, enums_1, espalier_filter_1, espalier_1, espalier_config_1, espalier_cell_1, buttons_cell_1, currency_formatter_1, date_formatter_1, integer_formatter_1, number_formatter_1, text_formatter_1, espalier_input_1, espalier_checkbox_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SortOrder = enums_1.SortOrder;
    exports.ColumnType = enums_1.ColumnType;
    exports.EspalierFilter = espalier_filter_1.EspalierFilter;
    exports.EspalierCustomElement = espalier_1.EspalierCustomElement;
    exports.EspalierConfig = espalier_config_1.EspalierConfig;
    exports.EspalierCell = espalier_cell_1.EspalierCell;
    exports.ButtonsCell = buttons_cell_1.ButtonsCell;
    exports.CurrencyFormatter = currency_formatter_1.CurrencyFormatter;
    exports.DateFormatter = date_formatter_1.DateFormatter;
    exports.IntegerFormatter = integer_formatter_1.IntegerFormatter;
    exports.NumberFormatter = number_formatter_1.NumberFormatter;
    exports.TextFormatter = text_formatter_1.TextFormatter;
    exports.EspalierInputCustomElement = espalier_input_1.EspalierInputCustomElement;
    exports.EspalierCheckboxCustomElement = espalier_checkbox_1.EspalierCheckboxCustomElement;
    function configure(config) {
        config.globalResources([
            aurelia_framework_1.PLATFORM.moduleName("./grid/espalier"),
            aurelia_framework_1.PLATFORM.moduleName("./form-controls/espalier-checkbox"),
            aurelia_framework_1.PLATFORM.moduleName("./form-controls/espalier-input")
        ]);
    }
    exports.configure = configure;
});
