/// <reference path="../../../typings/jquery/jquery.d.ts"/>
/// <reference path="../../../typings/jasmine/jasmine.d.ts"/>
/// <reference path="../../../typings/jasmine-jquery/jasmine-jquery.d.ts"/>
/// <reference path="../../../typings/handlebars/handlebars.d.ts" />
describe("Espalier tables", function () {
	var tables;

	beforeEach(function (done) {
		require(["js/espalier.tables"], function (t) {
			tables = t;
			loadFixtures("emptyDivFixture.html", "testRowTemplate.html");
			done();
		});
	});

	it("throws an error if it is missing fetchUrl and data.", function () {
		expect(tables.create).toThrowError("You must either specify a fetch url or pass in data for the table to display.");
	});

	var withNoContainer = function () {
		tables.create({ fetchUrl: "blah" });
	};

	it("throws an error if no container is specified.", function () {
		expect(withNoContainer).toThrowError("You must specify a container to place the table in.");
	});

	var withNoRowTemplate = function () {
		tables.create({ fetchUrl: "blah", container: $("#empty-div") });
	};

	it("throws an error if no rowTemplate is specified.", function () {
		expect(withNoRowTemplate).toThrowError("You must provide a row template.");
	});

	describe("creates a table", function () {
		var table;
		var emptyDiv;
		var rowTemplate;

		beforeEach(function () {
			emptyDiv = $("#empty-div");
			rowTemplate = Handlebars.compile($("#test-row-template").html());
			table = tables.create({
				container: emptyDiv,
				rowTemplate: rowTemplate,
				headerTemplate: Handlebars.compile($("#test-header-template").html()),
				data: [
					{ col1: "Record 1-1", col2: "Record 1-2" },
					{ col1: "Record 2-1", col2: "Record 2-2" },
					{ col1: "Record 3-1", col2: "Record 3-2" },
					{ col1: "Record 4-1", col2: "Record 4-2" },
					{ col1: "Record 5-1", col2: "Record 5-2" },
					{ col1: "Record 6-1", col2: "Record 6-2" },
					{ col1: "Record 7-1", col2: "Record 7-2" },
					{ col1: "Record 8-1", col2: "Record 8-2" },
					{ col1: "Record 9-1", col2: "Record 9-2" },
					{ col1: "Record 10-1", col2: "Record 10-2" },
					{ col1: "Record 11-1", col2: "Record 11-2" },
					{ col1: "Record 12-1", col2: "Record 12-2" },
					{ col1: "Record 13-1", col2: "Record 13-2" },
					{ col1: "Record 14-1", col2: "Record 14-2" },
					{ col1: "Record 15-1", col2: "Record 15-2" },
					{ col1: "Record 16-1", col2: "Record 16-2" },
					{ col1: "Record 17-1", col2: "Record 17-2" },
					{ col1: "Record 18-1", col2: "Record 18-2" },
					{ col1: "Record 19-1", col2: "Record 19-2" },
					{ col1: "Record 20-1", col2: "Record 20-2" },
					{ col1: "Record 21-1", col2: "Record 21-2" },
					{ col1: "Record 22-1", col2: "Record 22-2" },
					{ col1: "Record 23-1", col2: "Record 23-2" },
					{ col1: "Record 24-1", col2: "Record 24-2" },
					{ col1: "Record 25-1", col2: "Record 25-2" }
				]
			});
		});

		it("and it should be inside our empty-div.", function () {
			expect($(".espalier-table")).toExist();
		});

		it("with a header", function () {
			expect($(".espalier-table > thead").length).toBe(1);
		});

		it("with 10 rows", function () {
			expect($(".espalier-table > tbody > tr").length).toBe(10);
		});

		it("has Record 1-1 as the value of the first cell.", function () {
			expect($(".espalier-table > tbody td").first().html()).toBe("Record 1-1");
		});

		it("has Record Record 10-2 as the value of the last cell.", function () {
			expect($(".espalier-table > tbody td").last().html()).toBe("Record 10-2");
		});

		describe("after calling next", function() {
			beforeEach(function () {
				table.next();
			});
			
			it("it has 10 rows", function () {
				expect($(".espalier-table > tbody > tr").length).toBe(10);
			});
			
			it("Record 11-1 is the value of the first cell", function () {
				expect($(".espalier-table > tbody td").first().html()).toBe("Record 11-1");
			});
	
			it("and Record 20-2 is the value of the last cell.", function () {
				expect($(".espalier-table > tbody td").last().html()).toBe("Record 20-2");
			});
		});

		describe("after calling next twice", function() {
			beforeEach(function () {
				table.next().next();
			});
			
			it("it has 5 rows", function () {
				expect($(".espalier-table > tbody > tr").length).toBe(5);
			});
			
			it("Record 21-1 is the value of the first cell", function () {
				expect($(".espalier-table > tbody td").first().html()).toBe("Record 21-1");
			});
	
			it("and Record 25-2 is the value of the last cell.", function () {
				expect($(".espalier-table > tbody td").last().html()).toBe("Record 25-2");
			});
		});
	});
});