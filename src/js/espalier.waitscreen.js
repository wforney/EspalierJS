import common from "./espalier.common";
import core from "./espalier.core";
import EspalierNode from "./espalier.domnode";

let animation;

if (common.browserSupportsCSSProperty("animation")) {
    animation = `<div class="sk-folding-cube">
  <div class="sk-cube1 sk-cube"></div>
  <div class="sk-cube2 sk-cube"></div>
  <div class="sk-cube4 sk-cube"></div>
  <div class="sk-cube3 sk-cube"></div>
</div>`;
} else {
    animation = `<div class="fallback">
  <div></div>
</div>`;
}

let pleaseWaitDiv = new EspalierNode(`<div class="wait-screen"><div>${animation}</div></div>`);
let showing = false;

let showVellum = function () {
    if (common.find(".wait-vellum").length > 0) {
        return;
    }

    common.body.append("<div class=\"vellum wait-vellum\" />");
};

let hideVellum = function () {
    let vellum = common.find(".wait-vellum");

    if (vellum.length > 0) {
        vellum[0].parentNode.removeChild(vellum[0]);
    }
};

export default {
    show: function () {
        if (showing) {
            return pleaseWaitDiv.getNode();
        }

        showVellum();
        common.body.append(pleaseWaitDiv.getNode());
        showing = true;
        return pleaseWaitDiv.getNode();
    },
    hide: function () {
        if (showing) {
            hideVellum();
            let pleaseWait = pleaseWaitDiv.getNode();
            pleaseWait.parentNode.removeChild(pleaseWait);
            showing = false;
        }
    }
};