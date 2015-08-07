import EspalierNode from "./espalier.domnode";

let find = function (selector, root) {
    root = root ? root : document;
    return Array.from(root.querySelectorAll(selector));
};

let extend = function (out) {
    out = out || {};

    for (var i = 1; i < arguments.length; i++) {
        if (!arguments[i])
            continue;

        for (var key in arguments[i]) {
            if (arguments[i].hasOwnProperty(key))
                out[key] = arguments[i][key];
        }
    }

    return out;
};

let body = new EspalierNode(find("body"));

export default {
    body: body,
    window: window,
    showVellum: function () {
        if (find(".vellum").length > 0) {
            return;
        }

        body.append("<div class=\"vellum\" />");
    },
    hideVellum: function () {
        let vellum = find(".vellum");

        if (vellum.length > 0) {
            vellum[0].parentNode.removeChild(vellum[0]);
        }
    },
    find,
    extend
};