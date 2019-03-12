import { ViewFactory } from "aurelia-framework";

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
}
