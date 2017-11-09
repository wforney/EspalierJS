var viewMap = new Map();
viewMap.set("default", "<template>\n  <div class=\"${className}\">\n    <a if.bind=\"onClick\" href=\"javascript: void(0);\" click.delegate=\"onClick()\" innerhtml.bind=\"data\"></a>\n    <span if.bind=\"!onClick\" innerhtml.bind=\"data\"></span>\n  </div>\n</template>");
viewMap.set("date", "<template>\n  <div class=\"${className}\">\n    <a if.bind=\"onClick\" href=\"javascript: void(0);\" click.delegate=\"onClick()\">\n      ${data.date}\n    </a>\n    <span if.bind=\"!onClick\">\n      ${data.date}\n    </span>\n  </div>\n</template>");
viewMap.set("time", "<template>\n  <div class=\"${className}\">\n    <a if.bind=\"onClick\" href=\"javascript: void(0);\" click.delegate=\"onClick()\">\n      ${data.time}\n    </a>\n    <span if.bind=\"!onClick\">\n      ${data.time}\n    </span>\n  </div>\n</template>");
viewMap.set("date-time", "<template>\n  <div class=\"${className}\">\n    <a if.bind=\"onClick\" href=\"javascript: void(0);\" click.delegate=\"onClick()\">\n      ${data.date}<br />\n      ${data.time}\n    </a>\n    <span if.bind=\"!onClick\">\n      ${data.date}<br />\n      ${data.time}\n    </span>\n  </div>\n</template>");
viewMap.set("buttons-cell", "<div>\n<div if.bind=\"buttons.length == 1\">\n  <button repeat.for=\"button of buttons\" class=\"espalier-button ${button.buttonClass}\" title=\"${button.title}\" click.delegate=\"buttonClicked(button)\">\n    <i class=\"${button.iconClass}\"></i>\n  </button>\n</div>\n\n<div if.bind=\"buttons.length > 1\" class=\"dropdown\">\n  <button show.bind=\"!opened\" click.delegate=\"openMenu()\" class=\"btn btn-primary expand-caret\" href=\"javascript: void(0);\"\n    title=\"Show actions\" role=\"button\" aria-haspopup=\"true\"></button>\n  <button show.bind=\"opened\" click.delegate=\"closeMenu()\" class=\"btn btn-danger close-button\" href=\"javascript: void(0);\" title=\"Hide actions\"\n    role=\"button\" aria-haspopup=\"true\"></button>\n  <div id=\"buttons-menu\" class=\"dropdown-menu\">\n    <a repeat.for=\"button of buttons\" class=\"dropdown-item ${button.buttonClass}\" title=\"${button.title}\" click.delegate=\"buttonClicked(button)\">\n      <i class=\"${button.iconClass}\"></i>\n      ${button.title}\n    </a>\n  </div>\n</div>\n</div>");
/**
 * Global configuration options for Espalier with sensible defaults.
 */
var EspalierConfig = /** @class */ (function () {
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
        /**
         * Returns the view map. Espalier uses string-keyed cell templates
         * when rendering cells. It has four built-in template: "default",
         * "date", "time", and "date-time". You can override those here, or
         * add your own templates and specify them on a column definition
         * later.
         */
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
     * <pre><code>{<br />  TotalRecords: number, // Total number or records matching the current filter.<br />  Results: any[] // The records in the page.<br />}</code></pre>
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
export { EspalierConfig };
