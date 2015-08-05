import espalier from "../../src/js/espalier";
import DemoGraph from "./graph/demoGraph";
import demoTable from "./table/demoTable";
import dialogDemo from "./dialog/dialog-demo";

espalier.showInfo("It seems the libraries have loaded!");
espalier.wire("#standard-form");

espalier.el("#show-dialog")[0].onclick = function () {
    dialogDemo();
};

let table = demoTable(espalier.el("#demo-table"));

let graph = new DemoGraph(espalier.el("#wizard-container"), (graphValue) => {
    espalier.el("#graph-value").innerHtml = JSON.stringify(graphValue, null, 2);
});