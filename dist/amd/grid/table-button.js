define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Define a button that is showin in the far right-hand
     * column of a row for a given record.
     */
    var TableButton = /** @class */ (function () {
        function TableButton(buttonClass, iconClass, title, onClick) {
            this.buttonClass = buttonClass;
            this.iconClass = iconClass;
            this.title = title;
            this.onClick = onClick;
        }
        return TableButton;
    }());
    exports.TableButton = TableButton;
});
