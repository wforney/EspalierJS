System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var viewMap, EspalierConfig;
    return {
        setters: [],
        execute: function () {
            viewMap = new Map();
            viewMap.set("default", "<template>\n  <div class=\"${className}\">\n    <a if.bind=\"onClick\" href=\"javascript: void(0);\" click.delegate=\"onClick()\" innerhtml.bind=\"data\"></a>\n    <span if.bind=\"!onClick\" innerhtml.bind=\"data\"></span>\n  </div>\n</template>");
            viewMap.set("date", "<template>\n  <div class=\"${className}\">\n    <a if.bind=\"onClick\" href=\"javascript: void(0);\" click.delegate=\"onClick()\">\n      ${data.date}\n    </a>\n    <span if.bind=\"!onClick\">\n      ${data.date}\n    </span>\n  </div>\n</template>");
            viewMap.set("time", "<template>\n  <div class=\"${className}\">\n    <a if.bind=\"onClick\" href=\"javascript: void(0);\" click.delegate=\"onClick()\">\n      ${data.time}\n    </a>\n    <span if.bind=\"!onClick\">\n      ${data.time}\n    </span>\n  </div>\n</template>");
            viewMap.set("date-time", "<template>\n  <div class=\"${className}\">\n    <a if.bind=\"onClick\" href=\"javascript: void(0);\" click.delegate=\"onClick()\">\n      ${data.date}<br />\n      ${data.time}\n    </a>\n    <span if.bind=\"!onClick\">\n      ${data.date}<br />\n      ${data.time}\n    </span>\n  </div>\n</template>");
            /**
             * Global configuration options for Espalier with sensible defaults.
             */
            EspalierConfig = /** @class */ (function () {
                function EspalierConfig() {
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
                Object.defineProperty(EspalierConfig.prototype, "cellViews", {
                    get: function () {
                        return viewMap;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 * Parse a response into an IEspalierPage. The default expects your
                 * response to contain JSON in the following format:
                 *
                 * <pre><code>{\n  TotalRecords: number, // Total number or records matching the current filter.\n  Results: any[] // The records in the page.\n}</code></pre>
                 * @param instance The Espalier instance to get a page for.
                 * @param response The response from the Aurelia Fetch Client call to your API.
                 */
                EspalierConfig.prototype.getPage = function (instance, response) {
                    return response.json()
                        .then(function (data) {
                        var page = {
                            totalRecords: data.TotalRecords,
                            records: data.Results,
                            pageCount: Math.ceil(data.TotalRecords / instance.pageSize),
                            currentPage: instance.page
                        };
                        return page;
                    });
                };
                return EspalierConfig;
            }());
            exports_1("EspalierConfig", EspalierConfig);
        }
    };
});
