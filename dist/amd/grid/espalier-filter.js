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
            return this.espalier.applyFilter(this.filterAsQueryString, appliedFilters);
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
