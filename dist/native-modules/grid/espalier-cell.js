var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { EspalierConfig } from "./espalier-config";
import { bindable, customElement, inject, InlineViewStrategy } from "aurelia-framework";
import { ColumnType } from "./enums";
var EspalierCell = /** @class */ (function () {
    function EspalierCell(config) {
        this.config = config;
    }
    Object.defineProperty(EspalierCell.prototype, "className", {
        get: function () {
            switch (this.column.type) {
                case ColumnType.Currency:
                    return "currency-cell";
                case ColumnType.Date:
                    return "date-cell";
                case ColumnType.DateTime:
                    return "date-time-cell";
                case ColumnType.Number:
                    return "number-cell";
                case ColumnType.Time:
                    return "time-cell";
                case ColumnType.Integer:
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
        this.viewStrategy = new InlineViewStrategy(view);
    };
    __decorate([
        bindable
    ], EspalierCell.prototype, "column", void 0);
    __decorate([
        bindable
    ], EspalierCell.prototype, "record", void 0);
    EspalierCell = __decorate([
        customElement("espalier-cell"),
        inject(EspalierConfig)
    ], EspalierCell);
    return EspalierCell;
}());
export { EspalierCell };
