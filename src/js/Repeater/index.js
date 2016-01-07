import common from "../espalier.common";
import DomNode from "../espalier.domnode";

const internals = new WeakMap();
const keys = {
    settings: "settings",
    stateField: "stateField"
};

export default class Repeater {
    constructor(args) {
        let stateField;
        let settings = {
            container: null,
            src: null,
            itemTemplate: null,
            pageSize: null,
            page: 1,
            filter: null,
            rendered: null,
            sortBy: "",
            sortOrder: "",
            stateFieldId: ""
        };

        common.extend(settings, args);

        if (!settings.src) {
            throw new Error("Please specify a src.");
        }

        if (!settings.itemTemplate) {
            throw new Error("Please specify an itemTemplate.");
        }

        const myInternals = new Map();
        myInternals.set(keys.settings, settings);

        if (settings.stateFieldId) {
            stateField = common.find(settings.stateFieldId)[0];
            myInternals.set(keys.stateField, stateField);
        }

        internals.set(this, myInternals);

        settings.container.on("click", "[repeater-action]", (control) => {
            let action = control.getAttribute("repeater-action");

            switch (action) {
                case "goto":
                    let newPage = parseInt(control.getAttribute("data-page"));
                    let knownPages = settings.src.pages(settings.pageSize);

                    if (newPage < 1 || (knownPages > 0 && newPage > knownPages)) {
                        return;
                    }

                    settings.page = newPage;

                    if (stateField) {
                        stateField.value = "";
                    }

                    this.render();
                    break;
                case "sort":
                    settings.page = 1;
                    let newSort = control.getAttribute("data-sort-on");
                    let node = new DomNode(control);

                    for (let existing of common.find(".sort-desc, .sort-asc")) {
                        let existingNode = new DomNode(existing);
                        existingNode.removeClass("sort-asc");
                        existingNode.removeClass("sort-desc");
                    }

                    if (settings.sortBy === newSort) {
                        if (settings.sortOrder === "desc") {
                            settings.sortBy = "";
                            settings.sortOrder = "";
                        } else {
                            settings.sortOrder = "desc";
                            node.addClass("sort-desc");
                        }
                    } else {
                        settings.sortOrder = "asc";
                        settings.sortBy = newSort;
                        node.addClass("sort-asc");
                    }

                    if (stateField) {
                        stateField.value = "";
                    }

                    this.render();
                    break;
            }
        });

        this.render();
    }

    filter(filter) {
        let settings = internals.get(this).get(keys.settings);

        let filterPromise = new Promise(resolve => {
            settings.filter = filter;
            settings.page = 1;

            let stateField = internals.get(this).get(keys.stateField);

            if (stateField) {
                stateField.value = "";
            }

            this.render().then(() => {
                resolve();
            });
        });

        return filterPromise;
    }

    update(src) {
        let settings = internals.get(this).get(keys.settings);

        let updatePromise = new Promise(resolve => {
            settings.src = src;
            settings.page = 1;

            let stateField = internals.get(this).get(keys.stateField);

            if (stateField) {
                stateField.value = "";
            }

            this.render().then(() => {
                resolve();
            })
        });

        return updatePromise;
    }

    render() {
        let settings = internals.get(this).get(keys.settings);
        let stateField = internals.get(this).get(keys.stateField);

        let navigation;

        if (stateField && stateField.value) {
            navigation = JSON.parse(stateField.value);
        } else {
            navigation = {
                page: settings.page,
                pageSize: settings.pageSize,
                filter: settings.filter,
                sortBy: settings.sortBy,
                sortOrder: settings.sortOrder
            }
        }

        let renderPromise = new Promise((resolve, reject) => {
            settings.src.load(navigation.page, navigation.pageSize, navigation.filter, navigation.sortBy, navigation.sortOrder)
                .then(items => {
                    let itemsHolder = common.find("[repeater-context=\"items\"]", settings.container);

                    if (itemsHolder.length > 0) {
                        itemsHolder = new DomNode(itemsHolder[0]);
                    } else {
                        itemsHolder = settings.container;
                    }

                    itemsHolder.clear();

                    for (let item of items) {
                        let renderedItem = settings.itemTemplate(item);
                        itemsHolder.append(renderedItem);
                    }

                    if (settings.rendered) {
                        settings.rendered({
                            page: navigation.page,
                            pages: settings.src.pages(navigation.pageSize),
                            pageSize: navigation.pageSize
                        });
                    }

                    if (stateField) {
                        settings.filter = navigation.filter;
                        stateField.value = JSON.stringify(navigation);
                    }

                    resolve();
                });
        });

        return renderPromise;
    }
};