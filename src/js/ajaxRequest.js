import messageFactory from "./espalier.messageFactory";
import common from "./espalier.common";
import mainMessage from "./helpers/main-message";
import pubsub from "pubsub-js";

let internals = new WeakMap();

let ajaxSuccess = function (responseText, event, onSuccess) {
    let jsonResponse = JSON.parse(responseText);

    if (event) {
        pubsub.publish(event, JSON.parse(jsonResponse));
    }

    if (onSuccess) {
        onSuccess(jsonResponse);
    }

    return jsonResponse;
};

export default class AjaxRequest {
    constructor(ajaxSettings) {
        internals.set(this, {
            request: new Promise((resolve, reject) => {
                let request = new XMLHttpRequest();
                let origin = `${window.location.protocol}//${window.location.host}`.toLowerCase();
                let isCors = (ajaxSettings.url.slice(0, 7).toLowerCase() === "http://" || ajaxSettings.url.slice(0, 8).toLowerCase() === "https://") && ajaxSettings.url.slice(0, origin.length).toLowerCase() !== origin;

                if (isCors && ajaxSettings.withCredentials) {
                    if ("withCredentials" in request) {
                        request.open(ajaxSettings.type, ajaxSettings.url, true);
                        request.withCredentials = true;
                    } else if (typeof XDomainRequest != "undefined") {
                        request = new XDomainRequest();
                        request.open(ajaxSettings.type, ajaxSettings.url);
                        request.onload = function () {
                            resolve(ajaxSuccess(this.responseText, ajaxSettings.event, ajaxSettings.onSuccess));
                        }
                    } else {
                        throw new Error("CORS not supported");
                    }
                } else {
                    request.open(ajaxSettings.type, ajaxSettings.url, true);
                }

                request.onreadystatechange = function () {
                    if (this.readyState === 4) {
                        if (this.status < 200) {
                            return;
                        }

                        if (this.status >= 200 && this.status < 400) {
                            resolve(ajaxSuccess(this.responseText, ajaxSettings.event, ajaxSettings.onSuccess));
                        } else if (this.status == 500) {
                            let jsonResponse = JSON.parse(this.responseText);
                            reject(jsonResponse.Message);
                        } else {
                            let jsonResponse = JSON.parse(this.responseText);
                            let errors = [];
                            let specificErrors = new Map();

                            for (let error of jsonResponse.errors) {
                                if (error.source && error.source.parameter) {
                                    if (error.source.parameter) {
                                        if (!specificErrors.has(error.source.parameter)) {
                                            specificErrors.set(error.source.parameter, []);
                                        }

                                        specificErrors.get(error.source.parameter).push(error.detail);
                                    } else {
                                        errors.push(error.detail);
                                    }
                                } else {
                                    errors.push(error.detail);
                                }
                            }

                            for (let fieldKey of specificErrors.keys()) {
                                var specificControl = common.find("#" + fieldKey.toLowerCase())[0];
                                let formControl = common.controls.get(specificControl);

                                if (formControl) {
                                    var fieldMessage = formControl.message;

                                    if (fieldMessage) {
                                        fieldMessage.show({
                                            message: specificErrors.get(fieldKey),
                                            messageType: messageFactory.messageType.Error
                                        });
                                    }
                                } else {
                                    errors = errors.concat(specificErrors.get(fieldKey));
                                }
                            }

                            if (errors.length > 0) {
                                mainMessage.showError(errors);
                                reject(errors);
                            }
                        }

                        reject(this.responseText);
                    }
                };

                switch (ajaxSettings.type) {
                    case "GET":
                        request.send();
                        return;
                    case "POST":
                    case "PUT":
                    case "DELETE":
                        request.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
                        request.send(JSON.stringify(ajaxSettings.data));
                        return;
                }

                request = null;
            })
        });
    }

    send() {
        return internals.get(this).request;
    }
}