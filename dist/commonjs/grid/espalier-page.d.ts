export interface IEspalierPage<TData> {
    currentPage: number;
    pageCount: number;
    totalRecords: number;
    records: TData[];
}
