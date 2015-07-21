import core from "./espalier.core";

class Validation {
    constructor(control) {
        if (this.isValid === undefined) {
            throw new TypeError("Must have an isValid method.");
        }

        if (this.message === undefined) {
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
    
    get message() {
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
    
    get message() {
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
    
    get message() {
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
        if(this.control.val() === this.whenVal && core.isEmptyOrSpaces(this.dependent.value)) {
            return false;
        }
        
        return true;
    }
    
    get message() {
        return "Field is required.";
    }
}

export { Required, Email, Date, RequiredDependent };