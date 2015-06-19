define(["./espalier.messageFactory", "./espalier.waitscreen", "./espalier.common", "./espalier.core"],
    function (messageFactory, waitScreen, common, core) {
        "use strict";

		var getFooter = function (table) {
			var startAtPage = Math.max(0, table.settings.currentPage - 3);
			var endAtPage = Math.min(table.settings.pages - 1, table.settings.currentPage + 3 + Math.max(3 - table.settings.currentPage, 0));
			var pagingControl = $("<ul />");
			pagingControl.addClass("pagination");

			var previous = $("<li><a data-page=\"" + (table.settings.currentPage - 1) + "\" class=\"espalier-table-button\" href=\"javascript: void(0);\"><span aria-hidden=\"true\">&laquo;</span></a></li>");

			if (table.settings.currentPage == 0) {
				previous.addClass("disabled");
			}

			pagingControl.append(previous);

			for (var i = startAtPage; i <= endAtPage; i++) {
				var pageButton = $("<li><a data-page=\"" + i + "\" class=\"espalier-table-button\" href=\"javascript: void(0);\">" + (i + 1) + "</a></li>");

				if (i === table.settings.currentPage) {
					pageButton.addClass("active");
				}

				pagingControl.append(pageButton);
			}

			var nextPage = (table.settings.currentPage + 1);
			var next = $("<li><a data-page=\"" + nextPage + "\" class=\"espalier-table-button\" href=\"javascript: void(0);\"><span aria-hidden=\"true\">&raquo;</span></a></li>");

			if (nextPage == table.settings.pages) {
				next.addClass("disabled");
			}

			pagingControl.append(next);

			return $("<tfoot />").append($("<tr />").append($("<td colspan=\"42\" />").append(pagingControl)));
		};

		var renderTable = function (table) {
			var rendered = $("<table />");
			rendered.addClass(table.settings.tableClass);
			rendered.addClass("table");
			rendered.addClass("table-striped");

			if (table.settings.headerTemplate) {
				rendered.append(table.settings.headerTemplate());
			}

			var tbody = $("<tbody />");
			var startAtIndex = table.settings.currentPage * table.settings.pageSize;

			if (table.settings.data) {
				for (var i = startAtIndex; i < Math.min(startAtIndex + table.settings.pageSize, table.settings.data.length); i++) {
					tbody.append(table.settings.rowTemplate(table.settings.data[i]));
				}
				rendered.append(tbody);
				if (table.settings.pages > 0) {
					rendered.append(getFooter(table));
				}
				table.settings.container.html(rendered);
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
						tbody.append(table.settings.rowTemplate(result.data.records[i]));
					}
					rendered.append(tbody);
					rendered.append(getFooter(table));
					table.settings.container.html(rendered);
				});
			}
		};

		var TableInstance = function (args) {
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
				tableClass: "espalier-table"
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
		};

		TableInstance.prototype.next = function () {
			this.settings.currentPage++;
			renderTable(this);
			return this;
		};

		TableInstance.prototype.previous = function () {
			this.settings.currentPage--;
			renderTable(this);
			return this;
		};

		TableInstance.prototype.filter = function (filter) {
			this.settings.filter = filter;
			this.settings.currentPage = 0;
			renderTable(this);
			return this;
		};

		TableInstance.prototype.goToPage = function (page) {
			if (page < 0 || page >= this.settings.pages) {
				return;
			}

			this.settings.currentPage = page;
			renderTable(this);
			return this;
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

		return tables;
	});