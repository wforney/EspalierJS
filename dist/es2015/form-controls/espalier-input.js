var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { bindable, customElement, bindingMode, inject } from "aurelia-framework";
import { ValidationController } from "aurelia-validation";
import { EventAggregator } from "aurelia-event-aggregator";
let isBlurCheck = false;
let EspalierInput = class EspalierInput {
    constructor(controller, eventAggregator) {
        this.controller = controller;
        this.eventAggregator = eventAggregator;
        this.focused = false;
        this.errors = [];
        this.blurCheckForMe = false;
        controller.addRenderer(this);
    }
    focus() {
        this.input.focus();
    }
    render(instruction) {
        if (isBlurCheck && !this.blurCheckForMe) {
            return;
        }
        for (const { result, elements } of instruction.unrender) {
            for (const element of elements) {
                if (!(element["au"].controller.viewModel == this) || !result.message) {
                    continue;
                }
                const index = this.errors.indexOf(result.message);
                if (index < 0) {
                    continue;
                }
                this.errors.splice(index, 1);
            }
        }
        for (const { result, elements } of instruction.render) {
            if (result.valid || !result.message) {
                continue;
            }
            for (const element of elements) {
                if (!(element["au"].controller.viewModel == this)
                    || this.errors.indexOf(result.message) > -1) {
                    continue;
                }
                this.errors.push(result.message);
            }
        }
    }
    hasFocus() {
        this.focused = true;
    }
    doBlur() {
        return __awaiter(this, void 0, void 0, function* () {
            this.focused = false;
            setTimeout(() => __awaiter(this, void 0, void 0, function* () {
                isBlurCheck = true;
                this.blurCheckForMe = true;
                yield this.controller.validate();
                isBlurCheck = false;
                this.blurCheckForMe = false;
            }), 250);
        });
    }
    attached() {
        this.errorSub = this.eventAggregator.subscribe(`error:espalier:${this.controlid}`, (errorMessage) => this.errors.push(errorMessage));
    }
    detached() {
        this.errorSub.dispose();
    }
};
__decorate([
    bindable()
], EspalierInput.prototype, "controlid", void 0);
__decorate([
    bindable({ defaultBindingMode: bindingMode.twoWay })
], EspalierInput.prototype, "value", void 0);
__decorate([
    bindable()
], EspalierInput.prototype, "type", void 0);
__decorate([
    bindable()
], EspalierInput.prototype, "label", void 0);
EspalierInput = __decorate([
    customElement("esp-input"),
    inject(ValidationController, EventAggregator)
], EspalierInput);
export { EspalierInput };
