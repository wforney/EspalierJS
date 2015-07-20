import messageFactory from "./espalier.messageFactory";
import waitscreen from "./espalier.waitscreen";
import common from "./espalier.common";
import pubsub from "pubsub-js";

var find = function (selector, root) {
    root = root ? root : document;
    return root.querySelectorAll(selector);
};

var mainMessage = messageFactory.create({
    attachTo: find("body")[0]
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

testDate = undefined;

var core = {
    sendRequest: function (req) {
        waitscreen.show();
        $("." + mainMessage.settings.messageContainerClass).remove();

        var ajaxSettings = {
            type: "GET",
            xhrFields: {
                withCredentials: true
            },
            statusCode: {
                500: function (error) {
                    core.showError({
                        message: error.responseJSON.Message,
                        cssClass: "error"
                    });
                },
                400: function (response) {
                    var errors = [];

                    $.each(response.responseJSON.errors, function (index, error) {
                        if (error.source && error.source.parameter) {
                            var specificField = $("#" + error.source.parameter.toLowerCase());

                            if (specificField) {
                                var fieldMessage = specificField.data("message");

                                if (fieldMessage) {
                                    fieldMessage.show({
                                        message: error.detail,
                                        messageType: messageFactory.messageType.Error
                                    });

                                    return;
                                }
                            }
                        }

                        errors.push(error.detail);
                    });

                    if (errors.length > 0) {
                        core.showError(errors);
                    }
                }
            },
            complete: function (response) {
                waitscreen.hide();

                if (response.status === 200) {
                    if (req.event) {
                        pubsub.publish(req.event, response.responseJSON);
                    }

                    if (req.onSuccess) {
                        req.onSuccess(response.responseJSON);
                    }
                }
            }
        };

        $.extend(ajaxSettings, req);

        return $.ajax(ajaxSettings);
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
    find,
    extend: function (out) {
        out = out || {};

        for (var i = 1; i < arguments.length; i++) {
            var obj = arguments[i];

            if (!obj)
                continue;

            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    if (typeof obj[key] === 'object')
                        core.extend(out[key], obj[key]);
                    else
                        out[key] = obj[key];
                }
            }
        }

        return out;
    },
    closest: function closest(el, selector) {
        var matchesFn;

        // find vendor prefix
        ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"].some(function (fn) {
            if (typeof document.body[fn] == "function") {
                matchesFn = fn;
                return true;
            }
            return false;
        })

        // traverse parents
        while (el !== null) {
            let parent = el.parentElement;
            if (parent !== null && parent[matchesFn](selector)) {
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
    addEventListener: function (el, eventName, handler) {
        if (el.addEventListener) {
            el.addEventListener(eventName, handler);
        } else {
            el.attachEvent('on' + eventName, function () {
                handler.call(el);
            });
        }
    },
    matches: function (el, selector) {
        var _matches = (el.matches || el.matchesSelector || el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector);

        if (_matches) {
            return _matches.call(el, selector);
        } else {
            var nodes = el.parentNode.querySelectorAll(selector);
            for (var i = nodes.length; i--;) {
                if (nodes[i] === el)
                    return true;
            }
            return false;
        }
    },
    isString: function(toTest) {
        return typeof toTest === 'string' || toTest instanceof String;
    }
};

export default core;