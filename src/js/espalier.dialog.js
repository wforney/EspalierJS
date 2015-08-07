import core from "./espalier.core";
import config from "./config/index";
import common from "./espalier.common";
import EspalierNode from "./espalier.domnode";

let center = function (dialog) {
    let windowHeight = common.window.innerHeight;
    let scrollTop = common.window.scrollY;
    let height = dialog.offsetHeight;
    let top = (windowHeight / 2) - (height / 2) + scrollTop;
    top = top > 0 ? top : 0;
    dialog.style.top = top + "px";
};

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
        let dialog = this.settings.element.getNode();

        dialog.style.position = "absolute";
        common.body.append(dialog);
        center(dialog);
        dialog.style.display = "none";

        config.showDialogAnimation(dialog);

        core.addEventListener(dialog, "click", (event) => {
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
        config.hideDialogAnimation(dialog);

        if (common.find(".dialog").length == 0) {
            common.hideVellum();
        }

        return this;
    }
}

export default function (args) {
    return new Dialog(args);
}