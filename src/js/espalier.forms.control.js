import core from "./espalier.core";
import common from "./espalier.common";
import config from "./config/index";
import { Required, Email, Date } from "./espalier.validation";
import messageFactory from "./espalier.messageFactory";

const key = new Object();

class FormControl {
    constructor(control, form, validations, explicitValidations) {
        let controlType = control.type ? control.type : control.getAttribute("type");
        let lowerCaseId = controlType == "radio" ? control.name.toLowerCase() : control.id.toLowerCase();

        if (!lowerCaseId) {
            throw new Error("Elements must have an Id to be properly wired to an Espalier form control.");
        }

        if (!form) {
            throw new Error("Controls must be associated with an Espalier Form.")
        }

        this._internals = new WeakMap();

        const internals = {
            control,
            form,
            group: undefined
        };

        this._internals.set(key, internals);

        let required = false;
        let dependents = new Map();
        let dependentListeners;

        control.setAttribute(lowerCaseId, "");

        switch (controlType) {
            case "radio":
                internals.group = core.closest(control, ".radio-group");
                dependentListeners = Array.from(core.find('input[type="radio"]', internals.group));

                for (let radio of dependentListeners) {
                    if (radio.required || radio.getAttribute("required")) {
                        required = true;
                    }

                    let requiredDependentsSelector = radio.getAttribute("data-require");

                    if (!requiredDependentsSelector) {
                        continue;
                    }

                    let requiredDependents = core.find(requiredDependentsSelector, internals.form.form);
                    let dependentControls = [];

                    for (let requiredDependent of requiredDependents) {
                        let dependentControl = factory(requiredDependent, form, { required: true });
                        dependentControl.hide();
                        dependentControls.push(dependentControl);
                    }

                    dependents.set(radio.value, dependentControls);
                }
                break;
            case "checkbox":
                internals.group = core.closest(control, ".checkbox");
                break;
            case "email":
                validations.push(new Email(this));
                internals.group = core.closest(control, ".form-group");
                break;
            case "date":
                validations.push(new Date(this));
                internals.group = core.closest(control, ".form-group");

                if (control.datepicker) {
                    control.datepicker().attr("type", "text");
                }
                break;
            case "hidden":
                return;
            case "select-one":
                internals.group = core.closest(control, ".form-group");

                let options = core.find("option", control);
                dependentListeners = [ control ];

                for (let option of options) {
                    let requiredDependentsSelector = option.getAttribute("data-require");

                    if (!requiredDependentsSelector) {
                        continue;
                    }

                    let requiredDependents = core.find(requiredDependentsSelector, this.form);
                    let dependentControls = [];

                    for (let requiredDependent of requiredDependents) {
                        let dependentControl = factory(requiredDependent, form, { required: true });
                        dependentControl.hide();
                        dependentControls.push(dependentControl);
                    }

                    dependents.set(option.value, dependentControls);
                }
                break;
            default:
                internals.group = core.closest(control, ".form-group");
                break;
        }

        this.message = messageFactory.create({
            attachTo: internals.group,
            messageAttachment: messageFactory.messageAttachment.Flow,
            onRemoved: function () {
                core.removeClass(internals.group, "has-error");
            },
            onAdded: function () {
                core.addClass(internals.group, "has-error");
                config.fieldMessageAnimation(internals.group);
            }
        });

        internals.originalDisplay = internals.group.style.display;

        if (explicitValidations.required || required || control.required || control.getAttribute("required")) {
            validations.push(new Required(this));
            core.addClass(internals.group, "required");
        }

        let thisControl = this;

        if (dependents.size > 0) {
            let processDependents = () => {
                for (let dependentKey of dependents.keys()) {
                    if (!dependents.has(thisControl.val())) {
                        for (let dependent of dependents.get(dependentKey)) {
                            dependent.hide();
                            form.removeControl(dependent._internals.get(key).control.name);
                        }
                    } else {
                        for (let dependent of dependents.get(thisControl.val())) {
                            dependent.show();
                            form.addControl(dependent._internals.get(key).control.name, dependent);
                        }
                    }
                }
            }

            for (let listener of dependentListeners) {
                core.addEventListener(listener, "change", processDependents.bind(this));
            }
        }
    }

    getName() {
        return this._internals.get(key).control.name;
    }

    val() {
        let control = this._internals.get(key).control;
        let controlType = control.type ? control.type : control.getAttribute("type");

        switch (controlType) {
            case "checkbox":
                return core.matches(control, ":checked");
            case "radio":
                let radios = core.find(`[name="${control.name}"]`);
                
                //Loop through these instead of using the :checked selector...
                for (let radio of radios) {
                    if (radio.checked) {
                        return radio.value;
                    }
                }

                return undefined;
            default:
                return control.value;
        }
    }

    hide() {
        this._internals.get(key).group.style.display = "none";
    }

    show() {
        let internals = this._internals.get(key);
        internals.group.style.display = internals.originalDisplay;
    }
    
    disable() {
        this._internals.get(key).control.setAttribute("disabled", true);
    }
    
    enable() {
        this._internals.get(key).control.removeAttribute("disabled");
    }
    
    clear() {
        this._internals.get(key).control.value = "";
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
                messageType: messageFactory.messageType.Error,
                showButton: false
            });
        } else {
            formControl.message.remove();
        }

        return !hasErrors;
    };

    core.addEventListener(control, "blur", () => {
        formControl.validate();
    });

    common.controls.set(formControl._internals.get(key).control, formControl);
    return formControl;
};

export default factory;