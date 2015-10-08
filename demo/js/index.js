import espalier from "../../src/js/espalier";
import DemoGraph from "./graph/demoGraph";
import demoTable from "./table/demoTable";
import dialogDemo from "./dialog/dialog-demo";
import popoverDemo from "./popover/popover-demo";

espalier.showInfo("It seems the libraries have loaded!");
espalier.wire("#standard-form");

espalier.el("#show-dialog")[0].onclick = function () {
    dialogDemo();
};

espalier.el("#show-popover-top")[0].onclick = function () {
    popoverDemo(espalier.el("#show-popover-top")[0]);
};
espalier.el("#show-popover-bottom")[0].onclick = function () {
    popoverDemo(espalier.el("#show-popover-bottom")[0]);
};
espalier.el("#show-popover-left")[0].onclick = function () {
    popoverDemo(espalier.el("#show-popover-left")[0]);
};
espalier.el("#show-popover-right")[0].onclick = function () {
    popoverDemo(espalier.el("#show-popover-right")[0]);
};

let table = demoTable(espalier.el("#demo-table"));

let graph = new DemoGraph(espalier.el("#wizard-container"), (graphValue) => {
    espalier.el("#graph-value").innerHtml = JSON.stringify(graphValue, null, 2);
});

window.espalier = espalier;