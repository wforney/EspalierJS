import { DateTime } from "luxon";
var DateFormatter = /** @class */ (function () {
    function DateFormatter() {
    }
    DateFormatter.prototype.format = function (data) {
        var parsedDate = DateTime.fromISO(data);
        if (!parsedDate.isValid) {
            return {
                date: "INVALID",
                time: "INVALID"
            };
        }
        return {
            date: parsedDate.toLocaleString(),
            time: parsedDate.toLocaleString(DateTime.TIME_SIMPLE)
        };
    };
    return DateFormatter;
}());
export { DateFormatter };
