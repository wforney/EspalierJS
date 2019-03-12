"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var clone = require("clone");
/**
 * EspalierFilter is an abstract class that should be implemented
 * by a custom control that represents the filter for your grid.
 */
var EspalierFilter = /** @class */ (function () {
    function EspalierFilter() {
    }
    /**
     * Reset the filter to the default state and apply it to the grid.
     */
    EspalierFilter.prototype.reset = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.clearFilter()
                            .then(function () {
                            return _this.applyFilter();
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Bind your action for applying the filter to this method. It applies
     * the filter generated from filterAsQueryString() to your grid, resets
     * the grid to the first page, clones and stores your current model for
     * the filter (so it is remembered next time your filter is opened), and
     * closes the filter.
     */
    EspalierFilter.prototype.applyFilter = function () {
        var _this = this;
        if (!this.espalier) {
            return Promise.resolve();
        }
        this.lastAppliedState = clone(this.model);
        var appliedFilters = this.appliedFilters;
        var _loop_1 = function (appliedFilter) {
            var definedRemove = appliedFilter.remove;
            appliedFilter.remove = function () {
                definedRemove();
                return _this.applyFilter();
            };
        };
        for (var _i = 0, appliedFilters_1 = appliedFilters; _i < appliedFilters_1.length; _i++) {
            var appliedFilter = appliedFilters_1[_i];
            _loop_1(appliedFilter);
        }
        return this.espalier.applyFilter(this.getFilter(), appliedFilters);
    };
    /**
     * Bind your action for canceling the filter to this method. It resets
     * the model to the last applied version of the filter, and closes the
     * filter.
     */
    EspalierFilter.prototype.cancel = function () {
        this.model = clone(this.lastAppliedState);
        this.espalier["closeFilter"]();
    };
    return EspalierFilter;
}());
exports.EspalierFilter = EspalierFilter;
