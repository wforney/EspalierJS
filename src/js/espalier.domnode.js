import common from "./espalier.common";

let parser = new DOMParser();
let keys = {
    node: new Object()
};

export default class EspalierNode {
    constructor(node) {
        this._internals = new WeakMap();

        if (common.isString(node)) {
            node = common.find("body", parser.parseFromString(node, "text/html"))[0].firstChild;
        }

        node = common.singleOrError(node);

        this._internals.set(keys.node, node);
    }

    get node() {
        return this._internals.get(keys.node);
    }

    append(stuff) {
        let node = this._internals.get(keys.node);

        if (common.isString(stuff)) {
            stuff = common.find("body", parser.parseFromString(stuff, "text/html"))[0];

            for (let child of stuff.childNodes) {
                node.appendChild(child);
            }
            return;
        }

        node.appendChild(stuff);
    }

    html(stuff) {
        this.node.innerHTML = "";
        this.append(stuff);
    }

    on(event, selector, func) {
        let node = this.node;

        common.addEventListener(node, event, (e) => {
            let target = e.target;

            while (target && target != node) {
                if (common.matches(target, selector)) {
                    func(target);
                }

                target = target.parentNode;
            }
        })
    }

    remove() {
        this.node.parentNode.removeChild(this.node);
    }
}