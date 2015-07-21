import core from "./espalier.core";
import { Required, Email, Date, RequiredDependent } from "./espalier.validation";
import messageFactory from "./espalier.messageFactory";

class FormControl {
    constructor(control, validations) {
        var controlType = control.type ? control.type : control.getAttribute("type");
        var lowerCaseId = controlType == "radio" ? control.name.toLowerCase() : control.id.toLowerCase();

        if (!lowerCaseId) {
            throw new Error("Elements must have an Id to be properly wired to an Espalier form control.");
        }

        this.control = control;
        var group;
        let required = false;

        switch (controlType) {
            case "radio":
                group = core.closest(control, ".radio-group");

                let radios = core.find('input[type="radio"]', group);
                let dependents = new Map();

                for (let radio of radios) {
                    if (radio.required || radio.getAttribute("required")) {
                        required = true;
                    }
                    
                    core.addEventListener(radio, "click", () => {
                        for(let key of dependents.keys()) {
                            for(let dependent of dependents.get(key)) {
                                dependent.style.display = "none";
                            }
                        }
                        
                        if(!dependents.has(radio)) {
                            return;
                        }
                        
                        for(let dependent of dependents.get(radio)) {
                            dependent.style.display = "inline";
                        }
                    });

                    let requiredDependentsSelector = radio.getAttribute("data-require");

                    if (!requiredDependentsSelector) {
                        continue;
                    }

                    let requiredDependents = core.find(requiredDependentsSelector, group);

                    for (let requiredDependent of requiredDependents) {
                        validations.push(new RequiredDependent(this, radio.value, requiredDependent));
                        requiredDependent.style.display = "none";
                    }
                    
                    dependents.set(radio, requiredDependents);
                }
                break;
            case "checkbox":
                group = core.closest(control, ".checkbox");
                break;
            case "email":
                validations.push(new Email(this));
                group = core.closest(control, ".form-group");
                break;
            case "date":
                validations.push(new Date(this));
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

        if (required || control.required || control.getAttribute("required")) {
            validations.push(new Required(this));
            core.addClass(group, "required");
        }

        control.setAttribute(lowerCaseId, "");
    }

    val() {
        let controlType = this.control.type ? this.control.type : this.control.getAttribute("type");

        switch (controlType) {
            case "checkbox":
                return core.matches(this.control, ":checked") ? this.control.value : undefined;
            case "radio":
                let selected = core.find(`[name="${this.control.name}"]:checked`);
                return selected.length == 1 ? selected[0].value : undefined;
            default:
                return this.control.value;
        }
    }
}

export default function (control) {
    let validations = [];
    let formControl = new FormControl(control, validations);

    formControl.validate = function () {
        let errors = [];

        if (validations) {
            for (let validation of validations) {
                if (!validation.isValid()) {
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