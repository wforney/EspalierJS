import isString from "./helpers/is-string";
import addListener from "./helpers/add-listener";
import singleOrError from "./helpers/single-or-error";
import matches from "./helpers/matches";
import common from "./espalier.common";

let keys = {
    node: new Object()
};

export default class EspalierNode {
    constructor(node) {
        this._internals = new WeakMap();

        if (isString(node)) {
            try {
                let found = common.find(node);
                node = found[0];
            } catch (error) {
                let wrapper = document.createElement("div");
                wrapper.innerHTML = node;
                node = wrapper.firstChild;
            }
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
}