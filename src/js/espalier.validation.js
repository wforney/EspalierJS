import core from "./espalier.core";
import formControl from "./espalier.forms.control";

class Validation {
    constructor(control) {
        if (!core.isFunction(this.isValid)) {
            throw new TypeError("Must have an isValid method.");
        }

        if (!core.isFunction(this.getMessage)) {
            throw new TypeError("Must add a message prior to calling super.");
        }

        this.control = control;
    }
}

class Required extends Validation {
    constructor(control) {
        super(control);
    }

    isValid() {
        switch (this.control.getNode().type) {
            case "checkbox":
                return this.control.val();
                break;
            default:
                return !core.isEmptyOrSpaces(this.control.val());
                break;
        }
    }

    getMessage() {
        return "Field is required.";
    }
}

class Email extends Validation {
    constructor(control) {
        super(control);
    }

    isValid() {
        return core.isEmail(this.control.val());
    }

    getMessage() {
        return "Invalid email address.";
    }
}

class Phone extends Validation {
    constructor(control) {
        super(control);
    }

    isValid() {
        return core.isPhone(this.control.val());
    }

    getMessage() {
        return "Invalid phone number.";
    }
}

class Date extends Validation {
    constructor(control) {
        super(control);
    }

    isValid() {
        return core.isDate(this.control.val());
    }

    getMessage() {
        return "Invalid date.";
    }
}

export { Required, Email, Phone, Date };