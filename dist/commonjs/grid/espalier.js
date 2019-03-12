"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
Object.defineProperty(exports, "__esModule", { value: true });
var espalier_config_1 = require("./espalier-config");
var aurelia_framework_1 = require("aurelia-framework");
var aurelia_dependency_injection_1 = require("aurelia-dependency-injection");
var page_info_1 = require("./page-info");
var enums_1 = require("./enums");
var page_info_2 = require("./page-info");
exports.PageInfo = page_info_2.PageInfo;
var helpers_1 = require("./helpers");
var formatters_1 = require("./formatters/formatters");
var tippy_js_1 = require("tippy.js");
var buttonStyleElementName = "espalier-button-styles";
/**
 * Espalier is a custom element build for the Aurelia framework that
 * makes it simple to work with server-side page-able, sort-able
 * datasets.
 */
var EspalierGrid = /** @class */ (function () {
    /**
     * Create a new instance of Espalier.
     * @param taskQueue The Aurelia TaskQueue.
     * @param config Global configuration for Espalier.
     * @param viewCompiler ViewCompiler for compiling template strings for column types.
     * @param viewResources ViewResources used by the ViewCompiler when compiling a view.
     */
    function EspalierGrid(taskQueue, config, viewCompiler, viewResources) {
        this.taskQueue = taskQueue;
        this.config = config;
        this.viewCompiler = viewCompiler;
        this.viewResources = viewResources;
        /**
         * The current page the grid is on.
         */
        this.page = 1;
        this.loading = true;
        this.pages = [];
        this.filterShowing = false;
        this.appliedFilters = [];
    }
    /**
     * The Aurelia attached lifecycle event.
     */
    EspalierGrid.prototype.attached = function () {
        if (!document.querySelectorAll("#" + buttonStyleElementName).length) {
            this.addButtonStyles();
        }
    };
    /**
     * Fetches records that match the filter, goes to the first page, and loads the first page into the grid.
     * @param filter A build-out query string to be appenended to any sorting and paging query parameters.
     */
    EspalierGrid.prototype.applyFilter = function (filter, appliedFilters) {
        this.filter = filter;
        this.appliedFilters = appliedFilters ? appliedFilters : [];
        this.page = 1;
        return this.fetch();
    };
    /**
     * Reset the filter back to the default specified for this Espalier
     * instance.
     */
    EspalierGrid.prototype.clearFilter = function () {
        if (!this.settings.filter) {
            this.filter = this.defaultFilter;
            return this.fetch();
        }
        return this.settings.filter.reset();
    };
    /**
     * Fetch the current page and load it into the grid.
     */
    EspalierGrid.prototype.reload = function () {
        return this.fetch();
    };
    /**
     * Fetches records on the given page number and loads them into the grid.
     * @param pageNumber The page number to fetch.
     */
    EspalierGrid.prototype.goto = function (pageNumber) {
        this.page = pageNumber;
        return this.fetch();
    };
    /**
     * Sort by a given column. It toggles through Ascending > Descending > Not sorted on
     * @param column The column to sort on.
     */
    EspalierGrid.prototype.sortBy = function (column) {
        var sortProperty = this.getSortPropertyName(column);
        if (!sortProperty) {
            return Promise.resolve();
        }
        this.loading = true;
        if (this.sortColumn === column) {
            switch (this.sortColumn.sortOrder) {
                case enums_1.SortOrder.Ascending:
                    this.sortColumn.sortOrder = enums_1.SortOrder.Descending;
                    break;
                case enums_1.SortOrder.Descending:
                    this.sortColumn.sortOrder = enums_1.SortOrder.NotSpecified;
                    break;
                default:
                    this.sortColumn.sortOrder = enums_1.SortOrder.Ascending;
                    break;
            }
        }
        else {
            if (this.sortColumn) {
                this.sortColumn.sortOrder = enums_1.SortOrder.NotSpecified;
            }
            this.sortColumn = column;
            this.sortColumn.sortOrder = enums_1.SortOrder.Ascending;
        }
        this.page = 1;
        return this.fetch();
    };
    /**
     * Used to figure out which buttons to show.
     * @param record Calculate which buttons should be available for the given record.
     */
    EspalierGrid.prototype.getButtons = function (record) {
        return this.settings.getButtons ? this.settings.getButtons(record) : [];
    };
    /**
     * Handles the button click event of a table button in a row.
     * @param button The TableButton that was clicked.
     * @param record The record associated with the row the button is in.
     */
    EspalierGrid.prototype.buttonClicked = function (button, record) {
        button.onClick(record);
    };
    /**
     * Open the filter if this instance has one.
     */
    EspalierGrid.prototype.openFilter = function () {
        if (!this.settings || !this.settings.filter) {
            return;
        }
        this.tableContainer.appendChild(this.settings.filter.container);
        this.settings.filter.container.style.top = this.tableHeader.clientHeight + "px";
        this.filterShowing = true;
    };
    /**
     * Close the filter if it's open.
     */
    EspalierGrid.prototype.closeFilter = function () {
        if (!this.settings || !this.settings.filter) {
            return;
        }
        this.tableContainer.removeChild(this.settings.filter.container);
        this.filterShowing = false;
    };
    /**
     * Aurelia calls this when the settings are changed. Espalier figures out
     * if the settings are valid, then queues a task to load the grid.
     */
    EspalierGrid.prototype.settingsChanged = function () {
        var _this = this;
        if (!this.settings) {
            return;
        }
        if (this.settings.filter &&
            this.settings.filter.container &&
            this.settings.filter.container.parentElement) {
            this.settings.filter.container.parentElement.removeChild(this.settings.filter.container);
            this.settings.filter.container.classList.add("espalier-filter");
        }
        for (var _i = 0, _a = this.settings.columns; _i < _a.length; _i++) {
            var column = _a[_i];
            if (column.sortOrder) {
                this.sortColumn = column;
            }
        }
        if (!this.sortColumn) {
            this.sortColumn = this.settings.columns[0];
        }
        if (this.settings.filter) {
            this.settings.filter["espalier"] = this;
        }
        this.pageSize = this.pageSize ? this.pageSize : this.config.defaultPageSize;
        for (var _b = 0, _c = this.settings.columns; _b < _c.length; _b++) {
            var column = _c[_b];
            if (!column.templateName) {
                switch (column.type) {
                    case enums_1.ColumnType.Date:
                        column.templateName = "date";
                        break;
                    case enums_1.ColumnType.DateTime:
                        column.templateName = "date-time";
                        break;
                    case enums_1.ColumnType.Time:
                        column.templateName = "time";
                        break;
                    default:
                        column.templateName = "default";
                        break;
                }
            }
            if (!this.config.getView(column.templateName)) {
                var templateString = this.config.cellViews.get(column.templateName);
                if (!templateString) {
                    throw new Error("Espalier was unable to find a template named \"" + column.templateName + "\"... perhaps you need to register it using EspalierConfig?");
                }
                var factory = this.viewCompiler.compile(templateString, this.viewResources);
                this.config.setView(column.templateName, factory);
            }
            if (!column.dataFormatter) {
                switch (column.type) {
                    case enums_1.ColumnType.Date:
                    case enums_1.ColumnType.DateTime:
                    case enums_1.ColumnType.Time:
                        column.dataFormatter = new formatters_1.DateFormatter();
                        break;
                    case enums_1.ColumnType.Currency:
                        column.dataFormatter = new formatters_1.CurrencyFormatter();
                        break;
                    case enums_1.ColumnType.Number:
                        column.dataFormatter = new formatters_1.NumberFormatter();
                        break;
                    case enums_1.ColumnType.Integer:
                        column.dataFormatter = new formatters_1.IntegerFormatter();
                        break;
                    default:
                        column.dataFormatter = new formatters_1.TextFormatter();
                        break;
                }
            }
            column.view = this.config.getView(column.templateName);
        }
        this.taskQueue.queueMicroTask(function () {
            if (_this.settings.filter) {
                return _this.settings.filter.applyFilter();
            }
            return _this.fetch();
        });
    };
    /**
     * Figure out out the sort property name of a given column.
     * @param column The column to figure out the sort property name of.
     */
    EspalierGrid.prototype.getSortPropertyName = function (column) {
        if (!column || column.disableSort) {
            return "";
        }
        return column.sortPropertyName ? column.sortPropertyName : column.propertyName;
    };
    /**
     * Add url encoded SVG image styles for sort, filter, and close icons. Espalier
     * does it this way so the button color is customizable by the consumer.
     */
    EspalierGrid.prototype.addButtonStyles = function () {
        var encodedColor = encodeURIComponent(this.config.buttonColor);
        var red = encodeURIComponent("rgb(217,83,79)");
        var white = encodeURIComponent("rgb(255,255,255)");
        var filter = "%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2222%22%20height%3D%2228%22%20viewBox%3D%220%200%2022%2028%22%3E%0A%3Ctitle%3Efilter%3C%2Ftitle%3E%0A%3Cpath%20stroke%3D%22" + encodedColor + "%22%20fill%3D%22" + encodedColor + "%22%20d%3D%22M21.922%204.609c0.156%200.375%200.078%200.812-0.219%201.094l-7.703%207.703v11.594c0%200.406-0.25%200.766-0.609%200.922-0.125%200.047-0.266%200.078-0.391%200.078-0.266%200-0.516-0.094-0.703-0.297l-4-4c-0.187-0.187-0.297-0.438-0.297-0.703v-7.594l-7.703-7.703c-0.297-0.281-0.375-0.719-0.219-1.094%200.156-0.359%200.516-0.609%200.922-0.609h20c0.406%200%200.766%200.25%200.922%200.609z%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E";
        var close = "%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2232%22%20height%3D%2232%22%20viewBox%3D%220%200%2032%2032%22%3E%0A%3Ctitle%3Ex%3C%2Ftitle%3E%0A%3Cpath%20stroke%3D%22" + red + "%22%20fill%3D%22" + red + "%22%20d%3D%22M30%2024.398l-8.406-8.398%208.406-8.398-5.602-5.602-8.398%208.402-8.402-8.402-5.598%205.602%208.398%208.398-8.398%208.398%205.598%205.602%208.402-8.402%208.398%208.402z%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E";
        var rightCaret = "%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%229%22%20height%3D%2228%22%20viewBox%3D%220%200%209%2028%22%3E%0A%3Ctitle%3Ecaret-right%3C%2Ftitle%3E%0A%3Cpath%20stroke%3D%22" + encodedColor + "%22%20fill%3D%22" + encodedColor + "%22%20d%3D%22M9%2014c0%200.266-0.109%200.516-0.297%200.703l-7%207c-0.187%200.187-0.438%200.297-0.703%200.297-0.547%200-1-0.453-1-1v-14c0-0.547%200.453-1%201-1%200.266%200%200.516%200.109%200.703%200.297l7%207c0.187%200.187%200.297%200.438%200.297%200.703z%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E";
        var upCaret = "%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2228%22%20viewBox%3D%220%200%2016%2028%22%3E%0A%3Ctitle%3Ecaret-up%3C%2Ftitle%3E%0A%3Cpath%20stroke%3D%22" + encodedColor + "%22%20fill%3D%22" + encodedColor + "%22%20d%3D%22M16%2019c0%200.547-0.453%201-1%201h-14c-0.547%200-1-0.453-1-1%200-0.266%200.109-0.516%200.297-0.703l7-7c0.187-0.187%200.438-0.297%200.703-0.297s0.516%200.109%200.703%200.297l7%207c0.187%200.187%200.297%200.438%200.297%200.703z%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E";
        var downCaret = "%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2228%22%20viewBox%3D%220%200%2016%2028%22%3E%0A%3Ctitle%3Ecaret-down%3C%2Ftitle%3E%0A%3Cpath%20stroke%3D%22" + encodedColor + "%22%20fill%3D%22" + encodedColor + "%22%20d%3D%22M16%2011c0%200.266-0.109%200.516-0.297%200.703l-7%207c-0.187%200.187-0.438%200.297-0.703%200.297s-0.516-0.109-0.703-0.297l-7-7c-0.187-0.187-0.297-0.438-0.297-0.703%200-0.547%200.453-1%201-1h14c0.547%200%201%200.453%201%201z%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E";
        var expandCaret = "%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2216%22%20height%3D%2228%22%20viewBox%3D%220%200%2016%2028%22%3E%0A%3Ctitle%3Ecaret-down%3C%2Ftitle%3E%0A%3Cpath%20stroke%3D%22" + white + "%22%20fill%3D%22" + white + "%22%20d%3D%22M16%2011c0%200.266-0.109%200.516-0.297%200.703l-7%207c-0.187%200.187-0.438%200.297-0.703%200.297s-0.516-0.109-0.703-0.297l-7-7c-0.187-0.187-0.297-0.438-0.297-0.703%200-0.547%200.453-1%201-1h14c0.547%200%201%200.453%201%201z%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E";
        var closeButton = "%3Csvg%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2232%22%20height%3D%2232%22%20viewBox%3D%220%200%2032%2032%22%3E%0A%3Ctitle%3Ex%3C%2Ftitle%3E%0A%3Cpath%20stroke%3D%22" + white + "%22%20fill%3D%22" + white + "%22%20d%3D%22M30%2024.398l-8.406-8.398%208.406-8.398-5.602-5.602-8.398%208.402-8.402-8.402-5.598%205.602%208.398%208.398-8.398%208.398%205.598%205.602%208.402-8.402%208.398%208.402z%22%3E%3C%2Fpath%3E%0A%3C%2Fsvg%3E";
        var css = document.createElement("style");
        css.type = "text/css";
        css.id = buttonStyleElementName;
        css.innerHTML = "\n      div.espalier-table button.expand-caret {\n        background-image: url('data:image/svg+xml," + expandCaret + "');\n      }\n\n      div.espalier-table a.close-button, div.espalier-table button.close-button {\n        background-image: url('data:image/svg+xml," + closeButton + "');\n      }\n\n      th.sortable > div > span::after {\n        background-image: url('data:image/svg+xml," + rightCaret + "');\n      }\n\n      thead th.filter-button a i::after {\n        background-image: url('data:image/svg+xml," + filter + "');\n      }\n\n      thead th.close-filter-button a i::after {\n        background-image: url('data:image/svg+xml," + close + "');\n      }\n\n      th.sortable.sort-asc > div > span::after {\n        background-image: url('data:image/svg+xml," + upCaret + "');\n      }\n\n      th.sortable.sort-desc > div > span::after {\n        background-image: url('data:image/svg+xml," + downCaret + "');\n      }\n    ";
        document.querySelectorAll("head")[0].appendChild(css);
    };
    /**
     * Fetch a page of records from the server.
     */
    EspalierGrid.prototype.fetch = function () {
        return __awaiter(this, void 0, void 0, function () {
            var page, startAtPage, endAtPage, nextPage, pages, i;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loading = true;
                        return [4 /*yield*/, this.settings.dataSource.GetPage(this.page, this.pageSize, this.getSortPropertyName(this.sortColumn), this.sortColumn ? this.sortColumn.sortOrder : enums_1.SortOrder.NotSpecified, this.filter)];
                    case 1:
                        page = _a.sent();
                        this.recordCount = page.totalRecords;
                        this.records = this.settings.postFetch ? this.settings.postFetch(page.records) : page.records;
                        this.recordsFrom = (this.page - 1) * this.pageSize + 1;
                        this.recordsTo = Math.min(this.recordCount, this.page * this.pageSize);
                        startAtPage = Math.max(1, this.page - 3);
                        endAtPage = Math.min(page.pageCount, this.page + 3 + Math.max(3 - this.page, 1));
                        nextPage = (this.page + 1);
                        pages = [];
                        if (this.page > 2) {
                            pages.push(new page_info_1.PageInfo(false, false, "&laquo;", 1));
                        }
                        if (this.page > 1) {
                            pages.push(new page_info_1.PageInfo(false, false, "&lsaquo;", this.page - 1));
                        }
                        for (i = startAtPage; i <= endAtPage; i++) {
                            pages.push(new page_info_1.PageInfo(false, i === this.page, i.toString(), i));
                        }
                        if ((page.pageCount + 1) > nextPage) {
                            pages.push(new page_info_1.PageInfo(false, false, "&rsaquo;", nextPage));
                        }
                        if ((page.pageCount - 1) > this.page) {
                            pages.push(new page_info_1.PageInfo(false, false, "&raquo;", page.pageCount));
                        }
                        this.pages = pages;
                        if (this.filterShowing) {
                            this.closeFilter();
                        }
                        this.taskQueue.queueMicroTask(function () {
                            var columnHeads = helpers_1.ToArray(_this.tableHeader.querySelectorAll("th"));
                            for (var _i = 0, columnHeads_1 = columnHeads; _i < columnHeads_1.length; _i++) {
                                var columnHead = columnHeads_1[_i];
                                if (!columnHead.title) {
                                    continue;
                                }
                                tippy_js_1.default(columnHead, {
                                    placement: "bottom",
                                    arrow: true,
                                    size: "large",
                                    followCursor: true,
                                    content: columnHead.title
                                });
                            }
                        });
                        this.loading = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime })
    ], EspalierGrid.prototype, "pageSize", void 0);
    __decorate([
        aurelia_framework_1.bindable({ defaultBindingMode: aurelia_framework_1.bindingMode.oneTime })
    ], EspalierGrid.prototype, "defaultFilter", void 0);
    __decorate([
        aurelia_framework_1.bindable()
    ], EspalierGrid.prototype, "settings", void 0);
    EspalierGrid = __decorate([
        aurelia_framework_1.customElement("esp-grid"),
        aurelia_dependency_injection_1.inject(aurelia_framework_1.TaskQueue, espalier_config_1.EspalierConfig, aurelia_framework_1.ViewCompiler, aurelia_framework_1.ViewResources)
    ], EspalierGrid);
    return EspalierGrid;
}());
exports.EspalierGrid = EspalierGrid;
