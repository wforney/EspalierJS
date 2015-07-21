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
	
	var _espalierForms = __webpack_require__(10);
	
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
	            if (this.control.val() === this.whenVal && _espalierCore2["default"].isEmptyOrSpaces(this.dependent.value)) {
	                return false;
	            }
	
	            return true;
	        }
	    }, {
	        key: "message",
	        get: function get() {
	            return "Field is required.";
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
	
	var _espalierFormsControl = __webpack_require__(11);
	
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
	
	var _espalierValidation = __webpack_require__(9);
	
	var _espalierMessageFactory = __webpack_require__(4);
	
	var _espalierMessageFactory2 = _interopRequireDefault(_espalierMessageFactory);
	
	var FormControl = (function () {
	    function FormControl(control, validations) {
	        var _this = this;
	
	        _classCallCheck(this, FormControl);
	
	        var controlType = control.type ? control.type : control.getAttribute("type");
	        var lowerCaseId = controlType == "radio" ? control.name.toLowerCase() : control.id.toLowerCase();
	
	        if (!lowerCaseId) {
	            throw new Error("Elements must have an Id to be properly wired to an Espalier form control.");
	        }
	
	        this.control = control;
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
	
	                                            dependent.style.display = "none";
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
	
	                                    dependent.style.display = "inline";
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
	
	                        var requiredDependents = _espalierCore2["default"].find(requiredDependentsSelector, group);
	
	                        _iteratorNormalCompletion5 = true;
	                        _didIteratorError5 = false;
	                        _iteratorError5 = undefined;
	
	                        try {
	                            for (_iterator5 = requiredDependents[Symbol.iterator](); !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	                                var requiredDependent = _step5.value;
	
	                                validations.push(new _espalierValidation.RequiredDependent(_this, radio.value, requiredDependent));
	                                requiredDependent.style.display = "none";
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
	
	                        dependents.set(radio, requiredDependents);
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
	
	        if (required || control.required || control.getAttribute("required")) {
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
	    }]);
	
	    return FormControl;
	})();
	
	exports["default"] = function (control) {
	    var validations = [];
	    var formControl = new FormControl(control, validations);
	
	    formControl.validate = function () {
	        var errors = [];
	
	        if (validations) {
	            var _iteratorNormalCompletion6 = true;
	            var _didIteratorError6 = false;
	            var _iteratorError6 = undefined;
	
	            try {
	                for (var _iterator6 = validations[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
	                    var validation = _step6.value;
	
	                    if (!validation.isValid()) {
	                        errors.push(validation.message);
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
	
	        return errors.length === 0;
	    };
	
	    return formControl;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA3ZjlhZmU5NjViY2EzOTI3YWM4MyIsIndlYnBhY2s6Ly8vQzovZ2l0L0VzcGFsaWVySlMvc3JjL2pzL2RlbW8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL0M6L2dpdC9Fc3BhbGllckpTL3NyYy9qcy9lc3BhbGllci5qcyIsIndlYnBhY2s6Ly8vQzovZ2l0L0VzcGFsaWVySlMvc3JjL2pzL2VzcGFsaWVyLmNvcmUuanMiLCJ3ZWJwYWNrOi8vL0M6L2dpdC9Fc3BhbGllckpTL3NyYy9qcy9lc3BhbGllci5tZXNzYWdlRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly8vQzovZ2l0L0VzcGFsaWVySlMvc3JjL2pzL3RlbXBsYXRlcy9ib290c3RyYXBUZW1wbGF0ZXMuanMiLCJ3ZWJwYWNrOi8vL0M6L2dpdC9Fc3BhbGllckpTL3NyYy9qcy9lc3BhbGllci53YWl0c2NyZWVuLmpzIiwid2VicGFjazovLy9DOi9naXQvRXNwYWxpZXJKUy9zcmMvanMvZXNwYWxpZXIuY29tbW9uLmpzIiwid2VicGFjazovLy9DOi9naXQvRXNwYWxpZXJKUy9+L3B1YnN1Yi1qcy9zcmMvcHVic3ViLmpzIiwid2VicGFjazovLy9DOi9naXQvRXNwYWxpZXJKUy9zcmMvanMvZXNwYWxpZXIudmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vQzovZ2l0L0VzcGFsaWVySlMvc3JjL2pzL2VzcGFsaWVyLmZvcm1zLmpzIiwid2VicGFjazovLy9DOi9naXQvRXNwYWxpZXJKUy9zcmMvanMvZXNwYWxpZXIuZm9ybXMuY29udHJvbC5qcyIsIndlYnBhY2s6Ly8vQzovZ2l0L0VzcGFsaWVySlMvc3JjL2pzL2VzcGFsaWVyLnRhYmxlcy5qcyIsIndlYnBhY2s6Ly8vQzovZ2l0L0VzcGFsaWVySlMvc3JjL2pzL2VzcGFsaWVyLmRpYWxvZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQ0N0Q3FCLENBQWE7Ozs7QUFFbEMsdUJBQVMsUUFBUSxDQUFDLHFDQUFxQyxDQUFDLENBQUM7QUFDekQsdUJBQVMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7O0FBRWhDLEtBQUksY0FBYyxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUN0RSxFQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7O0FBRTlCLEtBQUksS0FBSyxHQUFHLHNCQUFTLEtBQUssQ0FBQztBQUN2QixjQUFTLEVBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQztBQUMzQixnQkFBVyxFQUFFLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDL0QsU0FBSSxFQUFFLENBQ0YsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsRUFDMUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsRUFDMUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsRUFDMUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsRUFDMUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsRUFDMUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsRUFDMUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsRUFDMUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsRUFDMUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsRUFDMUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsRUFDNUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsRUFDNUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsRUFDNUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsRUFDNUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsRUFDNUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsRUFDNUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsRUFDNUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsRUFDNUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsRUFDNUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsRUFDNUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsRUFDNUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsRUFDNUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsRUFDNUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUks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QUMsT0FBTyw4SEFBRTs7a0JBSXhDOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsb0JBQU8sSUFBSSxDQUFDO1VBQ2Y7OztnQkFFRyxnQkFBRztBQUNILGlCQUFJLE1BQU0sR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN0QyxtQkFBTSxDQUFDLFFBQVEsQ0FBQyxxQkFBcUIsRUFBRTtBQUNuQyx5QkFBUSxFQUFFLEdBQUc7QUFDYix5QkFBUSxFQUFFLG9CQUFZO0FBQ2xCLDJCQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDaEIsc0JBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDOztBQUVuQyx5QkFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtBQUMxQixxREFBTyxVQUFVLEVBQUUsQ0FBQztzQkFDdkI7a0JBQ0o7Y0FDSixDQUFDLENBQUM7QUFDSCxvQkFBTyxJQUFJLENBQUM7VUFDZjs7O1lBakVDLE1BQU07OztzQkFvRUcsVUFBVSxJQUFJLEVBQUU7QUFDM0IsWUFBTyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUMzQiIsImZpbGUiOiJkZW1vX2NvbXBpbGVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJhcHBcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiYXBwXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uXG4gKiovIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA3ZjlhZmU5NjViY2EzOTI3YWM4M1xuICoqLyIsImltcG9ydCBlc3BhbGllciBmcm9tIFwiLi4vZXNwYWxpZXJcIjtcclxuXHJcbmVzcGFsaWVyLnNob3dJbmZvKFwiSXQgc2VlbXMgdGhlIGxpYnJhcmllcyBoYXZlIGxvYWRlZCFcIik7XHJcbmVzcGFsaWVyLndpcmUoXCIjc3RhbmRhcmQtZm9ybVwiKTtcclxuXHJcbnZhciBkaWFsb2dUZW1wbGF0ZSA9IEhhbmRsZWJhcnMuY29tcGlsZSgkKFwiI2RpYWxvZy10ZW1wbGF0ZVwiKS5odG1sKCkpO1xyXG4kKFwiLmRhdGVwaWNrZXJcIikuZGF0ZXBpY2tlcigpO1xyXG5cclxudmFyIHRhYmxlID0gZXNwYWxpZXIudGFibGUoe1xyXG4gICAgY29udGFpbmVyOiAkKFwiI2RlbW8tdGFibGVcIiksXHJcbiAgICByb3dUZW1wbGF0ZTogSGFuZGxlYmFycy5jb21waWxlKCQoXCIjdGVzdC1yb3ctdGVtcGxhdGVcIikuaHRtbCgpKSxcclxuICAgIGRhdGE6IFtcclxuICAgICAgICB7IGNvbDE6IFwiUmVjb3JkIDEtMVwiLCBjb2wyOiBcIlJlY29yZCAxLTJcIiB9LFxyXG4gICAgICAgIHsgY29sMTogXCJSZWNvcmQgMi0xXCIsIGNvbDI6IFwiUmVjb3JkIDItMlwiIH0sXHJcbiAgICAgICAgeyBjb2wxOiBcIlJlY29yZCAzLTFcIiwgY29sMjogXCJSZWNvcmQgMy0yXCIgfSxcclxuICAgICAgICB7IGNvbDE6IFwiUmVjb3JkIDQtMVwiLCBjb2wyOiBcIlJlY29yZCA0LTJcIiB9LFxyXG4gICAgICAgIHsgY29sMTogXCJSZWNvcmQgNS0xXCIsIGNvbDI6IFwiUmVjb3JkIDUtMlwiIH0sXHJcbiAgICAgICAgeyBjb2wxOiBcIlJlY29yZCA2LTFcIiwgY29sMjogXCJSZWNvcmQgNi0yXCIgfSxcclxuICAgICAgICB7IGNvbDE6IFwiUmVjb3JkIDctMVwiLCBjb2wyOiBcIlJlY29yZCA3LTJcIiB9LFxyXG4gICAgICAgIHsgY29sMTogXCJSZWNvcmQgOC0xXCIsIGNvbDI6IFwiUmVjb3JkIDgtMlwiIH0sXHJcbiAgICAgICAgeyBjb2wxOiBcIlJlY29yZCA5LTFcIiwgY29sMjogXCJSZWNvcmQgOS0yXCIgfSxcclxuICAgICAgICB7IGNvbDE6IFwiUmVjb3JkIDEwLTFcIiwgY29sMjogXCJSZWNvcmQgMTAtMlwiIH0sXHJcbiAgICAgICAgeyBjb2wxOiBcIlJlY29yZCAxMS0xXCIsIGNvbDI6IFwiUmVjb3JkIDExLTJcIiB9LFxyXG4gICAgICAgIHsgY29sMTogXCJSZWNvcmQgMTItMVwiLCBjb2wyOiBcIlJlY29yZCAxMi0yXCIgfSxcclxuICAgICAgICB7IGNvbDE6IFwiUmVjb3JkIDEzLTFcIiwgY29sMjogXCJSZWNvcmQgMTMtMlwiIH0sXHJcbiAgICAgICAgeyBjb2wxOiBcIlJlY29yZCAxNC0xXCIsIGNvbDI6IFwiUmVjb3JkIDE0LTJcIiB9LFxyXG4gICAgICAgIHsgY29sMTogXCJSZWNvcmQgMTUtMVwiLCBjb2wyOiBcIlJlY29yZCAxNS0yXCIgfSxcclxuICAgICAgICB7IGNvbDE6IFwiUmVjb3JkIDE2LTFcIiwgY29sMjogXCJSZWNvcmQgMTYtMlwiIH0sXHJcbiAgICAgICAgeyBjb2wxOiBcIlJlY29yZCAxNy0xXCIsIGNvbDI6IFwiUmVjb3JkIDE3LTJcIiB9LFxyXG4gICAgICAgIHsgY29sMTogXCJSZWNvcmQgMTgtMVwiLCBjb2wyOiBcIlJlY29yZCAxOC0yXCIgfSxcclxuICAgICAgICB7IGNvbDE6IFwiUmVjb3JkIDE5LTFcIiwgY29sMjogXCJSZWNvcmQgMTktMlwiIH0sXHJcbiAgICAgICAgeyBjb2wxOiBcIlJlY29yZCAyMC0xXCIsIGNvbDI6IFwiUmVjb3JkIDIwLTJcIiB9LFxyXG4gICAgICAgIHsgY29sMTogXCJSZWNvcmQgMjEtMVwiLCBjb2wyOiBcIlJlY29yZCAyMS0yXCIgfSxcclxuICAgICAgICB7IGNvbDE6IFwiUmVjb3JkIDIyLTFcIiwgY29sMjogXCJSZWNvcmQgMjItMlwiIH0sXHJcbiAgICAgICAgeyBjb2wxOiBcIlJlY29yZCAyMy0xXCIsIGNvbDI6IFwiUmVjb3JkIDIzLTJcIiB9LFxyXG4gICAgICAgIHsgY29sMTogXCJSZWNvcmQgMjQtMVwiLCBjb2wyOiBcIlJlY29yZCAyNC0yXCIgfSxcclxuICAgICAgICB7IGNvbDE6IFwiUmVjb3JkIDI1LTFcIiwgY29sMjogXCJSZWNvcmQgMjUtMlwiIH1cclxuICAgIF1cclxufSk7XHJcblxyXG4kKFwiI3NlYXJjaC1yZWNvcmRzXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIHZhciBmaWx0ZXIgPSB7XHJcbiAgICAgICAgU3RhcnREYXRlOiAkKFwiI3N0YXJ0LWRhdGVcIikudmFsKCksXHJcbiAgICAgICAgRW5kRGF0ZTogJChcIiNlbmQtZGF0ZVwiKS52YWwoKSxcclxuICAgICAgICBDbGllbnRJUEFkZHJlc3M6ICQoXCIjaXAtYWRkcmVzc1wiKS52YWwoKSxcclxuICAgICAgICBVc2VyTmFtZTogJChcIiN1c2VyLW5hbWVcIikudmFsKCksXHJcbiAgICAgICAgTWFjQWRkcmVzczogJChcIiNtYWMtYWRkcmVzc1wiKS52YWwoKSxcclxuICAgICAgICBXb3JraW5nVGVsZXBob25lTnVtYmVyOiAkKFwiI3d0blwiKS52YWwoKSxcclxuICAgICAgICBCaWxsaW5nVGVsZXBob25lTnVtYmVyOiAkKFwiI2J0blwiKS52YWwoKVxyXG4gICAgfTtcclxuXHJcbiAgICB0YWJsZS5maWx0ZXIoZmlsdGVyKTtcclxufSk7XHJcblxyXG4kKFwiI3Nob3ctZGlhbG9nXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIGVzcGFsaWVyLmRpYWxvZyh7XHJcbiAgICAgICAgZWxlbWVudDogJCgkLnRyaW0oZGlhbG9nVGVtcGxhdGUoKSkpLFxyXG4gICAgICAgIGJ1dHRvbnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJzdWJtaXRcIixcclxuICAgICAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uIChkaWFsb2cpIHtcclxuICAgICAgICAgICAgICAgICAgICBhbGVydChcInN1Ym1pdCFcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlhbG9nLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJjYW5jZWxcIixcclxuICAgICAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uIChkaWFsb2cpIHtcclxuICAgICAgICAgICAgICAgICAgICBkaWFsb2cuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfSk7XHJcbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L2dpdC9Fc3BhbGllckpTL3NyYy9qcy9kZW1vL2luZGV4LmpzXG4gKiovIiwiaW1wb3J0IGNvcmUgZnJvbSBcIi4vZXNwYWxpZXIuY29yZVwiO1xyXG5pbXBvcnQgdmFsaWRhdGlvbiBmcm9tIFwiLi9lc3BhbGllci52YWxpZGF0aW9uXCI7XHJcbmltcG9ydCBtZXNzYWdlRmFjdG9yeSBmcm9tIFwiLi9lc3BhbGllci5tZXNzYWdlRmFjdG9yeVwiO1xyXG5pbXBvcnQgZm9ybXMgZnJvbSBcIi4vZXNwYWxpZXIuZm9ybXNcIjtcclxuaW1wb3J0IHdhaXRTY3JlZW4gZnJvbSBcIi4vZXNwYWxpZXIud2FpdHNjcmVlblwiO1xyXG5pbXBvcnQgdGFibGVzIGZyb20gXCIuL2VzcGFsaWVyLnRhYmxlc1wiO1xyXG5pbXBvcnQgZGlhbG9nIGZyb20gXCIuL2VzcGFsaWVyLmRpYWxvZ1wiO1xyXG5cclxudmFyIGVzcGFsaWVyID0ge1xyXG4gICAgc2hvd1dhcm5pbmc6IGNvcmUuc2hvd1dhcm5pbmcsXHJcbiAgICBzaG93SW5mbzogY29yZS5zaG93SW5mbyxcclxuICAgIHNlbmRSZXF1ZXN0OiBjb3JlLnNlbmRSZXF1ZXN0LFxyXG4gICAgdGFibGU6IHRhYmxlcy5jcmVhdGUsXHJcbiAgICB3aXJlOiBmb3JtcyxcclxuICAgIHNob3dXYWl0U2NyZWVuOiB3YWl0U2NyZWVuLnNob3csXHJcbiAgICBoaWRlV2FpdFNjcmVlbjogd2FpdFNjcmVlbi5oaWRlLFxyXG4gICAgc2hvcnREYXRlOiBjb3JlLnNob3J0RGF0ZSxcclxuICAgIHNob3J0VGltZTogY29yZS5zaG9ydFRpbWUsXHJcbiAgICBudW1iZXJXaXRoQ29tbWFzOiBjb3JlLm51bWJlcldpdGhDb21tYXMsXHJcbiAgICBwdWJsaXNoOiBjb3JlLnB1Ymxpc2gsXHJcbiAgICBwYXJzZUlTT0RhdGU6IGNvcmUucGFyc2VJU09EYXRlLFxyXG4gICAgc3Vic2NyaWJlOiBjb3JlLnN1YnNjcmliZSxcclxuICAgIGRpYWxvZzogZnVuY3Rpb24gKGFyZ3MpIHtcclxuICAgICAgICByZXR1cm4gZGlhbG9nKGFyZ3MpLnNob3coKTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGVzcGFsaWVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L2dpdC9Fc3BhbGllckpTL3NyYy9qcy9lc3BhbGllci5qc1xuICoqLyIsImltcG9ydCBtZXNzYWdlRmFjdG9yeSBmcm9tIFwiLi9lc3BhbGllci5tZXNzYWdlRmFjdG9yeVwiO1xyXG5pbXBvcnQgd2FpdHNjcmVlbiBmcm9tIFwiLi9lc3BhbGllci53YWl0c2NyZWVuXCI7XHJcbmltcG9ydCBjb21tb24gZnJvbSBcIi4vZXNwYWxpZXIuY29tbW9uXCI7XHJcbmltcG9ydCBwdWJzdWIgZnJvbSBcInB1YnN1Yi1qc1wiO1xyXG5cclxudmFyIGZpbmQgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIHJvb3QpIHtcclxuICAgIHJvb3QgPSByb290ID8gcm9vdCA6IGRvY3VtZW50O1xyXG4gICAgcmV0dXJuIHJvb3QucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XHJcbn07XHJcblxyXG52YXIgbWFpbk1lc3NhZ2UgPSBtZXNzYWdlRmFjdG9yeS5jcmVhdGUoe1xyXG4gICAgYXR0YWNoVG86IGZpbmQoXCJib2R5XCIpWzBdXHJcbn0pO1xyXG5cclxudmFyIHBhcnNlRGF0ZTtcclxudmFyIHRlc3REYXRlID0gbmV3IERhdGUoJzIwMTEtMDYtMDJUMDk6MzQ6MjkrMDI6MDAnKTtcclxuXHJcbmlmICghdGVzdERhdGUgfHwgK3Rlc3REYXRlICE9PSAxMzA3MDAwMDY5MDAwKSB7XHJcbiAgICBwYXJzZURhdGUgPSBmdW5jdGlvbiAocykge1xyXG4gICAgICAgIHZhciBkYXksIHR6LFxyXG4gICAgICAgICAgICByeCA9IC9eKFxcZHs0fVxcLVxcZFxcZFxcLVxcZFxcZChbdFQgXVtcXGQ6XFwuXSopPykoW3paXXwoWytcXC1dKShcXGRcXGQpOihcXGRcXGQpKT8kLyxcclxuICAgICAgICAgICAgcCA9IHJ4LmV4ZWMocykgfHwgW107XHJcbiAgICAgICAgaWYgKHBbMV0pIHtcclxuICAgICAgICAgICAgZGF5ID0gcFsxXS5zcGxpdCgvXFxELyk7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBMID0gZGF5Lmxlbmd0aDsgaSA8IEw7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgZGF5W2ldID0gcGFyc2VJbnQoZGF5W2ldLCAxMCkgfHwgMDtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZGF5WzFdIC09IDE7XHJcbiAgICAgICAgICAgIGRheSA9IG5ldyBEYXRlKERhdGUuVVRDLmFwcGx5KERhdGUsIGRheSkpO1xyXG4gICAgICAgICAgICBpZiAoIWRheS5nZXREYXRlKCkpIHJldHVybiBOYU47XHJcbiAgICAgICAgICAgIGlmIChwWzVdKSB7XHJcbiAgICAgICAgICAgICAgICB0eiA9IChwYXJzZUludChwWzVdLCAxMCkgKiA2MCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocFs2XSkgdHogKz0gcGFyc2VJbnQocFs2XSwgMTApO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBbNF0gPT0gJysnKSB0eiAqPSAtMTtcclxuICAgICAgICAgICAgICAgIGlmICh0eikgZGF5LnNldFVUQ01pbnV0ZXMoZGF5LmdldFVUQ01pbnV0ZXMoKSArIHR6KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZGF5O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gTmFOO1xyXG4gICAgfTtcclxufVxyXG5lbHNlIHtcclxuICAgIHBhcnNlRGF0ZSA9IGZ1bmN0aW9uIChzKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHMpO1xyXG4gICAgfTtcclxufVxyXG5cclxudGVzdERhdGUgPSB1bmRlZmluZWQ7XHJcblxyXG52YXIgY29yZSA9IHtcclxuICAgIHNlbmRSZXF1ZXN0OiBmdW5jdGlvbiAocmVxKSB7XHJcbiAgICAgICAgd2FpdHNjcmVlbi5zaG93KCk7XHJcbiAgICAgICAgJChcIi5cIiArIG1haW5NZXNzYWdlLnNldHRpbmdzLm1lc3NhZ2VDb250YWluZXJDbGFzcykucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgIHZhciBhamF4U2V0dGluZ3MgPSB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHhockZpZWxkczoge1xyXG4gICAgICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN0YXR1c0NvZGU6IHtcclxuICAgICAgICAgICAgICAgIDUwMDogZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29yZS5zaG93RXJyb3Ioe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBlcnJvci5yZXNwb25zZUpTT04uTWVzc2FnZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3M6IFwiZXJyb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIDQwMDogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVycm9ycyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkLmVhY2gocmVzcG9uc2UucmVzcG9uc2VKU09OLmVycm9ycywgZnVuY3Rpb24gKGluZGV4LCBlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3Iuc291cmNlICYmIGVycm9yLnNvdXJjZS5wYXJhbWV0ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzcGVjaWZpY0ZpZWxkID0gJChcIiNcIiArIGVycm9yLnNvdXJjZS5wYXJhbWV0ZXIudG9Mb3dlckNhc2UoKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNwZWNpZmljRmllbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZmllbGRNZXNzYWdlID0gc3BlY2lmaWNGaWVsZC5kYXRhKFwibWVzc2FnZVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkTWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZE1lc3NhZ2Uuc2hvdyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBlcnJvci5kZXRhaWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlVHlwZTogbWVzc2FnZUZhY3RvcnkubWVzc2FnZVR5cGUuRXJyb3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMucHVzaChlcnJvci5kZXRhaWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3JzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29yZS5zaG93RXJyb3IoZXJyb3JzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIHdhaXRzY3JlZW4uaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXEuZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHVic3ViLnB1Ymxpc2gocmVxLmV2ZW50LCByZXNwb25zZS5yZXNwb25zZUpTT04pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcS5vblN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxLm9uU3VjY2VzcyhyZXNwb25zZS5yZXNwb25zZUpTT04pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgICQuZXh0ZW5kKGFqYXhTZXR0aW5ncywgcmVxKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICQuYWpheChhamF4U2V0dGluZ3MpO1xyXG4gICAgfSxcclxuICAgIHNob3dXYXJuaW5nOiBmdW5jdGlvbiAobWVzc2FnZXMpIHtcclxuICAgICAgICBtYWluTWVzc2FnZS5zaG93KHtcclxuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZXMsXHJcbiAgICAgICAgICAgIG1lc3NhZ2VUeXBlOiBtZXNzYWdlRmFjdG9yeS5tZXNzYWdlVHlwZS5XYXJuaW5nXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgc2hvd0Vycm9yOiBmdW5jdGlvbiAobWVzc2FnZXMpIHtcclxuICAgICAgICBtYWluTWVzc2FnZS5zaG93KHtcclxuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZXMsXHJcbiAgICAgICAgICAgIG1lc3NhZ2VUeXBlOiBtZXNzYWdlRmFjdG9yeS5tZXNzYWdlVHlwZS5FcnJvclxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHNob3dJbmZvOiBmdW5jdGlvbiAobWVzc2FnZXMpIHtcclxuICAgICAgICBtYWluTWVzc2FnZS5zaG93KHtcclxuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZXMsXHJcbiAgICAgICAgICAgIG1lc3NhZ2VUeXBlOiBtZXNzYWdlRmFjdG9yeS5tZXNzYWdlVHlwZS5JbmZvXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgaGlkZU1haW5NZXNzYWdlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbWFpbk1lc3NhZ2UucmVtb3ZlKCk7XHJcbiAgICB9LFxyXG4gICAgaXNFbXB0eU9yU3BhY2VzOiBmdW5jdGlvbiAoc3RyKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0ciA9PT0gdW5kZWZpbmVkIHx8IHN0ciA9PT0gbnVsbCB8fCBzdHIubWF0Y2goL15cXHMqJC8pICE9PSBudWxsO1xyXG4gICAgfSxcclxuICAgIGlzRW1haWw6IGZ1bmN0aW9uIChzdHIpIHtcclxuICAgICAgICB2YXIgZW1haWxSZWdleCA9IC9eKChbXFx3LV0rXFwuKStbXFx3LV0rfChbYS16QS1aXXsxfXxbXFx3LV17Mix9KSlAKCgoWzAtMV0/WzAtOV17MSwyfXwyNVswLTVdfDJbMC00XVswLTldKVxcLihbMC0xXT9bMC05XXsxLDJ9fDI1WzAtNV18MlswLTRdWzAtOV0pXFwuKFswLTFdP1swLTldezEsMn18MjVbMC01XXwyWzAtNF1bMC05XSlcXC4oWzAtMV0/WzAtOV17MSwyfXwyNVswLTVdfDJbMC00XVswLTldKSl7MX18KFthLXpBLVpdK1tcXHctXStcXC4pK1thLXpBLVpdezIsNH0pJC87XHJcbiAgICAgICAgcmV0dXJuIGNvcmUuaXNFbXB0eU9yU3BhY2VzKHN0cikgfHwgc3RyLm1hdGNoKGVtYWlsUmVnZXgpO1xyXG4gICAgfSxcclxuICAgIGlzRGF0ZTogZnVuY3Rpb24gKHN0cikge1xyXG4gICAgICAgIHZhciBkID0gbmV3IERhdGUoc3RyKTtcclxuICAgICAgICByZXR1cm4gY29yZS5pc0VtcHR5T3JTcGFjZXMoc3RyKSB8fCAoZCAhPSBcIkludmFsaWQgRGF0ZVwiICYmICFpc05hTihkKSk7XHJcbiAgICB9LFxyXG4gICAgbnVtYmVyV2l0aENvbW1hczogZnVuY3Rpb24gbnVtYmVyV2l0aENvbW1hcyh4KSB7XHJcbiAgICAgICAgdmFyIHBhcnRzID0geC50b1N0cmluZygpLnNwbGl0KFwiLlwiKTtcclxuICAgICAgICBwYXJ0c1swXSA9IHBhcnRzWzBdLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIFwiLFwiKTtcclxuICAgICAgICByZXR1cm4gcGFydHMuam9pbihcIi5cIik7XHJcbiAgICB9LFxyXG4gICAgcGFyc2VJU09EYXRlOiBwYXJzZURhdGUsXHJcbiAgICBzaG9ydERhdGU6IGZ1bmN0aW9uIChkYXRlKSB7XHJcbiAgICAgICAgaWYgKCEoZGF0ZSBpbnN0YW5jZW9mIERhdGUpKSB7XHJcbiAgICAgICAgICAgIGRhdGUgPSBwYXJzZURhdGUoZGF0ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKGRhdGUuZ2V0TW9udGgoKSArIDEpICtcclxuICAgICAgICAgICAgXCIvXCIgKyBkYXRlLmdldERhdGUoKSArXHJcbiAgICAgICAgICAgIFwiL1wiICsgZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgfSxcclxuICAgIHNob3J0VGltZTogZnVuY3Rpb24gKGRhdGUpIHtcclxuICAgICAgICBpZiAoIShkYXRlIGluc3RhbmNlb2YgRGF0ZSkpIHtcclxuICAgICAgICAgICAgZGF0ZSA9IHBhcnNlRGF0ZShkYXRlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBob3VyID0gZGF0ZS5nZXRIb3VycygpO1xyXG4gICAgICAgIHZhciBhbXBtID0gXCJBTVwiO1xyXG5cclxuICAgICAgICBpZiAoaG91ciA+IDExKSB7XHJcbiAgICAgICAgICAgIGhvdXIgLT0gMTI7XHJcbiAgICAgICAgICAgIGFtcG0gPSBcIlBNXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaG91ciA9PT0gMCkge1xyXG4gICAgICAgICAgICBob3VyID0gMTI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgbWludXRlcyA9IFwiMDBcIiArIGRhdGUuZ2V0TWludXRlcygpO1xyXG4gICAgICAgIHJldHVybiBob3VyICsgXCI6XCIgKyBtaW51dGVzLnN1YnN0cmluZyhtaW51dGVzLmxlbmd0aCAtIDIpICsgXCIgXCIgKyBhbXBtO1xyXG4gICAgfSxcclxuICAgIHB1Ymxpc2g6IGZ1bmN0aW9uICh0b3BpYywgbWVzc2FnZSkge1xyXG4gICAgICAgIHB1YnN1Yi5wdWJsaXNoKHRvcGljLCBtZXNzYWdlKTtcclxuICAgIH0sXHJcbiAgICBzdWJzY3JpYmU6IGZ1bmN0aW9uICh0b3BpYywgaGFuZGxlcikge1xyXG4gICAgICAgIHJldHVybiBwdWJzdWIuc3Vic2NyaWJlKHRvcGljLCBmdW5jdGlvbiAodG9waWMsIG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgaGFuZGxlcihtZXNzYWdlKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBmaW5kLFxyXG4gICAgZXh0ZW5kOiBmdW5jdGlvbiAob3V0KSB7XHJcbiAgICAgICAgb3V0ID0gb3V0IHx8IHt9O1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgb2JqID0gYXJndW1lbnRzW2ldO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFvYmopXHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcclxuICAgICAgICAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqW2tleV0gPT09ICdvYmplY3QnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3JlLmV4dGVuZChvdXRba2V5XSwgb2JqW2tleV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0W2tleV0gPSBvYmpba2V5XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG91dDtcclxuICAgIH0sXHJcbiAgICBjbG9zZXN0OiBmdW5jdGlvbiBjbG9zZXN0KGVsLCBzZWxlY3Rvcikge1xyXG4gICAgICAgIHZhciBtYXRjaGVzRm47XHJcblxyXG4gICAgICAgIC8vIGZpbmQgdmVuZG9yIHByZWZpeFxyXG4gICAgICAgIFtcIm1hdGNoZXNcIiwgXCJ3ZWJraXRNYXRjaGVzU2VsZWN0b3JcIiwgXCJtb3pNYXRjaGVzU2VsZWN0b3JcIiwgXCJtc01hdGNoZXNTZWxlY3RvclwiLCBcIm9NYXRjaGVzU2VsZWN0b3JcIl0uc29tZShmdW5jdGlvbiAoZm4pIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBkb2N1bWVudC5ib2R5W2ZuXSA9PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgIG1hdGNoZXNGbiA9IGZuO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vIHRyYXZlcnNlIHBhcmVudHNcclxuICAgICAgICB3aGlsZSAoZWwgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgbGV0IHBhcmVudCA9IGVsLnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGlmIChwYXJlbnQgIT09IG51bGwgJiYgcGFyZW50W21hdGNoZXNGbl0oc2VsZWN0b3IpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyZW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsID0gcGFyZW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9LFxyXG4gICAgYWRkQ2xhc3M6IGZ1bmN0aW9uIChlbCwgY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgaWYgKGVsLmNsYXNzTGlzdCkge1xyXG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZWwuY2xhc3NOYW1lICs9ICcgJyArIGNsYXNzTmFtZTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uIChlbCwgY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgaWYgKGVsLmNsYXNzTGlzdCkge1xyXG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZWwuY2xhc3NOYW1lID0gZWwuY2xhc3NOYW1lLnJlcGxhY2UobmV3IFJlZ0V4cCgnKF58XFxcXGIpJyArIGNsYXNzTmFtZS5zcGxpdCgnICcpLmpvaW4oJ3wnKSArICcoXFxcXGJ8JCknLCAnZ2knKSwgJyAnKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgYWRkRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24gKGVsLCBldmVudE5hbWUsIGhhbmRsZXIpIHtcclxuICAgICAgICBpZiAoZWwuYWRkRXZlbnRMaXN0ZW5lcikge1xyXG4gICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgaGFuZGxlcik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZWwuYXR0YWNoRXZlbnQoJ29uJyArIGV2ZW50TmFtZSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlci5jYWxsKGVsKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1hdGNoZXM6IGZ1bmN0aW9uIChlbCwgc2VsZWN0b3IpIHtcclxuICAgICAgICB2YXIgX21hdGNoZXMgPSAoZWwubWF0Y2hlcyB8fCBlbC5tYXRjaGVzU2VsZWN0b3IgfHwgZWwubXNNYXRjaGVzU2VsZWN0b3IgfHwgZWwubW96TWF0Y2hlc1NlbGVjdG9yIHx8IGVsLndlYmtpdE1hdGNoZXNTZWxlY3RvciB8fCBlbC5vTWF0Y2hlc1NlbGVjdG9yKTtcclxuXHJcbiAgICAgICAgaWYgKF9tYXRjaGVzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfbWF0Y2hlcy5jYWxsKGVsLCBzZWxlY3Rvcik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIG5vZGVzID0gZWwucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IG5vZGVzLmxlbmd0aDsgaS0tOykge1xyXG4gICAgICAgICAgICAgICAgaWYgKG5vZGVzW2ldID09PSBlbClcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGlzU3RyaW5nOiBmdW5jdGlvbih0b1Rlc3QpIHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIHRvVGVzdCA9PT0gJ3N0cmluZycgfHwgdG9UZXN0IGluc3RhbmNlb2YgU3RyaW5nO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29yZTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9naXQvRXNwYWxpZXJKUy9zcmMvanMvZXNwYWxpZXIuY29yZS5qc1xuICoqLyIsImltcG9ydCBjb3JlIGZyb20gXCIuL2VzcGFsaWVyLmNvcmVcIjtcclxuaW1wb3J0IGJvb3RzdHJhcFRlbXBsYXRlcyBmcm9tIFwiLi90ZW1wbGF0ZXMvYm9vdHN0cmFwVGVtcGxhdGVzXCI7XHJcblxyXG5jbGFzcyBNZXNzYWdlRGlzcGxheWVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGFyZ3MpIHtcclxuICAgICAgICB0aGlzLnNldHRpbmdzID0ge1xyXG4gICAgICAgICAgICBhdHRhY2hUbzogbnVsbCxcclxuICAgICAgICAgICAgbWVzc2FnZUNvbnRhaW5lckNsYXNzOiBcIm1lc3NhZ2UtY29udGFpbmVyXCIsXHJcbiAgICAgICAgICAgIGNsb3NlTWVzc2FnZUNsYXNzOiBcImNsb3NlLW1lc3NhZ2VcIixcclxuICAgICAgICAgICAgaW5mb01lc3NhZ2VDbGFzczogXCJpbmZvLW1lc3NhZ2VcIixcclxuICAgICAgICAgICAgd2FybmluZ01lc3NhZ2VDbGFzczogXCJ3YXJuaW5nLW1lc3NhZ2VcIixcclxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlQ2xhc3M6IFwiZXJyb3ItbWVzc2FnZVwiLFxyXG4gICAgICAgICAgICBzdWNjZXNzTWVzc2FnZUNsYXNzOiBcInN1Y2Nlc3MtbWVzc2FnZVwiLFxyXG4gICAgICAgICAgICBtZXNzYWdlQXR0YWNobWVudDogZmFjdG9yeS5tZXNzYWdlQXR0YWNobWVudC5GaXhlZCxcclxuICAgICAgICAgICAgb25SZW1vdmVkOiBmdW5jdGlvbiAoKSB7IH0sXHJcbiAgICAgICAgICAgIG9uQWRkZWQ6IGZ1bmN0aW9uICgpIHsgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgICQuZXh0ZW5kKHRoaXMuc2V0dGluZ3MsIGFyZ3MpO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuc2V0dGluZ3MuYXR0YWNoVG8pIHtcclxuICAgICAgICAgICAgdGhyb3cgKFwiTWVzc2FnZUZhY3RvcnkgcmVxdWlyZXMgYW4gYXR0YWNoVG8gYXJndW1lbnQuXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW1vdmUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubWVzc2FnZSkge1xyXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5vblJlbW92ZWQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2hvdyhtZXNzYWdlQXJncykge1xyXG4gICAgICAgIGxldCBtZXNzYWdlVHlwZUNsYXNzLCBtZXNzYWdlU2V0dGluZ3MsIG1lc3NhZ2VBdHRhY2htZW50Q2xhc3M7XHJcblxyXG4gICAgICAgIC8vTk9URTogVGhlcmUgc2hvdWxkIG9ubHkgYmUgb25lIG1lc3NhZ2UgZGlzcGxheWVkIHBlciBpbnN0YW5jZS5cclxuICAgICAgICBpZiAodGhpcy5tZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZS5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vTk9URTogQWxsb3cgdGhlbSB0byBlaXRoZXIgdXNlIGFuIGFycmF5IG9mIG1lc3NhZ2VzIG9yIGFcclxuICAgICAgICAvLyAgICAgIHNpbmdsZSBtZXNzYWdlLlxyXG4gICAgICAgIGlmIChjb3JlLmlzU3RyaW5nKG1lc3NhZ2VBcmdzLm1lc3NhZ2UpKSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2VBcmdzLm1lc3NhZ2UgPSBbbWVzc2FnZUFyZ3MubWVzc2FnZV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtZXNzYWdlU2V0dGluZ3MgPSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2VUeXBlOiBmYWN0b3J5Lm1lc3NhZ2VUeXBlLkluZm8sXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFtdXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgJC5leHRlbmQobWVzc2FnZVNldHRpbmdzLCBtZXNzYWdlQXJncyk7XHJcblxyXG4gICAgICAgIGlmIChtZXNzYWdlU2V0dGluZ3MubWVzc2FnZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJObyBtZXNzYWdlIHRvIGRpc3BsYXkuXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzd2l0Y2ggKG1lc3NhZ2VTZXR0aW5ncy5tZXNzYWdlVHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIGZhY3RvcnkubWVzc2FnZVR5cGUuSW5mbzpcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VUeXBlQ2xhc3MgPSB0aGlzLnNldHRpbmdzLmluZm9NZXNzYWdlQ2xhc3M7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBmYWN0b3J5Lm1lc3NhZ2VUeXBlLlN1Y2Nlc3M6XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlVHlwZUNsYXNzID0gdGhpcy5zZXR0aW5ncy5zdWNjZXNzTWVzc2FnZUNsYXNzO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgZmFjdG9yeS5tZXNzYWdlVHlwZS5FcnJvcjpcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VUeXBlQ2xhc3MgPSB0aGlzLnNldHRpbmdzLmVycm9yTWVzc2FnZUNsYXNzO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgZmFjdG9yeS5tZXNzYWdlVHlwZS5XYXJuaW5nOlxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZVR5cGVDbGFzcyA9IHRoaXMuc2V0dGluZ3Mud2FybmluZ01lc3NhZ2VDbGFzcztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJJbnZhbGlkIG1lc3NhZ2UgdHlwZS5cIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzd2l0Y2ggKHRoaXMuc2V0dGluZ3MubWVzc2FnZUF0dGFjaG1lbnQpIHtcclxuICAgICAgICAgICAgY2FzZSBmYWN0b3J5Lm1lc3NhZ2VBdHRhY2htZW50LkZpeGVkOlxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZUF0dGFjaG1lbnRDbGFzcyA9IFwiZml4ZWRcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGZhY3RvcnkubWVzc2FnZUF0dGFjaG1lbnQuRmxvdzpcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VBdHRhY2htZW50Q2xhc3MgPSBcImZsb3dcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZUF0dGFjaG1lbnRDbGFzcyA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubWVzc2FnZSA9IGJvb3RzdHJhcFRlbXBsYXRlcy5tZXNzYWdlKHtcclxuICAgICAgICAgICAgbWVzc2FnZVR5cGVDbGFzczogbWVzc2FnZVR5cGVDbGFzcyxcclxuICAgICAgICAgICAgbWVzc2FnZXM6IG1lc3NhZ2VTZXR0aW5ncy5tZXNzYWdlLFxyXG4gICAgICAgICAgICBtZXNzYWdlQ29udGFpbmVyQ2xhc3M6IHRoaXMuc2V0dGluZ3MubWVzc2FnZUNvbnRhaW5lckNsYXNzLFxyXG4gICAgICAgICAgICBjbG9zZU1lc3NhZ2VDbGFzczogdGhpcy5zZXR0aW5ncy5jbG9zZU1lc3NhZ2VDbGFzcyxcclxuICAgICAgICAgICAgbWVzc2FnZUF0dGFjaG1lbnRDbGFzczogbWVzc2FnZUF0dGFjaG1lbnRDbGFzcyxcclxuICAgICAgICAgICAgbW9yZVRoYW5PbmU6ICghY29yZS5pc1N0cmluZyhtZXNzYWdlQXJncy5tZXNzYWdlKSAmJiBtZXNzYWdlQXJncy5tZXNzYWdlLmxlbmd0aCA+IDEpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0dGluZ3MuYXR0YWNoVG8uYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlKTtcclxuICAgICAgICB0aGlzLnNldHRpbmdzLm9uQWRkZWQodGhpcy5tZXNzYWdlKTtcclxuXHJcbiAgICAgICAgbGV0IGRpc3BsYXllZE1lc3NhZ2UgPSB0aGlzO1xyXG5cclxuICAgICAgICBsZXQgY2xvc2VCdXR0b25zID0gQXJyYXkuZnJvbShjb3JlLmZpbmQoYC4ke3RoaXMuc2V0dGluZ3MuY2xvc2VNZXNzYWdlQ2xhc3N9YCwgdGhpcy5tZXNzYWdlKSk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGJ1dHRvbiBvZiBjbG9zZUJ1dHRvbnMpIHtcclxuICAgICAgICAgICAgY29yZS5hZGRFdmVudExpc3RlbmVyKGJ1dHRvbiwgXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5ZWRNZXNzYWdlLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLm1lc3NhZ2U7XHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgZmFjdG9yeSA9IHtcclxuICAgIGNyZWF0ZTogZnVuY3Rpb24gKGFyZ3MpIHtcclxuICAgICAgICByZXR1cm4gbmV3IE1lc3NhZ2VEaXNwbGF5ZXIoYXJncyk7XHJcbiAgICB9LFxyXG4gICAgbWVzc2FnZVR5cGU6IHtcclxuICAgICAgICBJbmZvOiBcIkluZm9cIixcclxuICAgICAgICBTdWNjZXNzOiBcInN1Y2Nlc3NcIixcclxuICAgICAgICBFcnJvcjogXCJlcnJvclwiLFxyXG4gICAgICAgIFdhcm5pbmc6IFwid2FybmluZ1wiXHJcbiAgICB9LFxyXG4gICAgbWVzc2FnZUF0dGFjaG1lbnQ6IHtcclxuICAgICAgICBGaXhlZDogXCJGaXhlZFwiLFxyXG4gICAgICAgIEZsb3c6IFwiRmxvd1wiXHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmYWN0b3J5O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L2dpdC9Fc3BhbGllckpTL3NyYy9qcy9lc3BhbGllci5tZXNzYWdlRmFjdG9yeS5qc1xuICoqLyIsInZhciB0ZW1wbGF0ZXMgPSB7XHJcblx0bWVzc2FnZTogZnVuY3Rpb24oZGF0YSkge1xyXG5cdFx0dmFyIHJvb3QgPSAkKFwiPGRpdiAvPlwiKTtcclxuXHRcdHJvb3QuYWRkQ2xhc3MoZGF0YS5tZXNzYWdlQ29udGFpbmVyQ2xhc3MpO1xyXG5cdFx0cm9vdC5hZGRDbGFzcyhkYXRhLm1lc3NhZ2VUeXBlQ2xhc3MpO1xyXG5cdFx0cm9vdC5hZGRDbGFzcyhkYXRhLm1lc3NhZ2VBdHRhY2htZW50Q2xhc3MpO1xyXG5cclxuXHRcdHZhciBjbG9zZUJ1dHRvbiA9ICQoXCI8YSAvPlwiKTtcclxuXHRcdGNsb3NlQnV0dG9uLmF0dHIoXCJocmVmXCIsIFwiamF2YXNjcmlwdDogdm9pZCgwKTtcIik7XHJcblx0XHRjbG9zZUJ1dHRvbi5hZGRDbGFzcyhkYXRhLmNsb3NlTWVzc2FnZUNsYXNzKTtcclxuXHJcblx0XHRyb290LmFwcGVuZChjbG9zZUJ1dHRvbik7XHJcblxyXG5cdFx0aWYgKGRhdGEubW9yZVRoYW5PbmUpIHtcclxuXHRcdFx0dmFyIGxpc3QgPSAkKFwiPHVsIC8+XCIpO1xyXG5cclxuXHRcdFx0JC5lYWNoKGRhdGEubWVzc2FnZXMsIGZ1bmN0aW9uKGluZGV4LCBtZXNzYWdlKSB7XHJcblx0XHRcdFx0bGlzdC5hcHBlbmQoXCI8bGk+XCIgKyBtZXNzYWdlICsgXCI8L2xpPlwiKTtcclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHRyb290LmFwcGVuZChsaXN0KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJvb3QuYXBwZW5kKFwiPHA+XCIgKyBkYXRhLm1lc3NhZ2VzICsgXCI8L3A+XCIpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiByb290WzBdO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGVtcGxhdGVzO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L2dpdC9Fc3BhbGllckpTL3NyYy9qcy90ZW1wbGF0ZXMvYm9vdHN0cmFwVGVtcGxhdGVzLmpzXG4gKiovIiwiaW1wb3J0IGNvbW1vbiBmcm9tIFwiLi9lc3BhbGllci5jb21tb25cIjtcclxuXHJcbnZhciBwbGVhc2VXYWl0SWQgPSBcImVzcGFsaWVyLXdhaXQtc2NyZWVuXCI7XHJcbnZhciBwbGVhc2VXYWl0ID0gJChcIjxkaXYgLz5cIik7XHJcbnBsZWFzZVdhaXQuYXR0cihcImlkXCIsIHBsZWFzZVdhaXRJZCk7XHJcblxyXG52YXIgaG91cmdsYXNzID0gJ2RhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LCcgK1xyXG4gICAgXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgY2xhc3M9XFxcInVpbC1nZWFyc1xcXCIgdmlld0JveD1cXFwiMCAwIDEwMCAxMDBcXFwiIHByZXNlcnZlQXNwZWN0UmF0aW89XFxcInhNaWRZTWlkIG1lZXRcXFwiIHdpZHRoPVxcXCIxMjBweFxcXCIgaGVpZ2h0PVxcXCIxMjBweFxcXCI+XCIgK1xyXG4gICAgXCIgIDxyZWN0IGNsYXNzPVxcXCJia1xcXCIgZmlsbD1cXFwibm9uZVxcXCIgeD1cXFwiMFxcXCIgeT1cXFwiMFxcXCIgd2lkdGg9XFxcIjEwMFxcXCIgaGVpZ2h0PVxcXCIxMDBcXFwiIC8+XCIgK1xyXG4gICAgXCIgIDxnIHRyYW5zZm9ybT1cXFwidHJhbnNsYXRlKC0yMCAtMjApXFxcIj5cIiArXHJcbiAgICBcIiAgICA8cGF0aCBmaWxsPVxcXCIjZmFmYWZhXFxcIiBkPVxcXCJNIDc5LjkgNTIuNiBDIDgwIDUxLjggODAgNTAuOSA4MCA1MCBzIDAgLTEuOCAtMC4xIC0yLjYgbCAtNS4xIC0wLjQgYyAtMC4zIC0yLjQgLTAuOSAtNC42IC0xLjggLTYuNyBsIDQuMiAtMi45IGMgLTAuNyAtMS42IC0xLjYgLTMuMSAtMi42IC00LjUgTCA3MCAzNSBjIC0xLjQgLTEuOSAtMy4xIC0zLjUgLTQuOSAtNC45IGwgMi4yIC00LjYgYyAtMS40IC0xIC0yLjkgLTEuOSAtNC41IC0yLjYgTCA1OS44IDI3IGMgLTIuMSAtMC45IC00LjQgLTEuNSAtNi43IC0xLjggbCAtMC40IC01LjEgQyA1MS44IDIwIDUwLjkgMjAgNTAgMjAgcyAtMS44IDAgLTIuNiAwLjEgbCAtMC40IDUuMSBjIC0yLjQgMC4zIC00LjYgMC45IC02LjcgMS44IGwgLTIuOSAtNC4xIGMgLTEuNiAwLjcgLTMuMSAxLjYgLTQuNSAyLjYgbCAyLjEgNC42IGMgLTEuOSAxLjQgLTMuNSAzLjEgLTUgNC45IGwgLTQuNSAtMi4xIGMgLTEgMS40IC0xLjkgMi45IC0yLjYgNC41IGwgNC4xIDIuOSBjIC0wLjkgMi4xIC0xLjUgNC40IC0xLjggNi44IGwgLTUgMC40IEMgMjAgNDguMiAyMCA0OS4xIDIwIDUwIHMgMCAxLjggMC4xIDIuNiBsIDUgMC40IGMgMC4zIDIuNCAwLjkgNC43IDEuOCA2LjggbCAtNC4xIDIuOSBjIDAuNyAxLjYgMS42IDMuMSAyLjYgNC41IGwgNC41IC0yLjEgYyAxLjQgMS45IDMuMSAzLjUgNSA0LjkgbCAtMi4xIDQuNiBjIDEuNCAxIDIuOSAxLjkgNC41IDIuNiBsIDIuOSAtNC4xIGMgMi4xIDAuOSA0LjQgMS41IDYuNyAxLjggbCAwLjQgNS4xIEMgNDguMiA4MCA0OS4xIDgwIDUwIDgwIHMgMS44IDAgMi42IC0wLjEgbCAwLjQgLTUuMSBjIDIuMyAtMC4zIDQuNiAtMC45IDYuNyAtMS44IGwgMi45IDQuMiBjIDEuNiAtMC43IDMuMSAtMS42IDQuNSAtMi42IEwgNjUgNjkuOSBjIDEuOSAtMS40IDMuNSAtMyA0LjkgLTQuOSBsIDQuNiAyLjIgYyAxIC0xLjQgMS45IC0yLjkgMi42IC00LjUgTCA3MyA1OS44IGMgMC45IC0yLjEgMS41IC00LjQgMS44IC02LjcgTCA3OS45IDUyLjYgWiBNIDUwIDY1IGMgLTguMyAwIC0xNSAtNi43IC0xNSAtMTUgYyAwIC04LjMgNi43IC0xNSAxNSAtMTUgcyAxNSA2LjcgMTUgMTUgQyA2NSA1OC4zIDU4LjMgNjUgNTAgNjUgWlxcXCI+XCIgK1xyXG4gICAgXCIgICAgICA8YW5pbWF0ZVRyYW5zZm9ybSB0eXBlPVxcXCJyb3RhdGVcXFwiIGR1cj1cXFwiMnNcXFwiIHJlcGVhdENvdW50PVxcXCJpbmRlZmluaXRlXFxcIiB0bz1cXFwiMCA1MCA1MFxcXCIgZnJvbT1cXFwiOTAgNTAgNTBcXFwiIGF0dHJpYnV0ZU5hbWU9XFxcInRyYW5zZm9ybVxcXCIgLz5cIiArXHJcbiAgICBcIiAgICA8L3BhdGg+XCIgK1xyXG4gICAgXCIgIDwvZz5cIiArXHJcbiAgICBcIiAgPGcgdHJhbnNmb3JtPVxcXCJ0cmFuc2xhdGUoMjAgMjApIHJvdGF0ZSgxNSA1MC4wMDAyIDUwKVxcXCI+XCIgK1xyXG4gICAgXCIgICAgPHBhdGggZmlsbD1cXFwiI2VmZWZlZlxcXCIgZD1cXFwiTSA3OS45IDUyLjYgQyA4MCA1MS44IDgwIDUwLjkgODAgNTAgcyAwIC0xLjggLTAuMSAtMi42IGwgLTUuMSAtMC40IGMgLTAuMyAtMi40IC0wLjkgLTQuNiAtMS44IC02LjcgbCA0LjIgLTIuOSBjIC0wLjcgLTEuNiAtMS42IC0zLjEgLTIuNiAtNC41IEwgNzAgMzUgYyAtMS40IC0xLjkgLTMuMSAtMy41IC00LjkgLTQuOSBsIDIuMiAtNC42IGMgLTEuNCAtMSAtMi45IC0xLjkgLTQuNSAtMi42IEwgNTkuOCAyNyBjIC0yLjEgLTAuOSAtNC40IC0xLjUgLTYuNyAtMS44IGwgLTAuNCAtNS4xIEMgNTEuOCAyMCA1MC45IDIwIDUwIDIwIHMgLTEuOCAwIC0yLjYgMC4xIGwgLTAuNCA1LjEgYyAtMi40IDAuMyAtNC42IDAuOSAtNi43IDEuOCBsIC0yLjkgLTQuMSBjIC0xLjYgMC43IC0zLjEgMS42IC00LjUgMi42IGwgMi4xIDQuNiBjIC0xLjkgMS40IC0zLjUgMy4xIC01IDQuOSBsIC00LjUgLTIuMSBjIC0xIDEuNCAtMS45IDIuOSAtMi42IDQuNSBsIDQuMSAyLjkgYyAtMC45IDIuMSAtMS41IDQuNCAtMS44IDYuOCBsIC01IDAuNCBDIDIwIDQ4LjIgMjAgNDkuMSAyMCA1MCBzIDAgMS44IDAuMSAyLjYgbCA1IDAuNCBjIDAuMyAyLjQgMC45IDQuNyAxLjggNi44IGwgLTQuMSAyLjkgYyAwLjcgMS42IDEuNiAzLjEgMi42IDQuNSBsIDQuNSAtMi4xIGMgMS40IDEuOSAzLjEgMy41IDUgNC45IGwgLTIuMSA0LjYgYyAxLjQgMSAyLjkgMS45IDQuNSAyLjYgbCAyLjkgLTQuMSBjIDIuMSAwLjkgNC40IDEuNSA2LjcgMS44IGwgMC40IDUuMSBDIDQ4LjIgODAgNDkuMSA4MCA1MCA4MCBzIDEuOCAwIDIuNiAtMC4xIGwgMC40IC01LjEgYyAyLjMgLTAuMyA0LjYgLTAuOSA2LjcgLTEuOCBsIDIuOSA0LjIgYyAxLjYgLTAuNyAzLjEgLTEuNiA0LjUgLTIuNiBMIDY1IDY5LjkgYyAxLjkgLTEuNCAzLjUgLTMgNC45IC00LjkgbCA0LjYgMi4yIGMgMSAtMS40IDEuOSAtMi45IDIuNiAtNC41IEwgNzMgNTkuOCBjIDAuOSAtMi4xIDEuNSAtNC40IDEuOCAtNi43IEwgNzkuOSA1Mi42IFogTSA1MCA2NSBjIC04LjMgMCAtMTUgLTYuNyAtMTUgLTE1IGMgMCAtOC4zIDYuNyAtMTUgMTUgLTE1IHMgMTUgNi43IDE1IDE1IEMgNjUgNTguMyA1OC4zIDY1IDUwIDY1IFpcXFwiPlwiICtcclxuICAgIFwiICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gdHlwZT1cXFwicm90YXRlXFxcIiBkdXI9XFxcIjJzXFxcIiByZXBlYXRDb3VudD1cXFwiaW5kZWZpbml0ZVxcXCIgdG89XFxcIjkwIDUwIDUwXFxcIiBmcm9tPVxcXCIwIDUwIDUwXFxcIiBhdHRyaWJ1dGVOYW1lPVxcXCJ0cmFuc2Zvcm1cXFwiIC8+XCIgK1xyXG4gICAgXCIgICAgPC9wYXRoPlwiICtcclxuICAgIFwiICA8L2c+XCIgK1xyXG4gICAgXCI8L3N2Zz5cIjtcclxudmFyIHdhaXRJbWFnZSA9ICQoXCI8aW1nIC8+XCIpO1xyXG53YWl0SW1hZ2UuYXR0cihcInNyY1wiLCBob3VyZ2xhc3MpO1xyXG52YXIgaW5uZXIgPSAkKFwiPGRpdiAvPlwiKTtcclxuaW5uZXIuYXBwZW5kKHdhaXRJbWFnZSk7XHJcbnBsZWFzZVdhaXQuYXBwZW5kKGlubmVyKTtcclxuXHJcbnZhciB3YWl0U2NyZWVuID0ge1xyXG4gICAgc2hvdzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICgkKFwiI1wiICsgcGxlYXNlV2FpdElkKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwbGVhc2VXYWl0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29tbW9uLmJvZHkuYXBwZW5kKHBsZWFzZVdhaXQpO1xyXG4gICAgICAgIHJldHVybiBwbGVhc2VXYWl0O1xyXG4gICAgfSxcclxuICAgIGhpZGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBwbGVhc2VXYWl0LnJlbW92ZSgpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2FpdFNjcmVlbjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9naXQvRXNwYWxpZXJKUy9zcmMvanMvZXNwYWxpZXIud2FpdHNjcmVlbi5qc1xuICoqLyIsInZhciBib2R5ID0gJChcImJvZHlcIik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBib2R5OiBib2R5LFxyXG4gICAgd2luZG93OiAkKHdpbmRvdyksXHJcbiAgICBzaG93VmVsbHVtOiBmdW5jdGlvbigpIHtcclxuICAgIFx0aWYoJChcIi5lc3BhbGllci12ZWxsdW1cIikubGVuZ3RoID4gMCkge1xyXG4gICAgXHRcdHJldHVybjtcclxuICAgIFx0fVxyXG5cclxuICAgICAgICB2YXIgdmVsbHVtID0gJChcIjxkaXYgY2xhc3M9XFxcImVzcGFsaWVyLXZlbGx1bVxcXCIgLz5cIik7XHJcbiAgICAgICAgYm9keS5hcHBlbmQodmVsbHVtKTtcclxuICAgIH0sXHJcbiAgICBoaWRlVmVsbHVtOiBmdW5jdGlvbigpIHtcclxuICAgIFx0JChcIi5lc3BhbGllci12ZWxsdW1cIikucmVtb3ZlKCk7XHJcbiAgICB9XHJcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovZ2l0L0VzcGFsaWVySlMvc3JjL2pzL2VzcGFsaWVyLmNvbW1vbi5qc1xuICoqLyIsIi8qXG5Db3B5cmlnaHQgKGMpIDIwMTAsMjAxMSwyMDEyLDIwMTMsMjAxNCBNb3JnYW4gUm9kZXJpY2sgaHR0cDovL3JvZGVyaWNrLmRrXG5MaWNlbnNlOiBNSVQgLSBodHRwOi8vbXJnbnJkcmNrLm1pdC1saWNlbnNlLm9yZ1xuXG5odHRwczovL2dpdGh1Yi5jb20vbXJvZGVyaWNrL1B1YlN1YkpTXG4qL1xuKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KXtcblx0J3VzZSBzdHJpY3QnO1xuXG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCl7XG4gICAgICAgIC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cbiAgICAgICAgZGVmaW5lKFsnZXhwb3J0cyddLCBmYWN0b3J5KTtcblxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKXtcbiAgICAgICAgLy8gQ29tbW9uSlNcbiAgICAgICAgZmFjdG9yeShleHBvcnRzKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEJyb3dzZXIgZ2xvYmFsc1xuICAgICAgICB2YXIgUHViU3ViID0ge307XG4gICAgICAgIHJvb3QuUHViU3ViID0gUHViU3ViO1xuICAgICAgICBmYWN0b3J5KFB1YlN1Yik7XG4gICAgfVxufSgoIHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmIHdpbmRvdyApIHx8IHRoaXMsIGZ1bmN0aW9uIChQdWJTdWIpe1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIG1lc3NhZ2VzID0ge30sXG5cdFx0bGFzdFVpZCA9IC0xO1xuXG5cdGZ1bmN0aW9uIGhhc0tleXMob2JqKXtcblx0XHR2YXIga2V5O1xuXG5cdFx0Zm9yIChrZXkgaW4gb2JqKXtcblx0XHRcdGlmICggb2JqLmhhc093blByb3BlcnR5KGtleSkgKXtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8qKlxuXHQgKlx0UmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgdGhyb3dzIHRoZSBwYXNzZWQgZXhjZXB0aW9uLCBmb3IgdXNlIGFzIGFyZ3VtZW50IGZvciBzZXRUaW1lb3V0XG5cdCAqXHRAcGFyYW0geyBPYmplY3QgfSBleCBBbiBFcnJvciBvYmplY3Rcblx0ICovXG5cdGZ1bmN0aW9uIHRocm93RXhjZXB0aW9uKCBleCApe1xuXHRcdHJldHVybiBmdW5jdGlvbiByZVRocm93RXhjZXB0aW9uKCl7XG5cdFx0XHR0aHJvdyBleDtcblx0XHR9O1xuXHR9XG5cblx0ZnVuY3Rpb24gY2FsbFN1YnNjcmliZXJXaXRoRGVsYXllZEV4Y2VwdGlvbnMoIHN1YnNjcmliZXIsIG1lc3NhZ2UsIGRhdGEgKXtcblx0XHR0cnkge1xuXHRcdFx0c3Vic2NyaWJlciggbWVzc2FnZSwgZGF0YSApO1xuXHRcdH0gY2F0Y2goIGV4ICl7XG5cdFx0XHRzZXRUaW1lb3V0KCB0aHJvd0V4Y2VwdGlvbiggZXggKSwgMCk7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gY2FsbFN1YnNjcmliZXJXaXRoSW1tZWRpYXRlRXhjZXB0aW9ucyggc3Vic2NyaWJlciwgbWVzc2FnZSwgZGF0YSApe1xuXHRcdHN1YnNjcmliZXIoIG1lc3NhZ2UsIGRhdGEgKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGRlbGl2ZXJNZXNzYWdlKCBvcmlnaW5hbE1lc3NhZ2UsIG1hdGNoZWRNZXNzYWdlLCBkYXRhLCBpbW1lZGlhdGVFeGNlcHRpb25zICl7XG5cdFx0dmFyIHN1YnNjcmliZXJzID0gbWVzc2FnZXNbbWF0Y2hlZE1lc3NhZ2VdLFxuXHRcdFx0Y2FsbFN1YnNjcmliZXIgPSBpbW1lZGlhdGVFeGNlcHRpb25zID8gY2FsbFN1YnNjcmliZXJXaXRoSW1tZWRpYXRlRXhjZXB0aW9ucyA6IGNhbGxTdWJzY3JpYmVyV2l0aERlbGF5ZWRFeGNlcHRpb25zLFxuXHRcdFx0cztcblxuXHRcdGlmICggIW1lc3NhZ2VzLmhhc093blByb3BlcnR5KCBtYXRjaGVkTWVzc2FnZSApICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGZvciAocyBpbiBzdWJzY3JpYmVycyl7XG5cdFx0XHRpZiAoIHN1YnNjcmliZXJzLmhhc093blByb3BlcnR5KHMpKXtcblx0XHRcdFx0Y2FsbFN1YnNjcmliZXIoIHN1YnNjcmliZXJzW3NdLCBvcmlnaW5hbE1lc3NhZ2UsIGRhdGEgKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBjcmVhdGVEZWxpdmVyeUZ1bmN0aW9uKCBtZXNzYWdlLCBkYXRhLCBpbW1lZGlhdGVFeGNlcHRpb25zICl7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uIGRlbGl2ZXJOYW1lc3BhY2VkKCl7XG5cdFx0XHR2YXIgdG9waWMgPSBTdHJpbmcoIG1lc3NhZ2UgKSxcblx0XHRcdFx0cG9zaXRpb24gPSB0b3BpYy5sYXN0SW5kZXhPZiggJy4nICk7XG5cblx0XHRcdC8vIGRlbGl2ZXIgdGhlIG1lc3NhZ2UgYXMgaXQgaXMgbm93XG5cdFx0XHRkZWxpdmVyTWVzc2FnZShtZXNzYWdlLCBtZXNzYWdlLCBkYXRhLCBpbW1lZGlhdGVFeGNlcHRpb25zKTtcblxuXHRcdFx0Ly8gdHJpbSB0aGUgaGllcmFyY2h5IGFuZCBkZWxpdmVyIG1lc3NhZ2UgdG8gZWFjaCBsZXZlbFxuXHRcdFx0d2hpbGUoIHBvc2l0aW9uICE9PSAtMSApe1xuXHRcdFx0XHR0b3BpYyA9IHRvcGljLnN1YnN0ciggMCwgcG9zaXRpb24gKTtcblx0XHRcdFx0cG9zaXRpb24gPSB0b3BpYy5sYXN0SW5kZXhPZignLicpO1xuXHRcdFx0XHRkZWxpdmVyTWVzc2FnZSggbWVzc2FnZSwgdG9waWMsIGRhdGEsIGltbWVkaWF0ZUV4Y2VwdGlvbnMgKTtcblx0XHRcdH1cblx0XHR9O1xuXHR9XG5cblx0ZnVuY3Rpb24gbWVzc2FnZUhhc1N1YnNjcmliZXJzKCBtZXNzYWdlICl7XG5cdFx0dmFyIHRvcGljID0gU3RyaW5nKCBtZXNzYWdlICksXG5cdFx0XHRmb3VuZCA9IEJvb2xlYW4obWVzc2FnZXMuaGFzT3duUHJvcGVydHkoIHRvcGljICkgJiYgaGFzS2V5cyhtZXNzYWdlc1t0b3BpY10pKSxcblx0XHRcdHBvc2l0aW9uID0gdG9waWMubGFzdEluZGV4T2YoICcuJyApO1xuXG5cdFx0d2hpbGUgKCAhZm91bmQgJiYgcG9zaXRpb24gIT09IC0xICl7XG5cdFx0XHR0b3BpYyA9IHRvcGljLnN1YnN0ciggMCwgcG9zaXRpb24gKTtcblx0XHRcdHBvc2l0aW9uID0gdG9waWMubGFzdEluZGV4T2YoICcuJyApO1xuXHRcdFx0Zm91bmQgPSBCb29sZWFuKG1lc3NhZ2VzLmhhc093blByb3BlcnR5KCB0b3BpYyApICYmIGhhc0tleXMobWVzc2FnZXNbdG9waWNdKSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZvdW5kO1xuXHR9XG5cblx0ZnVuY3Rpb24gcHVibGlzaCggbWVzc2FnZSwgZGF0YSwgc3luYywgaW1tZWRpYXRlRXhjZXB0aW9ucyApe1xuXHRcdHZhciBkZWxpdmVyID0gY3JlYXRlRGVsaXZlcnlGdW5jdGlvbiggbWVzc2FnZSwgZGF0YSwgaW1tZWRpYXRlRXhjZXB0aW9ucyApLFxuXHRcdFx0aGFzU3Vic2NyaWJlcnMgPSBtZXNzYWdlSGFzU3Vic2NyaWJlcnMoIG1lc3NhZ2UgKTtcblxuXHRcdGlmICggIWhhc1N1YnNjcmliZXJzICl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYgKCBzeW5jID09PSB0cnVlICl7XG5cdFx0XHRkZWxpdmVyKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHNldFRpbWVvdXQoIGRlbGl2ZXIsIDAgKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHQvKipcblx0ICpcdFB1YlN1Yi5wdWJsaXNoKCBtZXNzYWdlWywgZGF0YV0gKSAtPiBCb29sZWFuXG5cdCAqXHQtIG1lc3NhZ2UgKFN0cmluZyk6IFRoZSBtZXNzYWdlIHRvIHB1Ymxpc2hcblx0ICpcdC0gZGF0YTogVGhlIGRhdGEgdG8gcGFzcyB0byBzdWJzY3JpYmVyc1xuXHQgKlx0UHVibGlzaGVzIHRoZSB0aGUgbWVzc2FnZSwgcGFzc2luZyB0aGUgZGF0YSB0byBpdCdzIHN1YnNjcmliZXJzXG5cdCoqL1xuXHRQdWJTdWIucHVibGlzaCA9IGZ1bmN0aW9uKCBtZXNzYWdlLCBkYXRhICl7XG5cdFx0cmV0dXJuIHB1Ymxpc2goIG1lc3NhZ2UsIGRhdGEsIGZhbHNlLCBQdWJTdWIuaW1tZWRpYXRlRXhjZXB0aW9ucyApO1xuXHR9O1xuXG5cdC8qKlxuXHQgKlx0UHViU3ViLnB1Ymxpc2hTeW5jKCBtZXNzYWdlWywgZGF0YV0gKSAtPiBCb29sZWFuXG5cdCAqXHQtIG1lc3NhZ2UgKFN0cmluZyk6IFRoZSBtZXNzYWdlIHRvIHB1Ymxpc2hcblx0ICpcdC0gZGF0YTogVGhlIGRhdGEgdG8gcGFzcyB0byBzdWJzY3JpYmVyc1xuXHQgKlx0UHVibGlzaGVzIHRoZSB0aGUgbWVzc2FnZSBzeW5jaHJvbm91c2x5LCBwYXNzaW5nIHRoZSBkYXRhIHRvIGl0J3Mgc3Vic2NyaWJlcnNcblx0KiovXG5cdFB1YlN1Yi5wdWJsaXNoU3luYyA9IGZ1bmN0aW9uKCBtZXNzYWdlLCBkYXRhICl7XG5cdFx0cmV0dXJuIHB1Ymxpc2goIG1lc3NhZ2UsIGRhdGEsIHRydWUsIFB1YlN1Yi5pbW1lZGlhdGVFeGNlcHRpb25zICk7XG5cdH07XG5cblx0LyoqXG5cdCAqXHRQdWJTdWIuc3Vic2NyaWJlKCBtZXNzYWdlLCBmdW5jICkgLT4gU3RyaW5nXG5cdCAqXHQtIG1lc3NhZ2UgKFN0cmluZyk6IFRoZSBtZXNzYWdlIHRvIHN1YnNjcmliZSB0b1xuXHQgKlx0LSBmdW5jIChGdW5jdGlvbik6IFRoZSBmdW5jdGlvbiB0byBjYWxsIHdoZW4gYSBuZXcgbWVzc2FnZSBpcyBwdWJsaXNoZWRcblx0ICpcdFN1YnNjcmliZXMgdGhlIHBhc3NlZCBmdW5jdGlvbiB0byB0aGUgcGFzc2VkIG1lc3NhZ2UuIEV2ZXJ5IHJldHVybmVkIHRva2VuIGlzIHVuaXF1ZSBhbmQgc2hvdWxkIGJlIHN0b3JlZCBpZlxuXHQgKlx0eW91IG5lZWQgdG8gdW5zdWJzY3JpYmVcblx0KiovXG5cdFB1YlN1Yi5zdWJzY3JpYmUgPSBmdW5jdGlvbiggbWVzc2FnZSwgZnVuYyApe1xuXHRcdGlmICggdHlwZW9mIGZ1bmMgIT09ICdmdW5jdGlvbicpe1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIG1lc3NhZ2UgaXMgbm90IHJlZ2lzdGVyZWQgeWV0XG5cdFx0aWYgKCAhbWVzc2FnZXMuaGFzT3duUHJvcGVydHkoIG1lc3NhZ2UgKSApe1xuXHRcdFx0bWVzc2FnZXNbbWVzc2FnZV0gPSB7fTtcblx0XHR9XG5cblx0XHQvLyBmb3JjaW5nIHRva2VuIGFzIFN0cmluZywgdG8gYWxsb3cgZm9yIGZ1dHVyZSBleHBhbnNpb25zIHdpdGhvdXQgYnJlYWtpbmcgdXNhZ2Vcblx0XHQvLyBhbmQgYWxsb3cgZm9yIGVhc3kgdXNlIGFzIGtleSBuYW1lcyBmb3IgdGhlICdtZXNzYWdlcycgb2JqZWN0XG5cdFx0dmFyIHRva2VuID0gJ3VpZF8nICsgU3RyaW5nKCsrbGFzdFVpZCk7XG5cdFx0bWVzc2FnZXNbbWVzc2FnZV1bdG9rZW5dID0gZnVuYztcblxuXHRcdC8vIHJldHVybiB0b2tlbiBmb3IgdW5zdWJzY3JpYmluZ1xuXHRcdHJldHVybiB0b2tlbjtcblx0fTtcblxuXHQvKiBQdWJsaWM6IENsZWFycyBhbGwgc3Vic2NyaXB0aW9uc1xuXHQgKi9cblx0UHViU3ViLmNsZWFyQWxsU3Vic2NyaXB0aW9ucyA9IGZ1bmN0aW9uIGNsZWFyQWxsU3Vic2NyaXB0aW9ucygpe1xuXHRcdG1lc3NhZ2VzID0ge307XG5cdH07XG5cblx0LypQdWJsaWM6IENsZWFyIHN1YnNjcmlwdGlvbnMgYnkgdGhlIHRvcGljXG5cdCovXG5cdFB1YlN1Yi5jbGVhclN1YnNjcmlwdGlvbnMgPSBmdW5jdGlvbiBjbGVhclN1YnNjcmlwdGlvbnModG9waWMpe1xuXHRcdHZhciBtOyBcblx0XHRmb3IgKG0gaW4gbWVzc2FnZXMpe1xuXHRcdFx0aWYgKG1lc3NhZ2VzLmhhc093blByb3BlcnR5KG0pICYmIG0uaW5kZXhPZih0b3BpYykgPT09IDApe1xuXHRcdFx0XHRkZWxldGUgbWVzc2FnZXNbbV07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdC8qIFB1YmxpYzogcmVtb3ZlcyBzdWJzY3JpcHRpb25zLlxuXHQgKiBXaGVuIHBhc3NlZCBhIHRva2VuLCByZW1vdmVzIGEgc3BlY2lmaWMgc3Vic2NyaXB0aW9uLlxuXHQgKiBXaGVuIHBhc3NlZCBhIGZ1bmN0aW9uLCByZW1vdmVzIGFsbCBzdWJzY3JpcHRpb25zIGZvciB0aGF0IGZ1bmN0aW9uXG5cdCAqIFdoZW4gcGFzc2VkIGEgdG9waWMsIHJlbW92ZXMgYWxsIHN1YnNjcmlwdGlvbnMgZm9yIHRoYXQgdG9waWMgKGhpZXJhcmNoeSlcblx0ICpcblx0ICogdmFsdWUgLSBBIHRva2VuLCBmdW5jdGlvbiBvciB0b3BpYyB0byB1bnN1YnNjcmliZS5cblx0ICpcblx0ICogRXhhbXBsZXNcblx0ICpcblx0ICpcdFx0Ly8gRXhhbXBsZSAxIC0gdW5zdWJzY3JpYmluZyB3aXRoIGEgdG9rZW5cblx0ICpcdFx0dmFyIHRva2VuID0gUHViU3ViLnN1YnNjcmliZSgnbXl0b3BpYycsIG15RnVuYyk7XG5cdCAqXHRcdFB1YlN1Yi51bnN1YnNjcmliZSh0b2tlbik7XG5cdCAqXG5cdCAqXHRcdC8vIEV4YW1wbGUgMiAtIHVuc3Vic2NyaWJpbmcgd2l0aCBhIGZ1bmN0aW9uXG5cdCAqXHRcdFB1YlN1Yi51bnN1YnNjcmliZShteUZ1bmMpO1xuXHQgKlxuXHQgKlx0XHQvLyBFeGFtcGxlIDMgLSB1bnN1YnNjcmliaW5nIGEgdG9waWNcblx0ICpcdFx0UHViU3ViLnVuc3Vic2NyaWJlKCdteXRvcGljJyk7XG5cdCAqL1xuXHRQdWJTdWIudW5zdWJzY3JpYmUgPSBmdW5jdGlvbih2YWx1ZSl7XG5cdFx0dmFyIGlzVG9waWMgICAgPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIG1lc3NhZ2VzLmhhc093blByb3BlcnR5KHZhbHVlKSxcblx0XHRcdGlzVG9rZW4gICAgPSAhaXNUb3BpYyAmJiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnLFxuXHRcdFx0aXNGdW5jdGlvbiA9IHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyxcblx0XHRcdHJlc3VsdCA9IGZhbHNlLFxuXHRcdFx0bSwgbWVzc2FnZSwgdDtcblxuXHRcdGlmIChpc1RvcGljKXtcblx0XHRcdGRlbGV0ZSBtZXNzYWdlc1t2YWx1ZV07XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Zm9yICggbSBpbiBtZXNzYWdlcyApe1xuXHRcdFx0aWYgKCBtZXNzYWdlcy5oYXNPd25Qcm9wZXJ0eSggbSApICl7XG5cdFx0XHRcdG1lc3NhZ2UgPSBtZXNzYWdlc1ttXTtcblxuXHRcdFx0XHRpZiAoIGlzVG9rZW4gJiYgbWVzc2FnZVt2YWx1ZV0gKXtcblx0XHRcdFx0XHRkZWxldGUgbWVzc2FnZVt2YWx1ZV07XG5cdFx0XHRcdFx0cmVzdWx0ID0gdmFsdWU7XG5cdFx0XHRcdFx0Ly8gdG9rZW5zIGFyZSB1bmlxdWUsIHNvIHdlIGNhbiBqdXN0IHN0b3AgaGVyZVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGlzRnVuY3Rpb24pIHtcblx0XHRcdFx0XHRmb3IgKCB0IGluIG1lc3NhZ2UgKXtcblx0XHRcdFx0XHRcdGlmIChtZXNzYWdlLmhhc093blByb3BlcnR5KHQpICYmIG1lc3NhZ2VbdF0gPT09IHZhbHVlKXtcblx0XHRcdFx0XHRcdFx0ZGVsZXRlIG1lc3NhZ2VbdF07XG5cdFx0XHRcdFx0XHRcdHJlc3VsdCA9IHRydWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fTtcbn0pKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L2dpdC9Fc3BhbGllckpTL34vcHVic3ViLWpzL3NyYy9wdWJzdWIuanNcbiAqKi8iLCJpbXBvcnQgY29yZSBmcm9tIFwiLi9lc3BhbGllci5jb3JlXCI7XHJcblxyXG5jbGFzcyBWYWxpZGF0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRyb2wpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1ZhbGlkID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk11c3QgaGF2ZSBhbiBpc1ZhbGlkIG1ldGhvZC5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5tZXNzYWdlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk11c3QgYWRkIGEgbWVzc2FnZSBwcmlvciB0byBjYWxsaW5nIHN1cGVyLlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY29udHJvbCA9IGNvbnRyb2w7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIFJlcXVpcmVkIGV4dGVuZHMgVmFsaWRhdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250cm9sKSB7XHJcbiAgICAgICAgc3VwZXIoY29udHJvbCk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNWYWxpZCgpIHtcclxuICAgICAgICByZXR1cm4gIWNvcmUuaXNFbXB0eU9yU3BhY2VzKHRoaXMuY29udHJvbC52YWwoKSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldCBtZXNzYWdlKCkge1xyXG4gICAgICAgIHJldHVybiBcIkZpZWxkIGlzIHJlcXVpcmVkLlwiO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBFbWFpbCBleHRlbmRzIFZhbGlkYXRpb24ge1xyXG4gICAgY29uc3RydWN0b3IoY29udHJvbCkge1xyXG4gICAgICAgIHN1cGVyKGNvbnRyb2wpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzVmFsaWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIGNvcmUuaXNFbWFpbCh0aGlzLmNvbnRyb2wudmFsKCkpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXQgbWVzc2FnZSgpIHtcclxuICAgICAgICByZXR1cm4gXCJJbnZhbGlkIGVtYWlsIGFkZHJlc3MuXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIERhdGUgZXh0ZW5kcyBWYWxpZGF0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRyb2wpIHtcclxuICAgICAgICBzdXBlcihjb250cm9sKTtcclxuICAgIH1cclxuXHJcbiAgICBpc1ZhbGlkKCkge1xyXG4gICAgICAgIHJldHVybiBjb3JlLmlzRGF0ZSh0aGlzLmNvbnRyb2wudmFsKCkpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXQgbWVzc2FnZSgpIHtcclxuICAgICAgICByZXR1cm4gXCJJbnZhbGlkIGRhdGUuXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIFJlcXVpcmVkRGVwZW5kZW50IGV4dGVuZHMgVmFsaWRhdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250cm9sLCB3aGVuVmFsLCBkZXBlbmRlbnQpIHtcclxuICAgICAgICBzdXBlcihjb250cm9sKTtcclxuICAgICAgICB0aGlzLndoZW5WYWwgPSB3aGVuVmFsO1xyXG4gICAgICAgIHRoaXMuZGVwZW5kZW50ID0gZGVwZW5kZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGlzVmFsaWQoKSB7XHJcbiAgICAgICAgaWYodGhpcy5jb250cm9sLnZhbCgpID09PSB0aGlzLndoZW5WYWwgJiYgY29yZS5pc0VtcHR5T3JTcGFjZXModGhpcy5kZXBlbmRlbnQudmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldCBtZXNzYWdlKCkge1xyXG4gICAgICAgIHJldHVybiBcIkZpZWxkIGlzIHJlcXVpcmVkLlwiO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBSZXF1aXJlZCwgRW1haWwsIERhdGUsIFJlcXVpcmVkRGVwZW5kZW50IH07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovZ2l0L0VzcGFsaWVySlMvc3JjL2pzL2VzcGFsaWVyLnZhbGlkYXRpb24uanNcbiAqKi8iLCJpbXBvcnQgY29yZSBmcm9tIFwiLi9lc3BhbGllci5jb3JlXCI7XHJcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tIFwiLi9lc3BhbGllci5mb3Jtcy5jb250cm9sXCI7XHJcblxyXG5jbGFzcyBFc3BhbGllckZvcm0ge1xyXG4gICAgY29uc3RydWN0b3IoZm9ybVRvV2lyZSkge1xyXG4gICAgICAgIGlmIChjb3JlLmlzU3RyaW5nKGZvcm1Ub1dpcmUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZm9ybSA9IGNvcmUuZmluZChmb3JtVG9XaXJlKVswXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmZvcm0gPSBmb3JtVG9XaXJlWzBdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5mb3JtLnNldEF0dHJpYnV0ZShcIm5vdmFsaWRhdGVcIiwgXCJcIik7XHJcbiAgICAgICAgdGhpcy5jb250cm9scyA9IG5ldyBTZXQoKTtcclxuICAgICAgICBsZXQgcHJvY2Vzc2VkQ29udHJvbHMgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgbGV0IHJhd0NvbnRyb2xzID0gY29yZS5maW5kKFwiaW5wdXQsIHRleHRhcmVhLCBzZWxlY3RcIiwgdGhpcy5mb3JtKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgY29udHJvbCBvZiByYXdDb250cm9scykge1xyXG4gICAgICAgICAgICB2YXIgY29udHJvbFR5cGUgPSBjb250cm9sLnR5cGUgPyBjb250cm9sLnR5cGUgOiBjb250cm9sLmdldEF0dHJpYnV0ZShcInR5cGVcIik7XHJcbiAgICAgICAgICAgIHZhciBsb3dlckNhc2VJZCA9IGNvbnRyb2xUeXBlID09IFwicmFkaW9cIiA/IGNvbnRyb2wubmFtZS50b0xvd2VyQ2FzZSgpIDogY29udHJvbC5pZC50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHByb2Nlc3NlZENvbnRyb2xzLmhhcyhsb3dlckNhc2VJZCkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwcm9jZXNzZWRDb250cm9scy5hZGQobG93ZXJDYXNlSWQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGxvd2VyQ2FzZUlkIHx8IChjb250cm9sLnR5cGUgPyBjb250cm9sLnR5cGUgOiBjb250cm9sLmdldEF0dHJpYnV0ZShcInR5cGVcIikpID09IFwicmFkaW9cIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250cm9scy5hZGQoRm9ybUNvbnRyb2woY29udHJvbCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb3JlLmFkZEV2ZW50TGlzdGVuZXIodGhpcy5mb3JtLCBcInN1Ym1pdFwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuc3VibWl0KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBzdWJtaXRCdXR0b25zID0gY29yZS5maW5kKFwiW2RhdGEtYWN0aW9uPVxcXCJzdWJtaXRcXFwiXVwiLCB0aGlzLmZvcm0pO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBzdWJtaXRCdXR0b24gb2Ygc3VibWl0QnV0dG9ucykge1xyXG4gICAgICAgICAgICBjb3JlLmFkZEV2ZW50TGlzdGVuZXIoc3VibWl0QnV0dG9uLCBcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3VibWl0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnZhbGlkYXRlKCkpIHtcclxuICAgICAgICAgICAgbGV0IG1ldGhvZCA9IHRoaXMuZm9ybS5nZXRBdHRyaWJ1dGUoXCJtZXRob2RcIik7XHJcblxyXG4gICAgICAgICAgICBjb3JlLnNlbmRSZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IG1ldGhvZCA/IG1ldGhvZCA6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgICAgICB1cmw6IHRoaXMuZm9ybS5nZXRBdHRyaWJ1dGUoXCJhY3Rpb25cIiksXHJcbiAgICAgICAgICAgICAgICBkYXRhOiAkKHRoaXMuZm9ybSkuc2VyaWFsaXplKCkgLy9UT0RPOiBSZW1vdmUgalF1ZXJ5LlxyXG4gICAgICAgICAgICB9KS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgb25TdWNjZXNzID0gdGhpcy5mb3JtLmdldEF0dHJpYnV0ZShcImRhdGEtc3VjY2Vzc1wiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAob25TdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29yZS5wdWJsaXNoKG9uU3VjY2VzcywgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB2YWxpZGF0ZSgpIHtcclxuICAgICAgICB2YXIgdmFsaWQgPSB0cnVlO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBjb250cm9sIG9mIHRoaXMuY29udHJvbHMpIHtcclxuICAgICAgICAgICAgY29udHJvbC5tZXNzYWdlLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFjb250cm9sLnZhbGlkYXRlKCkpIHtcclxuICAgICAgICAgICAgICAgIHZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB2YWxpZDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGZvcm1Ub1dpcmUpIHtcclxuICAgIHJldHVybiBuZXcgRXNwYWxpZXJGb3JtKGZvcm1Ub1dpcmUpO1xyXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L2dpdC9Fc3BhbGllckpTL3NyYy9qcy9lc3BhbGllci5mb3Jtcy5qc1xuICoqLyIsImltcG9ydCBjb3JlIGZyb20gXCIuL2VzcGFsaWVyLmNvcmVcIjtcclxuaW1wb3J0IHsgUmVxdWlyZWQsIEVtYWlsLCBEYXRlLCBSZXF1aXJlZERlcGVuZGVudCB9IGZyb20gXCIuL2VzcGFsaWVyLnZhbGlkYXRpb25cIjtcclxuaW1wb3J0IG1lc3NhZ2VGYWN0b3J5IGZyb20gXCIuL2VzcGFsaWVyLm1lc3NhZ2VGYWN0b3J5XCI7XHJcblxyXG5jbGFzcyBGb3JtQ29udHJvbCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250cm9sLCB2YWxpZGF0aW9ucykge1xyXG4gICAgICAgIHZhciBjb250cm9sVHlwZSA9IGNvbnRyb2wudHlwZSA/IGNvbnRyb2wudHlwZSA6IGNvbnRyb2wuZ2V0QXR0cmlidXRlKFwidHlwZVwiKTtcclxuICAgICAgICB2YXIgbG93ZXJDYXNlSWQgPSBjb250cm9sVHlwZSA9PSBcInJhZGlvXCIgPyBjb250cm9sLm5hbWUudG9Mb3dlckNhc2UoKSA6IGNvbnRyb2wuaWQudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAgICAgaWYgKCFsb3dlckNhc2VJZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFbGVtZW50cyBtdXN0IGhhdmUgYW4gSWQgdG8gYmUgcHJvcGVybHkgd2lyZWQgdG8gYW4gRXNwYWxpZXIgZm9ybSBjb250cm9sLlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY29udHJvbCA9IGNvbnRyb2w7XHJcbiAgICAgICAgdmFyIGdyb3VwO1xyXG4gICAgICAgIGxldCByZXF1aXJlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKGNvbnRyb2xUeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJyYWRpb1wiOlxyXG4gICAgICAgICAgICAgICAgZ3JvdXAgPSBjb3JlLmNsb3Nlc3QoY29udHJvbCwgXCIucmFkaW8tZ3JvdXBcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IHJhZGlvcyA9IGNvcmUuZmluZCgnaW5wdXRbdHlwZT1cInJhZGlvXCJdJywgZ3JvdXApO1xyXG4gICAgICAgICAgICAgICAgbGV0IGRlcGVuZGVudHMgPSBuZXcgTWFwKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgcmFkaW8gb2YgcmFkaW9zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJhZGlvLnJlcXVpcmVkIHx8IHJhZGlvLmdldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgY29yZS5hZGRFdmVudExpc3RlbmVyKHJhZGlvLCBcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBrZXkgb2YgZGVwZW5kZW50cy5rZXlzKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcihsZXQgZGVwZW5kZW50IG9mIGRlcGVuZGVudHMuZ2V0KGtleSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXBlbmRlbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZighZGVwZW5kZW50cy5oYXMocmFkaW8pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcihsZXQgZGVwZW5kZW50IG9mIGRlcGVuZGVudHMuZ2V0KHJhZGlvKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVwZW5kZW50LnN0eWxlLmRpc3BsYXkgPSBcImlubGluZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZXF1aXJlZERlcGVuZGVudHNTZWxlY3RvciA9IHJhZGlvLmdldEF0dHJpYnV0ZShcImRhdGEtcmVxdWlyZVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXF1aXJlZERlcGVuZGVudHNTZWxlY3Rvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZXF1aXJlZERlcGVuZGVudHMgPSBjb3JlLmZpbmQocmVxdWlyZWREZXBlbmRlbnRzU2VsZWN0b3IsIGdyb3VwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgcmVxdWlyZWREZXBlbmRlbnQgb2YgcmVxdWlyZWREZXBlbmRlbnRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25zLnB1c2gobmV3IFJlcXVpcmVkRGVwZW5kZW50KHRoaXMsIHJhZGlvLnZhbHVlLCByZXF1aXJlZERlcGVuZGVudCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZERlcGVuZGVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGRlcGVuZGVudHMuc2V0KHJhZGlvLCByZXF1aXJlZERlcGVuZGVudHMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjaGVja2JveFwiOlxyXG4gICAgICAgICAgICAgICAgZ3JvdXAgPSBjb3JlLmNsb3Nlc3QoY29udHJvbCwgXCIuY2hlY2tib3hcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImVtYWlsXCI6XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9ucy5wdXNoKG5ldyBFbWFpbCh0aGlzKSk7XHJcbiAgICAgICAgICAgICAgICBncm91cCA9IGNvcmUuY2xvc2VzdChjb250cm9sLCBcIi5mb3JtLWdyb3VwXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJkYXRlXCI6XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9ucy5wdXNoKG5ldyBEYXRlKHRoaXMpKTtcclxuICAgICAgICAgICAgICAgIGdyb3VwID0gY29yZS5jbG9zZXN0KGNvbnRyb2wsIFwiLmZvcm0tZ3JvdXBcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNvbnRyb2wuZGF0ZXBpY2tlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2wuZGF0ZXBpY2tlcigpLmF0dHIoXCJ0eXBlXCIsIFwidGV4dFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgZ3JvdXAgPSBjb3JlLmNsb3Nlc3QoY29udHJvbCwgXCIuZm9ybS1ncm91cFwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZUZhY3RvcnkuY3JlYXRlKHtcclxuICAgICAgICAgICAgYXR0YWNoVG86IGdyb3VwLFxyXG4gICAgICAgICAgICBtZXNzYWdlQXR0YWNobWVudDogbWVzc2FnZUZhY3RvcnkubWVzc2FnZUF0dGFjaG1lbnQuRmxvdyxcclxuICAgICAgICAgICAgb25SZW1vdmVkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBjb3JlLnJlbW92ZUNsYXNzKGdyb3VwLCBcImhhcy1lcnJvclwiKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25BZGRlZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgY29yZS5hZGRDbGFzcyhncm91cCwgXCJoYXMtZXJyb3JcIik7XHJcbiAgICAgICAgICAgICAgICAvL1RPRE86IEdldCByaWQgb2YgalF1ZXJ5XHJcbiAgICAgICAgICAgICAgICAkKGdyb3VwKS52ZWxvY2l0eShcImNhbGxvdXQudGFkYVwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDUwMFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHJlcXVpcmVkIHx8IGNvbnRyb2wucmVxdWlyZWQgfHwgY29udHJvbC5nZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiKSkge1xyXG4gICAgICAgICAgICB2YWxpZGF0aW9ucy5wdXNoKG5ldyBSZXF1aXJlZCh0aGlzKSk7XHJcbiAgICAgICAgICAgIGNvcmUuYWRkQ2xhc3MoZ3JvdXAsIFwicmVxdWlyZWRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb250cm9sLnNldEF0dHJpYnV0ZShsb3dlckNhc2VJZCwgXCJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgdmFsKCkge1xyXG4gICAgICAgIGxldCBjb250cm9sVHlwZSA9IHRoaXMuY29udHJvbC50eXBlID8gdGhpcy5jb250cm9sLnR5cGUgOiB0aGlzLmNvbnRyb2wuZ2V0QXR0cmlidXRlKFwidHlwZVwiKTtcclxuXHJcbiAgICAgICAgc3dpdGNoIChjb250cm9sVHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2hlY2tib3hcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb3JlLm1hdGNoZXModGhpcy5jb250cm9sLCBcIjpjaGVja2VkXCIpID8gdGhpcy5jb250cm9sLnZhbHVlIDogdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICBjYXNlIFwicmFkaW9cIjpcclxuICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZCA9IGNvcmUuZmluZChgW25hbWU9XCIke3RoaXMuY29udHJvbC5uYW1lfVwiXTpjaGVja2VkYCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZWN0ZWQubGVuZ3RoID09IDEgPyBzZWxlY3RlZFswXS52YWx1ZSA6IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRyb2wudmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoY29udHJvbCkge1xyXG4gICAgbGV0IHZhbGlkYXRpb25zID0gW107XHJcbiAgICBsZXQgZm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woY29udHJvbCwgdmFsaWRhdGlvbnMpO1xyXG5cclxuICAgIGZvcm1Db250cm9sLnZhbGlkYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBlcnJvcnMgPSBbXTtcclxuXHJcbiAgICAgICAgaWYgKHZhbGlkYXRpb25zKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHZhbGlkYXRpb24gb2YgdmFsaWRhdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIGlmICghdmFsaWRhdGlvbi5pc1ZhbGlkKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBlcnJvcnMucHVzaCh2YWxpZGF0aW9uLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZXJyb3JzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZm9ybUNvbnRyb2wubWVzc2FnZS5zaG93KHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9ycyxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VUeXBlOiBtZXNzYWdlRmFjdG9yeS5tZXNzYWdlVHlwZS5FcnJvclxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBlcnJvcnMubGVuZ3RoID09PSAwO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gZm9ybUNvbnRyb2w7XHJcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovZ2l0L0VzcGFsaWVySlMvc3JjL2pzL2VzcGFsaWVyLmZvcm1zLmNvbnRyb2wuanNcbiAqKi8iLCJpbXBvcnQgbWVzc2FnZUZhY3RvcnkgZnJvbSBcIi4vZXNwYWxpZXIubWVzc2FnZUZhY3RvcnlcIjtcclxuaW1wb3J0IHdhaXRzY3JlZW4gZnJvbSBcIi4vZXNwYWxpZXIud2FpdHNjcmVlblwiO1xyXG5pbXBvcnQgY29tbW9uIGZyb20gXCIuL2VzcGFsaWVyLmNvbW1vblwiO1xyXG5pbXBvcnQgY29yZSBmcm9tIFwiLi9lc3BhbGllci5jb3JlXCI7XHJcblxyXG52YXIgZ2V0Rm9vdGVyID0gZnVuY3Rpb24gKHRhYmxlKSB7XHJcbiAgICB2YXIgc3RhcnRBdFBhZ2UgPSBNYXRoLm1heCgwLCB0YWJsZS5zZXR0aW5ncy5jdXJyZW50UGFnZSAtIDMpO1xyXG4gICAgdmFyIGVuZEF0UGFnZSA9IE1hdGgubWluKHRhYmxlLnNldHRpbmdzLnBhZ2VzIC0gMSwgdGFibGUuc2V0dGluZ3MuY3VycmVudFBhZ2UgKyAzICsgTWF0aC5tYXgoMyAtIHRhYmxlLnNldHRpbmdzLmN1cnJlbnRQYWdlLCAwKSk7XHJcbiAgICB2YXIgcGFnaW5nQ29udHJvbCA9IFwiPHVsIGNsYXNzPVxcXCJwYWdpbmF0aW9uXFxcIj5cIjtcclxuXHJcbiAgICBwYWdpbmdDb250cm9sICs9IGA8bGkke3RhYmxlLnNldHRpbmdzLmN1cnJlbnRQYWdlID09IDAgPyBgIGNsYXNzPVwiZGlzYWJsZWRcImAgOiBcIlwifT48YSBkYXRhLXBhZ2U9XCIkeyh0YWJsZS5zZXR0aW5ncy5jdXJyZW50UGFnZSAtIDEpIH1cIiBjbGFzcz1cImVzcGFsaWVyLXRhYmxlLWJ1dHRvblwiIGhyZWY9XCJqYXZhc2NyaXB0OiB2b2lkKDApO1wiPjxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZsYXF1bzs8L3NwYW4+PC9hPjwvbGk+YDtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gc3RhcnRBdFBhZ2U7IGkgPD0gZW5kQXRQYWdlOyBpKyspIHtcclxuICAgICAgICBwYWdpbmdDb250cm9sICs9IGA8bGkke2kgPT09IHRhYmxlLnNldHRpbmdzLmN1cnJlbnRQYWdlID8gYCBjbGFzcz1cImFjdGl2ZVwiYCA6IFwiXCJ9PjxhIGRhdGEtcGFnZT1cIiR7aX1cIiBjbGFzcz1cImVzcGFsaWVyLXRhYmxlLWJ1dHRvblwiIGhyZWY9XCJqYXZhc2NyaXB0OiB2b2lkKDApO1wiPiR7KGkgKyAxKSB9PC9hPjwvbGk+YDtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgbmV4dFBhZ2UgPSAodGFibGUuc2V0dGluZ3MuY3VycmVudFBhZ2UgKyAxKTtcclxuICAgIHBhZ2luZ0NvbnRyb2wgKz0gYDxsaSR7bmV4dFBhZ2UgPT0gdGFibGUuc2V0dGluZ3MucGFnZXMgPyBgIGNsYXNzPVwiZGlzYWJsZWRcImAgOiBcIlwifT48YSBkYXRhLXBhZ2U9XCIke25leHRQYWdlfVwiIGNsYXNzPVwiZXNwYWxpZXItdGFibGUtYnV0dG9uXCIgaHJlZj1cImphdmFzY3JpcHQ6IHZvaWQoMCk7XCI+PHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnJhcXVvOzwvc3Bhbj48L2E+PC9saT5gO1xyXG5cclxuICAgIHJldHVybiBgPHRmb290Pjx0cj48dGQgY29sc3Bhbj1cIjQyXCI+JHtwYWdpbmdDb250cm9sfTwvdGQ+PC90cj48L3Rmb290PmA7XHJcbn07XHJcblxyXG52YXIgcmVuZGVyVGFibGUgPSBmdW5jdGlvbiAodGFibGUpIHtcclxuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIHZhciByZW5kZXJlZCA9IGA8dGFibGUgY2xhc3M9XCIke3RhYmxlLnNldHRpbmdzLnRhYmxlQ2xhc3N9IHRhYmxlIHRhYmxlLXN0cmlwZWRcIj5gO1xyXG5cclxuICAgICAgICBpZiAodGFibGUuc2V0dGluZ3MuaGVhZGVyVGVtcGxhdGUpIHtcclxuICAgICAgICAgICAgcmVuZGVyZWQgKz0gdGFibGUuc2V0dGluZ3MuaGVhZGVyVGVtcGxhdGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlbmRlcmVkICs9IFwiPHRib2R5PlwiO1xyXG4gICAgICAgIHZhciBzdGFydEF0SW5kZXggPSB0YWJsZS5zZXR0aW5ncy5jdXJyZW50UGFnZSAqIHRhYmxlLnNldHRpbmdzLnBhZ2VTaXplO1xyXG5cclxuICAgICAgICBpZiAodGFibGUuc2V0dGluZ3MuZGF0YSkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gc3RhcnRBdEluZGV4OyBpIDwgTWF0aC5taW4oc3RhcnRBdEluZGV4ICsgdGFibGUuc2V0dGluZ3MucGFnZVNpemUsIHRhYmxlLnNldHRpbmdzLmRhdGEubGVuZ3RoKTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICByZW5kZXJlZCArPSB0YWJsZS5zZXR0aW5ncy5yb3dUZW1wbGF0ZSh0YWJsZS5zZXR0aW5ncy5kYXRhW2ldKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmVuZGVyZWQgKz0gXCI8L3Rib2R5PlwiO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRhYmxlLnNldHRpbmdzLnBhZ2VzID4gMCkge1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyZWQgKz0gZ2V0Rm9vdGVyKHRhYmxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXNvbHZlKHJlbmRlcmVkKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb3JlLnNlbmRSZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgIHVybDogdGFibGUuc2V0dGluZ3MuZmV0Y2hVcmwsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiBcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBQYWdlOiB0YWJsZS5zZXR0aW5ncy5jdXJyZW50UGFnZSxcclxuICAgICAgICAgICAgICAgICAgICBQYWdlU2l6ZTogdGFibGUuc2V0dGluZ3MucGFnZVNpemUsXHJcbiAgICAgICAgICAgICAgICAgICAgQ3JpdGVyaWE6IHRhYmxlLnNldHRpbmdzLmZpbHRlclxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0YWJsZS5zZXR0aW5ncy5mZXRjaENhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFibGUuc2V0dGluZ3MuZmV0Y2hDYWxsYmFjayhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRhYmxlLnNldHRpbmdzLnBhZ2VzID0gTWF0aC5jZWlsKHJlc3VsdC5kYXRhLnRvdGFsIC8gcmVzdWx0LmRhdGEucGFnZVNpemUpO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXN1bHQuZGF0YS5yZWNvcmRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyZWQgKz0gdGFibGUuc2V0dGluZ3Mucm93VGVtcGxhdGUocmVzdWx0LmRhdGEucmVjb3Jkc1tpXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZW5kZXJlZCArPSBcIjwvdGJvZHk+XCI7XHJcbiAgICAgICAgICAgICAgICByZW5kZXJlZCArPSBnZXRGb290ZXIodGFibGUpO1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZW5kZXJlZCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHByb21pc2UudGhlbihcclxuICAgICAgICBmdW5jdGlvbiAocmVuZGVyZWQpIHtcclxuICAgICAgICAgICAgdGFibGUuc2V0dGluZ3MuY29udGFpbmVyLmh0bWwocmVuZGVyZWQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRhYmxlLnNldHRpbmdzLnJlbmRlcmVkQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgIHRhYmxlLnNldHRpbmdzLnJlbmRlcmVkQ2FsbGJhY2sodGFibGUuc2V0dGluZ3MuY29udGFpbmVyWzBdLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwidGFibGVcIilbMF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbn07XHJcblxyXG5jbGFzcyBUYWJsZUluc3RhbmNlIHtcclxuICAgIGNvbnN0cnVjdG9yKGFyZ3MpIHtcclxuICAgICAgICB0aGlzLnNldHRpbmdzID0ge1xyXG4gICAgICAgICAgICBjb250YWluZXI6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgY3VycmVudFBhZ2U6IDAsXHJcbiAgICAgICAgICAgIGRhdGE6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgZmV0Y2hDYWxsYmFjazogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICBmZXRjaFVybDogXCJcIixcclxuICAgICAgICAgICAgaGVhZGVyVGVtcGxhdGU6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgcGFnZVNpemU6IDEwLFxyXG4gICAgICAgICAgICBwcmVmZXRjaFBhZ2VzOiA1LFxyXG4gICAgICAgICAgICByb3dUZW1wbGF0ZTogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICB0YWJsZUNsYXNzOiBcImVzcGFsaWVyLXRhYmxlXCIsXHJcbiAgICAgICAgICAgIHJlbmRlcmVkQ2FsbGJhY2s6IHVuZGVmaW5lZFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgICQuZXh0ZW5kKHRoaXMuc2V0dGluZ3MsIGFyZ3MpO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuc2V0dGluZ3MuZmV0Y2hVcmwgJiYgIXRoaXMuc2V0dGluZ3MuZGF0YSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiWW91IG11c3QgZWl0aGVyIHNwZWNpZnkgYSBmZXRjaCB1cmwgb3IgcGFzcyBpbiBkYXRhIGZvciB0aGUgdGFibGUgdG8gZGlzcGxheS5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuc2V0dGluZ3MuY29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJZb3UgbXVzdCBzcGVjaWZ5IGEgY29udGFpbmVyIHRvIHBsYWNlIHRoZSB0YWJsZSBpbi5cIilcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5zZXR0aW5ncy5yb3dUZW1wbGF0ZSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiWW91IG11c3QgcHJvdmlkZSBhIHJvdyB0ZW1wbGF0ZS5cIilcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNldHRpbmdzLmRhdGEpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5wYWdlcyA9IE1hdGguY2VpbCh0aGlzLnNldHRpbmdzLmRhdGEubGVuZ3RoIC8gdGhpcy5zZXR0aW5ncy5wYWdlU2l6ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkLmV4dGVuZCh0aGlzLnNldHRpbmdzLCBhcmdzKTtcclxuICAgIH1cclxuXHJcbiAgICBuZXh0KCkge1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3MuY3VycmVudFBhZ2UrKztcclxuICAgICAgICByZW5kZXJUYWJsZSh0aGlzKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwcmV2aW91cygpIHtcclxuICAgICAgICB0aGlzLnNldHRpbmdzLmN1cnJlbnRQYWdlLS07XHJcbiAgICAgICAgcmVuZGVyVGFibGUodGhpcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsdGVyKGZpbHRlcikge1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3MuZmlsdGVyID0gZmlsdGVyO1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3MuY3VycmVudFBhZ2UgPSAwO1xyXG4gICAgICAgIHJlbmRlclRhYmxlKHRoaXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGdvVG9QYWdlKHBhZ2UpIHtcclxuICAgICAgICBpZiAocGFnZSA8IDAgfHwgcGFnZSA+PSB0aGlzLnNldHRpbmdzLnBhZ2VzKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2V0dGluZ3MuY3VycmVudFBhZ2UgPSBwYWdlO1xyXG4gICAgICAgIHJlbmRlclRhYmxlKHRoaXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59O1xyXG5cclxudmFyIHRhYmxlcyA9IHtcclxuICAgIGNyZWF0ZTogZnVuY3Rpb24gKGFyZ3MpIHtcclxuICAgICAgICB2YXIgdGFibGUgPSBuZXcgVGFibGVJbnN0YW5jZShhcmdzKTtcclxuICAgICAgICB0YWJsZS5zZXR0aW5ncy5jb250YWluZXIub24oXCJjbGlja1wiLCBcIi5lc3BhbGllci10YWJsZS1idXR0b25cIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0YWJsZS5nb1RvUGFnZSgkKHRoaXMpLmRhdGEoXCJwYWdlXCIpKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZW5kZXJUYWJsZSh0YWJsZSk7XHJcbiAgICAgICAgcmV0dXJuIHRhYmxlO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGFibGVzO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L2dpdC9Fc3BhbGllckpTL3NyYy9qcy9lc3BhbGllci50YWJsZXMuanNcbiAqKi8iLCJpbXBvcnQgY29yZSBmcm9tIFwiLi9lc3BhbGllci5jb3JlXCI7XHJcbmltcG9ydCBjb21tb24gZnJvbSBcIi4vZXNwYWxpZXIuY29tbW9uXCI7XHJcblxyXG5jbGFzcyBEaWFsb2cge1xyXG4gICAgY29uc3RydWN0b3IoYXJncykge1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQ6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgYnV0dG9uczogW11cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAkLmV4dGVuZCh0aGlzLnNldHRpbmdzLCBhcmdzKTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnNldHRpbmdzLmVsZW1lbnQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IG11c3QgcGFzcyBhbiBlbGVtZW50LlwiKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2V0dGluZ3MuZWxlbWVudC5sZW5ndGggIT09IDEpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZWxlbWVudCBtdXN0IGhhdmUgZXhhY3RseSBvbmUgcm9vdCBlbGVtZW50LlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2hvdygpIHtcclxuICAgICAgICB2YXIgaGVpZ2h0LCBzY3JvbGxUb3AsIHRvcCwgd2luZG93SGVpZ2h0LCBkaWFsb2c7XHJcbiAgICAgICAgY29yZS5oaWRlTWFpbk1lc3NhZ2UoKTtcclxuICAgICAgICBjb21tb24uc2hvd1ZlbGx1bSgpO1xyXG4gICAgICAgIHdpbmRvd0hlaWdodCA9IGNvbW1vbi53aW5kb3cuaGVpZ2h0KCk7XHJcbiAgICAgICAgZGlhbG9nID0gdGhpcy5zZXR0aW5ncy5lbGVtZW50O1xyXG4gICAgICAgIGRpYWxvZy5jc3MoXCJwb3NpdGlvblwiLCBcImFic29sdXRlXCIpO1xyXG4gICAgICAgICQoXCJhLCBidXR0b24sIGlucHV0LCBzZWxlY3QsIHRleHRhcmVhXCIpLmF0dHIoXCJ0YWJpbmRleFwiLCBcIi0xXCIpO1xyXG5cclxuICAgICAgICBjb21tb24uYm9keS5hcHBlbmQoZGlhbG9nKTtcclxuXHJcbiAgICAgICAgc2Nyb2xsVG9wID0gY29tbW9uLndpbmRvdy5zY3JvbGxUb3AoKTtcclxuXHJcbiAgICAgICAgaGVpZ2h0ID0gZGlhbG9nLmhlaWdodCgpO1xyXG4gICAgICAgIHRvcCA9ICh3aW5kb3dIZWlnaHQgLyAyKSAtIChoZWlnaHQgLyAyKSArIHNjcm9sbFRvcDtcclxuICAgICAgICB0b3AgPSB0b3AgPiAwID8gdG9wIDogMDtcclxuICAgICAgICBkaWFsb2cuY3NzKFwidG9wXCIsIHRvcCk7XHJcbiAgICAgICAgJChcIjpmb2N1c1wiKS5ibHVyKCk7XHJcbiAgICAgICAgJChcIi5mb2N1c1wiLCBkaWFsb2cpLmZpcnN0KCkuZm9jdXMoKTtcclxuXHJcbiAgICAgICAgZGlhbG9nLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG5cclxuICAgICAgICBkaWFsb2cudmVsb2NpdHkoXCJ0cmFuc2l0aW9uLndoaXJsSW5cIiwge1xyXG4gICAgICAgICAgICBkdXJhdGlvbjogNDUwXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGZvcihsZXQgYnV0dG9uIG9mIHRoaXMuc2V0dGluZ3MuYnV0dG9ucykge1xyXG4gICAgICAgICAgICAkKFwiI1wiICsgYnV0dG9uLm5hbWUsIGRpYWxvZykuY2xpY2soKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uLmhhbmRsZXIodGhpcyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZSgpIHtcclxuICAgICAgICB2YXIgZGlhbG9nID0gJCh0aGlzLnNldHRpbmdzLmVsZW1lbnQpO1xyXG4gICAgICAgIGRpYWxvZy52ZWxvY2l0eShcInRyYW5zaXRpb24ud2hpcmxPdXRcIiwge1xyXG4gICAgICAgICAgICBkdXJhdGlvbjogMTUwLFxyXG4gICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgZGlhbG9nLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgJChcIiNub3RpZmljYXRpb25NZXNzYWdlXCIpLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICgkKFwiLmRpYWxvZ1wiKS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbW1vbi5oaWRlVmVsbHVtKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGFyZ3MpIHtcclxuICAgIHJldHVybiBuZXcgRGlhbG9nKGFyZ3MpO1xyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovZ2l0L0VzcGFsaWVySlMvc3JjL2pzL2VzcGFsaWVyLmRpYWxvZy5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=