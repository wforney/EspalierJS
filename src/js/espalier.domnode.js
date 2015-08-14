import isString from "./helpers/is-string";
import addListener from "./helpers/add-listener";
import singleOrError from "./helpers/single-or-error";
import matches from "./helpers/matches";

let keys = {
    node: new Object()
};

export default class EspalierNode {
    constructor(node) {
        this._internals = new WeakMap();

        if (isString(node)) {
            let wrapper = document.createElement("div");
            wrapper.innerHTML = node;
            node = wrapper.firstChild;
        }

        node = singleOrError(node);

        this._internals.set(keys.node, node);
    }

    getNode() {
        return this._internals.get(keys.node);
    }

    append(stuff) {
        let node = this.getNode();

        if (isString(stuff)) {
            let wrapper = document.createElement("div");
            wrapper.innerHTML = stuff;

            for (let child of wrapper.childNodes) {
                node.appendChild(child);
            }
            return;
        }

        node.appendChild(stuff);
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
}