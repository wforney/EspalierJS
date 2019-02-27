import { EspalierCustomElement } from "./espalier";
import { IEspalierPage } from "./espalier-page";
import { ViewFactory } from "aurelia-framework";
import { SortOrder } from "./enums";

const viewMap = new Map<string, string>();
const compiledViews = new Map<string, ViewFactory>();

viewMap.set("default",
  `<template>
  <div class="\${className}">
    <a if.bind="onClick" href="javascript: void(0);" click.delegate="onClick()" innerhtml.bind="data"></a>
    <span if.bind="!onClick" innerhtml.bind="data"></span>
  </div>
</template>`);

viewMap.set("date",
  `<template>
  <div class="\${className}">
    <a if.bind="onClick" href="javascript: void(0);" click.delegate="onClick()">
      \${data.date}
    </a>
    <span if.bind="!onClick">
      \${data.date}
    </span>
  </div>
</template>`);

viewMap.set("time",
  `<template>
  <div class="\${className}">
    <a if.bind="onClick" href="javascript: void(0);" click.delegate="onClick()">
      \${data.time}
    </a>
    <span if.bind="!onClick">
      \${data.time}
    </span>
  </div>
</template>`);

viewMap.set("date-time",
  `<template>
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

viewMap.set("buttons-cell",
  `<template>
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
  /**
   * The default page size if none is specified.
   */
  public defaultPageSize: number = 20;

  /**
   * The root url to use when fetching a resource.
   */
  public rootUrl: string = "";

  /**
   * The name of the query string parameter for the 1-based
   * page number to return.
   */
  public pageParameterName = "Page";

  /**
   * The name of the query string parameter that specifies
   * the number of records to return.
   */
  public pageSizeParameterName = "PageSize";

  /**
   * The name of the query string parameter that specifies
   * the name of the  column to sort on.
   */
  public sortOnParameterName = "SortOn";

  /**
   * The name of the query string parameter that specified
   * the order to sort in, either ascending or descending.
   */
  public sortOrderParameterName = "SortOrder";

  /**
   * The constant value indicating a descending sort order.
   */
  public descConst = "desc";

  /**
   * The constant value indicating an ascending sort order.
   */
  public ascConst = "asc";

  /**
   * The color to use for the sort and filter icons.
   */
  public buttonColor: string = "rgb(100,100,100)";

  /**
   * Returns the view map. Espalier uses string-keyed cell templates
   * when rendering cells. It has four built-in template: "default",
   * "date", "time", and "date-time". You can override those here, or
   * add your own templates and specify them on a column definition
   * later.
   */
  public get cellViews(): Map<string, string> {
    return viewMap;
  }

  public getView(name: string): ViewFactory | undefined {
    if (compiledViews.has(name)) {
      return compiledViews.get(name);
    }

    return undefined;
  }

  public setView(name: string, view: ViewFactory) {
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
  public getPage(instance: EspalierCustomElement<any>, response: Response): Promise<IEspalierPage> {
    return response.json()
      .then((data: any) => {
        const page: IEspalierPage = {
          totalRecords: data.TotalRecords,
          records: data.Results,
          pageCount: Math.ceil(data.TotalRecords / instance.pageSize),
          currentPage: instance.page
        };

        return page;
      });
  }

  public buildPagingQueryString(page: number, pageSize: number, sortPropertyName: string, sortOrder: SortOrder | undefined): string {
    const queryParts = [
      `${this.pageParameterName}=${page}`,
      `${this.pageSizeParameterName}=${pageSize}`,
      `${this.sortOnParameterName}=${sortPropertyName}`,
      `${this.sortOrderParameterName}=${(sortOrder == SortOrder.Descending ? this.descConst : this.ascConst)}`
    ];

    return queryParts.join("&");
  }
}
