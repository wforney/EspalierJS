System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var TableButton;
    return {
        setters: [],
        execute: function () {
            /**
             * Define a button that is showin in the far right-hand
             * column of a row for a given record.
             */
            TableButton = /** @class */ (function () {
                function TableButton(buttonClass, iconClass, title, onClick) {
                    this.buttonClass = buttonClass;
                    this.iconClass = iconClass;
                    this.title = title;
                    this.onClick = onClick;
                }
                return TableButton;
            }());
            exports_1("TableButton", TableButton);
        }
    };
});
