define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PageInfo = /** @class */ (function () {
        function PageInfo(disabled, active, text, page) {
            this.disabled = disabled;
            this.active = active;
            this.text = text;
            this.page = page;
        }
        return PageInfo;
    }());
    exports.PageInfo = PageInfo;
});
