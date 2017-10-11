import { EspalierConfig } from "./espalier-config";
import { TaskQueue } from "aurelia-framework";
import { IColumnDefinition } from "./column-definition";
import { HttpClient } from "aurelia-fetch-client";
import { IEspalierSettings } from "./espalier-settings";
import { PageInfo } from "./page-info";
import { TableButton } from "./table-button";
export { PageInfo } from "./page-info";
export declare class EspalierCustomElement<TRow> {
    private http;
    private taskQueue;
    private config;
    filter: string;
    loading: boolean;
    page: number;
    pages: PageInfo[];
    recordCount: number;
    records: TRow[];
    recordsFrom: number;
    recordsTo: number;
    sortColumn: IColumnDefinition<TRow>;
    tableContainer: HTMLDivElement;
    tableHeader: HTMLTableHeaderCellElement;
    filterShowing: boolean;
    tableBody: HTMLElement;
    pageSize: number;
    defaultFilter: string;
    url: string;
    settings: IEspalierSettings<TRow>;
    buttonColor: string;
    constructor(http: HttpClient, taskQueue: TaskQueue, config: EspalierConfig);
    goto(pageNumber: number): void;
    attached(): void;
    applyFilter(filter: string): Promise<any>;
    reload(): Promise<any>;
    protected sortBy(column: IColumnDefinition<TRow>): void;
    protected getButtons(rowData: any): TableButton[];
    protected buttonClicked(button: TableButton, record: any): void;
    protected openFilter(): void;
    protected closeFilter(): void;
    /**
     * Aurelia calls this when the settings are changed. Espalier figures out
     * if the settings are valid, then queues a task to load the grid.
     */
    protected settingsChanged(): void;
    protected getSortPropertyName(column: IColumnDefinition<TRow>): string;
    /**
     * Check if the user has specified a filter.
     */
    private filterIsNotEmpty();
    /**
     * Add url encoded SVG image styles for sort, filter, and close icons. Espalier
     * does it this way so the button color is customizable by the consumer.
     */
    private addButtonStyles();
    /**
     * Fetch a page of records from the server.
     */
    private fetch();
}
