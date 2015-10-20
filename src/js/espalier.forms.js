import core from "./espalier.core";
import common from "./espalier.common";
import FormControl from "./espalier.forms.control";

let keys = {
    controls: new Object()
};

class EspalierForm {
    constructor(formToWire, args) {
        this._internals = new WeakMap();

        if (core.isString(formToWire)) {
            this.form = core.find(formToWire)[0];
        } else if (common.isElement(formToWire)) {
            this.form = formToWire;
        } else {
            this.form = formToWire[0];
        }

        let options = {
            submit: false
        };

        let onEnter = (event) => {
            let code = (event.keyCode ? event.keyCode : event.which);

            if (code == 13) {
                event.preventDefault();
                event.stopPropagation();
                this.submit();
            }
        };

        this.options = core.extend(options, args);

        this.form.setAttribute("novalidate", "");

        let controls = new Map();
        let processedControls = new Set();
        let rawControls = core.find("input, textarea, select", this.form);

        for (let control of rawControls) {
            core.addEventListener(control, "keypress", onEnter);
            var controlType = control.type ? control.type : control.getAttribute("type");
            var lowerCaseId = controlType == "radio" ? control.name.toLowerCase() : control.id.toLowerCase();

            if (processedControls.has(lowerCaseId)) {
                continue;
            }

            processedControls.add(lowerCaseId);

            if (lowerCaseId || (control.type ? control.type : control.getAttribute("type")) == "radio") {
                let espControl = FormControl(control);
                controls.set(espControl.getName(), espControl);
            }
        }

        this._internals.set(keys.controls, controls);

        core.addEventListener(this.form, "submit", (event) => {
            event.preventDefault();
            this.submit();
        });

        let submitButtons = core.find("[data-action=\"submit\"]", this.form);

        for (let submitButton of submitButtons) {
            core.addEventListener(submitButton, "click", (e) => {
                this.submit();
            });
        }

        let hasFocus = core.find("[data-focus=\"true\"]", this.form);

        for (let el of hasFocus) {
            if (el.offsetParent === null || el.readOnly) {
                continue;
            }

            el.focus();

            if (el.select) {
                el.select();
            }
            break;
        }
    }

    getControl(name) {
        let controls = this._internals.get(keys.controls);
        return controls.get(name);
    }

    submit() {
        if (this.options.submit) {
            this.options.submit();
            return;
        }

        if (this.validate()) {
            let method = this.form.getAttribute("method");

            core.sendRequest({
                type: method ? method : "GET",
                url: this.form.getAttribute("action"),
                data: this.value()
            }).then((data) => {
                let onSuccess = this.form.getAttribute("data-success");

                if (onSuccess) {
                    core.publish(onSuccess, data);
                }
            });
        }
    }

    value() {
        let value = {};

        for (let control of this._internals.get(keys.controls).values()) {
            core.setProperty(value, control.getName(), control.val());
        }

        return value;
    }

    validate() {
        let valid = true;

        for (let control of this._internals.get(keys.controls).values()) {
            if (!control.message) continue;

            control.message.remove();

            if (!control.validate()) {
                valid = false;
            }
        }

        return valid;
    }

    toJSON() {
        //TODO: http://stackoverflow.com/questions/8330126/how-to-completely-convert-query-string-into-json-object
        throw new Error("This hasn't been implemented yet.");
    }
}

export default function (formToWire, args) {
    return new EspalierForm(formToWire, args);
};