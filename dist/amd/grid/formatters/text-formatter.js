define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TextFormatter = /** @class */ (function () {
        function TextFormatter() {
        }
        TextFormatter.prototype.format = function (data) {
            if (!data) {
                return "";
            }
            return data;
        };
        return TextFormatter;
    }());
    exports.TextFormatter = TextFormatter;
});
