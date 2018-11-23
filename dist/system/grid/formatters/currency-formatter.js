System.register([], function (exports_1, context_1) {
    "use strict";
    var CurrencyFormatter;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            CurrencyFormatter = /** @class */ (function () {
                function CurrencyFormatter() {
                }
                CurrencyFormatter.prototype.format = function (data) {
                    var asNumber = Number.parseFloat(data);
                    if (isNaN(asNumber)) {
                        return "";
                    }
                    return asNumber.toLocaleString(undefined, { style: "currency", currency: "USD" });
                };
                return CurrencyFormatter;
            }());
            exports_1("CurrencyFormatter", CurrencyFormatter);
        }
    };
});
