import { EspalierCustomElement } from "./espalier";
import { IEspalierPage } from "./espalier-page";
/**
 * Global configuration options for Espalier with sensible defaults.
 */
export declare class EspalierConfig {
    /**
     * The default page size if none is specified.
     */
    defaultPageSize: number;
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
    /**
     * The color to use for the sort and filter icons.
     */
    buttonColor: string;
    /**
     * Returns the view map. Espalier uses string-keyed cell templates
     * when rendering cells. It has four built-in template: "default",
     * "date", "time", and "date-time". You can override those here, or
     * add your own templates and specify them on a column definition
     * later.
     */
    readonly cellViews: Map<string, string>;
    /**
     * Parse a response into an IEspalierPage. The default expects your
     * response to contain JSON in the following format:
     *
     * <pre><code>{<br />  TotalRecords: number, // Total number or records matching the current filter.<br />  Results: any[] // The records in the page.<br />}</code></pre>
     * @param instance The Espalier instance to get a page for.
     * @param response The response from the Aurelia Fetch Client call to your API.
     */
    getPage(instance: EspalierCustomElement<any>, response: Response): Promise<IEspalierPage>;
}
