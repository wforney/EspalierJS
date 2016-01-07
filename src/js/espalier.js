import core from "./espalier.core";
import forms from "./espalier.forms";
import waitScreen from "./espalier.waitscreen";
import Table from "./espalier.table";
import dialog from "./espalier.dialog";
import Popover from "./espalier.popover";
import Graph from "./espalier.graph";
import GraphNode from "./espalier.graph.node";
import EspalierNode from "./espalier.domnode";
import RepeaterSource from "./Repeater/RepeaterSource";
import StaticSource from "./Repeater/StaticSource";
import AJAXSource from "./Repeater/AJAXSource";

var espalier = {
    isEmptyOrSpaces: core.isEmptyOrSpaces,
    showError: core.showError,
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
    node: (selector, root) => {
        return new EspalierNode(selector, root)
    },
    extend: core.extend,
    numberWithCommas: core.numberWithCommas,
    publish: core.publish,
    parseISODate: core.parseISODate,
    subscribe: core.subscribe,
    unsubscribe: core.unsubscribe,
    dialog: function (args) {
        return dialog(args).show();
    },
    popover: function(args) {
        return new Popover(args).show();  
    },
    Graph,
    GraphNode,
    repeater: {
        RepeaterSource,
        StaticSource,
        AJAXSource
    }
};

export default espalier;