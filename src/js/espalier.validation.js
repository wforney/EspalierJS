define(["./espalier.core"], function(core) {
    "use strict";

    var validation = {
        required: {
            invalid: function(control) {
                switch (control.attr("type")) {
                    case "checkbox":
                        return !control.is(":checked");
                        break;
                    default:
                        var value = control.val();
                        return core.isEmptyOrSpaces(value);
                        break;
                }
            },
            message: "Field is required."
        },
        email: {
            invalid: function(control) {
                var value = control.val();
                return !core.isEmail(value);
            },
            message: "Invalid email address."
        }
    };

    return validation;
});