/**
 * Used to set a default sort column in a column definition.
 */
export enum SortOrder {
  NotSpecified = 0,
  Ascending = 1,
  Descending = 2
}

/**
 * Tells Espalier what format to apply to a column.
 */
export enum ColumnType {
  Text = 0,
  Number = 1,
  Currency = 2,
  Date = 3,
  Time = 4,
  DateTime = 5,
  HyperLink = 6,
  Button = 7
}
