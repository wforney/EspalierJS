System.register(["./currency-formatter", "./date-formatter", "./integer-formatter", "./number-formatter", "./text-formatter"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters: [
            function (currency_formatter_1_1) {
                exportStar_1(currency_formatter_1_1);
            },
            function (date_formatter_1_1) {
                exportStar_1(date_formatter_1_1);
            },
            function (integer_formatter_1_1) {
                exportStar_1(integer_formatter_1_1);
            },
            function (number_formatter_1_1) {
                exportStar_1(number_formatter_1_1);
            },
            function (text_formatter_1_1) {
                exportStar_1(text_formatter_1_1);
            }
        ],
        execute: function () {
        }
    };
});
