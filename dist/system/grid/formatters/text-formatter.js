System.register([], function (exports_1, context_1) {
    "use strict";
    var TextFormatter;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            TextFormatter = /** @class */ (function () {
                function TextFormatter() {
                }
                TextFormatter.prototype.format = function (data) {
                    if (!data) {
                        return "";
                    }
                    return data;
                };
                return TextFormatter;
            }());
            exports_1("TextFormatter", TextFormatter);
        }
    };
});
