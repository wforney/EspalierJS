# Repeater

A repeater is a flexible way to display repeating data. It takes in a render function for
header, item and footer.

## How to use it

First, add a root element into your DOM somewhere:

```html
<div id="container-id"></div>
```

Second, create an Espalier element from a root container:

```javascript
let container = espalier.el("container-id");
```

Then call the repeater method:

```javascript
container.repeater({
  src: new StaticSource([ { x: "One"}, { x: "Two"}, { x: "Three"} ]),
  itemTemplate: function(item) { return `<strong>${item.x}</strong>` }
});
```

## Supported arguments

The repeater supports the following arguments:

### src

Required. The data source to use. It can be a StaticSource, an AJAXSource, or a custom source you develop.

### itemTemplate

Required. A template that renders a given item.

### headerTemplate

Nullable. A template that is rendered into your container before any items have rendered.

### footerTemplate

Nullable. A template that is rendered into your container after all items have rendered.

### pageSize

Nullable. The number of items to display per page.