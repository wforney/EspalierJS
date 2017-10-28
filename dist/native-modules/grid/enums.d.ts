/**
 * Used to set a default sort column in a column definition.
 */
export declare enum SortOrder {
    NotSpecified = 0,
    Ascending = 1,
    Descending = 2,
}
/**
 * Tells Espalier what format to apply to a column.
 */
export declare enum ColumnType {
    /**
     * Formats the number for the users locale with 3 significant
     * digits, and right-aligns the content.
     */
    Number = 1,
    /**
     * Formats the number for the users locale as currency
     * and right-aligns the content.
     */
    Currency = 2,
    /**
     * Formats the date to display the short-date using the users
     * locale.
     */
    Date = 3,
    /**
     * Formats the date to display the short-time usng the users
     * locale.
     */
    Time = 4,
    /**
     * Formats the date using the users locale and shows the short-date
     * on one line, followed by the short-time on the next line.
     */
    DateTime = 5,
    /**
     * Formats the value as an integer using the users locale and
     * rounds to the nearest number.
     */
    Integer = 6,
}
