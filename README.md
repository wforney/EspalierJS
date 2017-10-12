# EspalierJS

Espalier JS is an easy-to-use grid component for Aurelia.

## How to install EspalierJS

EspalierJS is published as an NPM package, and can be added to Aurelia as a plugin.
To get up and running using EspalierJS, first install it from NPM:

```
npm install espalier-js
```

If you're using the (Aurelia CLI)[http://aurelia.io/hub.html#/doc/article/aurelia/framework/latest/the-aurelia-cli] 
(and you should be!), add EspalierJS into your configuration. If you are using the default
RequireJS Aurelia CLI, add the following to your dependencies:

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

Then register EspalierJS as an Aurelia plugin in your application's main:

'''
aurelia.use
  .standardConfiguration()
  .feature("resources")
  .plugin("espalier-js");
'''

The EspalierJS grid can now be used by adding an ```<espalier url="{api to use}" settings.bind="gridSettings"></espalier>```
element to a page.

## How to set up a sweet, pageable, sortable, filterable grid in Aurelia

For the most basic configuration for an Espalier grid, add an espalier element to your 
view, specify the API url it will fetch from, and bind it to a settings model in your
view.

In your html:

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
