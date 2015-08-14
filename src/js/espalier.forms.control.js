import core from "./espalier.core";
import common from "./espalier.common";
import config from "./config/index";
import { Required, Email, Date, RequiredDependent } from "./espalier.validation";
import messageFactory from "./espalier.messageFactory";

class FormControl {
    constructor(control, form, validations, explicitValidations) {
        var controlType = control.type ? control.type : control.getAttribute("type");
        var lowerCaseId = controlType == "radio" ? control.name.toLowerCase() : control.id.toLowerCase();

        if (!lowerCaseId) {
            throw new Error("Elements must have an Id to be properly wired to an Espalier form control.");
        }

        this.control = control;
        this.form = form;
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
                        for (let key of dependents.keys()) {
                            for (let dependent of dependents.get(key)) {
                                dependent.hide();
                            }
                        }

                        if (!dependents.has(radio)) {
                            return;
                        }

                        for (let dependent of dependents.get(radio)) {
                            dependent.show();
                        }
                    });

                    let requiredDependentsSelector = radio.getAttribute("data-require");

                    if (!requiredDependentsSelector) {
                        continue;
                    }

                    let requiredDependents = core.find(requiredDependentsSelector, this.form);
                    let dependentControls = [];

                    for (let requiredDependent of requiredDependents) {
                        let dependentControl = factory(requiredDependent, form, { required: true });
                        validations.push(new RequiredDependent(this, radio.value, dependentControl));
                        dependentControl.hide();
                        dependentControls.push(dependentControl);
                    }

                    dependents.set(radio, dependentControls);
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
                config.fieldMessageAnimation(group);
            }
        });

        this.group = group;
        this.originalDisplay = this.group.style.display;

        if (explicitValidations.required || required || control.required || control.getAttribute("required")) {
            validations.push(new Required(this));
            core.addClass(group, "required");
        }

        control.setAttribute(lowerCaseId, "");
    }

    getName() {
        return this.control.name;
    }

    val() {
        let controlType = this.control.type ? this.control.type : this.control.getAttribute("type");

        switch (controlType) {
            case "checkbox":
                return core.matches(this.control, ":checked") ? this.control.value : undefined;
            case "radio":
                let radios = core.find(`[name="${this.control.name}"]`);
                
                //Loop through these instead of using the :checked selector...
                for (let radio of radios) {
                    if (radio.checked) {
                        return radio.value;
                    }
                }

                return undefined;
            default:
                return this.control.value;
        }
    }

    hide() {
        this.group.style.display = "none";
    }

    show() {
        this.group.style.display = this.originalDisplay;
    }
}

let factory = function (control, form, explicitValidations) {
    explicitValidations = explicitValidations ? explicitValidations : {};
    let validations = [];
    let formControl = new FormControl(control, form, validations, explicitValidations);

    formControl.validate = function () {
        let errors = [];
        let hasErrors = false;

        if (validations) {
            for (let validation of validations) {
                if (!validation.isValid()) {
                    hasErrors = true;
                    let message = validation.getMessage();

                    if (message) {
                        errors.push(message);
                    }
                }
            }
        }

        if (errors.length > 0) {
            formControl.message.show({
                message: errors,
                messageType: messageFactory.messageType.Error
            });
        }

        return !hasErrors;
    };

    common.controls.set(formControl.control, formControl);
    return formControl;
};

export default factory;