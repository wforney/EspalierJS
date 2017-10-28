"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CurrencyFormatter = /** @class */ (function () {
    function CurrencyFormatter() {
    }
    CurrencyFormatter.prototype.format = function (data) {
        var asNumber = Number.parseFloat(data);
        if (isNaN(asNumber)) {
            return "";
        }
        return asNumber.toLocaleString(undefined, { style: "currency", currency: "USD" });
    };
    return CurrencyFormatter;
}());
exports.CurrencyFormatter = CurrencyFormatter;
