# EspalierJS

Espalier JS is an easy-to-use grid component for Aurelia.

## How to install EspalierJS

EspalierJS is published as an NPM package, and can be added to Aurelia as a plugin.
To get up and running using EspalierJS, first install it from NPM:

```
$ npm install espalier-js
```

If you're using the [Aurelia CLI](http://aurelia.io/hub.html#/doc/article/aurelia/framework/latest/the-aurelia-cli) 
(and you should be!), add EspalierJS into your configuration. For the default
RequireJS Aurelia CLI configuration, add the following to your dependencies:

```
{
  "name": "espalier-js",
  "path": "../node_modules/espalier-js/dist/amd",
  "main": "index",
  "resources": [
    "**/*.{css,html}"
  ]
}
```

If you are using the Webpack Aurelia CLI configuration, add espalier-js to the ```ModuleDependenciesPlugin```
in your webpack.config.js as such:

```
new ModuleDependenciesPlugin({
  'aurelia-testing': [ './compile-spy', './view-spy' ],
  'aurelia-fetch-client': [ './aurelia-fetch-client' ],
  'espalier-js': [ './index' ]
})
```

Once Espalier is set up in your dependencies, register it as an Aurelia plugin in your application's main:

```
aurelia.use
  .standardConfiguration()
  .feature("resources")
  .plugin("espalier-js");
```

The EspalierJS grid can now be used by adding an ```<espalier url="{api to use}" settings.bind="gridSettings"></espalier>```
element to a page.

## How to set up a sweet pageable, sortable, filterable grid in Aurelia

For the most basic configuration for an Espalier grid, add an espalier element to your 
view, specify the API url it will fetch from, and bind it to a settings model in your
view.

In your HTML:

```
<espalier url="/my-api-endpoint" settings.bind="gridSettings"></espalier>
```

In your view model:

```
import { IEspalierSettings } from "espalier-js";

export class ViewModel {
  public filter: LookupsFilter;
  public gridSettings: IEspalierSettings<TRow>;

  public attached() {
    this.gridSettings = {
      columns: [
        { propertyName: "Name" }
      ]
    };
  }
}
```

## Configuring Espalier globally to know your API

Out of the box Espalier expects your API to accept the following parameters:

```{api endpoint}?Page=1&PageSize=10&SortOn=Name&SortOrder=asc```

The default sort order tokens are ```asc``` and ```desc```. These expectations
can all be globally configured. The easiest way to globally configure these
values is to import ```EspalierConfig``` into your app class, and set the configuration
to match your API. Because Aurelia dependency injection treats models such as these as
a singleton, the values you set in the app class will persist throughout your application. 

## ```EspalierConfig``` global configuration options

### defaultPageSize

Set the default page size that Espalier requests if you do not specifiy it on
an Espalier instance. The default is 20.

### pageParameterName

The parameter name indicating which page of results Espalier is requesting.
The default is "Page".

### pageSizeParameterName

The parameter name indicating the page size parameter name. The default is
"PageSize".

### sortOnParameterName

The parameter name that indicates which column to sort on. The default is "SortOn".

### sortOrderParameterName

The parameter name that indicates the sort order. The default is "SortOrder"

### descConst

Indicates the constant value that will be passed to the sort order parameter when
the user is requesting to sort in descending order. The default is "desc".

### ascConst

Indicates the constant value that will be passed to the sort order parameter when
the user is requesting to sort in ascending order. The default is "asc".

### buttonColor

This rgb(x,x,x) color to use for the sorting and filter buttons. Espalier has several 
SVG icons hard-coded into the script. It writes a CSS header with the button color 
specified. This defaults to "rgb(100,100,100)".

### getPage

The function that is used to parse a page of results from the response from the
server. Here you can customize how results from your server are parsed and sent
back to Espalier. The default is:

```
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
```

## Configuring an Espalier instance

Individual instances of Espalier can be configured both through binding on the element in
HTML, and via the more advanced IEspalierSettings<TRow> interface. The options that can be
bound in the HTML are:

### page-size

A number representing the number of records to fetch per page. This defaults to the value
set in the global configuration if none is specified. This value is not required.

### default-filter

The default filter to append to the query string in addition to paging and sorting parameters.
This value is only used if there is not an advanced filter in place. There is more on advanced
filtering later in this document. This value is not required.

### url

The URL Espalier will call (using the Aurelia Fetch Client) to retrieve records to display in
the grid. If you have configured your fetch client with a base URL, this is a relative path
to the API endpoint you wish to consume. This value is required.

### settings: IEspalierSettings<TRow>;


## Filtering an Espalier grid

To filter an Espalier grid, create a control that implements EspalierFilter.

```
import { EspalierFilter } from "espalier-js";
import { MyFilterModel } from "./my-filter-model";
import { customElement } from "aurelia-framework";

@customElement("my-filter")
export class LookupsFilter extends EspalierFilter {
  public container: HTMLFormElement;
  protected model: MyFilterModel = new MyFilterModel();

  protected get friendlyFilterDescription(): string {
    return this.model.friendlyDescription();
  }

  protected get filterAsQueryString(): string {
    return this.model.buildFilter();
  }

  protected clearFilter(): Promise<void> {
    return new Promise<void>((resolve) => {
      this.resetModel();
      resolve();
    });
  }

  private resetModel() {
    this.model.reset();
  }
}
```

Then import the filter control into the page with the Espalier grid, and bind
the filter to the grid settings:

```
<template>
  <require from="./my-filter"></require>
  <h2>Some Data</h2>
  <espalier url="/some-api" settings.bind="tableSettings"></espalier>
  <my-filter view-model.ref="filter"></my-filter>
</template>

```

```
import { IEspalierSettings } from "espalier-js";
import { IModel } from "./my-model";
import { MyFilter } from "./my-filter";

export class SomeData {
  public filter: MyFilter;
  public tableSettings: IEspalierSettings<IModel>;

  public attached() {
    this.tableSettings = {
      columns: [
        { propertyName: "Name" }
      ],
      filter: this.filter
    };
  }
}
```
