import core from "./espalier.core";
import messageFactory from "./espalier.messageFactory";
import forms from "./espalier.forms";
import waitScreen from "./espalier.waitscreen";
import Table from "./espalier.table";
import dialog from "./espalier.dialog";
import Graph from "./espalier.graph";
import GraphNode from "./espalier.graph.node";
import EspalierNode from "./espalier.domnode";

var espalier = {
    showWarning: core.showWarning,
    showInfo: core.showInfo,
    sendRequest: core.sendRequest,
    Table,
    wire: forms,
    showWaitScreen: waitScreen.show,
    hideWaitScreen: waitScreen.hide,
    shortDate: core.shortDate,
    shortTime: core.shortTime,
    el: core.find,
    node: (selector) => {
        return new EspalierNode(selector)
    },
    extend: core.extend,
    numberWithCommas: core.numberWithCommas,
    publish: core.publish,
    parseISODate: core.parseISODate,
    subscribe: core.subscribe,
    dialog: function (args) {
        return dialog(args).show();
    },
    Graph,
    GraphNode
};

export default espalier;