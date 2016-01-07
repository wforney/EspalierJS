import common from "../espalier.common";
import core from "../espalier.core";
import RepeaterSource from "./RepeaterSource"

let internals = new WeakMap();

export default class AJAXSource extends RepeaterSource {
    constructor(args) {
        super();

        let settings = {
            url: "",
            count: 0,
            postProcess: null
        };

        common.extend(settings, args);

        if (!settings.url) {
            throw new Error("Please specify a url.");
        }

        internals.set(this, settings);
    }

    load(page, pageSize, filter, sortOn, sortOrder) {
        let settings = internals.get(this);

        let loadPromise = new Promise(resolve => {
            core.sendRequest({
                url: settings.url,
                type: "POST",
                data: {
                    Page: page,
                    PageSize: pageSize,
                    Criteria: filter,
                    SortOn: sortOn,
                    SortOrder: sortOrder
                }
            }).then(result => {
                settings.count = result.data.total;

                if (settings.postProcess) {
                    result.data.records = settings.postProcess(result.data.records);
                }

                resolve(result.data.records);
            });
        });

        return loadPromise;
    }

    pages(pageSize) {
        let settings = internals.get(this);
        return Math.ceil(settings.count / pageSize);
    }
}