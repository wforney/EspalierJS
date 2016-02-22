import RepeaterSource from "./RepeaterSource";
import core from "../espalier.core";

const internals = new WeakMap();

let ascending = function(a, b, fieldName, defaultValue) {
    let parts = fieldName.split(".");
    defaultValue = defaultValue ? defaultValue : "";

    for (let part of parts) {
        a = a[part];
        b = b[part];
    }

    if (a == null) {
        a = defaultValue;
    }

    if (b == null) {
        b = defaultValue;
    }

    if (a.toUpperCase) {
        a = a.toUpperCase();
    }

    if (b.toUpperCase) {
        b = b.toUpperCase();
    }

    if (a < b) {
        return -1;
    }

    if (a > b) {
        return 1;
    }

    return 0;
}

let descending = function(a, b, fieldName, defaultValue) {
    let parts = fieldName.split(".");
    defaultValue = defaultValue ? defaultValue : "";

    for (let part of parts) {
        a = a[part];
        b = b[part];
    }

    if (a == null) {
        a = defaultValue;
    }

    if (b == null) {
        b = defaultValue;
    }

    if (a.toUpperCase) {
        a = a.toUpperCase();
    }

    if (b.toUpperCase) {
        b = b.toUpperCase();
    }

    if (a < b) {
        return 1;
    }

    if (a > b) {
        return -1;
    }

    return 0;
}

export default class StaticSource extends RepeaterSource {
    constructor(data, filterCallback) {
        super();

        for (var i = 0; i < data.length; i++) {
            data[i]._initialIndex = i;
        }

        internals.set(this, {
            data,
            lastSort: "",
            lastOrder: "",
            filterCallback,
            appliedFilter: undefined
        });
    }

    load(page, pageSize, filter, sortOn, sortOrder) {
        let loadPromise = new Promise(resolve => {
            let settings = internals.get(this);
            let lastSort = settings.lastSort;
            let lastOrder = settings.lastOrder;

            if (!sortOn) {
                sortOn = "_initialIndex";
                sortOrder = "asc";
            }

            if (sortOn != lastSort || sortOrder != lastOrder) {
                settings.data = settings.data.sort((a, b) => {
                    switch (sortOrder) {
                        case "asc":
                            return ascending(a, b, sortOn);
                            break;
                        case "desc":
                            return descending(a, b, sortOn);
                            break;
                    }
                });

                settings.lastSort = sortOn;
                settings.lastOrder = sortOrder;
            }

            page = page && page > 0 ? page - 1 : 0;
            pageSize = pageSize && pageSize > 0 ? pageSize : 0;
            let start = pageSize > 0 ? page * pageSize : 0;

            if (filter) {
                settings.appliedFilter = filter;
                settings.filterCallback(filter, settings.data)
                    .then(filtered => {
                        settings.data = filtered;
                        let finish = start + (pageSize > 0 ? pageSize : settings.data.length);
                        resolve(settings.data.slice(start, finish));
                    });
            } else {
                let finish = start + (pageSize > 0 ? pageSize : settings.data.length);
                resolve(settings.data.slice(start, finish));
            }
        });

        return loadPromise;
    }

    pages(pageSize) {
        let count = Math.ceil(internals.get(this).data.length / pageSize);
        return count;
    }

    count() {
        return internals.get(this).data.length;
    }
}