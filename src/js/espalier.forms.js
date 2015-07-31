import core from "./espalier.core";
import FormControl from "./espalier.forms.control";

class EspalierForm {
    constructor(formToWire, args) {
        if (core.isString(formToWire)) {
            this.form = core.find(formToWire)[0];
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
        this.controls = new Set();
        let processedControls = new Set();
        let rawControls = core.find("input, textarea, select", this.form);

        for (let control of rawControls) {
            control.addEventListener("keypress", onEnter);
            var controlType = control.type ? control.type : control.getAttribute("type");
            var lowerCaseId = controlType == "radio" ? control.name.toLowerCase() : control.id.toLowerCase();

            if (processedControls.has(lowerCaseId)) {
                continue;
            }

            processedControls.add(lowerCaseId);

            if (lowerCaseId || (control.type ? control.type : control.getAttribute("type")) == "radio") {
                this.controls.add(FormControl(control));
            }
        }

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
            el.select();
            break;
        }
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
                data: $(this.form).serialize() //TODO: Remove jQuery.
            }).then((data) => {
                let onSuccess = this.form.getAttribute("data-success");

                if (onSuccess) {
                    core.publish(onSuccess, data);
                }
            });
        }
    }

    validate() {
        var valid = true;

        for (let control of this.controls) {
            control.message.remove();

            if (!control.validate()) {
                valid = false;
            }
        }

        return valid;
    }
}

export default function (formToWire, args) {
    return new EspalierForm(formToWire, args);
};