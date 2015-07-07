import core from "./espalier.core";
import common from "./espalier.common";

class Dialog {
    constructor(args) {
        this.settings = {
            element: undefined,
            dialogClass: "espalier-dialog",
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
        var height, scrollTop, top, windowHeight, dialog;
        core.hideMainMessage();
        common.showVellum();
        windowHeight = common.window.height();
        dialog = this.settings.element;

        dialog.addClass(this.settings.dialogClass);
        dialog.css("position", "absolute");
        $("a, button, input, select, textarea").attr("tabindex", "-1");

        common.body.append(dialog);

        scrollTop = common.window.scrollTop();

        height = dialog.height();
        top = (windowHeight / 2) - (height / 2) + scrollTop;
        top = top > 0 ? top : 0;
        dialog.css("top", top);
        $(":focus").blur();
        $(".focus", dialog).first().focus();

        dialog.css("display", "none");

        dialog.velocity("transition.whirlIn", {
            duration: 450
        });

        this.settings.buttons.forEach(button => {
            $("#" + button.name, dialog).click(() => {
                button.handler(this);
            });
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
}

export default function (args) {
    return new Dialog(args);
}