"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Used to set a default sort column in a column definition.
 */
var SortOrder;
(function (SortOrder) {
    SortOrder[SortOrder["NotSpecified"] = 0] = "NotSpecified";
    SortOrder[SortOrder["Ascending"] = 1] = "Ascending";
    SortOrder[SortOrder["Descending"] = 2] = "Descending";
})(SortOrder = exports.SortOrder || (exports.SortOrder = {}));
/**
 * Tells Espalier what format to apply to a column.
 */
var ColumnType;
(function (ColumnType) {
    ColumnType[ColumnType["Text"] = 0] = "Text";
    ColumnType[ColumnType["Number"] = 1] = "Number";
    ColumnType[ColumnType["Currency"] = 2] = "Currency";
    ColumnType[ColumnType["Date"] = 3] = "Date";
    ColumnType[ColumnType["Time"] = 4] = "Time";
    ColumnType[ColumnType["DateTime"] = 5] = "DateTime";
    ColumnType[ColumnType["HyperLink"] = 6] = "HyperLink";
    ColumnType[ColumnType["Button"] = 7] = "Button";
})(ColumnType = exports.ColumnType || (exports.ColumnType = {}));
