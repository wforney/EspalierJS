import core from "./espalier.core";
import validation from "./espalier.validation";
import messageFactory from "./espalier.messageFactory";

class FormControl {
    constructor(control, validations) {
        var lowerCaseId = control.id.toLowerCase();

        if (!lowerCaseId) {
            throw new Error("Elements must have an Id to be properly wired to an Espalier form control.");
        }

        this.control = control;
        var group;

        switch (control.getAttribute("type")) {
            case "checkbox":
                group = core.closest(control, ".checkbox");
                break;
            case "email":
                validations.push(validation.email);
                group = core.closest(control, ".form-group");
                break;
            case "date":
                validations.push(validation.date);
                group = core.closest(control, ".form-group");

                if (control.datepicker) {
                    control.datepicker().attr("type", "text");
                }
                break;
            default:
                group = core.closest(control, ".form-group");
                break;
        }

        this.message = messageFactory.create({
            attachTo: group,
            messageAttachment: messageFactory.messageAttachment.Flow,
            onRemoved: function () {
                core.removeClass(group, "has-error");
            },
            onAdded: function () {
                core.addClass(group, "has-error");
                //TODO: Get rid of jQuery
                $(group).velocity("callout.tada", {
                    duration: 500
                });
            }
        });

        if (control.required || control.getAttribute("required")) {
            validations.push(validation.required);
            core.addClass(group, "required");
        }

        control.setAttribute(lowerCaseId, "");
    }
}

export default function (control) {
    let validations = [];
    let formControl = new FormControl(control, validations);

    formControl.validate = function () {
        let errors = [];

        if (validations) {
            for (let validation of validations) {
                if (validation.invalid(formControl.control)) {
                    errors.push(validation.message);
                }
            }
        }

        if (errors.length > 0) {
            formControl.message.show({
                message: errors,
                messageType: messageFactory.messageType.Error
            });
        }

        return errors.length === 0;
    };

    return formControl;
};