var DateFormatter = /** @class */ (function () {
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
export { DateFormatter };
