import core from "../espalier.core";

export default class PagedSource {
    constructor(args) {
        if (this.constructor === PagedSource) {
            throw new TypeError("Abstract class PagedSource cannot be instantiated.");
        }

        if (!core.isFunction(this.load)) {
            throw new TypeError("PagedSource derivations must implement load(args)")
        }

        if (!core.isFunction(this.pages)) {
            throw new TypeError("PagedSource derivations must implement load(args)")
        }
    }
}