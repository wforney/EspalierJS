/**
 * A token representing a filter that has been applied to the grid
 * with a method of removing that individual piece of the filter.
 */
export interface IFilterToken {
    /**
     * A description of the filter.
     */
    description: string;
    /**
     * Remove the filter. Espalier will reload the grid after this method
     * is called.
     */
    remove: () => void;
}
/**
 * EspalierFilter is an abstract class that should be implemented
 * by a custom control that represents the filter for your grid.
 */
export declare abstract class EspalierFilter {
    /**
     * The HTML element that contains the user interface for the filter.
     * Espalier will open this when the filter button is clicked in the
     * top-right of the grid.
     */
    abstract container: HTMLElement;
    /**
     * The model backing the filter data. EspalierFilter clones the
     * model to maintain state between events.
     */
    protected abstract model: any;
    private espalier;
    private lastAppliedState;
    /**
     * Return a query string that will be appended to the query string
     * Espalier generates for paging and sorting.
     */
    protected readonly abstract filterAsQueryString: string;
    /**
     * Return an array of the currently applied filters with a description
     * of what the filter is and a method of removing the filter.
     */
    protected readonly abstract appliedFilters: IFilterToken[];
    /**
     * Reset the filter to the default state and apply it to the grid.
     */
    reset(): Promise<any>;
    /**
     * Bind your action for applying the filter to this method. It applies
     * the filter generated from filterAsQueryString() to your grid, resets
     * the grid to the first page, clones and stores your current model for
     * the filter (so it is remembered next time your filter is opened), and
     * closes the filter.
     */
    applyFilter(): Promise<any>;
    /**
     * The user would like to clear the filter. Reset the filter model to
     * it's default state. It will be applied once that is done.
     */
    protected abstract clearFilter(): Promise<void>;
    /**
     * Bind your action for canceling the filter to this method. It resets
     * the model to the last applied version of the filter, and closes the
     * filter.
     */
    protected cancel(): void;
}
