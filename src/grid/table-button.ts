/**
 * Define a button that is showin in the far right-hand
 * column of a row for a given record.
 */
export class TableButton {
  constructor(
    public buttonClass: string,
    public iconClass: string,
    public title: string,
    public onClick: Function) {
  }
}
