import { ColumnType, SortOrder } from "./enums";

// TODO: Make this one better.
export interface IColumnDefinition<TRow> {
  /**
   * The name of the property to bind the value of the table
   * cell to. This can be an HTML value.
   */
  propertyName: string;

  /**
   * The value to use for the header of the given column.
   * Defaults to the propertyName if left undefined.
   */
  title?: string;

  /**
   * The name of the property to use when building the query
   * string for a sort operation on this column. This is helpful
   * if the value displayed in the cell comes from a computed
   * column. Defaults to the propertyName if left undefined.
   */
  sortPropertyName?: string;

  /**
   * If there is a longer title than what fits in the column head,
   * put it here and it will show up in a tooltip when the user
   * hovers over the column header. Defaults to the title if left
   * undefined.
   */
  longTitle?: string;

  /**
   * If specified, the cell will have an anchor tag that calls
   * this method when it is clicked.
   */
  onClick?: (record: TRow) => Promise<void>;

  /**
   * The first column to specify a sortOrder will be sorted
   * on by default, otherwise Espalier will sort on the first
   * column.
   */
  sortOrder?: SortOrder;

  /**
   * Specifies how Espalier should format the column data.
   */
  type?: ColumnType;

  /**
   * If you do not want this columb to be sortable, set this
   * to true.
   */
  disableSort?: boolean;
}
