System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PageInfo;
    return {
        setters: [],
        execute: function () {
            PageInfo = /** @class */ (function () {
                function PageInfo(disabled, active, text, page) {
                    this.disabled = disabled;
                    this.active = active;
                    this.text = text;
                    this.page = page;
                }
                return PageInfo;
            }());
            exports_1("PageInfo", PageInfo);
        }
    };
});
