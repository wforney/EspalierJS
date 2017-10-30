"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var helpers_1 = require("./helpers");
var tippy = require("tippy.js");
var currentOpenCell;
var ButtonsCell = /** @class */ (function () {
    function ButtonsCell() {
        this.opened = false;
    }
    ButtonsCell.prototype.attached = function () {
        var buttons = helpers_1.ToArray(this.buttonsContainer.querySelectorAll("button"));
        for (var _i = 0, buttons_1 = buttons; _i < buttons_1.length; _i++) {
            var button = buttons_1[_i];
            tippy(button, {
                position: "left",
                arrow: true,
                size: "big"
            });
        }
    };
    ButtonsCell.prototype.buttonClicked = function (button) {
        button.onClick(this.record);
    };
    ButtonsCell.prototype.openMenu = function () {
        if (currentOpenCell) {
            currentOpenCell.closeMenu();
        }
        this.opened = true;
        this.menu.classList.add("show");
        this.menuContainer.classList.add("show");
        currentOpenCell = this;
    };
    ButtonsCell.prototype.closeMenu = function () {
        this.opened = false;
        this.menu.classList.remove("show");
        this.menuContainer.classList.remove("show");
        currentOpenCell = null;
    };
    __decorate([
        aurelia_framework_1.bindable
    ], ButtonsCell.prototype, "buttons", void 0);
    __decorate([
        aurelia_framework_1.bindable
    ], ButtonsCell.prototype, "record", void 0);
    ButtonsCell = __decorate([
        aurelia_framework_1.customElement("buttons-cell")
    ], ButtonsCell);
    return ButtonsCell;
}());
exports.ButtonsCell = ButtonsCell;