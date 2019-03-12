var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { SortOrder } from "../enums";
export class HttpClientSource {
    constructor(url, http) {
        this.url = url;
        this.http = http;
        /**
         * The name of the query string parameter for the 1-based
         * page number to return.
         */
        this.pageParameterName = "Page";
        /**
         * The name of the query string parameter that specifies
         * the number of records to return.
         */
        this.pageSizeParameterName = "PageSize";
        /**
         * The name of the query string parameter that specifies
         * the name of the  column to sort on.
         */
        this.sortOnParameterName = "SortOn";
        /**
         * The name of the query string parameter that specified
         * the order to sort in, either ascending or descending.
         */
        this.sortOrderParameterName = "SortOrder";
        /**
         * The constant value indicating a descending sort order.
         */
        this.descConst = "desc";
        /**
         * The constant value indicating an ascending sort order.
         */
        this.ascConst = "asc";
    }
    GetPage(pageNumber, pageSize, sortColumn, sortOrder, filter) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryExpressions = this.buildPagingQueryString(pageNumber, pageSize, sortColumn, sortOrder);
            if (filter && filter instanceof Array) {
                for (const filterExpression of filter) {
                    queryExpressions.push(filterExpression);
                }
            }
            const urlParts = this.url.split("?");
            if (urlParts.length > 1) {
                for (const expression of urlParts[1].split("&")) {
                    queryExpressions.push(expression);
                }
            }
            const queryString = queryExpressions.join("&");
            const url = `${urlParts[0]}?${queryString}`;
            const responseMessage = yield this.http.get(url);
            if (responseMessage.statusCode !== 200) {
                throw responseMessage;
            }
            const data = responseMessage.content;
            return {
                totalRecords: data.totalRecords,
                records: data.results,
                pageCount: Math.ceil(data.totalRecords / pageSize),
                currentPage: pageNumber
            };
        });
    }
    buildPagingQueryString(page, pageSize, sortPropertyName, sortOrder) {
        return [
            `${this.pageParameterName}=${page}`,
            `${this.pageSizeParameterName}=${pageSize}`,
            `${this.sortOnParameterName}=${sortPropertyName}`,
            `${this.sortOrderParameterName}=${(sortOrder == SortOrder.Descending ? this.descConst : this.ascConst)}`
        ];
    }
}
