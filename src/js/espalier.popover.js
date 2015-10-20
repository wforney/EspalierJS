import core from "./espalier.core";
import config from "./config/index";
import common from "./espalier.common";
import EspalierNode from "./espalier.domnode";

function reposition(obj) {
    let pos = obj.settings.position;
    let popover = obj.settings.element;
    popover.addClass("popover-" + pos);
}

function isDescendant(parent, child) {
    let node = child.parentNode;
    while (node != null) {
        if (node == parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}

function copyPositionalData(fromNode, toNode){
    let fromCss = fromNode.style.cssFloat;
    let fromTop = fromNode.style.top;
    let fromBottom = fromNode.style.bottom;
    let fromLeft = fromNode.style.right;
    let fromRight = fromNode.style.left;
            
    toNode.style.cssFloat = fromCss;
    toNode.style.top = fromTop;
    toNode.style.bottom = fromBottom;
    toNode.style.left = fromLeft;
    toNode.style.right = fromRight;
}

export default class Popover {
    constructor(args) {
        this.settings = {
            element: undefined,
            position: undefined,
            parent: undefined
        };

        common.extend(this.settings, args);
        this.hideEventHandler = undefined;
        this.isPoppedUp = false;

        if (!this.settings.element) {
            throw new Error("You must pass an element.");
        }

        if (!this.settings.parent) {
            throw new Error("You must pass a parent element.");
        }
        this.position = this.position === undefined ? "bottom-right" : this.position;
        this.settings.element = new EspalierNode(this.settings.element);
        this.settings.parent = new EspalierNode(this.settings.parent);
    }

    show() {
        let popoverNode = this.settings.element;
        let parentNode = this.settings.parent;

        if (parentNode.getNode().parentNode.classList.contains('popover-wrapper')) {
            return this;
        }
        let wrapperNode = parentNode.wrapIn("span");
        copyPositionalData(parentNode.getNode(), wrapperNode.getNode());
        
        if (this.settings.hideEventHandler === undefined) {
            core.hideMainMessage();
            wrapperNode.append(popoverNode.getNode());
            wrapperNode.addClass("popover-wrapper");
            
            reposition(this);

            popoverNode.getNode().style.visibility = "visible";
            popoverNode.addClass("popover");

            this.hideEventHandler = core.addEventListener(document, "click", (event) => {
                let target = event.target;
                let shouldKeep = isDescendant(wrapperNode.getNode(), target)
                if (!shouldKeep && this.isPoppedUp && target !== wrapperNode.getNode()) {
                    this.hide();
                }
                //this clicks through the first time, ignore that one. (race issue?)
                this.isPoppedUp = true;
            });

        }

        return this;
    }

    hide() {
        var popover = this.settings.element;
        var parent = this.settings.parent;
        
        popover.getNode().style.visibility = "none";
        parent.unwrap();
        
        if (this.hideEventHandler !== undefined) {
            document.removeEventListener("click", this.hideEventHandler, false);
        }
        return this;
    }
}