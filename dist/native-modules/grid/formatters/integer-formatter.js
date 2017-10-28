var IntegerFormatter = /** @class */ (function () {
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
export { IntegerFormatter };
