System.register([], function (exports_1, context_1) {
    "use strict";
    var NumberFormatter;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            NumberFormatter = /** @class */ (function () {
                function NumberFormatter() {
                }
                NumberFormatter.prototype.format = function (data) {
                    var asNumber = Number.parseFloat(data);
                    if (isNaN(asNumber)) {
                        return "";
                    }
                    return asNumber.toLocaleString(undefined, { maximumFractionDigits: 3, minimumFractionDigits: 3 });
                };
                return NumberFormatter;
            }());
            exports_1("NumberFormatter", NumberFormatter);
        }
    };
});
