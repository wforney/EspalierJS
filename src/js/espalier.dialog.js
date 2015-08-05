import core from "./espalier.core";
import common from "./espalier.common";
import EspalierNode from "./espalier.domnode";

class Dialog {
    constructor(args) {
        this.settings = {
            element: undefined,
            buttons: []
        };

        common.extend(this.settings, args);

        if (!this.settings.element) {
            throw new Error("You must pass an element.");
        }

        this.settings.element = new EspalierNode(this.settings.element);
    }

    show() {
        core.hideMainMessage();
        common.showVellum();
        let dialog = this.settings.element;
        dialog.node.style.position = "absolute";
        common.body.appendChild(dialog.node);
        this.center();
        dialog.node.style.display = "none";

        dialog.velocity("transition.whirlIn", {
            duration: 450
        });

        core.addEventListener(dialog.node, "click", (event) => {
            for (let button of this.settings.buttons) {
                //TODO: Maybe is a selector instead?
                if (button.id === event.target.id) {
                    button.handler(this);
                }
            }
        });

        return this;
    }

    hide() {
        var dialog = this.settings.element;
        dialog.velocity("transition.whirlOut", {
            duration: 150,
            complete: function () {
                dialog.remove();
                let message = common.find("#notificationMessage");
                message.parentNode.removeChild(message);

                if (common.find(".dialog").length == 0) {
                    common.hideVellum();
                }
            }
        });
        return this;
    }

    center() {
        let windowHeight = common.window.height();
        let dialog = this.settings.element;
        let scrollTop = common.window.scrollTop();
        let height = dialog.height();
        let top = (windowHeight / 2) - (height / 2) + scrollTop;
        top = top > 0 ? top : 0;
        dialog.style.top = top;
    }
}

export default function (args) {
    return new Dialog(args);
}