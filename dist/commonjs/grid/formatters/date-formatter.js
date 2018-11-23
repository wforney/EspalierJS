"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var luxon_1 = require("luxon");
var DateFormatter = /** @class */ (function () {
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
exports.DateFormatter = DateFormatter;
