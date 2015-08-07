import core from "./espalier.core";
import formControl from "./espalier.forms.control";

class Validation {
    constructor(control) {
        if (this.isValid === undefined) {
            throw new TypeError("Must have an isValid method.");
        }

        if (this.getMessage === undefined) {
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
        return !core.isEmptyOrSpaces(this.control.val());
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

class RequiredDependent extends Validation {
    constructor(control, whenVal, dependent) {
        super(control);
        this.whenVal = whenVal;
        this.dependent = dependent;
    }

    isValid() {
        return this.control.val() !== this.whenVal || this.control.val() === this.whenVal && this.dependent.validate();
    }

    getMessage() {
        return false;
    }
}

export { Required, Email, Date, RequiredDependent };