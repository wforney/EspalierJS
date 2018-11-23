import { EspalierConfig } from "./espalier-config";
import { TaskQueue, ViewCompiler, ViewResources } from "aurelia-framework";
import { IColumnDefinition } from "./column-definition";
import { HttpClient } from "aurelia-fetch-client";
import { IEspalierSettings } from "./espalier-settings";
import { PageInfo } from "./page-info";
import { ITableButton } from "./table-button";
export { PageInfo } from "./page-info";
import { IFilterToken } from "./espalier-filter";
/**
 * Espalier is a custom element build for the Aurelia framework that
 * makes it simple to work with server-side page-able, sort-able
 * datasets.
 */
export declare class EspalierCustomElement<TRow> {
    private http;
    private taskQueue;
    private config;
    private viewCompiler;
    private viewResources;
    /**
     * The current page of records Espalier is displaying.
     */
    records: TRow[];
    /**
     * The current page the grid is on.
     */
    page: number;
    /**
     * The number of records to fetch per page.
     */
    pageSize: number;
    /**
     * The default filter if one is not otherwise specified.
     */
    defaultFilter: string;
    /**
     * The URL of the API endpoint to interact with.
     */
    url: string;
    /**
     * The settings for this Espalier instance.
     */
    settings: IEspalierSettings<TRow>;
    protected recordCount: number;
    protected filter: string;
    protected loading: boolean;
    protected pages: PageInfo[];
    protected recordsFrom: number;
    protected recordsTo: number;
    protected sortColumn: IColumnDefinition<TRow>;
    protected tableContainer: HTMLDivElement;
    protected tableHeader: HTMLTableHeaderCellElement;
    protected filterShowing: boolean;
    protected tableBody: HTMLElement;
    protected appliedFilters: IFilterToken[];
    /**
     * Create a new instance of Espalier.
     * @param http The Aurelia Fetch Client HttpClient to use.
     * @param taskQueue The Aurelia TaskQueue.
     * @param config Global configuration for Espalier.
     */
    constructor(http: HttpClient, taskQueue: TaskQueue, config: EspalierConfig, viewCompiler: ViewCompiler, viewResources: ViewResources);
    /**
     * The Aurelia attached lifecycle event.
     */
    attached(): void;
    /**
     * Fetches records that match the filter, goes to the first page, and loads the first page into the grid.
     * @param filter A build-out query string to be appenended to any sorting and paging query parameters.
     */
    applyFilter(filter: string, appliedFilters: IFilterToken[]): Promise<any>;
    /**
     * Reset the filter back to the default specified for this Espalier
     * instance.
     */
    clearFilter(): Promise<any>;
    /**
     * Fetch the current page and load it into the grid.
     */
    reload(): Promise<any>;
    /**
     * Fetches records on the given page number and loads them into the grid.
     * @param pageNumber The page number to fetch.
     */
    goto(pageNumber: number): Promise<any>;
    /**
     * Sort by a given column. It toggles through Ascending > Descending > Not sorted on
     * @param column The column to sort on.
     */
    protected sortBy(column: IColumnDefinition<TRow>): Promise<any>;
    /**
     * Used to figure out which buttons to show.
     * @param record Calculate which buttons should be available for the given record.
     */
    protected getButtons(record: TRow): ITableButton<TRow>[];
    /**
     * Handles the button click event of a table button in a row.
     * @param button The TableButton that was clicked.
     * @param record The record associated with the row the button is in.
     */
    protected buttonClicked(button: ITableButton<TRow>, record: TRow): void;
    /**
     * Open the filter if this instance has one.
     */
    protected openFilter(): void;
    /**
     * Close the filter if it's open.
     */
    protected closeFilter(): void;
    /**
     * Aurelia calls this when the settings are changed. Espalier figures out
     * if the settings are valid, then queues a task to load the grid.
     */
    protected settingsChanged(): void;
    /**
     * Figure out out the sort property name of a given column.
     * @param column The column to figure out the sort property name of.
     */
    protected getSortPropertyName(column: IColumnDefinition<TRow>): string;
    /**
     * Check if the user has specified a filter.
     */
    private filterIsNotEmpty;
    /**
     * Add url encoded SVG image styles for sort, filter, and close icons. Espalier
     * does it this way so the button color is customizable by the consumer.
     */
    private addButtonStyles;
    /**
     * Fetch a page of records from the server.
     */
    private fetch;
}
