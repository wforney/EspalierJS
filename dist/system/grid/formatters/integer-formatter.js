System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var IntegerFormatter;
    return {
        setters: [],
        execute: function () {
            IntegerFormatter = /** @class */ (function () {
                function IntegerFormatter() {
                }
                IntegerFormatter.prototype.format = function (data) {
                    var asNumber = Number.parseFloat(data);
                    if (isNaN(asNumber)) {
                        return "";
                    }
                    return asNumber.toLocaleString(undefined, { maximumFractionDigits: 0 });
                };
                return IntegerFormatter;
            }());
            exports_1("IntegerFormatter", IntegerFormatter);
        }
    };
});
