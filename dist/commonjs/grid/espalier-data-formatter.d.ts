/**
 * Configure how a Column Definition will format the
 * data for the property it is bound to.
 */
export interface IEspalierDataFormatter {
    /**
     * The value for the property for a given cell
     * will be passed in to the format method. Do
     * whatever you want with the value, and return
     * it in a format the cell template can use.
     */
    format: (data: any, record?: any) => any;
}
