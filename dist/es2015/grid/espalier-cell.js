var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { bindable, customElement, inject, noView, ViewSlot, Container } from "aurelia-framework";
import { ColumnType } from "./enums";
import { TextFormatter } from "./formatters/formatters";
let EspalierCell = class EspalierCell {
    constructor(viewSlot, container) {
        this.viewSlot = viewSlot;
        this.container = container;
        this.isAttached = false;
    }
    get className() {
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
    }
    attached() {
        this.isAttached = true;
        this.loadView();
    }
    viewChanged() {
        if (this.isAttached) {
            this.loadView();
        }
    }
    loadView() {
        if (this.column.onClick) {
            this.onClick = () => {
                if (this.column.onClick == undefined) {
                    return;
                }
                this.column.onClick(this.record);
            };
        }
        let propertyValue = this.record;
        const paths = this.column.propertyName.split(".");
        for (const path of paths) {
            if (propertyValue) {
                propertyValue = propertyValue[path];
            }
        }
        let formatter = this.column.dataFormatter;
        if (!formatter) {
            formatter = new TextFormatter();
        }
        this.data = formatter.format(propertyValue, this.record);
        let view = this.view.create(this.container);
        view.bind(this);
        this.viewSlot.add(view);
        this.viewSlot.attached();
    }
};
__decorate([
    bindable
], EspalierCell.prototype, "column", void 0);
__decorate([
    bindable
], EspalierCell.prototype, "record", void 0);
__decorate([
    bindable
], EspalierCell.prototype, "view", void 0);
EspalierCell = __decorate([
    customElement("espalier-cell"),
    noView(),
    inject(ViewSlot, Container)
], EspalierCell);
export { EspalierCell };
