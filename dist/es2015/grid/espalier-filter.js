var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as clone from "clone";
/**
 * EspalierFilter is an abstract class that should be implemented
 * by a custom control that represents the filter for your grid.
 */
export class EspalierFilter {
    /**
     * Reset the filter to the default state and apply it to the grid.
     */
    reset() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.clearFilter()
                .then(() => {
                return this.applyFilter();
            });
        });
    }
    /**
     * Bind your action for applying the filter to this method. It applies
     * the filter generated from filterAsQueryString() to your grid, resets
     * the grid to the first page, clones and stores your current model for
     * the filter (so it is remembered next time your filter is opened), and
     * closes the filter.
     */
    applyFilter() {
        if (!this.espalier) {
            return Promise.resolve();
        }
        this.lastAppliedState = clone(this.model);
        const appliedFilters = this.appliedFilters;
        for (const appliedFilter of appliedFilters) {
            const definedRemove = appliedFilter.remove;
            appliedFilter.remove = () => {
                definedRemove();
                return this.applyFilter();
            };
        }
        return this.espalier.applyFilter(this.getFilter(), appliedFilters);
    }
    /**
     * Bind your action for canceling the filter to this method. It resets
     * the model to the last applied version of the filter, and closes the
     * filter.
     */
    cancel() {
        this.model = clone(this.lastAppliedState);
        this.espalier["closeFilter"]();
    }
}
