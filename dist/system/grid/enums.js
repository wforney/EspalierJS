System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var SortOrder, ColumnType;
    return {
        setters: [],
        execute: function () {
            /**
             * Used to set a default sort column in a column definition.
             */
            (function (SortOrder) {
                SortOrder[SortOrder["NotSpecified"] = 0] = "NotSpecified";
                SortOrder[SortOrder["Ascending"] = 1] = "Ascending";
                SortOrder[SortOrder["Descending"] = 2] = "Descending";
            })(SortOrder || (SortOrder = {}));
            exports_1("SortOrder", SortOrder);
            /**
             * Tells Espalier what format to apply to a column.
             */
            (function (ColumnType) {
                ColumnType[ColumnType["Text"] = 0] = "Text";
                ColumnType[ColumnType["Number"] = 1] = "Number";
                ColumnType[ColumnType["Currency"] = 2] = "Currency";
                ColumnType[ColumnType["Date"] = 3] = "Date";
                ColumnType[ColumnType["Time"] = 4] = "Time";
                ColumnType[ColumnType["DateTime"] = 5] = "DateTime";
                ColumnType[ColumnType["HyperLink"] = 6] = "HyperLink";
                ColumnType[ColumnType["Button"] = 7] = "Button";
            })(ColumnType || (ColumnType = {}));
            exports_1("ColumnType", ColumnType);
        }
    };
});
