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
	
	_espalier2["default"].showInfo("It seems the libraries have loaded!");
	_espalier2["default"].wire("#standard-form");
	
	var dialogTemplate = Handlebars.compile($("#dialog-template").html());
	$(".datepicker").datepicker();
	
	var table = _espalier2["default"].table({
	    container: $("#demo-table"),
	    rowTemplate: Handlebars.compile($("#test-row-template").html()),
	    data: [{ col1: "Record 1-1", col2: "Record 1-2" }, { col1: "Record 2-1", col2: "Record 2-2" }, { col1: "Record 3-1", col2: "Record 3-2" }, { col1: "Record 4-1", col2: "Record 4-2" }, { col1: "Record 5-1", col2: "Record 5-2" }, { col1: "Record 6-1", col2: "Record 6-2" }, { col1: "Record 7-1", col2: "Record 7-2" }, { col1: "Record 8-1", col2: "Record 8-2" }, { col1: "Record 9-1", col2: "Record 9-2" }, { col1: "Record 10-1", col2: "Record 10-2" }, { col1: "Record 11-1", col2: "Record 11-2" }, { col1: "Record 12-1", col2: "Record 12-2" }, { col1: "Record 13-1", col2: "Record 13-2" }, { col1: "Record 14-1", col2: "Record 14-2" }, { col1: "Record 15-1", col2: "Record 15-2" }, { col1: "Record 16-1", col2: "Record 16-2" }, { col1: "Record 17-1", col2: "Record 17-2" }, { col1: "Record 18-1", col2: "Record 18-2" }, { col1: "Record 19-1", col2: "Record 19-2" }, { col1: "Record 20-1", col2: "Record 20-2" }, { col1: "Record 21-1", col2: "Record 21-2" }, { col1: "Record 22-1", col2: "Record 22-2" }, { col1: "Record 23-1", col2: "Record 23-2" }, { col1: "Record 24-1", col2: "Record 24-2" }, { col1: "Record 25-1", col2: "Record 25-2" }]
	});
	
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
	
	$("#show-dialog").click(function () {
	    _espalier2["default"].dialog({
	        element: $($.trim(dialogTemplate())),
	        buttons: [{
	            name: "submit",
	            handler: function handler(dialog) {
	                alert("submit!");
	                dialog.hide();
	            }
	        }, {
	            name: "cancel",
	            handler: function handler(dialog) {
	                dialog.hide();
	            }
	        }]
	    });
	});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _espalierCore = __webpack_require__(3);
	
	var _espalierCore2 = _interopRequireDefault(_espalierCore);
	
	var _espalierValidation = __webpack_require__(9);
	
	var _espalierValidation2 = _interopRequireDefault(_espalierValidation);
	
	var _espalierMessageFactory = __webpack_require__(4);
	
	var _espalierMessageFactory2 = _interopRequireDefault(_espalierMessageFactory);
	
	var _espalierForms = __webpack_require__(11);
	
	var _espalierForms2 = _interopRequireDefault(_espalierForms);
	
	var _espalierWaitscreen = __webpack_require__(6);
	
	var _espalierWaitscreen2 = _interopRequireDefault(_espalierWaitscreen);
	
	var _espalierTables = __webpack_require__(12);
	
	var _espalierTables2 = _interopRequireDefault(_espalierTables);
	
	var _espalierDialog = __webpack_require__(13);
	
	var _espalierDialog2 = _interopRequireDefault(_espalierDialog);
	
	var espalier = {
	    showWarning: _espalierCore2["default"].showWarning,
	    showInfo: _espalierCore2["default"].showInfo,
	    sendRequest: _espalierCore2["default"].sendRequest,
	    table: _espalierTables2["default"].create,
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
	    }
	};
	
	exports["default"] = espalier;
	module.exports = exports["default"];

