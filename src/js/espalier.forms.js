import core from "./espalier.core";
import FormControl from "./espalier.forms.control";

class EspalierForm {
    constructor(formToWire) {
        if (core.isString(formToWire)) {
            this.form = core.find(formToWire)[0];
        } else {
            this.form = formToWire[0];
        }

        this.form.setAttribute("novalidate", "");
        this.controls = new Set();

        let rawControls = core.find("input, textarea, select", this.form);

        for (let control of rawControls) {
            var lowerCaseId = control.id.toLowerCase();

            if (lowerCaseId) {
                this.controls.add(FormControl(control));
            }
        }

        core.addEventListener(this.form, "submit", (e) => {
            e.preventDefault();
            this.submit();
        });

        let submitButtons = core.find("[data-action=\"submit\"]", this.form);

        for (let submitButton of submitButtons) {
            core.addEventListener(submitButton, "click", (e) => {
                this.submit();
            });
        }
    }

    submit() {
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

export default function (formToWire) {
    return new EspalierForm(formToWire);
};