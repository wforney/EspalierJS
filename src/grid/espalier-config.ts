import { EspalierCustomElement } from "./espalier";
import { IEspalierPage } from "./espalier-page";

const viewMap = new Map<string, string>();

viewMap.set("default",
  `<template>
  <div class="\${className}">
    <a if.bind="onClick" href="javascript: void(0);" click.delegate="onClick()">
      \${data}
    </a>
    <span if.bind="!onClick">
      \${data}
    </span>
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

/**
 * Global configuration options for Espalier with sensible defaults.
 */
export class EspalierConfig {
  /**
   * The default page size if none is specified.
   */
  public defaultPageSize: number = 20;

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

  public get cellViews(): Map<string, string> {
    return viewMap;
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
}
