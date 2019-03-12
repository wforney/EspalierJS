var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { SortOrder } from "../enums";
var HttpClientSource = /** @class */ (function () {
    function HttpClientSource(url, http) {
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
    HttpClientSource.prototype.GetPage = function (pageNumber, pageSize, sortColumn, sortOrder, filter) {
        return __awaiter(this, void 0, void 0, function () {
            var queryExpressions, _i, filter_1, filterExpression, urlParts, _a, _b, expression, queryString, url, responseMessage, data;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        queryExpressions = this.buildPagingQueryString(pageNumber, pageSize, sortColumn, sortOrder);
                        if (filter && filter instanceof Array) {
                            for (_i = 0, filter_1 = filter; _i < filter_1.length; _i++) {
                                filterExpression = filter_1[_i];
                                queryExpressions.push(filterExpression);
                            }
                        }
                        urlParts = this.url.split("?");
                        if (urlParts.length > 1) {
                            for (_a = 0, _b = urlParts[1].split("&"); _a < _b.length; _a++) {
                                expression = _b[_a];
                                queryExpressions.push(expression);
                            }
                        }
                        queryString = queryExpressions.join("&");
                        url = urlParts[0] + "?" + queryString;
                        return [4 /*yield*/, this.http.get(url)];
                    case 1:
                        responseMessage = _c.sent();
                        if (responseMessage.statusCode !== 200) {
                            throw responseMessage;
                        }
                        data = responseMessage.content;
                        return [2 /*return*/, {
                                totalRecords: data.totalRecords,
                                records: data.results,
                                pageCount: Math.ceil(data.totalRecords / pageSize),
                                currentPage: pageNumber
                            }];
                }
            });
        });
    };
    HttpClientSource.prototype.buildPagingQueryString = function (page, pageSize, sortPropertyName, sortOrder) {
        return [
            this.pageParameterName + "=" + page,
            this.pageSizeParameterName + "=" + pageSize,
            this.sortOnParameterName + "=" + sortPropertyName,
            this.sortOrderParameterName + "=" + (sortOrder == SortOrder.Descending ? this.descConst : this.ascConst)
        ];
    };
    return HttpClientSource;
}());
export { HttpClientSource };