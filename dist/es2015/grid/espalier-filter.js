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
        return this.clearFilter()
            .then(() => {
            return this.applyFilter();
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
        return this.espalier.applyFilter(this.filterAsQueryString, appliedFilters);
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
