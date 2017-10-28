import { IEspalierDataFormatter } from "../espalier-data-formatter";
export declare class DateFormatter implements IEspalierDataFormatter {
    format(data: any): {
        date: string;
        time: string;
    };
}