/***/ },
/* 3 */
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
	var testDate = new Date("2011-06-02T09:34:29+02:00");
	
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
	                if (p[4] == "+") tz *= -1;
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
	                    if (typeof obj[key] === "object") core.extend(out[key], obj[key]);else out[key] = obj[key];
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
	            el.className += " " + className;
	        }
	    },
	    removeClass: function removeClass(el, className) {
	        if (el.classList) {
	            el.classList.remove(className);
	        } else {
	            el.className = el.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
	        }
	    },
	    addEventListener: function addEventListener(el, eventName, handler) {
	        if (el.addEventListener) {
	            el.addEventListener(eventName, handler);
	        } else {
	            el.attachEvent("on" + eventName, function () {
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
	        return typeof toTest === "string" || toTest instanceof String;
	    }
	};
	
	exports["default"] = core;
	module.exports = exports["default"];

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _espalierCore = __webpack_require__(3);
	
	var _espalierCore2 = _interopRequireDefault(_espalierCore);
	
	var _templatesBootstrapTemplates = __webpack_require__(5);
	
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
	                this.message.remove();
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
	
	var hourglass = "data:image/svg+xml;utf8," + "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"uil-gears\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid meet\" width=\"120px\" height=\"120px\">" + "  <rect class=\"bk\" fill=\"none\" x=\"0\" y=\"0\" width=\"100\" height=\"100\" />" + "  <g transform=\"translate(-20 -20)\">" + "    <path fill=\"#fafafa\" d=\"M 79.9 52.6 C 80 51.8 80 50.9 80 50 s 0 -1.8 -0.1 -2.6 l -5.1 -0.4 c -0.3 -2.4 -0.9 -4.6 -1.8 -6.7 l 4.2 -2.9 c -0.7 -1.6 -1.6 -3.1 -2.6 -4.5 L 70 35 c -1.4 -1.9 -3.1 -3.5 -4.9 -4.9 l 2.2 -4.6 c -1.4 -1 -2.9 -1.9 -4.5 -2.6 L 59.8 27 c -2.1 -0.9 -4.4 -1.5 -6.7 -1.8 l -0.4 -5.1 C 51.8 20 50.9 20 50 20 s -1.8 0 -2.6 0.1 l -0.4 5.1 c -2.4 0.3 -4.6 0.9 -6.7 1.8 l -2.9 -4.1 c -1.6 0.7 -3.1 1.6 -4.5 2.6 l 2.1 4.6 c -1.9 1.4 -3.5 3.1 -5 4.9 l -4.5 -2.1 c -1 1.4 -1.9 2.9 -2.6 4.5 l 4.1 2.9 c -0.9 2.1 -1.5 4.4 -1.8 6.8 l -5 0.4 C 20 48.2 20 49.1 20 50 s 0 1.8 0.1 2.6 l 5 0.4 c 0.3 2.4 0.9 4.7 1.8 6.8 l -4.1 2.9 c 0.7 1.6 1.6 3.1 2.6 4.5 l 4.5 -2.1 c 1.4 1.9 3.1 3.5 5 4.9 l -2.1 4.6 c 1.4 1 2.9 1.9 4.5 2.6 l 2.9 -4.1 c 2.1 0.9 4.4 1.5 6.7 1.8 l 0.4 5.1 C 48.2 80 49.1 80 50 80 s 1.8 0 2.6 -0.1 l 0.4 -5.1 c 2.3 -0.3 4.6 -0.9 6.7 -1.8 l 2.9 4.2 c 1.6 -0.7 3.1 -1.6 4.5 -2.6 L 65 69.9 c 1.9 -1.4 3.5 -3 4.9 -4.9 l 4.6 2.2 c 1 -1.4 1.9 -2.9 2.6 -4.5 L 73 59.8 c 0.9 -2.1 1.5 -4.4 1.8 -6.7 L 79.9 52.6 Z M 50 65 c -8.3 0 -15 -6.7 -15 -15 c 0 -8.3 6.7 -15 15 -15 s 15 6.7 15 15 C 65 58.3 58.3 65 50 65 Z\">" + "      <animateTransform type=\"rotate\" dur=\"2s\" repeatCount=\"indefinite\" to=\"0 50 50\" from=\"90 50 50\" attributeName=\"transform\" />" + "    </path>" + "  </g>" + "  <g transform=\"translate(20 20) rotate(15 50.0002 50)\">" + "    <path fill=\"#efefef\" d=\"M 79.9 52.6 C 80 51.8 80 50.9 80 50 s 0 -1.8 -0.1 -2.6 l -5.1 -0.4 c -0.3 -2.4 -0.9 -4.6 -1.8 -6.7 l 4.2 -2.9 c -0.7 -1.6 -1.6 -3.1 -2.6 -4.5 L 70 35 c -1.4 -1.9 -3.1 -3.5 -4.9 -4.9 l 2.2 -4.6 c -1.4 -1 -2.9 -1.9 -4.5 -2.6 L 59.8 27 c -2.1 -0.9 -4.4 -1.5 -6.7 -1.8 l -0.4 -5.1 C 51.8 20 50.9 20 50 20 s -1.8 0 -2.6 0.1 l -0.4 5.1 c -2.4 0.3 -4.6 0.9 -6.7 1.8 l -2.9 -4.1 c -1.6 0.7 -3.1 1.6 -4.5 2.6 l 2.1 4.6 c -1.9 1.4 -3.5 3.1 -5 4.9 l -4.5 -2.1 c -1 1.4 -1.9 2.9 -2.6 4.5 l 4.1 2.9 c -0.9 2.1 -1.5 4.4 -1.8 6.8 l -5 0.4 C 20 48.2 20 49.1 20 50 s 0 1.8 0.1 2.6 l 5 0.4 c 0.3 2.4 0.9 4.7 1.8 6.8 l -4.1 2.9 c 0.7 1.6 1.6 3.1 2.6 4.5 l 4.5 -2.1 c 1.4 1.9 3.1 3.5 5 4.9 l -2.1 4.6 c 1.4 1 2.9 1.9 4.5 2.6 l 2.9 -4.1 c 2.1 0.9 4.4 1.5 6.7 1.8 l 0.4 5.1 C 48.2 80 49.1 80 50 80 s 1.8 0 2.6 -0.1 l 0.4 -5.1 c 2.3 -0.3 4.6 -0.9 6.7 -1.8 l 2.9 4.2 c 1.6 -0.7 3.1 -1.6 4.5 -2.6 L 65 69.9 c 1.9 -1.4 3.5 -3 4.9 -4.9 l 4.6 2.2 c 1 -1.4 1.9 -2.9 2.6 -4.5 L 73 59.8 c 0.9 -2.1 1.5 -4.4 1.8 -6.7 L 79.9 52.6 Z M 50 65 c -8.3 0 -15 -6.7 -15 -15 c 0 -8.3 6.7 -15 15 -15 s 15 6.7 15 15 C 65 58.3 58.3 65 50 65 Z\">" + "      <animateTransform type=\"rotate\" dur=\"2s\" repeatCount=\"indefinite\" to=\"90 50 50\" from=\"0 50 50\" attributeName=\"transform\" />" + "    </path>" + "  </g>" + "</svg>";
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
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _espalierCore = __webpack_require__(3);
	
	var _espalierCore2 = _interopRequireDefault(_espalierCore);
	
	var _espalierFormsControl = __webpack_require__(10);
	
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
	    function Required(control) {
	        _classCallCheck(this, Required);
	
	        _get(Object.getPrototypeOf(Required.prototype), "constructor", this).call(this, control);
	    }
	
	    _inherits(Required, _Validation);
	
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
	    function Email(control) {
	        _classCallCheck(this, Email);
	
	        _get(Object.getPrototypeOf(Email.prototype), "constructor", this).call(this, control);
	    }
	
	    _inherits(Email, _Validation2);
	
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
	    function Date(control) {
	        _classCallCheck(this, Date);
	
	        _get(Object.getPrototypeOf(Date.prototype), "constructor", this).call(this, control);
	    }
	
	    _inherits(Date, _Validation3);
	
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
	    function RequiredDependent(control, whenVal, dependent) {
	        _classCallCheck(this, RequiredDependent);
	
	        _get(Object.getPrototypeOf(RequiredDependent.prototype), "constructor", this).call(this, control);
	        this.whenVal = whenVal;
	        this.dependent = dependent;
	    }
	
	    _inherits(RequiredDependent, _Validation4);
	
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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _espalierCore = __webpack_require__(3);
	
	var _espalierCore2 = _interopRequireDefault(_espalierCore);
	
	var _espalierValidation = __webpack_require__(9);
	
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
	
	                var radios = _espalierCore2["default"].find("input[type=\"radio\"]", group);
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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _espalierCore = __webpack_require__(3);
	
	var _espalierCore2 = _interopRequireDefault(_espalierCore);
	
	var _espalierFormsControl = __webpack_require__(10);
	
	var _espalierFormsControl2 = _interopRequireDefault(_espalierFormsControl);
	
	var EspalierForm = (function () {
	    function EspalierForm(formToWire) {
	        var _this = this;
	
	        _classCallCheck(this, EspalierForm);
	
	        if (_espalierCore2["default"].isString(formToWire)) {
	            this.form = _espalierCore2["default"].find(formToWire)[0];
	        } else {
	            this.form = formToWire[0];
	        }
	
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
	
	        _espalierCore2["default"].addEventListener(this.form, "submit", function (e) {
	            e.preventDefault();
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
	    }
	
	    _createClass(EspalierForm, [{
	        key: "submit",
	        value: function submit() {
	            var _this2 = this;
	
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
	
	            var _iteratorNormalCompletion3 = true;
	            var _didIteratorError3 = false;
	            var _iteratorError3 = undefined;
	
	            try {
	                for (var _iterator3 = this.controls[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                    var control = _step3.value;
	
	                    control.message.remove();
	
	                    if (!control.validate()) {
	                        valid = false;
	                    }
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
	
	            return valid;
	        }
	    }]);
	
	    return EspalierForm;
	})();
	
	exports["default"] = function (formToWire) {
	    return new EspalierForm(formToWire);
	};
	
	;
	module.exports = exports["default"];

/***/ },
/* 12 */
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
	
	var _espalierCore = __webpack_require__(3);
	
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
	
	var TableInstance = (function () {
	    function TableInstance(args) {
	        _classCallCheck(this, TableInstance);
	
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
	    }
	
	    _createClass(TableInstance, [{
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
	
	    return TableInstance;
	})();
	
	;
	
	var tables = {
	    create: function create(args) {
	        var table = new TableInstance(args);
	        table.settings.container.on("click", ".espalier-table-button", function () {
	            table.goToPage($(this).data("page"));
	        });
	        renderTable(table);
	        return table;
	    }
	};
	
	exports["default"] = tables;
	module.exports = exports["default"];

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
	
	var _espalierCore = __webpack_require__(3);
	
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
	
	            var height, scrollTop, top, windowHeight, dialog;
	            _espalierCore2["default"].hideMainMessage();
	            _espalierCommon2["default"].showVellum();
	            windowHeight = _espalierCommon2["default"].window.height();
	            dialog = this.settings.element;
	            dialog.css("position", "absolute");
	            $("a, button, input, select, textarea").attr("tabindex", "-1");
	
	            _espalierCommon2["default"].body.append(dialog);
	
	            scrollTop = _espalierCommon2["default"].window.scrollTop();
	
	            height = dialog.height();
	            top = windowHeight / 2 - height / 2 + scrollTop;
	            top = top > 0 ? top : 0;
	            dialog.css("top", top);
	            $(":focus").blur();
	            $(".focus", dialog).first().focus();
	
	            dialog.css("display", "none");
	
	            dialog.velocity("transition.whirlIn", {
	                duration: 450
	            });
	
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;
	
	            try {
	                var _loop = function () {
	                    var button = _step.value;
	
	                    $("#" + button.name, dialog).click(function () {
	                        button.handler(_this);
	                    });
	                };
	
	                for (var _iterator = this.settings.buttons[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    _loop();
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
	    }]);
	
	    return Dialog;
	})();
	
	exports["default"] = function (args) {
	    return new Dialog(args);
	};
	
	module.exports = exports["default"];

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA4N2I0YjY3NWMwZWJhYzgxOTIzYSIsIndlYnBhY2s6Ly8vQzovZ2l0L0VzcGFsaWVySlMvc3JjL2pzL2RlbW8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL0M6L2dpdC9Fc3BhbGllckpTL3NyYy9qcy9lc3BhbGllci5qcyIsIndlYnBhY2s6Ly8vQzovZ2l0L0VzcGFsaWVySlMvc3JjL2pzL2VzcGFsaWVyLmNvcmUuanMiLCJ3ZWJwYWNrOi8vL0M6L2dpdC9Fc3BhbGllckpTL3NyYy9qcy9lc3BhbGllci5tZXNzYWdlRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vQzovZ2l0L0VzcGFsaWVySlMvc3JjL2pzL3RlbXBsYXRlcy9ib290c3RyYXBUZW1wbGF0ZXMuanMiLCJ3ZWJwYWNrOi8vL0M6L2dpdC9Fc3BhbGllckpTL3NyYy9qcy9lc3BhbGllci53YWl0c2NyZWVuLmpzIiwid2VicGFjazovLy9DOi9naXQvRXNwYWxpZXJKUy9zcmMvanMvZXNwYWxpZXIuY29tbW9uLmpzIiwid2VicGFjazovLy9DOi9naXQvRXNwYWxpZXJKUy9+L3B1YnN1Yi1qcy9zcmMvcHVic3ViLmpzIiwid2VicGFjazovLy9DOi9naXQvRXNwYWxpZXJKUy9zcmMvanMvZXNwYWxpZXIudmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vQzovZ2l0L0VzcGFsaWVySlMvc3JjL2pzL2VzcGFsaWVyLmZvcm1zLmNvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vL0M6L2dpdC9Fc3BhbGllckpTL3NyYy9qcy9lc3BhbGllci5mb3Jtcy5qcyIsIndlYnBhY2s6Ly8vQzovZ2l0L0VzcGFsaWVySlMvc3JjL2pzL2VzcGFsaWVyLnRhYmxlcy5qcyIsIndlYnBhY2s6Ly8vQzovZ2l0L0VzcGFsaWVySlMvc3JjL2pzL2VzcGFsaWVyLmRpYWxvZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQ0N0Q3FCLENBQWE7Ozs7QUFFbEMsdUJBQVMsUUFBUSxDQUFDLHFDQUFxQyxDQUFDLENBQUM7QUFDekQsdUJBQVMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7O0FBRWhDLEtBQUksY0FBYyxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUN0RSxFQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7O0FBRTlCLEtBQUksS0FBSyxHQUFHLHNCQUFTLEtBQUssQ0FBQztBQUN2QixjQUFTLEVBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQztBQUMzQixnQkFBVyxFQUFFLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDL0QsU0FBSSxFQUFFLENBQ0YsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsRUFDMUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsRUFDMUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsRUFDMUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsRUFDMUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsRUFDMUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsRUFDMUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsRUFDMUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsRUFDMUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsRUFDMUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsRUFDNUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsRUFDNUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsRUFDNUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsRUFDNUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsRUFDNUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsRUFDNUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsRUFDNUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsRUFDNUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsRUFDNUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsRUFDNUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsRUFDNUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsRUFDNUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsRUFDNUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUks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LEVBQUUsb0JBQVk7QUFDbEIsMkJBQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUNoQixzQkFBQyxDQUFDLHNCQUFzQixDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7O0FBRW5DLHlCQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO0FBQzFCLHFEQUFPLFVBQVUsRUFBRSxDQUFDO3NCQUN2QjtrQkFDSjtjQUNKLENBQUMsQ0FBQztBQUNILG9CQUFPLElBQUksQ0FBQztVQUNmOzs7WUFqRUMsTUFBTTs7O3NCQW9FRyxVQUFVLElBQUksRUFBRTtBQUMzQixZQUFPLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0VBQzNCIiwiZmlsZSI6ImRlbW9fY29tcGlsZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImFwcFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJhcHBcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb25cbiAqKi8iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDg3YjRiNjc1YzBlYmFjODE5MjNhXG4gKiovIiwiaW1wb3J0IGVzcGFsaWVyIGZyb20gXCIuLi9lc3BhbGllclwiO1xyXG5cclxuZXNwYWxpZXIuc2hvd0luZm8oXCJJdCBzZWVtcyB0aGUgbGlicmFyaWVzIGhhdmUgbG9hZGVkIVwiKTtcclxuZXNwYWxpZXIud2lyZShcIiNzdGFuZGFyZC1mb3JtXCIpO1xyXG5cclxudmFyIGRpYWxvZ1RlbXBsYXRlID0gSGFuZGxlYmFycy5jb21waWxlKCQoXCIjZGlhbG9nLXRlbXBsYXRlXCIpLmh0bWwoKSk7XHJcbiQoXCIuZGF0ZXBpY2tlclwiKS5kYXRlcGlja2VyKCk7XHJcblxyXG52YXIgdGFibGUgPSBlc3BhbGllci50YWJsZSh7XHJcbiAgICBjb250YWluZXI6ICQoXCIjZGVtby10YWJsZVwiKSxcclxuICAgIHJvd1RlbXBsYXRlOiBIYW5kbGViYXJzLmNvbXBpbGUoJChcIiN0ZXN0LXJvdy10ZW1wbGF0ZVwiKS5odG1sKCkpLFxyXG4gICAgZGF0YTogW1xyXG4gICAgICAgIHsgY29sMTogXCJSZWNvcmQgMS0xXCIsIGNvbDI6IFwiUmVjb3JkIDEtMlwiIH0sXHJcbiAgICAgICAgeyBjb2wxOiBcIlJlY29yZCAyLTFcIiwgY29sMjogXCJSZWNvcmQgMi0yXCIgfSxcclxuICAgICAgICB7IGNvbDE6IFwiUmVjb3JkIDMtMVwiLCBjb2wyOiBcIlJlY29yZCAzLTJcIiB9LFxyXG4gICAgICAgIHsgY29sMTogXCJSZWNvcmQgNC0xXCIsIGNvbDI6IFwiUmVjb3JkIDQtMlwiIH0sXHJcbiAgICAgICAgeyBjb2wxOiBcIlJlY29yZCA1LTFcIiwgY29sMjogXCJSZWNvcmQgNS0yXCIgfSxcclxuICAgICAgICB7IGNvbDE6IFwiUmVjb3JkIDYtMVwiLCBjb2wyOiBcIlJlY29yZCA2LTJcIiB9LFxyXG4gICAgICAgIHsgY29sMTogXCJSZWNvcmQgNy0xXCIsIGNvbDI6IFwiUmVjb3JkIDctMlwiIH0sXHJcbiAgICAgICAgeyBjb2wxOiBcIlJlY29yZCA4LTFcIiwgY29sMjogXCJSZWNvcmQgOC0yXCIgfSxcclxuICAgICAgICB7IGNvbDE6IFwiUmVjb3JkIDktMVwiLCBjb2wyOiBcIlJlY29yZCA5LTJcIiB9LFxyXG4gICAgICAgIHsgY29sMTogXCJSZWNvcmQgMTAtMVwiLCBjb2wyOiBcIlJlY29yZCAxMC0yXCIgfSxcclxuICAgICAgICB7IGNvbDE6IFwiUmVjb3JkIDExLTFcIiwgY29sMjogXCJSZWNvcmQgMTEtMlwiIH0sXHJcbiAgICAgICAgeyBjb2wxOiBcIlJlY29yZCAxMi0xXCIsIGNvbDI6IFwiUmVjb3JkIDEyLTJcIiB9LFxyXG4gICAgICAgIHsgY29sMTogXCJSZWNvcmQgMTMtMVwiLCBjb2wyOiBcIlJlY29yZCAxMy0yXCIgfSxcclxuICAgICAgICB7IGNvbDE6IFwiUmVjb3JkIDE0LTFcIiwgY29sMjogXCJSZWNvcmQgMTQtMlwiIH0sXHJcbiAgICAgICAgeyBjb2wxOiBcIlJlY29yZCAxNS0xXCIsIGNvbDI6IFwiUmVjb3JkIDE1LTJcIiB9LFxyXG4gICAgICAgIHsgY29sMTogXCJSZWNvcmQgMTYtMVwiLCBjb2wyOiBcIlJlY29yZCAxNi0yXCIgfSxcclxuICAgICAgICB7IGNvbDE6IFwiUmVjb3JkIDE3LTFcIiwgY29sMjogXCJSZWNvcmQgMTctMlwiIH0sXHJcbiAgICAgICAgeyBjb2wxOiBcIlJlY29yZCAxOC0xXCIsIGNvbDI6IFwiUmVjb3JkIDE4LTJcIiB9LFxyXG4gICAgICAgIHsgY29sMTogXCJSZWNvcmQgMTktMVwiLCBjb2wyOiBcIlJlY29yZCAxOS0yXCIgfSxcclxuICAgICAgICB7IGNvbDE6IFwiUmVjb3JkIDIwLTFcIiwgY29sMjogXCJSZWNvcmQgMjAtMlwiIH0sXHJcbiAgICAgICAgeyBjb2wxOiBcIlJlY29yZCAyMS0xXCIsIGNvbDI6IFwiUmVjb3JkIDIxLTJcIiB9LFxyXG4gICAgICAgIHsgY29sMTogXCJSZWNvcmQgMjItMVwiLCBjb2wyOiBcIlJlY29yZCAyMi0yXCIgfSxcclxuICAgICAgICB7IGNvbDE6IFwiUmVjb3JkIDIzLTFcIiwgY29sMjogXCJSZWNvcmQgMjMtMlwiIH0sXHJcbiAgICAgICAgeyBjb2wxOiBcIlJlY29yZCAyNC0xXCIsIGNvbDI6IFwiUmVjb3JkIDI0LTJcIiB9LFxyXG4gICAgICAgIHsgY29sMTogXCJSZWNvcmQgMjUtMVwiLCBjb2wyOiBcIlJlY29yZCAyNS0yXCIgfVxyXG4gICAgXVxyXG59KTtcclxuXHJcbiQoXCIjc2VhcmNoLXJlY29yZHNcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGZpbHRlciA9IHtcclxuICAgICAgICBTdGFydERhdGU6ICQoXCIjc3RhcnQtZGF0ZVwiKS52YWwoKSxcclxuICAgICAgICBFbmREYXRlOiAkKFwiI2VuZC1kYXRlXCIpLnZhbCgpLFxyXG4gICAgICAgIENsaWVudElQQWRkcmVzczogJChcIiNpcC1hZGRyZXNzXCIpLnZhbCgpLFxyXG4gICAgICAgIFVzZXJOYW1lOiAkKFwiI3VzZXItbmFtZVwiKS52YWwoKSxcclxuICAgICAgICBNYWNBZGRyZXNzOiAkKFwiI21hYy1hZGRyZXNzXCIpLnZhbCgpLFxyXG4gICAgICAgIFdvcmtpbmdUZWxlcGhvbmVOdW1iZXI6ICQoXCIjd3RuXCIpLnZhbCgpLFxyXG4gICAgICAgIEJpbGxpbmdUZWxlcGhvbmVOdW1iZXI6ICQoXCIjYnRuXCIpLnZhbCgpXHJcbiAgICB9O1xyXG5cclxuICAgIHRhYmxlLmZpbHRlcihmaWx0ZXIpO1xyXG59KTtcclxuXHJcbiQoXCIjc2hvdy1kaWFsb2dcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgZXNwYWxpZXIuZGlhbG9nKHtcclxuICAgICAgICBlbGVtZW50OiAkKCQudHJpbShkaWFsb2dUZW1wbGF0ZSgpKSksXHJcbiAgICAgICAgYnV0dG9uczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcInN1Ym1pdFwiLFxyXG4gICAgICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24gKGRpYWxvZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwic3VibWl0IVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBkaWFsb2cuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcImNhbmNlbFwiLFxyXG4gICAgICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24gKGRpYWxvZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpYWxvZy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9KTtcclxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovZ2l0L0VzcGFsaWVySlMvc3JjL2pzL2RlbW8vaW5kZXguanNcbiAqKi8iLCJpbXBvcnQgY29yZSBmcm9tIFwiLi9lc3BhbGllci5jb3JlXCI7XHJcbmltcG9ydCB2YWxpZGF0aW9uIGZyb20gXCIuL2VzcGFsaWVyLnZhbGlkYXRpb25cIjtcclxuaW1wb3J0IG1lc3NhZ2VGYWN0b3J5IGZyb20gXCIuL2VzcGFsaWVyLm1lc3NhZ2VGYWN0b3J5XCI7XHJcbmltcG9ydCBmb3JtcyBmcm9tIFwiLi9lc3BhbGllci5mb3Jtc1wiO1xyXG5pbXBvcnQgd2FpdFNjcmVlbiBmcm9tIFwiLi9lc3BhbGllci53YWl0c2NyZWVuXCI7XHJcbmltcG9ydCB0YWJsZXMgZnJvbSBcIi4vZXNwYWxpZXIudGFibGVzXCI7XHJcbmltcG9ydCBkaWFsb2cgZnJvbSBcIi4vZXNwYWxpZXIuZGlhbG9nXCI7XHJcblxyXG52YXIgZXNwYWxpZXIgPSB7XHJcbiAgICBzaG93V2FybmluZzogY29yZS5zaG93V2FybmluZyxcclxuICAgIHNob3dJbmZvOiBjb3JlLnNob3dJbmZvLFxyXG4gICAgc2VuZFJlcXVlc3Q6IGNvcmUuc2VuZFJlcXVlc3QsXHJcbiAgICB0YWJsZTogdGFibGVzLmNyZWF0ZSxcclxuICAgIHdpcmU6IGZvcm1zLFxyXG4gICAgc2hvd1dhaXRTY3JlZW46IHdhaXRTY3JlZW4uc2hvdyxcclxuICAgIGhpZGVXYWl0U2NyZWVuOiB3YWl0U2NyZWVuLmhpZGUsXHJcbiAgICBzaG9ydERhdGU6IGNvcmUuc2hvcnREYXRlLFxyXG4gICAgc2hvcnRUaW1lOiBjb3JlLnNob3J0VGltZSxcclxuICAgIG51bWJlcldpdGhDb21tYXM6IGNvcmUubnVtYmVyV2l0aENvbW1hcyxcclxuICAgIHB1Ymxpc2g6IGNvcmUucHVibGlzaCxcclxuICAgIHBhcnNlSVNPRGF0ZTogY29yZS5wYXJzZUlTT0RhdGUsXHJcbiAgICBzdWJzY3JpYmU6IGNvcmUuc3Vic2NyaWJlLFxyXG4gICAgZGlhbG9nOiBmdW5jdGlvbiAoYXJncykge1xyXG4gICAgICAgIHJldHVybiBkaWFsb2coYXJncykuc2hvdygpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZXNwYWxpZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovZ2l0L0VzcGFsaWVySlMvc3JjL2pzL2VzcGFsaWVyLmpzXG4gKiovIiwiaW1wb3J0IG1lc3NhZ2VGYWN0b3J5IGZyb20gXCIuL2VzcGFsaWVyLm1lc3NhZ2VGYWN0b3J5XCI7XHJcbmltcG9ydCB3YWl0c2NyZWVuIGZyb20gXCIuL2VzcGFsaWVyLndhaXRzY3JlZW5cIjtcclxuaW1wb3J0IGNvbW1vbiBmcm9tIFwiLi9lc3BhbGllci5jb21tb25cIjtcclxuaW1wb3J0IHB1YnN1YiBmcm9tIFwicHVic3ViLWpzXCI7XHJcblxyXG52YXIgZmluZCA9IGZ1bmN0aW9uIChzZWxlY3Rvciwgcm9vdCkge1xyXG4gICAgcm9vdCA9IHJvb3QgPyByb290IDogZG9jdW1lbnQ7XHJcbiAgICByZXR1cm4gcm9vdC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcclxufTtcclxuXHJcbnZhciBtYWluTWVzc2FnZSA9IG1lc3NhZ2VGYWN0b3J5LmNyZWF0ZSh7XHJcbiAgICBhdHRhY2hUbzogZmluZChcImJvZHlcIilbMF1cclxufSk7XHJcblxyXG52YXIgcGFyc2VEYXRlO1xyXG52YXIgdGVzdERhdGUgPSBuZXcgRGF0ZSgnMjAxMS0wNi0wMlQwOTozNDoyOSswMjowMCcpO1xyXG5cclxuaWYgKCF0ZXN0RGF0ZSB8fCArdGVzdERhdGUgIT09IDEzMDcwMDAwNjkwMDApIHtcclxuICAgIHBhcnNlRGF0ZSA9IGZ1bmN0aW9uIChzKSB7XHJcbiAgICAgICAgdmFyIGRheSwgdHosXHJcbiAgICAgICAgICAgIHJ4ID0gL14oXFxkezR9XFwtXFxkXFxkXFwtXFxkXFxkKFt0VCBdW1xcZDpcXC5dKik/KShbelpdfChbK1xcLV0pKFxcZFxcZCk6KFxcZFxcZCkpPyQvLFxyXG4gICAgICAgICAgICBwID0gcnguZXhlYyhzKSB8fCBbXTtcclxuICAgICAgICBpZiAocFsxXSkge1xyXG4gICAgICAgICAgICBkYXkgPSBwWzFdLnNwbGl0KC9cXEQvKTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIEwgPSBkYXkubGVuZ3RoOyBpIDwgTDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBkYXlbaV0gPSBwYXJzZUludChkYXlbaV0sIDEwKSB8fCAwO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBkYXlbMV0gLT0gMTtcclxuICAgICAgICAgICAgZGF5ID0gbmV3IERhdGUoRGF0ZS5VVEMuYXBwbHkoRGF0ZSwgZGF5KSk7XHJcbiAgICAgICAgICAgIGlmICghZGF5LmdldERhdGUoKSkgcmV0dXJuIE5hTjtcclxuICAgICAgICAgICAgaWYgKHBbNV0pIHtcclxuICAgICAgICAgICAgICAgIHR6ID0gKHBhcnNlSW50KHBbNV0sIDEwKSAqIDYwKTtcclxuICAgICAgICAgICAgICAgIGlmIChwWzZdKSB0eiArPSBwYXJzZUludChwWzZdLCAxMCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocFs0XSA9PSAnKycpIHR6ICo9IC0xO1xyXG4gICAgICAgICAgICAgICAgaWYgKHR6KSBkYXkuc2V0VVRDTWludXRlcyhkYXkuZ2V0VVRDTWludXRlcygpICsgdHopO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBkYXk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBOYU47XHJcbiAgICB9O1xyXG59XHJcbmVsc2Uge1xyXG4gICAgcGFyc2VEYXRlID0gZnVuY3Rpb24gKHMpIHtcclxuICAgICAgICByZXR1cm4gbmV3IERhdGUocyk7XHJcbiAgICB9O1xyXG59XHJcblxyXG50ZXN0RGF0ZSA9IHVuZGVmaW5lZDtcclxuXHJcbnZhciBjb3JlID0ge1xyXG4gICAgc2VuZFJlcXVlc3Q6IGZ1bmN0aW9uIChyZXEpIHtcclxuICAgICAgICB3YWl0c2NyZWVuLnNob3coKTtcclxuICAgICAgICAkKFwiLlwiICsgbWFpbk1lc3NhZ2Uuc2V0dGluZ3MubWVzc2FnZUNvbnRhaW5lckNsYXNzKS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgdmFyIGFqYXhTZXR0aW5ncyA9IHtcclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgeGhyRmllbGRzOiB7XHJcbiAgICAgICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3RhdHVzQ29kZToge1xyXG4gICAgICAgICAgICAgICAgNTAwOiBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb3JlLnNob3dFcnJvcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLnJlc3BvbnNlSlNPTi5NZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjc3NDbGFzczogXCJlcnJvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgNDAwOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZXJyb3JzID0gW107XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQuZWFjaChyZXNwb25zZS5yZXNwb25zZUpTT04uZXJyb3JzLCBmdW5jdGlvbiAoaW5kZXgsIGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvci5zb3VyY2UgJiYgZXJyb3Iuc291cmNlLnBhcmFtZXRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNwZWNpZmljRmllbGQgPSAkKFwiI1wiICsgZXJyb3Iuc291cmNlLnBhcmFtZXRlci50b0xvd2VyQ2FzZSgpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3BlY2lmaWNGaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmaWVsZE1lc3NhZ2UgPSBzcGVjaWZpY0ZpZWxkLmRhdGEoXCJtZXNzYWdlXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGRNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkTWVzc2FnZS5zaG93KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLmRldGFpbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VUeXBlOiBtZXNzYWdlRmFjdG9yeS5tZXNzYWdlVHlwZS5FcnJvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5wdXNoKGVycm9yLmRldGFpbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3JlLnNob3dFcnJvcihlcnJvcnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgd2FpdHNjcmVlbi5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcS5ldmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdWJzdWIucHVibGlzaChyZXEuZXZlbnQsIHJlc3BvbnNlLnJlc3BvbnNlSlNPTik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVxLm9uU3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXEub25TdWNjZXNzKHJlc3BvbnNlLnJlc3BvbnNlSlNPTik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgJC5leHRlbmQoYWpheFNldHRpbmdzLCByZXEpO1xyXG5cclxuICAgICAgICByZXR1cm4gJC5hamF4KGFqYXhTZXR0aW5ncyk7XHJcbiAgICB9LFxyXG4gICAgc2hvd1dhcm5pbmc6IGZ1bmN0aW9uIChtZXNzYWdlcykge1xyXG4gICAgICAgIG1haW5NZXNzYWdlLnNob3coe1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlcyxcclxuICAgICAgICAgICAgbWVzc2FnZVR5cGU6IG1lc3NhZ2VGYWN0b3J5Lm1lc3NhZ2VUeXBlLldhcm5pbmdcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBzaG93RXJyb3I6IGZ1bmN0aW9uIChtZXNzYWdlcykge1xyXG4gICAgICAgIG1haW5NZXNzYWdlLnNob3coe1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlcyxcclxuICAgICAgICAgICAgbWVzc2FnZVR5cGU6IG1lc3NhZ2VGYWN0b3J5Lm1lc3NhZ2VUeXBlLkVycm9yXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgc2hvd0luZm86IGZ1bmN0aW9uIChtZXNzYWdlcykge1xyXG4gICAgICAgIG1haW5NZXNzYWdlLnNob3coe1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlcyxcclxuICAgICAgICAgICAgbWVzc2FnZVR5cGU6IG1lc3NhZ2VGYWN0b3J5Lm1lc3NhZ2VUeXBlLkluZm9cclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBoaWRlTWFpbk1lc3NhZ2U6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBtYWluTWVzc2FnZS5yZW1vdmUoKTtcclxuICAgIH0sXHJcbiAgICBpc0VtcHR5T3JTcGFjZXM6IGZ1bmN0aW9uIChzdHIpIHtcclxuICAgICAgICByZXR1cm4gc3RyID09PSB1bmRlZmluZWQgfHwgc3RyID09PSBudWxsIHx8IHN0ci5tYXRjaCgvXlxccyokLykgIT09IG51bGw7XHJcbiAgICB9LFxyXG4gICAgaXNFbWFpbDogZnVuY3Rpb24gKHN0cikge1xyXG4gICAgICAgIHZhciBlbWFpbFJlZ2V4ID0gL14oKFtcXHctXStcXC4pK1tcXHctXSt8KFthLXpBLVpdezF9fFtcXHctXXsyLH0pKUAoKChbMC0xXT9bMC05XXsxLDJ9fDI1WzAtNV18MlswLTRdWzAtOV0pXFwuKFswLTFdP1swLTldezEsMn18MjVbMC01XXwyWzAtNF1bMC05XSlcXC4oWzAtMV0/WzAtOV17MSwyfXwyNVswLTVdfDJbMC00XVswLTldKVxcLihbMC0xXT9bMC05XXsxLDJ9fDI1WzAtNV18MlswLTRdWzAtOV0pKXsxfXwoW2EtekEtWl0rW1xcdy1dK1xcLikrW2EtekEtWl17Miw0fSkkLztcclxuICAgICAgICByZXR1cm4gY29yZS5pc0VtcHR5T3JTcGFjZXMoc3RyKSB8fCBzdHIubWF0Y2goZW1haWxSZWdleCk7XHJcbiAgICB9LFxyXG4gICAgaXNEYXRlOiBmdW5jdGlvbiAoc3RyKSB7XHJcbiAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZShzdHIpO1xyXG4gICAgICAgIHJldHVybiBjb3JlLmlzRW1wdHlPclNwYWNlcyhzdHIpIHx8IChkICE9IFwiSW52YWxpZCBEYXRlXCIgJiYgIWlzTmFOKGQpKTtcclxuICAgIH0sXHJcbiAgICBudW1iZXJXaXRoQ29tbWFzOiBmdW5jdGlvbiBudW1iZXJXaXRoQ29tbWFzKHgpIHtcclxuICAgICAgICB2YXIgcGFydHMgPSB4LnRvU3RyaW5nKCkuc3BsaXQoXCIuXCIpO1xyXG4gICAgICAgIHBhcnRzWzBdID0gcGFydHNbMF0ucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgXCIsXCIpO1xyXG4gICAgICAgIHJldHVybiBwYXJ0cy5qb2luKFwiLlwiKTtcclxuICAgIH0sXHJcbiAgICBwYXJzZUlTT0RhdGU6IHBhcnNlRGF0ZSxcclxuICAgIHNob3J0RGF0ZTogZnVuY3Rpb24gKGRhdGUpIHtcclxuICAgICAgICBpZiAoIShkYXRlIGluc3RhbmNlb2YgRGF0ZSkpIHtcclxuICAgICAgICAgICAgZGF0ZSA9IHBhcnNlRGF0ZShkYXRlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoZGF0ZS5nZXRNb250aCgpICsgMSkgK1xyXG4gICAgICAgICAgICBcIi9cIiArIGRhdGUuZ2V0RGF0ZSgpICtcclxuICAgICAgICAgICAgXCIvXCIgKyBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgICB9LFxyXG4gICAgc2hvcnRUaW1lOiBmdW5jdGlvbiAoZGF0ZSkge1xyXG4gICAgICAgIGlmICghKGRhdGUgaW5zdGFuY2VvZiBEYXRlKSkge1xyXG4gICAgICAgICAgICBkYXRlID0gcGFyc2VEYXRlKGRhdGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGhvdXIgPSBkYXRlLmdldEhvdXJzKCk7XHJcbiAgICAgICAgdmFyIGFtcG0gPSBcIkFNXCI7XHJcblxyXG4gICAgICAgIGlmIChob3VyID4gMTEpIHtcclxuICAgICAgICAgICAgaG91ciAtPSAxMjtcclxuICAgICAgICAgICAgYW1wbSA9IFwiUE1cIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChob3VyID09PSAwKSB7XHJcbiAgICAgICAgICAgIGhvdXIgPSAxMjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBtaW51dGVzID0gXCIwMFwiICsgZGF0ZS5nZXRNaW51dGVzKCk7XHJcbiAgICAgICAgcmV0dXJuIGhvdXIgKyBcIjpcIiArIG1pbnV0ZXMuc3Vic3RyaW5nKG1pbnV0ZXMubGVuZ3RoIC0gMikgKyBcIiBcIiArIGFtcG07XHJcbiAgICB9LFxyXG4gICAgcHVibGlzaDogZnVuY3Rpb24gKHRvcGljLCBtZXNzYWdlKSB7XHJcbiAgICAgICAgcHVic3ViLnB1Ymxpc2godG9waWMsIG1lc3NhZ2UpO1xyXG4gICAgfSxcclxuICAgIHN1YnNjcmliZTogZnVuY3Rpb24gKHRvcGljLCBoYW5kbGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHB1YnN1Yi5zdWJzY3JpYmUodG9waWMsIGZ1bmN0aW9uICh0b3BpYywgbWVzc2FnZSkge1xyXG4gICAgICAgICAgICBoYW5kbGVyKG1lc3NhZ2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGZpbmQsXHJcbiAgICBleHRlbmQ6IGZ1bmN0aW9uIChvdXQpIHtcclxuICAgICAgICBvdXQgPSBvdXQgfHwge307XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBvYmogPSBhcmd1bWVudHNbaV07XHJcblxyXG4gICAgICAgICAgICBpZiAoIW9iailcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIG9iaikge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmpba2V5XSA9PT0gJ29iamVjdCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvcmUuZXh0ZW5kKG91dFtrZXldLCBvYmpba2V5XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRba2V5XSA9IG9ialtrZXldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gb3V0O1xyXG4gICAgfSxcclxuICAgIGNsb3Nlc3Q6IGZ1bmN0aW9uIGNsb3Nlc3QoZWwsIHNlbGVjdG9yKSB7XHJcbiAgICAgICAgdmFyIG1hdGNoZXNGbjtcclxuXHJcbiAgICAgICAgLy8gZmluZCB2ZW5kb3IgcHJlZml4XHJcbiAgICAgICAgW1wibWF0Y2hlc1wiLCBcIndlYmtpdE1hdGNoZXNTZWxlY3RvclwiLCBcIm1vek1hdGNoZXNTZWxlY3RvclwiLCBcIm1zTWF0Y2hlc1NlbGVjdG9yXCIsIFwib01hdGNoZXNTZWxlY3RvclwiXS5zb21lKGZ1bmN0aW9uIChmbikge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGRvY3VtZW50LmJvZHlbZm5dID09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgbWF0Y2hlc0ZuID0gZm47XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8gdHJhdmVyc2UgcGFyZW50c1xyXG4gICAgICAgIHdoaWxlIChlbCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBsZXQgcGFyZW50ID0gZWwucGFyZW50RWxlbWVudDtcclxuICAgICAgICAgICAgaWYgKHBhcmVudCAhPT0gbnVsbCAmJiBwYXJlbnRbbWF0Y2hlc0ZuXShzZWxlY3RvcikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwYXJlbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWwgPSBwYXJlbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH0sXHJcbiAgICBhZGRDbGFzczogZnVuY3Rpb24gKGVsLCBjbGFzc05hbWUpIHtcclxuICAgICAgICBpZiAoZWwuY2xhc3NMaXN0KSB7XHJcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlbC5jbGFzc05hbWUgKz0gJyAnICsgY2xhc3NOYW1lO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICByZW1vdmVDbGFzczogZnVuY3Rpb24gKGVsLCBjbGFzc05hbWUpIHtcclxuICAgICAgICBpZiAoZWwuY2xhc3NMaXN0KSB7XHJcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlbC5jbGFzc05hbWUgPSBlbC5jbGFzc05hbWUucmVwbGFjZShuZXcgUmVnRXhwKCcoXnxcXFxcYiknICsgY2xhc3NOYW1lLnNwbGl0KCcgJykuam9pbignfCcpICsgJyhcXFxcYnwkKScsICdnaScpLCAnICcpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhZGRFdmVudExpc3RlbmVyOiBmdW5jdGlvbiAoZWwsIGV2ZW50TmFtZSwgaGFuZGxlcikge1xyXG4gICAgICAgIGlmIChlbC5hZGRFdmVudExpc3RlbmVyKSB7XHJcbiAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBoYW5kbGVyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlbC5hdHRhY2hFdmVudCgnb24nICsgZXZlbnROYW1lLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVyLmNhbGwoZWwpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWF0Y2hlczogZnVuY3Rpb24gKGVsLCBzZWxlY3Rvcikge1xyXG4gICAgICAgIHZhciBfbWF0Y2hlcyA9IChlbC5tYXRjaGVzIHx8IGVsLm1hdGNoZXNTZWxlY3RvciB8fCBlbC5tc01hdGNoZXNTZWxlY3RvciB8fCBlbC5tb3pNYXRjaGVzU2VsZWN0b3IgfHwgZWwud2Via2l0TWF0Y2hlc1NlbGVjdG9yIHx8IGVsLm9NYXRjaGVzU2VsZWN0b3IpO1xyXG5cclxuICAgICAgICBpZiAoX21hdGNoZXMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9tYXRjaGVzLmNhbGwoZWwsIHNlbGVjdG9yKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgbm9kZXMgPSBlbC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gbm9kZXMubGVuZ3RoOyBpLS07KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobm9kZXNbaV0gPT09IGVsKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgaXNTdHJpbmc6IGZ1bmN0aW9uKHRvVGVzdCkge1xyXG4gICAgICAgIHJldHVybiB0eXBlb2YgdG9UZXN0ID09PSAnc3RyaW5nJyB8fCB0b1Rlc3QgaW5zdGFuY2VvZiBTdHJpbmc7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb3JlO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L2dpdC9Fc3BhbGllckpTL3NyYy9qcy9lc3BhbGllci5jb3JlLmpzXG4gKiovIiwiaW1wb3J0IGNvcmUgZnJvbSBcIi4vZXNwYWxpZXIuY29yZVwiO1xyXG5pbXBvcnQgYm9vdHN0cmFwVGVtcGxhdGVzIGZyb20gXCIuL3RlbXBsYXRlcy9ib290c3RyYXBUZW1wbGF0ZXNcIjtcclxuXHJcbmNsYXNzIE1lc3NhZ2VEaXNwbGF5ZXIge1xyXG4gICAgY29uc3RydWN0b3IoYXJncykge1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSB7XHJcbiAgICAgICAgICAgIGF0dGFjaFRvOiBudWxsLFxyXG4gICAgICAgICAgICBtZXNzYWdlQ29udGFpbmVyQ2xhc3M6IFwibWVzc2FnZS1jb250YWluZXJcIixcclxuICAgICAgICAgICAgY2xvc2VNZXNzYWdlQ2xhc3M6IFwiY2xvc2UtbWVzc2FnZVwiLFxyXG4gICAgICAgICAgICBpbmZvTWVzc2FnZUNsYXNzOiBcImluZm8tbWVzc2FnZVwiLFxyXG4gICAgICAgICAgICB3YXJuaW5nTWVzc2FnZUNsYXNzOiBcIndhcm5pbmctbWVzc2FnZVwiLFxyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2VDbGFzczogXCJlcnJvci1tZXNzYWdlXCIsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3NNZXNzYWdlQ2xhc3M6IFwic3VjY2Vzcy1tZXNzYWdlXCIsXHJcbiAgICAgICAgICAgIG1lc3NhZ2VBdHRhY2htZW50OiBmYWN0b3J5Lm1lc3NhZ2VBdHRhY2htZW50LkZpeGVkLFxyXG4gICAgICAgICAgICBvblJlbW92ZWQ6IGZ1bmN0aW9uICgpIHsgfSxcclxuICAgICAgICAgICAgb25BZGRlZDogZnVuY3Rpb24gKCkgeyB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgJC5leHRlbmQodGhpcy5zZXR0aW5ncywgYXJncyk7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5zZXR0aW5ncy5hdHRhY2hUbykge1xyXG4gICAgICAgICAgICB0aHJvdyAoXCJNZXNzYWdlRmFjdG9yeSByZXF1aXJlcyBhbiBhdHRhY2hUbyBhcmd1bWVudC5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5tZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZS5yZW1vdmUoKTtcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLm9uUmVtb3ZlZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzaG93KG1lc3NhZ2VBcmdzKSB7XHJcbiAgICAgICAgbGV0IG1lc3NhZ2VUeXBlQ2xhc3MsIG1lc3NhZ2VTZXR0aW5ncywgbWVzc2FnZUF0dGFjaG1lbnRDbGFzcztcclxuXHJcbiAgICAgICAgLy9OT1RFOiBUaGVyZSBzaG91bGQgb25seSBiZSBvbmUgbWVzc2FnZSBkaXNwbGF5ZWQgcGVyIGluc3RhbmNlLlxyXG4gICAgICAgIGlmICh0aGlzLm1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9OT1RFOiBBbGxvdyB0aGVtIHRvIGVpdGhlciB1c2UgYW4gYXJyYXkgb2YgbWVzc2FnZXMgb3IgYVxyXG4gICAgICAgIC8vICAgICAgc2luZ2xlIG1lc3NhZ2UuXHJcbiAgICAgICAgaWYgKGNvcmUuaXNTdHJpbmcobWVzc2FnZUFyZ3MubWVzc2FnZSkpIHtcclxuICAgICAgICAgICAgbWVzc2FnZUFyZ3MubWVzc2FnZSA9IFttZXNzYWdlQXJncy5tZXNzYWdlXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1lc3NhZ2VTZXR0aW5ncyA9IHtcclxuICAgICAgICAgICAgbWVzc2FnZVR5cGU6IGZhY3RvcnkubWVzc2FnZVR5cGUuSW5mbyxcclxuICAgICAgICAgICAgbWVzc2FnZTogW11cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAkLmV4dGVuZChtZXNzYWdlU2V0dGluZ3MsIG1lc3NhZ2VBcmdzKTtcclxuXHJcbiAgICAgICAgaWYgKG1lc3NhZ2VTZXR0aW5ncy5tZXNzYWdlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vIG1lc3NhZ2UgdG8gZGlzcGxheS5cIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN3aXRjaCAobWVzc2FnZVNldHRpbmdzLm1lc3NhZ2VUeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgZmFjdG9yeS5tZXNzYWdlVHlwZS5JbmZvOlxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZVR5cGVDbGFzcyA9IHRoaXMuc2V0dGluZ3MuaW5mb01lc3NhZ2VDbGFzcztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGZhY3RvcnkubWVzc2FnZVR5cGUuU3VjY2VzczpcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VUeXBlQ2xhc3MgPSB0aGlzLnNldHRpbmdzLnN1Y2Nlc3NNZXNzYWdlQ2xhc3M7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBmYWN0b3J5Lm1lc3NhZ2VUeXBlLkVycm9yOlxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZVR5cGVDbGFzcyA9IHRoaXMuc2V0dGluZ3MuZXJyb3JNZXNzYWdlQ2xhc3M7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBmYWN0b3J5Lm1lc3NhZ2VUeXBlLldhcm5pbmc6XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlVHlwZUNsYXNzID0gdGhpcy5zZXR0aW5ncy53YXJuaW5nTWVzc2FnZUNsYXNzO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkludmFsaWQgbWVzc2FnZSB0eXBlLlwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN3aXRjaCAodGhpcy5zZXR0aW5ncy5tZXNzYWdlQXR0YWNobWVudCkge1xyXG4gICAgICAgICAgICBjYXNlIGZhY3RvcnkubWVzc2FnZUF0dGFjaG1lbnQuRml4ZWQ6XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlQXR0YWNobWVudENsYXNzID0gXCJmaXhlZFwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgZmFjdG9yeS5tZXNzYWdlQXR0YWNobWVudC5GbG93OlxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZUF0dGFjaG1lbnRDbGFzcyA9IFwiZmxvd1wiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlQXR0YWNobWVudENsYXNzID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gYm9vdHN0cmFwVGVtcGxhdGVzLm1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICBtZXNzYWdlVHlwZUNsYXNzOiBtZXNzYWdlVHlwZUNsYXNzLFxyXG4gICAgICAgICAgICBtZXNzYWdlczogbWVzc2FnZVNldHRpbmdzLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgIG1lc3NhZ2VDb250YWluZXJDbGFzczogdGhpcy5zZXR0aW5ncy5tZXNzYWdlQ29udGFpbmVyQ2xhc3MsXHJcbiAgICAgICAgICAgIGNsb3NlTWVzc2FnZUNsYXNzOiB0aGlzLnNldHRpbmdzLmNsb3NlTWVzc2FnZUNsYXNzLFxyXG4gICAgICAgICAgICBtZXNzYWdlQXR0YWNobWVudENsYXNzOiBtZXNzYWdlQXR0YWNobWVudENsYXNzLFxyXG4gICAgICAgICAgICBtb3JlVGhhbk9uZTogKCFjb3JlLmlzU3RyaW5nKG1lc3NhZ2VBcmdzLm1lc3NhZ2UpICYmIG1lc3NhZ2VBcmdzLm1lc3NhZ2UubGVuZ3RoID4gMSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5hdHRhY2hUby5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2UpO1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3Mub25BZGRlZCh0aGlzLm1lc3NhZ2UpO1xyXG5cclxuICAgICAgICBsZXQgZGlzcGxheWVkTWVzc2FnZSA9IHRoaXM7XHJcblxyXG4gICAgICAgIGxldCBjbG9zZUJ1dHRvbnMgPSBBcnJheS5mcm9tKGNvcmUuZmluZChgLiR7dGhpcy5zZXR0aW5ncy5jbG9zZU1lc3NhZ2VDbGFzc31gLCB0aGlzLm1lc3NhZ2UpKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgYnV0dG9uIG9mIGNsb3NlQnV0dG9ucykge1xyXG4gICAgICAgICAgICBjb3JlLmFkZEV2ZW50TGlzdGVuZXIoYnV0dG9uLCBcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXllZE1lc3NhZ2UucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWVzc2FnZTtcclxuICAgIH1cclxufTtcclxuXHJcbnZhciBmYWN0b3J5ID0ge1xyXG4gICAgY3JlYXRlOiBmdW5jdGlvbiAoYXJncykge1xyXG4gICAgICAgIHJldHVybiBuZXcgTWVzc2FnZURpc3BsYXllcihhcmdzKTtcclxuICAgIH0sXHJcbiAgICBtZXNzYWdlVHlwZToge1xyXG4gICAgICAgIEluZm86IFwiSW5mb1wiLFxyXG4gICAgICAgIFN1Y2Nlc3M6IFwic3VjY2Vzc1wiLFxyXG4gICAgICAgIEVycm9yOiBcImVycm9yXCIsXHJcbiAgICAgICAgV2FybmluZzogXCJ3YXJuaW5nXCJcclxuICAgIH0sXHJcbiAgICBtZXNzYWdlQXR0YWNobWVudDoge1xyXG4gICAgICAgIEZpeGVkOiBcIkZpeGVkXCIsXHJcbiAgICAgICAgRmxvdzogXCJGbG93XCJcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZhY3Rvcnk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovZ2l0L0VzcGFsaWVySlMvc3JjL2pzL2VzcGFsaWVyLm1lc3NhZ2VGYWN0b3J5LmpzXG4gKiovIiwidmFyIHRlbXBsYXRlcyA9IHtcclxuXHRtZXNzYWdlOiBmdW5jdGlvbihkYXRhKSB7XHJcblx0XHR2YXIgcm9vdCA9ICQoXCI8ZGl2IC8+XCIpO1xyXG5cdFx0cm9vdC5hZGRDbGFzcyhkYXRhLm1lc3NhZ2VDb250YWluZXJDbGFzcyk7XHJcblx0XHRyb290LmFkZENsYXNzKGRhdGEubWVzc2FnZVR5cGVDbGFzcyk7XHJcblx0XHRyb290LmFkZENsYXNzKGRhdGEubWVzc2FnZUF0dGFjaG1lbnRDbGFzcyk7XHJcblxyXG5cdFx0dmFyIGNsb3NlQnV0dG9uID0gJChcIjxhIC8+XCIpO1xyXG5cdFx0Y2xvc2VCdXR0b24uYXR0cihcImhyZWZcIiwgXCJqYXZhc2NyaXB0OiB2b2lkKDApO1wiKTtcclxuXHRcdGNsb3NlQnV0dG9uLmFkZENsYXNzKGRhdGEuY2xvc2VNZXNzYWdlQ2xhc3MpO1xyXG5cclxuXHRcdHJvb3QuYXBwZW5kKGNsb3NlQnV0dG9uKTtcclxuXHJcblx0XHRpZiAoZGF0YS5tb3JlVGhhbk9uZSkge1xyXG5cdFx0XHR2YXIgbGlzdCA9ICQoXCI8dWwgLz5cIik7XHJcblxyXG5cdFx0XHQkLmVhY2goZGF0YS5tZXNzYWdlcywgZnVuY3Rpb24oaW5kZXgsIG1lc3NhZ2UpIHtcclxuXHRcdFx0XHRsaXN0LmFwcGVuZChcIjxsaT5cIiArIG1lc3NhZ2UgKyBcIjwvbGk+XCIpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHJvb3QuYXBwZW5kKGxpc3QpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cm9vdC5hcHBlbmQoXCI8cD5cIiArIGRhdGEubWVzc2FnZXMgKyBcIjwvcD5cIik7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHJvb3RbMF07XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0ZW1wbGF0ZXM7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovZ2l0L0VzcGFsaWVySlMvc3JjL2pzL3RlbXBsYXRlcy9ib290c3RyYXBUZW1wbGF0ZXMuanNcbiAqKi8iLCJpbXBvcnQgY29tbW9uIGZyb20gXCIuL2VzcGFsaWVyLmNvbW1vblwiO1xyXG5cclxudmFyIHBsZWFzZVdhaXRJZCA9IFwiZXNwYWxpZXItd2FpdC1zY3JlZW5cIjtcclxudmFyIHBsZWFzZVdhaXQgPSAkKFwiPGRpdiAvPlwiKTtcclxucGxlYXNlV2FpdC5hdHRyKFwiaWRcIiwgcGxlYXNlV2FpdElkKTtcclxuXHJcbnZhciBob3VyZ2xhc3MgPSAnZGF0YTppbWFnZS9zdmcreG1sO3V0ZjgsJyArXHJcbiAgICBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiBjbGFzcz1cXFwidWlsLWdlYXJzXFxcIiB2aWV3Qm94PVxcXCIwIDAgMTAwIDEwMFxcXCIgcHJlc2VydmVBc3BlY3RSYXRpbz1cXFwieE1pZFlNaWQgbWVldFxcXCIgd2lkdGg9XFxcIjEyMHB4XFxcIiBoZWlnaHQ9XFxcIjEyMHB4XFxcIj5cIiArXHJcbiAgICBcIiAgPHJlY3QgY2xhc3M9XFxcImJrXFxcIiBmaWxsPVxcXCJub25lXFxcIiB4PVxcXCIwXFxcIiB5PVxcXCIwXFxcIiB3aWR0aD1cXFwiMTAwXFxcIiBoZWlnaHQ9XFxcIjEwMFxcXCIgLz5cIiArXHJcbiAgICBcIiAgPGcgdHJhbnNmb3JtPVxcXCJ0cmFuc2xhdGUoLTIwIC0yMClcXFwiPlwiICtcclxuICAgIFwiICAgIDxwYXRoIGZpbGw9XFxcIiNmYWZhZmFcXFwiIGQ9XFxcIk0gNzkuOSA1Mi42IEMgODAgNTEuOCA4MCA1MC45IDgwIDUwIHMgMCAtMS44IC0wLjEgLTIuNiBsIC01LjEgLTAuNCBjIC0wLjMgLTIuNCAtMC45IC00LjYgLTEuOCAtNi43IGwgNC4yIC0yLjkgYyAtMC43IC0xLjYgLTEuNiAtMy4xIC0yLjYgLTQuNSBMIDcwIDM1IGMgLTEuNCAtMS45IC0zLjEgLTMuNSAtNC45IC00LjkgbCAyLjIgLTQuNiBjIC0xLjQgLTEgLTIuOSAtMS45IC00LjUgLTIuNiBMIDU5LjggMjcgYyAtMi4xIC0wLjkgLTQuNCAtMS41IC02LjcgLTEuOCBsIC0wLjQgLTUuMSBDIDUxLjggMjAgNTAuOSAyMCA1MCAyMCBzIC0xLjggMCAtMi42IDAuMSBsIC0wLjQgNS4xIGMgLTIuNCAwLjMgLTQuNiAwLjkgLTYuNyAxLjggbCAtMi45IC00LjEgYyAtMS42IDAuNyAtMy4xIDEuNiAtNC41IDIuNiBsIDIuMSA0LjYgYyAtMS45IDEuNCAtMy41IDMuMSAtNSA0LjkgbCAtNC41IC0yLjEgYyAtMSAxLjQgLTEuOSAyLjkgLTIuNiA0LjUgbCA0LjEgMi45IGMgLTAuOSAyLjEgLTEuNSA0LjQgLTEuOCA2LjggbCAtNSAwLjQgQyAyMCA0OC4yIDIwIDQ5LjEgMjAgNTAgcyAwIDEuOCAwLjEgMi42IGwgNSAwLjQgYyAwLjMgMi40IDAuOSA0LjcgMS44IDYuOCBsIC00LjEgMi45IGMgMC43IDEuNiAxLjYgMy4xIDIuNiA0LjUgbCA0LjUgLTIuMSBjIDEuNCAxLjkgMy4xIDMuNSA1IDQuOSBsIC0yLjEgNC42IGMgMS40IDEgMi45IDEuOSA0LjUgMi42IGwgMi45IC00LjEgYyAyLjEgMC45IDQuNCAxLjUgNi43IDEuOCBsIDAuNCA1LjEgQyA0OC4yIDgwIDQ5LjEgODAgNTAgODAgcyAxLjggMCAyLjYgLTAuMSBsIDAuNCAtNS4xIGMgMi4zIC0wLjMgNC42IC0wLjkgNi43IC0xLjggbCAyLjkgNC4yIGMgMS42IC0wLjcgMy4xIC0xLjYgNC41IC0yLjYgTCA2NSA2OS45IGMgMS45IC0xLjQgMy41IC0zIDQuOSAtNC45IGwgNC42IDIuMiBjIDEgLTEuNCAxLjkgLTIuOSAyLjYgLTQuNSBMIDczIDU5LjggYyAwLjkgLTIuMSAxLjUgLTQuNCAxLjggLTYuNyBMIDc5LjkgNTIuNiBaIE0gNTAgNjUgYyAtOC4zIDAgLTE1IC02LjcgLTE1IC0xNSBjIDAgLTguMyA2LjcgLTE1IDE1IC0xNSBzIDE1IDYuNyAxNSAxNSBDIDY1IDU4LjMgNTguMyA2NSA1MCA2NSBaXFxcIj5cIiArXHJcbiAgICBcIiAgICAgIDxhbmltYXRlVHJhbnNmb3JtIHR5cGU9XFxcInJvdGF0ZVxcXCIgZHVyPVxcXCIyc1xcXCIgcmVwZWF0Q291bnQ9XFxcImluZGVmaW5pdGVcXFwiIHRvPVxcXCIwIDUwIDUwXFxcIiBmcm9tPVxcXCI5MCA1MCA1MFxcXCIgYXR0cmlidXRlTmFtZT1cXFwidHJhbnNmb3JtXFxcIiAvPlwiICtcclxuICAgIFwiICAgIDwvcGF0aD5cIiArXHJcbiAgICBcIiAgPC9nPlwiICtcclxuICAgIFwiICA8ZyB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSgyMCAyMCkgcm90YXRlKDE1IDUwLjAwMDIgNTApXFxcIj5cIiArXHJcbiAgICBcIiAgICA8cGF0aCBmaWxsPVxcXCIjZWZlZmVmXFxcIiBkPVxcXCJNIDc5LjkgNTIuNiBDIDgwIDUxLjggODAgNTAuOSA4MCA1MCBzIDAgLTEuOCAtMC4xIC0yLjYgbCAtNS4xIC0wLjQgYyAtMC4zIC0yLjQgLTAuOSAtNC42IC0xLjggLTYuNyBsIDQuMiAtMi45IGMgLTAuNyAtMS42IC0xLjYgLTMuMSAtMi42IC00LjUgTCA3MCAzNSBjIC0xLjQgLTEuOSAtMy4xIC0zLjUgLTQuOSAtNC45IGwgMi4yIC00LjYgYyAtMS40IC0xIC0yLjkgLTEuOSAtNC41IC0yLjYgTCA1OS44IDI3IGMgLTIuMSAtMC45IC00LjQgLTEuNSAtNi43IC0xLjggbCAtMC40IC01LjEgQyA1MS44IDIwIDUwLjkgMjAgNTAgMjAgcyAtMS44IDAgLTIuNiAwLjEgbCAtMC40IDUuMSBjIC0yLjQgMC4zIC00LjYgMC45IC02LjcgMS44IGwgLTIuOSAtNC4xIGMgLTEuNiAwLjcgLTMuMSAxLjYgLTQuNSAyLjYgbCAyLjEgNC42IGMgLTEuOSAxLjQgLTMuNSAzLjEgLTUgNC45IGwgLTQuNSAtMi4xIGMgLTEgMS40IC0xLjkgMi45IC0yLjYgNC41IGwgNC4xIDIuOSBjIC0wLjkgMi4xIC0xLjUgNC40IC0xLjggNi44IGwgLTUgMC40IEMgMjAgNDguMiAyMCA0OS4xIDIwIDUwIHMgMCAxLjggMC4xIDIuNiBsIDUgMC40IGMgMC4zIDIuNCAwLjkgNC43IDEuOCA2LjggbCAtNC4xIDIuOSBjIDAuNyAxLjYgMS42IDMuMSAyLjYgNC41IGwgNC41IC0yLjEgYyAxLjQgMS45IDMuMSAzLjUgNSA0LjkgbCAtMi4xIDQuNiBjIDEuNCAxIDIuOSAxLjkgNC41IDIuNiBsIDIuOSAtNC4xIGMgMi4xIDAuOSA0LjQgMS41IDYuNyAxLjggbCAwLjQgNS4xIEMgNDguMiA4MCA0OS4xIDgwIDUwIDgwIHMgMS44IDAgMi42IC0wLjEgbCAwLjQgLTUuMSBjIDIuMyAtMC4zIDQuNiAtMC45IDYuNyAtMS44IGwgMi45IDQuMiBjIDEuNiAtMC43IDMuMSAtMS42IDQuNSAtMi42IEwgNjUgNjkuOSBjIDEuOSAtMS40IDMuNSAtMyA0LjkgLTQuOSBsIDQuNiAyLjIgYyAxIC0xLjQgMS45IC0yLjkgMi42IC00LjUgTCA3MyA1OS44IGMgMC45IC0yLjEgMS41IC00LjQgMS44IC02LjcgTCA3OS45IDUyLjYgWiBNIDUwIDY1IGMgLTguMyAwIC0xNSAtNi43IC0xNSAtMTUgYyAwIC04LjMgNi43IC0xNSAxNSAtMTUgcyAxNSA2LjcgMTUgMTUgQyA2NSA1OC4zIDU4LjMgNjUgNTAgNjUgWlxcXCI+XCIgK1xyXG4gICAgXCIgICAgICA8YW5pbWF0ZVRyYW5zZm9ybSB0eXBlPVxcXCJyb3RhdGVcXFwiIGR1cj1cXFwiMnNcXFwiIHJlcGVhdENvdW50PVxcXCJpbmRlZmluaXRlXFxcIiB0bz1cXFwiOTAgNTAgNTBcXFwiIGZyb209XFxcIjAgNTAgNTBcXFwiIGF0dHJpYnV0ZU5hbWU9XFxcInRyYW5zZm9ybVxcXCIgLz5cIiArXHJcbiAgICBcIiAgICA8L3BhdGg+XCIgK1xyXG4gICAgXCIgIDwvZz5cIiArXHJcbiAgICBcIjwvc3ZnPlwiO1xyXG52YXIgd2FpdEltYWdlID0gJChcIjxpbWcgLz5cIik7XHJcbndhaXRJbWFnZS5hdHRyKFwic3JjXCIsIGhvdXJnbGFzcyk7XHJcbnZhciBpbm5lciA9ICQoXCI8ZGl2IC8+XCIpO1xyXG5pbm5lci5hcHBlbmQod2FpdEltYWdlKTtcclxucGxlYXNlV2FpdC5hcHBlbmQoaW5uZXIpO1xyXG5cclxudmFyIHdhaXRTY3JlZW4gPSB7XHJcbiAgICBzaG93OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCQoXCIjXCIgKyBwbGVhc2VXYWl0SWQpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBsZWFzZVdhaXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb21tb24uYm9keS5hcHBlbmQocGxlYXNlV2FpdCk7XHJcbiAgICAgICAgcmV0dXJuIHBsZWFzZVdhaXQ7XHJcbiAgICB9LFxyXG4gICAgaGlkZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHBsZWFzZVdhaXQucmVtb3ZlKCk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3YWl0U2NyZWVuO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L2dpdC9Fc3BhbGllckpTL3NyYy9qcy9lc3BhbGllci53YWl0c2NyZWVuLmpzXG4gKiovIiwidmFyIGJvZHkgPSAkKFwiYm9keVwiKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGJvZHk6IGJvZHksXHJcbiAgICB3aW5kb3c6ICQod2luZG93KSxcclxuICAgIHNob3dWZWxsdW06IGZ1bmN0aW9uKCkge1xyXG4gICAgXHRpZigkKFwiLmVzcGFsaWVyLXZlbGx1bVwiKS5sZW5ndGggPiAwKSB7XHJcbiAgICBcdFx0cmV0dXJuO1xyXG4gICAgXHR9XHJcblxyXG4gICAgICAgIHZhciB2ZWxsdW0gPSAkKFwiPGRpdiBjbGFzcz1cXFwiZXNwYWxpZXItdmVsbHVtXFxcIiAvPlwiKTtcclxuICAgICAgICBib2R5LmFwcGVuZCh2ZWxsdW0pO1xyXG4gICAgfSxcclxuICAgIGhpZGVWZWxsdW06IGZ1bmN0aW9uKCkge1xyXG4gICAgXHQkKFwiLmVzcGFsaWVyLXZlbGx1bVwiKS5yZW1vdmUoKTtcclxuICAgIH1cclxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9naXQvRXNwYWxpZXJKUy9zcmMvanMvZXNwYWxpZXIuY29tbW9uLmpzXG4gKiovIiwiLypcbkNvcHlyaWdodCAoYykgMjAxMCwyMDExLDIwMTIsMjAxMywyMDE0IE1vcmdhbiBSb2RlcmljayBodHRwOi8vcm9kZXJpY2suZGtcbkxpY2Vuc2U6IE1JVCAtIGh0dHA6Ly9tcmducmRyY2subWl0LWxpY2Vuc2Uub3JnXG5cbmh0dHBzOi8vZ2l0aHViLmNvbS9tcm9kZXJpY2svUHViU3ViSlNcbiovXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3Rvcnkpe1xuXHQndXNlIHN0cmljdCc7XG5cbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKXtcbiAgICAgICAgLy8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuICAgICAgICBkZWZpbmUoWydleHBvcnRzJ10sIGZhY3RvcnkpO1xuXG4gICAgfSBlbHNlIGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpe1xuICAgICAgICAvLyBDb21tb25KU1xuICAgICAgICBmYWN0b3J5KGV4cG9ydHMpO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQnJvd3NlciBnbG9iYWxzXG4gICAgICAgIHZhciBQdWJTdWIgPSB7fTtcbiAgICAgICAgcm9vdC5QdWJTdWIgPSBQdWJTdWI7XG4gICAgICAgIGZhY3RvcnkoUHViU3ViKTtcbiAgICB9XG59KCggdHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcgJiYgd2luZG93ICkgfHwgdGhpcywgZnVuY3Rpb24gKFB1YlN1Yil7XG5cdCd1c2Ugc3RyaWN0JztcblxuXHR2YXIgbWVzc2FnZXMgPSB7fSxcblx0XHRsYXN0VWlkID0gLTE7XG5cblx0ZnVuY3Rpb24gaGFzS2V5cyhvYmope1xuXHRcdHZhciBrZXk7XG5cblx0XHRmb3IgKGtleSBpbiBvYmope1xuXHRcdFx0aWYgKCBvYmouaGFzT3duUHJvcGVydHkoa2V5KSApe1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0LyoqXG5cdCAqXHRSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCB0aHJvd3MgdGhlIHBhc3NlZCBleGNlcHRpb24sIGZvciB1c2UgYXMgYXJndW1lbnQgZm9yIHNldFRpbWVvdXRcblx0ICpcdEBwYXJhbSB7IE9iamVjdCB9IGV4IEFuIEVycm9yIG9iamVjdFxuXHQgKi9cblx0ZnVuY3Rpb24gdGhyb3dFeGNlcHRpb24oIGV4ICl7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uIHJlVGhyb3dFeGNlcHRpb24oKXtcblx0XHRcdHRocm93IGV4O1xuXHRcdH07XG5cdH1cblxuXHRmdW5jdGlvbiBjYWxsU3Vic2NyaWJlcldpdGhEZWxheWVkRXhjZXB0aW9ucyggc3Vic2NyaWJlciwgbWVzc2FnZSwgZGF0YSApe1xuXHRcdHRyeSB7XG5cdFx0XHRzdWJzY3JpYmVyKCBtZXNzYWdlLCBkYXRhICk7XG5cdFx0fSBjYXRjaCggZXggKXtcblx0XHRcdHNldFRpbWVvdXQoIHRocm93RXhjZXB0aW9uKCBleCApLCAwKTtcblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBjYWxsU3Vic2NyaWJlcldpdGhJbW1lZGlhdGVFeGNlcHRpb25zKCBzdWJzY3JpYmVyLCBtZXNzYWdlLCBkYXRhICl7XG5cdFx0c3Vic2NyaWJlciggbWVzc2FnZSwgZGF0YSApO1xuXHR9XG5cblx0ZnVuY3Rpb24gZGVsaXZlck1lc3NhZ2UoIG9yaWdpbmFsTWVzc2FnZSwgbWF0Y2hlZE1lc3NhZ2UsIGRhdGEsIGltbWVkaWF0ZUV4Y2VwdGlvbnMgKXtcblx0XHR2YXIgc3Vic2NyaWJlcnMgPSBtZXNzYWdlc1ttYXRjaGVkTWVzc2FnZV0sXG5cdFx0XHRjYWxsU3Vic2NyaWJlciA9IGltbWVkaWF0ZUV4Y2VwdGlvbnMgPyBjYWxsU3Vic2NyaWJlcldpdGhJbW1lZGlhdGVFeGNlcHRpb25zIDogY2FsbFN1YnNjcmliZXJXaXRoRGVsYXllZEV4Y2VwdGlvbnMsXG5cdFx0XHRzO1xuXG5cdFx0aWYgKCAhbWVzc2FnZXMuaGFzT3duUHJvcGVydHkoIG1hdGNoZWRNZXNzYWdlICkgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Zm9yIChzIGluIHN1YnNjcmliZXJzKXtcblx0XHRcdGlmICggc3Vic2NyaWJlcnMuaGFzT3duUHJvcGVydHkocykpe1xuXHRcdFx0XHRjYWxsU3Vic2NyaWJlciggc3Vic2NyaWJlcnNbc10sIG9yaWdpbmFsTWVzc2FnZSwgZGF0YSApO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGNyZWF0ZURlbGl2ZXJ5RnVuY3Rpb24oIG1lc3NhZ2UsIGRhdGEsIGltbWVkaWF0ZUV4Y2VwdGlvbnMgKXtcblx0XHRyZXR1cm4gZnVuY3Rpb24gZGVsaXZlck5hbWVzcGFjZWQoKXtcblx0XHRcdHZhciB0b3BpYyA9IFN0cmluZyggbWVzc2FnZSApLFxuXHRcdFx0XHRwb3NpdGlvbiA9IHRvcGljLmxhc3RJbmRleE9mKCAnLicgKTtcblxuXHRcdFx0Ly8gZGVsaXZlciB0aGUgbWVzc2FnZSBhcyBpdCBpcyBub3dcblx0XHRcdGRlbGl2ZXJNZXNzYWdlKG1lc3NhZ2UsIG1lc3NhZ2UsIGRhdGEsIGltbWVkaWF0ZUV4Y2VwdGlvbnMpO1xuXG5cdFx0XHQvLyB0cmltIHRoZSBoaWVyYXJjaHkgYW5kIGRlbGl2ZXIgbWVzc2FnZSB0byBlYWNoIGxldmVsXG5cdFx0XHR3aGlsZSggcG9zaXRpb24gIT09IC0xICl7XG5cdFx0XHRcdHRvcGljID0gdG9waWMuc3Vic3RyKCAwLCBwb3NpdGlvbiApO1xuXHRcdFx0XHRwb3NpdGlvbiA9IHRvcGljLmxhc3RJbmRleE9mKCcuJyk7XG5cdFx0XHRcdGRlbGl2ZXJNZXNzYWdlKCBtZXNzYWdlLCB0b3BpYywgZGF0YSwgaW1tZWRpYXRlRXhjZXB0aW9ucyApO1xuXHRcdFx0fVxuXHRcdH07XG5cdH1cblxuXHRmdW5jdGlvbiBtZXNzYWdlSGFzU3Vic2NyaWJlcnMoIG1lc3NhZ2UgKXtcblx0XHR2YXIgdG9waWMgPSBTdHJpbmcoIG1lc3NhZ2UgKSxcblx0XHRcdGZvdW5kID0gQm9vbGVhbihtZXNzYWdlcy5oYXNPd25Qcm9wZXJ0eSggdG9waWMgKSAmJiBoYXNLZXlzKG1lc3NhZ2VzW3RvcGljXSkpLFxuXHRcdFx0cG9zaXRpb24gPSB0b3BpYy5sYXN0SW5kZXhPZiggJy4nICk7XG5cblx0XHR3aGlsZSAoICFmb3VuZCAmJiBwb3NpdGlvbiAhPT0gLTEgKXtcblx0XHRcdHRvcGljID0gdG9waWMuc3Vic3RyKCAwLCBwb3NpdGlvbiApO1xuXHRcdFx0cG9zaXRpb24gPSB0b3BpYy5sYXN0SW5kZXhPZiggJy4nICk7XG5cdFx0XHRmb3VuZCA9IEJvb2xlYW4obWVzc2FnZXMuaGFzT3duUHJvcGVydHkoIHRvcGljICkgJiYgaGFzS2V5cyhtZXNzYWdlc1t0b3BpY10pKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZm91bmQ7XG5cdH1cblxuXHRmdW5jdGlvbiBwdWJsaXNoKCBtZXNzYWdlLCBkYXRhLCBzeW5jLCBpbW1lZGlhdGVFeGNlcHRpb25zICl7XG5cdFx0dmFyIGRlbGl2ZXIgPSBjcmVhdGVEZWxpdmVyeUZ1bmN0aW9uKCBtZXNzYWdlLCBkYXRhLCBpbW1lZGlhdGVFeGNlcHRpb25zICksXG5cdFx0XHRoYXNTdWJzY3JpYmVycyA9IG1lc3NhZ2VIYXNTdWJzY3JpYmVycyggbWVzc2FnZSApO1xuXG5cdFx0aWYgKCAhaGFzU3Vic2NyaWJlcnMgKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRpZiAoIHN5bmMgPT09IHRydWUgKXtcblx0XHRcdGRlbGl2ZXIoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c2V0VGltZW91dCggZGVsaXZlciwgMCApO1xuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdC8qKlxuXHQgKlx0UHViU3ViLnB1Ymxpc2goIG1lc3NhZ2VbLCBkYXRhXSApIC0+IEJvb2xlYW5cblx0ICpcdC0gbWVzc2FnZSAoU3RyaW5nKTogVGhlIG1lc3NhZ2UgdG8gcHVibGlzaFxuXHQgKlx0LSBkYXRhOiBUaGUgZGF0YSB0byBwYXNzIHRvIHN1YnNjcmliZXJzXG5cdCAqXHRQdWJsaXNoZXMgdGhlIHRoZSBtZXNzYWdlLCBwYXNzaW5nIHRoZSBkYXRhIHRvIGl0J3Mgc3Vic2NyaWJlcnNcblx0KiovXG5cdFB1YlN1Yi5wdWJsaXNoID0gZnVuY3Rpb24oIG1lc3NhZ2UsIGRhdGEgKXtcblx0XHRyZXR1cm4gcHVibGlzaCggbWVzc2FnZSwgZGF0YSwgZmFsc2UsIFB1YlN1Yi5pbW1lZGlhdGVFeGNlcHRpb25zICk7XG5cdH07XG5cblx0LyoqXG5cdCAqXHRQdWJTdWIucHVibGlzaFN5bmMoIG1lc3NhZ2VbLCBkYXRhXSApIC0+IEJvb2xlYW5cblx0ICpcdC0gbWVzc2FnZSAoU3RyaW5nKTogVGhlIG1lc3NhZ2UgdG8gcHVibGlzaFxuXHQgKlx0LSBkYXRhOiBUaGUgZGF0YSB0byBwYXNzIHRvIHN1YnNjcmliZXJzXG5cdCAqXHRQdWJsaXNoZXMgdGhlIHRoZSBtZXNzYWdlIHN5bmNocm9ub3VzbHksIHBhc3NpbmcgdGhlIGRhdGEgdG8gaXQncyBzdWJzY3JpYmVyc1xuXHQqKi9cblx0UHViU3ViLnB1Ymxpc2hTeW5jID0gZnVuY3Rpb24oIG1lc3NhZ2UsIGRhdGEgKXtcblx0XHRyZXR1cm4gcHVibGlzaCggbWVzc2FnZSwgZGF0YSwgdHJ1ZSwgUHViU3ViLmltbWVkaWF0ZUV4Y2VwdGlvbnMgKTtcblx0fTtcblxuXHQvKipcblx0ICpcdFB1YlN1Yi5zdWJzY3JpYmUoIG1lc3NhZ2UsIGZ1bmMgKSAtPiBTdHJpbmdcblx0ICpcdC0gbWVzc2FnZSAoU3RyaW5nKTogVGhlIG1lc3NhZ2UgdG8gc3Vic2NyaWJlIHRvXG5cdCAqXHQtIGZ1bmMgKEZ1bmN0aW9uKTogVGhlIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBhIG5ldyBtZXNzYWdlIGlzIHB1Ymxpc2hlZFxuXHQgKlx0U3Vic2NyaWJlcyB0aGUgcGFzc2VkIGZ1bmN0aW9uIHRvIHRoZSBwYXNzZWQgbWVzc2FnZS4gRXZlcnkgcmV0dXJuZWQgdG9rZW4gaXMgdW5pcXVlIGFuZCBzaG91bGQgYmUgc3RvcmVkIGlmXG5cdCAqXHR5b3UgbmVlZCB0byB1bnN1YnNjcmliZVxuXHQqKi9cblx0UHViU3ViLnN1YnNjcmliZSA9IGZ1bmN0aW9uKCBtZXNzYWdlLCBmdW5jICl7XG5cdFx0aWYgKCB0eXBlb2YgZnVuYyAhPT0gJ2Z1bmN0aW9uJyl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0Ly8gbWVzc2FnZSBpcyBub3QgcmVnaXN0ZXJlZCB5ZXRcblx0XHRpZiAoICFtZXNzYWdlcy5oYXNPd25Qcm9wZXJ0eSggbWVzc2FnZSApICl7XG5cdFx0XHRtZXNzYWdlc1ttZXNzYWdlXSA9IHt9O1xuXHRcdH1cblxuXHRcdC8vIGZvcmNpbmcgdG9rZW4gYXMgU3RyaW5nLCB0byBhbGxvdyBmb3IgZnV0dXJlIGV4cGFuc2lvbnMgd2l0aG91dCBicmVha2luZyB1c2FnZVxuXHRcdC8vIGFuZCBhbGxvdyBmb3IgZWFzeSB1c2UgYXMga2V5IG5hbWVzIGZvciB0aGUgJ21lc3NhZ2VzJyBvYmplY3Rcblx0XHR2YXIgdG9rZW4gPSAndWlkXycgKyBTdHJpbmcoKytsYXN0VWlkKTtcblx0XHRtZXNzYWdlc1ttZXNzYWdlXVt0b2tlbl0gPSBmdW5jO1xuXG5cdFx0Ly8gcmV0dXJuIHRva2VuIGZvciB1bnN1YnNjcmliaW5nXG5cdFx0cmV0dXJuIHRva2VuO1xuXHR9O1xuXG5cdC8qIFB1YmxpYzogQ2xlYXJzIGFsbCBzdWJzY3JpcHRpb25zXG5cdCAqL1xuXHRQdWJTdWIuY2xlYXJBbGxTdWJzY3JpcHRpb25zID0gZnVuY3Rpb24gY2xlYXJBbGxTdWJzY3JpcHRpb25zKCl7XG5cdFx0bWVzc2FnZXMgPSB7fTtcblx0fTtcblxuXHQvKlB1YmxpYzogQ2xlYXIgc3Vic2NyaXB0aW9ucyBieSB0aGUgdG9waWNcblx0Ki9cblx0UHViU3ViLmNsZWFyU3Vic2NyaXB0aW9ucyA9IGZ1bmN0aW9uIGNsZWFyU3Vic2NyaXB0aW9ucyh0b3BpYyl7XG5cdFx0dmFyIG07IFxuXHRcdGZvciAobSBpbiBtZXNzYWdlcyl7XG5cdFx0XHRpZiAobWVzc2FnZXMuaGFzT3duUHJvcGVydHkobSkgJiYgbS5pbmRleE9mKHRvcGljKSA9PT0gMCl7XG5cdFx0XHRcdGRlbGV0ZSBtZXNzYWdlc1ttXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0LyogUHVibGljOiByZW1vdmVzIHN1YnNjcmlwdGlvbnMuXG5cdCAqIFdoZW4gcGFzc2VkIGEgdG9rZW4sIHJlbW92ZXMgYSBzcGVjaWZpYyBzdWJzY3JpcHRpb24uXG5cdCAqIFdoZW4gcGFzc2VkIGEgZnVuY3Rpb24sIHJlbW92ZXMgYWxsIHN1YnNjcmlwdGlvbnMgZm9yIHRoYXQgZnVuY3Rpb25cblx0ICogV2hlbiBwYXNzZWQgYSB0b3BpYywgcmVtb3ZlcyBhbGwgc3Vic2NyaXB0aW9ucyBmb3IgdGhhdCB0b3BpYyAoaGllcmFyY2h5KVxuXHQgKlxuXHQgKiB2YWx1ZSAtIEEgdG9rZW4sIGZ1bmN0aW9uIG9yIHRvcGljIHRvIHVuc3Vic2NyaWJlLlxuXHQgKlxuXHQgKiBFeGFtcGxlc1xuXHQgKlxuXHQgKlx0XHQvLyBFeGFtcGxlIDEgLSB1bnN1YnNjcmliaW5nIHdpdGggYSB0b2tlblxuXHQgKlx0XHR2YXIgdG9rZW4gPSBQdWJTdWIuc3Vic2NyaWJlKCdteXRvcGljJywgbXlGdW5jKTtcblx0ICpcdFx0UHViU3ViLnVuc3Vic2NyaWJlKHRva2VuKTtcblx0ICpcblx0ICpcdFx0Ly8gRXhhbXBsZSAyIC0gdW5zdWJzY3JpYmluZyB3aXRoIGEgZnVuY3Rpb25cblx0ICpcdFx0UHViU3ViLnVuc3Vic2NyaWJlKG15RnVuYyk7XG5cdCAqXG5cdCAqXHRcdC8vIEV4YW1wbGUgMyAtIHVuc3Vic2NyaWJpbmcgYSB0b3BpY1xuXHQgKlx0XHRQdWJTdWIudW5zdWJzY3JpYmUoJ215dG9waWMnKTtcblx0ICovXG5cdFB1YlN1Yi51bnN1YnNjcmliZSA9IGZ1bmN0aW9uKHZhbHVlKXtcblx0XHR2YXIgaXNUb3BpYyAgICA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgbWVzc2FnZXMuaGFzT3duUHJvcGVydHkodmFsdWUpLFxuXHRcdFx0aXNUb2tlbiAgICA9ICFpc1RvcGljICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycsXG5cdFx0XHRpc0Z1bmN0aW9uID0gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nLFxuXHRcdFx0cmVzdWx0ID0gZmFsc2UsXG5cdFx0XHRtLCBtZXNzYWdlLCB0O1xuXG5cdFx0aWYgKGlzVG9waWMpe1xuXHRcdFx0ZGVsZXRlIG1lc3NhZ2VzW3ZhbHVlXTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRmb3IgKCBtIGluIG1lc3NhZ2VzICl7XG5cdFx0XHRpZiAoIG1lc3NhZ2VzLmhhc093blByb3BlcnR5KCBtICkgKXtcblx0XHRcdFx0bWVzc2FnZSA9IG1lc3NhZ2VzW21dO1xuXG5cdFx0XHRcdGlmICggaXNUb2tlbiAmJiBtZXNzYWdlW3ZhbHVlXSApe1xuXHRcdFx0XHRcdGRlbGV0ZSBtZXNzYWdlW3ZhbHVlXTtcblx0XHRcdFx0XHRyZXN1bHQgPSB2YWx1ZTtcblx0XHRcdFx0XHQvLyB0b2tlbnMgYXJlIHVuaXF1ZSwgc28gd2UgY2FuIGp1c3Qgc3RvcCBoZXJlXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoaXNGdW5jdGlvbikge1xuXHRcdFx0XHRcdGZvciAoIHQgaW4gbWVzc2FnZSApe1xuXHRcdFx0XHRcdFx0aWYgKG1lc3NhZ2UuaGFzT3duUHJvcGVydHkodCkgJiYgbWVzc2FnZVt0XSA9PT0gdmFsdWUpe1xuXHRcdFx0XHRcdFx0XHRkZWxldGUgbWVzc2FnZVt0XTtcblx0XHRcdFx0XHRcdFx0cmVzdWx0ID0gdHJ1ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9O1xufSkpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovZ2l0L0VzcGFsaWVySlMvfi9wdWJzdWItanMvc3JjL3B1YnN1Yi5qc1xuICoqLyIsImltcG9ydCBjb3JlIGZyb20gXCIuL2VzcGFsaWVyLmNvcmVcIjtcclxuaW1wb3J0IGZvcm1Db250cm9sIGZyb20gXCIuL2VzcGFsaWVyLmZvcm1zLmNvbnRyb2xcIjtcclxuXHJcbmNsYXNzIFZhbGlkYXRpb24ge1xyXG4gICAgY29uc3RydWN0b3IoY29udHJvbCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzVmFsaWQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTXVzdCBoYXZlIGFuIGlzVmFsaWQgbWV0aG9kLlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm1lc3NhZ2UgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTXVzdCBhZGQgYSBtZXNzYWdlIHByaW9yIHRvIGNhbGxpbmcgc3VwZXIuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jb250cm9sID0gY29udHJvbDtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgUmVxdWlyZWQgZXh0ZW5kcyBWYWxpZGF0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRyb2wpIHtcclxuICAgICAgICBzdXBlcihjb250cm9sKTtcclxuICAgIH1cclxuXHJcbiAgICBpc1ZhbGlkKCkge1xyXG4gICAgICAgIHJldHVybiAhY29yZS5pc0VtcHR5T3JTcGFjZXModGhpcy5jb250cm9sLnZhbCgpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbWVzc2FnZSgpIHtcclxuICAgICAgICByZXR1cm4gXCJGaWVsZCBpcyByZXF1aXJlZC5cIjtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgRW1haWwgZXh0ZW5kcyBWYWxpZGF0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRyb2wpIHtcclxuICAgICAgICBzdXBlcihjb250cm9sKTtcclxuICAgIH1cclxuXHJcbiAgICBpc1ZhbGlkKCkge1xyXG4gICAgICAgIHJldHVybiBjb3JlLmlzRW1haWwodGhpcy5jb250cm9sLnZhbCgpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbWVzc2FnZSgpIHtcclxuICAgICAgICByZXR1cm4gXCJJbnZhbGlkIGVtYWlsIGFkZHJlc3MuXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIERhdGUgZXh0ZW5kcyBWYWxpZGF0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRyb2wpIHtcclxuICAgICAgICBzdXBlcihjb250cm9sKTtcclxuICAgIH1cclxuXHJcbiAgICBpc1ZhbGlkKCkge1xyXG4gICAgICAgIHJldHVybiBjb3JlLmlzRGF0ZSh0aGlzLmNvbnRyb2wudmFsKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBtZXNzYWdlKCkge1xyXG4gICAgICAgIHJldHVybiBcIkludmFsaWQgZGF0ZS5cIjtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgUmVxdWlyZWREZXBlbmRlbnQgZXh0ZW5kcyBWYWxpZGF0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRyb2wsIHdoZW5WYWwsIGRlcGVuZGVudCkge1xyXG4gICAgICAgIHN1cGVyKGNvbnRyb2wpO1xyXG4gICAgICAgIHRoaXMud2hlblZhbCA9IHdoZW5WYWw7XHJcbiAgICAgICAgdGhpcy5kZXBlbmRlbnQgPSBkZXBlbmRlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgaXNWYWxpZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb250cm9sLnZhbCgpICE9PSB0aGlzLndoZW5WYWwgfHwgdGhpcy5jb250cm9sLnZhbCgpID09PSB0aGlzLndoZW5WYWwgJiYgdGhpcy5kZXBlbmRlbnQudmFsaWRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbWVzc2FnZSgpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IFJlcXVpcmVkLCBFbWFpbCwgRGF0ZSwgUmVxdWlyZWREZXBlbmRlbnQgfTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9naXQvRXNwYWxpZXJKUy9zcmMvanMvZXNwYWxpZXIudmFsaWRhdGlvbi5qc1xuICoqLyIsImltcG9ydCBjb3JlIGZyb20gXCIuL2VzcGFsaWVyLmNvcmVcIjtcclxuaW1wb3J0IHsgUmVxdWlyZWQsIEVtYWlsLCBEYXRlLCBSZXF1aXJlZERlcGVuZGVudCB9IGZyb20gXCIuL2VzcGFsaWVyLnZhbGlkYXRpb25cIjtcclxuaW1wb3J0IG1lc3NhZ2VGYWN0b3J5IGZyb20gXCIuL2VzcGFsaWVyLm1lc3NhZ2VGYWN0b3J5XCI7XHJcblxyXG5jbGFzcyBGb3JtQ29udHJvbCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250cm9sLCBmb3JtLCB2YWxpZGF0aW9ucywgZXhwbGljaXRWYWxpZGF0aW9ucykge1xyXG4gICAgICAgIHZhciBjb250cm9sVHlwZSA9IGNvbnRyb2wudHlwZSA/IGNvbnRyb2wudHlwZSA6IGNvbnRyb2wuZ2V0QXR0cmlidXRlKFwidHlwZVwiKTtcclxuICAgICAgICB2YXIgbG93ZXJDYXNlSWQgPSBjb250cm9sVHlwZSA9PSBcInJhZGlvXCIgPyBjb250cm9sLm5hbWUudG9Mb3dlckNhc2UoKSA6IGNvbnRyb2wuaWQudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAgICAgaWYgKCFsb3dlckNhc2VJZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFbGVtZW50cyBtdXN0IGhhdmUgYW4gSWQgdG8gYmUgcHJvcGVybHkgd2lyZWQgdG8gYW4gRXNwYWxpZXIgZm9ybSBjb250cm9sLlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY29udHJvbCA9IGNvbnRyb2w7XHJcbiAgICAgICAgdGhpcy5mb3JtID0gZm9ybTtcclxuICAgICAgICB2YXIgZ3JvdXA7XHJcbiAgICAgICAgbGV0IHJlcXVpcmVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoY29udHJvbFR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcInJhZGlvXCI6XHJcbiAgICAgICAgICAgICAgICBncm91cCA9IGNvcmUuY2xvc2VzdChjb250cm9sLCBcIi5yYWRpby1ncm91cFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgcmFkaW9zID0gY29yZS5maW5kKCdpbnB1dFt0eXBlPVwicmFkaW9cIl0nLCBncm91cCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGVwZW5kZW50cyA9IG5ldyBNYXAoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCByYWRpbyBvZiByYWRpb3MpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmFkaW8ucmVxdWlyZWQgfHwgcmFkaW8uZ2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29yZS5hZGRFdmVudExpc3RlbmVyKHJhZGlvLCBcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQga2V5IG9mIGRlcGVuZGVudHMua2V5cygpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBkZXBlbmRlbnQgb2YgZGVwZW5kZW50cy5nZXQoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlcGVuZGVudC5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZGVwZW5kZW50cy5oYXMocmFkaW8pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGRlcGVuZGVudCBvZiBkZXBlbmRlbnRzLmdldChyYWRpbykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlcGVuZGVudC5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlcXVpcmVkRGVwZW5kZW50c1NlbGVjdG9yID0gcmFkaW8uZ2V0QXR0cmlidXRlKFwiZGF0YS1yZXF1aXJlXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXJlcXVpcmVkRGVwZW5kZW50c1NlbGVjdG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlcXVpcmVkRGVwZW5kZW50cyA9IGNvcmUuZmluZChyZXF1aXJlZERlcGVuZGVudHNTZWxlY3RvciwgdGhpcy5mb3JtKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZGVwZW5kZW50Q29udHJvbHMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgcmVxdWlyZWREZXBlbmRlbnQgb2YgcmVxdWlyZWREZXBlbmRlbnRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkZXBlbmRlbnRDb250cm9sID0gZmFjdG9yeShyZXF1aXJlZERlcGVuZGVudCwgZm9ybSwgeyByZXF1aXJlZDogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbnMucHVzaChuZXcgUmVxdWlyZWREZXBlbmRlbnQodGhpcywgcmFkaW8udmFsdWUsIGRlcGVuZGVudENvbnRyb2wpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVwZW5kZW50Q29udHJvbC5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlcGVuZGVudENvbnRyb2xzLnB1c2goZGVwZW5kZW50Q29udHJvbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBkZXBlbmRlbnRzLnNldChyYWRpbywgZGVwZW5kZW50Q29udHJvbHMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjaGVja2JveFwiOlxyXG4gICAgICAgICAgICAgICAgZ3JvdXAgPSBjb3JlLmNsb3Nlc3QoY29udHJvbCwgXCIuY2hlY2tib3hcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImVtYWlsXCI6XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9ucy5wdXNoKG5ldyBFbWFpbCh0aGlzKSk7XHJcbiAgICAgICAgICAgICAgICBncm91cCA9IGNvcmUuY2xvc2VzdChjb250cm9sLCBcIi5mb3JtLWdyb3VwXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJkYXRlXCI6XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9ucy5wdXNoKG5ldyBEYXRlKHRoaXMpKTtcclxuICAgICAgICAgICAgICAgIGdyb3VwID0gY29yZS5jbG9zZXN0KGNvbnRyb2wsIFwiLmZvcm0tZ3JvdXBcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNvbnRyb2wuZGF0ZXBpY2tlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2wuZGF0ZXBpY2tlcigpLmF0dHIoXCJ0eXBlXCIsIFwidGV4dFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgZ3JvdXAgPSBjb3JlLmNsb3Nlc3QoY29udHJvbCwgXCIuZm9ybS1ncm91cFwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZUZhY3RvcnkuY3JlYXRlKHtcclxuICAgICAgICAgICAgYXR0YWNoVG86IGdyb3VwLFxyXG4gICAgICAgICAgICBtZXNzYWdlQXR0YWNobWVudDogbWVzc2FnZUZhY3RvcnkubWVzc2FnZUF0dGFjaG1lbnQuRmxvdyxcclxuICAgICAgICAgICAgb25SZW1vdmVkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBjb3JlLnJlbW92ZUNsYXNzKGdyb3VwLCBcImhhcy1lcnJvclwiKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25BZGRlZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgY29yZS5hZGRDbGFzcyhncm91cCwgXCJoYXMtZXJyb3JcIik7XHJcbiAgICAgICAgICAgICAgICAvL1RPRE86IEdldCByaWQgb2YgalF1ZXJ5XHJcbiAgICAgICAgICAgICAgICAkKGdyb3VwKS52ZWxvY2l0eShcImNhbGxvdXQudGFkYVwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDUwMFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5ncm91cCA9IGdyb3VwO1xyXG4gICAgICAgIHRoaXMub3JpZ2luYWxEaXNwbGF5ID0gdGhpcy5ncm91cC5zdHlsZS5kaXNwbGF5O1xyXG5cclxuICAgICAgICBpZiAoZXhwbGljaXRWYWxpZGF0aW9ucy5yZXF1aXJlZCB8fCByZXF1aXJlZCB8fCBjb250cm9sLnJlcXVpcmVkIHx8IGNvbnRyb2wuZ2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIikpIHtcclxuICAgICAgICAgICAgdmFsaWRhdGlvbnMucHVzaChuZXcgUmVxdWlyZWQodGhpcykpO1xyXG4gICAgICAgICAgICBjb3JlLmFkZENsYXNzKGdyb3VwLCBcInJlcXVpcmVkXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29udHJvbC5zZXRBdHRyaWJ1dGUobG93ZXJDYXNlSWQsIFwiXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhbCgpIHtcclxuICAgICAgICBsZXQgY29udHJvbFR5cGUgPSB0aGlzLmNvbnRyb2wudHlwZSA/IHRoaXMuY29udHJvbC50eXBlIDogdGhpcy5jb250cm9sLmdldEF0dHJpYnV0ZShcInR5cGVcIik7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoY29udHJvbFR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNoZWNrYm94XCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29yZS5tYXRjaGVzKHRoaXMuY29udHJvbCwgXCI6Y2hlY2tlZFwiKSA/IHRoaXMuY29udHJvbC52YWx1ZSA6IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgY2FzZSBcInJhZGlvXCI6XHJcbiAgICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWQgPSBjb3JlLmZpbmQoYFtuYW1lPVwiJHt0aGlzLmNvbnRyb2wubmFtZX1cIl06Y2hlY2tlZGApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGVjdGVkLmxlbmd0aCA9PSAxID8gc2VsZWN0ZWRbMF0udmFsdWUgOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb250cm9sLnZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoaWRlKCkge1xyXG4gICAgICAgIHRoaXMuZ3JvdXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3coKSB7XHJcbiAgICAgICAgdGhpcy5ncm91cC5zdHlsZS5kaXNwbGF5ID0gdGhpcy5vcmlnaW5hbERpc3BsYXk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmxldCBmYWN0b3J5ID0gZnVuY3Rpb24gKGNvbnRyb2wsIGZvcm0sIGV4cGxpY2l0VmFsaWRhdGlvbnMpIHtcclxuICAgIGV4cGxpY2l0VmFsaWRhdGlvbnMgPSBleHBsaWNpdFZhbGlkYXRpb25zID8gZXhwbGljaXRWYWxpZGF0aW9ucyA6IHt9O1xyXG4gICAgbGV0IHZhbGlkYXRpb25zID0gW107XHJcbiAgICBsZXQgZm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woY29udHJvbCwgZm9ybSwgdmFsaWRhdGlvbnMsIGV4cGxpY2l0VmFsaWRhdGlvbnMpO1xyXG5cclxuICAgIGZvcm1Db250cm9sLnZhbGlkYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBlcnJvcnMgPSBbXTtcclxuICAgICAgICBsZXQgaGFzRXJyb3JzID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICh2YWxpZGF0aW9ucykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB2YWxpZGF0aW9uIG9mIHZhbGlkYXRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXZhbGlkYXRpb24uaXNWYWxpZCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFzRXJyb3JzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGlvbi5tZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5wdXNoKHZhbGlkYXRpb24ubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZXJyb3JzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZm9ybUNvbnRyb2wubWVzc2FnZS5zaG93KHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9ycyxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VUeXBlOiBtZXNzYWdlRmFjdG9yeS5tZXNzYWdlVHlwZS5FcnJvclxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAhaGFzRXJyb3JzO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gZm9ybUNvbnRyb2w7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmYWN0b3J5O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L2dpdC9Fc3BhbGllckpTL3NyYy9qcy9lc3BhbGllci5mb3Jtcy5jb250cm9sLmpzXG4gKiovIiwiaW1wb3J0IGNvcmUgZnJvbSBcIi4vZXNwYWxpZXIuY29yZVwiO1xyXG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSBcIi4vZXNwYWxpZXIuZm9ybXMuY29udHJvbFwiO1xyXG5cclxuY2xhc3MgRXNwYWxpZXJGb3JtIHtcclxuICAgIGNvbnN0cnVjdG9yKGZvcm1Ub1dpcmUpIHtcclxuICAgICAgICBpZiAoY29yZS5pc1N0cmluZyhmb3JtVG9XaXJlKSkge1xyXG4gICAgICAgICAgICB0aGlzLmZvcm0gPSBjb3JlLmZpbmQoZm9ybVRvV2lyZSlbMF07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5mb3JtID0gZm9ybVRvV2lyZVswXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZm9ybS5zZXRBdHRyaWJ1dGUoXCJub3ZhbGlkYXRlXCIsIFwiXCIpO1xyXG4gICAgICAgIHRoaXMuY29udHJvbHMgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgbGV0IHByb2Nlc3NlZENvbnRyb2xzID0gbmV3IFNldCgpO1xyXG4gICAgICAgIGxldCByYXdDb250cm9scyA9IGNvcmUuZmluZChcImlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0XCIsIHRoaXMuZm9ybSk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGNvbnRyb2wgb2YgcmF3Q29udHJvbHMpIHtcclxuICAgICAgICAgICAgdmFyIGNvbnRyb2xUeXBlID0gY29udHJvbC50eXBlID8gY29udHJvbC50eXBlIDogY29udHJvbC5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpO1xyXG4gICAgICAgICAgICB2YXIgbG93ZXJDYXNlSWQgPSBjb250cm9sVHlwZSA9PSBcInJhZGlvXCIgPyBjb250cm9sLm5hbWUudG9Mb3dlckNhc2UoKSA6IGNvbnRyb2wuaWQudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChwcm9jZXNzZWRDb250cm9scy5oYXMobG93ZXJDYXNlSWQpKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcHJvY2Vzc2VkQ29udHJvbHMuYWRkKGxvd2VyQ2FzZUlkKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChsb3dlckNhc2VJZCB8fCAoY29udHJvbC50eXBlID8gY29udHJvbC50eXBlIDogY29udHJvbC5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpKSA9PSBcInJhZGlvXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbHMuYWRkKEZvcm1Db250cm9sKGNvbnRyb2wpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29yZS5hZGRFdmVudExpc3RlbmVyKHRoaXMuZm9ybSwgXCJzdWJtaXRcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLnN1Ym1pdCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgc3VibWl0QnV0dG9ucyA9IGNvcmUuZmluZChcIltkYXRhLWFjdGlvbj1cXFwic3VibWl0XFxcIl1cIiwgdGhpcy5mb3JtKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgc3VibWl0QnV0dG9uIG9mIHN1Ym1pdEJ1dHRvbnMpIHtcclxuICAgICAgICAgICAgY29yZS5hZGRFdmVudExpc3RlbmVyKHN1Ym1pdEJ1dHRvbiwgXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdWJtaXQoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN1Ym1pdCgpIHtcclxuICAgICAgICBpZiAodGhpcy52YWxpZGF0ZSgpKSB7XHJcbiAgICAgICAgICAgIGxldCBtZXRob2QgPSB0aGlzLmZvcm0uZ2V0QXR0cmlidXRlKFwibWV0aG9kXCIpO1xyXG5cclxuICAgICAgICAgICAgY29yZS5zZW5kUmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBtZXRob2QgPyBtZXRob2QgOiBcIkdFVFwiLFxyXG4gICAgICAgICAgICAgICAgdXJsOiB0aGlzLmZvcm0uZ2V0QXR0cmlidXRlKFwiYWN0aW9uXCIpLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogJCh0aGlzLmZvcm0pLnNlcmlhbGl6ZSgpIC8vVE9ETzogUmVtb3ZlIGpRdWVyeS5cclxuICAgICAgICAgICAgfSkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IG9uU3VjY2VzcyA9IHRoaXMuZm9ybS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXN1Y2Nlc3NcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG9uU3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvcmUucHVibGlzaChvblN1Y2Nlc3MsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdmFsaWRhdGUoKSB7XHJcbiAgICAgICAgdmFyIHZhbGlkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgY29udHJvbCBvZiB0aGlzLmNvbnRyb2xzKSB7XHJcbiAgICAgICAgICAgIGNvbnRyb2wubWVzc2FnZS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghY29udHJvbC52YWxpZGF0ZSgpKSB7XHJcbiAgICAgICAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdmFsaWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChmb3JtVG9XaXJlKSB7XHJcbiAgICByZXR1cm4gbmV3IEVzcGFsaWVyRm9ybShmb3JtVG9XaXJlKTtcclxufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9naXQvRXNwYWxpZXJKUy9zcmMvanMvZXNwYWxpZXIuZm9ybXMuanNcbiAqKi8iLCJpbXBvcnQgbWVzc2FnZUZhY3RvcnkgZnJvbSBcIi4vZXNwYWxpZXIubWVzc2FnZUZhY3RvcnlcIjtcclxuaW1wb3J0IHdhaXRzY3JlZW4gZnJvbSBcIi4vZXNwYWxpZXIud2FpdHNjcmVlblwiO1xyXG5pbXBvcnQgY29tbW9uIGZyb20gXCIuL2VzcGFsaWVyLmNvbW1vblwiO1xyXG5pbXBvcnQgY29yZSBmcm9tIFwiLi9lc3BhbGllci5jb3JlXCI7XHJcblxyXG52YXIgZ2V0Rm9vdGVyID0gZnVuY3Rpb24gKHRhYmxlKSB7XHJcbiAgICB2YXIgc3RhcnRBdFBhZ2UgPSBNYXRoLm1heCgwLCB0YWJsZS5zZXR0aW5ncy5jdXJyZW50UGFnZSAtIDMpO1xyXG4gICAgdmFyIGVuZEF0UGFnZSA9IE1hdGgubWluKHRhYmxlLnNldHRpbmdzLnBhZ2VzIC0gMSwgdGFibGUuc2V0dGluZ3MuY3VycmVudFBhZ2UgKyAzICsgTWF0aC5tYXgoMyAtIHRhYmxlLnNldHRpbmdzLmN1cnJlbnRQYWdlLCAwKSk7XHJcbiAgICB2YXIgcGFnaW5nQ29udHJvbCA9IFwiPHVsIGNsYXNzPVxcXCJwYWdpbmF0aW9uXFxcIj5cIjtcclxuXHJcbiAgICBwYWdpbmdDb250cm9sICs9IGA8bGkke3RhYmxlLnNldHRpbmdzLmN1cnJlbnRQYWdlID09IDAgPyBgIGNsYXNzPVwiZGlzYWJsZWRcImAgOiBcIlwifT48YSBkYXRhLXBhZ2U9XCIkeyh0YWJsZS5zZXR0aW5ncy5jdXJyZW50UGFnZSAtIDEpIH1cIiBjbGFzcz1cImVzcGFsaWVyLXRhYmxlLWJ1dHRvblwiIGhyZWY9XCJqYXZhc2NyaXB0OiB2b2lkKDApO1wiPjxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZsYXF1bzs8L3NwYW4+PC9hPjwvbGk+YDtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gc3RhcnRBdFBhZ2U7IGkgPD0gZW5kQXRQYWdlOyBpKyspIHtcclxuICAgICAgICBwYWdpbmdDb250cm9sICs9IGA8bGkke2kgPT09IHRhYmxlLnNldHRpbmdzLmN1cnJlbnRQYWdlID8gYCBjbGFzcz1cImFjdGl2ZVwiYCA6IFwiXCJ9PjxhIGRhdGEtcGFnZT1cIiR7aX1cIiBjbGFzcz1cImVzcGFsaWVyLXRhYmxlLWJ1dHRvblwiIGhyZWY9XCJqYXZhc2NyaXB0OiB2b2lkKDApO1wiPiR7KGkgKyAxKSB9PC9hPjwvbGk+YDtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgbmV4dFBhZ2UgPSAodGFibGUuc2V0dGluZ3MuY3VycmVudFBhZ2UgKyAxKTtcclxuICAgIHBhZ2luZ0NvbnRyb2wgKz0gYDxsaSR7bmV4dFBhZ2UgPT0gdGFibGUuc2V0dGluZ3MucGFnZXMgPyBgIGNsYXNzPVwiZGlzYWJsZWRcImAgOiBcIlwifT48YSBkYXRhLXBhZ2U9XCIke25leHRQYWdlfVwiIGNsYXNzPVwiZXNwYWxpZXItdGFibGUtYnV0dG9uXCIgaHJlZj1cImphdmFzY3JpcHQ6IHZvaWQoMCk7XCI+PHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnJhcXVvOzwvc3Bhbj48L2E+PC9saT5gO1xyXG5cclxuICAgIHJldHVybiBgPHRmb290Pjx0cj48dGQgY29sc3Bhbj1cIjQyXCI+JHtwYWdpbmdDb250cm9sfTwvdGQ+PC90cj48L3Rmb290PmA7XHJcbn07XHJcblxyXG52YXIgcmVuZGVyVGFibGUgPSBmdW5jdGlvbiAodGFibGUpIHtcclxuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIHZhciByZW5kZXJlZCA9IGA8dGFibGUgY2xhc3M9XCIke3RhYmxlLnNldHRpbmdzLnRhYmxlQ2xhc3N9IHRhYmxlIHRhYmxlLXN0cmlwZWRcIj5gO1xyXG5cclxuICAgICAgICBpZiAodGFibGUuc2V0dGluZ3MuaGVhZGVyVGVtcGxhdGUpIHtcclxuICAgICAgICAgICAgcmVuZGVyZWQgKz0gdGFibGUuc2V0dGluZ3MuaGVhZGVyVGVtcGxhdGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlbmRlcmVkICs9IFwiPHRib2R5PlwiO1xyXG4gICAgICAgIHZhciBzdGFydEF0SW5kZXggPSB0YWJsZS5zZXR0aW5ncy5jdXJyZW50UGFnZSAqIHRhYmxlLnNldHRpbmdzLnBhZ2VTaXplO1xyXG5cclxuICAgICAgICBpZiAodGFibGUuc2V0dGluZ3MuZGF0YSkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gc3RhcnRBdEluZGV4OyBpIDwgTWF0aC5taW4oc3RhcnRBdEluZGV4ICsgdGFibGUuc2V0dGluZ3MucGFnZVNpemUsIHRhYmxlLnNldHRpbmdzLmRhdGEubGVuZ3RoKTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICByZW5kZXJlZCArPSB0YWJsZS5zZXR0aW5ncy5yb3dUZW1wbGF0ZSh0YWJsZS5zZXR0aW5ncy5kYXRhW2ldKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmVuZGVyZWQgKz0gXCI8L3Rib2R5PlwiO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRhYmxlLnNldHRpbmdzLnBhZ2VzID4gMCkge1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyZWQgKz0gZ2V0Rm9vdGVyKHRhYmxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXNvbHZlKHJlbmRlcmVkKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb3JlLnNlbmRSZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgIHVybDogdGFibGUuc2V0dGluZ3MuZmV0Y2hVcmwsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBQYWdlOiB0YWJsZS5zZXR0aW5ncy5jdXJyZW50UGFnZSxcclxuICAgICAgICAgICAgICAgICAgICBQYWdlU2l6ZTogdGFibGUuc2V0dGluZ3MucGFnZVNpemUsXHJcbiAgICAgICAgICAgICAgICAgICAgQ3JpdGVyaWE6IHRhYmxlLnNldHRpbmdzLmZpbHRlclxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0YWJsZS5zZXR0aW5ncy5mZXRjaENhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFibGUuc2V0dGluZ3MuZmV0Y2hDYWxsYmFjayhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRhYmxlLnNldHRpbmdzLnBhZ2VzID0gTWF0aC5jZWlsKHJlc3VsdC5kYXRhLnRvdGFsIC8gcmVzdWx0LmRhdGEucGFnZVNpemUpO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXN1bHQuZGF0YS5yZWNvcmRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyZWQgKz0gdGFibGUuc2V0dGluZ3Mucm93VGVtcGxhdGUocmVzdWx0LmRhdGEucmVjb3Jkc1tpXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZW5kZXJlZCArPSBcIjwvdGJvZHk+XCI7XHJcbiAgICAgICAgICAgICAgICByZW5kZXJlZCArPSBnZXRGb290ZXIodGFibGUpO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZW5kZXJlZCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHByb21pc2UudGhlbihcclxuICAgICAgICBmdW5jdGlvbiAocmVuZGVyZWQpIHtcclxuICAgICAgICAgICAgdGFibGUuc2V0dGluZ3MuY29udGFpbmVyLmh0bWwocmVuZGVyZWQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRhYmxlLnNldHRpbmdzLnJlbmRlcmVkQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgIHRhYmxlLnNldHRpbmdzLnJlbmRlcmVkQ2FsbGJhY2sodGFibGUuc2V0dGluZ3MuY29udGFpbmVyWzBdLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGFibGVcIilbMF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbn07XHJcblxyXG5jbGFzcyBUYWJsZUluc3RhbmNlIHtcclxuICAgIGNvbnN0cnVjdG9yKGFyZ3MpIHtcclxuICAgICAgICB0aGlzLnNldHRpbmdzID0ge1xyXG4gICAgICAgICAgICBjb250YWluZXI6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgY3VycmVudFBhZ2U6IDAsXHJcbiAgICAgICAgICAgIGRhdGE6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgZmV0Y2hDYWxsYmFjazogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICBmZXRjaFVybDogXCJcIixcclxuICAgICAgICAgICAgaGVhZGVyVGVtcGxhdGU6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgcGFnZVNpemU6IDEwLFxyXG4gICAgICAgICAgICBwcmVmZXRjaFBhZ2VzOiA1LFxyXG4gICAgICAgICAgICByb3dUZW1wbGF0ZTogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICB0YWJsZUNsYXNzOiBcImVzcGFsaWVyLXRhYmxlXCIsXHJcbiAgICAgICAgICAgIHJlbmRlcmVkQ2FsbGJhY2s6IHVuZGVmaW5lZFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgICQuZXh0ZW5kKHRoaXMuc2V0dGluZ3MsIGFyZ3MpO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuc2V0dGluZ3MuZmV0Y2hVcmwgJiYgIXRoaXMuc2V0dGluZ3MuZGF0YSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiWW91IG11c3QgZWl0aGVyIHNwZWNpZnkgYSBmZXRjaCB1cmwgb3IgcGFzcyBpbiBkYXRhIGZvciB0aGUgdGFibGUgdG8gZGlzcGxheS5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuc2V0dGluZ3MuY29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJZb3UgbXVzdCBzcGVjaWZ5IGEgY29udGFpbmVyIHRvIHBsYWNlIHRoZSB0YWJsZSBpbi5cIilcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5zZXR0aW5ncy5yb3dUZW1wbGF0ZSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiWW91IG11c3QgcHJvdmlkZSBhIHJvdyB0ZW1wbGF0ZS5cIilcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNldHRpbmdzLmRhdGEpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5wYWdlcyA9IE1hdGguY2VpbCh0aGlzLnNldHRpbmdzLmRhdGEubGVuZ3RoIC8gdGhpcy5zZXR0aW5ncy5wYWdlU2l6ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkLmV4dGVuZCh0aGlzLnNldHRpbmdzLCBhcmdzKTtcclxuICAgIH1cclxuXHJcbiAgICBuZXh0KCkge1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3MuY3VycmVudFBhZ2UrKztcclxuICAgICAgICByZW5kZXJUYWJsZSh0aGlzKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwcmV2aW91cygpIHtcclxuICAgICAgICB0aGlzLnNldHRpbmdzLmN1cnJlbnRQYWdlLS07XHJcbiAgICAgICAgcmVuZGVyVGFibGUodGhpcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsdGVyKGZpbHRlcikge1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3MuZmlsdGVyID0gZmlsdGVyO1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3MuY3VycmVudFBhZ2UgPSAwO1xyXG4gICAgICAgIHJlbmRlclRhYmxlKHRoaXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGdvVG9QYWdlKHBhZ2UpIHtcclxuICAgICAgICBpZiAocGFnZSA8IDAgfHwgcGFnZSA+PSB0aGlzLnNldHRpbmdzLnBhZ2VzKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0dGluZ3MuY3VycmVudFBhZ2UgPSBwYWdlO1xyXG4gICAgICAgIHJlbmRlclRhYmxlKHRoaXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIHRhYmxlcyA9IHtcclxuICAgIGNyZWF0ZTogZnVuY3Rpb24gKGFyZ3MpIHtcclxuICAgICAgICB2YXIgdGFibGUgPSBuZXcgVGFibGVJbnN0YW5jZShhcmdzKTtcclxuICAgICAgICB0YWJsZS5zZXR0aW5ncy5jb250YWluZXIub24oXCJjbGlja1wiLCBcIi5lc3BhbGllci10YWJsZS1idXR0b25cIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0YWJsZS5nb1RvUGFnZSgkKHRoaXMpLmRhdGEoXCJwYWdlXCIpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZW5kZXJUYWJsZSh0YWJsZSk7XHJcbiAgICAgICAgcmV0dXJuIHRhYmxlO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGFibGVzO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L2dpdC9Fc3BhbGllckpTL3NyYy9qcy9lc3BhbGllci50YWJsZXMuanNcbiAqKi8iLCJpbXBvcnQgY29yZSBmcm9tIFwiLi9lc3BhbGllci5jb3JlXCI7XHJcbmltcG9ydCBjb21tb24gZnJvbSBcIi4vZXNwYWxpZXIuY29tbW9uXCI7XHJcblxyXG5jbGFzcyBEaWFsb2cge1xyXG4gICAgY29uc3RydWN0b3IoYXJncykge1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQ6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgYnV0dG9uczogW11cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAkLmV4dGVuZCh0aGlzLnNldHRpbmdzLCBhcmdzKTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnNldHRpbmdzLmVsZW1lbnQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IG11c3QgcGFzcyBhbiBlbGVtZW50LlwiKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2V0dGluZ3MuZWxlbWVudC5sZW5ndGggIT09IDEpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZWxlbWVudCBtdXN0IGhhdmUgZXhhY3RseSBvbmUgcm9vdCBlbGVtZW50LlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2hvdygpIHtcclxuICAgICAgICB2YXIgaGVpZ2h0LCBzY3JvbGxUb3AsIHRvcCwgd2luZG93SGVpZ2h0LCBkaWFsb2c7XHJcbiAgICAgICAgY29yZS5oaWRlTWFpbk1lc3NhZ2UoKTtcclxuICAgICAgICBjb21tb24uc2hvd1ZlbGx1bSgpO1xyXG4gICAgICAgIHdpbmRvd0hlaWdodCA9IGNvbW1vbi53aW5kb3cuaGVpZ2h0KCk7XHJcbiAgICAgICAgZGlhbG9nID0gdGhpcy5zZXR0aW5ncy5lbGVtZW50O1xyXG4gICAgICAgIGRpYWxvZy5jc3MoXCJwb3NpdGlvblwiLCBcImFic29sdXRlXCIpO1xyXG4gICAgICAgICQoXCJhLCBidXR0b24sIGlucHV0LCBzZWxlY3QsIHRleHRhcmVhXCIpLmF0dHIoXCJ0YWJpbmRleFwiLCBcIi0xXCIpO1xyXG5cclxuICAgICAgICBjb21tb24uYm9keS5hcHBlbmQoZGlhbG9nKTtcclxuXHJcbiAgICAgICAgc2Nyb2xsVG9wID0gY29tbW9uLndpbmRvdy5zY3JvbGxUb3AoKTtcclxuXHJcbiAgICAgICAgaGVpZ2h0ID0gZGlhbG9nLmhlaWdodCgpO1xyXG4gICAgICAgIHRvcCA9ICh3aW5kb3dIZWlnaHQgLyAyKSAtIChoZWlnaHQgLyAyKSArIHNjcm9sbFRvcDtcclxuICAgICAgICB0b3AgPSB0b3AgPiAwID8gdG9wIDogMDtcclxuICAgICAgICBkaWFsb2cuY3NzKFwidG9wXCIsIHRvcCk7XHJcbiAgICAgICAgJChcIjpmb2N1c1wiKS5ibHVyKCk7XHJcbiAgICAgICAgJChcIi5mb2N1c1wiLCBkaWFsb2cpLmZpcnN0KCkuZm9jdXMoKTtcclxuXHJcbiAgICAgICAgZGlhbG9nLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG5cclxuICAgICAgICBkaWFsb2cudmVsb2NpdHkoXCJ0cmFuc2l0aW9uLndoaXJsSW5cIiwge1xyXG4gICAgICAgICAgICBkdXJhdGlvbjogNDUwXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGZvcihsZXQgYnV0dG9uIG9mIHRoaXMuc2V0dGluZ3MuYnV0dG9ucykge1xyXG4gICAgICAgICAgICAkKFwiI1wiICsgYnV0dG9uLm5hbWUsIGRpYWxvZykuY2xpY2soKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uLmhhbmRsZXIodGhpcyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZSgpIHtcclxuICAgICAgICB2YXIgZGlhbG9nID0gJCh0aGlzLnNldHRpbmdzLmVsZW1lbnQpO1xyXG4gICAgICAgIGRpYWxvZy52ZWxvY2l0eShcInRyYW5zaXRpb24ud2hpcmxPdXRcIiwge1xyXG4gICAgICAgICAgICBkdXJhdGlvbjogMTUwLFxyXG4gICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgZGlhbG9nLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgJChcIiNub3RpZmljYXRpb25NZXNzYWdlXCIpLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkKFwiLmRpYWxvZ1wiKS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbW1vbi5oaWRlVmVsbHVtKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGFyZ3MpIHtcclxuICAgIHJldHVybiBuZXcgRGlhbG9nKGFyZ3MpO1xyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovZ2l0L0VzcGFsaWVySlMvc3JjL2pzL2VzcGFsaWVyLmRpYWxvZy5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=