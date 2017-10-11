"use strict";
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
     * Bind your action for applying the filter to this method. It applies
     * the filter generated from filterAsQueryString() to your grid, resets
     * the grid to the first page, clones and stores your current model for
     * the filter (so it is remembered next time your filter is opened), and
     * closes the filter.
     */
    EspalierFilter.prototype.applyFilter = function () {
        this.lastAppliedState = clone(this.model);
        return this.espalier.applyFilter(this.filterAsQueryString);
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
