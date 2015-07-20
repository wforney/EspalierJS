import core from "./espalier.core";

var validation = {
    required: {
        invalid: function (control) {
            switch (control.getAttribute("type")) {
                case "checkbox":
                    return !core.matches(control, ":checked");
                    break;
                default:
                    var value = control.value;
                    return core.isEmptyOrSpaces(value);
                    break;
            }
        },
        message: "Field is required."
    },
    email: {
        invalid: function (control) {
            var value = control.value;
            return !core.isEmail(value);
        },
        message: "Invalid email address."
    },
    date: {
        invalid: function (control) {
            var value = control.value;
            return !core.isDate(value);
        },
        message: "Invalid date."
    }
};

export default validation;