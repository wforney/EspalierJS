var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { SortOrder } from "../enums";
import * as clone from "clone";
export class StaticDataSouce {
    constructor(data) {
        this.data = data;
    }
    GetPage(pageNumber, pageSize, sortColumn, sortOrder, filter) {
        return __awaiter(this, void 0, void 0, function* () {
            sortOrder = sortOrder ? sortOrder : SortOrder.Ascending;
            const startRecord = (pageNumber - 1) * pageSize;
            const endRecord = startRecord + pageSize;
            let working = clone(this.data);
            if (filter) {
                working = (yield filter(working));
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
            const result = {
                currentPage: pageNumber,
                pageCount: Math.ceil(this.data.length / pageSize),
                records: working.slice(startRecord, endRecord > this.data.length ? this.data.length - 1 : endRecord),
                totalRecords: this.data.length
            };
            return Promise.resolve(result);
        });
    }
}
