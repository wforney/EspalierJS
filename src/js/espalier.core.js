import messageFactory from "./espalier.messageFactory";
import waitscreen from "./espalier.waitscreen";
import common from "./espalier.common";
import isString from "./helpers/is-string";
import addListener from "./helpers/add-listener";
import matches from "./helpers/matches";
import AjaxRequest from "./ajaxRequest";
import mainMessage from "./helpers/main-message";
import pubsub from "pubsub-js";

let parseDate;
let testDate = new Date('2011-06-02T09:34:29+02:00');

if (!testDate || +testDate !== 1307000069000) {
    parseDate = function (s) {
        let day, tz,
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

let waitingOn = new Set();

let waitOn = function (toWaitOn) {
    waitingOn.add(toWaitOn);
    waitscreen.show();
}

let clearWait = function (toWaitOn) {
    if (waitingOn.has(toWaitOn)) {
        waitingOn.delete(toWaitOn);
    }

    if (waitingOn.size === 0) {
        waitscreen.hide();
    }
}

let core = {
    sendRequest: function (req) {
        let existingMessages = core.find(".message-container");

        for (let message of existingMessages) {
            message.parentNode.removeChild(message);
        }

        let ajaxSettings = {
            type: "GET",
            withCredentials: true,
            showWait: true
        };

        core.extend(ajaxSettings, req);

        let request = new AjaxRequest(ajaxSettings);

        if (ajaxSettings.showWait) {
            waitOn(request);
        }

        return new Promise((resolve, reject) => {
            request.send().then(success => {
                clearWait(request);
                resolve(success);
            }, fail => {
                clearWait(request);

                if (window.console && window.console.log) {
                    window.console.log(fail);
                }

                reject(fail);
            })
        });
    },
    showWarning: mainMessage.showWarning,
    showError: mainMessage.showError,
    showInfo: mainMessage.showInfo,
    hideMainMessage: mainMessage.hideMainMessage,
    isEmptyOrSpaces: function (str) {
        return str === undefined || str === null || str.match(/^\s*$/) !== null;
    },
    isEmail: function (str) {
        let emailRegex = /^(([\w-]+\.)+[\w-]+|([a-zA-Z]{1}|[\w-]{2,}))@((([0-1]?[0-9]{1,2}|25[0-5]|2[0-4][0-9])\.([0-1]?[0-9]{1,2}|25[0-5]|2[0-4][0-9])\.([0-1]?[0-9]{1,2}|25[0-5]|2[0-4][0-9])\.([0-1]?[0-9]{1,2}|25[0-5]|2[0-4][0-9])){1}|([a-zA-Z]+[\w-]+\.)+[a-zA-Z]{2,4})$/;
        return core.isEmptyOrSpaces(str) || str.match(emailRegex);
    },
    isPhone: function (str) {
        let phoneRegex = /^1?[-\. ]?(\(\d{3}\)?[-\. ]?|\d{3}?[-\. ]?)?\d{3}?[-\. ]?\d{4}$/;
        return core.isEmptyOrSpaces(str) || str.match(phoneRegex);
    },
    isDate: function (str) {
        let d = new Date(str);
        return core.isEmptyOrSpaces(str) || (d != "Invalid Date" && !isNaN(d));
    },
    numberWithCommas: function numberWithCommas(x) {
        let parts = x.toString().split(".");
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
    isFunction: function (toTest) {
        return !!(toTest && toTest.constructor && toTest.call && toTest.apply);
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