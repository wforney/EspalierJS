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
    /**
     * Formats the number for the users locale with 3 significant
     * digits, and right-aligns the content.
     */
    ColumnType[ColumnType["Number"] = 1] = "Number";
    /**
     * Formats the number for the users locale as currency
     * and right-aligns the content.
     */
    ColumnType[ColumnType["Currency"] = 2] = "Currency";
    /**
     * Formats the date to display the short-date using the users
     * locale.
     */
    ColumnType[ColumnType["Date"] = 3] = "Date";
    /**
     * Formats the date to display the short-time usng the users
     * locale.
     */
    ColumnType[ColumnType["Time"] = 4] = "Time";
    /**
     * Formats the date using the users locale and shows the short-date
     * on one line, followed by the short-time on the next line.
     */
    ColumnType[ColumnType["DateTime"] = 5] = "DateTime";
    /**
     * Formats the value as an integer using the users locale and
     * rounds to the nearest number.
     */
    ColumnType[ColumnType["Integer"] = 6] = "Integer";
})(ColumnType = exports.ColumnType || (exports.ColumnType = {}));
