import espalier from "../espalier";
import DemoGraph from "./graph/demoGraph";
import demoTable from "./table/demoTable";
import dialogDemo from "./dialog/dialog-demo";

espalier.showInfo("It seems the libraries have loaded!");
espalier.wire("#standard-form");

$(".datepicker").datepicker();

$("#show-dialog").click(function () {
    dialogDemo();
});

let table = demoTable($("#demo-table"));

$("#search-records").click(function () {
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

let graph = new DemoGraph($("#wizard-container"), (graphValue) => {
    $("#graph-value").html(JSON.stringify(graphValue, null, 2));
});