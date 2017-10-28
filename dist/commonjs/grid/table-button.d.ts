/**
 * Define a button that is showin in the far right-hand
 * column of a row for a given record.
 */
export interface ITableButton<TRow> {
    buttonClass?: string;
    iconClass?: string;
    title?: string;
    onClick: (record: TRow) => Promise<void>;
}
