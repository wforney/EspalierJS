"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var enums_1 = require("./grid/enums");
exports.SortOrder = enums_1.SortOrder;
exports.ColumnType = enums_1.ColumnType;
var espalier_filter_1 = require("./grid/espalier-filter");
exports.EspalierFilter = espalier_filter_1.EspalierFilter;
var table_button_1 = require("./grid/table-button");
exports.TableButton = table_button_1.TableButton;
var espalier_1 = require("./grid/espalier");
exports.EspalierCustomElement = espalier_1.EspalierCustomElement;
function configure(config) {
    config.globalResources([
        aurelia_framework_1.PLATFORM.moduleName("./grid/espalier")
    ]);
}
exports.configure = configure;
