var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { bindable, customElement } from "aurelia-framework";
import { ToArray } from "./helpers";
import tippy from "tippy.js";
var currentOpenCell;
var ButtonsCell = /** @class */ (function () {
    function ButtonsCell() {
        this.opened = false;
    }
    ButtonsCell.prototype.attached = function () {
        var buttons = ToArray(this.menuContainer.querySelectorAll("button"));
        for (var _i = 0, buttons_1 = buttons; _i < buttons_1.length; _i++) {
            var button = buttons_1[_i];
            tippy(button, {
                placement: "left",
                arrow: true,
                size: "large",
                content: button.title
            });
        }
    };
    ButtonsCell.prototype.buttonClicked = function (button) {
        this.tryClose();
        button.onClick(this.record);
    };
    ButtonsCell.prototype.openMenu = function () {
        this.tryClose();
        var menu = this.menuContainer.querySelectorAll("#buttons-menu").item(0);
        this.opened = true;
        menu.classList.add("show");
        this.menuContainer.classList.add("show");
        currentOpenCell = this;
    };
    ButtonsCell.prototype.closeMenu = function () {
        var menu = this.menuContainer.querySelectorAll("#buttons-menu").item(0);
        this.opened = false;
        menu.classList.remove("show");
        this.menuContainer.classList.remove("show");
        currentOpenCell = null;
    };
    ButtonsCell.prototype.tryClose = function () {
        if (currentOpenCell) {
            try {
                currentOpenCell.closeMenu();
            }
            catch (_a) {
                currentOpenCell = null;
            }
        }
    };
    __decorate([
        bindable
    ], ButtonsCell.prototype, "buttons", void 0);
    __decorate([
        bindable
    ], ButtonsCell.prototype, "record", void 0);
    ButtonsCell = __decorate([
        customElement("buttons-cell")
    ], ButtonsCell);
    return ButtonsCell;
}());
export { ButtonsCell };
