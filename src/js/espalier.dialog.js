import core from "./espalier.core";
import common from "./espalier.common";

class Dialog {
    constructor(args) {
        this.settings = {
            element: undefined,
            buttons: []
        };

        $.extend(this.settings, args);

        if (!this.settings.element) {
            throw new Error("You must pass an element.");
        } else if (this.settings.element.length !== 1) {
            throw new Error("element must have exactly one root element.");
        }
    }

    show() {
        core.hideMainMessage();
        common.showVellum();
        let dialog = this.settings.element;
        dialog.css("position", "absolute");
        common.body.append(dialog);
        this.center();
        dialog.css("display", "none");

        dialog.velocity("transition.whirlIn", {
            duration: 450
        });

        core.addEventListener(dialog[0], "click", (event) => {
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
        var dialog = $(this.settings.element);
        dialog.velocity("transition.whirlOut", {
            duration: 150,
            complete: function () {
                dialog.remove();
                $("#notificationMessage").remove();

                if ($(".dialog").length == 0) {
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
        dialog.css("top", top);
    }
}

export default function (args) {
    return new Dialog(args);
}