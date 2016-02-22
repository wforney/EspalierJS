import core from "./espalier.core";
import common from "./espalier.common";
import config from "./config/index";
import { Required, Email, Phone, Date } from "./espalier.validation";
import messageFactory from "./espalier.messageFactory";
import DomNode from "./espalier.domnode";

let internals = new WeakMap();

class FormControl extends DomNode {
    constructor(control, form, validations, explicitValidations) {
        super(control, form);

        let controlType = control.type ? control.type : control.getAttribute("type");
        let lowerCaseId = controlType == "radio" ? control.name.toLowerCase() : control.id.toLowerCase();

        if (!lowerCaseId) {
            throw new Error("Elements must have an Id to be properly wired to an Espalier form control.");
        }

        if (!form) {
            throw new Error("Controls must be associated with an Espalier Form.")
        }

        const settings = {
            control,
            form,
            group: undefined
        };

        internals.set(this, settings);

        let required = false;
        let dependents = new Map();
        let dependentListeners;

        control.setAttribute(lowerCaseId, "");

        switch (controlType) {
            case "radio":
                settings.group = core.closest(control, ".radio-group");
                dependentListeners = Array.from(core.find('input[type="radio"]', settings.group));

                for (let radio of dependentListeners) {
                    if (radio.required || radio.getAttribute("required")) {
                        required = true;
                    }

                    let requiredDependentsSelector = radio.getAttribute("data-require");

                    if (!requiredDependentsSelector) {
                        continue;
                    }

                    let requiredDependents = core.find(requiredDependentsSelector, settings.form.form);
                    let dependentControls = [];
                    let addedNames = new Set();

                    for (let requiredDependent of requiredDependents) {
                        if (addedNames.has(requiredDependent.name)) continue;
                        let dependentControl = factory(requiredDependent, form, { required: true });
                        dependentControl.hide();
                        dependentControls.push(dependentControl);
                        addedNames.add(requiredDependent.name);
                    }

                    dependents.set(radio.value, dependentControls);
                }
                break;
            case "checkbox":
                //TODO: Make checkboxes work better.
                //      See if there are other checkboxes with the same name.
                //      Should support syntax:
                // form.getControl("checkbox-name").val(); 
                settings.group = core.closest(control, ".checkbox");
                break;
            case "email":
                validations.push(new Email(this));
                settings.group = core.closest(control, ".form-group");
                break;
            case "tel":
                validations.push(new Phone(this));
                settings.group = core.closest(control, ".form-group");
                break;
            case "date":
                validations.push(new Date(this));
                settings.group = core.closest(control, ".form-group");

                if (control.datepicker) {
                    control.datepicker().attr("type", "text");
                }
                break;
            case "hidden":
                return;
            case "select-one":
                settings.group = core.closest(control, ".form-group");

                let options = core.find("option", control);
                dependentListeners = [control];

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
                settings.group = core.closest(control, ".form-group");
                break;
        }

        this.message = messageFactory.create({
            attachTo: settings.group,
            messageAttachment: messageFactory.messageAttachment.Flow,
            onRemoved: function () {
                core.removeClass(settings.group, "has-error");
            },
            onAdded: function () {
                core.addClass(settings.group, "has-error");
                config.fieldMessageAnimation(settings.group);
            }
        });

        settings.originalDisplay = settings.group.style.display;

        if (explicitValidations.required || required || control.required || control.getAttribute("required")) {
            validations.push(new Required(this));
            core.addClass(settings.group, "required");
        }

        let thisControl = this;

        if (dependents.size > 0) {
            let processDependents = () => {
                for (let key of dependents.keys()) {
                    if (key == thisControl.val()) {
                        for (let dependent of dependents.get(thisControl.val())) {
                            dependent.show();
                            form.addControl(dependent.getNode().name, dependent);
                        }
                    } else {
                        for (let dependent of dependents.get(key)) {
                            dependent.hide();
                            form.removeControl(dependent.getNode().name);
                        }
                    }
                }
            }

            for (let listener of dependentListeners) {
                core.addEventListener(listener, "change", processDependents.bind(this));
            }

            processDependents();
        }
    }

    getName() {
        return internals.get(this).control.name;
    }

    val() {
        //TODO: Allow people to set the value.
        let control = internals.get(this).control;
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
        internals.get(this).group.style.display = "none";
    }

    show() {
        let myInternals = internals.get(this);
        myInternals.group.style.display = myInternals.originalDisplay;
    }

    disable() {
        internals.get(this).control.setAttribute("disabled", true);
    }

    enable() {
        internals.get(this).control.removeAttribute("disabled");
    }

    clear() {
        internals.get(this).control.value = "";
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

    if (formControl.getNode().type == "radio") {
        form.on("change", `[name=${formControl.getName() }]`, () => {
            setTimeout(() => { formControl.validate(); }, 150);
        });
    } else {
        core.addEventListener(control, "blur", () => {
            setTimeout(() => { formControl.validate(); }, 150);
        });
    }

    common.controls.set(formControl.getNode(), formControl);
    return formControl;
};

export default factory;