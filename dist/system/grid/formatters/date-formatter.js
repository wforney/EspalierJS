System.register([], function (exports_1, context_1) {
    "use strict";
    var DateFormatter;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            DateFormatter = /** @class */ (function () {
                function DateFormatter() {
                }
                DateFormatter.prototype.format = function (isoDate) {
                    var parsedDate = new Date(isoDate);
                    return {
                        date: parsedDate.toLocaleDateString(),
                        time: parsedDate.toLocaleTimeString()
                    };
                };
                return DateFormatter;
            }());
            exports_1("DateFormatter", DateFormatter);
        }
    };
});
