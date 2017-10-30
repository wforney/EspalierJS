"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var enums_1 = require("./grid/enums");
exports.SortOrder = enums_1.SortOrder;
exports.ColumnType = enums_1.ColumnType;
var espalier_filter_1 = require("./grid/espalier-filter");
exports.EspalierFilter = espalier_filter_1.EspalierFilter;
var espalier_1 = require("./grid/espalier");
exports.EspalierCustomElement = espalier_1.EspalierCustomElement;
var espalier_config_1 = require("./grid/espalier-config");
exports.EspalierConfig = espalier_config_1.EspalierConfig;
var espalier_cell_1 = require("./grid/espalier-cell");
exports.EspalierCell = espalier_cell_1.EspalierCell;
var buttons_cell_1 = require("./grid/buttons-cell");
exports.ButtonsCell = buttons_cell_1.ButtonsCell;
function configure(config) {
    config.globalResources([
        aurelia_framework_1.PLATFORM.moduleName("./grid/espalier")
    ]);
}
exports.configure = configure;
