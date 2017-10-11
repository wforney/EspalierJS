/**
 * Global configuration options for Espalier with sensible defaults.
 */
export class EspalierConfig {
    constructor() {
        /**
         * The default page size if none is specified.
         */
        this.defaultPageSize = 20;
        /**
         * The name of the query string parameter for the 1-based
         * page number to return.
         */
        this.pageParameterName = "Page";
        /**
         * The name of the query string parameter that specifies
         * the number of records to return.
         */
        this.pageSizeParameterName = "PageSize";
        /**
         * The name of the query string parameter that specifies
         * the name of the  column to sort on.
         */
        this.sortOnParameterName = "SortOn";
        /**
         * The name of the query string parameter that specified
         * the order to sort in, either ascending or descending.
         */
        this.sortOrderParameterName = "SortOrder";
        /**
         * The constant value indicating a descending sort order.
         */
        this.descConst = "desc";
        /**
         * The constant value indicating an ascending sort order.
         */
        this.ascConst = "asc";
    }
    /**
     * Parse a response into an IEspalierPage. The default expects your
     * response to contain JSON in the following format:
     * {
     *   TotalRecords: number, // Total number or records matching the current filter.
     *   Results: any[] // The records in the page.
     * }
     * @param instance The Espalier instance to get a page for.
     * @param response The response from the Aurelia Fetch Client call to your API.
     */
    getPage(instance, response) {
        return response.json()
            .then((data) => {
            const page = {
                totalRecords: data.TotalRecords,
                records: data.Results,
                pageCount: Math.ceil(data.TotalRecords / instance.pageSize),
                currentPage: instance.page
            };
            return page;
        });
    }
}
