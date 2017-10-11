/**
 * Define a button that is showin in the far right-hand
 * column of a row for a given record.
 */
export class TableButton {
    constructor(buttonClass, iconClass, title, onClick) {
        this.buttonClass = buttonClass;
        this.iconClass = iconClass;
        this.title = title;
        this.onClick = onClick;
    }
}
