import messageFactory from "./espalier.messageFactory";
import waitscreen from "./espalier.waitscreen";
import common from "./espalier.common";
import pubsub from "pubsub-js";
import isString from "./helpers/is-string";
import addListener from "./helpers/add-listener";
import matches from "./helpers/matches";

var mainMessage = messageFactory.create({
    attachTo: common.body.getNode()
});

var parseDate;
var testDate = new Date('2011-06-02T09:34:29+02:00');

if (!testDate || +testDate !== 1307000069000) {
    parseDate = function (s) {
        var day, tz,
            rx = /^(\d{4}\-\d\d\-\d\d([tT ][\d:\.]*)?)([zZ]|([+\-])(\d\d):(\d\d))?$/,
            p = rx.exec(s) || [];
        if (p[1]) {
            day = p[1].split(/\D/);
            for (var i = 0, L = day.length; i < L; i++) {
                day[i] = parseInt(day[i], 10) || 0;
            };
            day[1] -= 1;
            day = new Date(Date.UTC.apply(Date, day));
            if (!day.getDate()) return NaN;
            if (p[5]) {
                tz = (parseInt(p[5], 10) * 60);
                if (p[6]) tz += parseInt(p[6], 10);
                if (p[4] == '+') tz *= -1;
                if (tz) day.setUTCMinutes(day.getUTCMinutes() + tz);
            }
            return day;
        }
        return NaN;
    };
}
else {
    parseDate = function (s) {
        return new Date(s);
    };
}

testDate = null;

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

let core = {
    sendRequest: function (req) {
        waitscreen.show();
        let existingMessages = core.find("." + mainMessage.settings.messageContainerClass);

        for (let message of existingMessages) {
            message.parentNode.removeChild(message);
        }

        let ajaxSettings = {
            type: "GET",
            withCredentials: true
        };

        core.extend(ajaxSettings, req);

        let promise = new Promise((resolve, reject) => {
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
                        resolve(ajaxSuccess(this.responseText, req.event, req.onSuccess));
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
                        resolve(ajaxSuccess(this.responseText, req.event, req.onSuccess));
                    } else if (this.status == 500) {
                        let jsonResponse = JSON.parse(this.responseText);
                        core.showError({
                            message: jsonResponse.Message,
                            cssClass: "error"
                        });
                    } else {
                        let jsonResponse = JSON.parse(this.responseText);
                        let errors = [];

                        for (let error of jsonResponse.errors) {
                            if (error.source && error.source.parameter) {
                                var specificField = core.find("#" + error.source.parameter.toLowerCase())[0];

                                if (specificField) {
                                    let formControl = common.controls.get(specificField);

                                    if (formControl) {
                                        var fieldMessage = formControl.message;

                                        if (fieldMessage) {
                                            fieldMessage.show({
                                                message: error.detail,
                                                messageType: messageFactory.messageType.Error
                                            });
                                        }
                                    } else {
                                        errors.push(error.detail);
                                    }
                                } else {
                                    errors.push(error.detail);
                                }
                            }
                        }

                        if (errors.length > 0) {
                            core.showError(errors);
                        }
                    }

                    reject(this.responseText);
                    waitscreen.hide();
                }
            };

            switch (ajaxSettings.type) {
                case "GET":
                    request.send();
                    return;
                case "POST":
                case "PUT":
                    request.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
                    request.send(JSON.stringify(ajaxSettings.data));
                    return;
            }

            request = null;
        });

        return promise;
    },
    showWarning: function (messages) {
        mainMessage.show({
            message: messages,
            messageType: messageFactory.messageType.Warning
        });
    },
    showError: function (messages) {
        mainMessage.show({
            message: messages,
            messageType: messageFactory.messageType.Error
        });
    },
    showInfo: function (messages) {
        mainMessage.show({
            message: messages,
            messageType: messageFactory.messageType.Info
        });
    },
    hideMainMessage: function () {
        mainMessage.remove();
    },
    isEmptyOrSpaces: function (str) {
        return str === undefined || str === null || str.match(/^\s*$/) !== null;
    },
    isEmail: function (str) {
        var emailRegex = /^(([\w-]+\.)+[\w-]+|([a-zA-Z]{1}|[\w-]{2,}))@((([0-1]?[0-9]{1,2}|25[0-5]|2[0-4][0-9])\.([0-1]?[0-9]{1,2}|25[0-5]|2[0-4][0-9])\.([0-1]?[0-9]{1,2}|25[0-5]|2[0-4][0-9])\.([0-1]?[0-9]{1,2}|25[0-5]|2[0-4][0-9])){1}|([a-zA-Z]+[\w-]+\.)+[a-zA-Z]{2,4})$/;
        return core.isEmptyOrSpaces(str) || str.match(emailRegex);
    },
    isDate: function (str) {
        var d = new Date(str);
        return core.isEmptyOrSpaces(str) || (d != "Invalid Date" && !isNaN(d));
    },
    numberWithCommas: function numberWithCommas(x) {
        var parts = x.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
    },
    parseISODate: parseDate,
    shortDate: function (date) {
        if (!(date instanceof Date)) {
            date = parseDate(date);
        }

        return (date.getMonth() + 1) +
            "/" + date.getDate() +
            "/" + date.getFullYear();
    },
    shortTime: function (date) {
        if (!(date instanceof Date)) {
            date = parseDate(date);
        }

        var hour = date.getHours();
        var ampm = "AM";

        if (hour > 11) {
            hour -= 12;
            ampm = "PM";
        }

        if (hour === 0) {
            hour = 12;
        }

        var minutes = "00" + date.getMinutes();
        return hour + ":" + minutes.substring(minutes.length - 2) + " " + ampm;
    },
    publish: function (topic, message) {
        pubsub.publish(topic, message);
    },
    subscribe: function (topic, handler) {
        return pubsub.subscribe(topic, function (topic, message) {
            handler(message);
        });
    },
    unsubscribe: function (token) {
        pubsub.unsubscribe(token);
    },
    find: common.find,
    extend: common.extend,
    closest: function closest(el, selector) {
        while (el !== null) {
            let parent = el.parentElement;
            if (parent !== null && matches(parent, selector)) {
                return parent;
            }
            el = parent;
        }

        return null;
    },
    addClass: function (el, className) {
        if (el.classList) {
            el.classList.add(className);
        } else {
            el.className += ' ' + className;
        }
    },
    removeClass: function (el, className) {
        if (el.classList) {
            el.classList.remove(className);
        } else {
            el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    },
    addEventListener: addListener,
    matches: matches,
    isString: isString,
    first: function (array, match) {
        for (let arrayItem of array) {
            if (match(arrayItem)) {
                return arrayItem;
            }
        }

        throw new Error("Unable to match that item.");
    },
    setProperty: function (obj, prop, value) {
        if (core.isString(prop)) {
            prop = prop.split(".");
        }

        if (prop.length > 1) {
            var e = prop.shift();
            core.setProperty(obj[e] = Object.prototype.toString.call(obj[e]) === "[object Object]" ? obj[e] : {}, prop, value);
        } else {
            obj[prop[0]] = value;
        }
    }
};

export default core;