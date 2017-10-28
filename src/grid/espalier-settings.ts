import { ITableButton } from "./table-button";
import { IColumnDefinition } from "./column-definition";
import { EspalierFilter } from "./espalier-filter";

/**
 * The settings to be applied to an Espalier instance.
 */
export interface IEspalierSettings<TRow> {
  columns: Array<IColumnDefinition<TRow>>;
  filter?: EspalierFilter;
  getButtons?: (rowData: TRow) => ITableButton<TRow>[];
  postFetch?: (records: TRow[]) => TRow[];
}
