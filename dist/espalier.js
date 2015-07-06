(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define(factory);
	else if(typeof exports === 'object')
		exports["espalier"] = factory();
	else
		root["espalier"] = factory();
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
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _espalierCore = __webpack_require__(2);
	
	var _espalierCore2 = _interopRequireDefault(_espalierCore);
	
	var _espalierValidation = __webpack_require__(8);
	
	var _espalierValidation2 = _interopRequireDefault(_espalierValidation);
	
	var _espalierMessageFactory = __webpack_require__(3);
	
	var _espalierMessageFactory2 = _interopRequireDefault(_espalierMessageFactory);
	
	var _espalierWaitscreen = __webpack_require__(5);
	
	var _espalierWaitscreen2 = _interopRequireDefault(_espalierWaitscreen);
	
	var _espalierTables = __webpack_require__(9);
	
	var _espalierTables2 = _interopRequireDefault(_espalierTables);
	
	var espalier = {
	    showWarning: _espalierCore2["default"].showWarning,
	    showInfo: _espalierCore2["default"].showInfo,
	    sendRequest: _espalierCore2["default"].sendRequest,
	    table: _espalierTables2["default"].create,
	    snatch: function snatch(x) {
	        alert(x);
	    },
	    wire: function wire(form) {
	        form = $(form);
	        form.attr("novalidate", "");
	
	        form.submit(function (ev) {
	            var invalid = false;
	
	            $.each($("input, textarea, select", form), function (index, control) {
	                control = $(control);
	                var validations = control.data("validations");
	                var errors = [];
	
	                $.each(validations, function (vIndex, v) {
	                    if (v.invalid(control)) {
	                        errors.push(v.message);
	                    }
	                });
	
	                if (errors.length > 0) {
	                    invalid = true;
	                    control.data("message").show({
	                        message: errors,
	                        messageType: _espalierMessageFactory2["default"].messageType.Error
	                    });
	                }
	            });
	
	            if (invalid) {
	                ev.preventDefault();
	            }
	        });
	
	        $.each($("input, textarea, select", form), function (index, control) {
	            var lowerCaseId = control.id.toLowerCase();
	            control = $(control);
	            var group;
	            var validations = [];
	
	            switch (control.attr("type")) {
	                case "checkbox":
	                    group = control.closest(".checkbox");
	                    break;
	                case "email":
	                    validations.push(_espalierValidation2["default"].email);
	                    group = control.closest(".form-group");
	                    break;
	                case "date":
	                    validations.push(_espalierValidation2["default"].date);
	                    group = control.closest(".form-group");
	                    if (control.datepicker) {
	                        control.datepicker().attr("type", "text");
	                    }
	                    break;
	                default:
	                    group = control.closest(".form-group");
	                    break;
	            }
	
	            var controlMessage = _espalierMessageFactory2["default"].create({
	                attachTo: group,
	                messageAttachment: _espalierMessageFactory2["default"].messageAttachment.Flow,
	                onRemoved: function onRemoved() {
	                    group.removeClass("has-error");
	                },
	                onAdded: function onAdded() {
	                    group.addClass("has-error");
	                    group.velocity("callout.tada", {
	                        duration: 500
	                    });
	                }
	            });
	
	            if (control.attr("required")) {
	                validations.push(_espalierValidation2["default"].required);
	                group.addClass("required");
	            }
	
	            control.data("message", controlMessage);
	            control.data("validations", validations);
	            control.attr(lowerCaseId, "");
	        });
	    },
	    showWaitScreen: _espalierWaitscreen2["default"].show,
	    hideWaitScreen: _espalierWaitscreen2["default"].hide,
	    shortDate: _espalierCore2["default"].shortDate,
	    shortTime: _espalierCore2["default"].shortTime,
	    publish: _espalierCore2["default"].publish,
	    parseISODate: _espalierCore2["default"].parseISODate,
	    subscribe: _espalierCore2["default"].subscribe
	};
	
	exports["default"] = espalier;
	module.exports = exports["default"];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _espalierMessageFactory = __webpack_require__(3);
	
	var _espalierMessageFactory2 = _interopRequireDefault(_espalierMessageFactory);
	
	var _espalierWaitscreen = __webpack_require__(5);
	
	var _espalierWaitscreen2 = _interopRequireDefault(_espalierWaitscreen);
	
	var _espalierCommon = __webpack_require__(6);
	
	var _espalierCommon2 = _interopRequireDefault(_espalierCommon);
	
	var _pubsubJs = __webpack_require__(7);
	
	var _pubsubJs2 = _interopRequireDefault(_pubsubJs);
	
	var mainMessage = _espalierMessageFactory2["default"].create({
	    attachTo: _espalierCommon2["default"].body
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
	        waitScreen.show();
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
	                waitScreen.hide();
	
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
	    }
	};
	
	exports["default"] = core;
	module.exports = exports["default"];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _templatesBootstrapTemplates = __webpack_require__(4);
	
	var _templatesBootstrapTemplates2 = _interopRequireDefault(_templatesBootstrapTemplates);
	
	var MessageDisplayer = function MessageDisplayer(args) {
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
	
	  var scope = this;
	
	  $.extend(this.settings, args);
	
	  if (!this.settings.attachTo) {
	    throw "MessageFactory requires an attachTo argument.";
	  }
	
	  this.remove = function () {
	    if (scope.message) {
	      scope.message.remove();
	      scope.message = undefined;
	      scope.settings.onRemoved();
	    }
	  };
	};
	
	;
	
	MessageDisplayer.prototype.show = function (messageArgs) {
	  var messageTypeClass, messageSettings, messageAttachmentClass;
	
	  //NOTE: There should only be one message displayed per instance.
	  if (this.message) {
	    this.message.remove();
	  }
	
	  //NOTE: Allow them to either use an array of messages or a
	  //      single message.
	  if (typeof messageArgs.message === "string") {
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
	    moreThanOne: typeof messageArgs.message !== "string" && messageArgs.message.length > 1
	  });
	
	  this.message = $(this.message);
	  this.settings.attachTo.append(this.message);
	  this.settings.onAdded(this.message);
	  this.message.on("click", "." + this.settings.closeMessageClass, this.remove);
	  return this.message;
	};
	
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
/* 4 */
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
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _espalierCommon = __webpack_require__(6);
	
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
/* 6 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var body = $("body");
	
	exports["default"] = {
	    body: body
	};
	module.exports = exports["default"];

/***/ },
/* 7 */
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
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _espalierCore = __webpack_require__(2);
	
	var _espalierCore2 = _interopRequireDefault(_espalierCore);
	
	var validation = {
	    required: {
	        invalid: function invalid(control) {
	            switch (control.attr("type")) {
	                case "checkbox":
	                    return !control.is(":checked");
	                    break;
	                default:
	                    var value = control.val();
	                    return _espalierCore2["default"].isEmptyOrSpaces(value);
	                    break;
	            }
	        },
	        message: "Field is required."
	    },
	    email: {
	        invalid: function invalid(control) {
	            var value = control.val();
	            return !_espalierCore2["default"].isEmail(value);
	        },
	        message: "Invalid email address."
	    },
	    date: {
	        invalid: function invalid(control) {
	            var value = control.val();
	            return !_espalierCore2["default"].isDate(value);
	        },
	        message: "Invalid date."
	    }
	};
	
	exports["default"] = validation;
	module.exports = exports["default"];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _espalierMessageFactory = __webpack_require__(3);
	
	var _espalierMessageFactory2 = _interopRequireDefault(_espalierMessageFactory);
	
	var _espalierWaitscreen = __webpack_require__(5);
	
	var _espalierWaitscreen2 = _interopRequireDefault(_espalierWaitscreen);
	
	var _espalierCommon = __webpack_require__(6);
	
	var _espalierCommon2 = _interopRequireDefault(_espalierCommon);
	
	var _espalierCore = __webpack_require__(2);
	
	var _espalierCore2 = _interopRequireDefault(_espalierCore);
	
	var getFooter = function getFooter(table) {
		var startAtPage = Math.max(0, table.settings.currentPage - 3);
		var endAtPage = Math.min(table.settings.pages - 1, table.settings.currentPage + 3 + Math.max(3 - table.settings.currentPage, 0));
		var pagingControl = $("<ul />");
		pagingControl.addClass("pagination");
	
		var previous = $("<li><a data-page=\"" + (table.settings.currentPage - 1) + "\" class=\"espalier-table-button\" href=\"javascript: void(0);\"><span aria-hidden=\"true\">&laquo;</span></a></li>");
	
		if (table.settings.currentPage == 0) {
			previous.addClass("disabled");
		}
	
		pagingControl.append(previous);
	
		for (var i = startAtPage; i <= endAtPage; i++) {
			var pageButton = $("<li><a data-page=\"" + i + "\" class=\"espalier-table-button\" href=\"javascript: void(0);\">" + (i + 1) + "</a></li>");
	
			if (i === table.settings.currentPage) {
				pageButton.addClass("active");
			}
	
			pagingControl.append(pageButton);
		}
	
		var nextPage = table.settings.currentPage + 1;
		var next = $("<li><a data-page=\"" + nextPage + "\" class=\"espalier-table-button\" href=\"javascript: void(0);\"><span aria-hidden=\"true\">&raquo;</span></a></li>");
	
		if (nextPage == table.settings.pages) {
			next.addClass("disabled");
		}
	
		pagingControl.append(next);
	
		return $("<tfoot />").append($("<tr />").append($("<td colspan=\"42\" />").append(pagingControl)));
	};
	
	var renderTable = function renderTable(table) {
		var rendered = $("<table />");
		rendered.addClass(table.settings.tableClass);
		rendered.addClass("table");
		rendered.addClass("table-striped");
	
		if (table.settings.headerTemplate) {
			rendered.append(table.settings.headerTemplate());
		}
	
		var tbody = $("<tbody />");
		var startAtIndex = table.settings.currentPage * table.settings.pageSize;
	
		if (table.settings.data) {
			for (var i = startAtIndex; i < Math.min(startAtIndex + table.settings.pageSize, table.settings.data.length); i++) {
				tbody.append(table.settings.rowTemplate(table.settings.data[i]));
			}
			rendered.append(tbody);
			if (table.settings.pages > 0) {
				rendered.append(getFooter(table));
			}
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
					tbody.append(table.settings.rowTemplate(result.data.records[i]));
				}
				rendered.append(tbody);
				rendered.append(getFooter(table));
			});
		}
	
		table.settings.container.clear();
		table.settings.append(rendered);
	
		if (this.renderedCallback) {
			this.renderedCallback(table[0]);
		}
	};
	
	var TableInstance = function TableInstance(args) {
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
	};
	
	;
	
	TableInstance.prototype.next = function () {
		this.settings.currentPage++;
		renderTable(this);
		return this;
	};
	
	TableInstance.prototype.previous = function () {
		this.settings.currentPage--;
		renderTable(this);
		return this;
	};
	
	TableInstance.prototype.filter = function (filter) {
		this.settings.filter = filter;
		this.settings.currentPage = 0;
		renderTable(this);
		return this;
	};
	
	TableInstance.prototype.goToPage = function (page) {
		if (page < 0 || page >= this.settings.pages) {
			return;
		}
	
		this.settings.currentPage = page;
		renderTable(this);
		return this;
	};
	
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

/***/ }
/******/ ])
});
;
//# sourceMappingURL=espalier.js.map