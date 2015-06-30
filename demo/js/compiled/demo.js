(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.app = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"C:\\git\\EspalierJS\\demo\\js\\app.js":[function(require,module,exports){
espalier.showInfo("It seems the libraries have loaded!");
espalier.wire("#standard-form");

$(".datepicker").datepicker();

var table = espalier.table({
	container: $("#demo-table"),
	rowTemplate: Handlebars.compile($("#test-row-template").html()),
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

$("#search-records").click(function(){
    var filter = {
        StartDate: $("#start-date").val(),
        EndDate: $("#end-date").val(),
        ClientIPAddress: $("#ip-address").val(),
        UserName: $("#user-name").val(),
        MacAddress: $("#mac-address").val(),
        WorkingTelephoneNumber: $("#wtn").val(),
        BillingTelephoneNumber: $("#btn").val()
      };
      
      table.filter(filter);
});
},{}]},{},[])("C:\\git\\EspalierJS\\demo\\js\\app.js")
});