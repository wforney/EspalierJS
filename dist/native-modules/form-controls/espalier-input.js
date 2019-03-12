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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { bindable, customElement, bindingMode, inject } from "aurelia-framework";
import { ValidationController } from "aurelia-validation";
import { EventAggregator } from "aurelia-event-aggregator";
var isBlurCheck = false;
var EspalierInput = /** @class */ (function () {
    function EspalierInput(controller, eventAggregator) {
        this.controller = controller;
        this.eventAggregator = eventAggregator;
        this.focused = false;
        this.errors = [];
        this.blurCheckForMe = false;
        controller.addRenderer(this);
    }
    EspalierInput.prototype.focus = function () {
        this.input.focus();
    };
    EspalierInput.prototype.render = function (instruction) {
        if (isBlurCheck && !this.blurCheckForMe) {
            return;
        }
        for (var _i = 0, _a = instruction.unrender; _i < _a.length; _i++) {
            var _b = _a[_i], result = _b.result, elements = _b.elements;
            for (var _c = 0, elements_1 = elements; _c < elements_1.length; _c++) {
                var element = elements_1[_c];
                if (!(element["au"].controller.viewModel == this) || !result.message) {
                    continue;
                }
                var index = this.errors.indexOf(result.message);
                if (index < 0) {
                    continue;
                }
                this.errors.splice(index, 1);
            }
        }
        for (var _d = 0, _e = instruction.render; _d < _e.length; _d++) {
            var _f = _e[_d], result = _f.result, elements = _f.elements;
            if (result.valid || !result.message) {
                continue;
            }
            for (var _g = 0, elements_2 = elements; _g < elements_2.length; _g++) {
                var element = elements_2[_g];
                if (!(element["au"].controller.viewModel == this)
                    || this.errors.indexOf(result.message) > -1) {
                    continue;
                }
                this.errors.push(result.message);
            }
        }
    };
    EspalierInput.prototype.hasFocus = function () {
        this.focused = true;
    };
    EspalierInput.prototype.doBlur = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.focused = false;
                setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                isBlurCheck = true;
                                this.blurCheckForMe = true;
                                return [4 /*yield*/, this.controller.validate()];
                            case 1:
                                _a.sent();
                                isBlurCheck = false;
                                this.blurCheckForMe = false;
                                return [2 /*return*/];
                        }
                    });
                }); }, 250);
                return [2 /*return*/];
            });
        });
    };
    EspalierInput.prototype.attached = function () {
        var _this = this;
        this.errorSub = this.eventAggregator.subscribe("error:espalier:" + this.controlid, function (errorMessage) { return _this.errors.push(errorMessage); });
    };
    EspalierInput.prototype.detached = function () {
        this.errorSub.dispose();
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
    return EspalierInput;
}());
export { EspalierInput };
