import core from "./espalier.core";
import messageFactory from "./espalier.messageFactory";
import forms from "./espalier.forms";
import waitScreen from "./espalier.waitscreen";
import tables from "./espalier.tables";
import dialog from "./espalier.dialog";
import graph from "./espalier.graph";
import GraphNode from "./espalier.graph.node";

var espalier = {
    showWarning: core.showWarning,
    showInfo: core.showInfo,
    sendRequest: core.sendRequest,
    table: tables.create,
    wire: forms,
    showWaitScreen: waitScreen.show,
    hideWaitScreen: waitScreen.hide,
    shortDate: core.shortDate,
    shortTime: core.shortTime,
    numberWithCommas: core.numberWithCommas,
    publish: core.publish,
    parseISODate: core.parseISODate,
    subscribe: core.subscribe,
    dialog: function (args) {
        return dialog(args).show();
    },
    graph,
    GraphNode
};

export default espalier;