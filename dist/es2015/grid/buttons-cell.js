var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { bindable, customElement } from "aurelia-framework";
import { ToArray } from "./helpers";
import tippy from "tippy.js";
let currentOpenCell;
let ButtonsCell = class ButtonsCell {
    constructor() {
        this.opened = false;
    }
    attached() {
        const buttons = ToArray(this.menuContainer.querySelectorAll("button"));
        for (const button of buttons) {
            tippy(button, {
                placement: "left",
                arrow: true,
                size: "large",
                content: button.title
            });
        }
    }
    buttonClicked(button) {
        this.tryClose();
        button.onClick(this.record);
    }
    openMenu() {
        this.tryClose();
        const menu = this.menuContainer.querySelectorAll("#buttons-menu").item(0);
        this.opened = true;
        menu.classList.add("show");
        this.menuContainer.classList.add("show");
        currentOpenCell = this;
    }
    closeMenu() {
        const menu = this.menuContainer.querySelectorAll("#buttons-menu").item(0);
        this.opened = false;
        menu.classList.remove("show");
        this.menuContainer.classList.remove("show");
        currentOpenCell = null;
    }
    tryClose() {
        if (currentOpenCell) {
            try {
                currentOpenCell.closeMenu();
            }
            catch (_a) {
                currentOpenCell = null;
            }
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
export { ButtonsCell };
