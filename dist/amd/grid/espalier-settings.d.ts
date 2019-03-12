import { ITableButton } from "./table-button";
import { IColumnDefinition } from "./column-definition";
import { EspalierFilter } from "./espalier-filter";
import { IGridDataSource } from "./data-sources/grid-data-source";
/**
 * The settings to be applied to an Espalier instance.
 */
export interface IEspalierSettings<TRow> {
    /**
     * The data source for the grid.
     */
    dataSource: IGridDataSource<TRow>;
    /**
     * The columns to show in the grid.
     */
    columns: Array<IColumnDefinition<TRow>>;
    /**
     * A filter which contains logic for applying and
     * removing filters, as well as the user interface for
     * the filter.
     */
    filter?: EspalierFilter<TRow>;
    /**
     * Build buttons to show for a given row of data. These
     * will appear in the far-right column.
     */
    getButtons?: (rowData: TRow) => ITableButton<TRow>[];
    /**
     * Manipulate data returned from the server.
     */
    postFetch?: (records: TRow[]) => TRow[];
    /**
     * A message to display if there were no records returned.
     */
    noRecordsMessage?: string;
}
