import messageFactory from "./espalier.messageFactory";
import waitscreen from "./espalier.waitscreen";
import common from "./espalier.common";
import core from "./espalier.core";

var getFooter = function (table) {
    var startAtPage = Math.max(0, table.settings.currentPage - 3);
    var endAtPage = Math.min(table.settings.pages - 1, table.settings.currentPage + 3 + Math.max(3 - table.settings.currentPage, 0));
    var pagingControl = "<ul class=\"pagination\">";

    pagingControl += `<li${table.settings.currentPage == 0 ? ` class="disabled"` : ""}><a data-page="${(table.settings.currentPage - 1) }" class="espalier-table-button" href="javascript: void(0);"><span aria-hidden="true">&laquo;</span></a></li>`;

    for (var i = startAtPage; i <= endAtPage; i++) {
        pagingControl += `<li${i === table.settings.currentPage ? ` class="active"` : ""}><a data-page="${i}" class="espalier-table-button" href="javascript: void(0);">${(i + 1) }</a></li>`;
    }

    var nextPage = (table.settings.currentPage + 1);
    pagingControl += `<li${nextPage == table.settings.pages ? ` class="disabled"` : ""}><a data-page="${nextPage}" class="espalier-table-button" href="javascript: void(0);"><span aria-hidden="true">&raquo;</span></a></li>`;

    return `<tfoot><tr><td colspan="42">${pagingControl}</td></tr></tfoot>`;
};

var renderTable = function (table) {
    var promise = new Promise(function (resolve, reject) {
        var rendered = `<table class="${table.settings.tableClass} table table-striped">`;

        if (table.settings.headerTemplate) {
            rendered += table.settings.headerTemplate();
        }

        rendered += "<tbody>";
        var startAtIndex = table.settings.currentPage * table.settings.pageSize;

        if (table.settings.data) {
            for (var i = startAtIndex; i < Math.min(startAtIndex + table.settings.pageSize, table.settings.data.length); i++) {
                rendered += table.settings.rowTemplate(table.settings.data[i]);
            }

            rendered += "</tbody>";

            if (table.settings.pages > 0) {
                rendered += getFooter(table);
            }
            resolve(rendered);
        } else {
            core.sendRequest({
                url: table.settings.fetchUrl,
                type: "POST",
                data: {
                    Page: table.settings.currentPage,
                    PageSize: table.settings.pageSize,
                    Criteria: table.settings.filter
                }
            }).then(function (result) {
                if (table.settings.fetchCallback) {
                    table.settings.fetchCallback(result);
                }

                table.settings.pages = Math.ceil(result.data.total / result.data.pageSize);
                for (var i = 0; i < result.data.records.length; i++) {
                    rendered += table.settings.rowTemplate(result.data.records[i]);
                }
                rendered += "</tbody>";
                rendered += getFooter(table);
                resolve(rendered);
            });
        }
    });

    promise.then(
        function (rendered) {
            table.settings.container.html(rendered);

            if (table.settings.renderedCallback) {
                table.settings.renderedCallback(table.settings.container[0].getElementsByTagName("table")[0]);
            }
        });
};

class TableInstance {
    constructor(args) {
        this.settings = {
            container: undefined,
            currentPage: 0,
            data: undefined,
            fetchCallback: undefined,
            fetchUrl: "",
            headerTemplate: undefined,
            pageSize: 10,
            prefetchPages: 5,
            rowTemplate: undefined,
            tableClass: "espalier-table",
            renderedCallback: undefined
        };

        $.extend(this.settings, args);

        if (!this.settings.fetchUrl && !this.settings.data) {
            throw new TypeError("You must either specify a fetch url or pass in data for the table to display.");
        }

        if (!this.settings.container) {
            throw new TypeError("You must specify a container to place the table in.")
        }

        if (!this.settings.rowTemplate) {
            throw new TypeError("You must provide a row template.")
        }

        if (this.settings.data) {
            this.settings.pages = Math.ceil(this.settings.data.length / this.settings.pageSize);
        }

        $.extend(this.settings, args);
    }

    next() {
        this.settings.currentPage++;
        renderTable(this);
        return this;
    }

    previous() {
        this.settings.currentPage--;
        renderTable(this);
        return this;
    }

    filter(filter) {
        this.settings.filter = filter;
        this.settings.currentPage = 0;
        renderTable(this);
        return this;
    }

    goToPage(page) {
        if (page < 0 || page >= this.settings.pages) {
            return;
        }

        this.settings.currentPage = page;
        renderTable(this);
        return this;
    }
};

var tables = {
    create: function (args) {
        var table = new TableInstance(args);
        table.settings.container.on("click", ".espalier-table-button", function () {
            table.goToPage($(this).data("page"));
        });
        renderTable(table);
        return table;
    }
};

export default tables;