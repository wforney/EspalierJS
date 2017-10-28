var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { bindable, customElement } from "aurelia-framework";
import { ToArray } from "./helpers";
import * as tippy from "tippy.js";
let currentOpenCell;
let ButtonsCell = class ButtonsCell {
    constructor() {
        this.opened = false;
    }
    attached() {
        const buttons = ToArray(this.buttonsContainer.querySelectorAll("button"));
        for (const button of buttons) {
            tippy(button, {
                position: "left",
                arrow: true,
                size: "big"
            });
        }
    }
    buttonClicked(button) {
        button.onClick(this.record);
    }
    openMenu() {
        if (currentOpenCell) {
            currentOpenCell.closeMenu();
        }
        this.opened = true;
        this.menu.classList.add("show");
        this.menuContainer.classList.add("show");
        currentOpenCell = this;
    }
    closeMenu() {
        this.opened = false;
        this.menu.classList.remove("show");
        this.menuContainer.classList.remove("show");
        currentOpenCell = null;
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
