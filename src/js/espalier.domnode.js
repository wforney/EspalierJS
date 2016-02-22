import isString from "./helpers/is-string";
import addListener from "./helpers/add-listener";
import singleOrError from "./helpers/single-or-error";
import matches from "./helpers/matches";
import common from "./espalier.common";
import Repeater from "./Repeater";

let internals = new WeakMap();

//NOTE: http://krasimirtsonev.com/blog/article/Revealing-the-magic-how-to-properly-convert-HTML-string-to-a-DOM-element
let str2DOMElement = function (html) {
    let wrapMap = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        body: [0, "", ""],
        _default: [1, "<div>", "</div>"]
    };

    html = html.trim();
    wrapMap.optgroup = wrapMap.option;
    wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
    wrapMap.th = wrapMap.td;
    let match = /<\s*\w.*?>/g.exec(html);
    let parsedElements = document.createElement("div");

    if (match != null) {
        var tag = match[0].replace(/</g, '').replace(/>/g, '').split(' ')[0];
        if (tag.toLowerCase() === 'body') {
            var body = document.createElement("body");
            // keeping the attributes
            parsedElements.innerHTML = html.replace(/<body/g, '<div').replace(/<\/body>/g, '</div>');
            var attrs = parsedElements.firstChild.attributes;
            body.innerHTML = html;
            for (var i = 0; i < attrs.length; i++) {
                body.setAttribute(attrs[i].name, attrs[i].value);
            }
            return body;
        } else {
            var map = wrapMap[tag] || wrapMap._default;
            html = map[1] + html + map[2];
            parsedElements.innerHTML = html;
            // Descend through wrappers to the right content
            var j = map[0] + 1;
            while (j--) {
                parsedElements = parsedElements.lastChild;
            }
        }
    } else {
        parsedElements.innerHTML = html;
        parsedElements = parsedElements.lastChild;
    }
    return parsedElements;
}

export default class EspalierNode {
    constructor(node, root) {
        if (isString(node)) {
            try {
                let found = common.find(node, root);
                node = found[0];
            } catch (error) {
                node = str2DOMElement(node);
            }
        }

        node = singleOrError(node);
        internals.set(this, { node, originalDisplay: node.style.display });
    }

    getNode() {
        return internals.get(this).node;
    }

    append(stuff) {
        let node = this.getNode();

        if (isString(stuff)) {
            node.appendChild(str2DOMElement(stuff));
            return;
        }

        node.appendChild(stuff);
    }
    
    prepend(stuff) {
        let node = this.getNode();

        if (isString(stuff)) {
            node.insertBefore(str2DOMElement(stuff), node.firstChild);
            return;
        }

        node.insertBefore(stuff, node.firstChild);
    }

    clear() {
        this.getNode().innerHTML = "";
    }

    wrapIn(tag) {
        let node = this.getNode();
        let parent = node.parentNode;
        let wrapper = document.createElement(tag);
        parent.insertBefore(wrapper, node.nextSibling);
        wrapper.appendChild(node);

        return new EspalierNode(wrapper);
    }

    unwrap() {
        let node = this.getNode();
        let wrapper = node.parentNode;
        wrapper.parentNode.insertBefore(node, wrapper);
        wrapper.parentNode.removeChild(wrapper);
        return new EspalierNode(node);
    }

    closest(selector) {
        let node = this.getNode().parentNode;

        do {
            if (matches(node, selector)) {
                return node;
            }
        } while (node = node.parentNode);

        return null;
    }

    html(stuff) {
        this.getNode().innerHTML = "";
        this.append(stuff);
    }

    on(event, selector, func) {
        let node = this.getNode();

        addListener(node, event, (e) => {
            let target = e.target;

            while (target && target != node) {
                if (matches(target, selector)) {
                    func(target);
                }

                target = target.parentNode;
            }
        });
    }

    remove() {
        let node = this.getNode();

        if (node.parentNode) {
            node.parentNode.removeChild(node);
        }
    }

    addClass(className) {
        let node = this.getNode();

        if (node.classList) {
            node.classList.add(className);
        } else {
            node.className += ' ' + className;
        }
    }

    removeClass(className) {
        let node = this.getNode();

        if (node.classList) {
            node.classList.remove(className);
        } else {
            node.className = node.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
        }
    }

    repeater(args) {
        args.container = this;
        return new Repeater(args);
    }

    hide() {
        internals.get(this).node.style.display = "none";
    }

    show() {
        let settings = internals.get(this);
        settings.node.style.display = settings.originalDisplay;
    }
}