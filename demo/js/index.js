import espalier from "../../src/js/espalier";
import DemoGraph from "./graph/demoGraph";
import demoTable from "./table/demoTable";
import dialogDemo from "./dialog/dialog-demo";
import popoverDemo from "./popover/popover-demo";

espalier.wire("#standard-form");

espalier.el("#show-dialog")[0].onclick = function () {
    dialogDemo();
};

espalier.el("#show-popover-top-left")[0].onclick = function () {
    popoverDemo(espalier.el("#show-popover-top-left")[0]);
};
espalier.el("#show-popover-top-right")[0].onclick = function () {
    popoverDemo(espalier.el("#show-popover-top-right")[0]);
};
espalier.el("#show-popover-bottom-left")[0].onclick = function () {
    popoverDemo(espalier.el("#show-popover-bottom-left")[0]);
};
espalier.el("#show-popover-bottom-right")[0].onclick = function () {
    popoverDemo(espalier.el("#show-popover-bottom-right")[0]);
};

espalier.el("#show-popover-top-center")[0].onclick = function () {
    popoverDemo(espalier.el("#show-popover-top-center")[0]);
};
espalier.el("#show-popover-bottom-center")[0].onclick = function () {
    popoverDemo(espalier.el("#show-popover-bottom-center")[0]);
};
espalier.el("#show-popover-left-center")[0].onclick = function () {
    popoverDemo(espalier.el("#show-popover-left-center")[0]);
};
espalier.el("#show-popover-right-center")[0].onclick = function () {
    popoverDemo(espalier.el("#show-popover-right-center")[0]);
};

let table = demoTable(espalier.node("#demo-table"));

let graph = new DemoGraph(espalier.el("#wizard-container"), (graphValue) => {
    espalier.el("#graph-value").innerHtml = JSON.stringify(graphValue, null, 2);
});

window.espalier = espalier;