import { IGridDataSource } from "./grid-data-source";
import { IEspalierPage } from "../espalier-page";
import { SortOrder } from "../enums";
import * as clone from "clone";

export class StaticDataSouce<TData> implements IGridDataSource<TData> {
  constructor(private data: TData[]) { }

  public async GetPage(pageNumber: number, pageSize: number, sortColumn: string,
    sortOrder: SortOrder | undefined, filter: (applyTo: TData[]) => Promise<TData[]> | string[] | undefined
  ): Promise<IEspalierPage<TData>> {
    sortOrder = sortOrder ? sortOrder : SortOrder.Ascending;
    const startRecord = (pageNumber - 1) * pageSize;
    const endRecord = startRecord + pageSize;
    let working = clone(this.data);

    if (filter) {
      working = <TData[]>(await filter(working));
    }

    if (sortColumn) {
      working = this.data.sort((a, b) => {
        if (a[sortColumn] < b[sortColumn]) {
          return sortOrder == SortOrder.Ascending ? -1 : 1;
        }

        if (a[sortColumn] > b[sortColumn]) {
          return sortOrder == SortOrder.Ascending ? 1 : -1;
        }

        return 0;
      });
    }

    const result: IEspalierPage<TData> = {
      currentPage: pageNumber,
      pageCount: Math.ceil(this.data.length / pageSize),
      records: working.slice(startRecord, endRecord > this.data.length ? this.data.length - 1 : endRecord),
      totalRecords: this.data.length
    };
    return Promise.resolve(result);
  }
}
