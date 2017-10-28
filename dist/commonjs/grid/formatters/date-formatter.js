"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moment = require("moment");
var DateFormatter = /** @class */ (function () {
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
exports.DateFormatter = DateFormatter;
