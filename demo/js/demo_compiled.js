(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define(factory);
	else if(typeof exports === 'object')
		exports["app"] = factory();
	else
		root["app"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _espalier = __webpack_require__(2);
	
	var _espalier2 = _interopRequireDefault(_espalier);
	
	var _graphDemoGraph = __webpack_require__(16);
	
	var _graphDemoGraph2 = _interopRequireDefault(_graphDemoGraph);
	
	var _tableDemoTable = __webpack_require__(28);
	
	var _tableDemoTable2 = _interopRequireDefault(_tableDemoTable);
	
	var _dialogDialogDemo = __webpack_require__(31);
	
	var _dialogDialogDemo2 = _interopRequireDefault(_dialogDialogDemo);
	
	_espalier2["default"].showInfo("It seems the libraries have loaded!");
	_espalier2["default"].wire("#standard-form");
	
	$(".datepicker").datepicker();
	
	$("#show-dialog").click(function () {
	    (0, _dialogDialogDemo2["default"])();
	});
	
	var table = (0, _tableDemoTable2["default"])($("#demo-table"));
	
	$("#search-records").click(function () {
	    var filter = {
	        StartDate: $("#start-date").val(),
	        EndDate: $("#end-date").val(),
	        ClientIPAddress: $("#ip-address").val(),
	        UserName: $("#user-name").val(),
	        MacAddress: $("#mac-address").val(),
	        WorkingTelephoneNumber: $("#wtn").val(),
	        BillingTelephoneNumber: $("#btn").val()
	    };
	
	    table.filter(filter);
	});
	
	var graph = new _graphDemoGraph2["default"]($("#wizard-container"), function (graphValue) {
	    $("#graph-value").html(JSON.stringify(graphValue, null, 2));
	});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _espalierCore = __webpack_require__(5);
	
	var _espalierCore2 = _interopRequireDefault(_espalierCore);
	
	var _espalierMessageFactory = __webpack_require__(4);
	
	var _espalierMessageFactory2 = _interopRequireDefault(_espalierMessageFactory);
	
	var _espalierForms = __webpack_require__(10);
	
	var _espalierForms2 = _interopRequireDefault(_espalierForms);
	
	var _espalierWaitscreen = __webpack_require__(6);
	
	var _espalierWaitscreen2 = _interopRequireDefault(_espalierWaitscreen);
	
	var _espalierTable = __webpack_require__(27);
	
	var _espalierTable2 = _interopRequireDefault(_espalierTable);
	
	var _espalierDialog = __webpack_require__(13);
	
	var _espalierDialog2 = _interopRequireDefault(_espalierDialog);
	
	var _espalierGraph = __webpack_require__(14);
	
	var _espalierGraph2 = _interopRequireDefault(_espalierGraph);
	
	var _espalierGraphNode = __webpack_require__(15);
	
	var _espalierGraphNode2 = _interopRequireDefault(_espalierGraphNode);
	
	var espalier = {
	    showWarning: _espalierCore2["default"].showWarning,
	    showInfo: _espalierCore2["default"].showInfo,
	    sendRequest: _espalierCore2["default"].sendRequest,
	    Table: _espalierTable2["default"],
	    wire: _espalierForms2["default"],
	    showWaitScreen: _espalierWaitscreen2["default"].show,
	    hideWaitScreen: _espalierWaitscreen2["default"].hide,
	    shortDate: _espalierCore2["default"].shortDate,
	    shortTime: _espalierCore2["default"].shortTime,
	    numberWithCommas: _espalierCore2["default"].numberWithCommas,
	    publish: _espalierCore2["default"].publish,
	    parseISODate: _espalierCore2["default"].parseISODate,
	    subscribe: _espalierCore2["default"].subscribe,
	    dialog: function dialog(args) {
	        return (0, _espalierDialog2["default"])(args).show();
	    },
	    Graph: _espalierGraph2["default"],
	    GraphNode: _espalierGraphNode2["default"]
	};
	
	exports["default"] = espalier;
	module.exports = exports["default"];

/***/ },
/* 3 */,
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _espalierCore = __webpack_require__(5);
	
	var _espalierCore2 = _interopRequireDefault(_espalierCore);
	
	var _templatesBootstrapTemplates = __webpack_require__(9);
	
	var _templatesBootstrapTemplates2 = _interopRequireDefault(_templatesBootstrapTemplates);
	
	var MessageDisplayer = (function () {
	    function MessageDisplayer(args) {
	        _classCallCheck(this, MessageDisplayer);
	
	        this.settings = {
	            attachTo: null,
	            messageContainerClass: "message-container",
	            closeMessageClass: "close-message",
	            infoMessageClass: "info-message",
	            warningMessageClass: "warning-message",
	            errorMessageClass: "error-message",
	            successMessageClass: "success-message",
	            messageAttachment: factory.messageAttachment.Fixed,
	            onRemoved: function onRemoved() {},
	            onAdded: function onAdded() {}
	        };
	
	        $.extend(this.settings, args);
	
	        if (!this.settings.attachTo) {
	            throw "MessageFactory requires an attachTo argument.";
	        }
	    }
	
	    _createClass(MessageDisplayer, [{
	        key: "remove",
	        value: function remove() {
	            if (this.message) {
	                this.message.parentNode.removeChild(this.message);
	                this.message = undefined;
	                this.settings.onRemoved();
	            }
	        }
	    }, {
	        key: "show",
	        value: function show(messageArgs) {
	            var messageTypeClass = undefined,
	                messageSettings = undefined,
	                messageAttachmentClass = undefined;
	
	            //NOTE: There should only be one message displayed per instance.
	            if (this.message) {
	                this.message.remove();
	            }
	
	            //NOTE: Allow them to either use an array of messages or a
	            //      single message.
	            if (_espalierCore2["default"].isString(messageArgs.message)) {
	                messageArgs.message = [messageArgs.message];
	            }
	
	            messageSettings = {
	                messageType: factory.messageType.Info,
	                message: []
	            };
	
	            $.extend(messageSettings, messageArgs);
	
	            if (messageSettings.message.length === 0) {
	                console.log("No message to display.");
	                return;
	            }
	
	            switch (messageSettings.messageType) {
	                case factory.messageType.Info:
	                    messageTypeClass = this.settings.infoMessageClass;
	                    break;
	                case factory.messageType.Success:
	                    messageTypeClass = this.settings.successMessageClass;
	                    break;
	                case factory.messageType.Error:
	                    messageTypeClass = this.settings.errorMessageClass;
	                    break;
	                case factory.messageType.Warning:
	                    messageTypeClass = this.settings.warningMessageClass;
	                    break;
	                default:
	                    console.log("Invalid message type.");
	                    return;
	            }
	
	            switch (this.settings.messageAttachment) {
	                case factory.messageAttachment.Fixed:
	                    messageAttachmentClass = "fixed";
	                    break;
	                case factory.messageAttachment.Flow:
	                    messageAttachmentClass = "flow";
	                    break;
	                default:
	                    messageAttachmentClass = "";
	                    break;
	            }
	
	            this.message = _templatesBootstrapTemplates2["default"].message({
	                messageTypeClass: messageTypeClass,
	                messages: messageSettings.message,
	                messageContainerClass: this.settings.messageContainerClass,
	                closeMessageClass: this.settings.closeMessageClass,
	                messageAttachmentClass: messageAttachmentClass,
	                moreThanOne: !_espalierCore2["default"].isString(messageArgs.message) && messageArgs.message.length > 1
	            });
	
	            this.settings.attachTo.appendChild(this.message);
	            this.settings.onAdded(this.message);
	
	            var displayedMessage = this;
	
	            var closeButtons = Array.from(_espalierCore2["default"].find("." + this.settings.closeMessageClass, this.message));
	
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;
	
	            try {
	                for (var _iterator = closeButtons[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var button = _step.value;
	
	                    _espalierCore2["default"].addEventListener(button, "click", function () {
	                        displayedMessage.remove();
	                    });
	                }
	            } catch (err) {
	                _didIteratorError = true;
	                _iteratorError = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion && _iterator["return"]) {
	                        _iterator["return"]();
	                    }
	                } finally {
	                    if (_didIteratorError) {
	                        throw _iteratorError;
	                    }
	                }
	            }
	
	            return this.message;
	        }
	    }]);
	
	    return MessageDisplayer;
	})();
	
	;
	
	var factory = {
	    create: function create(args) {
	        return new MessageDisplayer(args);
	    },
	    messageType: {
	        Info: "Info",
	        Success: "success",
	        Error: "error",
	        Warning: "warning"
	    },
	    messageAttachment: {
	        Fixed: "Fixed",
	        Flow: "Flow"
	    }
	};
	
	exports["default"] = factory;
	module.exports = exports["default"];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _espalierMessageFactory = __webpack_require__(4);
	
	var _espalierMessageFactory2 = _interopRequireDefault(_espalierMessageFactory);
	
	var _espalierWaitscreen = __webpack_require__(6);
	
	var _espalierWaitscreen2 = _interopRequireDefault(_espalierWaitscreen);
	
	var _espalierCommon = __webpack_require__(7);
	
	var _espalierCommon2 = _interopRequireDefault(_espalierCommon);
	
	var _pubsubJs = __webpack_require__(8);
	
	var _pubsubJs2 = _interopRequireDefault(_pubsubJs);
	
	var find = function find(selector, root) {
	    root = root ? root : document;
	    return root.querySelectorAll(selector);
	};
	
	var mainMessage = _espalierMessageFactory2["default"].create({
	    attachTo: find("body")[0]
	});
	
	var parseDate;
	var testDate = new Date('2011-06-02T09:34:29+02:00');
	
	if (!testDate || +testDate !== 1307000069000) {
	    parseDate = function (s) {
	        var day,
	            tz,
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
	                tz = parseInt(p[5], 10) * 60;
	                if (p[6]) tz += parseInt(p[6], 10);
	                if (p[4] == '+') tz *= -1;
	                if (tz) day.setUTCMinutes(day.getUTCMinutes() + tz);
	            }
	            return day;
	        }
	        return NaN;
	    };
	} else {
	    parseDate = function (s) {
	        return new Date(s);
	    };
	}
	
	testDate = undefined;
	
	var core = {
	    sendRequest: function sendRequest(req) {
	        _espalierWaitscreen2["default"].show();
	        $("." + mainMessage.settings.messageContainerClass).remove();
	
	        var ajaxSettings = {
	            type: "GET",
	            xhrFields: {
	                withCredentials: true
	            },
	            statusCode: {
	                500: function _(error) {
	                    core.showError({
	                        message: error.responseJSON.Message,
	                        cssClass: "error"
	                    });
	                },
	                400: function _(response) {
	                    var errors = [];
	
	                    $.each(response.responseJSON.errors, function (index, error) {
	                        if (error.source && error.source.parameter) {
	                            var specificField = $("#" + error.source.parameter.toLowerCase());
	
	                            if (specificField) {
	                                var fieldMessage = specificField.data("message");
	
	                                if (fieldMessage) {
	                                    fieldMessage.show({
	                                        message: error.detail,
	                                        messageType: _espalierMessageFactory2["default"].messageType.Error
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
	            complete: function complete(response) {
	                _espalierWaitscreen2["default"].hide();
	
	                if (response.status === 200) {
	                    if (req.event) {
	                        _pubsubJs2["default"].publish(req.event, response.responseJSON);
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
	    showWarning: function showWarning(messages) {
	        mainMessage.show({
	            message: messages,
	            messageType: _espalierMessageFactory2["default"].messageType.Warning
	        });
	    },
	    showError: function showError(messages) {
	        mainMessage.show({
	            message: messages,
	            messageType: _espalierMessageFactory2["default"].messageType.Error
	        });
	    },
	    showInfo: function showInfo(messages) {
	        mainMessage.show({
	            message: messages,
	            messageType: _espalierMessageFactory2["default"].messageType.Info
	        });
	    },
	    hideMainMessage: function hideMainMessage() {
	        mainMessage.remove();
	    },
	    isEmptyOrSpaces: function isEmptyOrSpaces(str) {
	        return str === undefined || str === null || str.match(/^\s*$/) !== null;
	    },
	    isEmail: function isEmail(str) {
	        var emailRegex = /^(([\w-]+\.)+[\w-]+|([a-zA-Z]{1}|[\w-]{2,}))@((([0-1]?[0-9]{1,2}|25[0-5]|2[0-4][0-9])\.([0-1]?[0-9]{1,2}|25[0-5]|2[0-4][0-9])\.([0-1]?[0-9]{1,2}|25[0-5]|2[0-4][0-9])\.([0-1]?[0-9]{1,2}|25[0-5]|2[0-4][0-9])){1}|([a-zA-Z]+[\w-]+\.)+[a-zA-Z]{2,4})$/;
	        return core.isEmptyOrSpaces(str) || str.match(emailRegex);
	    },
	    isDate: function isDate(str) {
	        var d = new Date(str);
	        return core.isEmptyOrSpaces(str) || d != "Invalid Date" && !isNaN(d);
	    },
	    numberWithCommas: function numberWithCommas(x) {
	        var parts = x.toString().split(".");
	        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	        return parts.join(".");
	    },
	    parseISODate: parseDate,
	    shortDate: function shortDate(date) {
	        if (!(date instanceof Date)) {
	            date = parseDate(date);
	        }
	
	        return date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
	    },
	    shortTime: function shortTime(date) {
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
	    publish: function publish(topic, message) {
	        _pubsubJs2["default"].publish(topic, message);
	    },
	    subscribe: function subscribe(topic, handler) {
	        return _pubsubJs2["default"].subscribe(topic, function (topic, message) {
	            handler(message);
	        });
	    },
	    find: find,
	    extend: function extend(out) {
	        out = out || {};
	
	        for (var i = 1; i < arguments.length; i++) {
	            var obj = arguments[i];
	
	            if (!obj) continue;
	
	            for (var key in obj) {
	                if (obj.hasOwnProperty(key)) {
	                    if (typeof obj[key] === 'object') core.extend(out[key], obj[key]);else out[key] = obj[key];
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
	        });
	
	        // traverse parents
	        while (el !== null) {
	            var _parent = el.parentElement;
	            if (_parent !== null && _parent[matchesFn](selector)) {
	                return _parent;
	            }
	            el = _parent;
	        }
	
	        return null;
	    },
	    addClass: function addClass(el, className) {
	        if (el.classList) {
	            el.classList.add(className);
	        } else {
	            el.className += ' ' + className;
	        }
	    },
	    removeClass: function removeClass(el, className) {
	        if (el.classList) {
	            el.classList.remove(className);
	        } else {
	            el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
	        }
	    },
	    addEventListener: function addEventListener(el, eventName, handler) {
	        if (el.addEventListener) {
	            el.addEventListener(eventName, handler);
	        } else {
	            el.attachEvent('on' + eventName, function () {
	                handler.call(el);
	            });
	        }
	    },
	    matches: function matches(el, selector) {
	        var _matches = el.matches || el.matchesSelector || el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector;
	
	        if (_matches) {
	            return _matches.call(el, selector);
	        } else {
	            var nodes = el.parentNode.querySelectorAll(selector);
	            for (var i = nodes.length; i--;) {
	                if (nodes[i] === el) return true;
	            }
	            return false;
	        }
	    },
	    isString: function isString(toTest) {
	        return typeof toTest === 'string' || toTest instanceof String;
	    },
	    first: function first(array, match) {
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;
	
	        try {
	            for (var _iterator = array[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                var arrayItem = _step.value;
	
	                if (match(arrayItem)) {
	                    return arrayItem;
	                }
	            }
	        } catch (err) {
	            _didIteratorError = true;
	            _iteratorError = err;
	        } finally {
	            try {
	                if (!_iteratorNormalCompletion && _iterator["return"]) {
	                    _iterator["return"]();
	                }
	            } finally {
	                if (_didIteratorError) {
	                    throw _iteratorError;
	                }
	            }
	        }
	
	        throw new Error("Unable to match that item.");
	    },
	    setProperty: function setProperty(obj, prop, value) {
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
	
	exports["default"] = core;
	module.exports = exports["default"];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _espalierCommon = __webpack_require__(7);
	
	var _espalierCommon2 = _interopRequireDefault(_espalierCommon);
	
	var pleaseWaitId = "espalier-wait-screen";
	var pleaseWait = $("<div />");
	pleaseWait.attr("id", pleaseWaitId);
	
	var hourglass = 'data:image/svg+xml;utf8,' + "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"uil-gears\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid meet\" width=\"120px\" height=\"120px\">" + "  <rect class=\"bk\" fill=\"none\" x=\"0\" y=\"0\" width=\"100\" height=\"100\" />" + "  <g transform=\"translate(-20 -20)\">" + "    <path fill=\"#fafafa\" d=\"M 79.9 52.6 C 80 51.8 80 50.9 80 50 s 0 -1.8 -0.1 -2.6 l -5.1 -0.4 c -0.3 -2.4 -0.9 -4.6 -1.8 -6.7 l 4.2 -2.9 c -0.7 -1.6 -1.6 -3.1 -2.6 -4.5 L 70 35 c -1.4 -1.9 -3.1 -3.5 -4.9 -4.9 l 2.2 -4.6 c -1.4 -1 -2.9 -1.9 -4.5 -2.6 L 59.8 27 c -2.1 -0.9 -4.4 -1.5 -6.7 -1.8 l -0.4 -5.1 C 51.8 20 50.9 20 50 20 s -1.8 0 -2.6 0.1 l -0.4 5.1 c -2.4 0.3 -4.6 0.9 -6.7 1.8 l -2.9 -4.1 c -1.6 0.7 -3.1 1.6 -4.5 2.6 l 2.1 4.6 c -1.9 1.4 -3.5 3.1 -5 4.9 l -4.5 -2.1 c -1 1.4 -1.9 2.9 -2.6 4.5 l 4.1 2.9 c -0.9 2.1 -1.5 4.4 -1.8 6.8 l -5 0.4 C 20 48.2 20 49.1 20 50 s 0 1.8 0.1 2.6 l 5 0.4 c 0.3 2.4 0.9 4.7 1.8 6.8 l -4.1 2.9 c 0.7 1.6 1.6 3.1 2.6 4.5 l 4.5 -2.1 c 1.4 1.9 3.1 3.5 5 4.9 l -2.1 4.6 c 1.4 1 2.9 1.9 4.5 2.6 l 2.9 -4.1 c 2.1 0.9 4.4 1.5 6.7 1.8 l 0.4 5.1 C 48.2 80 49.1 80 50 80 s 1.8 0 2.6 -0.1 l 0.4 -5.1 c 2.3 -0.3 4.6 -0.9 6.7 -1.8 l 2.9 4.2 c 1.6 -0.7 3.1 -1.6 4.5 -2.6 L 65 69.9 c 1.9 -1.4 3.5 -3 4.9 -4.9 l 4.6 2.2 c 1 -1.4 1.9 -2.9 2.6 -4.5 L 73 59.8 c 0.9 -2.1 1.5 -4.4 1.8 -6.7 L 79.9 52.6 Z M 50 65 c -8.3 0 -15 -6.7 -15 -15 c 0 -8.3 6.7 -15 15 -15 s 15 6.7 15 15 C 65 58.3 58.3 65 50 65 Z\">" + "      <animateTransform type=\"rotate\" dur=\"2s\" repeatCount=\"indefinite\" to=\"0 50 50\" from=\"90 50 50\" attributeName=\"transform\" />" + "    </path>" + "  </g>" + "  <g transform=\"translate(20 20) rotate(15 50.0002 50)\">" + "    <path fill=\"#efefef\" d=\"M 79.9 52.6 C 80 51.8 80 50.9 80 50 s 0 -1.8 -0.1 -2.6 l -5.1 -0.4 c -0.3 -2.4 -0.9 -4.6 -1.8 -6.7 l 4.2 -2.9 c -0.7 -1.6 -1.6 -3.1 -2.6 -4.5 L 70 35 c -1.4 -1.9 -3.1 -3.5 -4.9 -4.9 l 2.2 -4.6 c -1.4 -1 -2.9 -1.9 -4.5 -2.6 L 59.8 27 c -2.1 -0.9 -4.4 -1.5 -6.7 -1.8 l -0.4 -5.1 C 51.8 20 50.9 20 50 20 s -1.8 0 -2.6 0.1 l -0.4 5.1 c -2.4 0.3 -4.6 0.9 -6.7 1.8 l -2.9 -4.1 c -1.6 0.7 -3.1 1.6 -4.5 2.6 l 2.1 4.6 c -1.9 1.4 -3.5 3.1 -5 4.9 l -4.5 -2.1 c -1 1.4 -1.9 2.9 -2.6 4.5 l 4.1 2.9 c -0.9 2.1 -1.5 4.4 -1.8 6.8 l -5 0.4 C 20 48.2 20 49.1 20 50 s 0 1.8 0.1 2.6 l 5 0.4 c 0.3 2.4 0.9 4.7 1.8 6.8 l -4.1 2.9 c 0.7 1.6 1.6 3.1 2.6 4.5 l 4.5 -2.1 c 1.4 1.9 3.1 3.5 5 4.9 l -2.1 4.6 c 1.4 1 2.9 1.9 4.5 2.6 l 2.9 -4.1 c 2.1 0.9 4.4 1.5 6.7 1.8 l 0.4 5.1 C 48.2 80 49.1 80 50 80 s 1.8 0 2.6 -0.1 l 0.4 -5.1 c 2.3 -0.3 4.6 -0.9 6.7 -1.8 l 2.9 4.2 c 1.6 -0.7 3.1 -1.6 4.5 -2.6 L 65 69.9 c 1.9 -1.4 3.5 -3 4.9 -4.9 l 4.6 2.2 c 1 -1.4 1.9 -2.9 2.6 -4.5 L 73 59.8 c 0.9 -2.1 1.5 -4.4 1.8 -6.7 L 79.9 52.6 Z M 50 65 c -8.3 0 -15 -6.7 -15 -15 c 0 -8.3 6.7 -15 15 -15 s 15 6.7 15 15 C 65 58.3 58.3 65 50 65 Z\">" + "      <animateTransform type=\"rotate\" dur=\"2s\" repeatCount=\"indefinite\" to=\"90 50 50\" from=\"0 50 50\" attributeName=\"transform\" />" + "    </path>" + "  </g>" + "</svg>";
	var waitImage = $("<img />");
	waitImage.attr("src", hourglass);
	var inner = $("<div />");
	inner.append(waitImage);
	pleaseWait.append(inner);
	
	var waitScreen = {
	    show: function show() {
	        if ($("#" + pleaseWaitId).length > 0) {
	            return pleaseWait;
	        }
	
	        _espalierCommon2["default"].body.append(pleaseWait);
	        return pleaseWait;
	    },
	    hide: function hide() {
	        pleaseWait.remove();
	    }
	};
	
	exports["default"] = waitScreen;
	module.exports = exports["default"];

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var body = $("body");
	
	exports["default"] = {
	    body: body,
	    window: $(window),
	    showVellum: function showVellum() {
	        if ($(".espalier-vellum").length > 0) {
	            return;
	        }
	
	        var vellum = $("<div class=\"espalier-vellum\" />");
	        body.append(vellum);
	    },
	    hideVellum: function hideVellum() {
	        $(".espalier-vellum").remove();
	    }
	};
	module.exports = exports["default"];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
	Copyright (c) 2010,2011,2012,2013,2014 Morgan Roderick http://roderick.dk
	License: MIT - http://mrgnrdrck.mit-license.org
	
	https://github.com/mroderick/PubSubJS
	*/
	'use strict';
	
	(function (root, factory) {
		'use strict';
	
		if (true) {
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else if (typeof exports === 'object') {
			// CommonJS
			factory(exports);
		} else {
			// Browser globals
			var PubSub = {};
			root.PubSub = PubSub;
			factory(PubSub);
		}
	})(typeof window === 'object' && window || undefined, function (PubSub) {
		'use strict';
	
		var messages = {},
		    lastUid = -1;
	
		function hasKeys(obj) {
			var key;
	
			for (key in obj) {
				if (obj.hasOwnProperty(key)) {
					return true;
				}
			}
			return false;
		}
	
		/**
	  *	Returns a function that throws the passed exception, for use as argument for setTimeout
	  *	@param { Object } ex An Error object
	  */
		function throwException(ex) {
			return function reThrowException() {
				throw ex;
			};
		}
	
		function callSubscriberWithDelayedExceptions(subscriber, message, data) {
			try {
				subscriber(message, data);
			} catch (ex) {
				setTimeout(throwException(ex), 0);
			}
		}
	
		function callSubscriberWithImmediateExceptions(subscriber, message, data) {
			subscriber(message, data);
		}
	
		function deliverMessage(originalMessage, matchedMessage, data, immediateExceptions) {
			var subscribers = messages[matchedMessage],
			    callSubscriber = immediateExceptions ? callSubscriberWithImmediateExceptions : callSubscriberWithDelayedExceptions,
			    s;
	
			if (!messages.hasOwnProperty(matchedMessage)) {
				return;
			}
	
			for (s in subscribers) {
				if (subscribers.hasOwnProperty(s)) {
					callSubscriber(subscribers[s], originalMessage, data);
				}
			}
		}
	
		function createDeliveryFunction(message, data, immediateExceptions) {
			return function deliverNamespaced() {
				var topic = String(message),
				    position = topic.lastIndexOf('.');
	
				// deliver the message as it is now
				deliverMessage(message, message, data, immediateExceptions);
	
				// trim the hierarchy and deliver message to each level
				while (position !== -1) {
					topic = topic.substr(0, position);
					position = topic.lastIndexOf('.');
					deliverMessage(message, topic, data, immediateExceptions);
				}
			};
		}
	
		function messageHasSubscribers(message) {
			var topic = String(message),
			    found = Boolean(messages.hasOwnProperty(topic) && hasKeys(messages[topic])),
			    position = topic.lastIndexOf('.');
	
			while (!found && position !== -1) {
				topic = topic.substr(0, position);
				position = topic.lastIndexOf('.');
				found = Boolean(messages.hasOwnProperty(topic) && hasKeys(messages[topic]));
			}
	
			return found;
		}
	
		function publish(message, data, sync, immediateExceptions) {
			var deliver = createDeliveryFunction(message, data, immediateExceptions),
			    hasSubscribers = messageHasSubscribers(message);
	
			if (!hasSubscribers) {
				return false;
			}
	
			if (sync === true) {
				deliver();
			} else {
				setTimeout(deliver, 0);
			}
			return true;
		}
	
		/**
	  *	PubSub.publish( message[, data] ) -> Boolean
	  *	- message (String): The message to publish
	  *	- data: The data to pass to subscribers
	  *	Publishes the the message, passing the data to it's subscribers
	 **/
		PubSub.publish = function (message, data) {
			return publish(message, data, false, PubSub.immediateExceptions);
		};
	
		/**
	  *	PubSub.publishSync( message[, data] ) -> Boolean
	  *	- message (String): The message to publish
	  *	- data: The data to pass to subscribers
	  *	Publishes the the message synchronously, passing the data to it's subscribers
	 **/
		PubSub.publishSync = function (message, data) {
			return publish(message, data, true, PubSub.immediateExceptions);
		};
	
		/**
	  *	PubSub.subscribe( message, func ) -> String
	  *	- message (String): The message to subscribe to
	  *	- func (Function): The function to call when a new message is published
	  *	Subscribes the passed function to the passed message. Every returned token is unique and should be stored if
	  *	you need to unsubscribe
	 **/
		PubSub.subscribe = function (message, func) {
			if (typeof func !== 'function') {
				return false;
			}
	
			// message is not registered yet
			if (!messages.hasOwnProperty(message)) {
				messages[message] = {};
			}
	
			// forcing token as String, to allow for future expansions without breaking usage
			// and allow for easy use as key names for the 'messages' object
			var token = 'uid_' + String(++lastUid);
			messages[message][token] = func;
	
			// return token for unsubscribing
			return token;
		};
	
		/* Public: Clears all subscriptions
	  */
		PubSub.clearAllSubscriptions = function clearAllSubscriptions() {
			messages = {};
		};
	
		/*Public: Clear subscriptions by the topic
	 */
		PubSub.clearSubscriptions = function clearSubscriptions(topic) {
			var m;
			for (m in messages) {
				if (messages.hasOwnProperty(m) && m.indexOf(topic) === 0) {
					delete messages[m];
				}
			}
		};
	
		/* Public: removes subscriptions.
	  * When passed a token, removes a specific subscription.
	  * When passed a function, removes all subscriptions for that function
	  * When passed a topic, removes all subscriptions for that topic (hierarchy)
	  *
	  * value - A token, function or topic to unsubscribe.
	  *
	  * Examples
	  *
	  *		// Example 1 - unsubscribing with a token
	  *		var token = PubSub.subscribe('mytopic', myFunc);
	  *		PubSub.unsubscribe(token);
	  *
	  *		// Example 2 - unsubscribing with a function
	  *		PubSub.unsubscribe(myFunc);
	  *
	  *		// Example 3 - unsubscribing a topic
	  *		PubSub.unsubscribe('mytopic');
	  */
		PubSub.unsubscribe = function (value) {
			var isTopic = typeof value === 'string' && messages.hasOwnProperty(value),
			    isToken = !isTopic && typeof value === 'string',
			    isFunction = typeof value === 'function',
			    result = false,
			    m,
			    message,
			    t;
	
			if (isTopic) {
				delete messages[value];
				return;
			}
	
			for (m in messages) {
				if (messages.hasOwnProperty(m)) {
					message = messages[m];
	
					if (isToken && message[value]) {
						delete message[value];
						result = value;
						// tokens are unique, so we can just stop here
						break;
					}
	
					if (isFunction) {
						for (t in message) {
							if (message.hasOwnProperty(t) && message[t] === value) {
								delete message[t];
								result = true;
							}
						}
					}
				}
			}
	
			return result;
		};
	});

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var templates = {
		message: function message(data) {
			var root = $("<div />");
			root.addClass(data.messageContainerClass);
			root.addClass(data.messageTypeClass);
			root.addClass(data.messageAttachmentClass);
	
			var closeButton = $("<a />");
			closeButton.attr("href", "javascript: void(0);");
			closeButton.addClass(data.closeMessageClass);
	
			root.append(closeButton);
	
			if (data.moreThanOne) {
				var list = $("<ul />");
	
				$.each(data.messages, function (index, message) {
					list.append("<li>" + message + "</li>");
				});
	
				root.append(list);
			} else {
				root.append("<p>" + data.messages + "</p>");
			}
	
			return root[0];
		}
	};
	
	exports["default"] = templates;
	module.exports = exports["default"];

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _espalierCore = __webpack_require__(5);
	
	var _espalierCore2 = _interopRequireDefault(_espalierCore);
	
	var _espalierFormsControl = __webpack_require__(11);
	
	var _espalierFormsControl2 = _interopRequireDefault(_espalierFormsControl);
	
	var EspalierForm = (function () {
	    function EspalierForm(formToWire, args) {
	        var _this = this;
	
	        _classCallCheck(this, EspalierForm);
	
	        if (_espalierCore2["default"].isString(formToWire)) {
	            this.form = _espalierCore2["default"].find(formToWire)[0];
	        } else {
	            this.form = formToWire[0];
	        }
	
	        var options = {
	            submit: false
	        };
	
	        var onEnter = function onEnter(event) {
	            var code = event.keyCode ? event.keyCode : event.which;
	
	            if (code == 13) {
	                event.preventDefault();
	                event.stopPropagation();
	                _this.submit();
	            }
	        };
	
	        this.options = _espalierCore2["default"].extend(options, args);
	
	        this.form.setAttribute("novalidate", "");
	        this.controls = new Set();
	        var processedControls = new Set();
	        var rawControls = _espalierCore2["default"].find("input, textarea, select", this.form);
	
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;
	
	        try {
	            for (var _iterator = rawControls[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                var control = _step.value;
	
	                control.addEventListener("keypress", onEnter);
	                var controlType = control.type ? control.type : control.getAttribute("type");
	                var lowerCaseId = controlType == "radio" ? control.name.toLowerCase() : control.id.toLowerCase();
	
	                if (processedControls.has(lowerCaseId)) {
	                    continue;
	                }
	
	                processedControls.add(lowerCaseId);
	
	                if (lowerCaseId || (control.type ? control.type : control.getAttribute("type")) == "radio") {
	                    this.controls.add((0, _espalierFormsControl2["default"])(control));
	                }
	            }
	        } catch (err) {
	            _didIteratorError = true;
	            _iteratorError = err;
	        } finally {
	            try {
	                if (!_iteratorNormalCompletion && _iterator["return"]) {
	                    _iterator["return"]();
	                }
	            } finally {
	                if (_didIteratorError) {
	                    throw _iteratorError;
	                }
	            }
	        }
	
	        _espalierCore2["default"].addEventListener(this.form, "submit", function (event) {
	            event.preventDefault();
	            _this.submit();
	        });
	
	        var submitButtons = _espalierCore2["default"].find("[data-action=\"submit\"]", this.form);
	
	        var _iteratorNormalCompletion2 = true;
	        var _didIteratorError2 = false;
	        var _iteratorError2 = undefined;
	
	        try {
	            for (var _iterator2 = submitButtons[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                var submitButton = _step2.value;
	
	                _espalierCore2["default"].addEventListener(submitButton, "click", function (e) {
	                    _this.submit();
	                });
	            }
	        } catch (err) {
	            _didIteratorError2 = true;
	            _iteratorError2 = err;
	        } finally {
	            try {
	                if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
	                    _iterator2["return"]();
	                }
	            } finally {
	                if (_didIteratorError2) {
	                    throw _iteratorError2;
	                }
	            }
	        }
	
	        var hasFocus = _espalierCore2["default"].find("[data-focus=\"true\"]", this.form);
	
	        var _iteratorNormalCompletion3 = true;
	        var _didIteratorError3 = false;
	        var _iteratorError3 = undefined;
	
	        try {
	            for (var _iterator3 = hasFocus[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                var el = _step3.value;
	
	                if (el.offsetParent === null || el.readOnly) {
	                    continue;
	                }
	
	                el.focus();
	                el.select();
	                break;
	            }
	        } catch (err) {
	            _didIteratorError3 = true;
	            _iteratorError3 = err;
	        } finally {
	            try {
	                if (!_iteratorNormalCompletion3 && _iterator3["return"]) {
	                    _iterator3["return"]();
	                }
	            } finally {
	                if (_didIteratorError3) {
	                    throw _iteratorError3;
	                }
	            }
	        }
	    }
	
	    _createClass(EspalierForm, [{
	        key: "submit",
	        value: function submit() {
	            var _this2 = this;
	
	            if (this.options.submit) {
	                this.options.submit();
	                return;
	            }
	
	            if (this.validate()) {
	                var method = this.form.getAttribute("method");
	
	                _espalierCore2["default"].sendRequest({
	                    type: method ? method : "GET",
	                    url: this.form.getAttribute("action"),
	                    data: $(this.form).serialize() //TODO: Remove jQuery.
	                }).then(function (data) {
	                    var onSuccess = _this2.form.getAttribute("data-success");
	
	                    if (onSuccess) {
	                        _espalierCore2["default"].publish(onSuccess, data);
	                    }
	                });
	            }
	        }
	    }, {
	        key: "validate",
	        value: function validate() {
	            var valid = true;
	
	            var _iteratorNormalCompletion4 = true;
	            var _didIteratorError4 = false;
	            var _iteratorError4 = undefined;
	
	            try {
	                for (var _iterator4 = this.controls[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	                    var control = _step4.value;
	
	                    control.message.remove();
	
	                    if (!control.validate()) {
	                        valid = false;
	                    }
	                }
	            } catch (err) {
	                _didIteratorError4 = true;
	                _iteratorError4 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion4 && _iterator4["return"]) {
	                        _iterator4["return"]();
	                    }
	                } finally {
	                    if (_didIteratorError4) {
	                        throw _iteratorError4;
	                    }
	                }
	            }
	
	            return valid;
	        }
	    }]);
	
	    return EspalierForm;
	})();
	
	exports["default"] = function (formToWire, args) {
	    return new EspalierForm(formToWire, args);
	};
	
	;
	module.exports = exports["default"];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _espalierCore = __webpack_require__(5);
	
	var _espalierCore2 = _interopRequireDefault(_espalierCore);
	
	var _espalierValidation = __webpack_require__(12);
	
	var _espalierMessageFactory = __webpack_require__(4);
	
	var _espalierMessageFactory2 = _interopRequireDefault(_espalierMessageFactory);
	
	var FormControl = (function () {
	    function FormControl(control, form, validations, explicitValidations) {
	        var _this = this;
	
	        _classCallCheck(this, FormControl);
	
	        var controlType = control.type ? control.type : control.getAttribute("type");
	        var lowerCaseId = controlType == "radio" ? control.name.toLowerCase() : control.id.toLowerCase();
	
	        if (!lowerCaseId) {
	            throw new Error("Elements must have an Id to be properly wired to an Espalier form control.");
	        }
	
	        this.control = control;
	        this.form = form;
	        var group;
	        var required = false;
	
	        switch (controlType) {
	            case "radio":
	                group = _espalierCore2["default"].closest(control, ".radio-group");
	
	                var radios = _espalierCore2["default"].find('input[type="radio"]', group);
	                var dependents = new Map();
	
	                var _iteratorNormalCompletion = true;
	                var _didIteratorError = false;
	                var _iteratorError = undefined;
	
	                try {
	                    var _loop = function () {
	                        var radio = _step.value;
	
	                        if (radio.required || radio.getAttribute("required")) {
	                            required = true;
	                        }
	
	                        _espalierCore2["default"].addEventListener(radio, "click", function () {
	                            var _iteratorNormalCompletion2 = true;
	                            var _didIteratorError2 = false;
	                            var _iteratorError2 = undefined;
	
	                            try {
	                                for (var _iterator2 = dependents.keys()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                                    var key = _step2.value;
	                                    var _iteratorNormalCompletion4 = true;
	                                    var _didIteratorError4 = false;
	                                    var _iteratorError4 = undefined;
	
	                                    try {
	                                        for (var _iterator4 = dependents.get(key)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	                                            var dependent = _step4.value;
	
	                                            dependent.hide();
	                                        }
	                                    } catch (err) {
	                                        _didIteratorError4 = true;
	                                        _iteratorError4 = err;
	                                    } finally {
	                                        try {
	                                            if (!_iteratorNormalCompletion4 && _iterator4["return"]) {
	                                                _iterator4["return"]();
	                                            }
	                                        } finally {
	                                            if (_didIteratorError4) {
	                                                throw _iteratorError4;
	                                            }
	                                        }
	                                    }
	                                }
	                            } catch (err) {
	                                _didIteratorError2 = true;
	                                _iteratorError2 = err;
	                            } finally {
	                                try {
	                                    if (!_iteratorNormalCompletion2 && _iterator2["return"]) {
	                                        _iterator2["return"]();
	                                    }
	                                } finally {
	                                    if (_didIteratorError2) {
	                                        throw _iteratorError2;
	                                    }
	                                }
	                            }
	
	                            if (!dependents.has(radio)) {
	                                return;
	                            }
	
	                            var _iteratorNormalCompletion3 = true;
	                            var _didIteratorError3 = false;
	                            var _iteratorError3 = undefined;
	
	                            try {
	                                for (var _iterator3 = dependents.get(radio)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                                    var dependent = _step3.value;
	
	                                    dependent.show();
	                                }
	                            } catch (err) {
	                                _didIteratorError3 = true;
	                                _iteratorError3 = err;
	                            } finally {
	                                try {
	                                    if (!_iteratorNormalCompletion3 && _iterator3["return"]) {
	                                        _iterator3["return"]();
	                                    }
	                                } finally {
	                                    if (_didIteratorError3) {
	                                        throw _iteratorError3;
	                                    }
	                                }
	                            }
	                        });
	
	                        var requiredDependentsSelector = radio.getAttribute("data-require");
	
	                        if (!requiredDependentsSelector) {
	                            return "continue";
	                        }
	
	                        var requiredDependents = _espalierCore2["default"].find(requiredDependentsSelector, _this.form);
	                        var dependentControls = [];
	
	                        _iteratorNormalCompletion5 = true;
	                        _didIteratorError5 = false;
	                        _iteratorError5 = undefined;
	
	                        try {
	                            for (_iterator5 = requiredDependents[Symbol.iterator](); !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	                                var requiredDependent = _step5.value;
	
	                                var dependentControl = factory(requiredDependent, form, { required: true });
	                                validations.push(new _espalierValidation.RequiredDependent(_this, radio.value, dependentControl));
	                                dependentControl.hide();
	                                dependentControls.push(dependentControl);
	                            }
	                        } catch (err) {
	                            _didIteratorError5 = true;
	                            _iteratorError5 = err;
	                        } finally {
	                            try {
	                                if (!_iteratorNormalCompletion5 && _iterator5["return"]) {
	                                    _iterator5["return"]();
	                                }
	                            } finally {
	                                if (_didIteratorError5) {
	                                    throw _iteratorError5;
	                                }
	                            }
	                        }
	
	                        dependents.set(radio, dependentControls);
	                    };
	
	                    for (var _iterator = radios[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                        var _iteratorNormalCompletion5;
	
	                        var _didIteratorError5;
	
	                        var _iteratorError5;
	
	                        var _iterator5, _step5;
	
	                        var _ret = _loop();
	
	                        if (_ret === "continue") continue;
	                    }
	                } catch (err) {
	                    _didIteratorError = true;
	                    _iteratorError = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion && _iterator["return"]) {
	                            _iterator["return"]();
	                        }
	                    } finally {
	                        if (_didIteratorError) {
	                            throw _iteratorError;
	                        }
	                    }
	                }
	
	                break;
	            case "checkbox":
	                group = _espalierCore2["default"].closest(control, ".checkbox");
	                break;
	            case "email":
	                validations.push(new _espalierValidation.Email(this));
	                group = _espalierCore2["default"].closest(control, ".form-group");
	                break;
	            case "date":
	                validations.push(new _espalierValidation.Date(this));
	                group = _espalierCore2["default"].closest(control, ".form-group");
	
	                if (control.datepicker) {
	                    control.datepicker().attr("type", "text");
	                }
	                break;
	            default:
	                group = _espalierCore2["default"].closest(control, ".form-group");
	                break;
	        }
	
	        this.message = _espalierMessageFactory2["default"].create({
	            attachTo: group,
	            messageAttachment: _espalierMessageFactory2["default"].messageAttachment.Flow,
	            onRemoved: function onRemoved() {
	                _espalierCore2["default"].removeClass(group, "has-error");
	            },
	            onAdded: function onAdded() {
	                _espalierCore2["default"].addClass(group, "has-error");
	                //TODO: Get rid of jQuery
	                $(group).velocity("callout.tada", {
	                    duration: 500
	                });
	            }
	        });
	
	        this.group = group;
	        this.originalDisplay = this.group.style.display;
	
	        if (explicitValidations.required || required || control.required || control.getAttribute("required")) {
	            validations.push(new _espalierValidation.Required(this));
	            _espalierCore2["default"].addClass(group, "required");
	        }
	
	        control.setAttribute(lowerCaseId, "");
	    }
	
	    _createClass(FormControl, [{
	        key: "val",
	        value: function val() {
	            var controlType = this.control.type ? this.control.type : this.control.getAttribute("type");
	
	            switch (controlType) {
	                case "checkbox":
	                    return _espalierCore2["default"].matches(this.control, ":checked") ? this.control.value : undefined;
	                case "radio":
	                    var selected = _espalierCore2["default"].find("[name=\"" + this.control.name + "\"]:checked");
	                    return selected.length == 1 ? selected[0].value : undefined;
	                default:
	                    return this.control.value;
	            }
	        }
	    }, {
	        key: "hide",
	        value: function hide() {
	            this.group.style.display = "none";
	        }
	    }, {
	        key: "show",
	        value: function show() {
	            this.group.style.display = this.originalDisplay;
	        }
	    }]);
	
	    return FormControl;
	})();
	
	var factory = function factory(control, form, explicitValidations) {
	    explicitValidations = explicitValidations ? explicitValidations : {};
	    var validations = [];
	    var formControl = new FormControl(control, form, validations, explicitValidations);
	
	    formControl.validate = function () {
	        var errors = [];
	        var hasErrors = false;
	
	        if (validations) {
	            var _iteratorNormalCompletion6 = true;
	            var _didIteratorError6 = false;
	            var _iteratorError6 = undefined;
	
	            try {
	                for (var _iterator6 = validations[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
	                    var validation = _step6.value;
	
	                    if (!validation.isValid()) {
	                        hasErrors = true;
	                        if (validation.message) {
	                            errors.push(validation.message);
	                        }
	                    }
	                }
	            } catch (err) {
	                _didIteratorError6 = true;
	                _iteratorError6 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion6 && _iterator6["return"]) {
	                        _iterator6["return"]();
	                    }
	                } finally {
	                    if (_didIteratorError6) {
	                        throw _iteratorError6;
	                    }
	                }
	            }
	        }
	
	        if (errors.length > 0) {
	            formControl.message.show({
	                message: errors,
	                messageType: _espalierMessageFactory2["default"].messageType.Error
	            });
	        }
	
	        return !hasErrors;
	    };
	
	    return formControl;
	};
	
	exports["default"] = factory;
	module.exports = exports["default"];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _espalierCore = __webpack_require__(5);
	
	var _espalierCore2 = _interopRequireDefault(_espalierCore);
	
	var _espalierFormsControl = __webpack_require__(11);
	
	var _espalierFormsControl2 = _interopRequireDefault(_espalierFormsControl);
	
	var Validation = function Validation(control) {
	    _classCallCheck(this, Validation);
	
	    if (this.isValid === undefined) {
	        throw new TypeError("Must have an isValid method.");
	    }
	
	    if (this.message === undefined) {
	        throw new TypeError("Must add a message prior to calling super.");
	    }
	
	    this.control = control;
	};
	
	var Required = (function (_Validation) {
	    _inherits(Required, _Validation);
	
	    function Required(control) {
	        _classCallCheck(this, Required);
	
	        _get(Object.getPrototypeOf(Required.prototype), "constructor", this).call(this, control);
	    }
	
	    _createClass(Required, [{
	        key: "isValid",
	        value: function isValid() {
	            return !_espalierCore2["default"].isEmptyOrSpaces(this.control.val());
	        }
	    }, {
	        key: "message",
	        get: function get() {
	            return "Field is required.";
	        }
	    }]);
	
	    return Required;
	})(Validation);
	
	var Email = (function (_Validation2) {
	    _inherits(Email, _Validation2);
	
	    function Email(control) {
	        _classCallCheck(this, Email);
	
	        _get(Object.getPrototypeOf(Email.prototype), "constructor", this).call(this, control);
	    }
	
	    _createClass(Email, [{
	        key: "isValid",
	        value: function isValid() {
	            return _espalierCore2["default"].isEmail(this.control.val());
	        }
	    }, {
	        key: "message",
	        get: function get() {
	            return "Invalid email address.";
	        }
	    }]);
	
	    return Email;
	})(Validation);
	
	var Date = (function (_Validation3) {
	    _inherits(Date, _Validation3);
	
	    function Date(control) {
	        _classCallCheck(this, Date);
	
	        _get(Object.getPrototypeOf(Date.prototype), "constructor", this).call(this, control);
	    }
	
	    _createClass(Date, [{
	        key: "isValid",
	        value: function isValid() {
	            return _espalierCore2["default"].isDate(this.control.val());
	        }
	    }, {
	        key: "message",
	        get: function get() {
	            return "Invalid date.";
	        }
	    }]);
	
	    return Date;
	})(Validation);
	
	var RequiredDependent = (function (_Validation4) {
	    _inherits(RequiredDependent, _Validation4);
	
	    function RequiredDependent(control, whenVal, dependent) {
	        _classCallCheck(this, RequiredDependent);
	
	        _get(Object.getPrototypeOf(RequiredDependent.prototype), "constructor", this).call(this, control);
	        this.whenVal = whenVal;
	        this.dependent = dependent;
	    }
	
	    _createClass(RequiredDependent, [{
	        key: "isValid",
	        value: function isValid() {
	            return this.control.val() !== this.whenVal || this.control.val() === this.whenVal && this.dependent.validate();
	        }
	    }, {
	        key: "message",
	        get: function get() {
	            return false;
	        }
	    }]);
	
	    return RequiredDependent;
	})(Validation);
	
	exports.Required = Required;
	exports.Email = Email;
	exports.Date = Date;
	exports.RequiredDependent = RequiredDependent;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _espalierCore = __webpack_require__(5);
	
	var _espalierCore2 = _interopRequireDefault(_espalierCore);
	
	var _espalierCommon = __webpack_require__(7);
	
	var _espalierCommon2 = _interopRequireDefault(_espalierCommon);
	
	var Dialog = (function () {
	    function Dialog(args) {
	        _classCallCheck(this, Dialog);
	
	        this.settings = {
	            element: undefined,
	            buttons: []
	        };
	
	        $.extend(this.settings, args);
	
	        if (!this.settings.element) {
	            throw new Error("You must pass an element.");
	        } else if (this.settings.element.length !== 1) {
	            throw new Error("element must have exactly one root element.");
	        }
	    }
	
	    _createClass(Dialog, [{
	        key: "show",
	        value: function show() {
	            var _this = this;
	
	            _espalierCore2["default"].hideMainMessage();
	            _espalierCommon2["default"].showVellum();
	            var dialog = this.settings.element;
	            dialog.css("position", "absolute");
	            _espalierCommon2["default"].body.append(dialog);
	            this.center();
	            dialog.css("display", "none");
	
	            dialog.velocity("transition.whirlIn", {
	                duration: 450
	            });
	
	            _espalierCore2["default"].addEventListener(dialog[0], "click", function (event) {
	                var _iteratorNormalCompletion = true;
	                var _didIteratorError = false;
	                var _iteratorError = undefined;
	
	                try {
	                    for (var _iterator = _this.settings.buttons[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                        var button = _step.value;
	
	                        //TODO: Maybe is a selector instead?
	                        if (button.id === event.target.id) {
	                            button.handler(_this);
	                        }
	                    }
	                } catch (err) {
	                    _didIteratorError = true;
	                    _iteratorError = err;
	                } finally {
	                    try {
	                        if (!_iteratorNormalCompletion && _iterator["return"]) {
	                            _iterator["return"]();
	                        }
	                    } finally {
	                        if (_didIteratorError) {
	                            throw _iteratorError;
	                        }
	                    }
	                }
	            });
	
	            return this;
	        }
	    }, {
	        key: "hide",
	        value: function hide() {
	            var dialog = $(this.settings.element);
	            dialog.velocity("transition.whirlOut", {
	                duration: 150,
	                complete: function complete() {
	                    dialog.remove();
	                    $("#notificationMessage").remove();
	
	                    if ($(".dialog").length == 0) {
	                        _espalierCommon2["default"].hideVellum();
	                    }
	                }
	            });
	            return this;
	        }
	    }, {
	        key: "center",
	        value: function center() {
	            var windowHeight = _espalierCommon2["default"].window.height();
	            var dialog = this.settings.element;
	            var scrollTop = _espalierCommon2["default"].window.scrollTop();
	            var height = dialog.height();
	            var top = windowHeight / 2 - height / 2 + scrollTop;
	            top = top > 0 ? top : 0;
	            dialog.css("top", top);
	        }
	    }]);
	
	    return Dialog;
	})();
	
	exports["default"] = function (args) {
	    return new Dialog(args);
	};
	
	module.exports = exports["default"];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _espalierCore = __webpack_require__(5);
	
	var _espalierCore2 = _interopRequireDefault(_espalierCore);
	
	var keys = {
	    container: new Object(),
	    result: new Object(),
	    currentStep: new Object(),
	    steps: new Object(),
	    transversed: new Object(),
	    indexHeadNodes: new Object(),
	    valueChanged: new Object()
	};
	
	var setStepStates = function setStepStates(graph) {
	    var headNodes = graph._internals.get(keys.indexHeadNodes);
	    var node = graph._internals.get(keys.currentStep);
	    var currentIndex = node.stepIndex;
	    var steps = graph._internals.get(keys.steps);
	
	    for (var i = 0; i < steps.length; i++) {
	        if (i < currentIndex) {
	            steps[i].cssClass = "graph-step-completed";
	            steps[i].status = "Completed";
	            continue;
	        }
	
	        if (i === currentIndex) {
	            steps[i].cssClass = "graph-step-in-progress";
	            steps[i].status = "In progress";
	            continue;
	        }
	
	        if (i > currentIndex) {
	            steps[i].cssClass = "graph-step-not-started";
	            steps[i].disabled = true;
	            steps[i].status = "Not started";
	            headNodes.set(i, false);
	        }
	    }
	
	    if (!headNodes.get(currentIndex)) {
	        headNodes.set(currentIndex, node);
	    }
	
	    node.renderIn(graph._internals.get(keys.container), graph._internals.get(keys.result), steps);
	
	    var valueChanged = graph._internals.get(keys.valueChanged);
	
	    if (valueChanged) {
	        valueChanged(graph._internals.get(keys.result));
	    }
	};
	
	var Graph = (function () {
	    function Graph(args) {
	        var _this = this;
	
	        _classCallCheck(this, Graph);
	
	        this._internals = new WeakMap();
	
	        if (!args.container.nodeName) {
	            //NOTE: This is probably a jQuery selection array.
	            args.container = args.container[0];
	        }
	
	        var headNodes = new Map();
	
	        this._internals.set(keys.container, args.container);
	        this._internals.set(keys.result, _espalierCore2["default"].extend(args["default"], {}));
	        this._internals.set(keys.currentStep, args.head);
	        this._internals.set(keys.steps, args.steps);
	        this._internals.set(keys.valueChanged, args.valueChanged);
	        this._internals.set(keys.transversed, []);
	        this._internals.set(keys.indexHeadNodes, headNodes);
	
	        for (var i = 0; i < args.steps.length; i++) {
	            args.steps[i].index = i;
	            headNodes.set(i, false);
	        }
	
	        headNodes.set(0, args.head);
	        this.goto(0);
	
	        _espalierCore2["default"].addEventListener(this._internals.get(keys.container), "click", function (e) {
	            var event = e.target.getAttribute("data-graph-event");
	
	            switch (event) {
	                case "next":
	                    _this.next();
	                    return;
	                case "back":
	                    _this.previous();
	                    return;
	                case "goto":
	                    var index = e.target.getAttribute("data-graph-index");
	                    _this.goto(Number(index));
	                    return;
	            }
	        });
	    }
	
	    _createClass(Graph, [{
	        key: "goto",
	        value: function goto(index) {
	            var headNodes = this._internals.get(keys.indexHeadNodes);
	            var nodeToGoTo = headNodes.get(index);
	            var transversed = this._internals.get(keys.transversed);
	            var result = this._internals.get(keys.result);
	
	            if (transversed.length > 0) {
	                var poppedNode = undefined;
	
	                do {
	                    poppedNode = transversed.pop();
	                    delete result[poppedNode.propertyName];
	                } while (poppedNode !== nodeToGoTo);
	            }
	
	            this._internals.set(keys.currentStep, nodeToGoTo);
	            setStepStates(this);
	        }
	    }, {
	        key: "next",
	        value: function next() {
	            var step = this._internals.get(keys.currentStep);
	            var value = step.getValue();
	
	            if (value === undefined) {
	                return;
	            }
	
	            var nextStep = step.next();
	
	            if (step.stepIndex > nextStep.stepIndex) {
	                throw new Error("Invalid step index. It must be equal to or greater than the last step's index.");
	            }
	
	            var transversed = this._internals.get(keys.transversed);
	            transversed.push(step);
	            _espalierCore2["default"].setProperty(this._internals.get(keys.result), step.propertyName, value);
	            this._internals.set(keys.currentStep, nextStep);
	            setStepStates(this);
	        }
	    }, {
	        key: "previous",
	        value: function previous() {
	            var transversed = this._internals.get(keys.transversed);
	            var lastNode = transversed.pop();
	            delete this._internals.get(keys.result)[lastNode.propertyName];
	            this._internals.set(keys.currentStep, lastNode);
	            setStepStates(this);
	        }
	    }]);
	
	    return Graph;
	})();
	
	exports["default"] = Graph;
	module.exports = exports["default"];

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var GraphNode = function GraphNode(args) {
	    _classCallCheck(this, GraphNode);
	
	    if (this.constructor === GraphNode) {
	        throw new TypeError("Abstract class GraphNode cannot be instantiated.");
	    }
	
	    if (this.getValue === undefined) {
	        throw new TypeError("GraphNode derivations must implment getValue()");
	    }
	
	    if (this.renderIn == undefined) {
	        throw new TypeError("GraphNode derivations must implement renderIn(container, result, steps)");
	    }
	
	    if (this.propertyName == undefined) {
	        throw new TypeError("GraphNode derivations must define a propertyName that will be set with it's value.");
	    }
	
	    if (this.next == undefined) {
	        throw new TypeError("GraphNode derivations must implement a method next() that returns the next node in the graph.");
	    }
	};
	
	exports["default"] = GraphNode;
	module.exports = exports["default"];

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _espalier = __webpack_require__(2);
	
	var _espalier2 = _interopRequireDefault(_espalier);
	
	var _graphNodes = __webpack_require__(17);
	
	var _graphNodes2 = _interopRequireDefault(_graphNodes);
	
	var DemoGraph = (function (_espalier$Graph) {
	    _inherits(DemoGraph, _espalier$Graph);
	
	    function DemoGraph(container, valueChanged) {
	        _classCallCheck(this, DemoGraph);
	
	        _get(Object.getPrototypeOf(DemoGraph.prototype), "constructor", this).call(this, {
	            container: container,
	            "default": {},
	            head: new _graphNodes2["default"](),
	            steps: [{
	                title: "Step 1"
	            }, {
	                title: "Step 2"
	            }, {
	                title: "Step 3"
	            }],
	            valueChanged: valueChanged
	        });
	    }
	
	    return DemoGraph;
	})(_espalier2["default"].Graph);
	
	exports["default"] = DemoGraph;
	module.exports = exports["default"];

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _espalier = __webpack_require__(2);
	
	var _espalier2 = _interopRequireDefault(_espalier);
	
	var _templatesGraphProgress = __webpack_require__(18);
	
	var _templatesGraphProgress2 = _interopRequireDefault(_templatesGraphProgress);
	
	var nextKey = new Object();
	
	var getStepContent = function getStepContent(stepId, stepText, hasNext, hasBack) {
	    var stepContent = "<h3 id=\"" + stepId + "\">" + stepText + "</h3>";
	
	    if (hasBack) {
	        stepContent += "<a data-graph-event='back' href='javascript: void(0);' class='btn btn-primary'>Back</a> ";
	    }
	
	    if (hasNext) {
	        stepContent += "<a data-graph-event=\"next\" href=\"javascript: void(0);\" class=\"btn btn-primary\">Next</a>";
	    }
	
	    return stepContent;
	};
	
	var Step1 = (function (_espalier$GraphNode) {
	    _inherits(Step1, _espalier$GraphNode);
	
	    function Step1() {
	        _classCallCheck(this, Step1);
	
	        _get(Object.getPrototypeOf(Step1.prototype), "constructor", this).call(this);
	        this._internals = new WeakMap();
	    }
	
	    _createClass(Step1, [{
	        key: "getValue",
	        value: function getValue() {
	            return "This is step 1";
	        }
	    }, {
	        key: "renderIn",
	        value: function renderIn(container, result, steps) {
	            var progress = (0, _templatesGraphProgress2["default"])(steps);
	            container.innerHTML = progress + getStepContent("step-1", this.getValue(), true, false);
	        }
	    }, {
	        key: "next",
	        value: function next() {
	            if (!this._internals.has(nextKey)) {
	                this._internals.set(nextKey, new Step2dot1());
	            }
	
	            return this._internals.get(nextKey);
	        }
	    }, {
	        key: "propertyName",
	        get: function get() {
	            return "StepOne";
	        }
	    }, {
	        key: "stepIndex",
	        get: function get() {
	            return 0;
	        }
	    }]);
	
	    return Step1;
	})(_espalier2["default"].GraphNode);
	
	exports["default"] = Step1;
	
	var Step2dot1 = (function (_espalier$GraphNode2) {
	    _inherits(Step2dot1, _espalier$GraphNode2);
	
	    function Step2dot1() {
	        _classCallCheck(this, Step2dot1);
	
	        _get(Object.getPrototypeOf(Step2dot1.prototype), "constructor", this).call(this);
	        this._internals = new WeakMap();
	    }
	
	    _createClass(Step2dot1, [{
	        key: "getValue",
	        value: function getValue() {
	            return "This is step 2.1";
	        }
	    }, {
	        key: "renderIn",
	        value: function renderIn(container, result, steps) {
	            var progress = (0, _templatesGraphProgress2["default"])(steps);
	            container.innerHTML = progress + getStepContent("step-2dot1", this.getValue(), true, true);
	        }
	    }, {
	        key: "next",
	        value: function next() {
	            if (!this._internals.has(nextKey)) {
	                this._internals.set(nextKey, new Step2dot2());
	            }
	
	            return this._internals.get(nextKey);
	        }
	    }, {
	        key: "propertyName",
	        get: function get() {
	            return "StepTwoDotOne";
	        }
	    }, {
	        key: "stepIndex",
	        get: function get() {
	            return 1;
	        }
	    }]);
	
	    return Step2dot1;
	})(_espalier2["default"].GraphNode);
	
	var Step2dot2 = (function (_espalier$GraphNode3) {
	    _inherits(Step2dot2, _espalier$GraphNode3);
	
	    function Step2dot2() {
	        _classCallCheck(this, Step2dot2);
	
	        _get(Object.getPrototypeOf(Step2dot2.prototype), "constructor", this).call(this);
	        this._internals = new WeakMap();
	    }
	
	    _createClass(Step2dot2, [{
	        key: "getValue",
	        value: function getValue() {
	            return "This is step 2.2";
	        }
	    }, {
	        key: "renderIn",
	        value: function renderIn(container, result, steps) {
	            var progress = (0, _templatesGraphProgress2["default"])(steps);
	            container.innerHTML = progress + getStepContent("step-2dot2", this.getValue(), true, true);
	        }
	    }, {
	        key: "next",
	        value: function next() {
	            if (!this._internals.has(nextKey)) {
	                this._internals.set(nextKey, new Step3());
	            }
	
	            return this._internals.get(nextKey);
	        }
	    }, {
	        key: "propertyName",
	        get: function get() {
	            return "StepTwoDotTwo";
	        }
	    }, {
	        key: "stepIndex",
	        get: function get() {
	            return 1;
	        }
	    }]);
	
	    return Step2dot2;
	})(_espalier2["default"].GraphNode);
	
	var Step3 = (function (_espalier$GraphNode4) {
	    _inherits(Step3, _espalier$GraphNode4);
	
	    function Step3() {
	        _classCallCheck(this, Step3);
	
	        _get(Object.getPrototypeOf(Step3.prototype), "constructor", this).call(this);
	        this._internals = new WeakMap();
	    }
	
	    _createClass(Step3, [{
	        key: "getValue",
	        value: function getValue() {
	            return "This is step 3";
	        }
	    }, {
	        key: "renderIn",
	        value: function renderIn(container, result, steps) {
	            var progress = (0, _templatesGraphProgress2["default"])(steps);
	            container.innerHTML = progress + getStepContent("step-3", this.getValue(), true, true);
	        }
	    }, {
	        key: "next",
	        value: function next() {
	            if (!this._internals.has(nextKey)) {
	                this._internals.set(nextKey, new Step4());
	            }
	
	            return this._internals.get(nextKey);
	        }
	    }, {
	        key: "propertyName",
	        get: function get() {
	            return "StepThree";
	        }
	    }, {
	        key: "stepIndex",
	        get: function get() {
	            return 2;
	        }
	    }]);
	
	    return Step3;
	})(_espalier2["default"].GraphNode);
	
	var Step4 = (function (_espalier$GraphNode5) {
	    _inherits(Step4, _espalier$GraphNode5);
	
	    function Step4() {
	        _classCallCheck(this, Step4);
	
	        _get(Object.getPrototypeOf(Step4.prototype), "constructor", this).call(this);
	    }
	
	    _createClass(Step4, [{
	        key: "getValue",
	        value: function getValue() {
	            return "This is step 4";
	        }
	    }, {
	        key: "renderIn",
	        value: function renderIn(container, result, steps) {
	            var progress = (0, _templatesGraphProgress2["default"])(steps);
	            container.innerHTML = progress + getStepContent("step-4", this.getValue(), false, true);
	        }
	    }, {
	        key: "next",
	        value: function next() {
	            return false;
	        }
	    }, {
	        key: "propertyName",
	        get: function get() {
	            return "StepThree";
	        }
	    }, {
	        key: "stepIndex",
	        get: function get() {
	            return 3;
	        }
	    }]);
	
	    return Step4;
	})(_espalier2["default"].GraphNode);
	
	module.exports = exports["default"];

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(19);
	module.exports = (Handlebars["default"] || Handlebars).template({"1":function(depth0,helpers,partials,data) {
	    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;
	
	  return "    <a data-graph-event=\"goto\" data-graph-index=\""
	    + alias3(((helper = (helper = helpers.index || (depth0 != null ? depth0.index : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
	    + "\" class=\"btn "
	    + alias3(((helper = (helper = helpers.cssClass || (depth0 != null ? depth0.cssClass : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"cssClass","hash":{},"data":data}) : helper)))
	    + "\">"
	    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"title","hash":{},"data":data}) : helper)))
	    + " ("
	    + alias3(((helper = (helper = helpers.status || (depth0 != null ? depth0.status : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"status","hash":{},"data":data}) : helper)))
	    + ")</a>\r\n";
	},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
	    var stack1;
	
	  return "<section id=\"graph-progress\">\r\n"
	    + ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + "</section>";
	},"useData":true});

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	// Create a simple path alias to allow browserify to resolve
	// the runtime on a supported path.
	'use strict';
	
	module.exports = __webpack_require__(20)['default'];

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireWildcard = function _interopRequireWildcard(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	};
	
	exports.__esModule = true;
	
	var _import = __webpack_require__(22);
	
	var base = _interopRequireWildcard(_import);
	
	// Each of these augment the Handlebars object. No need to setup here.
	// (This is done to easily share code between commonjs and browse envs)
	
	var _SafeString = __webpack_require__(24);
	
	var _SafeString2 = _interopRequireWildcard(_SafeString);
	
	var _Exception = __webpack_require__(23);
	
	var _Exception2 = _interopRequireWildcard(_Exception);
	
	var _import2 = __webpack_require__(21);
	
	var Utils = _interopRequireWildcard(_import2);
	
	var _import3 = __webpack_require__(25);
	
	var runtime = _interopRequireWildcard(_import3);
	
	var _noConflict = __webpack_require__(26);
	
	var _noConflict2 = _interopRequireWildcard(_noConflict);
	
	// For compatibility and usage outside of module systems, make the Handlebars object a namespace
	function create() {
	  var hb = new base.HandlebarsEnvironment();
	
	  Utils.extend(hb, base);
	  hb.SafeString = _SafeString2['default'];
	  hb.Exception = _Exception2['default'];
	  hb.Utils = Utils;
	  hb.escapeExpression = Utils.escapeExpression;
	
	  hb.VM = runtime;
	  hb.template = function (spec) {
	    return runtime.template(spec, hb);
	  };
	
	  return hb;
	}
	
	var inst = create();
	inst.create = create;
	
	_noConflict2['default'](inst);
	
	inst['default'] = inst;
	
	exports['default'] = inst;
	module.exports = exports['default'];

/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	exports.extend = extend;
	
	// Older IE versions do not directly support indexOf so we must implement our own, sadly.
	exports.indexOf = indexOf;
	exports.escapeExpression = escapeExpression;
	exports.isEmpty = isEmpty;
	exports.blockParams = blockParams;
	exports.appendContextPath = appendContextPath;
	var escape = {
	  '&': '&amp;',
	  '<': '&lt;',
	  '>': '&gt;',
	  '"': '&quot;',
	  '\'': '&#x27;',
	  '`': '&#x60;'
	};
	
	var badChars = /[&<>"'`]/g,
	    possible = /[&<>"'`]/;
	
	function escapeChar(chr) {
	  return escape[chr];
	}
	
	function extend(obj /* , ...source */) {
	  for (var i = 1; i < arguments.length; i++) {
	    for (var key in arguments[i]) {
	      if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
	        obj[key] = arguments[i][key];
	      }
	    }
	  }
	
	  return obj;
	}
	
	var toString = Object.prototype.toString;
	
	exports.toString = toString;
	// Sourced from lodash
	// https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
	/*eslint-disable func-style, no-var */
	var isFunction = function isFunction(value) {
	  return typeof value === 'function';
	};
	// fallback for older versions of Chrome and Safari
	/* istanbul ignore next */
	if (isFunction(/x/)) {
	  exports.isFunction = isFunction = function (value) {
	    return typeof value === 'function' && toString.call(value) === '[object Function]';
	  };
	}
	var isFunction;
	exports.isFunction = isFunction;
	/*eslint-enable func-style, no-var */
	
	/* istanbul ignore next */
	var isArray = Array.isArray || function (value) {
	  return value && typeof value === 'object' ? toString.call(value) === '[object Array]' : false;
	};exports.isArray = isArray;
	
	function indexOf(array, value) {
	  for (var i = 0, len = array.length; i < len; i++) {
	    if (array[i] === value) {
	      return i;
	    }
	  }
	  return -1;
	}
	
	function escapeExpression(string) {
	  if (typeof string !== 'string') {
	    // don't escape SafeStrings, since they're already safe
	    if (string && string.toHTML) {
	      return string.toHTML();
	    } else if (string == null) {
	      return '';
	    } else if (!string) {
	      return string + '';
	    }
	
	    // Force a string conversion as this will be done by the append regardless and
	    // the regex test will do this transparently behind the scenes, causing issues if
	    // an object's to string has escaped characters in it.
	    string = '' + string;
	  }
	
	  if (!possible.test(string)) {
	    return string;
	  }
	  return string.replace(badChars, escapeChar);
	}
	
	function isEmpty(value) {
	  if (!value && value !== 0) {
	    return true;
	  } else if (isArray(value) && value.length === 0) {
	    return true;
	  } else {
	    return false;
	  }
	}
	
	function blockParams(params, ids) {
	  params.path = ids;
	  return params;
	}
	
	function appendContextPath(contextPath, id) {
	  return (contextPath ? contextPath + '.' : '') + id;
	}

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireWildcard = function _interopRequireWildcard(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	};
	
	exports.__esModule = true;
	exports.HandlebarsEnvironment = HandlebarsEnvironment;
	exports.createFrame = createFrame;
	
	var _import = __webpack_require__(21);
	
	var Utils = _interopRequireWildcard(_import);
	
	var _Exception = __webpack_require__(23);
	
	var _Exception2 = _interopRequireWildcard(_Exception);
	
	var VERSION = '3.0.1';
	exports.VERSION = VERSION;
	var COMPILER_REVISION = 6;
	
	exports.COMPILER_REVISION = COMPILER_REVISION;
	var REVISION_CHANGES = {
	  1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
	  2: '== 1.0.0-rc.3',
	  3: '== 1.0.0-rc.4',
	  4: '== 1.x.x',
	  5: '== 2.0.0-alpha.x',
	  6: '>= 2.0.0-beta.1'
	};
	
	exports.REVISION_CHANGES = REVISION_CHANGES;
	var isArray = Utils.isArray,
	    isFunction = Utils.isFunction,
	    toString = Utils.toString,
	    objectType = '[object Object]';
	
	function HandlebarsEnvironment(helpers, partials) {
	  this.helpers = helpers || {};
	  this.partials = partials || {};
	
	  registerDefaultHelpers(this);
	}
	
	HandlebarsEnvironment.prototype = {
	  constructor: HandlebarsEnvironment,
	
	  logger: logger,
	  log: log,
	
	  registerHelper: function registerHelper(name, fn) {
	    if (toString.call(name) === objectType) {
	      if (fn) {
	        throw new _Exception2['default']('Arg not supported with multiple helpers');
	      }
	      Utils.extend(this.helpers, name);
	    } else {
	      this.helpers[name] = fn;
	    }
	  },
	  unregisterHelper: function unregisterHelper(name) {
	    delete this.helpers[name];
	  },
	
	  registerPartial: function registerPartial(name, partial) {
	    if (toString.call(name) === objectType) {
	      Utils.extend(this.partials, name);
	    } else {
	      if (typeof partial === 'undefined') {
	        throw new _Exception2['default']('Attempting to register a partial as undefined');
	      }
	      this.partials[name] = partial;
	    }
	  },
	  unregisterPartial: function unregisterPartial(name) {
	    delete this.partials[name];
	  }
	};
	
	function registerDefaultHelpers(instance) {
	  instance.registerHelper('helperMissing', function () {
	    if (arguments.length === 1) {
	      // A missing field in a {{foo}} constuct.
	      return undefined;
	    } else {
	      // Someone is actually trying to call something, blow up.
	      throw new _Exception2['default']('Missing helper: "' + arguments[arguments.length - 1].name + '"');
	    }
	  });
	
	  instance.registerHelper('blockHelperMissing', function (context, options) {
	    var inverse = options.inverse,
	        fn = options.fn;
	
	    if (context === true) {
	      return fn(this);
	    } else if (context === false || context == null) {
	      return inverse(this);
	    } else if (isArray(context)) {
	      if (context.length > 0) {
	        if (options.ids) {
	          options.ids = [options.name];
	        }
	
	        return instance.helpers.each(context, options);
	      } else {
	        return inverse(this);
	      }
	    } else {
	      if (options.data && options.ids) {
	        var data = createFrame(options.data);
	        data.contextPath = Utils.appendContextPath(options.data.contextPath, options.name);
	        options = { data: data };
	      }
	
	      return fn(context, options);
	    }
	  });
	
	  instance.registerHelper('each', function (context, options) {
	    if (!options) {
	      throw new _Exception2['default']('Must pass iterator to #each');
	    }
	
	    var fn = options.fn,
	        inverse = options.inverse,
	        i = 0,
	        ret = '',
	        data = undefined,
	        contextPath = undefined;
	
	    if (options.data && options.ids) {
	      contextPath = Utils.appendContextPath(options.data.contextPath, options.ids[0]) + '.';
	    }
	
	    if (isFunction(context)) {
	      context = context.call(this);
	    }
	
	    if (options.data) {
	      data = createFrame(options.data);
	    }
	
	    function execIteration(field, index, last) {
	      if (data) {
	        data.key = field;
	        data.index = index;
	        data.first = index === 0;
	        data.last = !!last;
	
	        if (contextPath) {
	          data.contextPath = contextPath + field;
	        }
	      }
	
	      ret = ret + fn(context[field], {
	        data: data,
	        blockParams: Utils.blockParams([context[field], field], [contextPath + field, null])
	      });
	    }
	
	    if (context && typeof context === 'object') {
	      if (isArray(context)) {
	        for (var j = context.length; i < j; i++) {
	          execIteration(i, i, i === context.length - 1);
	        }
	      } else {
	        var priorKey = undefined;
	
	        for (var key in context) {
	          if (context.hasOwnProperty(key)) {
	            // We're running the iterations one step out of sync so we can detect
	            // the last iteration without have to scan the object twice and create
	            // an itermediate keys array.
	            if (priorKey) {
	              execIteration(priorKey, i - 1);
	            }
	            priorKey = key;
	            i++;
	          }
	        }
	        if (priorKey) {
	          execIteration(priorKey, i - 1, true);
	        }
	      }
	    }
	
	    if (i === 0) {
	      ret = inverse(this);
	    }
	
	    return ret;
	  });
	
	  instance.registerHelper('if', function (conditional, options) {
	    if (isFunction(conditional)) {
	      conditional = conditional.call(this);
	    }
	
	    // Default behavior is to render the positive path if the value is truthy and not empty.
	    // The `includeZero` option may be set to treat the condtional as purely not empty based on the
	    // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
	    if (!options.hash.includeZero && !conditional || Utils.isEmpty(conditional)) {
	      return options.inverse(this);
	    } else {
	      return options.fn(this);
	    }
	  });
	
	  instance.registerHelper('unless', function (conditional, options) {
	    return instance.helpers['if'].call(this, conditional, { fn: options.inverse, inverse: options.fn, hash: options.hash });
	  });
	
	  instance.registerHelper('with', function (context, options) {
	    if (isFunction(context)) {
	      context = context.call(this);
	    }
	
	    var fn = options.fn;
	
	    if (!Utils.isEmpty(context)) {
	      if (options.data && options.ids) {
	        var data = createFrame(options.data);
	        data.contextPath = Utils.appendContextPath(options.data.contextPath, options.ids[0]);
	        options = { data: data };
	      }
	
	      return fn(context, options);
	    } else {
	      return options.inverse(this);
	    }
	  });
	
	  instance.registerHelper('log', function (message, options) {
	    var level = options.data && options.data.level != null ? parseInt(options.data.level, 10) : 1;
	    instance.log(level, message);
	  });
	
	  instance.registerHelper('lookup', function (obj, field) {
	    return obj && obj[field];
	  });
	}
	
	var logger = {
	  methodMap: { 0: 'debug', 1: 'info', 2: 'warn', 3: 'error' },
	
	  // State enum
	  DEBUG: 0,
	  INFO: 1,
	  WARN: 2,
	  ERROR: 3,
	  level: 1,
	
	  // Can be overridden in the host environment
	  log: function log(level, message) {
	    if (typeof console !== 'undefined' && logger.level <= level) {
	      var method = logger.methodMap[level];
	      (console[method] || console.log).call(console, message); // eslint-disable-line no-console
	    }
	  }
	};
	
	exports.logger = logger;
	var log = logger.log;
	
	exports.log = log;
	
	function createFrame(object) {
	  var frame = Utils.extend({}, object);
	  frame._parent = object;
	  return frame;
	}
	
	/* [args, ]options */

/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	
	var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];
	
	function Exception(message, node) {
	  var loc = node && node.loc,
	      line = undefined,
	      column = undefined;
	  if (loc) {
	    line = loc.start.line;
	    column = loc.start.column;
	
	    message += ' - ' + line + ':' + column;
	  }
	
	  var tmp = Error.prototype.constructor.call(this, message);
	
	  // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
	  for (var idx = 0; idx < errorProps.length; idx++) {
	    this[errorProps[idx]] = tmp[errorProps[idx]];
	  }
	
	  if (Error.captureStackTrace) {
	    Error.captureStackTrace(this, Exception);
	  }
	
	  if (loc) {
	    this.lineNumber = line;
	    this.column = column;
	  }
	}
	
	Exception.prototype = new Error();
	
	exports['default'] = Exception;
	module.exports = exports['default'];

/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';
	
	exports.__esModule = true;
	// Build out our basic SafeString type
	function SafeString(string) {
	  this.string = string;
	}
	
	SafeString.prototype.toString = SafeString.prototype.toHTML = function () {
	  return '' + this.string;
	};
	
	exports['default'] = SafeString;
	module.exports = exports['default'];

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireWildcard = function _interopRequireWildcard(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	};
	
	exports.__esModule = true;
	exports.checkRevision = checkRevision;
	
	// TODO: Remove this line and break up compilePartial
	
	exports.template = template;
	exports.wrapProgram = wrapProgram;
	exports.resolvePartial = resolvePartial;
	exports.invokePartial = invokePartial;
	exports.noop = noop;
	
	var _import = __webpack_require__(21);
	
	var Utils = _interopRequireWildcard(_import);
	
	var _Exception = __webpack_require__(23);
	
	var _Exception2 = _interopRequireWildcard(_Exception);
	
	var _COMPILER_REVISION$REVISION_CHANGES$createFrame = __webpack_require__(22);
	
	function checkRevision(compilerInfo) {
	  var compilerRevision = compilerInfo && compilerInfo[0] || 1,
	      currentRevision = _COMPILER_REVISION$REVISION_CHANGES$createFrame.COMPILER_REVISION;
	
	  if (compilerRevision !== currentRevision) {
	    if (compilerRevision < currentRevision) {
	      var runtimeVersions = _COMPILER_REVISION$REVISION_CHANGES$createFrame.REVISION_CHANGES[currentRevision],
	          compilerVersions = _COMPILER_REVISION$REVISION_CHANGES$createFrame.REVISION_CHANGES[compilerRevision];
	      throw new _Exception2['default']('Template was precompiled with an older version of Handlebars than the current runtime. ' + 'Please update your precompiler to a newer version (' + runtimeVersions + ') or downgrade your runtime to an older version (' + compilerVersions + ').');
	    } else {
	      // Use the embedded version info since the runtime doesn't know about this revision yet
	      throw new _Exception2['default']('Template was precompiled with a newer version of Handlebars than the current runtime. ' + 'Please update your runtime to a newer version (' + compilerInfo[1] + ').');
	    }
	  }
	}
	
	function template(templateSpec, env) {
	  /* istanbul ignore next */
	  if (!env) {
	    throw new _Exception2['default']('No environment passed to template');
	  }
	  if (!templateSpec || !templateSpec.main) {
	    throw new _Exception2['default']('Unknown template object: ' + typeof templateSpec);
	  }
	
	  // Note: Using env.VM references rather than local var references throughout this section to allow
	  // for external users to override these as psuedo-supported APIs.
	  env.VM.checkRevision(templateSpec.compiler);
	
	  function invokePartialWrapper(partial, context, options) {
	    if (options.hash) {
	      context = Utils.extend({}, context, options.hash);
	    }
	
	    partial = env.VM.resolvePartial.call(this, partial, context, options);
	    var result = env.VM.invokePartial.call(this, partial, context, options);
	
	    if (result == null && env.compile) {
	      options.partials[options.name] = env.compile(partial, templateSpec.compilerOptions, env);
	      result = options.partials[options.name](context, options);
	    }
	    if (result != null) {
	      if (options.indent) {
	        var lines = result.split('\n');
	        for (var i = 0, l = lines.length; i < l; i++) {
	          if (!lines[i] && i + 1 === l) {
	            break;
	          }
	
	          lines[i] = options.indent + lines[i];
	        }
	        result = lines.join('\n');
	      }
	      return result;
	    } else {
	      throw new _Exception2['default']('The partial ' + options.name + ' could not be compiled when running in runtime-only mode');
	    }
	  }
	
	  // Just add water
	  var container = {
	    strict: function strict(obj, name) {
	      if (!(name in obj)) {
	        throw new _Exception2['default']('"' + name + '" not defined in ' + obj);
	      }
	      return obj[name];
	    },
	    lookup: function lookup(depths, name) {
	      var len = depths.length;
	      for (var i = 0; i < len; i++) {
	        if (depths[i] && depths[i][name] != null) {
	          return depths[i][name];
	        }
	      }
	    },
	    lambda: function lambda(current, context) {
	      return typeof current === 'function' ? current.call(context) : current;
	    },
	
	    escapeExpression: Utils.escapeExpression,
	    invokePartial: invokePartialWrapper,
	
	    fn: function fn(i) {
	      return templateSpec[i];
	    },
	
	    programs: [],
	    program: function program(i, data, declaredBlockParams, blockParams, depths) {
	      var programWrapper = this.programs[i],
	          fn = this.fn(i);
	      if (data || depths || blockParams || declaredBlockParams) {
	        programWrapper = wrapProgram(this, i, fn, data, declaredBlockParams, blockParams, depths);
	      } else if (!programWrapper) {
	        programWrapper = this.programs[i] = wrapProgram(this, i, fn);
	      }
	      return programWrapper;
	    },
	
	    data: function data(value, depth) {
	      while (value && depth--) {
	        value = value._parent;
	      }
	      return value;
	    },
	    merge: function merge(param, common) {
	      var obj = param || common;
	
	      if (param && common && param !== common) {
	        obj = Utils.extend({}, common, param);
	      }
	
	      return obj;
	    },
	
	    noop: env.VM.noop,
	    compilerInfo: templateSpec.compiler
	  };
	
	  function ret(context) {
	    var options = arguments[1] === undefined ? {} : arguments[1];
	
	    var data = options.data;
	
	    ret._setup(options);
	    if (!options.partial && templateSpec.useData) {
	      data = initData(context, data);
	    }
	    var depths = undefined,
	        blockParams = templateSpec.useBlockParams ? [] : undefined;
	    if (templateSpec.useDepths) {
	      depths = options.depths ? [context].concat(options.depths) : [context];
	    }
	
	    return templateSpec.main.call(container, context, container.helpers, container.partials, data, blockParams, depths);
	  }
	  ret.isTop = true;
	
	  ret._setup = function (options) {
	    if (!options.partial) {
	      container.helpers = container.merge(options.helpers, env.helpers);
	
	      if (templateSpec.usePartial) {
	        container.partials = container.merge(options.partials, env.partials);
	      }
	    } else {
	      container.helpers = options.helpers;
	      container.partials = options.partials;
	    }
	  };
	
	  ret._child = function (i, data, blockParams, depths) {
	    if (templateSpec.useBlockParams && !blockParams) {
	      throw new _Exception2['default']('must pass block params');
	    }
	    if (templateSpec.useDepths && !depths) {
	      throw new _Exception2['default']('must pass parent depths');
	    }
	
	    return wrapProgram(container, i, templateSpec[i], data, 0, blockParams, depths);
	  };
	  return ret;
	}
	
	function wrapProgram(container, i, fn, data, declaredBlockParams, blockParams, depths) {
	  function prog(context) {
	    var options = arguments[1] === undefined ? {} : arguments[1];
	
	    return fn.call(container, context, container.helpers, container.partials, options.data || data, blockParams && [options.blockParams].concat(blockParams), depths && [context].concat(depths));
	  }
	  prog.program = i;
	  prog.depth = depths ? depths.length : 0;
	  prog.blockParams = declaredBlockParams || 0;
	  return prog;
	}
	
	function resolvePartial(partial, context, options) {
	  if (!partial) {
	    partial = options.partials[options.name];
	  } else if (!partial.call && !options.name) {
	    // This is a dynamic partial that returned a string
	    options.name = partial;
	    partial = options.partials[partial];
	  }
	  return partial;
	}
	
	function invokePartial(partial, context, options) {
	  options.partial = true;
	
	  if (partial === undefined) {
	    throw new _Exception2['default']('The partial ' + options.name + ' could not be found');
	  } else if (partial instanceof Function) {
	    return partial(context, options);
	  }
	}
	
	function noop() {
	  return '';
	}
	
	function initData(context, data) {
	  if (!data || !('root' in data)) {
	    data = data ? _COMPILER_REVISION$REVISION_CHANGES$createFrame.createFrame(data) : {};
	    data.root = context;
	  }
	  return data;
	}

/***/ },
/* 26 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	exports.__esModule = true;
	/*global window */
	
	exports['default'] = function (Handlebars) {
	  /* istanbul ignore next */
	  var root = typeof global !== 'undefined' ? global : window,
	      $Handlebars = root.Handlebars;
	  /* istanbul ignore next */
	  Handlebars.noConflict = function () {
	    if (root.Handlebars === Handlebars) {
	      root.Handlebars = $Handlebars;
	    }
	  };
	};
	
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _espalierMessageFactory = __webpack_require__(4);
	
	var _espalierMessageFactory2 = _interopRequireDefault(_espalierMessageFactory);
	
	var _espalierWaitscreen = __webpack_require__(6);
	
	var _espalierWaitscreen2 = _interopRequireDefault(_espalierWaitscreen);
	
	var _espalierCommon = __webpack_require__(7);
	
	var _espalierCommon2 = _interopRequireDefault(_espalierCommon);
	
	var _espalierCore = __webpack_require__(5);
	
	var _espalierCore2 = _interopRequireDefault(_espalierCore);
	
	var getFooter = function getFooter(table) {
	    var startAtPage = Math.max(0, table.settings.currentPage - 3);
	    var endAtPage = Math.min(table.settings.pages - 1, table.settings.currentPage + 3 + Math.max(3 - table.settings.currentPage, 0));
	    var pagingControl = "<ul class=\"pagination\">";
	
	    pagingControl += "<li" + (table.settings.currentPage == 0 ? " class=\"disabled\"" : "") + "><a data-page=\"" + (table.settings.currentPage - 1) + "\" class=\"espalier-table-button\" href=\"javascript: void(0);\"><span aria-hidden=\"true\">&laquo;</span></a></li>";
	
	    for (var i = startAtPage; i <= endAtPage; i++) {
	        pagingControl += "<li" + (i === table.settings.currentPage ? " class=\"active\"" : "") + "><a data-page=\"" + i + "\" class=\"espalier-table-button\" href=\"javascript: void(0);\">" + (i + 1) + "</a></li>";
	    }
	
	    var nextPage = table.settings.currentPage + 1;
	    pagingControl += "<li" + (nextPage == table.settings.pages ? " class=\"disabled\"" : "") + "><a data-page=\"" + nextPage + "\" class=\"espalier-table-button\" href=\"javascript: void(0);\"><span aria-hidden=\"true\">&raquo;</span></a></li>";
	
	    return "<tfoot><tr><td colspan=\"42\">" + pagingControl + "</td></tr></tfoot>";
	};
	
	var renderTable = function renderTable(table) {
	    var promise = new Promise(function (resolve, reject) {
	        var rendered = "<table class=\"" + table.settings.tableClass + " table table-striped\">";
	
	        if (table.settings.headerTemplate) {
	            rendered += table.settings.headerTemplate();
	        }
	
	        rendered += "<tbody>";
	        var startAtIndex = table.settings.currentPage * table.settings.pageSize;
	
	        if (table.settings.data) {
	            for (var i = startAtIndex; i < Math.min(startAtIndex + table.settings.pageSize, table.settings.data.length); i++) {
	                rendered += table.settings.rowTemplate(table.settings.data[i]);
	            }
	
	            rendered += "</tbody>";
	
	            if (table.settings.pages > 0) {
	                rendered += getFooter(table);
	            }
	            resolve(rendered);
	        } else {
	            _espalierCore2["default"].sendRequest({
	                url: table.settings.fetchUrl,
	                type: "POST",
	                data: {
	                    Page: table.settings.currentPage,
	                    PageSize: table.settings.pageSize,
	                    Criteria: table.settings.filter
	                }
	            }).then(function (result) {
	                if (table.settings.fetchCallback) {
	                    table.settings.fetchCallback(result);
	                }
	
	                table.settings.pages = Math.ceil(result.data.total / result.data.pageSize);
	                for (var i = 0; i < result.data.records.length; i++) {
	                    rendered += table.settings.rowTemplate(result.data.records[i]);
	                }
	                rendered += "</tbody>";
	                rendered += getFooter(table);
	                resolve(rendered);
	            });
	        }
	    });
	
	    promise.then(function (rendered) {
	        table.settings.container.html(rendered);
	
	        if (table.settings.renderedCallback) {
	            table.settings.renderedCallback(table.settings.container[0].getElementsByTagName("table")[0]);
	        }
	    });
	};
	
	var Table = (function () {
	    function Table(args) {
	        _classCallCheck(this, Table);
	
	        this.settings = {
	            container: undefined,
	            currentPage: 0,
	            data: undefined,
	            fetchCallback: undefined,
	            fetchUrl: "",
	            headerTemplate: undefined,
	            pageSize: 10,
	            prefetchPages: 5,
	            rowTemplate: undefined,
	            tableClass: "espalier-table",
	            renderedCallback: undefined
	        };
	
	        $.extend(this.settings, args);
	
	        if (!this.settings.fetchUrl && !this.settings.data) {
	            throw new TypeError("You must either specify a fetch url or pass in data for the table to display.");
	        }
	
	        if (!this.settings.container) {
	            throw new TypeError("You must specify a container to place the table in.");
	        }
	
	        if (!this.settings.rowTemplate) {
	            throw new TypeError("You must provide a row template.");
	        }
	
	        if (this.settings.data) {
	            this.settings.pages = Math.ceil(this.settings.data.length / this.settings.pageSize);
	        }
	
	        $.extend(this.settings, args);
	
	        var table = this;
	
	        this.settings.container.on("click", ".espalier-table-button", function () {
	            table.goToPage($(this).data("page"));
	        });
	
	        renderTable(this);
	    }
	
	    _createClass(Table, [{
	        key: "next",
	        value: function next() {
	            this.settings.currentPage++;
	            renderTable(this);
	            return this;
	        }
	    }, {
	        key: "previous",
	        value: function previous() {
	            this.settings.currentPage--;
	            renderTable(this);
	            return this;
	        }
	    }, {
	        key: "filter",
	        value: function filter(_filter) {
	            this.settings.filter = _filter;
	            this.settings.currentPage = 0;
	            renderTable(this);
	            return this;
	        }
	    }, {
	        key: "goToPage",
	        value: function goToPage(page) {
	            if (page < 0 || page >= this.settings.pages) {
	                return;
	            }
	
	            this.settings.currentPage = page;
	            renderTable(this);
	            return this;
	        }
	    }]);
	
	    return Table;
	})();
	
	exports["default"] = Table;
	module.exports = exports["default"];

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _espalier = __webpack_require__(2);
	
	var _espalier2 = _interopRequireDefault(_espalier);
	
	var _templatesRow = __webpack_require__(29);
	
	var _templatesRow2 = _interopRequireDefault(_templatesRow);
	
	var data = [{
		"col1": "Record 1-1",
		"col2": "Record 1-2"
	}, {
		"col1": "Record 2-1",
		"col2": "Record 2-2"
	}, {
		"col1": "Record 3-1",
		"col2": "Record 3-2"
	}, {
		"col1": "Record 4-1",
		"col2": "Record 4-2"
	}, {
		"col1": "Record 5-1",
		"col2": "Record 5-2"
	}, {
		"col1": "Record 6-1",
		"col2": "Record 6-2"
	}, {
		"col1": "Record 7-1",
		"col2": "Record 7-2"
	}, {
		"col1": "Record 8-1",
		"col2": "Record 8-2"
	}, {
		"col1": "Record 9-1",
		"col2": "Record 9-2"
	}, {
		"col1": "Record 10-1",
		"col2": "Record 10-2"
	}, {
		"col1": "Record 11-1",
		"col2": "Record 11-2"
	}, {
		"col1": "Record 12-1",
		"col2": "Record 12-2"
	}, {
		"col1": "Record 13-1",
		"col2": "Record 13-2"
	}, {
		"col1": "Record 14-1",
		"col2": "Record 14-2"
	}, {
		"col1": "Record 15-1",
		"col2": "Record 15-2"
	}, {
		"col1": "Record 16-1",
		"col2": "Record 16-2"
	}, {
		"col1": "Record 17-1",
		"col2": "Record 17-2"
	}, {
		"col1": "Record 18-1",
		"col2": "Record 18-2"
	}, {
		"col1": "Record 19-1",
		"col2": "Record 19-2"
	}, {
		"col1": "Record 20-1",
		"col2": "Record 20-2"
	}, {
		"col1": "Record 21-1",
		"col2": "Record 21-2"
	}, {
		"col1": "Record 22-1",
		"col2": "Record 22-2"
	}, {
		"col1": "Record 23-1",
		"col2": "Record 23-2"
	}, {
		"col1": "Record 24-1",
		"col2": "Record 24-2"
	}, {
		"col1": "Record 25-1",
		"col2": "Record 25-2"
	}];
	
	exports["default"] = function (container) {
		return new _espalier2["default"].Table({
			container: container,
			rowTemplate: _templatesRow2["default"],
			data: data
		});
	};
	
	module.exports = exports["default"];

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(19);
	module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
	    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;
	
	  return "<tr>\r\n	<td>"
	    + alias3(((helper = (helper = helpers.col1 || (depth0 != null ? depth0.col1 : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"col1","hash":{},"data":data}) : helper)))
	    + "</td>\r\n	<td>"
	    + alias3(((helper = (helper = helpers.col2 || (depth0 != null ? depth0.col2 : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"col2","hash":{},"data":data}) : helper)))
	    + "</td>\r\n</tr>";
	},"useData":true});

/***/ },
/* 30 */,
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _espalier = __webpack_require__(2);
	
	var _espalier2 = _interopRequireDefault(_espalier);
	
	var _templatesDialogTemplate = __webpack_require__(32);
	
	var _templatesDialogTemplate2 = _interopRequireDefault(_templatesDialogTemplate);
	
	exports["default"] = function () {
	    _espalier2["default"].dialog({
	        element: $($.trim((0, _templatesDialogTemplate2["default"])())),
	        buttons: [{
	            id: "submit",
	            handler: function handler(dialog) {
	                alert("submit!");
	                dialog.hide();
	            }
	        }, {
	            id: "cancel",
	            handler: function handler(dialog) {
	                dialog.hide();
	            }
	        }]
	    });
	};
	
	module.exports = exports["default"];

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(19);
	module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
	    return "<form class=\"col-sm-4 col-sm-offset-4\" style=\"background: white;padding: 1em;border-radius: .15em;box-shadow: 0 0 .5em #81e181;\">\r\n    <div class=\"form-group\">\r\n        <label for=\"exampleInputEmail1\">Email address</label>\r\n        <input required type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"Enter email\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"exampleInputPassword1\">Password</label>\r\n        <input required type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">\r\n    </div>\r\n    <a href=\"javascript: void(0);\" id=\"submit\" class=\"btn btn-default\">Submit</a>\r\n    <a href=\"javascript: void(0);\" id=\"cancel\" class=\"btn btn-danger\">Cancel</a>\r\n</form>";
	},"useData":true});

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA4NjUxOGE0NmY5NjJjNzllMWI5YiIsIndlYnBhY2s6Ly8vYzovZ2l0L0VzcGFsaWVySlMvc3JjL2pzL2RlbW8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2M6L2dpdC9Fc3BhbGllckpTL3NyYy9qcy9lc3BhbGllci5qcyIsIndlYnBhY2s6Ly8vYzovZ2l0L0VzcGFsaWVySlMvc3JjL2pzL2VzcGFsaWVyLm1lc3NhZ2VGYWN0b3J5LmpzIiwid2VicGFjazovLy9jOi9naXQvRXNwYWxpZXJKUy9zcmMvanMvZXNwYWxpZXIuY29yZS5qcyIsIndlYnBhY2s6Ly8vYzovZ2l0L0VzcGFsaWVySlMvc3JjL2pzL2VzcGFsaWVyLndhaXRzY3JlZW4uanMiLCJ3ZWJwYWNrOi8vL2M6L2dpdC9Fc3BhbGllckpTL3NyYy9qcy9lc3BhbGllci5jb21tb24uanMiLCJ3ZWJwYWNrOi8vL2M6L2dpdC9Fc3BhbGllckpTL34vcHVic3ViLWpzL3NyYy9wdWJzdWIuanMiLCJ3ZWJwYWNrOi8vL2M6L2dpdC9Fc3BhbGllckpTL3NyYy9qcy90ZW1wbGF0ZXMvYm9vdHN0cmFwVGVtcGxhdGVzLmpzIiwid2VicGFjazovLy9jOi9naXQvRXNwYWxpZXJKUy9zcmMvanMvZXNwYWxpZXIuZm9ybXMuanMiLCJ3ZWJwYWNrOi8vL2M6L2dpdC9Fc3BhbGllckpTL3NyYy9qcy9lc3BhbGllci5mb3Jtcy5jb250cm9sLmpzIiwid2VicGFjazovLy9jOi9naXQvRXNwYWxpZXJKUy9zcmMvanMvZXNwYWxpZXIudmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vYzovZ2l0L0VzcGFsaWVySlMvc3JjL2pzL2VzcGFsaWVyLmRpYWxvZy5qcyIsIndlYnBhY2s6Ly8vYzovZ2l0L0VzcGFsaWVySlMvc3JjL2pzL2VzcGFsaWVyLmdyYXBoLmpzIiwid2VicGFjazovLy9jOi9naXQvRXNwYWxpZXJKUy9zcmMvanMvZXNwYWxpZXIuZ3JhcGgubm9kZS5qcyIsIndlYnBhY2s6Ly8vYzovZ2l0L0VzcGFsaWVySlMvc3JjL2pzL2RlbW8vZ3JhcGgvZGVtb0dyYXBoLmpzIiwid2VicGFjazovLy9jOi9naXQvRXNwYWxpZXJKUy9zcmMvanMvZGVtby9ncmFwaC9ncmFwaE5vZGVzLmpzIiwid2VicGFjazovLy8uL2dyYXBoL3RlbXBsYXRlcy9ncmFwaFByb2dyZXNzLmhicyIsIndlYnBhY2s6Ly8vYzovZ2l0L0VzcGFsaWVySlMvfi9oYW5kbGViYXJzL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vL2M6L2dpdC9Fc3BhbGllckpTL34vaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzLnJ1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vL2M6L2dpdC9Fc3BhbGllckpTL34vaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL3V0aWxzLmpzIiwid2VicGFjazovLy9jOi9naXQvRXNwYWxpZXJKUy9+L2hhbmRsZWJhcnMvZGlzdC9janMvaGFuZGxlYmFycy9iYXNlLmpzIiwid2VicGFjazovLy9jOi9naXQvRXNwYWxpZXJKUy9+L2hhbmRsZWJhcnMvZGlzdC9janMvaGFuZGxlYmFycy9leGNlcHRpb24uanMiLCJ3ZWJwYWNrOi8vL2M6L2dpdC9Fc3BhbGllckpTL34vaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL3NhZmUtc3RyaW5nLmpzIiwid2VicGFjazovLy9jOi9naXQvRXNwYWxpZXJKUy9+L2hhbmRsZWJhcnMvZGlzdC9janMvaGFuZGxlYmFycy9ydW50aW1lLmpzIiwid2VicGFjazovLy9jOi9naXQvRXNwYWxpZXJKUy9+L2hhbmRsZWJhcnMvZGlzdC9janMvaGFuZGxlYmFycy9uby1jb25mbGljdC5qcyIsIndlYnBhY2s6Ly8vYzovZ2l0L0VzcGFsaWVySlMvc3JjL2pzL2VzcGFsaWVyLnRhYmxlLmpzIiwid2VicGFjazovLy9jOi9naXQvRXNwYWxpZXJKUy9zcmMvanMvZGVtby90YWJsZS9kZW1vVGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vdGFibGUvdGVtcGxhdGVzL3Jvdy5oYnMiLCJ3ZWJwYWNrOi8vL2M6L2dpdC9Fc3BhbGllckpTL3NyYy9qcy9kZW1vL2RpYWxvZy9kaWFsb2ctZGVtby5qcyIsIndlYnBhY2s6Ly8vLi9kaWFsb2cvdGVtcGxhdGVzL2RpYWxvZy10ZW1wbGF0ZS5oYnMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7cUNDdENxQixDQUFhOzs7OzJDQUNaLEVBQW1COzs7OzJDQUNuQixFQUFtQjs7Ozs2Q0FDbEIsRUFBc0I7Ozs7QUFFN0MsdUJBQVMsUUFBUSxDQUFDLHFDQUFxQyxDQUFDLENBQUM7QUFDekQsdUJBQVMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7O0FBRWhDLEVBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQzs7QUFFOUIsRUFBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFZO0FBQ2hDLHlDQUFZLENBQUM7RUFDaEIsQ0FBQyxDQUFDOztBQUVILEtBQUksS0FBSyxHQUFHLGlDQUFVLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDOztBQUV4QyxFQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWTtBQUNuQyxTQUFJLE1BQU0sR0FBRztBQUNULGtCQUFTLEVBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsRUFBRTtBQUNqQyxnQkFBTyxFQUFF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Ozs7Ozs7Ozs7Ozs7Ozs7cUNDVEksQ0FBZ0I7Ozs7b0RBQ1YsRUFBNkI7Ozs7c0JBRXpDLFlBQVk7QUFDMUIsMkJBQVMsTUFBTSxDQUFDO0FBQ1QsZ0JBQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQywyQ0FBZ0IsQ0FBQyxDQUFDO0FBQ3BDLGdCQUFPLEVBQUUsQ0FDTDtBQUNJLGVBQUUsRUFBRSxRQUFRO0FBQ1osb0JBQU8sRUFBRSxpQkFBVSxNQUFNLEVBQUU7QUFDdkIsc0JBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUNqQix1QkFBTSxDQUFDLElBQUksRUFBRSxDQUFDO2NBQ2pCO1VBQ0osRUFDRDtBQUNJLGVBQUUsRUFBRSxRQUFRO0FBQ1osb0JBQU8sRUFBRSxpQkFBVSxNQUFNLEVBQUU7QUFDdkIsdUJBQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztjQUNqQjtVQUNKLENBQ0o7TUFDSixDQUFDLENBQUM7RUFDTjs7Ozs7Ozs7QUN0QkQ7QUFDQSxrRUFBaUU7QUFDakUsZ0ZBQStFLGFBQWEscUJBQXFCLDZCQUE2QixnZ0JBQWdnQiwyRkFBMkY7QUFDenVCLEVBQUMsZ0JBQWdCLEUiLCJmaWxlIjoiZGVtb19jb21waWxlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiYXBwXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImFwcFwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvblxuICoqLyIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgODY1MThhNDZmOTYyYzc5ZTFiOWJcbiAqKi8iLCJpbXBvcnQgZXNwYWxpZXIgZnJvbSBcIi4uL2VzcGFsaWVyXCI7XHJcbmltcG9ydCBEZW1vR3JhcGggZnJvbSBcIi4vZ3JhcGgvZGVtb0dyYXBoXCI7XHJcbmltcG9ydCBkZW1vVGFibGUgZnJvbSBcIi4vdGFibGUvZGVtb1RhYmxlXCI7XHJcbmltcG9ydCBkaWFsb2dEZW1vIGZyb20gXCIuL2RpYWxvZy9kaWFsb2ctZGVtb1wiO1xyXG5cclxuZXNwYWxpZXIuc2hvd0luZm8oXCJJdCBzZWVtcyB0aGUgbGlicmFyaWVzIGhhdmUgbG9hZGVkIVwiKTtcclxuZXNwYWxpZXIud2lyZShcIiNzdGFuZGFyZC1mb3JtXCIpO1xyXG5cclxuJChcIi5kYXRlcGlja2VyXCIpLmRhdGVwaWNrZXIoKTtcclxuXHJcbiQoXCIjc2hvdy1kaWFsb2dcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgZGlhbG9nRGVtbygpO1xyXG59KTtcclxuXHJcbmxldCB0YWJsZSA9IGRlbW9UYWJsZSgkKFwiI2RlbW8tdGFibGVcIikpO1xyXG5cclxuJChcIiNzZWFyY2gtcmVjb3Jkc1wiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZmlsdGVyID0ge1xyXG4gICAgICAgIFN0YXJ0RGF0ZTogJChcIiNzdGFydC1kYXRlXCIpLnZhbCgpLFxyXG4gICAgICAgIEVuZERhdGU6ICQoXCIjZW5kLWRhdGVcIikudmFsKCksXHJcbiAgICAgICAgQ2xpZW50SVBBZGRyZXNzOiAkKFwiI2lwLWFkZHJlc3NcIikudmFsKCksXHJcbiAgICAgICAgVXNlck5hbWU6ICQoXCIjdXNlci1uYW1lXCIpLnZhbCgpLFxyXG4gICAgICAgIE1hY0FkZHJlc3M6ICQoXCIjbWFjLWFkZHJlc3NcIikudmFsKCksXHJcbiAgICAgICAgV29ya2luZ1RlbGVwaG9uZU51bWJlcjogJChcIiN3dG5cIikudmFsKCksXHJcbiAgICAgICAgQmlsbGluZ1RlbGVwaG9uZU51bWJlcjogJChcIiNidG5cIikudmFsKClcclxuICAgIH07XHJcblxyXG4gICAgdGFibGUuZmlsdGVyKGZpbHRlcik7XHJcbn0pO1xyXG5cclxubGV0IGdyYXBoID0gbmV3IERlbW9HcmFwaCgkKFwiI3dpemFyZC1jb250YWluZXJcIiksIChncmFwaFZhbHVlKSA9PiB7XHJcbiAgICAkKFwiI2dyYXBoLXZhbHVlXCIpLmh0bWwoSlNPTi5zdHJpbmdpZnkoZ3JhcGhWYWx1ZSwgbnVsbCwgMikpO1xyXG59KTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBjOi9naXQvRXNwYWxpZXJKUy9zcmMvanMvZGVtby9pbmRleC5qc1xuICoqLyIsImltcG9ydCBjb3JlIGZyb20gXCIuL2VzcGFsaWVyLmNvcmVcIjtcclxuaW1wb3J0IG1lc3NhZ2VGYWN0b3J5IGZyb20gXCIuL2VzcGFsaWVyLm1lc3NhZ2VGYWN0b3J5XCI7XHJcbmltcG9ydCBmb3JtcyBmcm9tIFwiLi9lc3BhbGllci5mb3Jtc1wiO1xyXG5pbXBvcnQgd2FpdFNjcmVlbiBmcm9tIFwiLi9lc3BhbGllci53YWl0c2NyZWVuXCI7XHJcbmltcG9ydCBUYWJsZSBmcm9tIFwiLi9lc3BhbGllci50YWJsZVwiO1xyXG5pbXBvcnQgZGlhbG9nIGZyb20gXCIuL2VzcGFsaWVyLmRpYWxvZ1wiO1xyXG5pbXBvcnQgR3JhcGggZnJvbSBcIi4vZXNwYWxpZXIuZ3JhcGhcIjtcclxuaW1wb3J0IEdyYXBoTm9kZSBmcm9tIFwiLi9lc3BhbGllci5ncmFwaC5ub2RlXCI7XHJcblxyXG52YXIgZXNwYWxpZXIgPSB7XHJcbiAgICBzaG93V2FybmluZzogY29yZS5zaG93V2FybmluZyxcclxuICAgIHNob3dJbmZvOiBjb3JlLnNob3dJbmZvLFxyXG4gICAgc2VuZFJlcXVlc3Q6IGNvcmUuc2VuZFJlcXVlc3QsXHJcbiAgICBUYWJsZSxcclxuICAgIHdpcmU6IGZvcm1zLFxyXG4gICAgc2hvd1dhaXRTY3JlZW46IHdhaXRTY3JlZW4uc2hvdyxcclxuICAgIGhpZGVXYWl0U2NyZWVuOiB3YWl0U2NyZWVuLmhpZGUsXHJcbiAgICBzaG9ydERhdGU6IGNvcmUuc2hvcnREYXRlLFxyXG4gICAgc2hvcnRUaW1lOiBjb3JlLnNob3J0VGltZSxcclxuICAgIG51bWJlcldpdGhDb21tYXM6IGNvcmUubnVtYmVyV2l0aENvbW1hcyxcclxuICAgIHB1Ymxpc2g6IGNvcmUucHVibGlzaCxcclxuICAgIHBhcnNlSVNPRGF0ZTogY29yZS5wYXJzZUlTT0RhdGUsXHJcbiAgICBzdWJzY3JpYmU6IGNvcmUuc3Vic2NyaWJlLFxyXG4gICAgZGlhbG9nOiBmdW5jdGlvbiAoYXJncykge1xyXG4gICAgICAgIHJldHVybiBkaWFsb2coYXJncykuc2hvdygpO1xyXG4gICAgfSxcclxuICAgIEdyYXBoLFxyXG4gICAgR3JhcGhOb2RlXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBlc3BhbGllcjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBjOi9naXQvRXNwYWxpZXJKUy9zcmMvanMvZXNwYWxpZXIuanNcbiAqKi8iLCJpbXBvcnQgY29yZSBmcm9tIFwiLi9lc3BhbGllci5jb3JlXCI7XHJcbmltcG9ydCBib290c3RyYXBUZW1wbGF0ZXMgZnJvbSBcIi4vdGVtcGxhdGVzL2Jvb3RzdHJhcFRlbXBsYXRlc1wiO1xyXG5cclxuY2xhc3MgTWVzc2FnZURpc3BsYXllciB7XHJcbiAgICBjb25zdHJ1Y3RvcihhcmdzKSB7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHtcclxuICAgICAgICAgICAgYXR0YWNoVG86IG51bGwsXHJcbiAgICAgICAgICAgIG1lc3NhZ2VDb250YWluZXJDbGFzczogXCJtZXNzYWdlLWNvbnRhaW5lclwiLFxyXG4gICAgICAgICAgICBjbG9zZU1lc3NhZ2VDbGFzczogXCJjbG9zZS1tZXNzYWdlXCIsXHJcbiAgICAgICAgICAgIGluZm9NZXNzYWdlQ2xhc3M6IFwiaW5mby1tZXNzYWdlXCIsXHJcbiAgICAgICAgICAgIHdhcm5pbmdNZXNzYWdlQ2xhc3M6IFwid2FybmluZy1tZXNzYWdlXCIsXHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZUNsYXNzOiBcImVycm9yLW1lc3NhZ2VcIixcclxuICAgICAgICAgICAgc3VjY2Vzc01lc3NhZ2VDbGFzczogXCJzdWNjZXNzLW1lc3NhZ2VcIixcclxuICAgICAgICAgICAgbWVzc2FnZUF0dGFjaG1lbnQ6IGZhY3RvcnkubWVzc2FnZUF0dGFjaG1lbnQuRml4ZWQsXHJcbiAgICAgICAgICAgIG9uUmVtb3ZlZDogZnVuY3Rpb24gKCkgeyB9LFxyXG4gICAgICAgICAgICBvbkFkZGVkOiBmdW5jdGlvbiAoKSB7IH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAkLmV4dGVuZCh0aGlzLnNldHRpbmdzLCBhcmdzKTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnNldHRpbmdzLmF0dGFjaFRvKSB7XHJcbiAgICAgICAgICAgIHRocm93IChcIk1lc3NhZ2VGYWN0b3J5IHJlcXVpcmVzIGFuIGF0dGFjaFRvIGFyZ3VtZW50LlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLm1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5tZXNzYWdlKTtcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLm9uUmVtb3ZlZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzaG93KG1lc3NhZ2VBcmdzKSB7XHJcbiAgICAgICAgbGV0IG1lc3NhZ2VUeXBlQ2xhc3MsIG1lc3NhZ2VTZXR0aW5ncywgbWVzc2FnZUF0dGFjaG1lbnRDbGFzcztcclxuXHJcbiAgICAgICAgLy9OT1RFOiBUaGVyZSBzaG91bGQgb25seSBiZSBvbmUgbWVzc2FnZSBkaXNwbGF5ZWQgcGVyIGluc3RhbmNlLlxyXG4gICAgICAgIGlmICh0aGlzLm1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9OT1RFOiBBbGxvdyB0aGVtIHRvIGVpdGhlciB1c2UgYW4gYXJyYXkgb2YgbWVzc2FnZXMgb3IgYVxyXG4gICAgICAgIC8vICAgICAgc2luZ2xlIG1lc3NhZ2UuXHJcbiAgICAgICAgaWYgKGNvcmUuaXNTdHJpbmcobWVzc2FnZUFyZ3MubWVzc2FnZSkpIHtcclxuICAgICAgICAgICAgbWVzc2FnZUFyZ3MubWVzc2FnZSA9IFttZXNzYWdlQXJncy5tZXNzYWdlXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1lc3NhZ2VTZXR0aW5ncyA9IHtcclxuICAgICAgICAgICAgbWVzc2FnZVR5cGU6IGZhY3RvcnkubWVzc2FnZVR5cGUuSW5mbyxcclxuICAgICAgICAgICAgbWVzc2FnZTogW11cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAkLmV4dGVuZChtZXNzYWdlU2V0dGluZ3MsIG1lc3NhZ2VBcmdzKTtcclxuXHJcbiAgICAgICAgaWYgKG1lc3NhZ2VTZXR0aW5ncy5tZXNzYWdlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vIG1lc3NhZ2UgdG8gZGlzcGxheS5cIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN3aXRjaCAobWVzc2FnZVNldHRpbmdzLm1lc3NhZ2VUeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgZmFjdG9yeS5tZXNzYWdlVHlwZS5JbmZvOlxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZVR5cGVDbGFzcyA9IHRoaXMuc2V0dGluZ3MuaW5mb01lc3NhZ2VDbGFzcztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGZhY3RvcnkubWVzc2FnZVR5cGUuU3VjY2VzczpcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VUeXBlQ2xhc3MgPSB0aGlzLnNldHRpbmdzLnN1Y2Nlc3NNZXNzYWdlQ2xhc3M7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBmYWN0b3J5Lm1lc3NhZ2VUeXBlLkVycm9yOlxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZVR5cGVDbGFzcyA9IHRoaXMuc2V0dGluZ3MuZXJyb3JNZXNzYWdlQ2xhc3M7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBmYWN0b3J5Lm1lc3NhZ2VUeXBlLldhcm5pbmc6XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlVHlwZUNsYXNzID0gdGhpcy5zZXR0aW5ncy53YXJuaW5nTWVzc2FnZUNsYXNzO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkludmFsaWQgbWVzc2FnZSB0eXBlLlwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN3aXRjaCAodGhpcy5zZXR0aW5ncy5tZXNzYWdlQXR0YWNobWVudCkge1xyXG4gICAgICAgICAgICBjYXNlIGZhY3RvcnkubWVzc2FnZUF0dGFjaG1lbnQuRml4ZWQ6XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlQXR0YWNobWVudENsYXNzID0gXCJmaXhlZFwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgZmFjdG9yeS5tZXNzYWdlQXR0YWNobWVudC5GbG93OlxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZUF0dGFjaG1lbnRDbGFzcyA9IFwiZmxvd1wiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlQXR0YWNobWVudENsYXNzID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gYm9vdHN0cmFwVGVtcGxhdGVzLm1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICBtZXNzYWdlVHlwZUNsYXNzOiBtZXNzYWdlVHlwZUNsYXNzLFxyXG4gICAgICAgICAgICBtZXNzYWdlczogbWVzc2FnZVNldHRpbmdzLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgIG1lc3NhZ2VDb250YWluZXJDbGFzczogdGhpcy5zZXR0aW5ncy5tZXNzYWdlQ29udGFpbmVyQ2xhc3MsXHJcbiAgICAgICAgICAgIGNsb3NlTWVzc2FnZUNsYXNzOiB0aGlzLnNldHRpbmdzLmNsb3NlTWVzc2FnZUNsYXNzLFxyXG4gICAgICAgICAgICBtZXNzYWdlQXR0YWNobWVudENsYXNzOiBtZXNzYWdlQXR0YWNobWVudENsYXNzLFxyXG4gICAgICAgICAgICBtb3JlVGhhbk9uZTogKCFjb3JlLmlzU3RyaW5nKG1lc3NhZ2VBcmdzLm1lc3NhZ2UpICYmIG1lc3NhZ2VBcmdzLm1lc3NhZ2UubGVuZ3RoID4gMSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5hdHRhY2hUby5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2UpO1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3Mub25BZGRlZCh0aGlzLm1lc3NhZ2UpO1xyXG5cclxuICAgICAgICBsZXQgZGlzcGxheWVkTWVzc2FnZSA9IHRoaXM7XHJcblxyXG4gICAgICAgIGxldCBjbG9zZUJ1dHRvbnMgPSBBcnJheS5mcm9tKGNvcmUuZmluZChgLiR7dGhpcy5zZXR0aW5ncy5jbG9zZU1lc3NhZ2VDbGFzc31gLCB0aGlzLm1lc3NhZ2UpKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgYnV0dG9uIG9mIGNsb3NlQnV0dG9ucykge1xyXG4gICAgICAgICAgICBjb3JlLmFkZEV2ZW50TGlzdGVuZXIoYnV0dG9uLCBcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXllZE1lc3NhZ2UucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWVzc2FnZTtcclxuICAgIH1cclxufTtcclxuXHJcbnZhciBmYWN0b3J5ID0ge1xyXG4gICAgY3JlYXRlOiBmdW5jdGlvbiAoYXJncykge1xyXG4gICAgICAgIHJldHVybiBuZXcgTWVzc2FnZURpc3BsYXllcihhcmdzKTtcclxuICAgIH0sXHJcbiAgICBtZXNzYWdlVHlwZToge1xyXG4gICAgICAgIEluZm86IFwiSW5mb1wiLFxyXG4gICAgICAgIFN1Y2Nlc3M6IFwic3VjY2Vzc1wiLFxyXG4gICAgICAgIEVycm9yOiBcImVycm9yXCIsXHJcbiAgICAgICAgV2FybmluZzogXCJ3YXJuaW5nXCJcclxuICAgIH0sXHJcbiAgICBtZXNzYWdlQXR0YWNobWVudDoge1xyXG4gICAgICAgIEZpeGVkOiBcIkZpeGVkXCIsXHJcbiAgICAgICAgRmxvdzogXCJGbG93XCJcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZhY3Rvcnk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogYzovZ2l0L0VzcGFsaWVySlMvc3JjL2pzL2VzcGFsaWVyLm1lc3NhZ2VGYWN0b3J5LmpzXG4gKiovIiwiaW1wb3J0IG1lc3NhZ2VGYWN0b3J5IGZyb20gXCIuL2VzcGFsaWVyLm1lc3NhZ2VGYWN0b3J5XCI7XHJcbmltcG9ydCB3YWl0c2NyZWVuIGZyb20gXCIuL2VzcGFsaWVyLndhaXRzY3JlZW5cIjtcclxuaW1wb3J0IGNvbW1vbiBmcm9tIFwiLi9lc3BhbGllci5jb21tb25cIjtcclxuaW1wb3J0IHB1YnN1YiBmcm9tIFwicHVic3ViLWpzXCI7XHJcblxyXG52YXIgZmluZCA9IGZ1bmN0aW9uIChzZWxlY3Rvciwgcm9vdCkge1xyXG4gICAgcm9vdCA9IHJvb3QgPyByb290IDogZG9jdW1lbnQ7XHJcbiAgICByZXR1cm4gcm9vdC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcclxufTtcclxuXHJcbnZhciBtYWluTWVzc2FnZSA9IG1lc3NhZ2VGYWN0b3J5LmNyZWF0ZSh7XHJcbiAgICBhdHRhY2hUbzogZmluZChcImJvZHlcIilbMF1cclxufSk7XHJcblxyXG52YXIgcGFyc2VEYXRlO1xyXG52YXIgdGVzdERhdGUgPSBuZXcgRGF0ZSgnMjAxMS0wNi0wMlQwOTozNDoyOSswMjowMCcpO1xyXG5cclxuaWYgKCF0ZXN0RGF0ZSB8fCArdGVzdERhdGUgIT09IDEzMDcwMDAwNjkwMDApIHtcclxuICAgIHBhcnNlRGF0ZSA9IGZ1bmN0aW9uIChzKSB7XHJcbiAgICAgICAgdmFyIGRheSwgdHosXHJcbiAgICAgICAgICAgIHJ4ID0gL14oXFxkezR9XFwtXFxkXFxkXFwtXFxkXFxkKFt0VCBdW1xcZDpcXC5dKik/KShbelpdfChbK1xcLV0pKFxcZFxcZCk6KFxcZFxcZCkpPyQvLFxyXG4gICAgICAgICAgICBwID0gcnguZXhlYyhzKSB8fCBbXTtcclxuICAgICAgICBpZiAocFsxXSkge1xyXG4gICAgICAgICAgICBkYXkgPSBwWzFdLnNwbGl0KC9cXEQvKTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIEwgPSBkYXkubGVuZ3RoOyBpIDwgTDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBkYXlbaV0gPSBwYXJzZUludChkYXlbaV0sIDEwKSB8fCAwO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBkYXlbMV0gLT0gMTtcclxuICAgICAgICAgICAgZGF5ID0gbmV3IERhdGUoRGF0ZS5VVEMuYXBwbHkoRGF0ZSwgZGF5KSk7XHJcbiAgICAgICAgICAgIGlmICghZGF5LmdldERhdGUoKSkgcmV0dXJuIE5hTjtcclxuICAgICAgICAgICAgaWYgKHBbNV0pIHtcclxuICAgICAgICAgICAgICAgIHR6ID0gKHBhcnNlSW50KHBbNV0sIDEwKSAqIDYwKTtcclxuICAgICAgICAgICAgICAgIGlmIChwWzZdKSB0eiArPSBwYXJzZUludChwWzZdLCAxMCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocFs0XSA9PSAnKycpIHR6ICo9IC0xO1xyXG4gICAgICAgICAgICAgICAgaWYgKHR6KSBkYXkuc2V0VVRDTWludXRlcyhkYXkuZ2V0VVRDTWludXRlcygpICsgdHopO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBkYXk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBOYU47XHJcbiAgICB9O1xyXG59XHJcbmVsc2Uge1xyXG4gICAgcGFyc2VEYXRlID0gZnVuY3Rpb24gKHMpIHtcclxuICAgICAgICByZXR1cm4gbmV3IERhdGUocyk7XHJcbiAgICB9O1xyXG59XHJcblxyXG50ZXN0RGF0ZSA9IHVuZGVmaW5lZDtcclxuXHJcbnZhciBjb3JlID0ge1xyXG4gICAgc2VuZFJlcXVlc3Q6IGZ1bmN0aW9uIChyZXEpIHtcclxuICAgICAgICB3YWl0c2NyZWVuLnNob3coKTtcclxuICAgICAgICAkKFwiLlwiICsgbWFpbk1lc3NhZ2Uuc2V0dGluZ3MubWVzc2FnZUNvbnRhaW5lckNsYXNzKS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgdmFyIGFqYXhTZXR0aW5ncyA9IHtcclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgeGhyRmllbGRzOiB7XHJcbiAgICAgICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3RhdHVzQ29kZToge1xyXG4gICAgICAgICAgICAgICAgNTAwOiBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb3JlLnNob3dFcnJvcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLnJlc3BvbnNlSlNPTi5NZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjc3NDbGFzczogXCJlcnJvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgNDAwOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZXJyb3JzID0gW107XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQuZWFjaChyZXNwb25zZS5yZXNwb25zZUpTT04uZXJyb3JzLCBmdW5jdGlvbiAoaW5kZXgsIGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvci5zb3VyY2UgJiYgZXJyb3Iuc291cmNlLnBhcmFtZXRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNwZWNpZmljRmllbGQgPSAkKFwiI1wiICsgZXJyb3Iuc291cmNlLnBhcmFtZXRlci50b0xvd2VyQ2FzZSgpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3BlY2lmaWNGaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmaWVsZE1lc3NhZ2UgPSBzcGVjaWZpY0ZpZWxkLmRhdGEoXCJtZXNzYWdlXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGRNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkTWVzc2FnZS5zaG93KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLmRldGFpbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VUeXBlOiBtZXNzYWdlRmFjdG9yeS5tZXNzYWdlVHlwZS5FcnJvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5wdXNoKGVycm9yLmRldGFpbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3JlLnNob3dFcnJvcihlcnJvcnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgd2FpdHNjcmVlbi5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcS5ldmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdWJzdWIucHVibGlzaChyZXEuZXZlbnQsIHJlc3BvbnNlLnJlc3BvbnNlSlNPTik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVxLm9uU3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXEub25TdWNjZXNzKHJlc3BvbnNlLnJlc3BvbnNlSlNPTik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgJC5leHRlbmQoYWpheFNldHRpbmdzLCByZXEpO1xyXG5cclxuICAgICAgICByZXR1cm4gJC5hamF4KGFqYXhTZXR0aW5ncyk7XHJcbiAgICB9LFxyXG4gICAgc2hvd1dhcm5pbmc6IGZ1bmN0aW9uIChtZXNzYWdlcykge1xyXG4gICAgICAgIG1haW5NZXNzYWdlLnNob3coe1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlcyxcclxuICAgICAgICAgICAgbWVzc2FnZVR5cGU6IG1lc3NhZ2VGYWN0b3J5Lm1lc3NhZ2VUeXBlLldhcm5pbmdcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBzaG93RXJyb3I6IGZ1bmN0aW9uIChtZXNzYWdlcykge1xyXG4gICAgICAgIG1haW5NZXNzYWdlLnNob3coe1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlcyxcclxuICAgICAgICAgICAgbWVzc2FnZVR5cGU6IG1lc3NhZ2VGYWN0b3J5Lm1lc3NhZ2VUeXBlLkVycm9yXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgc2hvd0luZm86IGZ1bmN0aW9uIChtZXNzYWdlcykge1xyXG4gICAgICAgIG1haW5NZXNzYWdlLnNob3coe1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlcyxcclxuICAgICAgICAgICAgbWVzc2FnZVR5cGU6IG1lc3NhZ2VGYWN0b3J5Lm1lc3NhZ2VUeXBlLkluZm9cclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBoaWRlTWFpbk1lc3NhZ2U6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBtYWluTWVzc2FnZS5yZW1vdmUoKTtcclxuICAgIH0sXHJcbiAgICBpc0VtcHR5T3JTcGFjZXM6IGZ1bmN0aW9uIChzdHIpIHtcclxuICAgICAgICByZXR1cm4gc3RyID09PSB1bmRlZmluZWQgfHwgc3RyID09PSBudWxsIHx8IHN0ci5tYXRjaCgvXlxccyokLykgIT09IG51bGw7XHJcbiAgICB9LFxyXG4gICAgaXNFbWFpbDogZnVuY3Rpb24gKHN0cikge1xyXG4gICAgICAgIHZhciBlbWFpbFJlZ2V4ID0gL14oKFtcXHctXStcXC4pK1tcXHctXSt8KFthLXpBLVpdezF9fFtcXHctXXsyLH0pKUAoKChbMC0xXT9bMC05XXsxLDJ9fDI1WzAtNV18MlswLTRdWzAtOV0pXFwuKFswLTFdP1swLTldezEsMn18MjVbMC01XXwyWzAtNF1bMC05XSlcXC4oWzAtMV0/WzAtOV17MSwyfXwyNVswLTVdfDJbMC00XVswLTldKVxcLihbMC0xXT9bMC05XXsxLDJ9fDI1WzAtNV18MlswLTRdWzAtOV0pKXsxfXwoW2EtekEtWl0rW1xcdy1dK1xcLikrW2EtekEtWl17Miw0fSkkLztcclxuICAgICAgICByZXR1cm4gY29yZS5pc0VtcHR5T3JTcGFjZXMoc3RyKSB8fCBzdHIubWF0Y2goZW1haWxSZWdleCk7XHJcbiAgICB9LFxyXG4gICAgaXNEYXRlOiBmdW5jdGlvbiAoc3RyKSB7XHJcbiAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZShzdHIpO1xyXG4gICAgICAgIHJldHVybiBjb3JlLmlzRW1wdHlPclNwYWNlcyhzdHIpIHx8IChkICE9IFwiSW52YWxpZCBEYXRlXCIgJiYgIWlzTmFOKGQpKTtcclxuICAgIH0sXHJcbiAgICBudW1iZXJXaXRoQ29tbWFzOiBmdW5jdGlvbiBudW1iZXJXaXRoQ29tbWFzKHgpIHtcclxuICAgICAgICB2YXIgcGFydHMgPSB4LnRvU3RyaW5nKCkuc3BsaXQoXCIuXCIpO1xyXG4gICAgICAgIHBhcnRzWzBdID0gcGFydHNbMF0ucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgXCIsXCIpO1xyXG4gICAgICAgIHJldHVybiBwYXJ0cy5qb2luKFwiLlwiKTtcclxuICAgIH0sXHJcbiAgICBwYXJzZUlTT0RhdGU6IHBhcnNlRGF0ZSxcclxuICAgIHNob3J0RGF0ZTogZnVuY3Rpb24gKGRhdGUpIHtcclxuICAgICAgICBpZiAoIShkYXRlIGluc3RhbmNlb2YgRGF0ZSkpIHtcclxuICAgICAgICAgICAgZGF0ZSA9IHBhcnNlRGF0ZShkYXRlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoZGF0ZS5nZXRNb250aCgpICsgMSkgK1xyXG4gICAgICAgICAgICBcIi9cIiArIGRhdGUuZ2V0RGF0ZSgpICtcclxuICAgICAgICAgICAgXCIvXCIgKyBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgICB9LFxyXG4gICAgc2hvcnRUaW1lOiBmdW5jdGlvbiAoZGF0ZSkge1xyXG4gICAgICAgIGlmICghKGRhdGUgaW5zdGFuY2VvZiBEYXRlKSkge1xyXG4gICAgICAgICAgICBkYXRlID0gcGFyc2VEYXRlKGRhdGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGhvdXIgPSBkYXRlLmdldEhvdXJzKCk7XHJcbiAgICAgICAgdmFyIGFtcG0gPSBcIkFNXCI7XHJcblxyXG4gICAgICAgIGlmIChob3VyID4gMTEpIHtcclxuICAgICAgICAgICAgaG91ciAtPSAxMjtcclxuICAgICAgICAgICAgYW1wbSA9IFwiUE1cIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChob3VyID09PSAwKSB7XHJcbiAgICAgICAgICAgIGhvdXIgPSAxMjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBtaW51dGVzID0gXCIwMFwiICsgZGF0ZS5nZXRNaW51dGVzKCk7XHJcbiAgICAgICAgcmV0dXJuIGhvdXIgKyBcIjpcIiArIG1pbnV0ZXMuc3Vic3RyaW5nKG1pbnV0ZXMubGVuZ3RoIC0gMikgKyBcIiBcIiArIGFtcG07XHJcbiAgICB9LFxyXG4gICAgcHVibGlzaDogZnVuY3Rpb24gKHRvcGljLCBtZXNzYWdlKSB7XHJcbiAgICAgICAgcHVic3ViLnB1Ymxpc2godG9waWMsIG1lc3NhZ2UpO1xyXG4gICAgfSxcclxuICAgIHN1YnNjcmliZTogZnVuY3Rpb24gKHRvcGljLCBoYW5kbGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHB1YnN1Yi5zdWJzY3JpYmUodG9waWMsIGZ1bmN0aW9uICh0b3BpYywgbWVzc2FnZSkge1xyXG4gICAgICAgICAgICBoYW5kbGVyKG1lc3NhZ2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGZpbmQsXHJcbiAgICBleHRlbmQ6IGZ1bmN0aW9uIChvdXQpIHtcclxuICAgICAgICBvdXQgPSBvdXQgfHwge307XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBvYmogPSBhcmd1bWVudHNbaV07XHJcblxyXG4gICAgICAgICAgICBpZiAoIW9iailcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIG9iaikge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmpba2V5XSA9PT0gJ29iamVjdCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvcmUuZXh0ZW5kKG91dFtrZXldLCBvYmpba2V5XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRba2V5XSA9IG9ialtrZXldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gb3V0O1xyXG4gICAgfSxcclxuICAgIGNsb3Nlc3Q6IGZ1bmN0aW9uIGNsb3Nlc3QoZWwsIHNlbGVjdG9yKSB7XHJcbiAgICAgICAgdmFyIG1hdGNoZXNGbjtcclxuXHJcbiAgICAgICAgLy8gZmluZCB2ZW5kb3IgcHJlZml4XHJcbiAgICAgICAgW1wibWF0Y2hlc1wiLCBcIndlYmtpdE1hdGNoZXNTZWxlY3RvclwiLCBcIm1vek1hdGNoZXNTZWxlY3RvclwiLCBcIm1zTWF0Y2hlc1NlbGVjdG9yXCIsIFwib01hdGNoZXNTZWxlY3RvclwiXS5zb21lKGZ1bmN0aW9uIChmbikge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGRvY3VtZW50LmJvZHlbZm5dID09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgbWF0Y2hlc0ZuID0gZm47XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8gdHJhdmVyc2UgcGFyZW50c1xyXG4gICAgICAgIHdoaWxlIChlbCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBsZXQgcGFyZW50ID0gZWwucGFyZW50RWxlbWVudDtcclxuICAgICAgICAgICAgaWYgKHBhcmVudCAhPT0gbnVsbCAmJiBwYXJlbnRbbWF0Y2hlc0ZuXShzZWxlY3RvcikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwYXJlbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWwgPSBwYXJlbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH0sXHJcbiAgICBhZGRDbGFzczogZnVuY3Rpb24gKGVsLCBjbGFzc05hbWUpIHtcclxuICAgICAgICBpZiAoZWwuY2xhc3NMaXN0KSB7XHJcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlbC5jbGFzc05hbWUgKz0gJyAnICsgY2xhc3NOYW1lO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICByZW1vdmVDbGFzczogZnVuY3Rpb24gKGVsLCBjbGFzc05hbWUpIHtcclxuICAgICAgICBpZiAoZWwuY2xhc3NMaXN0KSB7XHJcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlbC5jbGFzc05hbWUgPSBlbC5jbGFzc05hbWUucmVwbGFjZShuZXcgUmVnRXhwKCcoXnxcXFxcYiknICsgY2xhc3NOYW1lLnNwbGl0KCcgJykuam9pbignfCcpICsgJyhcXFxcYnwkKScsICdnaScpLCAnICcpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhZGRFdmVudExpc3RlbmVyOiBmdW5jdGlvbiAoZWwsIGV2ZW50TmFtZSwgaGFuZGxlcikge1xyXG4gICAgICAgIGlmIChlbC5hZGRFdmVudExpc3RlbmVyKSB7XHJcbiAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBoYW5kbGVyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlbC5hdHRhY2hFdmVudCgnb24nICsgZXZlbnROYW1lLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVyLmNhbGwoZWwpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWF0Y2hlczogZnVuY3Rpb24gKGVsLCBzZWxlY3Rvcikge1xyXG4gICAgICAgIHZhciBfbWF0Y2hlcyA9IChlbC5tYXRjaGVzIHx8IGVsLm1hdGNoZXNTZWxlY3RvciB8fCBlbC5tc01hdGNoZXNTZWxlY3RvciB8fCBlbC5tb3pNYXRjaGVzU2VsZWN0b3IgfHwgZWwud2Via2l0TWF0Y2hlc1NlbGVjdG9yIHx8IGVsLm9NYXRjaGVzU2VsZWN0b3IpO1xyXG5cclxuICAgICAgICBpZiAoX21hdGNoZXMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9tYXRjaGVzLmNhbGwoZWwsIHNlbGVjdG9yKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgbm9kZXMgPSBlbC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gbm9kZXMubGVuZ3RoOyBpLS07KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobm9kZXNbaV0gPT09IGVsKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgaXNTdHJpbmc6IGZ1bmN0aW9uICh0b1Rlc3QpIHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIHRvVGVzdCA9PT0gJ3N0cmluZycgfHwgdG9UZXN0IGluc3RhbmNlb2YgU3RyaW5nO1xyXG4gICAgfSxcclxuICAgIGZpcnN0OiBmdW5jdGlvbiAoYXJyYXksIG1hdGNoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgYXJyYXlJdGVtIG9mIGFycmF5KSB7XHJcbiAgICAgICAgICAgIGlmIChtYXRjaChhcnJheUl0ZW0pKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXJyYXlJdGVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gbWF0Y2ggdGhhdCBpdGVtLlwiKTtcclxuICAgIH0sXHJcbiAgICBzZXRQcm9wZXJ0eTogZnVuY3Rpb24gKG9iaiwgcHJvcCwgdmFsdWUpIHtcclxuICAgICAgICBpZiAoY29yZS5pc1N0cmluZyhwcm9wKSkge1xyXG4gICAgICAgICAgICBwcm9wID0gcHJvcC5zcGxpdChcIi5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocHJvcC5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIHZhciBlID0gcHJvcC5zaGlmdCgpO1xyXG4gICAgICAgICAgICBjb3JlLnNldFByb3BlcnR5KG9ialtlXSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmpbZV0pID09PSBcIltvYmplY3QgT2JqZWN0XVwiID8gb2JqW2VdIDoge30sIHByb3AsIHZhbHVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvYmpbcHJvcFswXV0gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb3JlO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGM6L2dpdC9Fc3BhbGllckpTL3NyYy9qcy9lc3BhbGllci5jb3JlLmpzXG4gKiovIiwiaW1wb3J0IGNvbW1vbiBmcm9tIFwiLi9lc3BhbGllci5jb21tb25cIjtcclxuXHJcbnZhciBwbGVhc2VXYWl0SWQgPSBcImVzcGFsaWVyLXdhaXQtc2NyZWVuXCI7XHJcbnZhciBwbGVhc2VXYWl0ID0gJChcIjxkaXYgLz5cIik7XHJcbnBsZWFzZVdhaXQuYXR0cihcImlkXCIsIHBsZWFzZVdhaXRJZCk7XHJcblxyXG52YXIgaG91cmdsYXNzID0gJ2RhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LCcgK1xyXG4gICAgXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgY2xhc3M9XFxcInVpbC1nZWFyc1xcXCIgdmlld0JveD1cXFwiMCAwIDEwMCAxMDBcXFwiIHByZXNlcnZlQXNwZWN0UmF0aW89XFxcInhNaWRZTWlkIG1lZXRcXFwiIHdpZHRoPVxcXCIxMjBweFxcXCIgaGVpZ2h0PVxcXCIxMjBweFxcXCI+XCIgK1xyXG4gICAgXCIgIDxyZWN0IGNsYXNzPVxcXCJia1xcXCIgZmlsbD1cXFwibm9uZVxcXCIgeD1cXFwiMFxcXCIgeT1cXFwiMFxcXCIgd2lkdGg9XFxcIjEwMFxcXCIgaGVpZ2h0PVxcXCIxMDBcXFwiIC8+XCIgK1xyXG4gICAgXCIgIDxnIHRyYW5zZm9ybT1cXFwidHJhbnNsYXRlKC0yMCAtMjApXFxcIj5cIiArXHJcbiAgICBcIiAgICA8cGF0aCBmaWxsPVxcXCIjZmFmYWZhXFxcIiBkPVxcXCJNIDc5LjkgNTIuNiBDIDgwIDUxLjggODAgNTAuOSA4MCA1MCBzIDAgLTEuOCAtMC4xIC0yLjYgbCAtNS4xIC0wLjQgYyAtMC4zIC0yLjQgLTAuOSAtNC42IC0xLjggLTYuNyBsIDQuMiAtMi45IGMgLTAuNyAtMS42IC0xLjYgLTMuMSAtMi42IC00LjUgTCA3MCAzNSBjIC0xLjQgLTEuOSAtMy4xIC0zLjUgLTQuOSAtNC45IGwgMi4yIC00LjYgYyAtMS40IC0xIC0yLjkgLTEuOSAtNC41IC0yLjYgTCA1OS44IDI3IGMgLTIuMSAtMC45IC00LjQgLTEuNSAtNi43IC0xLjggbCAtMC40IC01LjEgQyA1MS44IDIwIDUwLjkgMjAgNTAgMjAgcyAtMS44IDAgLTIuNiAwLjEgbCAtMC40IDUuMSBjIC0yLjQgMC4zIC00LjYgMC45IC02LjcgMS44IGwgLTIuOSAtNC4xIGMgLTEuNiAwLjcgLTMuMSAxLjYgLTQuNSAyLjYgbCAyLjEgNC42IGMgLTEuOSAxLjQgLTMuNSAzLjEgLTUgNC45IGwgLTQuNSAtMi4xIGMgLTEgMS40IC0xLjkgMi45IC0yLjYgNC41IGwgNC4xIDIuOSBjIC0wLjkgMi4xIC0xLjUgNC40IC0xLjggNi44IGwgLTUgMC40IEMgMjAgNDguMiAyMCA0OS4xIDIwIDUwIHMgMCAxLjggMC4xIDIuNiBsIDUgMC40IGMgMC4zIDIuNCAwLjkgNC43IDEuOCA2LjggbCAtNC4xIDIuOSBjIDAuNyAxLjYgMS42IDMuMSAyLjYgNC41IGwgNC41IC0yLjEgYyAxLjQgMS45IDMuMSAzLjUgNSA0LjkgbCAtMi4xIDQuNiBjIDEuNCAxIDIuOSAxLjkgNC41IDIuNiBsIDIuOSAtNC4xIGMgMi4xIDAuOSA0LjQgMS41IDYuNyAxLjggbCAwLjQgNS4xIEMgNDguMiA4MCA0OS4xIDgwIDUwIDgwIHMgMS44IDAgMi42IC0wLjEgbCAwLjQgLTUuMSBjIDIuMyAtMC4zIDQuNiAtMC45IDYuNyAtMS44IGwgMi45IDQuMiBjIDEuNiAtMC43IDMuMSAtMS42IDQuNSAtMi42IEwgNjUgNjkuOSBjIDEuOSAtMS40IDMuNSAtMyA0LjkgLTQuOSBsIDQuNiAyLjIgYyAxIC0xLjQgMS45IC0yLjkgMi42IC00LjUgTCA3MyA1OS44IGMgMC45IC0yLjEgMS41IC00LjQgMS44IC02LjcgTCA3OS45IDUyLjYgWiBNIDUwIDY1IGMgLTguMyAwIC0xNSAtNi43IC0xNSAtMTUgYyAwIC04LjMgNi43IC0xNSAxNSAtMTUgcyAxNSA2LjcgMTUgMTUgQyA2NSA1OC4zIDU4LjMgNjUgNTAgNjUgWlxcXCI+XCIgK1xyXG4gICAgXCIgICAgICA8YW5pbWF0ZVRyYW5zZm9ybSB0eXBlPVxcXCJyb3RhdGVcXFwiIGR1cj1cXFwiMnNcXFwiIHJlcGVhdENvdW50PVxcXCJpbmRlZmluaXRlXFxcIiB0bz1cXFwiMCA1MCA1MFxcXCIgZnJvbT1cXFwiOTAgNTAgNTBcXFwiIGF0dHJpYnV0ZU5hbWU9XFxcInRyYW5zZm9ybVxcXCIgLz5cIiArXHJcbiAgICBcIiAgICA8L3BhdGg+XCIgK1xyXG4gICAgXCIgIDwvZz5cIiArXHJcbiAgICBcIiAgPGcgdHJhbnNmb3JtPVxcXCJ0cmFuc2xhdGUoMjAgMjApIHJvdGF0ZSgxNSA1MC4wMDAyIDUwKVxcXCI+XCIgK1xyXG4gICAgXCIgICAgPHBhdGggZmlsbD1cXFwiI2VmZWZlZlxcXCIgZD1cXFwiTSA3OS45IDUyLjYgQyA4MCA1MS44IDgwIDUwLjkgODAgNTAgcyAwIC0xLjggLTAuMSAtMi42IGwgLTUuMSAtMC40IGMgLTAuMyAtMi40IC0wLjkgLTQuNiAtMS44IC02LjcgbCA0LjIgLTIuOSBjIC0wLjcgLTEuNiAtMS42IC0zLjEgLTIuNiAtNC41IEwgNzAgMzUgYyAtMS40IC0xLjkgLTMuMSAtMy41IC00LjkgLTQuOSBsIDIuMiAtNC42IGMgLTEuNCAtMSAtMi45IC0xLjkgLTQuNSAtMi42IEwgNTkuOCAyNyBjIC0yLjEgLTAuOSAtNC40IC0xLjUgLTYuNyAtMS44IGwgLTAuNCAtNS4xIEMgNTEuOCAyMCA1MC45IDIwIDUwIDIwIHMgLTEuOCAwIC0yLjYgMC4xIGwgLTAuNCA1LjEgYyAtMi40IDAuMyAtNC42IDAuOSAtNi43IDEuOCBsIC0yLjkgLTQuMSBjIC0xLjYgMC43IC0zLjEgMS42IC00LjUgMi42IGwgMi4xIDQuNiBjIC0xLjkgMS40IC0zLjUgMy4xIC01IDQuOSBsIC00LjUgLTIuMSBjIC0xIDEuNCAtMS45IDIuOSAtMi42IDQuNSBsIDQuMSAyLjkgYyAtMC45IDIuMSAtMS41IDQuNCAtMS44IDYuOCBsIC01IDAuNCBDIDIwIDQ4LjIgMjAgNDkuMSAyMCA1MCBzIDAgMS44IDAuMSAyLjYgbCA1IDAuNCBjIDAuMyAyLjQgMC45IDQuNyAxLjggNi44IGwgLTQuMSAyLjkgYyAwLjcgMS42IDEuNiAzLjEgMi42IDQuNSBsIDQuNSAtMi4xIGMgMS40IDEuOSAzLjEgMy41IDUgNC45IGwgLTIuMSA0LjYgYyAxLjQgMSAyLjkgMS45IDQuNSAyLjYgbCAyLjkgLTQuMSBjIDIuMSAwLjkgNC40IDEuNSA2LjcgMS44IGwgMC40IDUuMSBDIDQ4LjIgODAgNDkuMSA4MCA1MCA4MCBzIDEuOCAwIDIuNiAtMC4xIGwgMC40IC01LjEgYyAyLjMgLTAuMyA0LjYgLTAuOSA2LjcgLTEuOCBsIDIuOSA0LjIgYyAxLjYgLTAuNyAzLjEgLTEuNiA0LjUgLTIuNiBMIDY1IDY5LjkgYyAxLjkgLTEuNCAzLjUgLTMgNC45IC00LjkgbCA0LjYgMi4yIGMgMSAtMS40IDEuOSAtMi45IDIuNiAtNC41IEwgNzMgNTkuOCBjIDAuOSAtMi4xIDEuNSAtNC40IDEuOCAtNi43IEwgNzkuOSA1Mi42IFogTSA1MCA2NSBjIC04LjMgMCAtMTUgLTYuNyAtMTUgLTE1IGMgMCAtOC4zIDYuNyAtMTUgMTUgLTE1IHMgMTUgNi43IDE1IDE1IEMgNjUgNTguMyA1OC4zIDY1IDUwIDY1IFpcXFwiPlwiICtcclxuICAgIFwiICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gdHlwZT1cXFwicm90YXRlXFxcIiBkdXI9XFxcIjJzXFxcIiByZXBlYXRDb3VudD1cXFwiaW5kZWZpbml0ZVxcXCIgdG89XFxcIjkwIDUwIDUwXFxcIiBmcm9tPVxcXCIwIDUwIDUwXFxcIiBhdHRyaWJ1dGVOYW1lPVxcXCJ0cmFuc2Zvcm1cXFwiIC8+XCIgK1xyXG4gICAgXCIgICAgPC9wYXRoPlwiICtcclxuICAgIFwiICA8L2c+XCIgK1xyXG4gICAgXCI8L3N2Zz5cIjtcclxudmFyIHdhaXRJbWFnZSA9ICQoXCI8aW1nIC8+XCIpO1xyXG53YWl0SW1hZ2UuYXR0cihcInNyY1wiLCBob3VyZ2xhc3MpO1xyXG52YXIgaW5uZXIgPSAkKFwiPGRpdiAvPlwiKTtcclxuaW5uZXIuYXBwZW5kKHdhaXRJbWFnZSk7XHJcbnBsZWFzZVdhaXQuYXBwZW5kKGlubmVyKTtcclxuXHJcbnZhciB3YWl0U2NyZWVuID0ge1xyXG4gICAgc2hvdzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICgkKFwiI1wiICsgcGxlYXNlV2FpdElkKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwbGVhc2VXYWl0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29tbW9uLmJvZHkuYXBwZW5kKHBsZWFzZVdhaXQpO1xyXG4gICAgICAgIHJldHVybiBwbGVhc2VXYWl0O1xyXG4gICAgfSxcclxuICAgIGhpZGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBwbGVhc2VXYWl0LnJlbW92ZSgpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2FpdFNjcmVlbjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBjOi9naXQvRXNwYWxpZXJKUy9zcmMvanMvZXNwYWxpZXIud2FpdHNjcmVlbi5qc1xuICoqLyIsInZhciBib2R5ID0gJChcImJvZHlcIik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBib2R5OiBib2R5LFxyXG4gICAgd2luZG93OiAkKHdpbmRvdyksXHJcbiAgICBzaG93VmVsbHVtOiBmdW5jdGlvbigpIHtcclxuICAgIFx0aWYoJChcIi5lc3BhbGllci12ZWxsdW1cIikubGVuZ3RoID4gMCkge1xyXG4gICAgXHRcdHJldHVybjtcclxuICAgIFx0fVxyXG5cclxuICAgICAgICB2YXIgdmVsbHVtID0gJChcIjxkaXYgY2xhc3M9XFxcImVzcGFsaWVyLXZlbGx1bVxcXCIgLz5cIik7XHJcbiAgICAgICAgYm9keS5hcHBlbmQodmVsbHVtKTtcclxuICAgIH0sXHJcbiAgICBoaWRlVmVsbHVtOiBmdW5jdGlvbigpIHtcclxuICAgIFx0JChcIi5lc3BhbGllci12ZWxsdW1cIikucmVtb3ZlKCk7XHJcbiAgICB9XHJcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogYzovZ2l0L0VzcGFsaWVySlMvc3JjL2pzL2VzcGFsaWVyLmNvbW1vbi5qc1xuICoqLyIsIi8qXG5Db3B5cmlnaHQgKGMpIDIwMTAsMjAxMSwyMDEyLDIwMTMsMjAxNCBNb3JnYW4gUm9kZXJpY2sgaHR0cDovL3JvZGVyaWNrLmRrXG5MaWNlbnNlOiBNSVQgLSBodHRwOi8vbXJnbnJkcmNrLm1pdC1saWNlbnNlLm9yZ1xuXG5odHRwczovL2dpdGh1Yi5jb20vbXJvZGVyaWNrL1B1YlN1YkpTXG4qL1xuKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KXtcblx0J3VzZSBzdHJpY3QnO1xuXG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCl7XG4gICAgICAgIC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cbiAgICAgICAgZGVmaW5lKFsnZXhwb3J0cyddLCBmYWN0b3J5KTtcblxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKXtcbiAgICAgICAgLy8gQ29tbW9uSlNcbiAgICAgICAgZmFjdG9yeShleHBvcnRzKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEJyb3dzZXIgZ2xvYmFsc1xuICAgICAgICB2YXIgUHViU3ViID0ge307XG4gICAgICAgIHJvb3QuUHViU3ViID0gUHViU3ViO1xuICAgICAgICBmYWN0b3J5KFB1YlN1Yik7XG4gICAgfVxufSgoIHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmIHdpbmRvdyApIHx8IHRoaXMsIGZ1bmN0aW9uIChQdWJTdWIpe1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIG1lc3NhZ2VzID0ge30sXG5cdFx0bGFzdFVpZCA9IC0xO1xuXG5cdGZ1bmN0aW9uIGhhc0tleXMob2JqKXtcblx0XHR2YXIga2V5O1xuXG5cdFx0Zm9yIChrZXkgaW4gb2JqKXtcblx0XHRcdGlmICggb2JqLmhhc093blByb3BlcnR5KGtleSkgKXtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8qKlxuXHQgKlx0UmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgdGhyb3dzIHRoZSBwYXNzZWQgZXhjZXB0aW9uLCBmb3IgdXNlIGFzIGFyZ3VtZW50IGZvciBzZXRUaW1lb3V0XG5cdCAqXHRAcGFyYW0geyBPYmplY3QgfSBleCBBbiBFcnJvciBvYmplY3Rcblx0ICovXG5cdGZ1bmN0aW9uIHRocm93RXhjZXB0aW9uKCBleCApe1xuXHRcdHJldHVybiBmdW5jdGlvbiByZVRocm93RXhjZXB0aW9uKCl7XG5cdFx0XHR0aHJvdyBleDtcblx0XHR9O1xuXHR9XG5cblx0ZnVuY3Rpb24gY2FsbFN1YnNjcmliZXJXaXRoRGVsYXllZEV4Y2VwdGlvbnMoIHN1YnNjcmliZXIsIG1lc3NhZ2UsIGRhdGEgKXtcblx0XHR0cnkge1xuXHRcdFx0c3Vic2NyaWJlciggbWVzc2FnZSwgZGF0YSApO1xuXHRcdH0gY2F0Y2goIGV4ICl7XG5cdFx0XHRzZXRUaW1lb3V0KCB0aHJvd0V4Y2VwdGlvbiggZXggKSwgMCk7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gY2FsbFN1YnNjcmliZXJXaXRoSW1tZWRpYXRlRXhjZXB0aW9ucyggc3Vic2NyaWJlciwgbWVzc2FnZSwgZGF0YSApe1xuXHRcdHN1YnNjcmliZXIoIG1lc3NhZ2UsIGRhdGEgKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGRlbGl2ZXJNZXNzYWdlKCBvcmlnaW5hbE1lc3NhZ2UsIG1hdGNoZWRNZXNzYWdlLCBkYXRhLCBpbW1lZGlhdGVFeGNlcHRpb25zICl7XG5cdFx0dmFyIHN1YnNjcmliZXJzID0gbWVzc2FnZXNbbWF0Y2hlZE1lc3NhZ2VdLFxuXHRcdFx0Y2FsbFN1YnNjcmliZXIgPSBpbW1lZGlhdGVFeGNlcHRpb25zID8gY2FsbFN1YnNjcmliZXJXaXRoSW1tZWRpYXRlRXhjZXB0aW9ucyA6IGNhbGxTdWJzY3JpYmVyV2l0aERlbGF5ZWRFeGNlcHRpb25zLFxuXHRcdFx0cztcblxuXHRcdGlmICggIW1lc3NhZ2VzLmhhc093blByb3BlcnR5KCBtYXRjaGVkTWVzc2FnZSApICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGZvciAocyBpbiBzdWJzY3JpYmVycyl7XG5cdFx0XHRpZiAoIHN1YnNjcmliZXJzLmhhc093blByb3BlcnR5KHMpKXtcblx0XHRcdFx0Y2FsbFN1YnNjcmliZXIoIHN1YnNjcmliZXJzW3NdLCBvcmlnaW5hbE1lc3NhZ2UsIGRhdGEgKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBjcmVhdGVEZWxpdmVyeUZ1bmN0aW9uKCBtZXNzYWdlLCBkYXRhLCBpbW1lZGlhdGVFeGNlcHRpb25zICl7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uIGRlbGl2ZXJOYW1lc3BhY2VkKCl7XG5cdFx0XHR2YXIgdG9waWMgPSBTdHJpbmcoIG1lc3NhZ2UgKSxcblx0XHRcdFx0cG9zaXRpb24gPSB0b3BpYy5sYXN0SW5kZXhPZiggJy4nICk7XG5cblx0XHRcdC8vIGRlbGl2ZXIgdGhlIG1lc3NhZ2UgYXMgaXQgaXMgbm93XG5cdFx0XHRkZWxpdmVyTWVzc2FnZShtZXNzYWdlLCBtZXNzYWdlLCBkYXRhLCBpbW1lZGlhdGVFeGNlcHRpb25zKTtcblxuXHRcdFx0Ly8gdHJpbSB0aGUgaGllcmFyY2h5IGFuZCBkZWxpdmVyIG1lc3NhZ2UgdG8gZWFjaCBsZXZlbFxuXHRcdFx0d2hpbGUoIHBvc2l0aW9uICE9PSAtMSApe1xuXHRcdFx0XHR0b3BpYyA9IHRvcGljLnN1YnN0ciggMCwgcG9zaXRpb24gKTtcblx0XHRcdFx0cG9zaXRpb24gPSB0b3BpYy5sYXN0SW5kZXhPZignLicpO1xuXHRcdFx0XHRkZWxpdmVyTWVzc2FnZSggbWVzc2FnZSwgdG9waWMsIGRhdGEsIGltbWVkaWF0ZUV4Y2VwdGlvbnMgKTtcblx0XHRcdH1cblx0XHR9O1xuXHR9XG5cblx0ZnVuY3Rpb24gbWVzc2FnZUhhc1N1YnNjcmliZXJzKCBtZXNzYWdlICl7XG5cdFx0dmFyIHRvcGljID0gU3RyaW5nKCBtZXNzYWdlICksXG5cdFx0XHRmb3VuZCA9IEJvb2xlYW4obWVzc2FnZXMuaGFzT3duUHJvcGVydHkoIHRvcGljICkgJiYgaGFzS2V5cyhtZXNzYWdlc1t0b3BpY10pKSxcblx0XHRcdHBvc2l0aW9uID0gdG9waWMubGFzdEluZGV4T2YoICcuJyApO1xuXG5cdFx0d2hpbGUgKCAhZm91bmQgJiYgcG9zaXRpb24gIT09IC0xICl7XG5cdFx0XHR0b3BpYyA9IHRvcGljLnN1YnN0ciggMCwgcG9zaXRpb24gKTtcblx0XHRcdHBvc2l0aW9uID0gdG9waWMubGFzdEluZGV4T2YoICcuJyApO1xuXHRcdFx0Zm91bmQgPSBCb29sZWFuKG1lc3NhZ2VzLmhhc093blByb3BlcnR5KCB0b3BpYyApICYmIGhhc0tleXMobWVzc2FnZXNbdG9waWNdKSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZvdW5kO1xuXHR9XG5cblx0ZnVuY3Rpb24gcHVibGlzaCggbWVzc2FnZSwgZGF0YSwgc3luYywgaW1tZWRpYXRlRXhjZXB0aW9ucyApe1xuXHRcdHZhciBkZWxpdmVyID0gY3JlYXRlRGVsaXZlcnlGdW5jdGlvbiggbWVzc2FnZSwgZGF0YSwgaW1tZWRpYXRlRXhjZXB0aW9ucyApLFxuXHRcdFx0aGFzU3Vic2NyaWJlcnMgPSBtZXNzYWdlSGFzU3Vic2NyaWJlcnMoIG1lc3NhZ2UgKTtcblxuXHRcdGlmICggIWhhc1N1YnNjcmliZXJzICl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYgKCBzeW5jID09PSB0cnVlICl7XG5cdFx0XHRkZWxpdmVyKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHNldFRpbWVvdXQoIGRlbGl2ZXIsIDAgKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHQvKipcblx0ICpcdFB1YlN1Yi5wdWJsaXNoKCBtZXNzYWdlWywgZGF0YV0gKSAtPiBCb29sZWFuXG5cdCAqXHQtIG1lc3NhZ2UgKFN0cmluZyk6IFRoZSBtZXNzYWdlIHRvIHB1Ymxpc2hcblx0ICpcdC0gZGF0YTogVGhlIGRhdGEgdG8gcGFzcyB0byBzdWJzY3JpYmVyc1xuXHQgKlx0UHVibGlzaGVzIHRoZSB0aGUgbWVzc2FnZSwgcGFzc2luZyB0aGUgZGF0YSB0byBpdCdzIHN1YnNjcmliZXJzXG5cdCoqL1xuXHRQdWJTdWIucHVibGlzaCA9IGZ1bmN0aW9uKCBtZXNzYWdlLCBkYXRhICl7XG5cdFx0cmV0dXJuIHB1Ymxpc2goIG1lc3NhZ2UsIGRhdGEsIGZhbHNlLCBQdWJTdWIuaW1tZWRpYXRlRXhjZXB0aW9ucyApO1xuXHR9O1xuXG5cdC8qKlxuXHQgKlx0UHViU3ViLnB1Ymxpc2hTeW5jKCBtZXNzYWdlWywgZGF0YV0gKSAtPiBCb29sZWFuXG5cdCAqXHQtIG1lc3NhZ2UgKFN0cmluZyk6IFRoZSBtZXNzYWdlIHRvIHB1Ymxpc2hcblx0ICpcdC0gZGF0YTogVGhlIGRhdGEgdG8gcGFzcyB0byBzdWJzY3JpYmVyc1xuXHQgKlx0UHVibGlzaGVzIHRoZSB0aGUgbWVzc2FnZSBzeW5jaHJvbm91c2x5LCBwYXNzaW5nIHRoZSBkYXRhIHRvIGl0J3Mgc3Vic2NyaWJlcnNcblx0KiovXG5cdFB1YlN1Yi5wdWJsaXNoU3luYyA9IGZ1bmN0aW9uKCBtZXNzYWdlLCBkYXRhICl7XG5cdFx0cmV0dXJuIHB1Ymxpc2goIG1lc3NhZ2UsIGRhdGEsIHRydWUsIFB1YlN1Yi5pbW1lZGlhdGVFeGNlcHRpb25zICk7XG5cdH07XG5cblx0LyoqXG5cdCAqXHRQdWJTdWIuc3Vic2NyaWJlKCBtZXNzYWdlLCBmdW5jICkgLT4gU3RyaW5nXG5cdCAqXHQtIG1lc3NhZ2UgKFN0cmluZyk6IFRoZSBtZXNzYWdlIHRvIHN1YnNjcmliZSB0b1xuXHQgKlx0LSBmdW5jIChGdW5jdGlvbik6IFRoZSBmdW5jdGlvbiB0byBjYWxsIHdoZW4gYSBuZXcgbWVzc2FnZSBpcyBwdWJsaXNoZWRcblx0ICpcdFN1YnNjcmliZXMgdGhlIHBhc3NlZCBmdW5jdGlvbiB0byB0aGUgcGFzc2VkIG1lc3NhZ2UuIEV2ZXJ5IHJldHVybmVkIHRva2VuIGlzIHVuaXF1ZSBhbmQgc2hvdWxkIGJlIHN0b3JlZCBpZlxuXHQgKlx0eW91IG5lZWQgdG8gdW5zdWJzY3JpYmVcblx0KiovXG5cdFB1YlN1Yi5zdWJzY3JpYmUgPSBmdW5jdGlvbiggbWVzc2FnZSwgZnVuYyApe1xuXHRcdGlmICggdHlwZW9mIGZ1bmMgIT09ICdmdW5jdGlvbicpe1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIG1lc3NhZ2UgaXMgbm90IHJlZ2lzdGVyZWQgeWV0XG5cdFx0aWYgKCAhbWVzc2FnZXMuaGFzT3duUHJvcGVydHkoIG1lc3NhZ2UgKSApe1xuXHRcdFx0bWVzc2FnZXNbbWVzc2FnZV0gPSB7fTtcblx0XHR9XG5cblx0XHQvLyBmb3JjaW5nIHRva2VuIGFzIFN0cmluZywgdG8gYWxsb3cgZm9yIGZ1dHVyZSBleHBhbnNpb25zIHdpdGhvdXQgYnJlYWtpbmcgdXNhZ2Vcblx0XHQvLyBhbmQgYWxsb3cgZm9yIGVhc3kgdXNlIGFzIGtleSBuYW1lcyBmb3IgdGhlICdtZXNzYWdlcycgb2JqZWN0XG5cdFx0dmFyIHRva2VuID0gJ3VpZF8nICsgU3RyaW5nKCsrbGFzdFVpZCk7XG5cdFx0bWVzc2FnZXNbbWVzc2FnZV1bdG9rZW5dID0gZnVuYztcblxuXHRcdC8vIHJldHVybiB0b2tlbiBmb3IgdW5zdWJzY3JpYmluZ1xuXHRcdHJldHVybiB0b2tlbjtcblx0fTtcblxuXHQvKiBQdWJsaWM6IENsZWFycyBhbGwgc3Vic2NyaXB0aW9uc1xuXHQgKi9cblx0UHViU3ViLmNsZWFyQWxsU3Vic2NyaXB0aW9ucyA9IGZ1bmN0aW9uIGNsZWFyQWxsU3Vic2NyaXB0aW9ucygpe1xuXHRcdG1lc3NhZ2VzID0ge307XG5cdH07XG5cblx0LypQdWJsaWM6IENsZWFyIHN1YnNjcmlwdGlvbnMgYnkgdGhlIHRvcGljXG5cdCovXG5cdFB1YlN1Yi5jbGVhclN1YnNjcmlwdGlvbnMgPSBmdW5jdGlvbiBjbGVhclN1YnNjcmlwdGlvbnModG9waWMpe1xuXHRcdHZhciBtOyBcblx0XHRmb3IgKG0gaW4gbWVzc2FnZXMpe1xuXHRcdFx0aWYgKG1lc3NhZ2VzLmhhc093blByb3BlcnR5KG0pICYmIG0uaW5kZXhPZih0b3BpYykgPT09IDApe1xuXHRcdFx0XHRkZWxldGUgbWVzc2FnZXNbbV07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdC8qIFB1YmxpYzogcmVtb3ZlcyBzdWJzY3JpcHRpb25zLlxuXHQgKiBXaGVuIHBhc3NlZCBhIHRva2VuLCByZW1vdmVzIGEgc3BlY2lmaWMgc3Vic2NyaXB0aW9uLlxuXHQgKiBXaGVuIHBhc3NlZCBhIGZ1bmN0aW9uLCByZW1vdmVzIGFsbCBzdWJzY3JpcHRpb25zIGZvciB0aGF0IGZ1bmN0aW9uXG5cdCAqIFdoZW4gcGFzc2VkIGEgdG9waWMsIHJlbW92ZXMgYWxsIHN1YnNjcmlwdGlvbnMgZm9yIHRoYXQgdG9waWMgKGhpZXJhcmNoeSlcblx0ICpcblx0ICogdmFsdWUgLSBBIHRva2VuLCBmdW5jdGlvbiBvciB0b3BpYyB0byB1bnN1YnNjcmliZS5cblx0ICpcblx0ICogRXhhbXBsZXNcblx0ICpcblx0ICpcdFx0Ly8gRXhhbXBsZSAxIC0gdW5zdWJzY3JpYmluZyB3aXRoIGEgdG9rZW5cblx0ICpcdFx0dmFyIHRva2VuID0gUHViU3ViLnN1YnNjcmliZSgnbXl0b3BpYycsIG15RnVuYyk7XG5cdCAqXHRcdFB1YlN1Yi51bnN1YnNjcmliZSh0b2tlbik7XG5cdCAqXG5cdCAqXHRcdC8vIEV4YW1wbGUgMiAtIHVuc3Vic2NyaWJpbmcgd2l0aCBhIGZ1bmN0aW9uXG5cdCAqXHRcdFB1YlN1Yi51bnN1YnNjcmliZShteUZ1bmMpO1xuXHQgKlxuXHQgKlx0XHQvLyBFeGFtcGxlIDMgLSB1bnN1YnNjcmliaW5nIGEgdG9waWNcblx0ICpcdFx0UHViU3ViLnVuc3Vic2NyaWJlKCdteXRvcGljJyk7XG5cdCAqL1xuXHRQdWJTdWIudW5zdWJzY3JpYmUgPSBmdW5jdGlvbih2YWx1ZSl7XG5cdFx0dmFyIGlzVG9waWMgICAgPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIG1lc3NhZ2VzLmhhc093blByb3BlcnR5KHZhbHVlKSxcblx0XHRcdGlzVG9rZW4gICAgPSAhaXNUb3BpYyAmJiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnLFxuXHRcdFx0aXNGdW5jdGlvbiA9IHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyxcblx0XHRcdHJlc3VsdCA9IGZhbHNlLFxuXHRcdFx0bSwgbWVzc2FnZSwgdDtcblxuXHRcdGlmIChpc1RvcGljKXtcblx0XHRcdGRlbGV0ZSBtZXNzYWdlc1t2YWx1ZV07XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Zm9yICggbSBpbiBtZXNzYWdlcyApe1xuXHRcdFx0aWYgKCBtZXNzYWdlcy5oYXNPd25Qcm9wZXJ0eSggbSApICl7XG5cdFx0XHRcdG1lc3NhZ2UgPSBtZXNzYWdlc1ttXTtcblxuXHRcdFx0XHRpZiAoIGlzVG9rZW4gJiYgbWVzc2FnZVt2YWx1ZV0gKXtcblx0XHRcdFx0XHRkZWxldGUgbWVzc2FnZVt2YWx1ZV07XG5cdFx0XHRcdFx0cmVzdWx0ID0gdmFsdWU7XG5cdFx0XHRcdFx0Ly8gdG9rZW5zIGFyZSB1bmlxdWUsIHNvIHdlIGNhbiBqdXN0IHN0b3AgaGVyZVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGlzRnVuY3Rpb24pIHtcblx0XHRcdFx0XHRmb3IgKCB0IGluIG1lc3NhZ2UgKXtcblx0XHRcdFx0XHRcdGlmIChtZXNzYWdlLmhhc093blByb3BlcnR5KHQpICYmIG1lc3NhZ2VbdF0gPT09IHZhbHVlKXtcblx0XHRcdFx0XHRcdFx0ZGVsZXRlIG1lc3NhZ2VbdF07XG5cdFx0XHRcdFx0XHRcdHJlc3VsdCA9IHRydWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fTtcbn0pKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGM6L2dpdC9Fc3BhbGllckpTL34vcHVic3ViLWpzL3NyYy9wdWJzdWIuanNcbiAqKi8iLCJ2YXIgdGVtcGxhdGVzID0ge1xyXG5cdG1lc3NhZ2U6IGZ1bmN0aW9uKGRhdGEpIHtcclxuXHRcdHZhciByb290ID0gJChcIjxkaXYgLz5cIik7XHJcblx0XHRyb290LmFkZENsYXNzKGRhdGEubWVzc2FnZUNvbnRhaW5lckNsYXNzKTtcclxuXHRcdHJvb3QuYWRkQ2xhc3MoZGF0YS5tZXNzYWdlVHlwZUNsYXNzKTtcclxuXHRcdHJvb3QuYWRkQ2xhc3MoZGF0YS5tZXNzYWdlQXR0YWNobWVudENsYXNzKTtcclxuXHJcblx0XHR2YXIgY2xvc2VCdXR0b24gPSAkKFwiPGEgLz5cIik7XHJcblx0XHRjbG9zZUJ1dHRvbi5hdHRyKFwiaHJlZlwiLCBcImphdmFzY3JpcHQ6IHZvaWQoMCk7XCIpO1xyXG5cdFx0Y2xvc2VCdXR0b24uYWRkQ2xhc3MoZGF0YS5jbG9zZU1lc3NhZ2VDbGFzcyk7XHJcblxyXG5cdFx0cm9vdC5hcHBlbmQoY2xvc2VCdXR0b24pO1xyXG5cclxuXHRcdGlmIChkYXRhLm1vcmVUaGFuT25lKSB7XHJcblx0XHRcdHZhciBsaXN0ID0gJChcIjx1bCAvPlwiKTtcclxuXHJcblx0XHRcdCQuZWFjaChkYXRhLm1lc3NhZ2VzLCBmdW5jdGlvbihpbmRleCwgbWVzc2FnZSkge1xyXG5cdFx0XHRcdGxpc3QuYXBwZW5kKFwiPGxpPlwiICsgbWVzc2FnZSArIFwiPC9saT5cIik7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0cm9vdC5hcHBlbmQobGlzdCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyb290LmFwcGVuZChcIjxwPlwiICsgZGF0YS5tZXNzYWdlcyArIFwiPC9wPlwiKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gcm9vdFswXTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRlbXBsYXRlcztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBjOi9naXQvRXNwYWxpZXJKUy9zcmMvanMvdGVtcGxhdGVzL2Jvb3RzdHJhcFRlbXBsYXRlcy5qc1xuICoqLyIsImltcG9ydCBjb3JlIGZyb20gXCIuL2VzcGFsaWVyLmNvcmVcIjtcclxuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gXCIuL2VzcGFsaWVyLmZvcm1zLmNvbnRyb2xcIjtcclxuXHJcbmNsYXNzIEVzcGFsaWVyRm9ybSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihmb3JtVG9XaXJlLCBhcmdzKSB7XHJcbiAgICAgICAgaWYgKGNvcmUuaXNTdHJpbmcoZm9ybVRvV2lyZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5mb3JtID0gY29yZS5maW5kKGZvcm1Ub1dpcmUpWzBdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZm9ybSA9IGZvcm1Ub1dpcmVbMF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgc3VibWl0OiBmYWxzZVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGxldCBvbkVudGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBjb2RlID0gKGV2ZW50LmtleUNvZGUgPyBldmVudC5rZXlDb2RlIDogZXZlbnQud2hpY2gpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNvZGUgPT0gMTMpIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBjb3JlLmV4dGVuZChvcHRpb25zLCBhcmdzKTtcclxuXHJcbiAgICAgICAgdGhpcy5mb3JtLnNldEF0dHJpYnV0ZShcIm5vdmFsaWRhdGVcIiwgXCJcIik7XHJcbiAgICAgICAgdGhpcy5jb250cm9scyA9IG5ldyBTZXQoKTtcclxuICAgICAgICBsZXQgcHJvY2Vzc2VkQ29udHJvbHMgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgbGV0IHJhd0NvbnRyb2xzID0gY29yZS5maW5kKFwiaW5wdXQsIHRleHRhcmVhLCBzZWxlY3RcIiwgdGhpcy5mb3JtKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgY29udHJvbCBvZiByYXdDb250cm9scykge1xyXG4gICAgICAgICAgICBjb250cm9sLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCBvbkVudGVyKTtcclxuICAgICAgICAgICAgdmFyIGNvbnRyb2xUeXBlID0gY29udHJvbC50eXBlID8gY29udHJvbC50eXBlIDogY29udHJvbC5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpO1xyXG4gICAgICAgICAgICB2YXIgbG93ZXJDYXNlSWQgPSBjb250cm9sVHlwZSA9PSBcInJhZGlvXCIgPyBjb250cm9sLm5hbWUudG9Mb3dlckNhc2UoKSA6IGNvbnRyb2wuaWQudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChwcm9jZXNzZWRDb250cm9scy5oYXMobG93ZXJDYXNlSWQpKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcHJvY2Vzc2VkQ29udHJvbHMuYWRkKGxvd2VyQ2FzZUlkKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChsb3dlckNhc2VJZCB8fCAoY29udHJvbC50eXBlID8gY29udHJvbC50eXBlIDogY29udHJvbC5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpKSA9PSBcInJhZGlvXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbHMuYWRkKEZvcm1Db250cm9sKGNvbnRyb2wpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29yZS5hZGRFdmVudExpc3RlbmVyKHRoaXMuZm9ybSwgXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuc3VibWl0KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBzdWJtaXRCdXR0b25zID0gY29yZS5maW5kKFwiW2RhdGEtYWN0aW9uPVxcXCJzdWJtaXRcXFwiXVwiLCB0aGlzLmZvcm0pO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBzdWJtaXRCdXR0b24gb2Ygc3VibWl0QnV0dG9ucykge1xyXG4gICAgICAgICAgICBjb3JlLmFkZEV2ZW50TGlzdGVuZXIoc3VibWl0QnV0dG9uLCBcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBoYXNGb2N1cyA9IGNvcmUuZmluZChcIltkYXRhLWZvY3VzPVxcXCJ0cnVlXFxcIl1cIiwgdGhpcy5mb3JtKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgZWwgb2YgaGFzRm9jdXMpIHtcclxuICAgICAgICAgICAgaWYgKGVsLm9mZnNldFBhcmVudCA9PT0gbnVsbCB8fCBlbC5yZWFkT25seSkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGVsLmZvY3VzKCk7XHJcbiAgICAgICAgICAgIGVsLnNlbGVjdCgpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3VibWl0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc3VibWl0KSB7XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5zdWJtaXQoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMudmFsaWRhdGUoKSkge1xyXG4gICAgICAgICAgICBsZXQgbWV0aG9kID0gdGhpcy5mb3JtLmdldEF0dHJpYnV0ZShcIm1ldGhvZFwiKTtcclxuXHJcbiAgICAgICAgICAgIGNvcmUuc2VuZFJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogbWV0aG9kID8gbWV0aG9kIDogXCJHRVRcIixcclxuICAgICAgICAgICAgICAgIHVybDogdGhpcy5mb3JtLmdldEF0dHJpYnV0ZShcImFjdGlvblwiKSxcclxuICAgICAgICAgICAgICAgIGRhdGE6ICQodGhpcy5mb3JtKS5zZXJpYWxpemUoKSAvL1RPRE86IFJlbW92ZSBqUXVlcnkuXHJcbiAgICAgICAgICAgIH0pLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBvblN1Y2Nlc3MgPSB0aGlzLmZvcm0uZ2V0QXR0cmlidXRlKFwiZGF0YS1zdWNjZXNzXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChvblN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb3JlLnB1Ymxpc2gob25TdWNjZXNzLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHZhbGlkYXRlKCkge1xyXG4gICAgICAgIHZhciB2YWxpZCA9IHRydWU7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGNvbnRyb2wgb2YgdGhpcy5jb250cm9scykge1xyXG4gICAgICAgICAgICBjb250cm9sLm1lc3NhZ2UucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWNvbnRyb2wudmFsaWRhdGUoKSkge1xyXG4gICAgICAgICAgICAgICAgdmFsaWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHZhbGlkO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZm9ybVRvV2lyZSwgYXJncykge1xyXG4gICAgcmV0dXJuIG5ldyBFc3BhbGllckZvcm0oZm9ybVRvV2lyZSwgYXJncyk7XHJcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogYzovZ2l0L0VzcGFsaWVySlMvc3JjL2pzL2VzcGFsaWVyLmZvcm1zLmpzXG4gKiovIiwiaW1wb3J0IGNvcmUgZnJvbSBcIi4vZXNwYWxpZXIuY29yZVwiO1xyXG5pbXBvcnQgeyBSZXF1aXJlZCwgRW1haWwsIERhdGUsIFJlcXVpcmVkRGVwZW5kZW50IH0gZnJvbSBcIi4vZXNwYWxpZXIudmFsaWRhdGlvblwiO1xyXG5pbXBvcnQgbWVzc2FnZUZhY3RvcnkgZnJvbSBcIi4vZXNwYWxpZXIubWVzc2FnZUZhY3RvcnlcIjtcclxuXHJcbmNsYXNzIEZvcm1Db250cm9sIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRyb2wsIGZvcm0sIHZhbGlkYXRpb25zLCBleHBsaWNpdFZhbGlkYXRpb25zKSB7XHJcbiAgICAgICAgdmFyIGNvbnRyb2xUeXBlID0gY29udHJvbC50eXBlID8gY29udHJvbC50eXBlIDogY29udHJvbC5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpO1xyXG4gICAgICAgIHZhciBsb3dlckNhc2VJZCA9IGNvbnRyb2xUeXBlID09IFwicmFkaW9cIiA/IGNvbnRyb2wubmFtZS50b0xvd2VyQ2FzZSgpIDogY29udHJvbC5pZC50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgICBpZiAoIWxvd2VyQ2FzZUlkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkVsZW1lbnRzIG11c3QgaGF2ZSBhbiBJZCB0byBiZSBwcm9wZXJseSB3aXJlZCB0byBhbiBFc3BhbGllciBmb3JtIGNvbnRyb2wuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jb250cm9sID0gY29udHJvbDtcclxuICAgICAgICB0aGlzLmZvcm0gPSBmb3JtO1xyXG4gICAgICAgIHZhciBncm91cDtcclxuICAgICAgICBsZXQgcmVxdWlyZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgc3dpdGNoIChjb250cm9sVHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwicmFkaW9cIjpcclxuICAgICAgICAgICAgICAgIGdyb3VwID0gY29yZS5jbG9zZXN0KGNvbnRyb2wsIFwiLnJhZGlvLWdyb3VwXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCByYWRpb3MgPSBjb3JlLmZpbmQoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScsIGdyb3VwKTtcclxuICAgICAgICAgICAgICAgIGxldCBkZXBlbmRlbnRzID0gbmV3IE1hcCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHJhZGlvIG9mIHJhZGlvcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyYWRpby5yZXF1aXJlZCB8fCByYWRpby5nZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb3JlLmFkZEV2ZW50TGlzdGVuZXIocmFkaW8sIFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrZXkgb2YgZGVwZW5kZW50cy5rZXlzKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGRlcGVuZGVudCBvZiBkZXBlbmRlbnRzLmdldChrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVwZW5kZW50LmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFkZXBlbmRlbnRzLmhhcyhyYWRpbykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgZGVwZW5kZW50IG9mIGRlcGVuZGVudHMuZ2V0KHJhZGlvKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVwZW5kZW50LnNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVxdWlyZWREZXBlbmRlbnRzU2VsZWN0b3IgPSByYWRpby5nZXRBdHRyaWJ1dGUoXCJkYXRhLXJlcXVpcmVcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghcmVxdWlyZWREZXBlbmRlbnRzU2VsZWN0b3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVxdWlyZWREZXBlbmRlbnRzID0gY29yZS5maW5kKHJlcXVpcmVkRGVwZW5kZW50c1NlbGVjdG9yLCB0aGlzLmZvcm0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkZXBlbmRlbnRDb250cm9scyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCByZXF1aXJlZERlcGVuZGVudCBvZiByZXF1aXJlZERlcGVuZGVudHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRlcGVuZGVudENvbnRyb2wgPSBmYWN0b3J5KHJlcXVpcmVkRGVwZW5kZW50LCBmb3JtLCB7IHJlcXVpcmVkOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9ucy5wdXNoKG5ldyBSZXF1aXJlZERlcGVuZGVudCh0aGlzLCByYWRpby52YWx1ZSwgZGVwZW5kZW50Q29udHJvbCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXBlbmRlbnRDb250cm9sLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVwZW5kZW50Q29udHJvbHMucHVzaChkZXBlbmRlbnRDb250cm9sKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRlcGVuZGVudHMuc2V0KHJhZGlvLCBkZXBlbmRlbnRDb250cm9scyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImNoZWNrYm94XCI6XHJcbiAgICAgICAgICAgICAgICBncm91cCA9IGNvcmUuY2xvc2VzdChjb250cm9sLCBcIi5jaGVja2JveFwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZW1haWxcIjpcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25zLnB1c2gobmV3IEVtYWlsKHRoaXMpKTtcclxuICAgICAgICAgICAgICAgIGdyb3VwID0gY29yZS5jbG9zZXN0KGNvbnRyb2wsIFwiLmZvcm0tZ3JvdXBcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImRhdGVcIjpcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25zLnB1c2gobmV3IERhdGUodGhpcykpO1xyXG4gICAgICAgICAgICAgICAgZ3JvdXAgPSBjb3JlLmNsb3Nlc3QoY29udHJvbCwgXCIuZm9ybS1ncm91cFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY29udHJvbC5kYXRlcGlja2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbC5kYXRlcGlja2VyKCkuYXR0cihcInR5cGVcIiwgXCJ0ZXh0XCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBncm91cCA9IGNvcmUuY2xvc2VzdChjb250cm9sLCBcIi5mb3JtLWdyb3VwXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlRmFjdG9yeS5jcmVhdGUoe1xyXG4gICAgICAgICAgICBhdHRhY2hUbzogZ3JvdXAsXHJcbiAgICAgICAgICAgIG1lc3NhZ2VBdHRhY2htZW50OiBtZXNzYWdlRmFjdG9yeS5tZXNzYWdlQXR0YWNobWVudC5GbG93LFxyXG4gICAgICAgICAgICBvblJlbW92ZWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGNvcmUucmVtb3ZlQ2xhc3MoZ3JvdXAsIFwiaGFzLWVycm9yXCIpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbkFkZGVkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBjb3JlLmFkZENsYXNzKGdyb3VwLCBcImhhcy1lcnJvclwiKTtcclxuICAgICAgICAgICAgICAgIC8vVE9ETzogR2V0IHJpZCBvZiBqUXVlcnlcclxuICAgICAgICAgICAgICAgICQoZ3JvdXApLnZlbG9jaXR5KFwiY2FsbG91dC50YWRhXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogNTAwXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmdyb3VwID0gZ3JvdXA7XHJcbiAgICAgICAgdGhpcy5vcmlnaW5hbERpc3BsYXkgPSB0aGlzLmdyb3VwLnN0eWxlLmRpc3BsYXk7XHJcblxyXG4gICAgICAgIGlmIChleHBsaWNpdFZhbGlkYXRpb25zLnJlcXVpcmVkIHx8IHJlcXVpcmVkIHx8IGNvbnRyb2wucmVxdWlyZWQgfHwgY29udHJvbC5nZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiKSkge1xyXG4gICAgICAgICAgICB2YWxpZGF0aW9ucy5wdXNoKG5ldyBSZXF1aXJlZCh0aGlzKSk7XHJcbiAgICAgICAgICAgIGNvcmUuYWRkQ2xhc3MoZ3JvdXAsIFwicmVxdWlyZWRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb250cm9sLnNldEF0dHJpYnV0ZShsb3dlckNhc2VJZCwgXCJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgdmFsKCkge1xyXG4gICAgICAgIGxldCBjb250cm9sVHlwZSA9IHRoaXMuY29udHJvbC50eXBlID8gdGhpcy5jb250cm9sLnR5cGUgOiB0aGlzLmNvbnRyb2wuZ2V0QXR0cmlidXRlKFwidHlwZVwiKTtcclxuXHJcbiAgICAgICAgc3dpdGNoIChjb250cm9sVHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2hlY2tib3hcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb3JlLm1hdGNoZXModGhpcy5jb250cm9sLCBcIjpjaGVja2VkXCIpID8gdGhpcy5jb250cm9sLnZhbHVlIDogdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICBjYXNlIFwicmFkaW9cIjpcclxuICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZCA9IGNvcmUuZmluZChgW25hbWU9XCIke3RoaXMuY29udHJvbC5uYW1lfVwiXTpjaGVja2VkYCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZWN0ZWQubGVuZ3RoID09IDEgPyBzZWxlY3RlZFswXS52YWx1ZSA6IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRyb2wudmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhpZGUoKSB7XHJcbiAgICAgICAgdGhpcy5ncm91cC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvdygpIHtcclxuICAgICAgICB0aGlzLmdyb3VwLnN0eWxlLmRpc3BsYXkgPSB0aGlzLm9yaWdpbmFsRGlzcGxheTtcclxuICAgIH1cclxufVxyXG5cclxubGV0IGZhY3RvcnkgPSBmdW5jdGlvbiAoY29udHJvbCwgZm9ybSwgZXhwbGljaXRWYWxpZGF0aW9ucykge1xyXG4gICAgZXhwbGljaXRWYWxpZGF0aW9ucyA9IGV4cGxpY2l0VmFsaWRhdGlvbnMgPyBleHBsaWNpdFZhbGlkYXRpb25zIDoge307XHJcbiAgICBsZXQgdmFsaWRhdGlvbnMgPSBbXTtcclxuICAgIGxldCBmb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbChjb250cm9sLCBmb3JtLCB2YWxpZGF0aW9ucywgZXhwbGljaXRWYWxpZGF0aW9ucyk7XHJcblxyXG4gICAgZm9ybUNvbnRyb2wudmFsaWRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IGVycm9ycyA9IFtdO1xyXG4gICAgICAgIGxldCBoYXNFcnJvcnMgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKHZhbGlkYXRpb25zKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHZhbGlkYXRpb24gb2YgdmFsaWRhdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIGlmICghdmFsaWRhdGlvbi5pc1ZhbGlkKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBoYXNFcnJvcnMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0aW9uLm1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLnB1c2godmFsaWRhdGlvbi5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChlcnJvcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBmb3JtQ29udHJvbC5tZXNzYWdlLnNob3coe1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JzLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZVR5cGU6IG1lc3NhZ2VGYWN0b3J5Lm1lc3NhZ2VUeXBlLkVycm9yXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICFoYXNFcnJvcnM7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBmb3JtQ29udHJvbDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZhY3Rvcnk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogYzovZ2l0L0VzcGFsaWVySlMvc3JjL2pzL2VzcGFsaWVyLmZvcm1zLmNvbnRyb2wuanNcbiAqKi8iLCJpbXBvcnQgY29yZSBmcm9tIFwiLi9lc3BhbGllci5jb3JlXCI7XHJcbmltcG9ydCBmb3JtQ29udHJvbCBmcm9tIFwiLi9lc3BhbGllci5mb3Jtcy5jb250cm9sXCI7XHJcblxyXG5jbGFzcyBWYWxpZGF0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRyb2wpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1ZhbGlkID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk11c3QgaGF2ZSBhbiBpc1ZhbGlkIG1ldGhvZC5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5tZXNzYWdlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk11c3QgYWRkIGEgbWVzc2FnZSBwcmlvciB0byBjYWxsaW5nIHN1cGVyLlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY29udHJvbCA9IGNvbnRyb2w7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIFJlcXVpcmVkIGV4dGVuZHMgVmFsaWRhdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250cm9sKSB7XHJcbiAgICAgICAgc3VwZXIoY29udHJvbCk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNWYWxpZCgpIHtcclxuICAgICAgICByZXR1cm4gIWNvcmUuaXNFbXB0eU9yU3BhY2VzKHRoaXMuY29udHJvbC52YWwoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG1lc3NhZ2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiRmllbGQgaXMgcmVxdWlyZWQuXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIEVtYWlsIGV4dGVuZHMgVmFsaWRhdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250cm9sKSB7XHJcbiAgICAgICAgc3VwZXIoY29udHJvbCk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNWYWxpZCgpIHtcclxuICAgICAgICByZXR1cm4gY29yZS5pc0VtYWlsKHRoaXMuY29udHJvbC52YWwoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG1lc3NhZ2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiSW52YWxpZCBlbWFpbCBhZGRyZXNzLlwiO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBEYXRlIGV4dGVuZHMgVmFsaWRhdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250cm9sKSB7XHJcbiAgICAgICAgc3VwZXIoY29udHJvbCk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNWYWxpZCgpIHtcclxuICAgICAgICByZXR1cm4gY29yZS5pc0RhdGUodGhpcy5jb250cm9sLnZhbCgpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbWVzc2FnZSgpIHtcclxuICAgICAgICByZXR1cm4gXCJJbnZhbGlkIGRhdGUuXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIFJlcXVpcmVkRGVwZW5kZW50IGV4dGVuZHMgVmFsaWRhdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250cm9sLCB3aGVuVmFsLCBkZXBlbmRlbnQpIHtcclxuICAgICAgICBzdXBlcihjb250cm9sKTtcclxuICAgICAgICB0aGlzLndoZW5WYWwgPSB3aGVuVmFsO1xyXG4gICAgICAgIHRoaXMuZGVwZW5kZW50ID0gZGVwZW5kZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGlzVmFsaWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udHJvbC52YWwoKSAhPT0gdGhpcy53aGVuVmFsIHx8IHRoaXMuY29udHJvbC52YWwoKSA9PT0gdGhpcy53aGVuVmFsICYmIHRoaXMuZGVwZW5kZW50LnZhbGlkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG1lc3NhZ2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBSZXF1aXJlZCwgRW1haWwsIERhdGUsIFJlcXVpcmVkRGVwZW5kZW50IH07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogYzovZ2l0L0VzcGFsaWVySlMvc3JjL2pzL2VzcGFsaWVyLnZhbGlkYXRpb24uanNcbiAqKi8iLCJpbXBvcnQgY29yZSBmcm9tIFwiLi9lc3BhbGllci5jb3JlXCI7XHJcbmltcG9ydCBjb21tb24gZnJvbSBcIi4vZXNwYWxpZXIuY29tbW9uXCI7XHJcblxyXG5jbGFzcyBEaWFsb2cge1xyXG4gICAgY29uc3RydWN0b3IoYXJncykge1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQ6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgYnV0dG9uczogW11cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAkLmV4dGVuZCh0aGlzLnNldHRpbmdzLCBhcmdzKTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnNldHRpbmdzLmVsZW1lbnQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IG11c3QgcGFzcyBhbiBlbGVtZW50LlwiKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2V0dGluZ3MuZWxlbWVudC5sZW5ndGggIT09IDEpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZWxlbWVudCBtdXN0IGhhdmUgZXhhY3RseSBvbmUgcm9vdCBlbGVtZW50LlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2hvdygpIHtcclxuICAgICAgICBjb3JlLmhpZGVNYWluTWVzc2FnZSgpO1xyXG4gICAgICAgIGNvbW1vbi5zaG93VmVsbHVtKCk7XHJcbiAgICAgICAgbGV0IGRpYWxvZyA9IHRoaXMuc2V0dGluZ3MuZWxlbWVudDtcclxuICAgICAgICBkaWFsb2cuY3NzKFwicG9zaXRpb25cIiwgXCJhYnNvbHV0ZVwiKTtcclxuICAgICAgICBjb21tb24uYm9keS5hcHBlbmQoZGlhbG9nKTtcclxuICAgICAgICB0aGlzLmNlbnRlcigpO1xyXG4gICAgICAgIGRpYWxvZy5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuXHJcbiAgICAgICAgZGlhbG9nLnZlbG9jaXR5KFwidHJhbnNpdGlvbi53aGlybEluXCIsIHtcclxuICAgICAgICAgICAgZHVyYXRpb246IDQ1MFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb3JlLmFkZEV2ZW50TGlzdGVuZXIoZGlhbG9nWzBdLCBcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBidXR0b24gb2YgdGhpcy5zZXR0aW5ncy5idXR0b25zKSB7XHJcbiAgICAgICAgICAgICAgICAvL1RPRE86IE1heWJlIGlzIGEgc2VsZWN0b3IgaW5zdGVhZD9cclxuICAgICAgICAgICAgICAgIGlmIChidXR0b24uaWQgPT09IGV2ZW50LnRhcmdldC5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5oYW5kbGVyKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGUoKSB7XHJcbiAgICAgICAgdmFyIGRpYWxvZyA9ICQodGhpcy5zZXR0aW5ncy5lbGVtZW50KTtcclxuICAgICAgICBkaWFsb2cudmVsb2NpdHkoXCJ0cmFuc2l0aW9uLndoaXJsT3V0XCIsIHtcclxuICAgICAgICAgICAgZHVyYXRpb246IDE1MCxcclxuICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGRpYWxvZy5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICQoXCIjbm90aWZpY2F0aW9uTWVzc2FnZVwiKS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJChcIi5kaWFsb2dcIikubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb21tb24uaGlkZVZlbGx1bSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgY2VudGVyKCkge1xyXG4gICAgICAgIGxldCB3aW5kb3dIZWlnaHQgPSBjb21tb24ud2luZG93LmhlaWdodCgpO1xyXG4gICAgICAgIGxldCBkaWFsb2cgPSB0aGlzLnNldHRpbmdzLmVsZW1lbnQ7XHJcbiAgICAgICAgbGV0IHNjcm9sbFRvcCA9IGNvbW1vbi53aW5kb3cuc2Nyb2xsVG9wKCk7XHJcbiAgICAgICAgbGV0IGhlaWdodCA9IGRpYWxvZy5oZWlnaHQoKTtcclxuICAgICAgICBsZXQgdG9wID0gKHdpbmRvd0hlaWdodCAvIDIpIC0gKGhlaWdodCAvIDIpICsgc2Nyb2xsVG9wO1xyXG4gICAgICAgIHRvcCA9IHRvcCA+IDAgPyB0b3AgOiAwO1xyXG4gICAgICAgIGRpYWxvZy5jc3MoXCJ0b3BcIiwgdG9wKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGFyZ3MpIHtcclxuICAgIHJldHVybiBuZXcgRGlhbG9nKGFyZ3MpO1xyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogYzovZ2l0L0VzcGFsaWVySlMvc3JjL2pzL2VzcGFsaWVyLmRpYWxvZy5qc1xuICoqLyIsImltcG9ydCBjb3JlIGZyb20gXCIuL2VzcGFsaWVyLmNvcmVcIjtcclxuXHJcbmxldCBrZXlzID0ge1xyXG4gICAgY29udGFpbmVyOiBuZXcgT2JqZWN0KCksXHJcbiAgICByZXN1bHQ6IG5ldyBPYmplY3QoKSxcclxuICAgIGN1cnJlbnRTdGVwOiBuZXcgT2JqZWN0KCksXHJcbiAgICBzdGVwczogbmV3IE9iamVjdCgpLFxyXG4gICAgdHJhbnN2ZXJzZWQ6IG5ldyBPYmplY3QoKSxcclxuICAgIGluZGV4SGVhZE5vZGVzOiBuZXcgT2JqZWN0KCksXHJcbiAgICB2YWx1ZUNoYW5nZWQ6IG5ldyBPYmplY3QoKVxyXG59XHJcblxyXG5sZXQgc2V0U3RlcFN0YXRlcyA9IChncmFwaCkgPT4ge1xyXG4gICAgbGV0IGhlYWROb2RlcyA9IGdyYXBoLl9pbnRlcm5hbHMuZ2V0KGtleXMuaW5kZXhIZWFkTm9kZXMpO1xyXG4gICAgbGV0IG5vZGUgPSBncmFwaC5faW50ZXJuYWxzLmdldChrZXlzLmN1cnJlbnRTdGVwKTtcclxuICAgIGxldCBjdXJyZW50SW5kZXggPSBub2RlLnN0ZXBJbmRleDtcclxuICAgIGxldCBzdGVwcyA9IGdyYXBoLl9pbnRlcm5hbHMuZ2V0KGtleXMuc3RlcHMpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RlcHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoaSA8IGN1cnJlbnRJbmRleCkge1xyXG4gICAgICAgICAgICBzdGVwc1tpXS5jc3NDbGFzcyA9IFwiZ3JhcGgtc3RlcC1jb21wbGV0ZWRcIjtcclxuICAgICAgICAgICAgc3RlcHNbaV0uc3RhdHVzID0gXCJDb21wbGV0ZWRcIjtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaSA9PT0gY3VycmVudEluZGV4KSB7XHJcbiAgICAgICAgICAgIHN0ZXBzW2ldLmNzc0NsYXNzID0gXCJncmFwaC1zdGVwLWluLXByb2dyZXNzXCI7XHJcbiAgICAgICAgICAgIHN0ZXBzW2ldLnN0YXR1cyA9IFwiSW4gcHJvZ3Jlc3NcIjtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaSA+IGN1cnJlbnRJbmRleCkge1xyXG4gICAgICAgICAgICBzdGVwc1tpXS5jc3NDbGFzcyA9IFwiZ3JhcGgtc3RlcC1ub3Qtc3RhcnRlZFwiO1xyXG4gICAgICAgICAgICBzdGVwc1tpXS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHN0ZXBzW2ldLnN0YXR1cyA9IFwiTm90IHN0YXJ0ZWRcIjtcclxuICAgICAgICAgICAgaGVhZE5vZGVzLnNldChpLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICghaGVhZE5vZGVzLmdldChjdXJyZW50SW5kZXgpKSB7XHJcbiAgICAgICAgaGVhZE5vZGVzLnNldChjdXJyZW50SW5kZXgsIG5vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIG5vZGUucmVuZGVySW4oZ3JhcGguX2ludGVybmFscy5nZXQoa2V5cy5jb250YWluZXIpLCBncmFwaC5faW50ZXJuYWxzLmdldChrZXlzLnJlc3VsdCksIHN0ZXBzKTtcclxuXHJcbiAgICBsZXQgdmFsdWVDaGFuZ2VkID0gZ3JhcGguX2ludGVybmFscy5nZXQoa2V5cy52YWx1ZUNoYW5nZWQpO1xyXG5cclxuICAgIGlmICh2YWx1ZUNoYW5nZWQpIHtcclxuICAgICAgICB2YWx1ZUNoYW5nZWQoZ3JhcGguX2ludGVybmFscy5nZXQoa2V5cy5yZXN1bHQpKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JhcGgge1xyXG4gICAgY29uc3RydWN0b3IoYXJncykge1xyXG4gICAgICAgIHRoaXMuX2ludGVybmFscyA9IG5ldyBXZWFrTWFwKCk7XHJcblxyXG4gICAgICAgIGlmICghYXJncy5jb250YWluZXIubm9kZU5hbWUpIHtcclxuICAgICAgICAgICAgLy9OT1RFOiBUaGlzIGlzIHByb2JhYmx5IGEgalF1ZXJ5IHNlbGVjdGlvbiBhcnJheS5cclxuICAgICAgICAgICAgYXJncy5jb250YWluZXIgPSBhcmdzLmNvbnRhaW5lclswXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBoZWFkTm9kZXMgPSBuZXcgTWFwKCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2ludGVybmFscy5zZXQoa2V5cy5jb250YWluZXIsIGFyZ3MuY29udGFpbmVyKTtcclxuICAgICAgICB0aGlzLl9pbnRlcm5hbHMuc2V0KGtleXMucmVzdWx0LCBjb3JlLmV4dGVuZChhcmdzLmRlZmF1bHQsIHt9KSk7XHJcbiAgICAgICAgdGhpcy5faW50ZXJuYWxzLnNldChrZXlzLmN1cnJlbnRTdGVwLCBhcmdzLmhlYWQpO1xyXG4gICAgICAgIHRoaXMuX2ludGVybmFscy5zZXQoa2V5cy5zdGVwcywgYXJncy5zdGVwcyk7XHJcbiAgICAgICAgdGhpcy5faW50ZXJuYWxzLnNldChrZXlzLnZhbHVlQ2hhbmdlZCwgYXJncy52YWx1ZUNoYW5nZWQpO1xyXG4gICAgICAgIHRoaXMuX2ludGVybmFscy5zZXQoa2V5cy50cmFuc3ZlcnNlZCwgW10pO1xyXG4gICAgICAgIHRoaXMuX2ludGVybmFscy5zZXQoa2V5cy5pbmRleEhlYWROb2RlcywgaGVhZE5vZGVzKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcmdzLnN0ZXBzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGFyZ3Muc3RlcHNbaV0uaW5kZXggPSBpO1xyXG4gICAgICAgICAgICBoZWFkTm9kZXMuc2V0KGksIGZhbHNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGhlYWROb2Rlcy5zZXQoMCwgYXJncy5oZWFkKTtcclxuICAgICAgICB0aGlzLmdvdG8oMCk7XHJcblxyXG4gICAgICAgIGNvcmUuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLl9pbnRlcm5hbHMuZ2V0KGtleXMuY29udGFpbmVyKSwgXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZXZlbnQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWdyYXBoLWV2ZW50XCIpO1xyXG5cclxuICAgICAgICAgICAgc3dpdGNoIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIm5leHRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiYmFja1wiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJldmlvdXMoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiZ290b1wiOlxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtZ3JhcGgtaW5kZXhcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nb3RvKE51bWJlcihpbmRleCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZ290byhpbmRleCkge1xyXG4gICAgICAgIGxldCBoZWFkTm9kZXMgPSB0aGlzLl9pbnRlcm5hbHMuZ2V0KGtleXMuaW5kZXhIZWFkTm9kZXMpO1xyXG4gICAgICAgIGxldCBub2RlVG9Hb1RvID0gaGVhZE5vZGVzLmdldChpbmRleCk7XHJcbiAgICAgICAgbGV0IHRyYW5zdmVyc2VkID0gdGhpcy5faW50ZXJuYWxzLmdldChrZXlzLnRyYW5zdmVyc2VkKTtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5faW50ZXJuYWxzLmdldChrZXlzLnJlc3VsdCk7XHJcblxyXG4gICAgICAgIGlmICh0cmFuc3ZlcnNlZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGxldCBwb3BwZWROb2RlO1xyXG5cclxuICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgICAgcG9wcGVkTm9kZSA9IHRyYW5zdmVyc2VkLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHJlc3VsdFtwb3BwZWROb2RlLnByb3BlcnR5TmFtZV07XHJcbiAgICAgICAgICAgIH0gd2hpbGUgKHBvcHBlZE5vZGUgIT09IG5vZGVUb0dvVG8pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5faW50ZXJuYWxzLnNldChrZXlzLmN1cnJlbnRTdGVwLCBub2RlVG9Hb1RvKTtcclxuICAgICAgICBzZXRTdGVwU3RhdGVzKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG5leHQoKSB7XHJcbiAgICAgICAgbGV0IHN0ZXAgPSB0aGlzLl9pbnRlcm5hbHMuZ2V0KGtleXMuY3VycmVudFN0ZXApO1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IHN0ZXAuZ2V0VmFsdWUoKTtcclxuXHJcbiAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IG5leHRTdGVwID0gc3RlcC5uZXh0KCk7XHJcblxyXG4gICAgICAgIGlmIChzdGVwLnN0ZXBJbmRleCA+IG5leHRTdGVwLnN0ZXBJbmRleCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHN0ZXAgaW5kZXguIEl0IG11c3QgYmUgZXF1YWwgdG8gb3IgZ3JlYXRlciB0aGFuIHRoZSBsYXN0IHN0ZXAncyBpbmRleC5cIilcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB0cmFuc3ZlcnNlZCA9IHRoaXMuX2ludGVybmFscy5nZXQoa2V5cy50cmFuc3ZlcnNlZCk7XHJcbiAgICAgICAgdHJhbnN2ZXJzZWQucHVzaChzdGVwKTtcclxuICAgICAgICBjb3JlLnNldFByb3BlcnR5KHRoaXMuX2ludGVybmFscy5nZXQoa2V5cy5yZXN1bHQpLCBzdGVwLnByb3BlcnR5TmFtZSwgdmFsdWUpO1xyXG4gICAgICAgIHRoaXMuX2ludGVybmFscy5zZXQoa2V5cy5jdXJyZW50U3RlcCwgbmV4dFN0ZXApO1xyXG4gICAgICAgIHNldFN0ZXBTdGF0ZXModGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJldmlvdXMoKSB7XHJcbiAgICAgICAgbGV0IHRyYW5zdmVyc2VkID0gdGhpcy5faW50ZXJuYWxzLmdldChrZXlzLnRyYW5zdmVyc2VkKTtcclxuICAgICAgICBsZXQgbGFzdE5vZGUgPSB0cmFuc3ZlcnNlZC5wb3AoKTtcclxuICAgICAgICBkZWxldGUgdGhpcy5faW50ZXJuYWxzLmdldChrZXlzLnJlc3VsdClbbGFzdE5vZGUucHJvcGVydHlOYW1lXTtcclxuICAgICAgICB0aGlzLl9pbnRlcm5hbHMuc2V0KGtleXMuY3VycmVudFN0ZXAsIGxhc3ROb2RlKTtcclxuICAgICAgICBzZXRTdGVwU3RhdGVzKHRoaXMpO1xyXG4gICAgfVxyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogYzovZ2l0L0VzcGFsaWVySlMvc3JjL2pzL2VzcGFsaWVyLmdyYXBoLmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JhcGhOb2RlIHtcclxuICAgIGNvbnN0cnVjdG9yKGFyZ3MpIHtcclxuICAgICAgICBpZiAodGhpcy5jb25zdHJ1Y3RvciA9PT0gR3JhcGhOb2RlKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJBYnN0cmFjdCBjbGFzcyBHcmFwaE5vZGUgY2Fubm90IGJlIGluc3RhbnRpYXRlZC5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5nZXRWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHcmFwaE5vZGUgZGVyaXZhdGlvbnMgbXVzdCBpbXBsbWVudCBnZXRWYWx1ZSgpXCIpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5yZW5kZXJJbiA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdyYXBoTm9kZSBkZXJpdmF0aW9ucyBtdXN0IGltcGxlbWVudCByZW5kZXJJbihjb250YWluZXIsIHJlc3VsdCwgc3RlcHMpXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcGVydHlOYW1lID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR3JhcGhOb2RlIGRlcml2YXRpb25zIG11c3QgZGVmaW5lIGEgcHJvcGVydHlOYW1lIHRoYXQgd2lsbCBiZSBzZXQgd2l0aCBpdCdzIHZhbHVlLlwiKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubmV4dCA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdyYXBoTm9kZSBkZXJpdmF0aW9ucyBtdXN0IGltcGxlbWVudCBhIG1ldGhvZCBuZXh0KCkgdGhhdCByZXR1cm5zIHRoZSBuZXh0IG5vZGUgaW4gdGhlIGdyYXBoLlwiKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGM6L2dpdC9Fc3BhbGllckpTL3NyYy9qcy9lc3BhbGllci5ncmFwaC5ub2RlLmpzXG4gKiovIiwiaW1wb3J0IGVzcGFsaWVyIGZyb20gXCIuLi8uLi9lc3BhbGllclwiO1xyXG5pbXBvcnQgU3RlcDEgZnJvbSBcIi4vZ3JhcGhOb2Rlc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVtb0dyYXBoIGV4dGVuZHMgZXNwYWxpZXIuR3JhcGgge1xyXG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyLCB2YWx1ZUNoYW5nZWQpIHtcclxuICAgICAgICBzdXBlcih7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lcixcclxuICAgICAgICAgICAgZGVmYXVsdDoge30sXHJcbiAgICAgICAgICAgIGhlYWQ6IG5ldyBTdGVwMSgpLFxyXG4gICAgICAgICAgICBzdGVwczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlN0ZXAgMVwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlN0ZXAgMlwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlN0ZXAgM1wiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIHZhbHVlQ2hhbmdlZFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogYzovZ2l0L0VzcGFsaWVySlMvc3JjL2pzL2RlbW8vZ3JhcGgvZGVtb0dyYXBoLmpzXG4gKiovIiwiaW1wb3J0IGVzcGFsaWVyIGZyb20gXCIuLi8uLi9lc3BhbGllclwiO1xyXG5pbXBvcnQgZ3JhcGhQcm9ncmVzcyBmcm9tIFwiLi90ZW1wbGF0ZXMvZ3JhcGhQcm9ncmVzc1wiO1xyXG5cclxubGV0IG5leHRLZXkgPSBuZXcgT2JqZWN0KCk7XHJcblxyXG5sZXQgZ2V0U3RlcENvbnRlbnQgPSAoc3RlcElkLCBzdGVwVGV4dCwgaGFzTmV4dCwgaGFzQmFjaykgPT4ge1xyXG4gICAgbGV0IHN0ZXBDb250ZW50ID0gYDxoMyBpZD1cIiR7c3RlcElkfVwiPiR7c3RlcFRleHR9PC9oMz5gO1xyXG4gICAgXHJcbiAgICBpZihoYXNCYWNrKSB7XHJcbiAgICAgICAgc3RlcENvbnRlbnQgKz0gYDxhIGRhdGEtZ3JhcGgtZXZlbnQ9J2JhY2snIGhyZWY9J2phdmFzY3JpcHQ6IHZvaWQoMCk7JyBjbGFzcz0nYnRuIGJ0bi1wcmltYXJ5Jz5CYWNrPC9hPiBgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmKGhhc05leHQpIHtcclxuICAgICAgICBzdGVwQ29udGVudCArPSBgPGEgZGF0YS1ncmFwaC1ldmVudD1cIm5leHRcIiBocmVmPVwiamF2YXNjcmlwdDogdm9pZCgwKTtcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPk5leHQ8L2E+YDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIHN0ZXBDb250ZW50O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RlcDEgZXh0ZW5kcyBlc3BhbGllci5HcmFwaE5vZGUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLl9pbnRlcm5hbHMgPSBuZXcgV2Vha01hcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFZhbHVlKCkge1xyXG4gICAgICAgIHJldHVybiBcIlRoaXMgaXMgc3RlcCAxXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVySW4oY29udGFpbmVyLCByZXN1bHQsIHN0ZXBzKSB7XHJcbiAgICAgICAgbGV0IHByb2dyZXNzID0gZ3JhcGhQcm9ncmVzcyhzdGVwcyk7XHJcbiAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IHByb2dyZXNzICsgZ2V0U3RlcENvbnRlbnQoXCJzdGVwLTFcIiwgdGhpcy5nZXRWYWx1ZSgpLCB0cnVlLCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmV4dCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2ludGVybmFscy5oYXMobmV4dEtleSkpIHtcclxuICAgICAgICAgICAgdGhpcy5faW50ZXJuYWxzLnNldChuZXh0S2V5LCBuZXcgU3RlcDJkb3QxKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludGVybmFscy5nZXQobmV4dEtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHByb3BlcnR5TmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gXCJTdGVwT25lXCI7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHN0ZXBJbmRleCgpIHtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgU3RlcDJkb3QxIGV4dGVuZHMgZXNwYWxpZXIuR3JhcGhOb2RlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5faW50ZXJuYWxzID0gbmV3IFdlYWtNYXAoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRWYWx1ZSgpIHtcclxuICAgICAgICByZXR1cm4gXCJUaGlzIGlzIHN0ZXAgMi4xXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVySW4oY29udGFpbmVyLCByZXN1bHQsIHN0ZXBzKSB7XHJcbiAgICAgICAgbGV0IHByb2dyZXNzID0gZ3JhcGhQcm9ncmVzcyhzdGVwcyk7XHJcbiAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IHByb2dyZXNzICsgZ2V0U3RlcENvbnRlbnQoXCJzdGVwLTJkb3QxXCIsIHRoaXMuZ2V0VmFsdWUoKSwgdHJ1ZSwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmV4dCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2ludGVybmFscy5oYXMobmV4dEtleSkpIHtcclxuICAgICAgICAgICAgdGhpcy5faW50ZXJuYWxzLnNldChuZXh0S2V5LCBuZXcgU3RlcDJkb3QyKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludGVybmFscy5nZXQobmV4dEtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHByb3BlcnR5TmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gXCJTdGVwVHdvRG90T25lXCI7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHN0ZXBJbmRleCgpIHtcclxuICAgICAgICByZXR1cm4gMTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgU3RlcDJkb3QyIGV4dGVuZHMgZXNwYWxpZXIuR3JhcGhOb2RlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5faW50ZXJuYWxzID0gbmV3IFdlYWtNYXAoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRWYWx1ZSgpIHtcclxuICAgICAgICByZXR1cm4gXCJUaGlzIGlzIHN0ZXAgMi4yXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVySW4oY29udGFpbmVyLCByZXN1bHQsIHN0ZXBzKSB7XHJcbiAgICAgICAgbGV0IHByb2dyZXNzID0gZ3JhcGhQcm9ncmVzcyhzdGVwcyk7XHJcbiAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IHByb2dyZXNzICsgZ2V0U3RlcENvbnRlbnQoXCJzdGVwLTJkb3QyXCIsIHRoaXMuZ2V0VmFsdWUoKSwgdHJ1ZSwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmV4dCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2ludGVybmFscy5oYXMobmV4dEtleSkpIHtcclxuICAgICAgICAgICAgdGhpcy5faW50ZXJuYWxzLnNldChuZXh0S2V5LCBuZXcgU3RlcDMoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5faW50ZXJuYWxzLmdldChuZXh0S2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcHJvcGVydHlOYW1lKCkge1xyXG4gICAgICAgIHJldHVybiBcIlN0ZXBUd29Eb3RUd29cIjtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc3RlcEluZGV4KCkge1xyXG4gICAgICAgIHJldHVybiAxO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBTdGVwMyBleHRlbmRzIGVzcGFsaWVyLkdyYXBoTm9kZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuX2ludGVybmFscyA9IG5ldyBXZWFrTWFwKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VmFsdWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiVGhpcyBpcyBzdGVwIDNcIjtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJJbihjb250YWluZXIsIHJlc3VsdCwgc3RlcHMpIHtcclxuICAgICAgICBsZXQgcHJvZ3Jlc3MgPSBncmFwaFByb2dyZXNzKHN0ZXBzKTtcclxuICAgICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gcHJvZ3Jlc3MgKyBnZXRTdGVwQ29udGVudChcInN0ZXAtM1wiLCB0aGlzLmdldFZhbHVlKCksIHRydWUsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIG5leHQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pbnRlcm5hbHMuaGFzKG5leHRLZXkpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2ludGVybmFscy5zZXQobmV4dEtleSwgbmV3IFN0ZXA0KCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludGVybmFscy5nZXQobmV4dEtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHByb3BlcnR5TmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gXCJTdGVwVGhyZWVcIjtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc3RlcEluZGV4KCkge1xyXG4gICAgICAgIHJldHVybiAyO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBTdGVwNCBleHRlbmRzIGVzcGFsaWVyLkdyYXBoTm9kZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFZhbHVlKCkge1xyXG4gICAgICAgIHJldHVybiBcIlRoaXMgaXMgc3RlcCA0XCI7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVySW4oY29udGFpbmVyLCByZXN1bHQsIHN0ZXBzKSB7XHJcbiAgICAgICAgbGV0IHByb2dyZXNzID0gZ3JhcGhQcm9ncmVzcyhzdGVwcyk7XHJcbiAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IHByb2dyZXNzICsgZ2V0U3RlcENvbnRlbnQoXCJzdGVwLTRcIiwgdGhpcy5nZXRWYWx1ZSgpLCBmYWxzZSwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmV4dCgpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHByb3BlcnR5TmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gXCJTdGVwVGhyZWVcIjtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc3RlcEluZGV4KCkge1xyXG4gICAgICAgIHJldHVybiAzO1xyXG4gICAgfVxyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogYzovZ2l0L0VzcGFsaWVySlMvc3JjL2pzL2RlbW8vZ3JhcGgvZ3JhcGhOb2Rlcy5qc1xuICoqLyIsInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcImM6XFxcXGdpdFxcXFxFc3BhbGllckpTXFxcXG5vZGVfbW9kdWxlc1xcXFxoYW5kbGViYXJzXFxcXHJ1bnRpbWUuanNcIik7XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCIxXCI6ZnVuY3Rpb24oZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBoZWxwZXIsIGFsaWFzMT1oZWxwZXJzLmhlbHBlck1pc3NpbmcsIGFsaWFzMj1cImZ1bmN0aW9uXCIsIGFsaWFzMz10aGlzLmVzY2FwZUV4cHJlc3Npb247XG5cbiAgcmV0dXJuIFwiICAgIDxhIGRhdGEtZ3JhcGgtZXZlbnQ9XFxcImdvdG9cXFwiIGRhdGEtZ3JhcGgtaW5kZXg9XFxcIlwiXG4gICAgKyBhbGlhczMoKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5pbmRleCB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuaW5kZXggOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMxKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMyID8gaGVscGVyLmNhbGwoZGVwdGgwLHtcIm5hbWVcIjpcImluZGV4XCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcXCIgY2xhc3M9XFxcImJ0biBcIlxuICAgICsgYWxpYXMzKCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMuY3NzQ2xhc3MgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmNzc0NsYXNzIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMSksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMiA/IGhlbHBlci5jYWxsKGRlcHRoMCx7XCJuYW1lXCI6XCJjc3NDbGFzc1wiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiPlwiXG4gICAgKyBhbGlhczMoKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy50aXRsZSB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAudGl0bGUgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMxKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMyID8gaGVscGVyLmNhbGwoZGVwdGgwLHtcIm5hbWVcIjpcInRpdGxlXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIiAoXCJcbiAgICArIGFsaWFzMygoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLnN0YXR1cyB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuc3RhdHVzIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMSksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMiA/IGhlbHBlci5jYWxsKGRlcHRoMCx7XCJuYW1lXCI6XCJzdGF0dXNcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSlcbiAgICArIFwiKTwvYT5cXHJcXG5cIjtcbn0sXCJjb21waWxlclwiOls2LFwiPj0gMi4wLjAtYmV0YS4xXCJdLFwibWFpblwiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxO1xuXG4gIHJldHVybiBcIjxzZWN0aW9uIGlkPVxcXCJncmFwaC1wcm9ncmVzc1xcXCI+XFxyXFxuXCJcbiAgICArICgoc3RhY2sxID0gaGVscGVycy5lYWNoLmNhbGwoZGVwdGgwLGRlcHRoMCx7XCJuYW1lXCI6XCJlYWNoXCIsXCJoYXNoXCI6e30sXCJmblwiOnRoaXMucHJvZ3JhbSgxLCBkYXRhLCAwKSxcImludmVyc2VcIjp0aGlzLm5vb3AsXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiPC9zZWN0aW9uPlwiO1xufSxcInVzZURhdGFcIjp0cnVlfSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2dyYXBoL3RlbXBsYXRlcy9ncmFwaFByb2dyZXNzLmhic1xuICoqIG1vZHVsZSBpZCA9IDE4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBDcmVhdGUgYSBzaW1wbGUgcGF0aCBhbGlhcyB0byBhbGxvdyBicm93c2VyaWZ5IHRvIHJlc29sdmVcbi8vIHRoZSBydW50aW1lIG9uIGEgc3VwcG9ydGVkIHBhdGguXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9janMvaGFuZGxlYmFycy5ydW50aW1lJylbJ2RlZmF1bHQnXTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGM6L2dpdC9Fc3BhbGllckpTL34vaGFuZGxlYmFycy9ydW50aW1lLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfaW1wb3J0ID0gcmVxdWlyZSgnLi9oYW5kbGViYXJzL2Jhc2UnKTtcblxudmFyIGJhc2UgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfaW1wb3J0KTtcblxuLy8gRWFjaCBvZiB0aGVzZSBhdWdtZW50IHRoZSBIYW5kbGViYXJzIG9iamVjdC4gTm8gbmVlZCB0byBzZXR1cCBoZXJlLlxuLy8gKFRoaXMgaXMgZG9uZSB0byBlYXNpbHkgc2hhcmUgY29kZSBiZXR3ZWVuIGNvbW1vbmpzIGFuZCBicm93c2UgZW52cylcblxudmFyIF9TYWZlU3RyaW5nID0gcmVxdWlyZSgnLi9oYW5kbGViYXJzL3NhZmUtc3RyaW5nJyk7XG5cbnZhciBfU2FmZVN0cmluZzIgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfU2FmZVN0cmluZyk7XG5cbnZhciBfRXhjZXB0aW9uID0gcmVxdWlyZSgnLi9oYW5kbGViYXJzL2V4Y2VwdGlvbicpO1xuXG52YXIgX0V4Y2VwdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfRXhjZXB0aW9uKTtcblxudmFyIF9pbXBvcnQyID0gcmVxdWlyZSgnLi9oYW5kbGViYXJzL3V0aWxzJyk7XG5cbnZhciBVdGlscyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9pbXBvcnQyKTtcblxudmFyIF9pbXBvcnQzID0gcmVxdWlyZSgnLi9oYW5kbGViYXJzL3J1bnRpbWUnKTtcblxudmFyIHJ1bnRpbWUgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfaW1wb3J0Myk7XG5cbnZhciBfbm9Db25mbGljdCA9IHJlcXVpcmUoJy4vaGFuZGxlYmFycy9uby1jb25mbGljdCcpO1xuXG52YXIgX25vQ29uZmxpY3QyID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX25vQ29uZmxpY3QpO1xuXG4vLyBGb3IgY29tcGF0aWJpbGl0eSBhbmQgdXNhZ2Ugb3V0c2lkZSBvZiBtb2R1bGUgc3lzdGVtcywgbWFrZSB0aGUgSGFuZGxlYmFycyBvYmplY3QgYSBuYW1lc3BhY2VcbmZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgdmFyIGhiID0gbmV3IGJhc2UuSGFuZGxlYmFyc0Vudmlyb25tZW50KCk7XG5cbiAgVXRpbHMuZXh0ZW5kKGhiLCBiYXNlKTtcbiAgaGIuU2FmZVN0cmluZyA9IF9TYWZlU3RyaW5nMlsnZGVmYXVsdCddO1xuICBoYi5FeGNlcHRpb24gPSBfRXhjZXB0aW9uMlsnZGVmYXVsdCddO1xuICBoYi5VdGlscyA9IFV0aWxzO1xuICBoYi5lc2NhcGVFeHByZXNzaW9uID0gVXRpbHMuZXNjYXBlRXhwcmVzc2lvbjtcblxuICBoYi5WTSA9IHJ1bnRpbWU7XG4gIGhiLnRlbXBsYXRlID0gZnVuY3Rpb24gKHNwZWMpIHtcbiAgICByZXR1cm4gcnVudGltZS50ZW1wbGF0ZShzcGVjLCBoYik7XG4gIH07XG5cbiAgcmV0dXJuIGhiO1xufVxuXG52YXIgaW5zdCA9IGNyZWF0ZSgpO1xuaW5zdC5jcmVhdGUgPSBjcmVhdGU7XG5cbl9ub0NvbmZsaWN0MlsnZGVmYXVsdCddKGluc3QpO1xuXG5pbnN0WydkZWZhdWx0J10gPSBpbnN0O1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBpbnN0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogYzovZ2l0L0VzcGFsaWVySlMvfi9oYW5kbGViYXJzL2Rpc3QvY2pzL2hhbmRsZWJhcnMucnVudGltZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZXh0ZW5kID0gZXh0ZW5kO1xuXG4vLyBPbGRlciBJRSB2ZXJzaW9ucyBkbyBub3QgZGlyZWN0bHkgc3VwcG9ydCBpbmRleE9mIHNvIHdlIG11c3QgaW1wbGVtZW50IG91ciBvd24sIHNhZGx5LlxuZXhwb3J0cy5pbmRleE9mID0gaW5kZXhPZjtcbmV4cG9ydHMuZXNjYXBlRXhwcmVzc2lvbiA9IGVzY2FwZUV4cHJlc3Npb247XG5leHBvcnRzLmlzRW1wdHkgPSBpc0VtcHR5O1xuZXhwb3J0cy5ibG9ja1BhcmFtcyA9IGJsb2NrUGFyYW1zO1xuZXhwb3J0cy5hcHBlbmRDb250ZXh0UGF0aCA9IGFwcGVuZENvbnRleHRQYXRoO1xudmFyIGVzY2FwZSA9IHtcbiAgJyYnOiAnJmFtcDsnLFxuICAnPCc6ICcmbHQ7JyxcbiAgJz4nOiAnJmd0OycsXG4gICdcIic6ICcmcXVvdDsnLFxuICAnXFwnJzogJyYjeDI3OycsXG4gICdgJzogJyYjeDYwOydcbn07XG5cbnZhciBiYWRDaGFycyA9IC9bJjw+XCInYF0vZyxcbiAgICBwb3NzaWJsZSA9IC9bJjw+XCInYF0vO1xuXG5mdW5jdGlvbiBlc2NhcGVDaGFyKGNocikge1xuICByZXR1cm4gZXNjYXBlW2Nocl07XG59XG5cbmZ1bmN0aW9uIGV4dGVuZChvYmogLyogLCAuLi5zb3VyY2UgKi8pIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gYXJndW1lbnRzW2ldKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFyZ3VtZW50c1tpXSwga2V5KSkge1xuICAgICAgICBvYmpba2V5XSA9IGFyZ3VtZW50c1tpXVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbmV4cG9ydHMudG9TdHJpbmcgPSB0b1N0cmluZztcbi8vIFNvdXJjZWQgZnJvbSBsb2Rhc2hcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9iZXN0aWVqcy9sb2Rhc2gvYmxvYi9tYXN0ZXIvTElDRU5TRS50eHRcbi8qZXNsaW50LWRpc2FibGUgZnVuYy1zdHlsZSwgbm8tdmFyICovXG52YXIgaXNGdW5jdGlvbiA9IGZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcbn07XG4vLyBmYWxsYmFjayBmb3Igb2xkZXIgdmVyc2lvbnMgb2YgQ2hyb21lIGFuZCBTYWZhcmlcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5pZiAoaXNGdW5jdGlvbigveC8pKSB7XG4gIGV4cG9ydHMuaXNGdW5jdGlvbiA9IGlzRnVuY3Rpb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nICYmIHRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xuICB9O1xufVxudmFyIGlzRnVuY3Rpb247XG5leHBvcnRzLmlzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uO1xuLyplc2xpbnQtZW5hYmxlIGZ1bmMtc3R5bGUsIG5vLXZhciAqL1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyA/IHRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBBcnJheV0nIDogZmFsc2U7XG59O2V4cG9ydHMuaXNBcnJheSA9IGlzQXJyYXk7XG5cbmZ1bmN0aW9uIGluZGV4T2YoYXJyYXksIHZhbHVlKSB7XG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBhcnJheS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGlmIChhcnJheVtpXSA9PT0gdmFsdWUpIHtcbiAgICAgIHJldHVybiBpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbmZ1bmN0aW9uIGVzY2FwZUV4cHJlc3Npb24oc3RyaW5nKSB7XG4gIGlmICh0eXBlb2Ygc3RyaW5nICE9PSAnc3RyaW5nJykge1xuICAgIC8vIGRvbid0IGVzY2FwZSBTYWZlU3RyaW5ncywgc2luY2UgdGhleSdyZSBhbHJlYWR5IHNhZmVcbiAgICBpZiAoc3RyaW5nICYmIHN0cmluZy50b0hUTUwpIHtcbiAgICAgIHJldHVybiBzdHJpbmcudG9IVE1MKCk7XG4gICAgfSBlbHNlIGlmIChzdHJpbmcgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH0gZWxzZSBpZiAoIXN0cmluZykge1xuICAgICAgcmV0dXJuIHN0cmluZyArICcnO1xuICAgIH1cblxuICAgIC8vIEZvcmNlIGEgc3RyaW5nIGNvbnZlcnNpb24gYXMgdGhpcyB3aWxsIGJlIGRvbmUgYnkgdGhlIGFwcGVuZCByZWdhcmRsZXNzIGFuZFxuICAgIC8vIHRoZSByZWdleCB0ZXN0IHdpbGwgZG8gdGhpcyB0cmFuc3BhcmVudGx5IGJlaGluZCB0aGUgc2NlbmVzLCBjYXVzaW5nIGlzc3VlcyBpZlxuICAgIC8vIGFuIG9iamVjdCdzIHRvIHN0cmluZyBoYXMgZXNjYXBlZCBjaGFyYWN0ZXJzIGluIGl0LlxuICAgIHN0cmluZyA9ICcnICsgc3RyaW5nO1xuICB9XG5cbiAgaWYgKCFwb3NzaWJsZS50ZXN0KHN0cmluZykpIHtcbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG4gIHJldHVybiBzdHJpbmcucmVwbGFjZShiYWRDaGFycywgZXNjYXBlQ2hhcik7XG59XG5cbmZ1bmN0aW9uIGlzRW1wdHkodmFsdWUpIHtcbiAgaWYgKCF2YWx1ZSAmJiB2YWx1ZSAhPT0gMCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2UgaWYgKGlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBibG9ja1BhcmFtcyhwYXJhbXMsIGlkcykge1xuICBwYXJhbXMucGF0aCA9IGlkcztcbiAgcmV0dXJuIHBhcmFtcztcbn1cblxuZnVuY3Rpb24gYXBwZW5kQ29udGV4dFBhdGgoY29udGV4dFBhdGgsIGlkKSB7XG4gIHJldHVybiAoY29udGV4dFBhdGggPyBjb250ZXh0UGF0aCArICcuJyA6ICcnKSArIGlkO1xufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGM6L2dpdC9Fc3BhbGllckpTL34vaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL3V0aWxzLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLkhhbmRsZWJhcnNFbnZpcm9ubWVudCA9IEhhbmRsZWJhcnNFbnZpcm9ubWVudDtcbmV4cG9ydHMuY3JlYXRlRnJhbWUgPSBjcmVhdGVGcmFtZTtcblxudmFyIF9pbXBvcnQgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbnZhciBVdGlscyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9pbXBvcnQpO1xuXG52YXIgX0V4Y2VwdGlvbiA9IHJlcXVpcmUoJy4vZXhjZXB0aW9uJyk7XG5cbnZhciBfRXhjZXB0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9FeGNlcHRpb24pO1xuXG52YXIgVkVSU0lPTiA9ICczLjAuMSc7XG5leHBvcnRzLlZFUlNJT04gPSBWRVJTSU9OO1xudmFyIENPTVBJTEVSX1JFVklTSU9OID0gNjtcblxuZXhwb3J0cy5DT01QSUxFUl9SRVZJU0lPTiA9IENPTVBJTEVSX1JFVklTSU9OO1xudmFyIFJFVklTSU9OX0NIQU5HRVMgPSB7XG4gIDE6ICc8PSAxLjAucmMuMicsIC8vIDEuMC5yYy4yIGlzIGFjdHVhbGx5IHJldjIgYnV0IGRvZXNuJ3QgcmVwb3J0IGl0XG4gIDI6ICc9PSAxLjAuMC1yYy4zJyxcbiAgMzogJz09IDEuMC4wLXJjLjQnLFxuICA0OiAnPT0gMS54LngnLFxuICA1OiAnPT0gMi4wLjAtYWxwaGEueCcsXG4gIDY6ICc+PSAyLjAuMC1iZXRhLjEnXG59O1xuXG5leHBvcnRzLlJFVklTSU9OX0NIQU5HRVMgPSBSRVZJU0lPTl9DSEFOR0VTO1xudmFyIGlzQXJyYXkgPSBVdGlscy5pc0FycmF5LFxuICAgIGlzRnVuY3Rpb24gPSBVdGlscy5pc0Z1bmN0aW9uLFxuICAgIHRvU3RyaW5nID0gVXRpbHMudG9TdHJpbmcsXG4gICAgb2JqZWN0VHlwZSA9ICdbb2JqZWN0IE9iamVjdF0nO1xuXG5mdW5jdGlvbiBIYW5kbGViYXJzRW52aXJvbm1lbnQoaGVscGVycywgcGFydGlhbHMpIHtcbiAgdGhpcy5oZWxwZXJzID0gaGVscGVycyB8fCB7fTtcbiAgdGhpcy5wYXJ0aWFscyA9IHBhcnRpYWxzIHx8IHt9O1xuXG4gIHJlZ2lzdGVyRGVmYXVsdEhlbHBlcnModGhpcyk7XG59XG5cbkhhbmRsZWJhcnNFbnZpcm9ubWVudC5wcm90b3R5cGUgPSB7XG4gIGNvbnN0cnVjdG9yOiBIYW5kbGViYXJzRW52aXJvbm1lbnQsXG5cbiAgbG9nZ2VyOiBsb2dnZXIsXG4gIGxvZzogbG9nLFxuXG4gIHJlZ2lzdGVySGVscGVyOiBmdW5jdGlvbiByZWdpc3RlckhlbHBlcihuYW1lLCBmbikge1xuICAgIGlmICh0b1N0cmluZy5jYWxsKG5hbWUpID09PSBvYmplY3RUeXBlKSB7XG4gICAgICBpZiAoZm4pIHtcbiAgICAgICAgdGhyb3cgbmV3IF9FeGNlcHRpb24yWydkZWZhdWx0J10oJ0FyZyBub3Qgc3VwcG9ydGVkIHdpdGggbXVsdGlwbGUgaGVscGVycycpO1xuICAgICAgfVxuICAgICAgVXRpbHMuZXh0ZW5kKHRoaXMuaGVscGVycywgbmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGVscGVyc1tuYW1lXSA9IGZuO1xuICAgIH1cbiAgfSxcbiAgdW5yZWdpc3RlckhlbHBlcjogZnVuY3Rpb24gdW5yZWdpc3RlckhlbHBlcihuYW1lKSB7XG4gICAgZGVsZXRlIHRoaXMuaGVscGVyc1tuYW1lXTtcbiAgfSxcblxuICByZWdpc3RlclBhcnRpYWw6IGZ1bmN0aW9uIHJlZ2lzdGVyUGFydGlhbChuYW1lLCBwYXJ0aWFsKSB7XG4gICAgaWYgKHRvU3RyaW5nLmNhbGwobmFtZSkgPT09IG9iamVjdFR5cGUpIHtcbiAgICAgIFV0aWxzLmV4dGVuZCh0aGlzLnBhcnRpYWxzLCBuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHR5cGVvZiBwYXJ0aWFsID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aHJvdyBuZXcgX0V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnQXR0ZW1wdGluZyB0byByZWdpc3RlciBhIHBhcnRpYWwgYXMgdW5kZWZpbmVkJyk7XG4gICAgICB9XG4gICAgICB0aGlzLnBhcnRpYWxzW25hbWVdID0gcGFydGlhbDtcbiAgICB9XG4gIH0sXG4gIHVucmVnaXN0ZXJQYXJ0aWFsOiBmdW5jdGlvbiB1bnJlZ2lzdGVyUGFydGlhbChuYW1lKSB7XG4gICAgZGVsZXRlIHRoaXMucGFydGlhbHNbbmFtZV07XG4gIH1cbn07XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyRGVmYXVsdEhlbHBlcnMoaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2hlbHBlck1pc3NpbmcnLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgIC8vIEEgbWlzc2luZyBmaWVsZCBpbiBhIHt7Zm9vfX0gY29uc3R1Y3QuXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTb21lb25lIGlzIGFjdHVhbGx5IHRyeWluZyB0byBjYWxsIHNvbWV0aGluZywgYmxvdyB1cC5cbiAgICAgIHRocm93IG5ldyBfRXhjZXB0aW9uMlsnZGVmYXVsdCddKCdNaXNzaW5nIGhlbHBlcjogXCInICsgYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGggLSAxXS5uYW1lICsgJ1wiJyk7XG4gICAgfVxuICB9KTtcblxuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignYmxvY2tIZWxwZXJNaXNzaW5nJywgZnVuY3Rpb24gKGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgICB2YXIgaW52ZXJzZSA9IG9wdGlvbnMuaW52ZXJzZSxcbiAgICAgICAgZm4gPSBvcHRpb25zLmZuO1xuXG4gICAgaWYgKGNvbnRleHQgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiBmbih0aGlzKTtcbiAgICB9IGVsc2UgaWYgKGNvbnRleHQgPT09IGZhbHNlIHx8IGNvbnRleHQgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGludmVyc2UodGhpcyk7XG4gICAgfSBlbHNlIGlmIChpc0FycmF5KGNvbnRleHQpKSB7XG4gICAgICBpZiAoY29udGV4dC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGlmIChvcHRpb25zLmlkcykge1xuICAgICAgICAgIG9wdGlvbnMuaWRzID0gW29wdGlvbnMubmFtZV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW5zdGFuY2UuaGVscGVycy5lYWNoKGNvbnRleHQsIG9wdGlvbnMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGludmVyc2UodGhpcyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChvcHRpb25zLmRhdGEgJiYgb3B0aW9ucy5pZHMpIHtcbiAgICAgICAgdmFyIGRhdGEgPSBjcmVhdGVGcmFtZShvcHRpb25zLmRhdGEpO1xuICAgICAgICBkYXRhLmNvbnRleHRQYXRoID0gVXRpbHMuYXBwZW5kQ29udGV4dFBhdGgob3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoLCBvcHRpb25zLm5hbWUpO1xuICAgICAgICBvcHRpb25zID0geyBkYXRhOiBkYXRhIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmbihjb250ZXh0LCBvcHRpb25zKTtcbiAgICB9XG4gIH0pO1xuXG4gIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCdlYWNoJywgZnVuY3Rpb24gKGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgIHRocm93IG5ldyBfRXhjZXB0aW9uMlsnZGVmYXVsdCddKCdNdXN0IHBhc3MgaXRlcmF0b3IgdG8gI2VhY2gnKTtcbiAgICB9XG5cbiAgICB2YXIgZm4gPSBvcHRpb25zLmZuLFxuICAgICAgICBpbnZlcnNlID0gb3B0aW9ucy5pbnZlcnNlLFxuICAgICAgICBpID0gMCxcbiAgICAgICAgcmV0ID0gJycsXG4gICAgICAgIGRhdGEgPSB1bmRlZmluZWQsXG4gICAgICAgIGNvbnRleHRQYXRoID0gdW5kZWZpbmVkO1xuXG4gICAgaWYgKG9wdGlvbnMuZGF0YSAmJiBvcHRpb25zLmlkcykge1xuICAgICAgY29udGV4dFBhdGggPSBVdGlscy5hcHBlbmRDb250ZXh0UGF0aChvcHRpb25zLmRhdGEuY29udGV4dFBhdGgsIG9wdGlvbnMuaWRzWzBdKSArICcuJztcbiAgICB9XG5cbiAgICBpZiAoaXNGdW5jdGlvbihjb250ZXh0KSkge1xuICAgICAgY29udGV4dCA9IGNvbnRleHQuY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5kYXRhKSB7XG4gICAgICBkYXRhID0gY3JlYXRlRnJhbWUob3B0aW9ucy5kYXRhKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBleGVjSXRlcmF0aW9uKGZpZWxkLCBpbmRleCwgbGFzdCkge1xuICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgZGF0YS5rZXkgPSBmaWVsZDtcbiAgICAgICAgZGF0YS5pbmRleCA9IGluZGV4O1xuICAgICAgICBkYXRhLmZpcnN0ID0gaW5kZXggPT09IDA7XG4gICAgICAgIGRhdGEubGFzdCA9ICEhbGFzdDtcblxuICAgICAgICBpZiAoY29udGV4dFBhdGgpIHtcbiAgICAgICAgICBkYXRhLmNvbnRleHRQYXRoID0gY29udGV4dFBhdGggKyBmaWVsZDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXQgPSByZXQgKyBmbihjb250ZXh0W2ZpZWxkXSwge1xuICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICBibG9ja1BhcmFtczogVXRpbHMuYmxvY2tQYXJhbXMoW2NvbnRleHRbZmllbGRdLCBmaWVsZF0sIFtjb250ZXh0UGF0aCArIGZpZWxkLCBudWxsXSlcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChjb250ZXh0ICYmIHR5cGVvZiBjb250ZXh0ID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKGlzQXJyYXkoY29udGV4dCkpIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IGNvbnRleHQubGVuZ3RoOyBpIDwgajsgaSsrKSB7XG4gICAgICAgICAgZXhlY0l0ZXJhdGlvbihpLCBpLCBpID09PSBjb250ZXh0Lmxlbmd0aCAtIDEpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcHJpb3JLZXkgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIGNvbnRleHQpIHtcbiAgICAgICAgICBpZiAoY29udGV4dC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAvLyBXZSdyZSBydW5uaW5nIHRoZSBpdGVyYXRpb25zIG9uZSBzdGVwIG91dCBvZiBzeW5jIHNvIHdlIGNhbiBkZXRlY3RcbiAgICAgICAgICAgIC8vIHRoZSBsYXN0IGl0ZXJhdGlvbiB3aXRob3V0IGhhdmUgdG8gc2NhbiB0aGUgb2JqZWN0IHR3aWNlIGFuZCBjcmVhdGVcbiAgICAgICAgICAgIC8vIGFuIGl0ZXJtZWRpYXRlIGtleXMgYXJyYXkuXG4gICAgICAgICAgICBpZiAocHJpb3JLZXkpIHtcbiAgICAgICAgICAgICAgZXhlY0l0ZXJhdGlvbihwcmlvcktleSwgaSAtIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJpb3JLZXkgPSBrZXk7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChwcmlvcktleSkge1xuICAgICAgICAgIGV4ZWNJdGVyYXRpb24ocHJpb3JLZXksIGkgLSAxLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpID09PSAwKSB7XG4gICAgICByZXQgPSBpbnZlcnNlKHRoaXMpO1xuICAgIH1cblxuICAgIHJldHVybiByZXQ7XG4gIH0pO1xuXG4gIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCdpZicsIGZ1bmN0aW9uIChjb25kaXRpb25hbCwgb3B0aW9ucykge1xuICAgIGlmIChpc0Z1bmN0aW9uKGNvbmRpdGlvbmFsKSkge1xuICAgICAgY29uZGl0aW9uYWwgPSBjb25kaXRpb25hbC5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIC8vIERlZmF1bHQgYmVoYXZpb3IgaXMgdG8gcmVuZGVyIHRoZSBwb3NpdGl2ZSBwYXRoIGlmIHRoZSB2YWx1ZSBpcyB0cnV0aHkgYW5kIG5vdCBlbXB0eS5cbiAgICAvLyBUaGUgYGluY2x1ZGVaZXJvYCBvcHRpb24gbWF5IGJlIHNldCB0byB0cmVhdCB0aGUgY29uZHRpb25hbCBhcyBwdXJlbHkgbm90IGVtcHR5IGJhc2VkIG9uIHRoZVxuICAgIC8vIGJlaGF2aW9yIG9mIGlzRW1wdHkuIEVmZmVjdGl2ZWx5IHRoaXMgZGV0ZXJtaW5lcyBpZiAwIGlzIGhhbmRsZWQgYnkgdGhlIHBvc2l0aXZlIHBhdGggb3IgbmVnYXRpdmUuXG4gICAgaWYgKCFvcHRpb25zLmhhc2guaW5jbHVkZVplcm8gJiYgIWNvbmRpdGlvbmFsIHx8IFV0aWxzLmlzRW1wdHkoY29uZGl0aW9uYWwpKSB7XG4gICAgICByZXR1cm4gb3B0aW9ucy5pbnZlcnNlKHRoaXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gb3B0aW9ucy5mbih0aGlzKTtcbiAgICB9XG4gIH0pO1xuXG4gIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCd1bmxlc3MnLCBmdW5jdGlvbiAoY29uZGl0aW9uYWwsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gaW5zdGFuY2UuaGVscGVyc1snaWYnXS5jYWxsKHRoaXMsIGNvbmRpdGlvbmFsLCB7IGZuOiBvcHRpb25zLmludmVyc2UsIGludmVyc2U6IG9wdGlvbnMuZm4sIGhhc2g6IG9wdGlvbnMuaGFzaCB9KTtcbiAgfSk7XG5cbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ3dpdGgnLCBmdW5jdGlvbiAoY29udGV4dCwgb3B0aW9ucykge1xuICAgIGlmIChpc0Z1bmN0aW9uKGNvbnRleHQpKSB7XG4gICAgICBjb250ZXh0ID0gY29udGV4dC5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIHZhciBmbiA9IG9wdGlvbnMuZm47XG5cbiAgICBpZiAoIVV0aWxzLmlzRW1wdHkoY29udGV4dCkpIHtcbiAgICAgIGlmIChvcHRpb25zLmRhdGEgJiYgb3B0aW9ucy5pZHMpIHtcbiAgICAgICAgdmFyIGRhdGEgPSBjcmVhdGVGcmFtZShvcHRpb25zLmRhdGEpO1xuICAgICAgICBkYXRhLmNvbnRleHRQYXRoID0gVXRpbHMuYXBwZW5kQ29udGV4dFBhdGgob3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoLCBvcHRpb25zLmlkc1swXSk7XG4gICAgICAgIG9wdGlvbnMgPSB7IGRhdGE6IGRhdGEgfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZuKGNvbnRleHQsIG9wdGlvbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gb3B0aW9ucy5pbnZlcnNlKHRoaXMpO1xuICAgIH1cbiAgfSk7XG5cbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2xvZycsIGZ1bmN0aW9uIChtZXNzYWdlLCBvcHRpb25zKSB7XG4gICAgdmFyIGxldmVsID0gb3B0aW9ucy5kYXRhICYmIG9wdGlvbnMuZGF0YS5sZXZlbCAhPSBudWxsID8gcGFyc2VJbnQob3B0aW9ucy5kYXRhLmxldmVsLCAxMCkgOiAxO1xuICAgIGluc3RhbmNlLmxvZyhsZXZlbCwgbWVzc2FnZSk7XG4gIH0pO1xuXG4gIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCdsb29rdXAnLCBmdW5jdGlvbiAob2JqLCBmaWVsZCkge1xuICAgIHJldHVybiBvYmogJiYgb2JqW2ZpZWxkXTtcbiAgfSk7XG59XG5cbnZhciBsb2dnZXIgPSB7XG4gIG1ldGhvZE1hcDogeyAwOiAnZGVidWcnLCAxOiAnaW5mbycsIDI6ICd3YXJuJywgMzogJ2Vycm9yJyB9LFxuXG4gIC8vIFN0YXRlIGVudW1cbiAgREVCVUc6IDAsXG4gIElORk86IDEsXG4gIFdBUk46IDIsXG4gIEVSUk9SOiAzLFxuICBsZXZlbDogMSxcblxuICAvLyBDYW4gYmUgb3ZlcnJpZGRlbiBpbiB0aGUgaG9zdCBlbnZpcm9ubWVudFxuICBsb2c6IGZ1bmN0aW9uIGxvZyhsZXZlbCwgbWVzc2FnZSkge1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbG9nZ2VyLmxldmVsIDw9IGxldmVsKSB7XG4gICAgICB2YXIgbWV0aG9kID0gbG9nZ2VyLm1ldGhvZE1hcFtsZXZlbF07XG4gICAgICAoY29uc29sZVttZXRob2RdIHx8IGNvbnNvbGUubG9nKS5jYWxsKGNvbnNvbGUsIG1lc3NhZ2UpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydHMubG9nZ2VyID0gbG9nZ2VyO1xudmFyIGxvZyA9IGxvZ2dlci5sb2c7XG5cbmV4cG9ydHMubG9nID0gbG9nO1xuXG5mdW5jdGlvbiBjcmVhdGVGcmFtZShvYmplY3QpIHtcbiAgdmFyIGZyYW1lID0gVXRpbHMuZXh0ZW5kKHt9LCBvYmplY3QpO1xuICBmcmFtZS5fcGFyZW50ID0gb2JqZWN0O1xuICByZXR1cm4gZnJhbWU7XG59XG5cbi8qIFthcmdzLCBdb3B0aW9ucyAqL1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGM6L2dpdC9Fc3BhbGllckpTL34vaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL2Jhc2UuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBlcnJvclByb3BzID0gWydkZXNjcmlwdGlvbicsICdmaWxlTmFtZScsICdsaW5lTnVtYmVyJywgJ21lc3NhZ2UnLCAnbmFtZScsICdudW1iZXInLCAnc3RhY2snXTtcblxuZnVuY3Rpb24gRXhjZXB0aW9uKG1lc3NhZ2UsIG5vZGUpIHtcbiAgdmFyIGxvYyA9IG5vZGUgJiYgbm9kZS5sb2MsXG4gICAgICBsaW5lID0gdW5kZWZpbmVkLFxuICAgICAgY29sdW1uID0gdW5kZWZpbmVkO1xuICBpZiAobG9jKSB7XG4gICAgbGluZSA9IGxvYy5zdGFydC5saW5lO1xuICAgIGNvbHVtbiA9IGxvYy5zdGFydC5jb2x1bW47XG5cbiAgICBtZXNzYWdlICs9ICcgLSAnICsgbGluZSArICc6JyArIGNvbHVtbjtcbiAgfVxuXG4gIHZhciB0bXAgPSBFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IuY2FsbCh0aGlzLCBtZXNzYWdlKTtcblxuICAvLyBVbmZvcnR1bmF0ZWx5IGVycm9ycyBhcmUgbm90IGVudW1lcmFibGUgaW4gQ2hyb21lIChhdCBsZWFzdCksIHNvIGBmb3IgcHJvcCBpbiB0bXBgIGRvZXNuJ3Qgd29yay5cbiAgZm9yICh2YXIgaWR4ID0gMDsgaWR4IDwgZXJyb3JQcm9wcy5sZW5ndGg7IGlkeCsrKSB7XG4gICAgdGhpc1tlcnJvclByb3BzW2lkeF1dID0gdG1wW2Vycm9yUHJvcHNbaWR4XV07XG4gIH1cblxuICBpZiAoRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UpIHtcbiAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCBFeGNlcHRpb24pO1xuICB9XG5cbiAgaWYgKGxvYykge1xuICAgIHRoaXMubGluZU51bWJlciA9IGxpbmU7XG4gICAgdGhpcy5jb2x1bW4gPSBjb2x1bW47XG4gIH1cbn1cblxuRXhjZXB0aW9uLnByb3RvdHlwZSA9IG5ldyBFcnJvcigpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBFeGNlcHRpb247XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBjOi9naXQvRXNwYWxpZXJKUy9+L2hhbmRsZWJhcnMvZGlzdC9janMvaGFuZGxlYmFycy9leGNlcHRpb24uanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4vLyBCdWlsZCBvdXQgb3VyIGJhc2ljIFNhZmVTdHJpbmcgdHlwZVxuZnVuY3Rpb24gU2FmZVN0cmluZyhzdHJpbmcpIHtcbiAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG59XG5cblNhZmVTdHJpbmcucHJvdG90eXBlLnRvU3RyaW5nID0gU2FmZVN0cmluZy5wcm90b3R5cGUudG9IVE1MID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gJycgKyB0aGlzLnN0cmluZztcbn07XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFNhZmVTdHJpbmc7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBjOi9naXQvRXNwYWxpZXJKUy9+L2hhbmRsZWJhcnMvZGlzdC9janMvaGFuZGxlYmFycy9zYWZlLXN0cmluZy5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5jaGVja1JldmlzaW9uID0gY2hlY2tSZXZpc2lvbjtcblxuLy8gVE9ETzogUmVtb3ZlIHRoaXMgbGluZSBhbmQgYnJlYWsgdXAgY29tcGlsZVBhcnRpYWxcblxuZXhwb3J0cy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuZXhwb3J0cy53cmFwUHJvZ3JhbSA9IHdyYXBQcm9ncmFtO1xuZXhwb3J0cy5yZXNvbHZlUGFydGlhbCA9IHJlc29sdmVQYXJ0aWFsO1xuZXhwb3J0cy5pbnZva2VQYXJ0aWFsID0gaW52b2tlUGFydGlhbDtcbmV4cG9ydHMubm9vcCA9IG5vb3A7XG5cbnZhciBfaW1wb3J0ID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG52YXIgVXRpbHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfaW1wb3J0KTtcblxudmFyIF9FeGNlcHRpb24gPSByZXF1aXJlKCcuL2V4Y2VwdGlvbicpO1xuXG52YXIgX0V4Y2VwdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfRXhjZXB0aW9uKTtcblxudmFyIF9DT01QSUxFUl9SRVZJU0lPTiRSRVZJU0lPTl9DSEFOR0VTJGNyZWF0ZUZyYW1lID0gcmVxdWlyZSgnLi9iYXNlJyk7XG5cbmZ1bmN0aW9uIGNoZWNrUmV2aXNpb24oY29tcGlsZXJJbmZvKSB7XG4gIHZhciBjb21waWxlclJldmlzaW9uID0gY29tcGlsZXJJbmZvICYmIGNvbXBpbGVySW5mb1swXSB8fCAxLFxuICAgICAgY3VycmVudFJldmlzaW9uID0gX0NPTVBJTEVSX1JFVklTSU9OJFJFVklTSU9OX0NIQU5HRVMkY3JlYXRlRnJhbWUuQ09NUElMRVJfUkVWSVNJT047XG5cbiAgaWYgKGNvbXBpbGVyUmV2aXNpb24gIT09IGN1cnJlbnRSZXZpc2lvbikge1xuICAgIGlmIChjb21waWxlclJldmlzaW9uIDwgY3VycmVudFJldmlzaW9uKSB7XG4gICAgICB2YXIgcnVudGltZVZlcnNpb25zID0gX0NPTVBJTEVSX1JFVklTSU9OJFJFVklTSU9OX0NIQU5HRVMkY3JlYXRlRnJhbWUuUkVWSVNJT05fQ0hBTkdFU1tjdXJyZW50UmV2aXNpb25dLFxuICAgICAgICAgIGNvbXBpbGVyVmVyc2lvbnMgPSBfQ09NUElMRVJfUkVWSVNJT04kUkVWSVNJT05fQ0hBTkdFUyRjcmVhdGVGcmFtZS5SRVZJU0lPTl9DSEFOR0VTW2NvbXBpbGVyUmV2aXNpb25dO1xuICAgICAgdGhyb3cgbmV3IF9FeGNlcHRpb24yWydkZWZhdWx0J10oJ1RlbXBsYXRlIHdhcyBwcmVjb21waWxlZCB3aXRoIGFuIG9sZGVyIHZlcnNpb24gb2YgSGFuZGxlYmFycyB0aGFuIHRoZSBjdXJyZW50IHJ1bnRpbWUuICcgKyAnUGxlYXNlIHVwZGF0ZSB5b3VyIHByZWNvbXBpbGVyIHRvIGEgbmV3ZXIgdmVyc2lvbiAoJyArIHJ1bnRpbWVWZXJzaW9ucyArICcpIG9yIGRvd25ncmFkZSB5b3VyIHJ1bnRpbWUgdG8gYW4gb2xkZXIgdmVyc2lvbiAoJyArIGNvbXBpbGVyVmVyc2lvbnMgKyAnKS4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVXNlIHRoZSBlbWJlZGRlZCB2ZXJzaW9uIGluZm8gc2luY2UgdGhlIHJ1bnRpbWUgZG9lc24ndCBrbm93IGFib3V0IHRoaXMgcmV2aXNpb24geWV0XG4gICAgICB0aHJvdyBuZXcgX0V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnVGVtcGxhdGUgd2FzIHByZWNvbXBpbGVkIHdpdGggYSBuZXdlciB2ZXJzaW9uIG9mIEhhbmRsZWJhcnMgdGhhbiB0aGUgY3VycmVudCBydW50aW1lLiAnICsgJ1BsZWFzZSB1cGRhdGUgeW91ciBydW50aW1lIHRvIGEgbmV3ZXIgdmVyc2lvbiAoJyArIGNvbXBpbGVySW5mb1sxXSArICcpLicpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB0ZW1wbGF0ZSh0ZW1wbGF0ZVNwZWMsIGVudikge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBpZiAoIWVudikge1xuICAgIHRocm93IG5ldyBfRXhjZXB0aW9uMlsnZGVmYXVsdCddKCdObyBlbnZpcm9ubWVudCBwYXNzZWQgdG8gdGVtcGxhdGUnKTtcbiAgfVxuICBpZiAoIXRlbXBsYXRlU3BlYyB8fCAhdGVtcGxhdGVTcGVjLm1haW4pIHtcbiAgICB0aHJvdyBuZXcgX0V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnVW5rbm93biB0ZW1wbGF0ZSBvYmplY3Q6ICcgKyB0eXBlb2YgdGVtcGxhdGVTcGVjKTtcbiAgfVxuXG4gIC8vIE5vdGU6IFVzaW5nIGVudi5WTSByZWZlcmVuY2VzIHJhdGhlciB0aGFuIGxvY2FsIHZhciByZWZlcmVuY2VzIHRocm91Z2hvdXQgdGhpcyBzZWN0aW9uIHRvIGFsbG93XG4gIC8vIGZvciBleHRlcm5hbCB1c2VycyB0byBvdmVycmlkZSB0aGVzZSBhcyBwc3VlZG8tc3VwcG9ydGVkIEFQSXMuXG4gIGVudi5WTS5jaGVja1JldmlzaW9uKHRlbXBsYXRlU3BlYy5jb21waWxlcik7XG5cbiAgZnVuY3Rpb24gaW52b2tlUGFydGlhbFdyYXBwZXIocGFydGlhbCwgY29udGV4dCwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAgIGNvbnRleHQgPSBVdGlscy5leHRlbmQoe30sIGNvbnRleHQsIG9wdGlvbnMuaGFzaCk7XG4gICAgfVxuXG4gICAgcGFydGlhbCA9IGVudi5WTS5yZXNvbHZlUGFydGlhbC5jYWxsKHRoaXMsIHBhcnRpYWwsIGNvbnRleHQsIG9wdGlvbnMpO1xuICAgIHZhciByZXN1bHQgPSBlbnYuVk0uaW52b2tlUGFydGlhbC5jYWxsKHRoaXMsIHBhcnRpYWwsIGNvbnRleHQsIG9wdGlvbnMpO1xuXG4gICAgaWYgKHJlc3VsdCA9PSBudWxsICYmIGVudi5jb21waWxlKSB7XG4gICAgICBvcHRpb25zLnBhcnRpYWxzW29wdGlvbnMubmFtZV0gPSBlbnYuY29tcGlsZShwYXJ0aWFsLCB0ZW1wbGF0ZVNwZWMuY29tcGlsZXJPcHRpb25zLCBlbnYpO1xuICAgICAgcmVzdWx0ID0gb3B0aW9ucy5wYXJ0aWFsc1tvcHRpb25zLm5hbWVdKGNvbnRleHQsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBpZiAocmVzdWx0ICE9IG51bGwpIHtcbiAgICAgIGlmIChvcHRpb25zLmluZGVudCkge1xuICAgICAgICB2YXIgbGluZXMgPSByZXN1bHQuc3BsaXQoJ1xcbicpO1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGxpbmVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgIGlmICghbGluZXNbaV0gJiYgaSArIDEgPT09IGwpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxpbmVzW2ldID0gb3B0aW9ucy5pbmRlbnQgKyBsaW5lc1tpXTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQgPSBsaW5lcy5qb2luKCdcXG4nKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBfRXhjZXB0aW9uMlsnZGVmYXVsdCddKCdUaGUgcGFydGlhbCAnICsgb3B0aW9ucy5uYW1lICsgJyBjb3VsZCBub3QgYmUgY29tcGlsZWQgd2hlbiBydW5uaW5nIGluIHJ1bnRpbWUtb25seSBtb2RlJyk7XG4gICAgfVxuICB9XG5cbiAgLy8gSnVzdCBhZGQgd2F0ZXJcbiAgdmFyIGNvbnRhaW5lciA9IHtcbiAgICBzdHJpY3Q6IGZ1bmN0aW9uIHN0cmljdChvYmosIG5hbWUpIHtcbiAgICAgIGlmICghKG5hbWUgaW4gb2JqKSkge1xuICAgICAgICB0aHJvdyBuZXcgX0V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnXCInICsgbmFtZSArICdcIiBub3QgZGVmaW5lZCBpbiAnICsgb2JqKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvYmpbbmFtZV07XG4gICAgfSxcbiAgICBsb29rdXA6IGZ1bmN0aW9uIGxvb2t1cChkZXB0aHMsIG5hbWUpIHtcbiAgICAgIHZhciBsZW4gPSBkZXB0aHMubGVuZ3RoO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBpZiAoZGVwdGhzW2ldICYmIGRlcHRoc1tpXVtuYW1lXSAhPSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIGRlcHRoc1tpXVtuYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgbGFtYmRhOiBmdW5jdGlvbiBsYW1iZGEoY3VycmVudCwgY29udGV4dCkge1xuICAgICAgcmV0dXJuIHR5cGVvZiBjdXJyZW50ID09PSAnZnVuY3Rpb24nID8gY3VycmVudC5jYWxsKGNvbnRleHQpIDogY3VycmVudDtcbiAgICB9LFxuXG4gICAgZXNjYXBlRXhwcmVzc2lvbjogVXRpbHMuZXNjYXBlRXhwcmVzc2lvbixcbiAgICBpbnZva2VQYXJ0aWFsOiBpbnZva2VQYXJ0aWFsV3JhcHBlcixcblxuICAgIGZuOiBmdW5jdGlvbiBmbihpKSB7XG4gICAgICByZXR1cm4gdGVtcGxhdGVTcGVjW2ldO1xuICAgIH0sXG5cbiAgICBwcm9ncmFtczogW10sXG4gICAgcHJvZ3JhbTogZnVuY3Rpb24gcHJvZ3JhbShpLCBkYXRhLCBkZWNsYXJlZEJsb2NrUGFyYW1zLCBibG9ja1BhcmFtcywgZGVwdGhzKSB7XG4gICAgICB2YXIgcHJvZ3JhbVdyYXBwZXIgPSB0aGlzLnByb2dyYW1zW2ldLFxuICAgICAgICAgIGZuID0gdGhpcy5mbihpKTtcbiAgICAgIGlmIChkYXRhIHx8IGRlcHRocyB8fCBibG9ja1BhcmFtcyB8fCBkZWNsYXJlZEJsb2NrUGFyYW1zKSB7XG4gICAgICAgIHByb2dyYW1XcmFwcGVyID0gd3JhcFByb2dyYW0odGhpcywgaSwgZm4sIGRhdGEsIGRlY2xhcmVkQmxvY2tQYXJhbXMsIGJsb2NrUGFyYW1zLCBkZXB0aHMpO1xuICAgICAgfSBlbHNlIGlmICghcHJvZ3JhbVdyYXBwZXIpIHtcbiAgICAgICAgcHJvZ3JhbVdyYXBwZXIgPSB0aGlzLnByb2dyYW1zW2ldID0gd3JhcFByb2dyYW0odGhpcywgaSwgZm4pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHByb2dyYW1XcmFwcGVyO1xuICAgIH0sXG5cbiAgICBkYXRhOiBmdW5jdGlvbiBkYXRhKHZhbHVlLCBkZXB0aCkge1xuICAgICAgd2hpbGUgKHZhbHVlICYmIGRlcHRoLS0pIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5fcGFyZW50O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sXG4gICAgbWVyZ2U6IGZ1bmN0aW9uIG1lcmdlKHBhcmFtLCBjb21tb24pIHtcbiAgICAgIHZhciBvYmogPSBwYXJhbSB8fCBjb21tb247XG5cbiAgICAgIGlmIChwYXJhbSAmJiBjb21tb24gJiYgcGFyYW0gIT09IGNvbW1vbikge1xuICAgICAgICBvYmogPSBVdGlscy5leHRlbmQoe30sIGNvbW1vbiwgcGFyYW0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gb2JqO1xuICAgIH0sXG5cbiAgICBub29wOiBlbnYuVk0ubm9vcCxcbiAgICBjb21waWxlckluZm86IHRlbXBsYXRlU3BlYy5jb21waWxlclxuICB9O1xuXG4gIGZ1bmN0aW9uIHJldChjb250ZXh0KSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzFdO1xuXG4gICAgdmFyIGRhdGEgPSBvcHRpb25zLmRhdGE7XG5cbiAgICByZXQuX3NldHVwKG9wdGlvbnMpO1xuICAgIGlmICghb3B0aW9ucy5wYXJ0aWFsICYmIHRlbXBsYXRlU3BlYy51c2VEYXRhKSB7XG4gICAgICBkYXRhID0gaW5pdERhdGEoY29udGV4dCwgZGF0YSk7XG4gICAgfVxuICAgIHZhciBkZXB0aHMgPSB1bmRlZmluZWQsXG4gICAgICAgIGJsb2NrUGFyYW1zID0gdGVtcGxhdGVTcGVjLnVzZUJsb2NrUGFyYW1zID8gW10gOiB1bmRlZmluZWQ7XG4gICAgaWYgKHRlbXBsYXRlU3BlYy51c2VEZXB0aHMpIHtcbiAgICAgIGRlcHRocyA9IG9wdGlvbnMuZGVwdGhzID8gW2NvbnRleHRdLmNvbmNhdChvcHRpb25zLmRlcHRocykgOiBbY29udGV4dF07XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlbXBsYXRlU3BlYy5tYWluLmNhbGwoY29udGFpbmVyLCBjb250ZXh0LCBjb250YWluZXIuaGVscGVycywgY29udGFpbmVyLnBhcnRpYWxzLCBkYXRhLCBibG9ja1BhcmFtcywgZGVwdGhzKTtcbiAgfVxuICByZXQuaXNUb3AgPSB0cnVlO1xuXG4gIHJldC5fc2V0dXAgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucy5wYXJ0aWFsKSB7XG4gICAgICBjb250YWluZXIuaGVscGVycyA9IGNvbnRhaW5lci5tZXJnZShvcHRpb25zLmhlbHBlcnMsIGVudi5oZWxwZXJzKTtcblxuICAgICAgaWYgKHRlbXBsYXRlU3BlYy51c2VQYXJ0aWFsKSB7XG4gICAgICAgIGNvbnRhaW5lci5wYXJ0aWFscyA9IGNvbnRhaW5lci5tZXJnZShvcHRpb25zLnBhcnRpYWxzLCBlbnYucGFydGlhbHMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250YWluZXIuaGVscGVycyA9IG9wdGlvbnMuaGVscGVycztcbiAgICAgIGNvbnRhaW5lci5wYXJ0aWFscyA9IG9wdGlvbnMucGFydGlhbHM7XG4gICAgfVxuICB9O1xuXG4gIHJldC5fY2hpbGQgPSBmdW5jdGlvbiAoaSwgZGF0YSwgYmxvY2tQYXJhbXMsIGRlcHRocykge1xuICAgIGlmICh0ZW1wbGF0ZVNwZWMudXNlQmxvY2tQYXJhbXMgJiYgIWJsb2NrUGFyYW1zKSB7XG4gICAgICB0aHJvdyBuZXcgX0V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnbXVzdCBwYXNzIGJsb2NrIHBhcmFtcycpO1xuICAgIH1cbiAgICBpZiAodGVtcGxhdGVTcGVjLnVzZURlcHRocyAmJiAhZGVwdGhzKSB7XG4gICAgICB0aHJvdyBuZXcgX0V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnbXVzdCBwYXNzIHBhcmVudCBkZXB0aHMnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd3JhcFByb2dyYW0oY29udGFpbmVyLCBpLCB0ZW1wbGF0ZVNwZWNbaV0sIGRhdGEsIDAsIGJsb2NrUGFyYW1zLCBkZXB0aHMpO1xuICB9O1xuICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiB3cmFwUHJvZ3JhbShjb250YWluZXIsIGksIGZuLCBkYXRhLCBkZWNsYXJlZEJsb2NrUGFyYW1zLCBibG9ja1BhcmFtcywgZGVwdGhzKSB7XG4gIGZ1bmN0aW9uIHByb2coY29udGV4dCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1sxXTtcblxuICAgIHJldHVybiBmbi5jYWxsKGNvbnRhaW5lciwgY29udGV4dCwgY29udGFpbmVyLmhlbHBlcnMsIGNvbnRhaW5lci5wYXJ0aWFscywgb3B0aW9ucy5kYXRhIHx8IGRhdGEsIGJsb2NrUGFyYW1zICYmIFtvcHRpb25zLmJsb2NrUGFyYW1zXS5jb25jYXQoYmxvY2tQYXJhbXMpLCBkZXB0aHMgJiYgW2NvbnRleHRdLmNvbmNhdChkZXB0aHMpKTtcbiAgfVxuICBwcm9nLnByb2dyYW0gPSBpO1xuICBwcm9nLmRlcHRoID0gZGVwdGhzID8gZGVwdGhzLmxlbmd0aCA6IDA7XG4gIHByb2cuYmxvY2tQYXJhbXMgPSBkZWNsYXJlZEJsb2NrUGFyYW1zIHx8IDA7XG4gIHJldHVybiBwcm9nO1xufVxuXG5mdW5jdGlvbiByZXNvbHZlUGFydGlhbChwYXJ0aWFsLCBjb250ZXh0LCBvcHRpb25zKSB7XG4gIGlmICghcGFydGlhbCkge1xuICAgIHBhcnRpYWwgPSBvcHRpb25zLnBhcnRpYWxzW29wdGlvbnMubmFtZV07XG4gIH0gZWxzZSBpZiAoIXBhcnRpYWwuY2FsbCAmJiAhb3B0aW9ucy5uYW1lKSB7XG4gICAgLy8gVGhpcyBpcyBhIGR5bmFtaWMgcGFydGlhbCB0aGF0IHJldHVybmVkIGEgc3RyaW5nXG4gICAgb3B0aW9ucy5uYW1lID0gcGFydGlhbDtcbiAgICBwYXJ0aWFsID0gb3B0aW9ucy5wYXJ0aWFsc1twYXJ0aWFsXTtcbiAgfVxuICByZXR1cm4gcGFydGlhbDtcbn1cblxuZnVuY3Rpb24gaW52b2tlUGFydGlhbChwYXJ0aWFsLCBjb250ZXh0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMucGFydGlhbCA9IHRydWU7XG5cbiAgaWYgKHBhcnRpYWwgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBfRXhjZXB0aW9uMlsnZGVmYXVsdCddKCdUaGUgcGFydGlhbCAnICsgb3B0aW9ucy5uYW1lICsgJyBjb3VsZCBub3QgYmUgZm91bmQnKTtcbiAgfSBlbHNlIGlmIChwYXJ0aWFsIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICByZXR1cm4gcGFydGlhbChjb250ZXh0LCBvcHRpb25zKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBub29wKCkge1xuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIGluaXREYXRhKGNvbnRleHQsIGRhdGEpIHtcbiAgaWYgKCFkYXRhIHx8ICEoJ3Jvb3QnIGluIGRhdGEpKSB7XG4gICAgZGF0YSA9IGRhdGEgPyBfQ09NUElMRVJfUkVWSVNJT04kUkVWSVNJT05fQ0hBTkdFUyRjcmVhdGVGcmFtZS5jcmVhdGVGcmFtZShkYXRhKSA6IHt9O1xuICAgIGRhdGEucm9vdCA9IGNvbnRleHQ7XG4gIH1cbiAgcmV0dXJuIGRhdGE7XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogYzovZ2l0L0VzcGFsaWVySlMvfi9oYW5kbGViYXJzL2Rpc3QvY2pzL2hhbmRsZWJhcnMvcnVudGltZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8qZ2xvYmFsIHdpbmRvdyAqL1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBmdW5jdGlvbiAoSGFuZGxlYmFycykge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICB2YXIgcm9vdCA9IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogd2luZG93LFxuICAgICAgJEhhbmRsZWJhcnMgPSByb290LkhhbmRsZWJhcnM7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIEhhbmRsZWJhcnMubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAocm9vdC5IYW5kbGViYXJzID09PSBIYW5kbGViYXJzKSB7XG4gICAgICByb290LkhhbmRsZWJhcnMgPSAkSGFuZGxlYmFycztcbiAgICB9XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBjOi9naXQvRXNwYWxpZXJKUy9+L2hhbmRsZWJhcnMvZGlzdC9janMvaGFuZGxlYmFycy9uby1jb25mbGljdC5qc1xuICoqLyIsImltcG9ydCBtZXNzYWdlRmFjdG9yeSBmcm9tIFwiLi9lc3BhbGllci5tZXNzYWdlRmFjdG9yeVwiO1xyXG5pbXBvcnQgd2FpdHNjcmVlbiBmcm9tIFwiLi9lc3BhbGllci53YWl0c2NyZWVuXCI7XHJcbmltcG9ydCBjb21tb24gZnJvbSBcIi4vZXNwYWxpZXIuY29tbW9uXCI7XHJcbmltcG9ydCBjb3JlIGZyb20gXCIuL2VzcGFsaWVyLmNvcmVcIjtcclxuXHJcbmxldCBnZXRGb290ZXIgPSAodGFibGUpID0+IHtcclxuICAgIGxldCBzdGFydEF0UGFnZSA9IE1hdGgubWF4KDAsIHRhYmxlLnNldHRpbmdzLmN1cnJlbnRQYWdlIC0gMyk7XHJcbiAgICBsZXQgZW5kQXRQYWdlID0gTWF0aC5taW4odGFibGUuc2V0dGluZ3MucGFnZXMgLSAxLCB0YWJsZS5zZXR0aW5ncy5jdXJyZW50UGFnZSArIDMgKyBNYXRoLm1heCgzIC0gdGFibGUuc2V0dGluZ3MuY3VycmVudFBhZ2UsIDApKTtcclxuICAgIGxldCBwYWdpbmdDb250cm9sID0gXCI8dWwgY2xhc3M9XFxcInBhZ2luYXRpb25cXFwiPlwiO1xyXG5cclxuICAgIHBhZ2luZ0NvbnRyb2wgKz0gYDxsaSR7dGFibGUuc2V0dGluZ3MuY3VycmVudFBhZ2UgPT0gMCA/IGAgY2xhc3M9XCJkaXNhYmxlZFwiYCA6IFwiXCJ9PjxhIGRhdGEtcGFnZT1cIiR7KHRhYmxlLnNldHRpbmdzLmN1cnJlbnRQYWdlIC0gMSkgfVwiIGNsYXNzPVwiZXNwYWxpZXItdGFibGUtYnV0dG9uXCIgaHJlZj1cImphdmFzY3JpcHQ6IHZvaWQoMCk7XCI+PHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JmxhcXVvOzwvc3Bhbj48L2E+PC9saT5gO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSBzdGFydEF0UGFnZTsgaSA8PSBlbmRBdFBhZ2U7IGkrKykge1xyXG4gICAgICAgIHBhZ2luZ0NvbnRyb2wgKz0gYDxsaSR7aSA9PT0gdGFibGUuc2V0dGluZ3MuY3VycmVudFBhZ2UgPyBgIGNsYXNzPVwiYWN0aXZlXCJgIDogXCJcIn0+PGEgZGF0YS1wYWdlPVwiJHtpfVwiIGNsYXNzPVwiZXNwYWxpZXItdGFibGUtYnV0dG9uXCIgaHJlZj1cImphdmFzY3JpcHQ6IHZvaWQoMCk7XCI+JHsoaSArIDEpIH08L2E+PC9saT5gO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBuZXh0UGFnZSA9ICh0YWJsZS5zZXR0aW5ncy5jdXJyZW50UGFnZSArIDEpO1xyXG4gICAgcGFnaW5nQ29udHJvbCArPSBgPGxpJHtuZXh0UGFnZSA9PSB0YWJsZS5zZXR0aW5ncy5wYWdlcyA/IGAgY2xhc3M9XCJkaXNhYmxlZFwiYCA6IFwiXCJ9PjxhIGRhdGEtcGFnZT1cIiR7bmV4dFBhZ2V9XCIgY2xhc3M9XCJlc3BhbGllci10YWJsZS1idXR0b25cIiBocmVmPVwiamF2YXNjcmlwdDogdm9pZCgwKTtcIj48c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mcmFxdW87PC9zcGFuPjwvYT48L2xpPmA7XHJcblxyXG4gICAgcmV0dXJuIGA8dGZvb3Q+PHRyPjx0ZCBjb2xzcGFuPVwiNDJcIj4ke3BhZ2luZ0NvbnRyb2x9PC90ZD48L3RyPjwvdGZvb3Q+YDtcclxufTtcclxuXHJcbmxldCByZW5kZXJUYWJsZSA9ICh0YWJsZSkgPT4ge1xyXG4gICAgbGV0IHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgbGV0IHJlbmRlcmVkID0gYDx0YWJsZSBjbGFzcz1cIiR7dGFibGUuc2V0dGluZ3MudGFibGVDbGFzc30gdGFibGUgdGFibGUtc3RyaXBlZFwiPmA7XHJcblxyXG4gICAgICAgIGlmICh0YWJsZS5zZXR0aW5ncy5oZWFkZXJUZW1wbGF0ZSkge1xyXG4gICAgICAgICAgICByZW5kZXJlZCArPSB0YWJsZS5zZXR0aW5ncy5oZWFkZXJUZW1wbGF0ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVuZGVyZWQgKz0gXCI8dGJvZHk+XCI7XHJcbiAgICAgICAgbGV0IHN0YXJ0QXRJbmRleCA9IHRhYmxlLnNldHRpbmdzLmN1cnJlbnRQYWdlICogdGFibGUuc2V0dGluZ3MucGFnZVNpemU7XHJcblxyXG4gICAgICAgIGlmICh0YWJsZS5zZXR0aW5ncy5kYXRhKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSBzdGFydEF0SW5kZXg7IGkgPCBNYXRoLm1pbihzdGFydEF0SW5kZXggKyB0YWJsZS5zZXR0aW5ncy5wYWdlU2l6ZSwgdGFibGUuc2V0dGluZ3MuZGF0YS5sZW5ndGgpOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHJlbmRlcmVkICs9IHRhYmxlLnNldHRpbmdzLnJvd1RlbXBsYXRlKHRhYmxlLnNldHRpbmdzLmRhdGFbaV0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZW5kZXJlZCArPSBcIjwvdGJvZHk+XCI7XHJcblxyXG4gICAgICAgICAgICBpZiAodGFibGUuc2V0dGluZ3MucGFnZXMgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICByZW5kZXJlZCArPSBnZXRGb290ZXIodGFibGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlc29sdmUocmVuZGVyZWQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvcmUuc2VuZFJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiB0YWJsZS5zZXR0aW5ncy5mZXRjaFVybCxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIFBhZ2U6IHRhYmxlLnNldHRpbmdzLmN1cnJlbnRQYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgIFBhZ2VTaXplOiB0YWJsZS5zZXR0aW5ncy5wYWdlU2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICBDcml0ZXJpYTogdGFibGUuc2V0dGluZ3MuZmlsdGVyXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRhYmxlLnNldHRpbmdzLmZldGNoQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICB0YWJsZS5zZXR0aW5ncy5mZXRjaENhbGxiYWNrKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGFibGUuc2V0dGluZ3MucGFnZXMgPSBNYXRoLmNlaWwocmVzdWx0LmRhdGEudG90YWwgLyByZXN1bHQuZGF0YS5wYWdlU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdC5kYXRhLnJlY29yZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICByZW5kZXJlZCArPSB0YWJsZS5zZXR0aW5ncy5yb3dUZW1wbGF0ZShyZXN1bHQuZGF0YS5yZWNvcmRzW2ldKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlbmRlcmVkICs9IFwiPC90Ym9keT5cIjtcclxuICAgICAgICAgICAgICAgIHJlbmRlcmVkICs9IGdldEZvb3Rlcih0YWJsZSk7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlbmRlcmVkKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHJvbWlzZS50aGVuKFxyXG4gICAgICAgIGZ1bmN0aW9uIChyZW5kZXJlZCkge1xyXG4gICAgICAgICAgICB0YWJsZS5zZXR0aW5ncy5jb250YWluZXIuaHRtbChyZW5kZXJlZCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGFibGUuc2V0dGluZ3MucmVuZGVyZWRDYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgdGFibGUuc2V0dGluZ3MucmVuZGVyZWRDYWxsYmFjayh0YWJsZS5zZXR0aW5ncy5jb250YWluZXJbMF0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0YWJsZVwiKVswXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhYmxlIHtcclxuICAgIGNvbnN0cnVjdG9yKGFyZ3MpIHtcclxuICAgICAgICB0aGlzLnNldHRpbmdzID0ge1xyXG4gICAgICAgICAgICBjb250YWluZXI6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgY3VycmVudFBhZ2U6IDAsXHJcbiAgICAgICAgICAgIGRhdGE6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgZmV0Y2hDYWxsYmFjazogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICBmZXRjaFVybDogXCJcIixcclxuICAgICAgICAgICAgaGVhZGVyVGVtcGxhdGU6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgcGFnZVNpemU6IDEwLFxyXG4gICAgICAgICAgICBwcmVmZXRjaFBhZ2VzOiA1LFxyXG4gICAgICAgICAgICByb3dUZW1wbGF0ZTogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICB0YWJsZUNsYXNzOiBcImVzcGFsaWVyLXRhYmxlXCIsXHJcbiAgICAgICAgICAgIHJlbmRlcmVkQ2FsbGJhY2s6IHVuZGVmaW5lZFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgICQuZXh0ZW5kKHRoaXMuc2V0dGluZ3MsIGFyZ3MpO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuc2V0dGluZ3MuZmV0Y2hVcmwgJiYgIXRoaXMuc2V0dGluZ3MuZGF0YSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiWW91IG11c3QgZWl0aGVyIHNwZWNpZnkgYSBmZXRjaCB1cmwgb3IgcGFzcyBpbiBkYXRhIGZvciB0aGUgdGFibGUgdG8gZGlzcGxheS5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuc2V0dGluZ3MuY29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJZb3UgbXVzdCBzcGVjaWZ5IGEgY29udGFpbmVyIHRvIHBsYWNlIHRoZSB0YWJsZSBpbi5cIilcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5zZXR0aW5ncy5yb3dUZW1wbGF0ZSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiWW91IG11c3QgcHJvdmlkZSBhIHJvdyB0ZW1wbGF0ZS5cIilcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNldHRpbmdzLmRhdGEpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5wYWdlcyA9IE1hdGguY2VpbCh0aGlzLnNldHRpbmdzLmRhdGEubGVuZ3RoIC8gdGhpcy5zZXR0aW5ncy5wYWdlU2l6ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkLmV4dGVuZCh0aGlzLnNldHRpbmdzLCBhcmdzKTtcclxuXHJcbiAgICAgICAgbGV0IHRhYmxlID0gdGhpcztcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnNldHRpbmdzLmNvbnRhaW5lci5vbihcImNsaWNrXCIsIFwiLmVzcGFsaWVyLXRhYmxlLWJ1dHRvblwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRhYmxlLmdvVG9QYWdlKCQodGhpcykuZGF0YShcInBhZ2VcIikpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZW5kZXJUYWJsZSh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBuZXh0KCkge1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3MuY3VycmVudFBhZ2UrKztcclxuICAgICAgICByZW5kZXJUYWJsZSh0aGlzKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwcmV2aW91cygpIHtcclxuICAgICAgICB0aGlzLnNldHRpbmdzLmN1cnJlbnRQYWdlLS07XHJcbiAgICAgICAgcmVuZGVyVGFibGUodGhpcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsdGVyKGZpbHRlcikge1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3MuZmlsdGVyID0gZmlsdGVyO1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3MuY3VycmVudFBhZ2UgPSAwO1xyXG4gICAgICAgIHJlbmRlclRhYmxlKHRoaXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGdvVG9QYWdlKHBhZ2UpIHtcclxuICAgICAgICBpZiAocGFnZSA8IDAgfHwgcGFnZSA+PSB0aGlzLnNldHRpbmdzLnBhZ2VzKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0dGluZ3MuY3VycmVudFBhZ2UgPSBwYWdlO1xyXG4gICAgICAgIHJlbmRlclRhYmxlKHRoaXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogYzovZ2l0L0VzcGFsaWVySlMvc3JjL2pzL2VzcGFsaWVyLnRhYmxlLmpzXG4gKiovIiwiaW1wb3J0IGVzcGFsaWVyIGZyb20gXCIuLi8uLi9lc3BhbGllclwiO1xyXG5pbXBvcnQgcm93VGVtcGxhdGUgZnJvbSBcIi4vdGVtcGxhdGVzL3Jvd1wiO1xyXG5cclxubGV0IGRhdGEgPSBbXHJcblx0e1xyXG5cdFx0XCJjb2wxXCI6IFwiUmVjb3JkIDEtMVwiLFxyXG5cdFx0XCJjb2wyXCI6IFwiUmVjb3JkIDEtMlwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcImNvbDFcIjogXCJSZWNvcmQgMi0xXCIsXHJcblx0XHRcImNvbDJcIjogXCJSZWNvcmQgMi0yXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiY29sMVwiOiBcIlJlY29yZCAzLTFcIixcclxuXHRcdFwiY29sMlwiOiBcIlJlY29yZCAzLTJcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJjb2wxXCI6IFwiUmVjb3JkIDQtMVwiLFxyXG5cdFx0XCJjb2wyXCI6IFwiUmVjb3JkIDQtMlwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcImNvbDFcIjogXCJSZWNvcmQgNS0xXCIsXHJcblx0XHRcImNvbDJcIjogXCJSZWNvcmQgNS0yXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiY29sMVwiOiBcIlJlY29yZCA2LTFcIixcclxuXHRcdFwiY29sMlwiOiBcIlJlY29yZCA2LTJcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJjb2wxXCI6IFwiUmVjb3JkIDctMVwiLFxyXG5cdFx0XCJjb2wyXCI6IFwiUmVjb3JkIDctMlwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcImNvbDFcIjogXCJSZWNvcmQgOC0xXCIsXHJcblx0XHRcImNvbDJcIjogXCJSZWNvcmQgOC0yXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiY29sMVwiOiBcIlJlY29yZCA5LTFcIixcclxuXHRcdFwiY29sMlwiOiBcIlJlY29yZCA5LTJcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJjb2wxXCI6IFwiUmVjb3JkIDEwLTFcIixcclxuXHRcdFwiY29sMlwiOiBcIlJlY29yZCAxMC0yXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiY29sMVwiOiBcIlJlY29yZCAxMS0xXCIsXHJcblx0XHRcImNvbDJcIjogXCJSZWNvcmQgMTEtMlwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcImNvbDFcIjogXCJSZWNvcmQgMTItMVwiLFxyXG5cdFx0XCJjb2wyXCI6IFwiUmVjb3JkIDEyLTJcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJjb2wxXCI6IFwiUmVjb3JkIDEzLTFcIixcclxuXHRcdFwiY29sMlwiOiBcIlJlY29yZCAxMy0yXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiY29sMVwiOiBcIlJlY29yZCAxNC0xXCIsXHJcblx0XHRcImNvbDJcIjogXCJSZWNvcmQgMTQtMlwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcImNvbDFcIjogXCJSZWNvcmQgMTUtMVwiLFxyXG5cdFx0XCJjb2wyXCI6IFwiUmVjb3JkIDE1LTJcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJjb2wxXCI6IFwiUmVjb3JkIDE2LTFcIixcclxuXHRcdFwiY29sMlwiOiBcIlJlY29yZCAxNi0yXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiY29sMVwiOiBcIlJlY29yZCAxNy0xXCIsXHJcblx0XHRcImNvbDJcIjogXCJSZWNvcmQgMTctMlwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcImNvbDFcIjogXCJSZWNvcmQgMTgtMVwiLFxyXG5cdFx0XCJjb2wyXCI6IFwiUmVjb3JkIDE4LTJcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJjb2wxXCI6IFwiUmVjb3JkIDE5LTFcIixcclxuXHRcdFwiY29sMlwiOiBcIlJlY29yZCAxOS0yXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiY29sMVwiOiBcIlJlY29yZCAyMC0xXCIsXHJcblx0XHRcImNvbDJcIjogXCJSZWNvcmQgMjAtMlwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcImNvbDFcIjogXCJSZWNvcmQgMjEtMVwiLFxyXG5cdFx0XCJjb2wyXCI6IFwiUmVjb3JkIDIxLTJcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJjb2wxXCI6IFwiUmVjb3JkIDIyLTFcIixcclxuXHRcdFwiY29sMlwiOiBcIlJlY29yZCAyMi0yXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiY29sMVwiOiBcIlJlY29yZCAyMy0xXCIsXHJcblx0XHRcImNvbDJcIjogXCJSZWNvcmQgMjMtMlwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcImNvbDFcIjogXCJSZWNvcmQgMjQtMVwiLFxyXG5cdFx0XCJjb2wyXCI6IFwiUmVjb3JkIDI0LTJcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJjb2wxXCI6IFwiUmVjb3JkIDI1LTFcIixcclxuXHRcdFwiY29sMlwiOiBcIlJlY29yZCAyNS0yXCJcclxuXHR9XHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoY29udGFpbmVyKSA9PiB7XHJcblx0cmV0dXJuIG5ldyBlc3BhbGllci5UYWJsZSh7XHJcblx0XHRjb250YWluZXIsXHJcblx0XHRyb3dUZW1wbGF0ZSxcclxuXHRcdGRhdGFcclxuXHR9KTtcclxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGM6L2dpdC9Fc3BhbGllckpTL3NyYy9qcy9kZW1vL3RhYmxlL2RlbW9UYWJsZS5qc1xuICoqLyIsInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcImM6XFxcXGdpdFxcXFxFc3BhbGllckpTXFxcXG5vZGVfbW9kdWxlc1xcXFxoYW5kbGViYXJzXFxcXHJ1bnRpbWUuanNcIik7XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCJjb21waWxlclwiOls2LFwiPj0gMi4wLjAtYmV0YS4xXCJdLFwibWFpblwiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgaGVscGVyLCBhbGlhczE9aGVscGVycy5oZWxwZXJNaXNzaW5nLCBhbGlhczI9XCJmdW5jdGlvblwiLCBhbGlhczM9dGhpcy5lc2NhcGVFeHByZXNzaW9uO1xuXG4gIHJldHVybiBcIjx0cj5cXHJcXG5cdDx0ZD5cIlxuICAgICsgYWxpYXMzKCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMuY29sMSB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY29sMSA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczEpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczIgPyBoZWxwZXIuY2FsbChkZXB0aDAse1wibmFtZVwiOlwiY29sMVwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCI8L3RkPlxcclxcblx0PHRkPlwiXG4gICAgKyBhbGlhczMoKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5jb2wyIHx8IChkZXB0aDAgIT0gbnVsbCA/IGRlcHRoMC5jb2wyIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMSksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMiA/IGhlbHBlci5jYWxsKGRlcHRoMCx7XCJuYW1lXCI6XCJjb2wyXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIjwvdGQ+XFxyXFxuPC90cj5cIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi90YWJsZS90ZW1wbGF0ZXMvcm93Lmhic1xuICoqIG1vZHVsZSBpZCA9IDI5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgZXNwYWxpZXIgZnJvbSBcIi4uLy4uL2VzcGFsaWVyXCI7XHJcbmltcG9ydCBkaWFsb2dUZW1wbGF0ZSBmcm9tIFwiLi90ZW1wbGF0ZXMvZGlhbG9nLXRlbXBsYXRlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoKSB7XHJcblx0ZXNwYWxpZXIuZGlhbG9nKHtcclxuICAgICAgICBlbGVtZW50OiAkKCQudHJpbShkaWFsb2dUZW1wbGF0ZSgpKSksXHJcbiAgICAgICAgYnV0dG9uczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCJzdWJtaXRcIixcclxuICAgICAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uIChkaWFsb2cpIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydChcInN1Ym1pdCFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlhbG9nLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiY2FuY2VsXCIsXHJcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbiAoZGlhbG9nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlhbG9nLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH0pO1xyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogYzovZ2l0L0VzcGFsaWVySlMvc3JjL2pzL2RlbW8vZGlhbG9nL2RpYWxvZy1kZW1vLmpzXG4gKiovIiwidmFyIEhhbmRsZWJhcnMgPSByZXF1aXJlKFwiYzpcXFxcZ2l0XFxcXEVzcGFsaWVySlNcXFxcbm9kZV9tb2R1bGVzXFxcXGhhbmRsZWJhcnNcXFxccnVudGltZS5qc1wiKTtcbm1vZHVsZS5leHBvcnRzID0gKEhhbmRsZWJhcnNbXCJkZWZhdWx0XCJdIHx8IEhhbmRsZWJhcnMpLnRlbXBsYXRlKHtcImNvbXBpbGVyXCI6WzYsXCI+PSAyLjAuMC1iZXRhLjFcIl0sXCJtYWluXCI6ZnVuY3Rpb24oZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHJldHVybiBcIjxmb3JtIGNsYXNzPVxcXCJjb2wtc20tNCBjb2wtc20tb2Zmc2V0LTRcXFwiIHN0eWxlPVxcXCJiYWNrZ3JvdW5kOiB3aGl0ZTtwYWRkaW5nOiAxZW07Ym9yZGVyLXJhZGl1czogLjE1ZW07Ym94LXNoYWRvdzogMCAwIC41ZW0gIzgxZTE4MTtcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcImV4YW1wbGVJbnB1dEVtYWlsMVxcXCI+RW1haWwgYWRkcmVzczwvbGFiZWw+XFxyXFxuICAgICAgICA8aW5wdXQgcmVxdWlyZWQgdHlwZT1cXFwiZW1haWxcXFwiIGNsYXNzPVxcXCJmb3JtLWNvbnRyb2xcXFwiIGlkPVxcXCJleGFtcGxlSW5wdXRFbWFpbDFcXFwiIHBsYWNlaG9sZGVyPVxcXCJFbnRlciBlbWFpbFxcXCI+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmb3JtLWdyb3VwXFxcIj5cXHJcXG4gICAgICAgIDxsYWJlbCBmb3I9XFxcImV4YW1wbGVJbnB1dFBhc3N3b3JkMVxcXCI+UGFzc3dvcmQ8L2xhYmVsPlxcclxcbiAgICAgICAgPGlucHV0IHJlcXVpcmVkIHR5cGU9XFxcInBhc3N3b3JkXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwiZXhhbXBsZUlucHV0UGFzc3dvcmQxXFxcIiBwbGFjZWhvbGRlcj1cXFwiUGFzc3dvcmRcXFwiPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGEgaHJlZj1cXFwiamF2YXNjcmlwdDogdm9pZCgwKTtcXFwiIGlkPVxcXCJzdWJtaXRcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRlZmF1bHRcXFwiPlN1Ym1pdDwvYT5cXHJcXG4gICAgPGEgaHJlZj1cXFwiamF2YXNjcmlwdDogdm9pZCgwKTtcXFwiIGlkPVxcXCJjYW5jZWxcXFwiIGNsYXNzPVxcXCJidG4gYnRuLWRhbmdlclxcXCI+Q2FuY2VsPC9hPlxcclxcbjwvZm9ybT5cIjtcbn0sXCJ1c2VEYXRhXCI6dHJ1ZX0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9kaWFsb2cvdGVtcGxhdGVzL2RpYWxvZy10ZW1wbGF0ZS5oYnNcbiAqKiBtb2R1bGUgaWQgPSAzMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==