import EspalierNode from "./espalier.domnode";

let find = function (selector, root) {
    root = root ? root.querySelectorAll ? root : root.getNode() : document;
    return Array.from(root.querySelectorAll(selector));
};

//TODO: This is a temporary hack around removing jQuery and the .data() method.
//      Figure out a better way to resolve a control when submitting a request;
//      allowing a user to pass an Espalier Form could be a good alternative and
//      would better scope the controls.
let controls = new WeakMap();

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


let browserSupportsCSSProperty = function (propertyName) {
    let el = document.createElement('div');
    propertyName = propertyName.toLowerCase();

    if (el.style[propertyName] != undefined)
        return true;

    var propertyNameCapital = propertyName.charAt(0).toUpperCase() + propertyName.substr(1),
        domPrefixes = 'Webkit Moz ms O'.split(' ');

    for (var i = 0; i < domPrefixes.length; i++) {
        if (el.style[domPrefixes[i] + propertyNameCapital] != undefined)
            return true;
    }

    return false;
};

let isElement = function (toTest) {
    return (
        typeof HTMLElement === "object" ? toTest instanceof HTMLElement : //DOM2
            toTest && typeof toTest === "object" && toTest !== null && toTest.nodeType === 1 && typeof toTest.nodeName === "string"
        );
}

let body = new EspalierNode(find("body"));

export default {
    body: body,
    find,
    isElement,
    extend,
    controls,
    browserSupportsCSSProperty
};