let find = function (selector, root) {
    root = root ? root : document;
    return root.querySelectorAll(selector);
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

let addEventListener = function (el, eventName, handler) {
    if (el.addEventListener) {
        el.addEventListener(eventName, handler);
    } else {
        el.attachEvent('on' + eventName, function () {
            handler.call(el);
        });
    }
};

let isString = function (toTest) {
    return typeof toTest === 'string' || toTest instanceof String;
};

let singleOrError = (val) => {
    if (val.nodeName) {
        return val;
    }

    if (val[0].nodeName) {
        return val[0];
    }

    throw new Error("This was not a single node.");
};

let matches = function (el, selector) {
    var _matches = (el.matches || el.matchesSelector || el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector);

    if (_matches) {
        return _matches.call(el, selector);
    } else {
        var nodes = el.parentNode.querySelectorAll(selector);
        for (var i = nodes.length; i--;) {
            if (nodes[i] === el)
                return true;
        }
        return false;
    }
};

let body = find("body");

export default {
    body: body,
    window: window,
    showVellum: function () {
        if (find(".espalier-vellum").length > 0) {
            return;
        }

        body.append("<div class=\"vellum\" />");
    },
    hideVellum: function () {
        let vellum = find(".espalier-vellum");

        if (vellum) {
            vellum.parentNode.removeChild(vellum);
        }
    },
    find,
    extend,
    addEventListener,
    isString,
    singleOrError,
    matches
};