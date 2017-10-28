define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NumberFormatter = /** @class */ (function () {
        function NumberFormatter() {
        }
        NumberFormatter.prototype.format = function (data) {
            var asNumber = Number.parseFloat(data);
            if (isNaN(asNumber)) {
                return "";
            }
            return asNumber.toLocaleString(undefined, { maximumFractionDigits: 3, minimumFractionDigits: 3 });
        };
        return NumberFormatter;
    }());
    exports.NumberFormatter = NumberFormatter;
});
