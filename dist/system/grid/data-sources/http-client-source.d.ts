import { HttpClient } from "aurelia-http-client";
import { IGridDataSource } from "./grid-data-source";
import { IEspalierPage } from "../espalier-page";
import { SortOrder } from "../enums";
export declare class HttpClientSource<TData> implements IGridDataSource<TData> {
    private url;
    private http;
    /**
     * The name of the query string parameter for the 1-based
     * page number to return.
     */
    pageParameterName: string;
    /**
     * The name of the query string parameter that specifies
     * the number of records to return.
     */
    pageSizeParameterName: string;
    /**
     * The name of the query string parameter that specifies
     * the name of the  column to sort on.
     */
    sortOnParameterName: string;
    /**
     * The name of the query string parameter that specified
     * the order to sort in, either ascending or descending.
     */
    sortOrderParameterName: string;
    /**
     * The constant value indicating a descending sort order.
     */
    descConst: string;
    /**
     * The constant value indicating an ascending sort order.
     */
    ascConst: string;
    constructor(url: string, http: HttpClient);
    GetPage(pageNumber: number, pageSize: number, sortColumn: string, sortOrder: SortOrder | undefined, filter: (applyTo: TData[]) => Promise<TData[]> | string[] | undefined): Promise<IEspalierPage<TData>>;
    private buildPagingQueryString;
}
