"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var espalier_config_1 = require("./espalier-config");
var aurelia_framework_1 = require("aurelia-framework");
var enums_1 = require("./enums");
var EspalierCell = /** @class */ (function () {
    function EspalierCell(config) {
        this.config = config;
    }
    Object.defineProperty(EspalierCell.prototype, "className", {
        get: function () {
            switch (this.column.type) {
                case enums_1.ColumnType.Currency:
                    return "currency-cell";
                case enums_1.ColumnType.Date:
                    return "date-cell";
                case enums_1.ColumnType.DateTime:
                    return "date-time-cell";
                case enums_1.ColumnType.Number:
                    return "number-cell";
                case enums_1.ColumnType.Time:
                    return "time-cell";
                case enums_1.ColumnType.Integer:
                    return "time-integer";
                default:
                    return "default-cell";
            }
        },
        enumerable: true,
        configurable: true
    });
    EspalierCell.prototype.attached = function () {
        this.render();
    };
    EspalierCell.prototype.render = function () {
        var _this = this;
        if (this.column.onClick) {
            this.onClick = function () {
                if (_this.column.onClick == undefined) {
                    return;
                }
                _this.column.onClick(_this.record);
            };
        }
        var propertyValue = this.record[this.column.propertyName];
        this.data = this.column.dataFormatter.format(propertyValue, this.record);
        var view = this.config.cellViews.get(this.column.templateName);
        this.viewStrategy = new aurelia_framework_1.InlineViewStrategy(view);
    };
    __decorate([
        aurelia_framework_1.bindable
    ], EspalierCell.prototype, "column", void 0);
    __decorate([
        aurelia_framework_1.bindable
    ], EspalierCell.prototype, "record", void 0);
    EspalierCell = __decorate([
        aurelia_framework_1.customElement("espalier-cell"),
        aurelia_framework_1.inject(espalier_config_1.EspalierConfig)
    ], EspalierCell);
    return EspalierCell;
}());
exports.EspalierCell = EspalierCell;
