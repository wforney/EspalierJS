import { SortOrder } from "./enums";
const viewMap = new Map();
const compiledViews = new Map();
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
viewMap.set("buttons-cell", `<template>
  <div>
<div if.bind="buttons.length == 1">
  <button repeat.for="button of buttons" class="espalier-button \${button.buttonClass}" title="\${button.title}" click.delegate="buttonClicked(button)">
    <i class="\${button.iconClass}"></i>
  </button>
</div>

<div if.bind="buttons.length > 1" class="dropdown">
  <button show.bind="!opened" click.delegate="openMenu()" class="btn btn-primary expand-caret" href="javascript: void(0);"
    title="Show actions" role="button" aria-haspopup="true"></button>
  <button show.bind="opened" click.delegate="closeMenu()" class="btn btn-danger close-button" href="javascript: void(0);" title="Hide actions"
    role="button" aria-haspopup="true"></button>
  <div id="buttons-menu" class="dropdown-menu">
    <a repeat.for="button of buttons" class="dropdown-item \${button.buttonClass}" title="\${button.title}" click.delegate="buttonClicked(button)">
      <i class="\${button.iconClass}"></i>
      \${button.title}
    </a>
  </div>
</div>
</div></template>`);
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
         * The root url to use when fetching a resource.
         */
        this.rootUrl = "";
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
    /**
     * Returns the view map. Espalier uses string-keyed cell templates
     * when rendering cells. It has four built-in template: "default",
     * "date", "time", and "date-time". You can override those here, or
     * add your own templates and specify them on a column definition
     * later.
     */
    get cellViews() {
        return viewMap;
    }
    getView(name) {
        if (compiledViews.has(name)) {
            return compiledViews.get(name);
        }
        return undefined;
    }
    setView(name, view) {
        compiledViews.set(name, view);
    }
    /**
     * Parse a response into an IEspalierPage. The default expects your
     * response to contain JSON in the following format:
     *
     * <pre><code>{<br />  TotalRecords: number, // Total number or records matching the current filter.<br />  Results: any[] // The records in the page.<br />}</code></pre>
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
    buildPagingQueryString(page, pageSize, sortPropertyName, sortOrder) {
        const queryParts = [
            `${this.pageParameterName}=${page}`,
            `${this.pageSizeParameterName}=${pageSize}`,
            `${this.sortOnParameterName}=${sortPropertyName}`,
            `${this.sortOrderParameterName}=${(sortOrder == SortOrder.Descending ? this.descConst : this.ascConst)}`
        ];
        return queryParts.join("&");
    }
}
