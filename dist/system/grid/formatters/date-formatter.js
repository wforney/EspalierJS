System.register(["luxon"], function (exports_1, context_1) {
    "use strict";
    var luxon_1, DateFormatter;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (luxon_1_1) {
                luxon_1 = luxon_1_1;
            }
        ],
        execute: function () {
            DateFormatter = /** @class */ (function () {
                function DateFormatter() {
                }
                DateFormatter.prototype.format = function (data) {
                    var parsedDate = luxon_1.DateTime.fromISO(data);
                    if (!parsedDate.isValid) {
                        return {
                            date: "INVALID",
                            time: "INVALID"
                        };
                    }
                    return {
                        date: parsedDate.toLocaleString(),
                        time: parsedDate.toLocaleString(luxon_1.DateTime.TIME_SIMPLE)
                    };
                };
                return DateFormatter;
            }());
            exports_1("DateFormatter", DateFormatter);
        }
    };
});
