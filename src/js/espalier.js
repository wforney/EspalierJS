import core from "./espalier.core";
import validation from "./espalier.validation";
import messageFactory from "./espalier.messageFactory";
import waitScreen from "./espalier.waitscreen";
import tables from "./espalier.tables";

var espalier = {
    showWarning: core.showWarning,
    showInfo: core.showInfo,
    sendRequest: core.sendRequest,
    table: tables.create,
    wire: function (form) {
        form = $(form);
        form.attr("novalidate", "");

        form.submit(function (ev) {
            var invalid = false;

            $.each($("input, textarea, select", form), function (index, control) {
                control = $(control);
                var validations = control.data("validations");
                var errors = [];

                $.each(validations, function (vIndex, v) {
                    if (v.invalid(control)) {
                        errors.push(v.message);
                    }
                });

                if (errors.length > 0) {
                    invalid = true;
                    control.data("message").show({
                        message: errors,
                        messageType: messageFactory.messageType.Error
                    });
                }
            });

            if (invalid) {
                ev.preventDefault();
            }
        });

        $.each($("input, textarea, select", form), function (index, control) {
            var lowerCaseId = control.id.toLowerCase();
            control = $(control);
            var group;
            var validations = [];

            switch (control.attr("type")) {
                case "checkbox":
                    group = control.closest(".checkbox");
                    break;
                case "email":
                    validations.push(validation.email);
                    group = control.closest(".form-group");
                    break;
                case "date":
                    validations.push(validation.date);
                    group = control.closest(".form-group");
                    if (control.datepicker) {
                        control.datepicker().attr("type", "text");
                    }
                    break;
                default:
                    group = control.closest(".form-group");
                    break;
            }

            var controlMessage = messageFactory.create({
                attachTo: group,
                messageAttachment: messageFactory.messageAttachment.Flow,
                onRemoved: function () {
                    group.removeClass("has-error");
                },
                onAdded: function () {
                    group.addClass("has-error");
                    group.velocity("callout.tada", {
                        duration: 500
                    });
                }
            });

            if (control.attr("required")) {
                validations.push(validation.required);
                group.addClass("required");
            }

            control.data("message", controlMessage);
            control.data("validations", validations);
            control.attr(lowerCaseId, "");
        });
    },
    showWaitScreen: waitScreen.show,
    hideWaitScreen: waitScreen.hide,
    shortDate: core.shortDate,
    shortTime: core.shortTime,
    publish: core.publish,
    parseISODate: core.parseISODate,
    subscribe: core.subscribe
};

export default espalier;