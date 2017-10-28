import { EspalierCustomElement } from "./espalier";
import * as clone from "clone";

export interface IFilterToken {
  description: string;
  remove: () => void;
}

/**
 * EspalierFilter is an abstract class that should be implemented
 * by a custom control that represents the filter for your grid.
 */
export abstract class EspalierFilter {
  public abstract container: HTMLElement;
  protected abstract model: any;
  private espalier: EspalierCustomElement<any>;
  private lastAppliedState: any;

  /**
   * Return a query string that will be appended to the query string
   * Espalier generates for paging and sorting.
   */
  protected abstract get filterAsQueryString(): string;

  /**
   * Return an array of the currently applied filters with a description
   * of what the filter is and a method of removing the filter.
   */
  protected abstract get appliedFilters(): IFilterToken[];

  /**
   * Reset the filter to the default state and apply it to the grid.
   */
  public reset(): Promise<any> {
    return this.clearFilter()
      .then(() => {
        return this.applyFilter();
      });
  }

  /**
   * The user would like to clear the filter. Reset the filter model to
   * it's default state. It will be applied once that is done.
   */
  protected abstract clearFilter(): Promise<void>;

  /**
   * Bind your action for applying the filter to this method. It applies
   * the filter generated from filterAsQueryString() to your grid, resets
   * the grid to the first page, clones and stores your current model for
   * the filter (so it is remembered next time your filter is opened), and
   * closes the filter.
   */
  protected applyFilter(): Promise<any> {
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
  protected cancel(): void {
    this.model = clone(this.lastAppliedState);
    this.espalier["closeFilter"]();
  }
}
