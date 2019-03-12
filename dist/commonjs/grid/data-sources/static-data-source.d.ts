import { IGridDataSource } from "./grid-data-source";
import { IEspalierPage } from "../espalier-page";
import { SortOrder } from "../enums";
export declare class StaticDataSouce<TData> implements IGridDataSource<TData> {
    private data;
    constructor(data: TData[]);
    GetPage(pageNumber: number, pageSize: number, sortColumn: string, sortOrder: SortOrder | undefined, filter: (applyTo: TData[]) => Promise<TData[]> | string[] | undefined): Promise<IEspalierPage<TData>>;
}
