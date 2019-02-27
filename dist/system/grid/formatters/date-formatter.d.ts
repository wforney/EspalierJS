import { IEspalierDataFormatter } from "../espalier-data-formatter";
export declare class DateFormatter implements IEspalierDataFormatter {
    format(isoDate: any): {
        date: string;
        time: string;
    };
}
