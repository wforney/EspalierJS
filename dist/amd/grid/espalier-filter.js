define(["require", "exports", "clone"], function (require, exports, clone) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
            var _this = this;
            return this.clearFilter()
                .then(function () {
                return _this.applyFilter();
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
            this.lastAppliedState = clone(this.model);
            return this.espalier.applyFilter(this.filterAsQueryString, this.friendlyFilterDescription);
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
});
