System.register(["moment"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var moment, DateFormatter;
    return {
        setters: [
            function (moment_1) {
                moment = moment_1;
            }
        ],
        execute: function () {
            DateFormatter = /** @class */ (function () {
                function DateFormatter() {
                }
                DateFormatter.prototype.format = function (data) {
                    var parsedDate = moment(data);
                    if (!parsedDate.isValid()) {
                        return {
                            date: "INVALID",
                            time: "INVALID"
                        };
                    }
                    return {
                        date: parsedDate.format("L"),
                        time: parsedDate.format("LT")
                    };
                };
                ;
                return DateFormatter;
            }());
            exports_1("DateFormatter", DateFormatter);
        }
    };
});
