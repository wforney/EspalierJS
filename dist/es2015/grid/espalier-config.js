const viewMap = new Map();
viewMap.set("default", `<template>
  <div class="\${className}">
    <a if.bind="onClick" href="javascript: void(0);" click.delegate="onClick()" innerhtml.bind="data"></a>
    <span if.bind="!onClick" innerhtml.bind="data"></span>
  </div>
</template>`);
viewMap.set("date", `<template>
  <div class="\${className}">
    <a if.bind="onClick" href="javascript: void(0);" click.delegate="onClick()">
      \${data.date}
    </a>
    <span if.bind="!onClick">
      \${data.date}
    </span>
  </div>
</template>`);
viewMap.set("time", `<template>
  <div class="\${className}">
    <a if.bind="onClick" href="javascript: void(0);" click.delegate="onClick()">
      \${data.time}
    </a>
    <span if.bind="!onClick">
      \${data.time}
    </span>
  </div>
</template>`);
viewMap.set("date-time", `<template>
  <div class="\${className}">
    <a if.bind="onClick" href="javascript: void(0);" click.delegate="onClick()">
      \${data.date}<br />
      \${data.time}
    </a>
    <span if.bind="!onClick">
      \${data.date}<br />
      \${data.time}
    </span>
  </div>
</template>`);
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
        /**
         * The color to use for the sort and filter icons.
         */
        this.buttonColor = "rgb(100,100,100)";
    }
    get cellViews() {
        return viewMap;
    }
    /**
     * Parse a response into an IEspalierPage. The default expects your
     * response to contain JSON in the following format:
     *
     * <pre><code>{\n  TotalRecords: number, // Total number or records matching the current filter.\n  Results: any[] // The records in the page.\n}</code></pre>
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
