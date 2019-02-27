"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var EspalierCheckboxCustomElement = /** @class */ (function () {
    function EspalierCheckboxCustomElement() {
        this.errors = [];
    }
    EspalierCheckboxCustomElement.prototype.focus = function () {
        this.input.focus();
    };
    EspalierCheckboxCustomElement.prototype.pushError = function (message) {
        this.errors.push(message);
    };
    EspalierCheckboxCustomElement.prototype.clearErrors = function () {
        this.errors.splice(0);
    };
    __decorate([
        aurelia_framework_1.bindable()
    ], EspalierCheckboxCustomElement.prototype, "controlid", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.twoWay })
    ], EspalierCheckboxCustomElement.prototype, "checked", void 0);
    __decorate([
        aurelia_framework_1.bindable()
    ], EspalierCheckboxCustomElement.prototype, "model", void 0);
    __decorate([
        aurelia_framework_1.bindable()
    ], EspalierCheckboxCustomElement.prototype, "label", void 0);
    EspalierCheckboxCustomElement = __decorate([
        aurelia_framework_1.customElement("esp-checkbox")
    ], EspalierCheckboxCustomElement);
    return EspalierCheckboxCustomElement;
}());
exports.EspalierCheckboxCustomElement = EspalierCheckboxCustomElement;
