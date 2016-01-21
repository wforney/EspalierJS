(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
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
	
	var _srcJsEspalier = __webpack_require__(2);
	
	var _srcJsEspalier2 = _interopRequireDefault(_srcJsEspalier);
	
	var _graphDemoGraph = __webpack_require__(36);
	
	var _graphDemoGraph2 = _interopRequireDefault(_graphDemoGraph);
	
	var _tableDemoTable = __webpack_require__(47);
	
	var _tableDemoTable2 = _interopRequireDefault(_tableDemoTable);
	
	var _dialogDialogDemo = __webpack_require__(50);
	
	var _dialogDialogDemo2 = _interopRequireDefault(_dialogDialogDemo);
	
	var _popoverPopoverDemo = __webpack_require__(52);
	
	var _popoverPopoverDemo2 = _interopRequireDefault(_popoverPopoverDemo);
	
	_srcJsEspalier2["default"].wire("#standard-form");
	
	_srcJsEspalier2["default"].el("#show-dialog")[0].onclick = function () {
	    (0, _dialogDialogDemo2["default"])();
	};
	
	_srcJsEspalier2["default"].el("#show-popover-top-left")[0].onclick = function () {
	    (0, _popoverPopoverDemo2["default"])(_srcJsEspalier2["default"].el("#show-popover-top-left")[0]);
	};
	_srcJsEspalier2["default"].el("#show-popover-top-right")[0].onclick = function () {
	    (0, _popoverPopoverDemo2["default"])(_srcJsEspalier2["default"].el("#show-popover-top-right")[0]);
	};
	_srcJsEspalier2["default"].el("#show-popover-bottom-left")[0].onclick = function () {
	    (0, _popoverPopoverDemo2["default"])(_srcJsEspalier2["default"].el("#show-popover-bottom-left")[0]);
	};
	_srcJsEspalier2["default"].el("#show-popover-bottom-right")[0].onclick = function () {
	    (0, _popoverPopoverDemo2["default"])(_srcJsEspalier2["default"].el("#show-popover-bottom-right")[0]);
	};
	
	_srcJsEspalier2["default"].el("#show-popover-top-center")[0].onclick = function () {
	    (0, _popoverPopoverDemo2["default"])(_srcJsEspalier2["default"].el("#show-popover-top-center")[0]);
	};
	_srcJsEspalier2["default"].el("#show-popover-bottom-center")[0].onclick = function () {
	    (0, _popoverPopoverDemo2["default"])(_srcJsEspalier2["default"].el("#show-popover-bottom-center")[0]);
	};
	_srcJsEspalier2["default"].el("#show-popover-left-center")[0].onclick = function () {
	    (0, _popoverPopoverDemo2["default"])(_srcJsEspalier2["default"].el("#show-popover-left-center")[0]);
	};
	_srcJsEspalier2["default"].el("#show-popover-right-center")[0].onclick = function () {
	    (0, _popoverPopoverDemo2["default"])(_srcJsEspalier2["default"].el("#show-popover-right-center")[0]);
	};
	
	var table = (0, _tableDemoTable2["default"])(_srcJsEspalier2["default"].node("#demo-table"));
	
	var graph = new _graphDemoGraph2["default"](_srcJsEspalier2["default"].el("#wizard-container"), function (graphValue) {
	    _srcJsEspalier2["default"].el("#graph-value").innerHtml = JSON.stringify(graphValue, null, 2);
	});
	
	window.espalier = _srcJsEspalier2["default"];

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
	
	var _espalierForms = __webpack_require__(17);
	
	var _espalierForms2 = _interopRequireDefault(_espalierForms);
	
	var _espalierWaitscreen = __webpack_require__(13);
	
	var _espalierWaitscreen2 = _interopRequireDefault(_espalierWaitscreen);
	
	var _espalierTable = __webpack_require__(28);
	
	var _espalierTable2 = _interopRequireDefault(_espalierTable);
	
	var _espalierDialog = __webpack_require__(29);
	
	var _espalierDialog2 = _interopRequireDefault(_espalierDialog);
	
	var _espalierPopover = __webpack_require__(30);
	
	var _espalierPopover2 = _interopRequireDefault(_espalierPopover);
	
	var _espalierGraph = __webpack_require__(31);
	
	var _espalierGraph2 = _interopRequireDefault(_espalierGraph);
	
	var _espalierGraphNode = __webpack_require__(32);
	
	var _espalierGraphNode2 = _interopRequireDefault(_espalierGraphNode);
	
	var _espalierDomnode = __webpack_require__(6);
	
	var _espalierDomnode2 = _interopRequireDefault(_espalierDomnode);
	
	var _RepeaterRepeaterSource = __webpack_require__(33);
	
	var _RepeaterRepeaterSource2 = _interopRequireDefault(_RepeaterRepeaterSource);
	
	var _RepeaterStaticSource = __webpack_require__(34);
	
	var _RepeaterStaticSource2 = _interopRequireDefault(_RepeaterStaticSource);
	
	var _RepeaterAJAXSource = __webpack_require__(35);
	
	var _RepeaterAJAXSource2 = _interopRequireDefault(_RepeaterAJAXSource);
	
	var espalier = {
	    isEmptyOrSpaces: _espalierCore2["default"].isEmptyOrSpaces,
	    showError: _espalierCore2["default"].showError,
	    showWarning: _espalierCore2["default"].showWarning,
	    showInfo: _espalierCore2["default"].showInfo,
	    sendRequest: _espalierCore2["default"].sendRequest,
	    Table: _espalierTable2["default"],
	    wire: _espalierForms2["default"],
	    showWaitScreen: _espalierWaitscreen2["default"].show,
	    hideWaitScreen: _espalierWaitscreen2["default"].hide,
	    shortDate: _espalierCore2["default"].shortDate,
	    shortTime: _espalierCore2["default"].shortTime,
	    el: _espalierCore2["default"].find,
	    node: function node(selector, root) {
	        return new _espalierDomnode2["default"](selector, root);
	    },
	    extend: _espalierCore2["default"].extend,
	    numberWithCommas: _espalierCore2["default"].numberWithCommas,
	    publish: _espalierCore2["default"].publish,
	    parseISODate: _espalierCore2["default"].parseISODate,
	    subscribe: _espalierCore2["default"].subscribe,
	    unsubscribe: _espalierCore2["default"].unsubscribe,
	    dialog: function dialog(args) {
	        return (0, _espalierDialog2["default"])(args).show();
	    },
	    popover: function popover(args) {
	        return new _espalierPopover2["default"](args).show();
	    },
	    Graph: _espalierGraph2["default"],
	    GraphNode: _espalierGraphNode2["default"],
	    repeater: {
	        RepeaterSource: _RepeaterRepeaterSource2["default"],
	        StaticSource: _RepeaterStaticSource2["default"],
	        AJAXSource: _RepeaterAJAXSource2["default"]
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
	
	var _espalierWaitscreen = __webpack_require__(13);
	
	var _espalierWaitscreen2 = _interopRequireDefault(_espalierWaitscreen);
	
	var _espalierCommon = __webpack_require__(5);
	
	var _espalierCommon2 = _interopRequireDefault(_espalierCommon);
	
	var _helpersIsString = __webpack_require__(7);
	
	var _helpersIsString2 = _interopRequireDefault(_helpersIsString);
	
	var _helpersAddListener = __webpack_require__(8);
	
	var _helpersAddListener2 = _interopRequireDefault(_helpersAddListener);
	
	var _helpersMatches = __webpack_require__(10);
	
	var _helpersMatches2 = _interopRequireDefault(_helpersMatches);
	
	var _ajaxRequest = __webpack_require__(14);
	
	var _ajaxRequest2 = _interopRequireDefault(_ajaxRequest);
	
	var _helpersMainMessage = __webpack_require__(15);
	
	var _helpersMainMessage2 = _interopRequireDefault(_helpersMainMessage);
	
	var _pubsubJs = __webpack_require__(16);
	
	var _pubsubJs2 = _interopRequireDefault(_pubsubJs);
	
	var parseDate = undefined;
	var testDate = new Date('2011-06-02T09:34:29+02:00');
	
	if (!testDate || +testDate !== 1307000069000) {
	    parseDate = function (s) {
	        var day = undefined,
	            tz = undefined,
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
	
	testDate = null;
	
	var waitingOn = new Set();
	
	var waitOn = function waitOn(toWaitOn) {
	    waitingOn.add(toWaitOn);
	    _espalierWaitscreen2["default"].show();
	};
	
	var clearWait = function clearWait(toWaitOn) {
	    if (waitingOn.has(toWaitOn)) {
	        waitingOn["delete"](toWaitOn);
	    }
	
	    if (waitingOn.size === 0) {
	        _espalierWaitscreen2["default"].hide();
	    }
	};
	
	var core = {
	    sendRequest: function sendRequest(req) {
	        var existingMessages = core.find(".message-container");
	
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;
	
	        try {
	            for (var _iterator = existingMessages[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                var message = _step.value;
	
	                message.parentNode.removeChild(message);
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
	
	        var ajaxSettings = {
	            type: "GET",
	            withCredentials: true,
	            showWait: true
	        };
	
	        core.extend(ajaxSettings, req);
	
	        var request = new _ajaxRequest2["default"](ajaxSettings);
	
	        if (ajaxSettings.showWait) {
	            waitOn(request);
	        }
	
	        return new Promise(function (resolve, reject) {
	            request.send().then(function (success) {
	                clearWait(request);
	                resolve(success);
	            }, function (fail) {
	                clearWait(request);
	
	                if (window.console && window.console.log) {
	                    window.console.log(fail);
	                }
	
	                reject(fail);
	            });
	        });
	    },
	    showWarning: _helpersMainMessage2["default"].showWarning,
	    showError: _helpersMainMessage2["default"].showError,
	    showInfo: _helpersMainMessage2["default"].showInfo,
	    hideMainMessage: _helpersMainMessage2["default"].hideMainMessage,
	    isEmptyOrSpaces: function isEmptyOrSpaces(str) {
	        return str === undefined || str === null || str.match(/^\s*$/) !== null;
	    },
	    isEmail: function isEmail(str) {
	        var emailRegex = /^(([\w-]+\.)+[\w-]+|([a-zA-Z]{1}|[\w-]{2,}))@((([0-1]?[0-9]{1,2}|25[0-5]|2[0-4][0-9])\.([0-1]?[0-9]{1,2}|25[0-5]|2[0-4][0-9])\.([0-1]?[0-9]{1,2}|25[0-5]|2[0-4][0-9])\.([0-1]?[0-9]{1,2}|25[0-5]|2[0-4][0-9])){1}|([a-zA-Z]+[\w-]+\.)+[a-zA-Z]{2,4})$/;
	        return core.isEmptyOrSpaces(str) || str.match(emailRegex);
	    },
	    isPhone: function isPhone(str) {
	        var phoneRegex = /^1?[-\. ]?(\(\d{3}\)?[-\. ]?|\d{3}?[-\. ]?)?\d{3}?[-\. ]?\d{4}$/;
	        return core.isEmptyOrSpaces(str) || str.match(phoneRegex);
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
	    unsubscribe: function unsubscribe(token) {
	        _pubsubJs2["default"].unsubscribe(token);
	    },
	    find: _espalierCommon2["default"].find,
	    extend: _espalierCommon2["default"].extend,
	    closest: function closest(el, selector) {
	        while (el !== null) {
	            var _parent = el.parentElement;
	            if (_parent !== null && (0, _helpersMatches2["default"])(_parent, selector)) {
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
	    isFunction: function isFunction(toTest) {
	        return !!(toTest && toTest.constructor && toTest.call && toTest.apply);
	    },
	    removeClass: function removeClass(el, className) {
	        if (el.classList) {
	            el.classList.remove(className);
	        } else {
	            el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
	        }
	    },
	    addEventListener: _helpersAddListener2["default"],
	    matches: _helpersMatches2["default"],
	    isString: _helpersIsString2["default"],
	    first: function first(array, match) {
	        var _iteratorNormalCompletion2 = true;
	        var _didIteratorError2 = false;
	        var _iteratorError2 = undefined;
	
	        try {
	            for (var _iterator2 = array[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                var arrayItem = _step2.value;
	
	                if (match(arrayItem)) {
	                    return arrayItem;
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
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _espalierCommon = __webpack_require__(5);
	
	var _espalierCommon2 = _interopRequireDefault(_espalierCommon);
	
	var _templatesBootstrapTemplates = __webpack_require__(12);
	
	var _templatesBootstrapTemplates2 = _interopRequireDefault(_templatesBootstrapTemplates);
	
	var _espalierDomnode = __webpack_require__(6);
	
	var _espalierDomnode2 = _interopRequireDefault(_espalierDomnode);
	
	var _helpersAddListener = __webpack_require__(8);
	
	var _helpersAddListener2 = _interopRequireDefault(_helpersAddListener);
	
	var _helpersIsString = __webpack_require__(7);
	
	var _helpersIsString2 = _interopRequireDefault(_helpersIsString);
	
	var MessageDisplayer = (function () {
	    function MessageDisplayer(args) {
	        _classCallCheck(this, MessageDisplayer);
	
	        args.attachTo = new _espalierDomnode2["default"](args.attachTo);
	
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
	
	        this.settings = _espalierCommon2["default"].extend(this.settings, args);
	
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
	            if ((0, _helpersIsString2["default"])(messageArgs.message)) {
	                messageArgs.message = [messageArgs.message];
	            }
	
	            messageSettings = {
	                messageType: factory.messageType.Info,
	                message: []
	            };
	
	            _espalierCommon2["default"].extend(messageSettings, messageArgs);
	
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
	
	            this.message = new _espalierDomnode2["default"](_templatesBootstrapTemplates2["default"].message({
	                messageTypeClass: messageTypeClass,
	                messages: messageSettings.message,
	                messageContainerClass: this.settings.messageContainerClass,
	                closeMessageClass: this.settings.closeMessageClass,
	                messageAttachmentClass: messageAttachmentClass,
	                moreThanOne: !(0, _helpersIsString2["default"])(messageArgs.message) && messageArgs.message.length > 1,
	                showButton: messageArgs.showButton
	            }));
	
	            this.settings.attachTo.append(this.message.getNode());
	            this.settings.onAdded(this.message.getNode());
	
	            var displayedMessage = this;
	
	            var closeButtons = Array.from(_espalierCommon2["default"].find("." + this.settings.closeMessageClass, this.message.getNode()));
	
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;
	
	            try {
	                for (var _iterator = closeButtons[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var button = _step.value;
	
	                    (0, _helpersAddListener2["default"])(button, "click", function () {
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

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _espalierDomnode = __webpack_require__(6);
	
	var _espalierDomnode2 = _interopRequireDefault(_espalierDomnode);
	
	var find = function find(selector, root) {
	    root = root ? root.querySelectorAll ? root : root.getNode() : document;
	    return Array.from(root.querySelectorAll(selector));
	};
	
	//TODO: This is a temporary hack around removing jQuery and the .data() method.
	//      Figure out a better way to resolve a control when submitting a request;
	//      allowing a user to pass an Espalier Form could be a good alternative and
	//      would better scope the controls.
	var controls = new WeakMap();
	
	var extend = function extend(out) {
	    out = out || {};
	
	    for (var i = 1; i < arguments.length; i++) {
	        if (!arguments[i]) continue;
	
	        for (var key in arguments[i]) {
	            if (arguments[i].hasOwnProperty(key)) out[key] = arguments[i][key];
	        }
	    }
	
	    return out;
	};
	
	var browserSupportsCSSProperty = function browserSupportsCSSProperty(propertyName) {
	    var el = document.createElement('div');
	    propertyName = propertyName.toLowerCase();
	
	    if (el.style[propertyName] != undefined) return true;
	
	    var propertyNameCapital = propertyName.charAt(0).toUpperCase() + propertyName.substr(1),
	        domPrefixes = 'Webkit Moz ms O'.split(' ');
	
	    for (var i = 0; i < domPrefixes.length; i++) {
	        if (el.style[domPrefixes[i] + propertyNameCapital] != undefined) return true;
	    }
	
	    return false;
	};
	
	var isElement = function isElement(toTest) {
	    return typeof HTMLElement === "object" ? toTest instanceof HTMLElement : //DOM2
	    toTest && typeof toTest === "object" && toTest !== null && toTest.nodeType === 1 && typeof toTest.nodeName === "string";
	};
	
	var body = new _espalierDomnode2['default'](find("body"));
	
	exports['default'] = {
	    body: body,
	    find: find,
	    isElement: isElement,
	    extend: extend,
	    controls: controls,
	    browserSupportsCSSProperty: browserSupportsCSSProperty
	};
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _helpersIsString = __webpack_require__(7);
	
	var _helpersIsString2 = _interopRequireDefault(_helpersIsString);
	
	var _helpersAddListener = __webpack_require__(8);
	
	var _helpersAddListener2 = _interopRequireDefault(_helpersAddListener);
	
	var _helpersSingleOrError = __webpack_require__(9);
	
	var _helpersSingleOrError2 = _interopRequireDefault(_helpersSingleOrError);
	
	var _helpersMatches = __webpack_require__(10);
	
	var _helpersMatches2 = _interopRequireDefault(_helpersMatches);
	
	var _espalierCommon = __webpack_require__(5);
	
	var _espalierCommon2 = _interopRequireDefault(_espalierCommon);
	
	var _Repeater = __webpack_require__(11);
	
	var _Repeater2 = _interopRequireDefault(_Repeater);
	
	var internals = new WeakMap();
	
	//NOTE: http://krasimirtsonev.com/blog/article/Revealing-the-magic-how-to-properly-convert-HTML-string-to-a-DOM-element
	var str2DOMElement = function str2DOMElement(html) {
	    var wrapMap = {
	        option: [1, "<select multiple='multiple'>", "</select>"],
	        legend: [1, "<fieldset>", "</fieldset>"],
	        area: [1, "<map>", "</map>"],
	        param: [1, "<object>", "</object>"],
	        thead: [1, "<table>", "</table>"],
	        tr: [2, "<table><tbody>", "</tbody></table>"],
	        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
	        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
	        body: [0, "", ""],
	        _default: [1, "<div>", "</div>"]
	    };
	
	    html = html.trim();
	    wrapMap.optgroup = wrapMap.option;
	    wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	    wrapMap.th = wrapMap.td;
	    var match = /<\s*\w.*?>/g.exec(html);
	    var parsedElements = document.createElement("div");
	
	    if (match != null) {
	        var tag = match[0].replace(/</g, '').replace(/>/g, '').split(' ')[0];
	        if (tag.toLowerCase() === 'body') {
	            var body = document.createElement("body");
	            // keeping the attributes
	            parsedElements.innerHTML = html.replace(/<body/g, '<div').replace(/<\/body>/g, '</div>');
	            var attrs = parsedElements.firstChild.attributes;
	            body.innerHTML = html;
	            for (var i = 0; i < attrs.length; i++) {
	                body.setAttribute(attrs[i].name, attrs[i].value);
	            }
	            return body;
	        } else {
	            var map = wrapMap[tag] || wrapMap._default;
	            html = map[1] + html + map[2];
	            parsedElements.innerHTML = html;
	            // Descend through wrappers to the right content
	            var j = map[0] + 1;
	            while (j--) {
	                parsedElements = parsedElements.lastChild;
	            }
	        }
	    } else {
	        parsedElements.innerHTML = html;
	        parsedElements = parsedElements.lastChild;
	    }
	    return parsedElements;
	};
	
	var EspalierNode = (function () {
	    function EspalierNode(node, root) {
	        _classCallCheck(this, EspalierNode);
	
	        if ((0, _helpersIsString2["default"])(node)) {
	            try {
	                var found = _espalierCommon2["default"].find(node, root);
	                node = found[0];
	            } catch (error) {
	                node = str2DOMElement(node);
	            }
	        }
	
	        node = (0, _helpersSingleOrError2["default"])(node);
	        internals.set(this, { node: node, originalDisplay: node.style.display });
	    }
	
	    _createClass(EspalierNode, [{
	        key: "getNode",
	        value: function getNode() {
	            return internals.get(this).node;
	        }
	    }, {
	        key: "append",
	        value: function append(stuff) {
	            var node = this.getNode();
	
	            if ((0, _helpersIsString2["default"])(stuff)) {
	                node.appendChild(str2DOMElement(stuff));
	                return;
	            }
	
	            node.appendChild(stuff);
	        }
	    }, {
	        key: "clear",
	        value: function clear() {
	            this.getNode().innerHTML = "";
	        }
	    }, {
	        key: "wrapIn",
	        value: function wrapIn(tag) {
	            var node = this.getNode();
	            var parent = node.parentNode;
	            var wrapper = document.createElement(tag);
	            parent.insertBefore(wrapper, node.nextSibling);
	            wrapper.appendChild(node);
	
	            return new EspalierNode(wrapper);
	        }
	    }, {
	        key: "unwrap",
	        value: function unwrap() {
	            var node = this.getNode();
	            var wrapper = node.parentNode;
	            wrapper.parentNode.insertBefore(node, wrapper);
	            wrapper.parentNode.removeChild(wrapper);
	            return new EspalierNode(node);
	        }
	    }, {
	        key: "closest",
	        value: function closest(selector) {
	            var node = this.getNode().parentNode;
	
	            do {
	                if ((0, _helpersMatches2["default"])(node, selector)) {
	                    return node;
	                }
	            } while (node = node.parentNode);
	
	            return null;
	        }
	    }, {
	        key: "html",
	        value: function html(stuff) {
	            this.getNode().innerHTML = "";
	            this.append(stuff);
	        }
	    }, {
	        key: "on",
	        value: function on(event, selector, func) {
	            var node = this.getNode();
	
	            (0, _helpersAddListener2["default"])(node, event, function (e) {
	                var target = e.target;
	
	                while (target && target != node) {
	                    if ((0, _helpersMatches2["default"])(target, selector)) {
	                        func(target);
	                    }
	
	                    target = target.parentNode;
	                }
	            });
	        }
	    }, {
	        key: "remove",
	        value: function remove() {
	            var node = this.getNode();
	
	            if (node.parentNode) {
	                node.parentNode.removeChild(node);
	            }
	        }
	    }, {
	        key: "addClass",
	        value: function addClass(className) {
	            var node = this.getNode();
	
	            if (node.classList) {
	                node.classList.add(className);
	            } else {
	                node.className += ' ' + className;
	            }
	        }
	    }, {
	        key: "removeClass",
	        value: function removeClass(className) {
	            var node = this.getNode();
	
	            if (node.classList) {
	                node.classList.remove(className);
	            } else {
	                node.className = node.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
	            }
	        }
	    }, {
	        key: "repeater",
	        value: function repeater(args) {
	            args.container = this;
	            return new _Repeater2["default"](args);
	        }
	    }, {
	        key: "hide",
	        value: function hide() {
	            internals.get(this).node.style.display = "none";
	        }
	    }, {
	        key: "show",
	        value: function show() {
	            var settings = internals.get(this);
	            settings.node.style.display = settings.originalDisplay;
	        }
	    }]);
	
	    return EspalierNode;
	})();
	
	exports["default"] = EspalierNode;
	module.exports = exports["default"];

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	exports['default'] = function (toTest) {
	    return typeof toTest === 'string' || toTest instanceof String;
	};
	
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	exports['default'] = function (el, eventName, handler) {
	    var handlerRef = undefined;
	
	    if (el.addEventListener) {
	        handlerRef = handler;
	        el.addEventListener(eventName, handler);
	    } else {
	        var wrappedHandler = function wrappedHandler(args) {
	            //IE 8 Support ....
	            //args.target = args.srcElement;
	
	            args.preventDefault = function () {
	                args.cancelBubble = true;
	            };
	
	            args.stopPropagation = function () {
	                args.returnValue = false;
	            };
	
	            handler(args);
	        };
	
	        handlerRef = el.attachEvent('on' + eventName, wrappedHandler);
	    }
	
	    return handlerRef;
	};
	
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports["default"] = function (val) {
	    if (val) {
	        if (val.nodeName) {
	            return val;
	        }
	
	        if (val[0].nodeName) {
	            return val[0];
	        }
	    }
	
	    throw new Error("This was not a single node.");
	};
	
	module.exports = exports["default"];

/***/ },
/* 10 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports["default"] = function (el, selector) {
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
	};
	
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
	
	var _espalierCommon = __webpack_require__(5);
	
	var _espalierCommon2 = _interopRequireDefault(_espalierCommon);
	
	var _espalierDomnode = __webpack_require__(6);
	
	var _espalierDomnode2 = _interopRequireDefault(_espalierDomnode);
	
	var internals = new WeakMap();
	var keys = {
	    settings: "settings",
	    stateField: "stateField"
	};
	
	var Repeater = (function () {
	    function Repeater(args) {
	        var _this = this;
	
	        _classCallCheck(this, Repeater);
	
	        var stateField = undefined;
	        var settings = {
	            container: null,
	            src: null,
	            itemTemplate: null,
	            pageSize: null,
	            page: 1,
	            filter: null,
	            rendered: null,
	            sortBy: "",
	            sortOrder: "",
	            stateFieldId: ""
	        };
	
	        _espalierCommon2["default"].extend(settings, args);
	
	        if (!settings.src) {
	            throw new Error("Please specify a src.");
	        }
	
	        if (!settings.itemTemplate) {
	            throw new Error("Please specify an itemTemplate.");
	        }
	
	        var myInternals = new Map();
	        myInternals.set(keys.settings, settings);
	
	        if (settings.stateFieldId) {
	            stateField = _espalierCommon2["default"].find(settings.stateFieldId)[0];
	            myInternals.set(keys.stateField, stateField);
	        }
	
	        internals.set(this, myInternals);
	
	        settings.container.on("click", "[repeater-action]", function (control) {
	            var action = control.getAttribute("repeater-action");
	
	            switch (action) {
	                case "goto":
	                    var newPage = parseInt(control.getAttribute("data-page"));
	                    var knownPages = settings.src.pages(settings.pageSize);
	
	                    if (newPage < 1 || knownPages > 0 && newPage > knownPages) {
	                        return;
	                    }
	
	                    settings.page = newPage;
	
	                    if (stateField) {
	                        stateField.value = "";
	                    }
	
	                    _this.render();
	                    break;
	                case "sort":
	                    settings.page = 1;
	                    var newSort = control.getAttribute("data-sort-on");
	                    var node = new _espalierDomnode2["default"](control);
	
	                    var _iteratorNormalCompletion = true;
	                    var _didIteratorError = false;
	                    var _iteratorError = undefined;
	
	                    try {
	                        for (var _iterator = _espalierCommon2["default"].find(".sort-desc, .sort-asc")[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                            var existing = _step.value;
	
	                            var existingNode = new _espalierDomnode2["default"](existing);
	                            existingNode.removeClass("sort-asc");
	                            existingNode.removeClass("sort-desc");
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
	
	                    if (settings.sortBy === newSort) {
	                        if (settings.sortOrder === "desc") {
	                            settings.sortBy = "";
	                            settings.sortOrder = "";
	                        } else {
	                            settings.sortOrder = "desc";
	                            node.addClass("sort-desc");
	                        }
	                    } else {
	                        settings.sortOrder = "asc";
	                        settings.sortBy = newSort;
	                        node.addClass("sort-asc");
	                    }
	
	                    if (stateField) {
	                        stateField.value = "";
	                    }
	
	                    _this.render();
	                    break;
	            }
	        });
	
	        this.render();
	    }
	
	    _createClass(Repeater, [{
	        key: "filter",
	        value: function filter(_filter) {
	            var _this2 = this;
	
	            var settings = internals.get(this).get(keys.settings);
	
	            var filterPromise = new Promise(function (resolve) {
	                settings.filter = _filter;
	                settings.page = 1;
	
	                var stateField = internals.get(_this2).get(keys.stateField);
	
	                if (stateField) {
	                    stateField.value = "";
	                }
	
	                _this2.render().then(function () {
	                    resolve();
	                });
	            });
	
	            return filterPromise;
	        }
	    }, {
	        key: "update",
	        value: function update(src) {
	            var _this3 = this;
	
	            var settings = internals.get(this).get(keys.settings);
	
	            var updatePromise = new Promise(function (resolve) {
	                settings.src = src;
	                settings.page = 1;
	
	                var stateField = internals.get(_this3).get(keys.stateField);
	
	                if (stateField) {
	                    stateField.value = "";
	                }
	
	                _this3.render().then(function () {
	                    resolve();
	                });
	            });
	
	            return updatePromise;
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            var settings = internals.get(this).get(keys.settings);
	            var stateField = internals.get(this).get(keys.stateField);
	
	            var navigation = undefined;
	
	            if (stateField && stateField.value) {
	                navigation = JSON.parse(stateField.value);
	            } else {
	                navigation = {
	                    page: settings.page,
	                    pageSize: settings.pageSize,
	                    filter: settings.filter,
	                    sortBy: settings.sortBy,
	                    sortOrder: settings.sortOrder
	                };
	            }
	
	            var renderPromise = new Promise(function (resolve, reject) {
	                settings.src.load(navigation.page, navigation.pageSize, navigation.filter, navigation.sortBy, navigation.sortOrder).then(function (items) {
	                    var itemsHolder = _espalierCommon2["default"].find("[repeater-context=\"items\"]", settings.container);
	
	                    if (itemsHolder.length > 0) {
	                        itemsHolder = new _espalierDomnode2["default"](itemsHolder[0]);
	                    } else {
	                        itemsHolder = settings.container;
	                    }
	
	                    itemsHolder.clear();
	
	                    var _iteratorNormalCompletion2 = true;
	                    var _didIteratorError2 = false;
	                    var _iteratorError2 = undefined;
	
	                    try {
	                        for (var _iterator2 = items[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                            var item = _step2.value;
	
	                            var renderedItem = settings.itemTemplate(item);
	                            itemsHolder.append(renderedItem);
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
	
	                    if (settings.rendered) {
	                        settings.rendered({
	                            page: navigation.page,
	                            pages: settings.src.pages(navigation.pageSize),
	                            pageSize: navigation.pageSize
	                        });
	                    }
	
	                    if (stateField) {
	                        settings.filter = navigation.filter;
	                        stateField.value = JSON.stringify(navigation);
	                    }
	
	                    resolve();
	                });
	            });
	
	            return renderPromise;
	        }
	    }]);
	
	    return Repeater;
	})();
	
	exports["default"] = Repeater;
	;
	module.exports = exports["default"];

/***/ },
/* 12 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var templates = {
	    message: function message(data) {
	        var errorDisplay = "<div class=\"" + data.messageContainerClass + " " + data.messageTypeClass + " " + data.messageAttachmentClass + "\">";
	
	        if (data.showButton) {
	            errorDisplay += "<a href=\"javascript: void(0);\" class=\"" + data.closeMessageClass + "\"></a>";
	        }
	
	        if (data.moreThanOne) {
	            errorDisplay += "<ul>";
	
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;
	
	            try {
	                for (var _iterator = data.messages[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var message = _step.value;
	
	                    errorDisplay += "<li>" + message + "</li>";
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
	
	            errorDisplay += "</ul>";
	        } else {
	            errorDisplay += "<p>" + data.messages + "</p>";
	        }
	
	        errorDisplay += "</div>";
	        return errorDisplay;
	    }
	};
	
	exports["default"] = templates;
	module.exports = exports["default"];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _espalierCommon = __webpack_require__(5);
	
	var _espalierCommon2 = _interopRequireDefault(_espalierCommon);
	
	var _espalierCore = __webpack_require__(3);
	
	var _espalierCore2 = _interopRequireDefault(_espalierCore);
	
	var _espalierDomnode = __webpack_require__(6);
	
	var _espalierDomnode2 = _interopRequireDefault(_espalierDomnode);
	
	var animation = undefined;
	
	if (_espalierCommon2["default"].browserSupportsCSSProperty("animation")) {
	    animation = "<div class=\"sk-folding-cube\">\n  <div class=\"sk-cube1 sk-cube\"></div>\n  <div class=\"sk-cube2 sk-cube\"></div>\n  <div class=\"sk-cube4 sk-cube\"></div>\n  <div class=\"sk-cube3 sk-cube\"></div>\n</div>";
	} else {
	    animation = "<div class=\"fallback\">\n  <div></div>\n</div>";
	}
	
	var pleaseWaitDiv = new _espalierDomnode2["default"]("<div class=\"wait-screen\"><div>" + animation + "</div></div>");
	var showing = false;
	
	var showVellum = function showVellum() {
	    if (_espalierCommon2["default"].find(".wait-vellum").length > 0) {
	        return;
	    }
	
	    _espalierCommon2["default"].body.append("<div class=\"vellum wait-vellum\" />");
	};
	
	var hideVellum = function hideVellum() {
	    var vellum = _espalierCommon2["default"].find(".wait-vellum");
	
	    if (vellum.length > 0) {
	        vellum[0].parentNode.removeChild(vellum[0]);
	    }
	};
	
	exports["default"] = {
	    show: function show() {
	        if (showing) {
	            return pleaseWaitDiv.getNode();
	        }
	
	        showVellum();
	        _espalierCommon2["default"].body.append(pleaseWaitDiv.getNode());
	        showing = true;
	        return pleaseWaitDiv.getNode();
	    },
	    hide: function hide() {
	        if (showing) {
	            hideVellum();
	            var pleaseWait = pleaseWaitDiv.getNode();
	            pleaseWait.parentNode.removeChild(pleaseWait);
	            showing = false;
	        }
	    }
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
	
	var _espalierMessageFactory = __webpack_require__(4);
	
	var _espalierMessageFactory2 = _interopRequireDefault(_espalierMessageFactory);
	
	var _espalierCommon = __webpack_require__(5);
	
	var _espalierCommon2 = _interopRequireDefault(_espalierCommon);
	
	var _helpersMainMessage = __webpack_require__(15);
	
	var _helpersMainMessage2 = _interopRequireDefault(_helpersMainMessage);
	
	var _pubsubJs = __webpack_require__(16);
	
	var _pubsubJs2 = _interopRequireDefault(_pubsubJs);
	
	var internals = new WeakMap();
	
	var ajaxSuccess = function ajaxSuccess(responseText, event, onSuccess) {
	    var jsonResponse = JSON.parse(responseText);
	
	    if (event) {
	        _pubsubJs2["default"].publish(event, JSON.parse(jsonResponse));
	    }
	
	    if (onSuccess) {
	        onSuccess(jsonResponse);
	    }
	
	    return jsonResponse;
	};
	
	var AjaxRequest = (function () {
	    function AjaxRequest(ajaxSettings) {
	        _classCallCheck(this, AjaxRequest);
	
	        internals.set(this, {
	            request: new Promise(function (resolve, reject) {
	                var request = new XMLHttpRequest();
	                var origin = (window.location.protocol + "//" + window.location.host).toLowerCase();
	                var isCors = (ajaxSettings.url.slice(0, 7).toLowerCase() === "http://" || ajaxSettings.url.slice(0, 8).toLowerCase() === "https://") && ajaxSettings.url.slice(0, origin.length).toLowerCase() !== origin;
	
	                if (isCors && ajaxSettings.withCredentials) {
	                    if ("withCredentials" in request) {
	                        request.open(ajaxSettings.type, ajaxSettings.url, true);
	                        request.withCredentials = true;
	                    } else if (typeof XDomainRequest != "undefined") {
	                        request = new XDomainRequest();
	                        request.open(ajaxSettings.type, ajaxSettings.url);
	                        request.onload = function () {
	                            resolve(ajaxSuccess(this.responseText, ajaxSettings.event, ajaxSettings.onSuccess));
	                        };
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
	                            var jsonResponse = JSON.parse(this.responseText);
	                            reject(jsonResponse.Message);
	                        } else {
	                            var jsonResponse = JSON.parse(this.responseText);
	                            var errors = [];
	                            var specificErrors = new Map();
	
	                            var _iteratorNormalCompletion = true;
	                            var _didIteratorError = false;
	                            var _iteratorError = undefined;
	
	                            try {
	                                for (var _iterator = jsonResponse.errors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                                    var error = _step.value;
	
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
	
	                            var _iteratorNormalCompletion2 = true;
	                            var _didIteratorError2 = false;
	                            var _iteratorError2 = undefined;
	
	                            try {
	                                for (var _iterator2 = specificErrors.keys()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                                    var fieldKey = _step2.value;
	
	                                    var specificControl = _espalierCommon2["default"].find("#" + fieldKey.toLowerCase())[0];
	                                    var formControl = _espalierCommon2["default"].controls.get(specificControl);
	
	                                    if (formControl) {
	                                        var fieldMessage = formControl.message;
	
	                                        if (fieldMessage) {
	                                            fieldMessage.show({
	                                                message: specificErrors.get(fieldKey),
	                                                messageType: _espalierMessageFactory2["default"].messageType.Error
	                                            });
	                                        }
	                                    } else {
	                                        errors = errors.concat(specificErrors.get(fieldKey));
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
	
	                            if (errors.length > 0) {
	                                _helpersMainMessage2["default"].showError(errors);
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
	
	    _createClass(AjaxRequest, [{
	        key: "send",
	        value: function send() {
	            return internals.get(this).request;
	        }
	    }]);
	
	    return AjaxRequest;
	})();
	
	exports["default"] = AjaxRequest;
	module.exports = exports["default"];

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _espalierMessageFactory = __webpack_require__(4);
	
	var _espalierMessageFactory2 = _interopRequireDefault(_espalierMessageFactory);
	
	var _espalierCommon = __webpack_require__(5);
	
	var _espalierCommon2 = _interopRequireDefault(_espalierCommon);
	
	var mainMessage = _espalierMessageFactory2["default"].create({
	    attachTo: _espalierCommon2["default"].body.getNode()
	});
	
	exports["default"] = {
	    showWarning: function showWarning(messages) {
	        mainMessage.show({
	            message: messages,
	            messageType: _espalierMessageFactory2["default"].messageType.Warning,
	            showButton: true
	        });
	    },
	    showError: function showError(messages) {
	        mainMessage.show({
	            message: messages,
	            messageType: _espalierMessageFactory2["default"].messageType.Error,
	            showButton: true
	        });
	    },
	    showInfo: function showInfo(messages) {
	        mainMessage.show({
	            message: messages,
	            messageType: _espalierMessageFactory2["default"].messageType.Info,
	            showButton: true
	        });
	    },
	    hideMainMessage: function hideMainMessage() {
	        mainMessage.remove();
	    }
	};
	module.exports = exports["default"];

/***/ },
/* 16 */
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
		}
	
		// Browser globals
		var PubSub = {};
		root.PubSub = PubSub;
		factory(PubSub);
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
/* 17 */
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
	
	var _espalierCommon = __webpack_require__(5);
	
	var _espalierCommon2 = _interopRequireDefault(_espalierCommon);
	
	var _espalierFormsControl = __webpack_require__(18);
	
	var _espalierFormsControl2 = _interopRequireDefault(_espalierFormsControl);
	
	var keys = {
	    controls: new Object()
	};
	
	var EspalierForm = (function () {
	    function EspalierForm(formToWire, args) {
	        var _this = this;
	
	        _classCallCheck(this, EspalierForm);
	
	        this._internals = new WeakMap();
	
	        if (_espalierCore2["default"].isString(formToWire)) {
	            this.form = _espalierCore2["default"].find(formToWire)[0];
	        } else if (_espalierCommon2["default"].isElement(formToWire)) {
	            this.form = formToWire;
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
	
	        var controls = new Map();
	        this._internals.set(keys.controls, controls);
	        var processedControls = new Set();
	        var rawControls = _espalierCore2["default"].find("input, textarea, select", this.form);
	
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;
	
	        try {
	            for (var _iterator = rawControls[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                var control = _step.value;
	
	                _espalierCore2["default"].addEventListener(control, "keypress", onEnter);
	                var controlType = control.type ? control.type : control.getAttribute("type");
	                var lowerCaseId = controlType == "radio" ? control.name.toLowerCase() : control.id.toLowerCase();
	
	                if (processedControls.has(lowerCaseId)) {
	                    continue;
	                }
	
	                processedControls.add(lowerCaseId);
	
	                if (lowerCaseId || (control.type ? control.type : control.getAttribute("type")) == "radio") {
	                    var espControl = (0, _espalierFormsControl2["default"])(control, this);
	                    controls.set(espControl.getName(), espControl);
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
	
	                if (el.select) {
	                    el.select();
	                }
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
	        key: "getControl",
	        value: function getControl(name) {
	            var controls = this._internals.get(keys.controls);
	            return controls.get(name);
	        }
	    }, {
	        key: "removeControl",
	        value: function removeControl(name) {
	            this._internals.get(keys.controls)["delete"](name);
	        }
	    }, {
	        key: "addControl",
	        value: function addControl(name, control) {
	            this._internals.get(keys.controls).set(name, control);
	        }
	    }, {
	        key: "submit",
	        value: function submit() {
	            var _this2 = this;
	
	            if (this.options.submit && !this.options.submit()) {
	                return;
	            }
	
	            if (this.options.submit || this.validate()) {
	                var method = this.form.getAttribute("method");
	
	                _espalierCore2["default"].sendRequest({
	                    type: method ? method : "GET",
	                    url: this.form.getAttribute("action"),
	                    data: this.value()
	                }).then(function (data) {
	                    var onSuccess = _this2.form.getAttribute("data-success");
	
	                    if (onSuccess) {
	                        _espalierCore2["default"].publish(onSuccess, data);
	                    }
	                })["catch"](function (error) {
	                    if (_this2.options.onError) {
	                        _this2.options.onError(error);
	                    }
	                });
	            }
	        }
	    }, {
	        key: "value",
	        value: function value() {
	            var value = {};
	
	            var _iteratorNormalCompletion4 = true;
	            var _didIteratorError4 = false;
	            var _iteratorError4 = undefined;
	
	            try {
	                for (var _iterator4 = this._internals.get(keys.controls).values()[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	                    var control = _step4.value;
	
	                    _espalierCore2["default"].setProperty(value, control.getName(), control.val());
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
	
	            return value;
	        }
	    }, {
	        key: "validate",
	        value: function validate() {
	            var valid = true;
	
	            var _iteratorNormalCompletion5 = true;
	            var _didIteratorError5 = false;
	            var _iteratorError5 = undefined;
	
	            try {
	                for (var _iterator5 = this._internals.get(keys.controls).values()[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	                    var control = _step5.value;
	
	                    if (!control.message) continue;
	
	                    if (!control.validate()) {
	                        valid = false;
	                    }
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
	
	            return valid;
	        }
	    }, {
	        key: "toJSON",
	        value: function toJSON() {
	            //TODO: http://stackoverflow.com/questions/8330126/how-to-completely-convert-query-string-into-json-object
	            throw new Error("This hasn't been implemented yet.");
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
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _espalierCore = __webpack_require__(3);
	
	var _espalierCore2 = _interopRequireDefault(_espalierCore);
	
	var _espalierCommon = __webpack_require__(5);
	
	var _espalierCommon2 = _interopRequireDefault(_espalierCommon);
	
	var _configIndex = __webpack_require__(19);
	
	var _configIndex2 = _interopRequireDefault(_configIndex);
	
	var _espalierValidation = __webpack_require__(27);
	
	var _espalierMessageFactory = __webpack_require__(4);
	
	var _espalierMessageFactory2 = _interopRequireDefault(_espalierMessageFactory);
	
	var _espalierDomnode = __webpack_require__(6);
	
	var _espalierDomnode2 = _interopRequireDefault(_espalierDomnode);
	
	var internals = new WeakMap();
	
	var FormControl = (function (_DomNode) {
	    _inherits(FormControl, _DomNode);
	
	    function FormControl(control, form, validations, explicitValidations) {
	        _classCallCheck(this, FormControl);
	
	        _get(Object.getPrototypeOf(FormControl.prototype), "constructor", this).call(this, control, form);
	
	        var controlType = control.type ? control.type : control.getAttribute("type");
	        var lowerCaseId = controlType == "radio" ? control.name.toLowerCase() : control.id.toLowerCase();
	
	        if (!lowerCaseId) {
	            throw new Error("Elements must have an Id to be properly wired to an Espalier form control.");
	        }
	
	        if (!form) {
	            throw new Error("Controls must be associated with an Espalier Form.");
	        }
	
	        var settings = {
	            control: control,
	            form: form,
	            group: undefined
	        };
	
	        internals.set(this, settings);
	
	        var required = false;
	        var dependents = new Map();
	        var dependentListeners = undefined;
	
	        control.setAttribute(lowerCaseId, "");
	
	        switch (controlType) {
	            case "radio":
	                settings.group = _espalierCore2["default"].closest(control, ".radio-group");
	                dependentListeners = Array.from(_espalierCore2["default"].find('input[type="radio"]', settings.group));
	
	                var _iteratorNormalCompletion = true;
	                var _didIteratorError = false;
	                var _iteratorError = undefined;
	
	                try {
	                    for (var _iterator = dependentListeners[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                        var radio = _step.value;
	
	                        if (radio.required || radio.getAttribute("required")) {
	                            required = true;
	                        }
	
	                        var requiredDependentsSelector = radio.getAttribute("data-require");
	
	                        if (!requiredDependentsSelector) {
	                            continue;
	                        }
	
	                        var requiredDependents = _espalierCore2["default"].find(requiredDependentsSelector, settings.form.form);
	                        var dependentControls = [];
	                        var addedNames = new Set();
	
	                        var _iteratorNormalCompletion2 = true;
	                        var _didIteratorError2 = false;
	                        var _iteratorError2 = undefined;
	
	                        try {
	                            for (var _iterator2 = requiredDependents[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                                var requiredDependent = _step2.value;
	
	                                if (addedNames.has(requiredDependent.name)) continue;
	                                var dependentControl = factory(requiredDependent, form, { required: true });
	                                dependentControl.hide();
	                                dependentControls.push(dependentControl);
	                                addedNames.add(requiredDependent.name);
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
	
	                        dependents.set(radio.value, dependentControls);
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
	                //TODO: Make checkboxes work better.
	                //      See if there are other checkboxes with the same name.
	                //      Should support syntax:
	                // form.getControl("checkbox-name").val();
	                settings.group = _espalierCore2["default"].closest(control, ".checkbox");
	                break;
	            case "email":
	                validations.push(new _espalierValidation.Email(this));
	                settings.group = _espalierCore2["default"].closest(control, ".form-group");
	                break;
	            case "tel":
	                validations.push(new _espalierValidation.Phone(this));
	                settings.group = _espalierCore2["default"].closest(control, ".form-group");
	                break;
	            case "date":
	                validations.push(new _espalierValidation.Date(this));
	                settings.group = _espalierCore2["default"].closest(control, ".form-group");
	
	                if (control.datepicker) {
	                    control.datepicker().attr("type", "text");
	                }
	                break;
	            case "hidden":
	                return;
	            case "select-one":
	                settings.group = _espalierCore2["default"].closest(control, ".form-group");
	
	                var options = _espalierCore2["default"].find("option", control);
	                dependentListeners = [control];
	
	                var _iteratorNormalCompletion3 = true;
	                var _didIteratorError3 = false;
	                var _iteratorError3 = undefined;
	
	                try {
	                    for (var _iterator3 = options[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                        var option = _step3.value;
	
	                        var requiredDependentsSelector = option.getAttribute("data-require");
	
	                        if (!requiredDependentsSelector) {
	                            continue;
	                        }
	
	                        var requiredDependents = _espalierCore2["default"].find(requiredDependentsSelector, this.form);
	                        var dependentControls = [];
	
	                        var _iteratorNormalCompletion4 = true;
	                        var _didIteratorError4 = false;
	                        var _iteratorError4 = undefined;
	
	                        try {
	                            for (var _iterator4 = requiredDependents[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
	                                var requiredDependent = _step4.value;
	
	                                var dependentControl = factory(requiredDependent, form, { required: true });
	                                dependentControl.hide();
	                                dependentControls.push(dependentControl);
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
	
	                        dependents.set(option.value, dependentControls);
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
	
	                break;
	            default:
	                settings.group = _espalierCore2["default"].closest(control, ".form-group");
	                break;
	        }
	
	        this.message = _espalierMessageFactory2["default"].create({
	            attachTo: settings.group,
	            messageAttachment: _espalierMessageFactory2["default"].messageAttachment.Flow,
	            onRemoved: function onRemoved() {
	                _espalierCore2["default"].removeClass(settings.group, "has-error");
	            },
	            onAdded: function onAdded() {
	                _espalierCore2["default"].addClass(settings.group, "has-error");
	                _configIndex2["default"].fieldMessageAnimation(settings.group);
	            }
	        });
	
	        settings.originalDisplay = settings.group.style.display;
	
	        if (explicitValidations.required || required || control.required || control.getAttribute("required")) {
	            validations.push(new _espalierValidation.Required(this));
	            _espalierCore2["default"].addClass(settings.group, "required");
	        }
	
	        var thisControl = this;
	
	        if (dependents.size > 0) {
	            var processDependents = function processDependents() {
	                var _iteratorNormalCompletion5 = true;
	                var _didIteratorError5 = false;
	                var _iteratorError5 = undefined;
	
	                try {
	                    for (var _iterator5 = dependents.keys()[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
	                        var key = _step5.value;
	
	                        if (key == thisControl.val()) {
	                            var _iteratorNormalCompletion6 = true;
	                            var _didIteratorError6 = false;
	                            var _iteratorError6 = undefined;
	
	                            try {
	                                for (var _iterator6 = dependents.get(thisControl.val())[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
	                                    var dependent = _step6.value;
	
	                                    dependent.show();
	                                    form.addControl(dependent.getNode().name, dependent);
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
	                        } else {
	                            var _iteratorNormalCompletion7 = true;
	                            var _didIteratorError7 = false;
	                            var _iteratorError7 = undefined;
	
	                            try {
	                                for (var _iterator7 = dependents.get(key)[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
	                                    var dependent = _step7.value;
	
	                                    dependent.hide();
	                                    form.removeControl(dependent.getNode().name);
	                                }
	                            } catch (err) {
	                                _didIteratorError7 = true;
	                                _iteratorError7 = err;
	                            } finally {
	                                try {
	                                    if (!_iteratorNormalCompletion7 && _iterator7["return"]) {
	                                        _iterator7["return"]();
	                                    }
	                                } finally {
	                                    if (_didIteratorError7) {
	                                        throw _iteratorError7;
	                                    }
	                                }
	                            }
	                        }
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
	            };
	
	            var _iteratorNormalCompletion8 = true;
	            var _didIteratorError8 = false;
	            var _iteratorError8 = undefined;
	
	            try {
	                for (var _iterator8 = dependentListeners[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
	                    var listener = _step8.value;
	
	                    _espalierCore2["default"].addEventListener(listener, "change", processDependents.bind(this));
	                }
	            } catch (err) {
	                _didIteratorError8 = true;
	                _iteratorError8 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion8 && _iterator8["return"]) {
	                        _iterator8["return"]();
	                    }
	                } finally {
	                    if (_didIteratorError8) {
	                        throw _iteratorError8;
	                    }
	                }
	            }
	
	            processDependents();
	        }
	    }
	
	    _createClass(FormControl, [{
	        key: "getName",
	        value: function getName() {
	            return internals.get(this).control.name;
	        }
	    }, {
	        key: "val",
	        value: function val() {
	            //TODO: Allow people to set the value.
	            var control = internals.get(this).control;
	            var controlType = control.type ? control.type : control.getAttribute("type");
	
	            switch (controlType) {
	                case "checkbox":
	                    return _espalierCore2["default"].matches(control, ":checked");
	                case "radio":
	                    var radios = _espalierCore2["default"].find("[name=\"" + control.name + "\"]");
	
	                    //Loop through these instead of using the :checked selector...
	                    var _iteratorNormalCompletion9 = true;
	                    var _didIteratorError9 = false;
	                    var _iteratorError9 = undefined;
	
	                    try {
	                        for (var _iterator9 = radios[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
	                            var radio = _step9.value;
	
	                            if (radio.checked) {
	                                return radio.value;
	                            }
	                        }
	                    } catch (err) {
	                        _didIteratorError9 = true;
	                        _iteratorError9 = err;
	                    } finally {
	                        try {
	                            if (!_iteratorNormalCompletion9 && _iterator9["return"]) {
	                                _iterator9["return"]();
	                            }
	                        } finally {
	                            if (_didIteratorError9) {
	                                throw _iteratorError9;
	                            }
	                        }
	                    }
	
	                    return undefined;
	                default:
	                    return control.value;
	            }
	        }
	    }, {
	        key: "hide",
	        value: function hide() {
	            internals.get(this).group.style.display = "none";
	        }
	    }, {
	        key: "show",
	        value: function show() {
	            var myInternals = internals.get(this);
	            myInternals.group.style.display = myInternals.originalDisplay;
	        }
	    }, {
	        key: "disable",
	        value: function disable() {
	            internals.get(this).control.setAttribute("disabled", true);
	        }
	    }, {
	        key: "enable",
	        value: function enable() {
	            internals.get(this).control.removeAttribute("disabled");
	        }
	    }, {
	        key: "clear",
	        value: function clear() {
	            internals.get(this).control.value = "";
	        }
	    }]);
	
	    return FormControl;
	})(_espalierDomnode2["default"]);
	
	var factory = function factory(control, form, explicitValidations) {
	    explicitValidations = explicitValidations ? explicitValidations : {};
	    var validations = [];
	    var formControl = new FormControl(control, form, validations, explicitValidations);
	
	    formControl.validate = function () {
	        var errors = [];
	        var hasErrors = false;
	
	        if (validations) {
	            var _iteratorNormalCompletion10 = true;
	            var _didIteratorError10 = false;
	            var _iteratorError10 = undefined;
	
	            try {
	                for (var _iterator10 = validations[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
	                    var validation = _step10.value;
	
	                    if (!validation.isValid()) {
	                        hasErrors = true;
	                        var message = validation.getMessage();
	
	                        if (message) {
	                            errors.push(message);
	                        }
	                    }
	                }
	            } catch (err) {
	                _didIteratorError10 = true;
	                _iteratorError10 = err;
	            } finally {
	                try {
	                    if (!_iteratorNormalCompletion10 && _iterator10["return"]) {
	                        _iterator10["return"]();
	                    }
	                } finally {
	                    if (_didIteratorError10) {
	                        throw _iteratorError10;
	                    }
	                }
	            }
	        }
	
	        if (errors.length > 0) {
	            formControl.message.show({
	                message: errors,
	                messageType: _espalierMessageFactory2["default"].messageType.Error,
	                showButton: false
	            });
	        } else {
	            formControl.message.remove();
	        }
	
	        return !hasErrors;
	    };
	
	    _espalierCore2["default"].addEventListener(control, "blur", function () {
	        setTimeout(function () {
	            formControl.validate();
	        }, 150);
	    });
	
	    _espalierCommon2["default"].controls.set(formControl.getNode(), formControl);
	    return formControl;
	};
	
	exports["default"] = factory;
	module.exports = exports["default"];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _fieldMessageAnimation = __webpack_require__(20);
	
	var _fieldMessageAnimation2 = _interopRequireDefault(_fieldMessageAnimation);
	
	var _fixedMessageAnimation = __webpack_require__(22);
	
	var _fixedMessageAnimation2 = _interopRequireDefault(_fixedMessageAnimation);
	
	var _showDialogAnimation = __webpack_require__(23);
	
	var _showDialogAnimation2 = _interopRequireDefault(_showDialogAnimation);
	
	var _hideDialogAnimation = __webpack_require__(24);
	
	var _hideDialogAnimation2 = _interopRequireDefault(_hideDialogAnimation);
	
	var _showPopoverAnimation = __webpack_require__(25);
	
	var _showPopoverAnimation2 = _interopRequireDefault(_showPopoverAnimation);
	
	var _hidePopoverAnimation = __webpack_require__(26);
	
	var _hidePopoverAnimation2 = _interopRequireDefault(_hidePopoverAnimation);
	
	exports["default"] = {
	    fieldMessageAnimation: _fieldMessageAnimation2["default"],
	    fixedMessageAnimation: _fixedMessageAnimation2["default"],
	    showDialogAnimation: _showDialogAnimation2["default"],
	    hideDialogAnimation: _hideDialogAnimation2["default"],
	    showPopoverAnimation: _showPopoverAnimation2["default"],
	    hidePopoverAnimation: _hidePopoverAnimation2["default"]
	};
	module.exports = exports["default"];

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _fadeIn = __webpack_require__(21);
	
	var _fadeIn2 = _interopRequireDefault(_fadeIn);
	
	exports["default"] = function (el) {
	    (0, _fadeIn2["default"])(el);
	};
	
	module.exports = exports["default"];

/***/ },
/* 21 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports["default"] = function (el) {
	    var opacity = 0;
	
	    el.style.opacity = 0;
	
	    if (el.style.display == "none") {
	        el.style.display = "block";
	    }
	
	    el.style.filter = '';
	
	    var last = +new Date();
	    var tick = function tick() {
	        opacity += (new Date() - last) / 400;
	        el.style.opacity = opacity;
	        el.style.filter = "alpha(opacity=\"" + (100 * opacity | 0) + "\")";
	
	        last = +new Date();
	
	        if (opacity < 1) {
	            window.requestAnimationFrame && requestAnimationFrame(tick) || setTimeout(tick, 16);
	        }
	    };
	
	    tick();
	};
	
	module.exports = exports["default"];

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _fadeIn = __webpack_require__(21);
	
	var _fadeIn2 = _interopRequireDefault(_fadeIn);
	
	exports["default"] = function (el) {
	    (0, _fadeIn2["default"])(el);
	};
	
	module.exports = exports["default"];

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _fadeIn = __webpack_require__(21);
	
	var _fadeIn2 = _interopRequireDefault(_fadeIn);
	
	exports["default"] = function (el) {
	    (0, _fadeIn2["default"])(el);
	};
	
	module.exports = exports["default"];

/***/ },
/* 24 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports["default"] = function (el) {
	    el.remove();
	};
	
	module.exports = exports["default"];

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _fadeIn = __webpack_require__(21);
	
	var _fadeIn2 = _interopRequireDefault(_fadeIn);
	
	exports["default"] = function (el) {
	    (0, _fadeIn2["default"])(el);
	};
	
	module.exports = exports["default"];

/***/ },
/* 26 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	exports["default"] = function (el) {
	    el.remove();
	};
	
	module.exports = exports["default"];

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _espalierCore = __webpack_require__(3);
	
	var _espalierCore2 = _interopRequireDefault(_espalierCore);
	
	var _espalierFormsControl = __webpack_require__(18);
	
	var _espalierFormsControl2 = _interopRequireDefault(_espalierFormsControl);
	
	var Validation = function Validation(control) {
	    _classCallCheck(this, Validation);
	
	    if (!_espalierCore2["default"].isFunction(this.isValid)) {
	        throw new TypeError("Must have an isValid method.");
	    }
	
	    if (!_espalierCore2["default"].isFunction(this.getMessage)) {
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
	        key: "getMessage",
	        value: function getMessage() {
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
	        key: "getMessage",
	        value: function getMessage() {
	            return "Invalid email address.";
	        }
	    }]);
	
	    return Email;
	})(Validation);
	
	var Phone = (function (_Validation3) {
	    _inherits(Phone, _Validation3);
	
	    function Phone(control) {
	        _classCallCheck(this, Phone);
	
	        _get(Object.getPrototypeOf(Phone.prototype), "constructor", this).call(this, control);
	    }
	
	    _createClass(Phone, [{
	        key: "isValid",
	        value: function isValid() {
	            return _espalierCore2["default"].isPhone(this.control.val());
	        }
	    }, {
	        key: "getMessage",
	        value: function getMessage() {
	            return "Invalid phone number.";
	        }
	    }]);
	
	    return Phone;
	})(Validation);
	
	var Date = (function (_Validation4) {
	    _inherits(Date, _Validation4);
	
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
	        key: "getMessage",
	        value: function getMessage() {
	            return "Invalid date.";
	        }
	    }]);
	
	    return Date;
	})(Validation);
	
	exports.Required = Required;
	exports.Email = Email;
	exports.Phone = Phone;
	exports.Date = Date;

/***/ },
/* 28 */
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
	
	var _espalierWaitscreen = __webpack_require__(13);
	
	var _espalierWaitscreen2 = _interopRequireDefault(_espalierWaitscreen);
	
	var _espalierCommon = __webpack_require__(5);
	
	var _espalierCommon2 = _interopRequireDefault(_espalierCommon);
	
	var _espalierCore = __webpack_require__(3);
	
	var _espalierCore2 = _interopRequireDefault(_espalierCore);
	
	var _espalierDomnode = __webpack_require__(6);
	
	var _espalierDomnode2 = _interopRequireDefault(_espalierDomnode);
	
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
	            table.settings.renderedCallback(table.settings.container.getNode().getElementsByTagName("table")[0]);
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
	
	        args.container = new _espalierDomnode2["default"](args.container);
	
	        _espalierCommon2["default"].extend(this.settings, args);
	
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
	
	        _espalierCommon2["default"].extend(this.settings, args);
	
	        var table = this;
	
	        this.settings.container.on("click", ".espalier-table-button", function (el) {
	            table.goToPage(el.getAttribute("data-page"));
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
	            page = Number(page);
	
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
/* 29 */
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
	
	var _configIndex = __webpack_require__(19);
	
	var _configIndex2 = _interopRequireDefault(_configIndex);
	
	var _espalierCommon = __webpack_require__(5);
	
	var _espalierCommon2 = _interopRequireDefault(_espalierCommon);
	
	var _espalierDomnode = __webpack_require__(6);
	
	var _espalierDomnode2 = _interopRequireDefault(_espalierDomnode);
	
	var _center = function _center(dialog) {
	    var windowHeight = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight;
	    var scrollTop = window.scrollY ? window.scrollY : document.documentElement.scrollTop;
	    var height = dialog.offsetHeight;
	    var top = windowHeight / 2 - height / 2 + scrollTop;
	    top = top > 0 ? top : 0;
	    dialog.style.top = top + "px";
	};
	
	var showVellum = function showVellum() {
	    if (_espalierCommon2["default"].find(".dialog-vellum").length > 0) {
	        return;
	    }
	
	    _espalierCommon2["default"].body.append("<div class=\"vellum dialog-vellum\" />");
	};
	
	var hideVellum = function hideVellum() {
	    var vellum = _espalierCommon2["default"].find(".dialog-vellum");
	
	    if (vellum.length > 0) {
	        vellum[0].parentNode.removeChild(vellum[0]);
	    }
	};
	
	var Dialog = (function () {
	    function Dialog(args) {
	        _classCallCheck(this, Dialog);
	
	        this.settings = {
	            element: undefined,
	            buttons: []
	        };
	
	        _espalierCommon2["default"].extend(this.settings, args);
	
	        if (!this.settings.element) {
	            throw new Error("You must pass an element.");
	        }
	
	        this.settings.element = new _espalierDomnode2["default"](this.settings.element);
	        this.settings.element.addClass("dialog");
	    }
	
	    _createClass(Dialog, [{
	        key: "show",
	        value: function show() {
	            var _this = this;
	
	            _espalierCore2["default"].hideMainMessage();
	            showVellum();
	            var dialog = this.settings.element.getNode();
	
	            dialog.style.position = "absolute";
	            _espalierCommon2["default"].body.append(dialog);
	            _center(dialog);
	            dialog.style.display = "none";
	
	            _configIndex2["default"].showDialogAnimation(dialog);
	
	            _espalierCore2["default"].addEventListener(dialog, "click", function (event) {
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
	            var dialog = this.settings.element;
	            _configIndex2["default"].hideDialogAnimation(dialog);
	
	            if (_espalierCommon2["default"].find(".dialog").length == 0) {
	                hideVellum();
	            }
	
	            return this;
	        }
	    }, {
	        key: "center",
	        value: function center() {
	            _center(this.settings.element.getNode());
	        }
	    }]);
	
	    return Dialog;
	})();
	
	exports["default"] = function (args) {
	    return new Dialog(args);
	};
	
	module.exports = exports["default"];

/***/ },
/* 30 */
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
	
	var _configIndex = __webpack_require__(19);
	
	var _configIndex2 = _interopRequireDefault(_configIndex);
	
	var _espalierCommon = __webpack_require__(5);
	
	var _espalierCommon2 = _interopRequireDefault(_espalierCommon);
	
	var _espalierDomnode = __webpack_require__(6);
	
	var _espalierDomnode2 = _interopRequireDefault(_espalierDomnode);
	
	function reposition(obj) {
	    var pos = obj.settings.position;
	    var popover = obj.settings.element;
	    popover.addClass("popover-" + pos);
	}
	
	function isDescendant(parent, child) {
	    var node = child.parentNode;
	    while (node != null) {
	        if (node == parent) {
	            return true;
	        }
	        node = node.parentNode;
	    }
	    return false;
	}
	
	function copyPositionalData(fromNode, toNode) {
	    var fromCss = fromNode.style.cssFloat;
	    var fromTop = fromNode.style.top;
	    var fromBottom = fromNode.style.bottom;
	    var fromLeft = fromNode.style.right;
	    var fromRight = fromNode.style.left;
	
	    toNode.style.cssFloat = fromCss;
	    toNode.style.top = fromTop;
	    toNode.style.bottom = fromBottom;
	    toNode.style.left = fromLeft;
	    toNode.style.right = fromRight;
	}
	
	var Popover = (function () {
	    function Popover(args) {
	        _classCallCheck(this, Popover);
	
	        this.settings = {
	            element: undefined,
	            position: undefined,
	            parent: undefined
	        };
	
	        _espalierCommon2["default"].extend(this.settings, args);
	        this.hideEventHandler = undefined;
	        this.isPoppedUp = false;
	
	        if (!this.settings.element) {
	            throw new Error("You must pass an element.");
	        }
	
	        if (!this.settings.parent) {
	            throw new Error("You must pass a parent element.");
	        }
	        this.position = this.position === undefined ? "bottom-right" : this.position;
	        this.settings.element = new _espalierDomnode2["default"](this.settings.element);
	        this.settings.parent = new _espalierDomnode2["default"](this.settings.parent);
	    }
	
	    _createClass(Popover, [{
	        key: "show",
	        value: function show() {
	            var _this = this;
	
	            var popoverNode = this.settings.element;
	            var parentNode = this.settings.parent;
	
	            if (parentNode.getNode().parentNode.classList.contains('popover-wrapper')) {
	                return this;
	            }
	            var wrapperNode = parentNode.wrapIn("span");
	            copyPositionalData(parentNode.getNode(), wrapperNode.getNode());
	
	            if (this.settings.hideEventHandler === undefined) {
	                _espalierCore2["default"].hideMainMessage();
	                wrapperNode.append(popoverNode.getNode());
	                wrapperNode.addClass("popover-wrapper");
	
	                reposition(this);
	
	                popoverNode.getNode().style.visibility = "visible";
	                popoverNode.addClass("popover");
	
	                this.hideEventHandler = _espalierCore2["default"].addEventListener(document, "click", function (event) {
	                    var target = event.target;
	                    var shouldKeep = isDescendant(wrapperNode.getNode(), target);
	                    if (!shouldKeep && _this.isPoppedUp && target !== wrapperNode.getNode()) {
	                        _this.hide();
	                    }
	                    //this clicks through the first time, ignore that one. (race issue?)
	                    _this.isPoppedUp = true;
	                });
	            }
	
	            return this;
	        }
	    }, {
	        key: "hide",
	        value: function hide() {
	            var popover = this.settings.element;
	            var parent = this.settings.parent;
	
	            popover.getNode().style.visibility = "none";
	            parent.unwrap();
	
	            if (this.hideEventHandler !== undefined) {
	                document.removeEventListener("click", this.hideEventHandler, false);
	            }
	            return this;
	        }
	    }]);
	
	    return Popover;
	})();
	
	exports["default"] = Popover;
	module.exports = exports["default"];

/***/ },
/* 31 */
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
	
	var _helpersSingleOrError = __webpack_require__(9);
	
	var _helpersSingleOrError2 = _interopRequireDefault(_helpersSingleOrError);
	
	var internals = new WeakMap();
	
	var handleNavigation = function handleNavigation(graph, graphEvent, index) {
	    switch (graphEvent) {
	        case "next":
	            graph.next();
	            return;
	        case "back":
	            graph.previous();
	            return;
	        case "goto":
	            graph.goto(index);
	            return;
	    }
	};
	
	var render = function render(graph) {
	    var graphInternals = internals.get(graph);
	
	    if (graphInternals.node.getTitle) {
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;
	
	        try {
	            for (var _iterator = graphInternals.steps[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                var step = _step.value;
	
	                step.cssClass = "graph-step-completed";
	                step.status = "Completed";
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
	
	        var titleInfo = graphInternals.node.getTitle();
	
	        if (titleInfo) {
	            graphInternals.steps.push({
	                cssClass: "graph-step-in-progress",
	                status: "In progress",
	                title: titleInfo.title,
	                key: titleInfo.key,
	                node: graphInternals.node
	            });
	
	            graphInternals.knownTitleKeys.add(titleInfo.key);
	        }
	    }
	
	    var currentEvent = graphInternals.nodeSubsciption;
	
	    if (currentEvent) {
	        _espalierCore2["default"].unsubscribe(currentEvent);
	    }
	
	    graphInternals.nodeSubsciption = _espalierCore2["default"].subscribe(graphInternals.node, function (graphEvent) {
	        handleNavigation(graph, graphEvent, -1);
	    });
	
	    graphInternals.node.renderIn(graphInternals.container, graphInternals.result, graphInternals.steps).then(function () {
	        var valueChanged = graphInternals.onValueChanged;
	
	        if (valueChanged) {
	            valueChanged(graphInternals.result);
	        }
	    });
	};
	
	var Graph = (function () {
	    function Graph(args) {
	        var _this = this;
	
	        _classCallCheck(this, Graph);
	
	        var graphInternals = {
	            node: args.head,
	            container: (0, _helpersSingleOrError2["default"])(args.container),
	            transversed: [],
	            knownTitleKeys: new Set(),
	            result: _espalierCore2["default"].extend(args["default"], {}),
	            onValueChanged: args.valueChanged,
	            steps: []
	        };
	
	        internals.set(this, graphInternals);
	        render(this);
	
	        _espalierCore2["default"].addEventListener(graphInternals.container, "click", function (e) {
	            var target = e.target;
	
	            while (target && target != graphInternals.container) {
	                var _event = target.getAttribute("data-graph-event");
	                handleNavigation(_this, _event, target.getAttribute("data-title-key"));
	                target = target.parentNode;
	            }
	        });
	    }
	
	    _createClass(Graph, [{
	        key: "goto",
	        value: function goto(key) {
	            var graphInternals = internals.get(this);
	
	            if (!graphInternals.knownTitleKeys.has(key)) {
	                throw new Error("Unknown title key.");
	            }
	
	            while (!graphInternals.node.getTitle || !graphInternals.node.getTitle() || graphInternals.node.getTitle().key !== key) {
	                if (graphInternals.node.getTitle) {
	                    var titleInfo = graphInternals.node.getTitle();
	
	                    if (titleInfo) {
	                        graphInternals.steps.pop();
	                        graphInternals.knownTitleKeys["delete"](titleInfo.key);
	                    }
	                }
	
	                if (graphInternals.node.getPropertyName) {
	                    delete graphInternals.result[graphInternals.node.getPropertyName()];
	                }
	
	                graphInternals.node = graphInternals.transversed.pop();
	            }
	
	            graphInternals.steps.pop();
	
	            if (graphInternals.node.getPropertyName) {
	                delete graphInternals.result[graphInternals.node.getPropertyName()];
	            }
	
	            render(this);
	        }
	    }, {
	        key: "next",
	        value: function next() {
	            var graphInternals = internals.get(this);
	            var step = graphInternals.node;
	
	            if (!step.isValid()) {
	                return;
	            }
	
	            var nextStep = step.next();
	
	            if (nextStep.getTitle && graphInternals.knownTitleKeys.has(nextStep.getTitle().key)) {
	                throw new Error("A node with that title key has already been seen.");
	            }
	
	            graphInternals.transversed.push(step);
	
	            if (step.getPropertyName) {
	                var value = step.getValue();
	                _espalierCore2["default"].setProperty(graphInternals.result, step.getPropertyName(), value);
	            }
	
	            graphInternals.node = nextStep;
	            render(this);
	        }
	    }, {
	        key: "previous",
	        value: function previous() {
	            var graphInternals = internals.get(this);
	
	            if (graphInternals.node.back) {
	                graphInternals.node.back();
	            }
	
	            if (graphInternals.node.getTitle) {
	                var title = graphInternals.node.getTitle();
	
	                if (title) {
	                    graphInternals.steps.pop();
	                    graphInternals.knownTitleKeys["delete"](title.key);
	                }
	            }
	
	            graphInternals.node = graphInternals.transversed.pop();
	
	            if (graphInternals.node.getTitle) {
	                var title = graphInternals.node.getTitle();
	
	                if (title) {
	                    graphInternals.steps.pop();
	                }
	            } else {
	                var stepTitle = graphInternals.steps[graphInternals.steps.length - 1];
	                stepTitle.cssClass = "graph-step-in-progress";
	                stepTitle.status = "In progress";
	            }
	
	            if (graphInternals.node.getPropertyName) {
	                delete graphInternals.result[graphInternals.node.getPropertyName()];
	            }
	
	            render(this);
	        }
	    }, {
	        key: "destroy",
	        value: function destroy() {
	            var currentEvent = internals.get(this).nodeSubsciption;
	
	            if (currentEvent) {
	                _espalierCore2["default"].unsubscribe(currentEvent);
	            }
	        }
	    }]);
	
	    return Graph;
	})();
	
	exports["default"] = Graph;
	module.exports = exports["default"];

/***/ },
/* 32 */
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
	
	    if (typeof this.isValid !== "function") {
	        throw new TypeError("GraphNode derivations must implment isValid()");
	    }
	
	    if (typeof this.renderIn !== "function") {
	        throw new TypeError("GraphNode derivations must implement renderIn(container, result, steps)");
	    }
	};
	
	exports["default"] = GraphNode;
	module.exports = exports["default"];

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _espalierCore = __webpack_require__(3);
	
	var _espalierCore2 = _interopRequireDefault(_espalierCore);
	
	var PagedSource = function PagedSource(args) {
	    _classCallCheck(this, PagedSource);
	
	    if (this.constructor === PagedSource) {
	        throw new TypeError("Abstract class PagedSource cannot be instantiated.");
	    }
	
	    if (!_espalierCore2["default"].isFunction(this.load)) {
	        throw new TypeError("PagedSource derivations must implement load(args)");
	    }
	
	    if (!_espalierCore2["default"].isFunction(this.pages)) {
	        throw new TypeError("PagedSource derivations must implement load(args)");
	    }
	};
	
	exports["default"] = PagedSource;
	module.exports = exports["default"];

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _RepeaterSource2 = __webpack_require__(33);
	
	var _RepeaterSource3 = _interopRequireDefault(_RepeaterSource2);
	
	var internals = new WeakMap();
	
	var ascending = function ascending(a, b, fieldName, defaultValue) {
	    var parts = fieldName.split(".");
	    defaultValue = defaultValue ? defaultValue : "";
	
	    var _iteratorNormalCompletion = true;
	    var _didIteratorError = false;
	    var _iteratorError = undefined;
	
	    try {
	        for (var _iterator = parts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	            var part = _step.value;
	
	            a = a[part];
	            b = b[part];
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
	
	    if (a == null) {
	        a = defaultValue;
	    }
	
	    if (b == null) {
	        b = defaultValue;
	    }
	
	    if (a.toUpperCase) {
	        a = a.toUpperCase();
	    }
	
	    if (b.toUpperCase) {
	        b = b.toUpperCase();
	    }
	
	    if (a < b) {
	        return -1;
	    }
	
	    if (a > b) {
	        return 1;
	    }
	
	    return 0;
	};
	
	var descending = function descending(a, b, fieldName, defaultValue) {
	    var parts = fieldName.split(".");
	    defaultValue = defaultValue ? defaultValue : "";
	
	    var _iteratorNormalCompletion2 = true;
	    var _didIteratorError2 = false;
	    var _iteratorError2 = undefined;
	
	    try {
	        for (var _iterator2 = parts[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	            var part = _step2.value;
	
	            a = a[part];
	            b = b[part];
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
	
	    if (a == null) {
	        a = defaultValue;
	    }
	
	    if (b == null) {
	        b = defaultValue;
	    }
	
	    if (a.toUpperCase) {
	        a = a.toUpperCase();
	    }
	
	    if (b.toUpperCase) {
	        b = b.toUpperCase();
	    }
	
	    if (a < b) {
	        return 1;
	    }
	
	    if (a > b) {
	        return -1;
	    }
	
	    return 0;
	};
	
	var StaticSource = (function (_RepeaterSource) {
	    _inherits(StaticSource, _RepeaterSource);
	
	    function StaticSource(data) {
	        _classCallCheck(this, StaticSource);
	
	        _get(Object.getPrototypeOf(StaticSource.prototype), "constructor", this).call(this);
	
	        for (var i = 0; i < data.length; i++) {
	            data[i]._initialIndex = i;
	        }
	
	        internals.set(this, {
	            data: data,
	            lastSort: "",
	            lastOrder: ""
	        });
	    }
	
	    _createClass(StaticSource, [{
	        key: "load",
	        value: function load(page, pageSize, filter, sortOn, sortOrder) {
	            var _this = this;
	
	            var loadPromise = new Promise(function (resolve) {
	                var settings = internals.get(_this);
	                var data = settings.data;
	                var lastSort = settings.lastSort;
	                var lastOrder = settings.lastOrder;
	
	                if (!sortOn) {
	                    sortOn = "_initialIndex";
	                    sortOrder = "asc";
	                }
	
	                if (sortOn != lastSort || sortOrder != lastOrder) {
	                    data = data.sort(function (a, b) {
	                        switch (sortOrder) {
	                            case "asc":
	                                return ascending(a, b, sortOn);
	                                break;
	                            case "desc":
	                                return descending(a, b, sortOn);
	                                break;
	                        }
	                    });
	
	                    settings.lastSort = sortOn;
	                    settings.lastOrder = sortOrder;
	                }
	
	                if (filter) {
	                    //TODO: Implement filters.......... this may need a custom function.
	                }
	
	                page = page && page > 0 ? page - 1 : 0;
	                pageSize = pageSize && pageSize > 0 ? pageSize : 0;
	                var start = pageSize > 0 ? page * pageSize : 0;
	                var finish = start + (pageSize > 0 ? pageSize : data.length);
	                resolve(data.slice(start, finish));
	            });
	
	            return loadPromise;
	        }
	    }, {
	        key: "pages",
	        value: function pages(pageSize) {
	            var count = Math.ceil(internals.get(this).data.length / pageSize);
	            return count;
	        }
	    }]);
	
	    return StaticSource;
	})(_RepeaterSource3["default"]);
	
	exports["default"] = StaticSource;
	module.exports = exports["default"];

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _espalierCommon = __webpack_require__(5);
	
	var _espalierCommon2 = _interopRequireDefault(_espalierCommon);
	
	var _espalierCore = __webpack_require__(3);
	
	var _espalierCore2 = _interopRequireDefault(_espalierCore);
	
	var _RepeaterSource2 = __webpack_require__(33);
	
	var _RepeaterSource3 = _interopRequireDefault(_RepeaterSource2);
	
	var internals = new WeakMap();
	
	var AJAXSource = (function (_RepeaterSource) {
	    _inherits(AJAXSource, _RepeaterSource);
	
	    function AJAXSource(args) {
	        _classCallCheck(this, AJAXSource);
	
	        _get(Object.getPrototypeOf(AJAXSource.prototype), "constructor", this).call(this);
	
	        var settings = {
	            url: "",
	            count: 0,
	            postProcess: null
	        };
	
	        _espalierCommon2["default"].extend(settings, args);
	
	        if (!settings.url) {
	            throw new Error("Please specify a url.");
	        }
	
	        internals.set(this, settings);
	    }
	
	    _createClass(AJAXSource, [{
	        key: "load",
	        value: function load(page, pageSize, filter, sortOn, sortOrder) {
	            var settings = internals.get(this);
	
	            var loadPromise = new Promise(function (resolve) {
	                _espalierCore2["default"].sendRequest({
	                    url: settings.url,
	                    type: "POST",
	                    data: {
	                        Page: page,
	                        PageSize: pageSize,
	                        Criteria: filter,
	                        SortOn: sortOn,
	                        SortOrder: sortOrder
	                    }
	                }).then(function (result) {
	                    settings.count = result.data.total;
	
	                    if (settings.postProcess) {
	                        result.data.records = settings.postProcess(result.data.records);
	                    }
	
	                    resolve(result.data.records);
	                });
	            });
	
	            return loadPromise;
	        }
	    }, {
	        key: "pages",
	        value: function pages(pageSize) {
	            var settings = internals.get(this);
	            return Math.ceil(settings.count / pageSize);
	        }
	    }]);
	
	    return AJAXSource;
	})(_RepeaterSource3["default"]);
	
	exports["default"] = AJAXSource;
	module.exports = exports["default"];

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _srcJsEspalier = __webpack_require__(2);
	
	var _srcJsEspalier2 = _interopRequireDefault(_srcJsEspalier);
	
	var _graphNodes = __webpack_require__(37);
	
	var _graphNodes2 = _interopRequireDefault(_graphNodes);
	
	var DemoGraph = (function (_espalier$Graph) {
	    _inherits(DemoGraph, _espalier$Graph);
	
	    function DemoGraph(container, valueChanged) {
	        _classCallCheck(this, DemoGraph);
	
	        _get(Object.getPrototypeOf(DemoGraph.prototype), "constructor", this).call(this, {
	            container: container,
	            "default": {},
	            head: new _graphNodes2["default"](),
	            valueChanged: valueChanged
	        });
	    }
	
	    return DemoGraph;
	})(_srcJsEspalier2["default"].Graph);
	
	exports["default"] = DemoGraph;
	module.exports = exports["default"];

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _srcJsEspalier = __webpack_require__(2);
	
	var _srcJsEspalier2 = _interopRequireDefault(_srcJsEspalier);
	
	var _templatesGraphProgress = __webpack_require__(38);
	
	var _templatesGraphProgress2 = _interopRequireDefault(_templatesGraphProgress);
	
	var nextKey = new Object();
	
	var getStepContent = function getStepContent(stepId, stepText, hasNext, hasBack) {
	    var stepContent = "<h3 id=\"" + stepId + "\">" + stepText + "</h3>";
	
	    if (hasBack) {
	        stepContent += "<a data-graph-event='back' href='javascript: void(0);' class='button destroy'>Back</a> ";
	    }
	
	    if (hasNext) {
	        stepContent += "<a data-graph-event=\"next\" href=\"javascript: void(0);\" class=\"button desired\">Next</a>";
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
	        key: "isValid",
	        value: function isValid() {
	            return true;
	        }
	    }, {
	        key: "getValue",
	        value: function getValue() {
	            return "This is step 1";
	        }
	    }, {
	        key: "renderIn",
	        value: function renderIn(container, result, steps) {
	            var _this = this;
	
	            return new Promise(function (resolve) {
	                var progress = (0, _templatesGraphProgress2["default"])(steps);
	                container.innerHTML = progress + getStepContent("step-1", _this.getValue(), true, false);
	                resolve();
	            });
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
	        key: "getPropertyName",
	        value: function getPropertyName() {
	            return "StepOne";
	        }
	    }, {
	        key: "getTitle",
	        value: function getTitle() {
	            return {
	                title: "Step 1",
	                key: "1"
	            };
	        }
	    }]);
	
	    return Step1;
	})(_srcJsEspalier2["default"].GraphNode);
	
	exports["default"] = Step1;
	
	var Step2dot1 = (function (_espalier$GraphNode2) {
	    _inherits(Step2dot1, _espalier$GraphNode2);
	
	    function Step2dot1() {
	        _classCallCheck(this, Step2dot1);
	
	        _get(Object.getPrototypeOf(Step2dot1.prototype), "constructor", this).call(this);
	        this._internals = new WeakMap();
	    }
	
	    _createClass(Step2dot1, [{
	        key: "isValid",
	        value: function isValid() {
	            return true;
	        }
	    }, {
	        key: "getValue",
	        value: function getValue() {
	            return "This is step 2.1";
	        }
	    }, {
	        key: "renderIn",
	        value: function renderIn(container, result, steps) {
	            var _this2 = this;
	
	            return new Promise(function (resolve) {
	                var progress = (0, _templatesGraphProgress2["default"])(steps);
	                container.innerHTML = progress + getStepContent("step-2dot1", _this2.getValue(), true, true);
	                resolve();
	            });
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
	        key: "getPropertyName",
	        value: function getPropertyName() {
	            return "StepTwoDotOne";
	        }
	    }, {
	        key: "getTitle",
	        value: function getTitle() {
	            return {
	                title: "Step 2",
	                key: "2"
	            };
	        }
	    }]);
	
	    return Step2dot1;
	})(_srcJsEspalier2["default"].GraphNode);
	
	var Step2dot2 = (function (_espalier$GraphNode3) {
	    _inherits(Step2dot2, _espalier$GraphNode3);
	
	    function Step2dot2() {
	        _classCallCheck(this, Step2dot2);
	
	        _get(Object.getPrototypeOf(Step2dot2.prototype), "constructor", this).call(this);
	        this._internals = new WeakMap();
	    }
	
	    _createClass(Step2dot2, [{
	        key: "isValid",
	        value: function isValid() {
	            return true;
	        }
	    }, {
	        key: "getValue",
	        value: function getValue() {
	            return "This is step 2.2";
	        }
	    }, {
	        key: "renderIn",
	        value: function renderIn(container, result, steps) {
	            var _this3 = this;
	
	            return new Promise(function (resolve) {
	                var progress = (0, _templatesGraphProgress2["default"])(steps);
	                container.innerHTML = progress + getStepContent("step-2dot2", _this3.getValue(), true, true);
	                resolve();
	            });
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
	        key: "getPropertyName",
	        value: function getPropertyName() {
	            return "StepTwoDotTwo";
	        }
	    }]);
	
	    return Step2dot2;
	})(_srcJsEspalier2["default"].GraphNode);
	
	var Step3 = (function (_espalier$GraphNode4) {
	    _inherits(Step3, _espalier$GraphNode4);
	
	    function Step3() {
	        _classCallCheck(this, Step3);
	
	        _get(Object.getPrototypeOf(Step3.prototype), "constructor", this).call(this);
	        this._internals = new WeakMap();
	    }
	
	    _createClass(Step3, [{
	        key: "isValid",
	        value: function isValid() {
	            return true;
	        }
	    }, {
	        key: "getValue",
	        value: function getValue() {
	            return "This is step 3";
	        }
	    }, {
	        key: "renderIn",
	        value: function renderIn(container, result, steps) {
	            var _this4 = this;
	
	            return new Promise(function (resolve) {
	                var progress = (0, _templatesGraphProgress2["default"])(steps);
	                container.innerHTML = progress + getStepContent("step-3", _this4.getValue(), true, true);
	                resolve();
	            });
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
	        key: "getPropertyName",
	        value: function getPropertyName() {
	            return "StepThree";
	        }
	    }, {
	        key: "getTitle",
	        value: function getTitle() {
	            return {
	                title: "Step 3",
	                key: "3"
	            };
	        }
	    }]);
	
	    return Step3;
	})(_srcJsEspalier2["default"].GraphNode);
	
	var Step4 = (function (_espalier$GraphNode5) {
	    _inherits(Step4, _espalier$GraphNode5);
	
	    function Step4() {
	        _classCallCheck(this, Step4);
	
	        _get(Object.getPrototypeOf(Step4.prototype), "constructor", this).call(this);
	    }
	
	    _createClass(Step4, [{
	        key: "isValid",
	        value: function isValid() {
	            return true;
	        }
	    }, {
	        key: "getValue",
	        value: function getValue() {
	            return "This is step 4";
	        }
	    }, {
	        key: "renderIn",
	        value: function renderIn(container, result, steps) {
	            var _this5 = this;
	
	            return new Promise(function (resolve) {
	                var progress = (0, _templatesGraphProgress2["default"])(steps);
	                container.innerHTML = progress + getStepContent("step-4", _this5.getValue(), false, true);
	                resolve();
	            });
	        }
	    }, {
	        key: "next",
	        value: function next() {
	            return false;
	        }
	    }, {
	        key: "getPropertyName",
	        value: function getPropertyName() {
	            return "StepThree";
	        }
	    }, {
	        key: "getTitle",
	        value: function getTitle() {
	            return false;
	        }
	    }]);
	
	    return Step4;
	})(_srcJsEspalier2["default"].GraphNode);
	
	module.exports = exports["default"];

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(39);
	module.exports = (Handlebars["default"] || Handlebars).template({"1":function(depth0,helpers,partials,data) {
	    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;
	
	  return "    <a data-graph-event=\"goto\" data-title-key=\""
	    + alias3(((helper = (helper = helpers.key || (depth0 != null ? depth0.key : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"key","hash":{},"data":data}) : helper)))
	    + "\" class=\"button "
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
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// Create a simple path alias to allow browserify to resolve
	// the runtime on a supported path.
	'use strict';
	
	module.exports = __webpack_require__(40)['default'];

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireWildcard = function _interopRequireWildcard(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	};
	
	exports.__esModule = true;
	
	var _import = __webpack_require__(41);
	
	var base = _interopRequireWildcard(_import);
	
	// Each of these augment the Handlebars object. No need to setup here.
	// (This is done to easily share code between commonjs and browse envs)
	
	var _SafeString = __webpack_require__(44);
	
	var _SafeString2 = _interopRequireWildcard(_SafeString);
	
	var _Exception = __webpack_require__(43);
	
	var _Exception2 = _interopRequireWildcard(_Exception);
	
	var _import2 = __webpack_require__(42);
	
	var Utils = _interopRequireWildcard(_import2);
	
	var _import3 = __webpack_require__(45);
	
	var runtime = _interopRequireWildcard(_import3);
	
	var _noConflict = __webpack_require__(46);
	
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
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireWildcard = function _interopRequireWildcard(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	};
	
	exports.__esModule = true;
	exports.HandlebarsEnvironment = HandlebarsEnvironment;
	exports.createFrame = createFrame;
	
	var _import = __webpack_require__(42);
	
	var Utils = _interopRequireWildcard(_import);
	
	var _Exception = __webpack_require__(43);
	
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
/* 42 */
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
/* 43 */
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
/* 44 */
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
/* 45 */
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
	
	var _import = __webpack_require__(42);
	
	var Utils = _interopRequireWildcard(_import);
	
	var _Exception = __webpack_require__(43);
	
	var _Exception2 = _interopRequireWildcard(_Exception);
	
	var _COMPILER_REVISION$REVISION_CHANGES$createFrame = __webpack_require__(41);
	
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
/* 46 */
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
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _srcJsEspalier = __webpack_require__(2);
	
	var _srcJsEspalier2 = _interopRequireDefault(_srcJsEspalier);
	
	var _templatesRow = __webpack_require__(48);
	
	var _templatesRow2 = _interopRequireDefault(_templatesRow);
	
	var _templatesPager = __webpack_require__(49);
	
	var _templatesPager2 = _interopRequireDefault(_templatesPager);
	
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
	    var repeater = container.repeater({
	        src: new _srcJsEspalier2["default"].repeater.StaticSource(data),
	        itemTemplate: _templatesRow2["default"],
	        pageSize: 5,
	        rendered: function rendered(pageInfo) {
	            var startAtPage = Math.max(1, pageInfo.page - 3);
	            var endAtPage = Math.min(pageInfo.pages, pageInfo.page + 3 + Math.max(3 - pageInfo.page, 1));
	            var nextPage = pageInfo.page + 1;
	
	            var pages = [{ disabled: pageInfo.page === 1, active: false, text: "<", page: pageInfo.page - 1 }];
	
	            for (var i = startAtPage; i <= endAtPage; i++) {
	                pages.push({ disabled: false, active: i === pageInfo.page, text: i.toString(), page: i });
	            }
	
	            pages.push({ disabled: nextPage === pageInfo.pages + 1, active: false, text: ">", page: nextPage });
	            var renderedPager = (0, _templatesPager2["default"])(pages);
	            _srcJsEspalier2["default"].node("tfoot", container).html(renderedPager);
	        }
	    });
	
	    //     let repeater = container.repeater({
	    //         src: new espalier.repeater.AJAXSource({ url: "http://localhost:63398/Users/Search" }),
	    //         itemTemplate: rowTemplate,
	    //         pageSize: 3,
	    //         rendered: pageInfo => {
	    //             let startAtPage = Math.max(1, pageInfo.page - 3);
	    //             let endAtPage = Math.min(pageInfo.pages, pageInfo.page + 3 + Math.max(3 - pageInfo.page, 1));
	    //             let nextPage = (pageInfo.page + 1);
	    //
	    //             let pages = [{ disabled: pageInfo.page === 1, active: false, text: "<", page: pageInfo.page - 1 }];
	    //
	    //             for (let i = startAtPage; i <= endAtPage; i++) {
	    //                 pages.push({ disabled: false, active: i === pageInfo.page, text: i.toString(), page: i });
	    //             }
	    //
	    //             pages.push({ disabled: nextPage === pageInfo.pages + 1, active: false, text: ">", page: nextPage });
	    //             let renderedPager = pagerTemplate(pages);
	    //             espalier.node("tfoot", container).html(renderedPager);
	    //         }
	    //     });
	
	    return repeater;
	};
	
	module.exports = exports["default"];

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(39);
	module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
	    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;
	
	  return "<tr>\r\n	<td>"
	    + alias3(((helper = (helper = helpers.col1 || (depth0 != null ? depth0.col1 : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"col1","hash":{},"data":data}) : helper)))
	    + "</td>\r\n	<td>"
	    + alias3(((helper = (helper = helpers.col2 || (depth0 != null ? depth0.col2 : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"col2","hash":{},"data":data}) : helper)))
	    + "</td>\r\n</tr>";
	},"useData":true});

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(39);
	module.exports = (Handlebars["default"] || Handlebars).template({"1":function(depth0,helpers,partials,data) {
	    var stack1, helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;
	
	  return "            <li "
	    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.disabled : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + " "
	    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.active : depth0),{"name":"if","hash":{},"fn":this.program(4, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + ">\r\n                <a data-page=\""
	    + alias3(((helper = (helper = helpers.page || (depth0 != null ? depth0.page : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"page","hash":{},"data":data}) : helper)))
	    + "\" repeater-action=\"goto\" href=\"javascript: void(0);\">\r\n                    <span aria-hidden=\"true\">"
	    + alias3(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"text","hash":{},"data":data}) : helper)))
	    + "</span>\r\n                </a>\r\n            </li>\r\n";
	},"2":function(depth0,helpers,partials,data) {
	    return "class=\"disabled\"";
	},"4":function(depth0,helpers,partials,data) {
	    return "class=\"active\"";
	},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
	    var stack1;
	
	  return "<tr>\r\n    <td colspan=\"2\">\r\n        <ul class=\"pagination\">\r\n"
	    + ((stack1 = helpers.each.call(depth0,depth0,{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
	    + "        </ul>\r\n    </td>\r\n</tr>";
	},"useData":true});

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _srcJsEspalier = __webpack_require__(2);
	
	var _srcJsEspalier2 = _interopRequireDefault(_srcJsEspalier);
	
	var _templatesDialogTemplate = __webpack_require__(51);
	
	var _templatesDialogTemplate2 = _interopRequireDefault(_templatesDialogTemplate);
	
	exports["default"] = function () {
	    _srcJsEspalier2["default"].dialog({
	        element: (0, _templatesDialogTemplate2["default"])(),
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
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(39);
	module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
	    return "<form class=\"column one-third-tablet push-one-third-tablet\" style=\"background: white;padding: 1em;border-radius: .15em;box-shadow: 0 0 .5em #81e181;\">\r\n    <div class=\"form-group\">\r\n        <label for=\"exampleInputEmail1\">Email address</label>\r\n        <input required type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"Enter email\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"exampleInputPassword1\">Password</label>\r\n        <input required type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">\r\n    </div>\r\n    <a href=\"javascript: void(0);\" id=\"submit\" class=\"button desired\">Submit</a>\r\n    <a href=\"javascript: void(0);\" id=\"cancel\" class=\"button destroy\">Cancel</a>\r\n</form>";
	},"useData":true});

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _srcJsEspalier = __webpack_require__(2);
	
	var _srcJsEspalier2 = _interopRequireDefault(_srcJsEspalier);
	
	var _templatesPopoverTemplate = __webpack_require__(53);
	
	var _templatesPopoverTemplate2 = _interopRequireDefault(_templatesPopoverTemplate);
	
	exports["default"] = function (parentElement) {
		var position = "bottom";
		if (parentElement.hasAttribute("data-popover-direction")) {
			position = parentElement.getAttribute("data-popover-direction");
		}
		_srcJsEspalier2["default"].popover({
			element: (0, _templatesPopoverTemplate2["default"])(),
			parent: parentElement,
			position: position
		});
	};
	
	module.exports = exports["default"];

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(39);
	module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
	    return "<div style=\"background-color: white;\">\r\n    Popover\r\n</div>";
	},"useData":true});

/***/ }
/******/ ])
});
;
//# sourceMappingURL=demo_compiled.js.map