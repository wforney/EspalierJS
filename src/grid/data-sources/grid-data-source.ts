import { IEspalierPage } from "../espalier-page";
import { SortOrder } from "../enums";

export interface IGridDataSource<TData> {
  GetPage(pageNumber: number, pageSize: number, sortColumn: string,
    sortOrder: SortOrder | undefined,
    filter: (applyTo: TData[]) => Promise<TData[]> | string[] | undefined):
    Promise<IEspalierPage<TData>>;
}
