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
	
	var _espalierCore = __webpack_require__(5);
	
	var _espalierCore2 = _interopRequireDefault(_espalierCore);
	
	var _espalierValidation = __webpack_require__(9);
	
	var _espalierValidation2 = _interopRequireDefault(_espalierValidation);
	
	var _espalierMessageFactory = __webpack_require__(6);
	
	var _espalierMessageFactory2 = _interopRequireDefault(_espalierMessageFactory);
	
	var _espalierWaitscreen = __webpack_require__(3);
	
	var _espalierWaitscreen2 = _interopRequireDefault(_espalierWaitscreen);
	
	var _espalierTables = __webpack_require__(10);
	
	var _espalierTables2 = _interopRequireDefault(_espalierTables);
	
	var _espalierDialog = __webpack_require__(11);
	
	var _espalierDialog2 = _interopRequireDefault(_espalierDialog);
	
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
	            ev.preventDefault();
	            var invalid = false;
	            var controls = $("input, textarea, select", form).toArray();
	
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;
	
	            try {
	                for (var _iterator = controls[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var control = _step.value;
	
	                    control = $(control);
	                    var validations = control.data("validations");
	                    var errors = [];
	
	                    if (validations) {
	                        var _iteratorNormalCompletion2 = true;
	                        var _didIteratorError2 = false;
	                        var _iteratorError2 = undefined;
	
	                        try {
	                            for (var _iterator2 = validations[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                                var validation = _step2.value;
	
	                                if (validation.invalid(control)) {
	                                    errors.push(validation.message);
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
	                    }
	
	                    if (errors.length > 0) {
	                        invalid = true;
	                        control.data("message").show({
	                            message: errors,
	                            messageType: _espalierMessageFactory2["default"].messageType.Error
	                        });
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
	
	            if (!invalid) {
	                _espalierCore2["default"].sendRequest({
	                    type: form.attr("method"),
	                    url: form.attr("action"),
	                    data: form.serialize()
	                });
	            }
	        });
	
	        form.on("click", "[data-action=\"submit\"]", function () {
	            form.submit();
	        });
	
	        $.each($("input, textarea, select", form), function (index, control) {
	            var lowerCaseId = control.id.toLowerCase();
	
	            if (!lowerCaseId) {
	                return;
	            }
	
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
	
	var _espalierCommon = __webpack_require__(4);
	
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
/* 4 */
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
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _espalierMessageFactory = __webpack_require__(6);
	
	var _espalierMessageFactory2 = _interopRequireDefault(_espalierMessageFactory);
	
	var _espalierWaitscreen = __webpack_require__(3);
	
	var _espalierWaitscreen2 = _interopRequireDefault(_espalierWaitscreen);
	
	var _espalierCommon = __webpack_require__(4);
	
	var _espalierCommon2 = _interopRequireDefault(_espalierCommon);
	
	var _pubsubJs = __webpack_require__(8);
	
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
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _templatesBootstrapTemplates = __webpack_require__(7);
	
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
	
	        var scope = this;
	
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
	            this.message.on("click", "." + this.settings.closeMessageClass, function () {
	                alert("remove me...");
	            });
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
/* 7 */
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
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _espalierCore = __webpack_require__(5);
	
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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _espalierMessageFactory = __webpack_require__(6);
	
	var _espalierMessageFactory2 = _interopRequireDefault(_espalierMessageFactory);
	
	var _espalierWaitscreen = __webpack_require__(3);
	
	var _espalierWaitscreen2 = _interopRequireDefault(_espalierWaitscreen);
	
	var _espalierCommon = __webpack_require__(4);
	
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
	
	var _espalierCommon = __webpack_require__(4);
	
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBlNTYyN2U1M2M1MzIwZTYxY2U3YiIsIndlYnBhY2s6Ly8vQzovZ2l0L0VzcGFsaWVySlMvc3JjL2pzL2RlbW8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL0M6L2dpdC9Fc3BhbGllckpTL3NyYy9qcy9lc3BhbGllci5qcyIsIndlYnBhY2s6Ly8vQzovZ2l0L0VzcGFsaWVySlMvc3JjL2pzL2VzcGFsaWVyLndhaXRzY3JlZW4uanMiLCJ3ZWJwYWNrOi8vL0M6L2dpdC9Fc3BhbGllckpTL3NyYy9qcy9lc3BhbGllci5jb21tb24uanMiLCJ3ZWJwYWNrOi8vL0M6L2dpdC9Fc3BhbGllckpTL3NyYy9qcy9lc3BhbGllci5jb3JlLmpzIiwid2VicGFjazovLy9DOi9naXQvRXNwYWxpZXJKUy9zcmMvanMvZXNwYWxpZXIubWVzc2FnZUZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vL0M6L2dpdC9Fc3BhbGllckpTL3NyYy9qcy90ZW1wbGF0ZXMvYm9vdHN0cmFwVGVtcGxhdGVzLmpzIiwid2VicGFjazovLy9DOi9naXQvRXNwYWxpZXJKUy9+L3B1YnN1Yi1qcy9zcmMvcHVic3ViLmpzIiwid2VicGFjazovLy9DOi9naXQvRXNwYWxpZXJKUy9zcmMvanMvZXNwYWxpZXIudmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vQzovZ2l0L0VzcGFsaWVySlMvc3JjL2pzL2VzcGFsaWVyLnRhYmxlcy5qcyIsIndlYnBhY2s6Ly8vQzovZ2l0L0VzcGFsaWVySlMvc3JjL2pzL2VzcGFsaWVyLmRpYWxvZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQ0N0Q3FCLENBQWE7Ozs7QUFFbEMsdUJBQVMsUUFBUSxDQUFDLHFDQUFxQyxDQUFDLENBQUM7QUFDekQsdUJBQVMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7O0FBRWhDLEtBQUksY0FBYyxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUN0RSxFQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7O0FBRTlCLEtBQUksS0FBSyxHQUFHLHNCQUFTLEtBQUssQ0FBQztBQUN2QixjQUFTLEVBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQztBQUMzQixnQkFBVyxFQUFFLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDL0QsU0FBSSxFQUFFLENBQ0YsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsRUFDMUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsRUFDMUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsRUFDMUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsRUFDMUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsRUFDMUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsRUFDMUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsRUFDMUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsRUFDMUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsRUFDMUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsRUFDNUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsRUFDNUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsRUFDNUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsRUFDNUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsRUFDNUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsRUFDNUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsRUFDNUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsRUFDNUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsRUFDNUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsRUFDNUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsRUFDNUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsRUFDNUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsRUFDNUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsRUFDNUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsRUFDNUMsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsQ0FD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LENBQUMsQ0FBQztBQUNILG9CQUFPLElBQUksQ0FBQztVQUNmOzs7WUFqRUMsTUFBTTs7O3NCQW9FRyxVQUFVLElBQUksRUFBRTtBQUMzQixZQUFPLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO0VBQzNCIiwiZmlsZSI6ImRlbW9fY29tcGlsZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImFwcFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJhcHBcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb25cbiAqKi8iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGU1NjI3ZTUzYzUzMjBlNjFjZTdiXG4gKiovIiwiaW1wb3J0IGVzcGFsaWVyIGZyb20gXCIuLi9lc3BhbGllclwiO1xyXG5cclxuZXNwYWxpZXIuc2hvd0luZm8oXCJJdCBzZWVtcyB0aGUgbGlicmFyaWVzIGhhdmUgbG9hZGVkIVwiKTtcclxuZXNwYWxpZXIud2lyZShcIiNzdGFuZGFyZC1mb3JtXCIpO1xyXG5cclxudmFyIGRpYWxvZ1RlbXBsYXRlID0gSGFuZGxlYmFycy5jb21waWxlKCQoXCIjZGlhbG9nLXRlbXBsYXRlXCIpLmh0bWwoKSk7XHJcbiQoXCIuZGF0ZXBpY2tlclwiKS5kYXRlcGlja2VyKCk7XHJcblxyXG52YXIgdGFibGUgPSBlc3BhbGllci50YWJsZSh7XHJcbiAgICBjb250YWluZXI6ICQoXCIjZGVtby10YWJsZVwiKSxcclxuICAgIHJvd1RlbXBsYXRlOiBIYW5kbGViYXJzLmNvbXBpbGUoJChcIiN0ZXN0LXJvdy10ZW1wbGF0ZVwiKS5odG1sKCkpLFxyXG4gICAgZGF0YTogW1xyXG4gICAgICAgIHsgY29sMTogXCJSZWNvcmQgMS0xXCIsIGNvbDI6IFwiUmVjb3JkIDEtMlwiIH0sXHJcbiAgICAgICAgeyBjb2wxOiBcIlJlY29yZCAyLTFcIiwgY29sMjogXCJSZWNvcmQgMi0yXCIgfSxcclxuICAgICAgICB7IGNvbDE6IFwiUmVjb3JkIDMtMVwiLCBjb2wyOiBcIlJlY29yZCAzLTJcIiB9LFxyXG4gICAgICAgIHsgY29sMTogXCJSZWNvcmQgNC0xXCIsIGNvbDI6IFwiUmVjb3JkIDQtMlwiIH0sXHJcbiAgICAgICAgeyBjb2wxOiBcIlJlY29yZCA1LTFcIiwgY29sMjogXCJSZWNvcmQgNS0yXCIgfSxcclxuICAgICAgICB7IGNvbDE6IFwiUmVjb3JkIDYtMVwiLCBjb2wyOiBcIlJlY29yZCA2LTJcIiB9LFxyXG4gICAgICAgIHsgY29sMTogXCJSZWNvcmQgNy0xXCIsIGNvbDI6IFwiUmVjb3JkIDctMlwiIH0sXHJcbiAgICAgICAgeyBjb2wxOiBcIlJlY29yZCA4LTFcIiwgY29sMjogXCJSZWNvcmQgOC0yXCIgfSxcclxuICAgICAgICB7IGNvbDE6IFwiUmVjb3JkIDktMVwiLCBjb2wyOiBcIlJlY29yZCA5LTJcIiB9LFxyXG4gICAgICAgIHsgY29sMTogXCJSZWNvcmQgMTAtMVwiLCBjb2wyOiBcIlJlY29yZCAxMC0yXCIgfSxcclxuICAgICAgICB7IGNvbDE6IFwiUmVjb3JkIDExLTFcIiwgY29sMjogXCJSZWNvcmQgMTEtMlwiIH0sXHJcbiAgICAgICAgeyBjb2wxOiBcIlJlY29yZCAxMi0xXCIsIGNvbDI6IFwiUmVjb3JkIDEyLTJcIiB9LFxyXG4gICAgICAgIHsgY29sMTogXCJSZWNvcmQgMTMtMVwiLCBjb2wyOiBcIlJlY29yZCAxMy0yXCIgfSxcclxuICAgICAgICB7IGNvbDE6IFwiUmVjb3JkIDE0LTFcIiwgY29sMjogXCJSZWNvcmQgMTQtMlwiIH0sXHJcbiAgICAgICAgeyBjb2wxOiBcIlJlY29yZCAxNS0xXCIsIGNvbDI6IFwiUmVjb3JkIDE1LTJcIiB9LFxyXG4gICAgICAgIHsgY29sMTogXCJSZWNvcmQgMTYtMVwiLCBjb2wyOiBcIlJlY29yZCAxNi0yXCIgfSxcclxuICAgICAgICB7IGNvbDE6IFwiUmVjb3JkIDE3LTFcIiwgY29sMjogXCJSZWNvcmQgMTctMlwiIH0sXHJcbiAgICAgICAgeyBjb2wxOiBcIlJlY29yZCAxOC0xXCIsIGNvbDI6IFwiUmVjb3JkIDE4LTJcIiB9LFxyXG4gICAgICAgIHsgY29sMTogXCJSZWNvcmQgMTktMVwiLCBjb2wyOiBcIlJlY29yZCAxOS0yXCIgfSxcclxuICAgICAgICB7IGNvbDE6IFwiUmVjb3JkIDIwLTFcIiwgY29sMjogXCJSZWNvcmQgMjAtMlwiIH0sXHJcbiAgICAgICAgeyBjb2wxOiBcIlJlY29yZCAyMS0xXCIsIGNvbDI6IFwiUmVjb3JkIDIxLTJcIiB9LFxyXG4gICAgICAgIHsgY29sMTogXCJSZWNvcmQgMjItMVwiLCBjb2wyOiBcIlJlY29yZCAyMi0yXCIgfSxcclxuICAgICAgICB7IGNvbDE6IFwiUmVjb3JkIDIzLTFcIiwgY29sMjogXCJSZWNvcmQgMjMtMlwiIH0sXHJcbiAgICAgICAgeyBjb2wxOiBcIlJlY29yZCAyNC0xXCIsIGNvbDI6IFwiUmVjb3JkIDI0LTJcIiB9LFxyXG4gICAgICAgIHsgY29sMTogXCJSZWNvcmQgMjUtMVwiLCBjb2wyOiBcIlJlY29yZCAyNS0yXCIgfVxyXG4gICAgXVxyXG59KTtcclxuXHJcbiQoXCIjc2VhcmNoLXJlY29yZHNcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGZpbHRlciA9IHtcclxuICAgICAgICBTdGFydERhdGU6ICQoXCIjc3RhcnQtZGF0ZVwiKS52YWwoKSxcclxuICAgICAgICBFbmREYXRlOiAkKFwiI2VuZC1kYXRlXCIpLnZhbCgpLFxyXG4gICAgICAgIENsaWVudElQQWRkcmVzczogJChcIiNpcC1hZGRyZXNzXCIpLnZhbCgpLFxyXG4gICAgICAgIFVzZXJOYW1lOiAkKFwiI3VzZXItbmFtZVwiKS52YWwoKSxcclxuICAgICAgICBNYWNBZGRyZXNzOiAkKFwiI21hYy1hZGRyZXNzXCIpLnZhbCgpLFxyXG4gICAgICAgIFdvcmtpbmdUZWxlcGhvbmVOdW1iZXI6ICQoXCIjd3RuXCIpLnZhbCgpLFxyXG4gICAgICAgIEJpbGxpbmdUZWxlcGhvbmVOdW1iZXI6ICQoXCIjYnRuXCIpLnZhbCgpXHJcbiAgICB9O1xyXG5cclxuICAgIHRhYmxlLmZpbHRlcihmaWx0ZXIpO1xyXG59KTtcclxuXHJcbiQoXCIjc2hvdy1kaWFsb2dcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgZXNwYWxpZXIuZGlhbG9nKHtcclxuICAgICAgICBlbGVtZW50OiAkKCQudHJpbShkaWFsb2dUZW1wbGF0ZSgpKSksXHJcbiAgICAgICAgYnV0dG9uczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcInN1Ym1pdFwiLFxyXG4gICAgICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24gKGRpYWxvZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwic3VibWl0IVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBkaWFsb2cuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcImNhbmNlbFwiLFxyXG4gICAgICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24gKGRpYWxvZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpYWxvZy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9KTtcclxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovZ2l0L0VzcGFsaWVySlMvc3JjL2pzL2RlbW8vaW5kZXguanNcbiAqKi8iLCJpbXBvcnQgY29yZSBmcm9tIFwiLi9lc3BhbGllci5jb3JlXCI7XHJcbmltcG9ydCB2YWxpZGF0aW9uIGZyb20gXCIuL2VzcGFsaWVyLnZhbGlkYXRpb25cIjtcclxuaW1wb3J0IG1lc3NhZ2VGYWN0b3J5IGZyb20gXCIuL2VzcGFsaWVyLm1lc3NhZ2VGYWN0b3J5XCI7XHJcbmltcG9ydCB3YWl0U2NyZWVuIGZyb20gXCIuL2VzcGFsaWVyLndhaXRzY3JlZW5cIjtcclxuaW1wb3J0IHRhYmxlcyBmcm9tIFwiLi9lc3BhbGllci50YWJsZXNcIjtcclxuaW1wb3J0IGRpYWxvZyBmcm9tIFwiLi9lc3BhbGllci5kaWFsb2dcIjtcclxuXHJcbnZhciBlc3BhbGllciA9IHtcclxuICAgIHNob3dXYXJuaW5nOiBjb3JlLnNob3dXYXJuaW5nLFxyXG4gICAgc2hvd0luZm86IGNvcmUuc2hvd0luZm8sXHJcbiAgICBzZW5kUmVxdWVzdDogY29yZS5zZW5kUmVxdWVzdCxcclxuICAgIHRhYmxlOiB0YWJsZXMuY3JlYXRlLFxyXG4gICAgc25hdGNoOiBmdW5jdGlvbiAoeCkge1xyXG4gICAgICAgIGFsZXJ0KHgpO1xyXG4gICAgfSxcclxuICAgIHdpcmU6IGZ1bmN0aW9uIChmb3JtKSB7XHJcbiAgICAgICAgZm9ybSA9ICQoZm9ybSk7XHJcbiAgICAgICAgZm9ybS5hdHRyKFwibm92YWxpZGF0ZVwiLCBcIlwiKTtcclxuXHJcbiAgICAgICAgZm9ybS5zdWJtaXQoZnVuY3Rpb24gKGV2KSB7XHJcbiAgICAgICAgICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHZhciBpbnZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHZhciBjb250cm9scyA9ICQoXCJpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdFwiLCBmb3JtKS50b0FycmF5KCk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBjb250cm9sIG9mIGNvbnRyb2xzKSB7XHJcbiAgICAgICAgICAgICAgICBjb250cm9sID0gJChjb250cm9sKTtcclxuICAgICAgICAgICAgICAgIHZhciB2YWxpZGF0aW9ucyA9IGNvbnRyb2wuZGF0YShcInZhbGlkYXRpb25zXCIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGVycm9ycyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHZhbGlkYXRpb24gb2YgdmFsaWRhdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRpb24uaW52YWxpZChjb250cm9sKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLnB1c2godmFsaWRhdGlvbi5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3JzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnZhbGlkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBjb250cm9sLmRhdGEoXCJtZXNzYWdlXCIpLnNob3coe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBlcnJvcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VUeXBlOiBtZXNzYWdlRmFjdG9yeS5tZXNzYWdlVHlwZS5FcnJvclxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIWludmFsaWQpIHtcclxuICAgICAgICAgICAgICAgIGNvcmUuc2VuZFJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IGZvcm0uYXR0cihcIm1ldGhvZFwiKSxcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IGZvcm0uYXR0cihcImFjdGlvblwiKSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBmb3JtLnNlcmlhbGl6ZSgpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBmb3JtLm9uKFwiY2xpY2tcIiwgXCJbZGF0YS1hY3Rpb249XFxcInN1Ym1pdFxcXCJdXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgZm9ybS5zdWJtaXQoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgJC5lYWNoKCQoXCJpbnB1dCwgdGV4dGFyZWEsIHNlbGVjdFwiLCBmb3JtKSwgZnVuY3Rpb24gKGluZGV4LCBjb250cm9sKSB7XHJcbiAgICAgICAgICAgIHZhciBsb3dlckNhc2VJZCA9IGNvbnRyb2wuaWQudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghbG93ZXJDYXNlSWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29udHJvbCA9ICQoY29udHJvbCk7XHJcbiAgICAgICAgICAgIHZhciBncm91cDtcclxuICAgICAgICAgICAgdmFyIHZhbGlkYXRpb25zID0gW107XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKGNvbnRyb2wuYXR0cihcInR5cGVcIikpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJjaGVja2JveFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwID0gY29udHJvbC5jbG9zZXN0KFwiLmNoZWNrYm94XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImVtYWlsXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbnMucHVzaCh2YWxpZGF0aW9uLmVtYWlsKTtcclxuICAgICAgICAgICAgICAgICAgICBncm91cCA9IGNvbnRyb2wuY2xvc2VzdChcIi5mb3JtLWdyb3VwXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImRhdGVcIjpcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9ucy5wdXNoKHZhbGlkYXRpb24uZGF0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXAgPSBjb250cm9sLmNsb3Nlc3QoXCIuZm9ybS1ncm91cFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29udHJvbC5kYXRlcGlja2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2wuZGF0ZXBpY2tlcigpLmF0dHIoXCJ0eXBlXCIsIFwidGV4dFwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwID0gY29udHJvbC5jbG9zZXN0KFwiLmZvcm0tZ3JvdXBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBjb250cm9sTWVzc2FnZSA9IG1lc3NhZ2VGYWN0b3J5LmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICBhdHRhY2hUbzogZ3JvdXAsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlQXR0YWNobWVudDogbWVzc2FnZUZhY3RvcnkubWVzc2FnZUF0dGFjaG1lbnQuRmxvdyxcclxuICAgICAgICAgICAgICAgIG9uUmVtb3ZlZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGdyb3VwLnJlbW92ZUNsYXNzKFwiaGFzLWVycm9yXCIpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9uQWRkZWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBncm91cC5hZGRDbGFzcyhcImhhcy1lcnJvclwiKTtcclxuICAgICAgICAgICAgICAgICAgICBncm91cC52ZWxvY2l0eShcImNhbGxvdXQudGFkYVwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA1MDBcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoY29udHJvbC5hdHRyKFwicmVxdWlyZWRcIikpIHtcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25zLnB1c2godmFsaWRhdGlvbi5yZXF1aXJlZCk7XHJcbiAgICAgICAgICAgICAgICBncm91cC5hZGRDbGFzcyhcInJlcXVpcmVkXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb250cm9sLmRhdGEoXCJtZXNzYWdlXCIsIGNvbnRyb2xNZXNzYWdlKTtcclxuICAgICAgICAgICAgY29udHJvbC5kYXRhKFwidmFsaWRhdGlvbnNcIiwgdmFsaWRhdGlvbnMpO1xyXG4gICAgICAgICAgICBjb250cm9sLmF0dHIobG93ZXJDYXNlSWQsIFwiXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHNob3dXYWl0U2NyZWVuOiB3YWl0U2NyZWVuLnNob3csXHJcbiAgICBoaWRlV2FpdFNjcmVlbjogd2FpdFNjcmVlbi5oaWRlLFxyXG4gICAgc2hvcnREYXRlOiBjb3JlLnNob3J0RGF0ZSxcclxuICAgIHNob3J0VGltZTogY29yZS5zaG9ydFRpbWUsXHJcbiAgICBudW1iZXJXaXRoQ29tbWFzOiBjb3JlLm51bWJlcldpdGhDb21tYXMsXHJcbiAgICBwdWJsaXNoOiBjb3JlLnB1Ymxpc2gsXHJcbiAgICBwYXJzZUlTT0RhdGU6IGNvcmUucGFyc2VJU09EYXRlLFxyXG4gICAgc3Vic2NyaWJlOiBjb3JlLnN1YnNjcmliZSxcclxuICAgIGRpYWxvZzogZnVuY3Rpb24gKGFyZ3MpIHtcclxuICAgICAgICByZXR1cm4gZGlhbG9nKGFyZ3MpLnNob3coKTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGVzcGFsaWVyO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L2dpdC9Fc3BhbGllckpTL3NyYy9qcy9lc3BhbGllci5qc1xuICoqLyIsImltcG9ydCBjb21tb24gZnJvbSBcIi4vZXNwYWxpZXIuY29tbW9uXCI7XHJcblxyXG52YXIgcGxlYXNlV2FpdElkID0gXCJlc3BhbGllci13YWl0LXNjcmVlblwiO1xyXG52YXIgcGxlYXNlV2FpdCA9ICQoXCI8ZGl2IC8+XCIpO1xyXG5wbGVhc2VXYWl0LmF0dHIoXCJpZFwiLCBwbGVhc2VXYWl0SWQpO1xyXG5cclxudmFyIGhvdXJnbGFzcyA9ICdkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCwnICtcclxuICAgIFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIGNsYXNzPVxcXCJ1aWwtZ2VhcnNcXFwiIHZpZXdCb3g9XFxcIjAgMCAxMDAgMTAwXFxcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVxcXCJ4TWlkWU1pZCBtZWV0XFxcIiB3aWR0aD1cXFwiMTIwcHhcXFwiIGhlaWdodD1cXFwiMTIwcHhcXFwiPlwiICtcclxuICAgIFwiICA8cmVjdCBjbGFzcz1cXFwiYmtcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHg9XFxcIjBcXFwiIHk9XFxcIjBcXFwiIHdpZHRoPVxcXCIxMDBcXFwiIGhlaWdodD1cXFwiMTAwXFxcIiAvPlwiICtcclxuICAgIFwiICA8ZyB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSgtMjAgLTIwKVxcXCI+XCIgK1xyXG4gICAgXCIgICAgPHBhdGggZmlsbD1cXFwiI2ZhZmFmYVxcXCIgZD1cXFwiTSA3OS45IDUyLjYgQyA4MCA1MS44IDgwIDUwLjkgODAgNTAgcyAwIC0xLjggLTAuMSAtMi42IGwgLTUuMSAtMC40IGMgLTAuMyAtMi40IC0wLjkgLTQuNiAtMS44IC02LjcgbCA0LjIgLTIuOSBjIC0wLjcgLTEuNiAtMS42IC0zLjEgLTIuNiAtNC41IEwgNzAgMzUgYyAtMS40IC0xLjkgLTMuMSAtMy41IC00LjkgLTQuOSBsIDIuMiAtNC42IGMgLTEuNCAtMSAtMi45IC0xLjkgLTQuNSAtMi42IEwgNTkuOCAyNyBjIC0yLjEgLTAuOSAtNC40IC0xLjUgLTYuNyAtMS44IGwgLTAuNCAtNS4xIEMgNTEuOCAyMCA1MC45IDIwIDUwIDIwIHMgLTEuOCAwIC0yLjYgMC4xIGwgLTAuNCA1LjEgYyAtMi40IDAuMyAtNC42IDAuOSAtNi43IDEuOCBsIC0yLjkgLTQuMSBjIC0xLjYgMC43IC0zLjEgMS42IC00LjUgMi42IGwgMi4xIDQuNiBjIC0xLjkgMS40IC0zLjUgMy4xIC01IDQuOSBsIC00LjUgLTIuMSBjIC0xIDEuNCAtMS45IDIuOSAtMi42IDQuNSBsIDQuMSAyLjkgYyAtMC45IDIuMSAtMS41IDQuNCAtMS44IDYuOCBsIC01IDAuNCBDIDIwIDQ4LjIgMjAgNDkuMSAyMCA1MCBzIDAgMS44IDAuMSAyLjYgbCA1IDAuNCBjIDAuMyAyLjQgMC45IDQuNyAxLjggNi44IGwgLTQuMSAyLjkgYyAwLjcgMS42IDEuNiAzLjEgMi42IDQuNSBsIDQuNSAtMi4xIGMgMS40IDEuOSAzLjEgMy41IDUgNC45IGwgLTIuMSA0LjYgYyAxLjQgMSAyLjkgMS45IDQuNSAyLjYgbCAyLjkgLTQuMSBjIDIuMSAwLjkgNC40IDEuNSA2LjcgMS44IGwgMC40IDUuMSBDIDQ4LjIgODAgNDkuMSA4MCA1MCA4MCBzIDEuOCAwIDIuNiAtMC4xIGwgMC40IC01LjEgYyAyLjMgLTAuMyA0LjYgLTAuOSA2LjcgLTEuOCBsIDIuOSA0LjIgYyAxLjYgLTAuNyAzLjEgLTEuNiA0LjUgLTIuNiBMIDY1IDY5LjkgYyAxLjkgLTEuNCAzLjUgLTMgNC45IC00LjkgbCA0LjYgMi4yIGMgMSAtMS40IDEuOSAtMi45IDIuNiAtNC41IEwgNzMgNTkuOCBjIDAuOSAtMi4xIDEuNSAtNC40IDEuOCAtNi43IEwgNzkuOSA1Mi42IFogTSA1MCA2NSBjIC04LjMgMCAtMTUgLTYuNyAtMTUgLTE1IGMgMCAtOC4zIDYuNyAtMTUgMTUgLTE1IHMgMTUgNi43IDE1IDE1IEMgNjUgNTguMyA1OC4zIDY1IDUwIDY1IFpcXFwiPlwiICtcclxuICAgIFwiICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gdHlwZT1cXFwicm90YXRlXFxcIiBkdXI9XFxcIjJzXFxcIiByZXBlYXRDb3VudD1cXFwiaW5kZWZpbml0ZVxcXCIgdG89XFxcIjAgNTAgNTBcXFwiIGZyb209XFxcIjkwIDUwIDUwXFxcIiBhdHRyaWJ1dGVOYW1lPVxcXCJ0cmFuc2Zvcm1cXFwiIC8+XCIgK1xyXG4gICAgXCIgICAgPC9wYXRoPlwiICtcclxuICAgIFwiICA8L2c+XCIgK1xyXG4gICAgXCIgIDxnIHRyYW5zZm9ybT1cXFwidHJhbnNsYXRlKDIwIDIwKSByb3RhdGUoMTUgNTAuMDAwMiA1MClcXFwiPlwiICtcclxuICAgIFwiICAgIDxwYXRoIGZpbGw9XFxcIiNlZmVmZWZcXFwiIGQ9XFxcIk0gNzkuOSA1Mi42IEMgODAgNTEuOCA4MCA1MC45IDgwIDUwIHMgMCAtMS44IC0wLjEgLTIuNiBsIC01LjEgLTAuNCBjIC0wLjMgLTIuNCAtMC45IC00LjYgLTEuOCAtNi43IGwgNC4yIC0yLjkgYyAtMC43IC0xLjYgLTEuNiAtMy4xIC0yLjYgLTQuNSBMIDcwIDM1IGMgLTEuNCAtMS45IC0zLjEgLTMuNSAtNC45IC00LjkgbCAyLjIgLTQuNiBjIC0xLjQgLTEgLTIuOSAtMS45IC00LjUgLTIuNiBMIDU5LjggMjcgYyAtMi4xIC0wLjkgLTQuNCAtMS41IC02LjcgLTEuOCBsIC0wLjQgLTUuMSBDIDUxLjggMjAgNTAuOSAyMCA1MCAyMCBzIC0xLjggMCAtMi42IDAuMSBsIC0wLjQgNS4xIGMgLTIuNCAwLjMgLTQuNiAwLjkgLTYuNyAxLjggbCAtMi45IC00LjEgYyAtMS42IDAuNyAtMy4xIDEuNiAtNC41IDIuNiBsIDIuMSA0LjYgYyAtMS45IDEuNCAtMy41IDMuMSAtNSA0LjkgbCAtNC41IC0yLjEgYyAtMSAxLjQgLTEuOSAyLjkgLTIuNiA0LjUgbCA0LjEgMi45IGMgLTAuOSAyLjEgLTEuNSA0LjQgLTEuOCA2LjggbCAtNSAwLjQgQyAyMCA0OC4yIDIwIDQ5LjEgMjAgNTAgcyAwIDEuOCAwLjEgMi42IGwgNSAwLjQgYyAwLjMgMi40IDAuOSA0LjcgMS44IDYuOCBsIC00LjEgMi45IGMgMC43IDEuNiAxLjYgMy4xIDIuNiA0LjUgbCA0LjUgLTIuMSBjIDEuNCAxLjkgMy4xIDMuNSA1IDQuOSBsIC0yLjEgNC42IGMgMS40IDEgMi45IDEuOSA0LjUgMi42IGwgMi45IC00LjEgYyAyLjEgMC45IDQuNCAxLjUgNi43IDEuOCBsIDAuNCA1LjEgQyA0OC4yIDgwIDQ5LjEgODAgNTAgODAgcyAxLjggMCAyLjYgLTAuMSBsIDAuNCAtNS4xIGMgMi4zIC0wLjMgNC42IC0wLjkgNi43IC0xLjggbCAyLjkgNC4yIGMgMS42IC0wLjcgMy4xIC0xLjYgNC41IC0yLjYgTCA2NSA2OS45IGMgMS45IC0xLjQgMy41IC0zIDQuOSAtNC45IGwgNC42IDIuMiBjIDEgLTEuNCAxLjkgLTIuOSAyLjYgLTQuNSBMIDczIDU5LjggYyAwLjkgLTIuMSAxLjUgLTQuNCAxLjggLTYuNyBMIDc5LjkgNTIuNiBaIE0gNTAgNjUgYyAtOC4zIDAgLTE1IC02LjcgLTE1IC0xNSBjIDAgLTguMyA2LjcgLTE1IDE1IC0xNSBzIDE1IDYuNyAxNSAxNSBDIDY1IDU4LjMgNTguMyA2NSA1MCA2NSBaXFxcIj5cIiArXHJcbiAgICBcIiAgICAgIDxhbmltYXRlVHJhbnNmb3JtIHR5cGU9XFxcInJvdGF0ZVxcXCIgZHVyPVxcXCIyc1xcXCIgcmVwZWF0Q291bnQ9XFxcImluZGVmaW5pdGVcXFwiIHRvPVxcXCI5MCA1MCA1MFxcXCIgZnJvbT1cXFwiMCA1MCA1MFxcXCIgYXR0cmlidXRlTmFtZT1cXFwidHJhbnNmb3JtXFxcIiAvPlwiICtcclxuICAgIFwiICAgIDwvcGF0aD5cIiArXHJcbiAgICBcIiAgPC9nPlwiICtcclxuICAgIFwiPC9zdmc+XCI7XHJcbnZhciB3YWl0SW1hZ2UgPSAkKFwiPGltZyAvPlwiKTtcclxud2FpdEltYWdlLmF0dHIoXCJzcmNcIiwgaG91cmdsYXNzKTtcclxudmFyIGlubmVyID0gJChcIjxkaXYgLz5cIik7XHJcbmlubmVyLmFwcGVuZCh3YWl0SW1hZ2UpO1xyXG5wbGVhc2VXYWl0LmFwcGVuZChpbm5lcik7XHJcblxyXG52YXIgd2FpdFNjcmVlbiA9IHtcclxuICAgIHNob3c6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoJChcIiNcIiArIHBsZWFzZVdhaXRJZCkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcGxlYXNlV2FpdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbW1vbi5ib2R5LmFwcGVuZChwbGVhc2VXYWl0KTtcclxuICAgICAgICByZXR1cm4gcGxlYXNlV2FpdDtcclxuICAgIH0sXHJcbiAgICBoaWRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcGxlYXNlV2FpdC5yZW1vdmUoKTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdhaXRTY3JlZW47XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovZ2l0L0VzcGFsaWVySlMvc3JjL2pzL2VzcGFsaWVyLndhaXRzY3JlZW4uanNcbiAqKi8iLCJ2YXIgYm9keSA9ICQoXCJib2R5XCIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgYm9keTogYm9keSxcclxuICAgIHdpbmRvdzogJCh3aW5kb3cpLFxyXG4gICAgc2hvd1ZlbGx1bTogZnVuY3Rpb24oKSB7XHJcbiAgICBcdGlmKCQoXCIuZXNwYWxpZXItdmVsbHVtXCIpLmxlbmd0aCA+IDApIHtcclxuICAgIFx0XHRyZXR1cm47XHJcbiAgICBcdH1cclxuXHJcbiAgICAgICAgdmFyIHZlbGx1bSA9ICQoXCI8ZGl2IGNsYXNzPVxcXCJlc3BhbGllci12ZWxsdW1cXFwiIC8+XCIpO1xyXG4gICAgICAgIGJvZHkuYXBwZW5kKHZlbGx1bSk7XHJcbiAgICB9LFxyXG4gICAgaGlkZVZlbGx1bTogZnVuY3Rpb24oKSB7XHJcbiAgICBcdCQoXCIuZXNwYWxpZXItdmVsbHVtXCIpLnJlbW92ZSgpO1xyXG4gICAgfVxyXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L2dpdC9Fc3BhbGllckpTL3NyYy9qcy9lc3BhbGllci5jb21tb24uanNcbiAqKi8iLCJpbXBvcnQgbWVzc2FnZUZhY3RvcnkgZnJvbSBcIi4vZXNwYWxpZXIubWVzc2FnZUZhY3RvcnlcIjtcclxuaW1wb3J0IHdhaXRzY3JlZW4gZnJvbSBcIi4vZXNwYWxpZXIud2FpdHNjcmVlblwiO1xyXG5pbXBvcnQgY29tbW9uIGZyb20gXCIuL2VzcGFsaWVyLmNvbW1vblwiO1xyXG5pbXBvcnQgcHVic3ViIGZyb20gXCJwdWJzdWItanNcIjtcclxuXHJcbnZhciBtYWluTWVzc2FnZSA9IG1lc3NhZ2VGYWN0b3J5LmNyZWF0ZSh7XHJcbiAgICBhdHRhY2hUbzogY29tbW9uLmJvZHlcclxufSk7XHJcblxyXG52YXIgcGFyc2VEYXRlO1xyXG52YXIgdGVzdERhdGUgPSBuZXcgRGF0ZSgnMjAxMS0wNi0wMlQwOTozNDoyOSswMjowMCcpO1xyXG5cclxuaWYgKCF0ZXN0RGF0ZSB8fCArdGVzdERhdGUgIT09IDEzMDcwMDAwNjkwMDApIHtcclxuICAgIHBhcnNlRGF0ZSA9IGZ1bmN0aW9uIChzKSB7XHJcbiAgICAgICAgdmFyIGRheSwgdHosXHJcbiAgICAgICAgICAgIHJ4ID0gL14oXFxkezR9XFwtXFxkXFxkXFwtXFxkXFxkKFt0VCBdW1xcZDpcXC5dKik/KShbelpdfChbK1xcLV0pKFxcZFxcZCk6KFxcZFxcZCkpPyQvLFxyXG4gICAgICAgICAgICBwID0gcnguZXhlYyhzKSB8fCBbXTtcclxuICAgICAgICBpZiAocFsxXSkge1xyXG4gICAgICAgICAgICBkYXkgPSBwWzFdLnNwbGl0KC9cXEQvKTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIEwgPSBkYXkubGVuZ3RoOyBpIDwgTDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBkYXlbaV0gPSBwYXJzZUludChkYXlbaV0sIDEwKSB8fCAwO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBkYXlbMV0gLT0gMTtcclxuICAgICAgICAgICAgZGF5ID0gbmV3IERhdGUoRGF0ZS5VVEMuYXBwbHkoRGF0ZSwgZGF5KSk7XHJcbiAgICAgICAgICAgIGlmICghZGF5LmdldERhdGUoKSkgcmV0dXJuIE5hTjtcclxuICAgICAgICAgICAgaWYgKHBbNV0pIHtcclxuICAgICAgICAgICAgICAgIHR6ID0gKHBhcnNlSW50KHBbNV0sIDEwKSAqIDYwKTtcclxuICAgICAgICAgICAgICAgIGlmIChwWzZdKSB0eiArPSBwYXJzZUludChwWzZdLCAxMCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocFs0XSA9PSAnKycpIHR6ICo9IC0xO1xyXG4gICAgICAgICAgICAgICAgaWYgKHR6KSBkYXkuc2V0VVRDTWludXRlcyhkYXkuZ2V0VVRDTWludXRlcygpICsgdHopO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBkYXk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBOYU47XHJcbiAgICB9O1xyXG59XHJcbmVsc2Uge1xyXG4gICAgcGFyc2VEYXRlID0gZnVuY3Rpb24gKHMpIHtcclxuICAgICAgICByZXR1cm4gbmV3IERhdGUocyk7XHJcbiAgICB9O1xyXG59XHJcblxyXG50ZXN0RGF0ZSA9IHVuZGVmaW5lZDtcclxuXHJcbnZhciBjb3JlID0ge1xyXG4gICAgc2VuZFJlcXVlc3Q6IGZ1bmN0aW9uIChyZXEpIHtcclxuICAgICAgICB3YWl0c2NyZWVuLnNob3coKTtcclxuICAgICAgICAkKFwiLlwiICsgbWFpbk1lc3NhZ2Uuc2V0dGluZ3MubWVzc2FnZUNvbnRhaW5lckNsYXNzKS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgdmFyIGFqYXhTZXR0aW5ncyA9IHtcclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgeGhyRmllbGRzOiB7XHJcbiAgICAgICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3RhdHVzQ29kZToge1xyXG4gICAgICAgICAgICAgICAgNTAwOiBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb3JlLnNob3dFcnJvcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLnJlc3BvbnNlSlNPTi5NZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjc3NDbGFzczogXCJlcnJvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgNDAwOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZXJyb3JzID0gW107XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQuZWFjaChyZXNwb25zZS5yZXNwb25zZUpTT04uZXJyb3JzLCBmdW5jdGlvbiAoaW5kZXgsIGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvci5zb3VyY2UgJiYgZXJyb3Iuc291cmNlLnBhcmFtZXRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNwZWNpZmljRmllbGQgPSAkKFwiI1wiICsgZXJyb3Iuc291cmNlLnBhcmFtZXRlci50b0xvd2VyQ2FzZSgpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3BlY2lmaWNGaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmaWVsZE1lc3NhZ2UgPSBzcGVjaWZpY0ZpZWxkLmRhdGEoXCJtZXNzYWdlXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGRNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkTWVzc2FnZS5zaG93KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLmRldGFpbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VUeXBlOiBtZXNzYWdlRmFjdG9yeS5tZXNzYWdlVHlwZS5FcnJvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5wdXNoKGVycm9yLmRldGFpbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3JlLnNob3dFcnJvcihlcnJvcnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgd2FpdHNjcmVlbi5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcS5ldmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdWJzdWIucHVibGlzaChyZXEuZXZlbnQsIHJlc3BvbnNlLnJlc3BvbnNlSlNPTik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVxLm9uU3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXEub25TdWNjZXNzKHJlc3BvbnNlLnJlc3BvbnNlSlNPTik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgJC5leHRlbmQoYWpheFNldHRpbmdzLCByZXEpO1xyXG5cclxuICAgICAgICByZXR1cm4gJC5hamF4KGFqYXhTZXR0aW5ncyk7XHJcbiAgICB9LFxyXG4gICAgc2hvd1dhcm5pbmc6IGZ1bmN0aW9uIChtZXNzYWdlcykge1xyXG4gICAgICAgIG1haW5NZXNzYWdlLnNob3coe1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlcyxcclxuICAgICAgICAgICAgbWVzc2FnZVR5cGU6IG1lc3NhZ2VGYWN0b3J5Lm1lc3NhZ2VUeXBlLldhcm5pbmdcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBzaG93RXJyb3I6IGZ1bmN0aW9uIChtZXNzYWdlcykge1xyXG4gICAgICAgIG1haW5NZXNzYWdlLnNob3coe1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlcyxcclxuICAgICAgICAgICAgbWVzc2FnZVR5cGU6IG1lc3NhZ2VGYWN0b3J5Lm1lc3NhZ2VUeXBlLkVycm9yXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgc2hvd0luZm86IGZ1bmN0aW9uIChtZXNzYWdlcykge1xyXG4gICAgICAgIG1haW5NZXNzYWdlLnNob3coe1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlcyxcclxuICAgICAgICAgICAgbWVzc2FnZVR5cGU6IG1lc3NhZ2VGYWN0b3J5Lm1lc3NhZ2VUeXBlLkluZm9cclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBoaWRlTWFpbk1lc3NhZ2U6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBtYWluTWVzc2FnZS5yZW1vdmUoKTtcclxuICAgIH0sXHJcbiAgICBpc0VtcHR5T3JTcGFjZXM6IGZ1bmN0aW9uIChzdHIpIHtcclxuICAgICAgICByZXR1cm4gc3RyID09PSB1bmRlZmluZWQgfHwgc3RyID09PSBudWxsIHx8IHN0ci5tYXRjaCgvXlxccyokLykgIT09IG51bGw7XHJcbiAgICB9LFxyXG4gICAgaXNFbWFpbDogZnVuY3Rpb24gKHN0cikge1xyXG4gICAgICAgIHZhciBlbWFpbFJlZ2V4ID0gL14oKFtcXHctXStcXC4pK1tcXHctXSt8KFthLXpBLVpdezF9fFtcXHctXXsyLH0pKUAoKChbMC0xXT9bMC05XXsxLDJ9fDI1WzAtNV18MlswLTRdWzAtOV0pXFwuKFswLTFdP1swLTldezEsMn18MjVbMC01XXwyWzAtNF1bMC05XSlcXC4oWzAtMV0/WzAtOV17MSwyfXwyNVswLTVdfDJbMC00XVswLTldKVxcLihbMC0xXT9bMC05XXsxLDJ9fDI1WzAtNV18MlswLTRdWzAtOV0pKXsxfXwoW2EtekEtWl0rW1xcdy1dK1xcLikrW2EtekEtWl17Miw0fSkkLztcclxuICAgICAgICByZXR1cm4gY29yZS5pc0VtcHR5T3JTcGFjZXMoc3RyKSB8fCBzdHIubWF0Y2goZW1haWxSZWdleCk7XHJcbiAgICB9LFxyXG4gICAgaXNEYXRlOiBmdW5jdGlvbiAoc3RyKSB7XHJcbiAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZShzdHIpO1xyXG4gICAgICAgIHJldHVybiBjb3JlLmlzRW1wdHlPclNwYWNlcyhzdHIpIHx8IChkICE9IFwiSW52YWxpZCBEYXRlXCIgJiYgIWlzTmFOKGQpKTtcclxuICAgIH0sXHJcbiAgICBudW1iZXJXaXRoQ29tbWFzOiBmdW5jdGlvbiBudW1iZXJXaXRoQ29tbWFzKHgpIHtcclxuICAgICAgICB2YXIgcGFydHMgPSB4LnRvU3RyaW5nKCkuc3BsaXQoXCIuXCIpO1xyXG4gICAgICAgIHBhcnRzWzBdID0gcGFydHNbMF0ucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgXCIsXCIpO1xyXG4gICAgICAgIHJldHVybiBwYXJ0cy5qb2luKFwiLlwiKTtcclxuICAgIH0sXHJcbiAgICBwYXJzZUlTT0RhdGU6IHBhcnNlRGF0ZSxcclxuICAgIHNob3J0RGF0ZTogZnVuY3Rpb24gKGRhdGUpIHtcclxuICAgICAgICBpZiAoIShkYXRlIGluc3RhbmNlb2YgRGF0ZSkpIHtcclxuICAgICAgICAgICAgZGF0ZSA9IHBhcnNlRGF0ZShkYXRlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoZGF0ZS5nZXRNb250aCgpICsgMSkgK1xyXG4gICAgICAgICAgICBcIi9cIiArIGRhdGUuZ2V0RGF0ZSgpICtcclxuICAgICAgICAgICAgXCIvXCIgKyBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgICB9LFxyXG4gICAgc2hvcnRUaW1lOiBmdW5jdGlvbiAoZGF0ZSkge1xyXG4gICAgICAgIGlmICghKGRhdGUgaW5zdGFuY2VvZiBEYXRlKSkge1xyXG4gICAgICAgICAgICBkYXRlID0gcGFyc2VEYXRlKGRhdGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGhvdXIgPSBkYXRlLmdldEhvdXJzKCk7XHJcbiAgICAgICAgdmFyIGFtcG0gPSBcIkFNXCI7XHJcblxyXG4gICAgICAgIGlmIChob3VyID4gMTEpIHtcclxuICAgICAgICAgICAgaG91ciAtPSAxMjtcclxuICAgICAgICAgICAgYW1wbSA9IFwiUE1cIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChob3VyID09PSAwKSB7XHJcbiAgICAgICAgICAgIGhvdXIgPSAxMjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBtaW51dGVzID0gXCIwMFwiICsgZGF0ZS5nZXRNaW51dGVzKCk7XHJcbiAgICAgICAgcmV0dXJuIGhvdXIgKyBcIjpcIiArIG1pbnV0ZXMuc3Vic3RyaW5nKG1pbnV0ZXMubGVuZ3RoIC0gMikgKyBcIiBcIiArIGFtcG07XHJcbiAgICB9LFxyXG4gICAgcHVibGlzaDogZnVuY3Rpb24gKHRvcGljLCBtZXNzYWdlKSB7XHJcbiAgICAgICAgcHVic3ViLnB1Ymxpc2godG9waWMsIG1lc3NhZ2UpO1xyXG4gICAgfSxcclxuICAgIHN1YnNjcmliZTogZnVuY3Rpb24gKHRvcGljLCBoYW5kbGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHB1YnN1Yi5zdWJzY3JpYmUodG9waWMsIGZ1bmN0aW9uICh0b3BpYywgbWVzc2FnZSkge1xyXG4gICAgICAgICAgICBoYW5kbGVyKG1lc3NhZ2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29yZTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9naXQvRXNwYWxpZXJKUy9zcmMvanMvZXNwYWxpZXIuY29yZS5qc1xuICoqLyIsImltcG9ydCBib290c3RyYXBUZW1wbGF0ZXMgZnJvbSBcIi4vdGVtcGxhdGVzL2Jvb3RzdHJhcFRlbXBsYXRlc1wiO1xyXG5cclxuY2xhc3MgTWVzc2FnZURpc3BsYXllciB7XHJcbiAgICBjb25zdHJ1Y3RvcihhcmdzKSB7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHtcclxuICAgICAgICAgICAgYXR0YWNoVG86IG51bGwsXHJcbiAgICAgICAgICAgIG1lc3NhZ2VDb250YWluZXJDbGFzczogXCJtZXNzYWdlLWNvbnRhaW5lclwiLFxyXG4gICAgICAgICAgICBjbG9zZU1lc3NhZ2VDbGFzczogXCJjbG9zZS1tZXNzYWdlXCIsXHJcbiAgICAgICAgICAgIGluZm9NZXNzYWdlQ2xhc3M6IFwiaW5mby1tZXNzYWdlXCIsXHJcbiAgICAgICAgICAgIHdhcm5pbmdNZXNzYWdlQ2xhc3M6IFwid2FybmluZy1tZXNzYWdlXCIsXHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZUNsYXNzOiBcImVycm9yLW1lc3NhZ2VcIixcclxuICAgICAgICAgICAgc3VjY2Vzc01lc3NhZ2VDbGFzczogXCJzdWNjZXNzLW1lc3NhZ2VcIixcclxuICAgICAgICAgICAgbWVzc2FnZUF0dGFjaG1lbnQ6IGZhY3RvcnkubWVzc2FnZUF0dGFjaG1lbnQuRml4ZWQsXHJcbiAgICAgICAgICAgIG9uUmVtb3ZlZDogZnVuY3Rpb24gKCkgeyB9LFxyXG4gICAgICAgICAgICBvbkFkZGVkOiBmdW5jdGlvbiAoKSB7IH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgc2NvcGUgPSB0aGlzO1xyXG5cclxuICAgICAgICAkLmV4dGVuZCh0aGlzLnNldHRpbmdzLCBhcmdzKTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnNldHRpbmdzLmF0dGFjaFRvKSB7XHJcbiAgICAgICAgICAgIHRocm93IChcIk1lc3NhZ2VGYWN0b3J5IHJlcXVpcmVzIGFuIGF0dGFjaFRvIGFyZ3VtZW50LlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLm1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3Mub25SZW1vdmVkKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNob3cobWVzc2FnZUFyZ3MpIHtcclxuICAgICAgICB2YXIgbWVzc2FnZVR5cGVDbGFzcywgbWVzc2FnZVNldHRpbmdzLCBtZXNzYWdlQXR0YWNobWVudENsYXNzO1xyXG5cclxuICAgICAgICAvL05PVEU6IFRoZXJlIHNob3VsZCBvbmx5IGJlIG9uZSBtZXNzYWdlIGRpc3BsYXllZCBwZXIgaW5zdGFuY2UuXHJcbiAgICAgICAgaWYgKHRoaXMubWVzc2FnZSkge1xyXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UucmVtb3ZlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL05PVEU6IEFsbG93IHRoZW0gdG8gZWl0aGVyIHVzZSBhbiBhcnJheSBvZiBtZXNzYWdlcyBvciBhXHJcbiAgICAgICAgLy8gICAgICBzaW5nbGUgbWVzc2FnZS5cclxuICAgICAgICBpZiAodHlwZW9mIG1lc3NhZ2VBcmdzLm1lc3NhZ2UgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2VBcmdzLm1lc3NhZ2UgPSBbbWVzc2FnZUFyZ3MubWVzc2FnZV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtZXNzYWdlU2V0dGluZ3MgPSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2VUeXBlOiBmYWN0b3J5Lm1lc3NhZ2VUeXBlLkluZm8sXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFtdXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgJC5leHRlbmQobWVzc2FnZVNldHRpbmdzLCBtZXNzYWdlQXJncyk7XHJcblxyXG4gICAgICAgIGlmIChtZXNzYWdlU2V0dGluZ3MubWVzc2FnZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJObyBtZXNzYWdlIHRvIGRpc3BsYXkuXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzd2l0Y2ggKG1lc3NhZ2VTZXR0aW5ncy5tZXNzYWdlVHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIGZhY3RvcnkubWVzc2FnZVR5cGUuSW5mbzpcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VUeXBlQ2xhc3MgPSB0aGlzLnNldHRpbmdzLmluZm9NZXNzYWdlQ2xhc3M7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBmYWN0b3J5Lm1lc3NhZ2VUeXBlLlN1Y2Nlc3M6XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlVHlwZUNsYXNzID0gdGhpcy5zZXR0aW5ncy5zdWNjZXNzTWVzc2FnZUNsYXNzO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgZmFjdG9yeS5tZXNzYWdlVHlwZS5FcnJvcjpcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VUeXBlQ2xhc3MgPSB0aGlzLnNldHRpbmdzLmVycm9yTWVzc2FnZUNsYXNzO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgZmFjdG9yeS5tZXNzYWdlVHlwZS5XYXJuaW5nOlxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZVR5cGVDbGFzcyA9IHRoaXMuc2V0dGluZ3Mud2FybmluZ01lc3NhZ2VDbGFzcztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJJbnZhbGlkIG1lc3NhZ2UgdHlwZS5cIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzd2l0Y2ggKHRoaXMuc2V0dGluZ3MubWVzc2FnZUF0dGFjaG1lbnQpIHtcclxuICAgICAgICAgICAgY2FzZSBmYWN0b3J5Lm1lc3NhZ2VBdHRhY2htZW50LkZpeGVkOlxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZUF0dGFjaG1lbnRDbGFzcyA9IFwiZml4ZWRcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGZhY3RvcnkubWVzc2FnZUF0dGFjaG1lbnQuRmxvdzpcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VBdHRhY2htZW50Q2xhc3MgPSBcImZsb3dcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZUF0dGFjaG1lbnRDbGFzcyA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubWVzc2FnZSA9IGJvb3RzdHJhcFRlbXBsYXRlcy5tZXNzYWdlKHtcclxuICAgICAgICAgICAgbWVzc2FnZVR5cGVDbGFzczogbWVzc2FnZVR5cGVDbGFzcyxcclxuICAgICAgICAgICAgbWVzc2FnZXM6IG1lc3NhZ2VTZXR0aW5ncy5tZXNzYWdlLFxyXG4gICAgICAgICAgICBtZXNzYWdlQ29udGFpbmVyQ2xhc3M6IHRoaXMuc2V0dGluZ3MubWVzc2FnZUNvbnRhaW5lckNsYXNzLFxyXG4gICAgICAgICAgICBjbG9zZU1lc3NhZ2VDbGFzczogdGhpcy5zZXR0aW5ncy5jbG9zZU1lc3NhZ2VDbGFzcyxcclxuICAgICAgICAgICAgbWVzc2FnZUF0dGFjaG1lbnRDbGFzczogbWVzc2FnZUF0dGFjaG1lbnRDbGFzcyxcclxuICAgICAgICAgICAgbW9yZVRoYW5PbmU6ICh0eXBlb2YgbWVzc2FnZUFyZ3MubWVzc2FnZSAhPT0gJ3N0cmluZycgJiZcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VBcmdzLm1lc3NhZ2UubGVuZ3RoID4gMSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gJCh0aGlzLm1lc3NhZ2UpO1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3MuYXR0YWNoVG8uYXBwZW5kKHRoaXMubWVzc2FnZSk7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5vbkFkZGVkKHRoaXMubWVzc2FnZSk7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlLm9uKFwiY2xpY2tcIiwgXCIuXCIgKyB0aGlzLnNldHRpbmdzLmNsb3NlTWVzc2FnZUNsYXNzLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJyZW1vdmUgbWUuLi5cIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWVzc2FnZTtcclxuICAgIH1cclxufTtcclxuXHJcbnZhciBmYWN0b3J5ID0ge1xyXG4gICAgY3JlYXRlOiBmdW5jdGlvbiAoYXJncykge1xyXG4gICAgICAgIHJldHVybiBuZXcgTWVzc2FnZURpc3BsYXllcihhcmdzKTtcclxuICAgIH0sXHJcbiAgICBtZXNzYWdlVHlwZToge1xyXG4gICAgICAgIEluZm86IFwiSW5mb1wiLFxyXG4gICAgICAgIFN1Y2Nlc3M6IFwic3VjY2Vzc1wiLFxyXG4gICAgICAgIEVycm9yOiBcImVycm9yXCIsXHJcbiAgICAgICAgV2FybmluZzogXCJ3YXJuaW5nXCJcclxuICAgIH0sXHJcbiAgICBtZXNzYWdlQXR0YWNobWVudDoge1xyXG4gICAgICAgIEZpeGVkOiBcIkZpeGVkXCIsXHJcbiAgICAgICAgRmxvdzogXCJGbG93XCJcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZhY3Rvcnk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovZ2l0L0VzcGFsaWVySlMvc3JjL2pzL2VzcGFsaWVyLm1lc3NhZ2VGYWN0b3J5LmpzXG4gKiovIiwidmFyIHRlbXBsYXRlcyA9IHtcclxuXHRtZXNzYWdlOiBmdW5jdGlvbihkYXRhKSB7XHJcblx0XHR2YXIgcm9vdCA9ICQoXCI8ZGl2IC8+XCIpO1xyXG5cdFx0cm9vdC5hZGRDbGFzcyhkYXRhLm1lc3NhZ2VDb250YWluZXJDbGFzcyk7XHJcblx0XHRyb290LmFkZENsYXNzKGRhdGEubWVzc2FnZVR5cGVDbGFzcyk7XHJcblx0XHRyb290LmFkZENsYXNzKGRhdGEubWVzc2FnZUF0dGFjaG1lbnRDbGFzcyk7XHJcblxyXG5cdFx0dmFyIGNsb3NlQnV0dG9uID0gJChcIjxhIC8+XCIpO1xyXG5cdFx0Y2xvc2VCdXR0b24uYXR0cihcImhyZWZcIiwgXCJqYXZhc2NyaXB0OiB2b2lkKDApO1wiKTtcclxuXHRcdGNsb3NlQnV0dG9uLmFkZENsYXNzKGRhdGEuY2xvc2VNZXNzYWdlQ2xhc3MpO1xyXG5cclxuXHRcdHJvb3QuYXBwZW5kKGNsb3NlQnV0dG9uKTtcclxuXHJcblx0XHRpZiAoZGF0YS5tb3JlVGhhbk9uZSkge1xyXG5cdFx0XHR2YXIgbGlzdCA9ICQoXCI8dWwgLz5cIik7XHJcblxyXG5cdFx0XHQkLmVhY2goZGF0YS5tZXNzYWdlcywgZnVuY3Rpb24oaW5kZXgsIG1lc3NhZ2UpIHtcclxuXHRcdFx0XHRsaXN0LmFwcGVuZChcIjxsaT5cIiArIG1lc3NhZ2UgKyBcIjwvbGk+XCIpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHJvb3QuYXBwZW5kKGxpc3QpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cm9vdC5hcHBlbmQoXCI8cD5cIiArIGRhdGEubWVzc2FnZXMgKyBcIjwvcD5cIik7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHJvb3RbMF07XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0ZW1wbGF0ZXM7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovZ2l0L0VzcGFsaWVySlMvc3JjL2pzL3RlbXBsYXRlcy9ib290c3RyYXBUZW1wbGF0ZXMuanNcbiAqKi8iLCIvKlxuQ29weXJpZ2h0IChjKSAyMDEwLDIwMTEsMjAxMiwyMDEzLDIwMTQgTW9yZ2FuIFJvZGVyaWNrIGh0dHA6Ly9yb2Rlcmljay5ka1xuTGljZW5zZTogTUlUIC0gaHR0cDovL21yZ25yZHJjay5taXQtbGljZW5zZS5vcmdcblxuaHR0cHM6Ly9naXRodWIuY29tL21yb2Rlcmljay9QdWJTdWJKU1xuKi9cbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSl7XG5cdCd1c2Ugc3RyaWN0JztcblxuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpe1xuICAgICAgICAvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuXG4gICAgICAgIGRlZmluZShbJ2V4cG9ydHMnXSwgZmFjdG9yeSk7XG5cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jyl7XG4gICAgICAgIC8vIENvbW1vbkpTXG4gICAgICAgIGZhY3RvcnkoZXhwb3J0cyk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBCcm93c2VyIGdsb2JhbHNcbiAgICAgICAgdmFyIFB1YlN1YiA9IHt9O1xuICAgICAgICByb290LlB1YlN1YiA9IFB1YlN1YjtcbiAgICAgICAgZmFjdG9yeShQdWJTdWIpO1xuICAgIH1cbn0oKCB0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JyAmJiB3aW5kb3cgKSB8fCB0aGlzLCBmdW5jdGlvbiAoUHViU3ViKXtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBtZXNzYWdlcyA9IHt9LFxuXHRcdGxhc3RVaWQgPSAtMTtcblxuXHRmdW5jdGlvbiBoYXNLZXlzKG9iail7XG5cdFx0dmFyIGtleTtcblxuXHRcdGZvciAoa2V5IGluIG9iail7XG5cdFx0XHRpZiAoIG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpICl7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvKipcblx0ICpcdFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHRocm93cyB0aGUgcGFzc2VkIGV4Y2VwdGlvbiwgZm9yIHVzZSBhcyBhcmd1bWVudCBmb3Igc2V0VGltZW91dFxuXHQgKlx0QHBhcmFtIHsgT2JqZWN0IH0gZXggQW4gRXJyb3Igb2JqZWN0XG5cdCAqL1xuXHRmdW5jdGlvbiB0aHJvd0V4Y2VwdGlvbiggZXggKXtcblx0XHRyZXR1cm4gZnVuY3Rpb24gcmVUaHJvd0V4Y2VwdGlvbigpe1xuXHRcdFx0dGhyb3cgZXg7XG5cdFx0fTtcblx0fVxuXG5cdGZ1bmN0aW9uIGNhbGxTdWJzY3JpYmVyV2l0aERlbGF5ZWRFeGNlcHRpb25zKCBzdWJzY3JpYmVyLCBtZXNzYWdlLCBkYXRhICl7XG5cdFx0dHJ5IHtcblx0XHRcdHN1YnNjcmliZXIoIG1lc3NhZ2UsIGRhdGEgKTtcblx0XHR9IGNhdGNoKCBleCApe1xuXHRcdFx0c2V0VGltZW91dCggdGhyb3dFeGNlcHRpb24oIGV4ICksIDApO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGNhbGxTdWJzY3JpYmVyV2l0aEltbWVkaWF0ZUV4Y2VwdGlvbnMoIHN1YnNjcmliZXIsIG1lc3NhZ2UsIGRhdGEgKXtcblx0XHRzdWJzY3JpYmVyKCBtZXNzYWdlLCBkYXRhICk7XG5cdH1cblxuXHRmdW5jdGlvbiBkZWxpdmVyTWVzc2FnZSggb3JpZ2luYWxNZXNzYWdlLCBtYXRjaGVkTWVzc2FnZSwgZGF0YSwgaW1tZWRpYXRlRXhjZXB0aW9ucyApe1xuXHRcdHZhciBzdWJzY3JpYmVycyA9IG1lc3NhZ2VzW21hdGNoZWRNZXNzYWdlXSxcblx0XHRcdGNhbGxTdWJzY3JpYmVyID0gaW1tZWRpYXRlRXhjZXB0aW9ucyA/IGNhbGxTdWJzY3JpYmVyV2l0aEltbWVkaWF0ZUV4Y2VwdGlvbnMgOiBjYWxsU3Vic2NyaWJlcldpdGhEZWxheWVkRXhjZXB0aW9ucyxcblx0XHRcdHM7XG5cblx0XHRpZiAoICFtZXNzYWdlcy5oYXNPd25Qcm9wZXJ0eSggbWF0Y2hlZE1lc3NhZ2UgKSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRmb3IgKHMgaW4gc3Vic2NyaWJlcnMpe1xuXHRcdFx0aWYgKCBzdWJzY3JpYmVycy5oYXNPd25Qcm9wZXJ0eShzKSl7XG5cdFx0XHRcdGNhbGxTdWJzY3JpYmVyKCBzdWJzY3JpYmVyc1tzXSwgb3JpZ2luYWxNZXNzYWdlLCBkYXRhICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gY3JlYXRlRGVsaXZlcnlGdW5jdGlvbiggbWVzc2FnZSwgZGF0YSwgaW1tZWRpYXRlRXhjZXB0aW9ucyApe1xuXHRcdHJldHVybiBmdW5jdGlvbiBkZWxpdmVyTmFtZXNwYWNlZCgpe1xuXHRcdFx0dmFyIHRvcGljID0gU3RyaW5nKCBtZXNzYWdlICksXG5cdFx0XHRcdHBvc2l0aW9uID0gdG9waWMubGFzdEluZGV4T2YoICcuJyApO1xuXG5cdFx0XHQvLyBkZWxpdmVyIHRoZSBtZXNzYWdlIGFzIGl0IGlzIG5vd1xuXHRcdFx0ZGVsaXZlck1lc3NhZ2UobWVzc2FnZSwgbWVzc2FnZSwgZGF0YSwgaW1tZWRpYXRlRXhjZXB0aW9ucyk7XG5cblx0XHRcdC8vIHRyaW0gdGhlIGhpZXJhcmNoeSBhbmQgZGVsaXZlciBtZXNzYWdlIHRvIGVhY2ggbGV2ZWxcblx0XHRcdHdoaWxlKCBwb3NpdGlvbiAhPT0gLTEgKXtcblx0XHRcdFx0dG9waWMgPSB0b3BpYy5zdWJzdHIoIDAsIHBvc2l0aW9uICk7XG5cdFx0XHRcdHBvc2l0aW9uID0gdG9waWMubGFzdEluZGV4T2YoJy4nKTtcblx0XHRcdFx0ZGVsaXZlck1lc3NhZ2UoIG1lc3NhZ2UsIHRvcGljLCBkYXRhLCBpbW1lZGlhdGVFeGNlcHRpb25zICk7XG5cdFx0XHR9XG5cdFx0fTtcblx0fVxuXG5cdGZ1bmN0aW9uIG1lc3NhZ2VIYXNTdWJzY3JpYmVycyggbWVzc2FnZSApe1xuXHRcdHZhciB0b3BpYyA9IFN0cmluZyggbWVzc2FnZSApLFxuXHRcdFx0Zm91bmQgPSBCb29sZWFuKG1lc3NhZ2VzLmhhc093blByb3BlcnR5KCB0b3BpYyApICYmIGhhc0tleXMobWVzc2FnZXNbdG9waWNdKSksXG5cdFx0XHRwb3NpdGlvbiA9IHRvcGljLmxhc3RJbmRleE9mKCAnLicgKTtcblxuXHRcdHdoaWxlICggIWZvdW5kICYmIHBvc2l0aW9uICE9PSAtMSApe1xuXHRcdFx0dG9waWMgPSB0b3BpYy5zdWJzdHIoIDAsIHBvc2l0aW9uICk7XG5cdFx0XHRwb3NpdGlvbiA9IHRvcGljLmxhc3RJbmRleE9mKCAnLicgKTtcblx0XHRcdGZvdW5kID0gQm9vbGVhbihtZXNzYWdlcy5oYXNPd25Qcm9wZXJ0eSggdG9waWMgKSAmJiBoYXNLZXlzKG1lc3NhZ2VzW3RvcGljXSkpO1xuXHRcdH1cblxuXHRcdHJldHVybiBmb3VuZDtcblx0fVxuXG5cdGZ1bmN0aW9uIHB1Ymxpc2goIG1lc3NhZ2UsIGRhdGEsIHN5bmMsIGltbWVkaWF0ZUV4Y2VwdGlvbnMgKXtcblx0XHR2YXIgZGVsaXZlciA9IGNyZWF0ZURlbGl2ZXJ5RnVuY3Rpb24oIG1lc3NhZ2UsIGRhdGEsIGltbWVkaWF0ZUV4Y2VwdGlvbnMgKSxcblx0XHRcdGhhc1N1YnNjcmliZXJzID0gbWVzc2FnZUhhc1N1YnNjcmliZXJzKCBtZXNzYWdlICk7XG5cblx0XHRpZiAoICFoYXNTdWJzY3JpYmVycyApe1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmICggc3luYyA9PT0gdHJ1ZSApe1xuXHRcdFx0ZGVsaXZlcigpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzZXRUaW1lb3V0KCBkZWxpdmVyLCAwICk7XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0LyoqXG5cdCAqXHRQdWJTdWIucHVibGlzaCggbWVzc2FnZVssIGRhdGFdICkgLT4gQm9vbGVhblxuXHQgKlx0LSBtZXNzYWdlIChTdHJpbmcpOiBUaGUgbWVzc2FnZSB0byBwdWJsaXNoXG5cdCAqXHQtIGRhdGE6IFRoZSBkYXRhIHRvIHBhc3MgdG8gc3Vic2NyaWJlcnNcblx0ICpcdFB1Ymxpc2hlcyB0aGUgdGhlIG1lc3NhZ2UsIHBhc3NpbmcgdGhlIGRhdGEgdG8gaXQncyBzdWJzY3JpYmVyc1xuXHQqKi9cblx0UHViU3ViLnB1Ymxpc2ggPSBmdW5jdGlvbiggbWVzc2FnZSwgZGF0YSApe1xuXHRcdHJldHVybiBwdWJsaXNoKCBtZXNzYWdlLCBkYXRhLCBmYWxzZSwgUHViU3ViLmltbWVkaWF0ZUV4Y2VwdGlvbnMgKTtcblx0fTtcblxuXHQvKipcblx0ICpcdFB1YlN1Yi5wdWJsaXNoU3luYyggbWVzc2FnZVssIGRhdGFdICkgLT4gQm9vbGVhblxuXHQgKlx0LSBtZXNzYWdlIChTdHJpbmcpOiBUaGUgbWVzc2FnZSB0byBwdWJsaXNoXG5cdCAqXHQtIGRhdGE6IFRoZSBkYXRhIHRvIHBhc3MgdG8gc3Vic2NyaWJlcnNcblx0ICpcdFB1Ymxpc2hlcyB0aGUgdGhlIG1lc3NhZ2Ugc3luY2hyb25vdXNseSwgcGFzc2luZyB0aGUgZGF0YSB0byBpdCdzIHN1YnNjcmliZXJzXG5cdCoqL1xuXHRQdWJTdWIucHVibGlzaFN5bmMgPSBmdW5jdGlvbiggbWVzc2FnZSwgZGF0YSApe1xuXHRcdHJldHVybiBwdWJsaXNoKCBtZXNzYWdlLCBkYXRhLCB0cnVlLCBQdWJTdWIuaW1tZWRpYXRlRXhjZXB0aW9ucyApO1xuXHR9O1xuXG5cdC8qKlxuXHQgKlx0UHViU3ViLnN1YnNjcmliZSggbWVzc2FnZSwgZnVuYyApIC0+IFN0cmluZ1xuXHQgKlx0LSBtZXNzYWdlIChTdHJpbmcpOiBUaGUgbWVzc2FnZSB0byBzdWJzY3JpYmUgdG9cblx0ICpcdC0gZnVuYyAoRnVuY3Rpb24pOiBUaGUgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIGEgbmV3IG1lc3NhZ2UgaXMgcHVibGlzaGVkXG5cdCAqXHRTdWJzY3JpYmVzIHRoZSBwYXNzZWQgZnVuY3Rpb24gdG8gdGhlIHBhc3NlZCBtZXNzYWdlLiBFdmVyeSByZXR1cm5lZCB0b2tlbiBpcyB1bmlxdWUgYW5kIHNob3VsZCBiZSBzdG9yZWQgaWZcblx0ICpcdHlvdSBuZWVkIHRvIHVuc3Vic2NyaWJlXG5cdCoqL1xuXHRQdWJTdWIuc3Vic2NyaWJlID0gZnVuY3Rpb24oIG1lc3NhZ2UsIGZ1bmMgKXtcblx0XHRpZiAoIHR5cGVvZiBmdW5jICE9PSAnZnVuY3Rpb24nKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBtZXNzYWdlIGlzIG5vdCByZWdpc3RlcmVkIHlldFxuXHRcdGlmICggIW1lc3NhZ2VzLmhhc093blByb3BlcnR5KCBtZXNzYWdlICkgKXtcblx0XHRcdG1lc3NhZ2VzW21lc3NhZ2VdID0ge307XG5cdFx0fVxuXG5cdFx0Ly8gZm9yY2luZyB0b2tlbiBhcyBTdHJpbmcsIHRvIGFsbG93IGZvciBmdXR1cmUgZXhwYW5zaW9ucyB3aXRob3V0IGJyZWFraW5nIHVzYWdlXG5cdFx0Ly8gYW5kIGFsbG93IGZvciBlYXN5IHVzZSBhcyBrZXkgbmFtZXMgZm9yIHRoZSAnbWVzc2FnZXMnIG9iamVjdFxuXHRcdHZhciB0b2tlbiA9ICd1aWRfJyArIFN0cmluZygrK2xhc3RVaWQpO1xuXHRcdG1lc3NhZ2VzW21lc3NhZ2VdW3Rva2VuXSA9IGZ1bmM7XG5cblx0XHQvLyByZXR1cm4gdG9rZW4gZm9yIHVuc3Vic2NyaWJpbmdcblx0XHRyZXR1cm4gdG9rZW47XG5cdH07XG5cblx0LyogUHVibGljOiBDbGVhcnMgYWxsIHN1YnNjcmlwdGlvbnNcblx0ICovXG5cdFB1YlN1Yi5jbGVhckFsbFN1YnNjcmlwdGlvbnMgPSBmdW5jdGlvbiBjbGVhckFsbFN1YnNjcmlwdGlvbnMoKXtcblx0XHRtZXNzYWdlcyA9IHt9O1xuXHR9O1xuXG5cdC8qUHVibGljOiBDbGVhciBzdWJzY3JpcHRpb25zIGJ5IHRoZSB0b3BpY1xuXHQqL1xuXHRQdWJTdWIuY2xlYXJTdWJzY3JpcHRpb25zID0gZnVuY3Rpb24gY2xlYXJTdWJzY3JpcHRpb25zKHRvcGljKXtcblx0XHR2YXIgbTsgXG5cdFx0Zm9yIChtIGluIG1lc3NhZ2VzKXtcblx0XHRcdGlmIChtZXNzYWdlcy5oYXNPd25Qcm9wZXJ0eShtKSAmJiBtLmluZGV4T2YodG9waWMpID09PSAwKXtcblx0XHRcdFx0ZGVsZXRlIG1lc3NhZ2VzW21dO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHQvKiBQdWJsaWM6IHJlbW92ZXMgc3Vic2NyaXB0aW9ucy5cblx0ICogV2hlbiBwYXNzZWQgYSB0b2tlbiwgcmVtb3ZlcyBhIHNwZWNpZmljIHN1YnNjcmlwdGlvbi5cblx0ICogV2hlbiBwYXNzZWQgYSBmdW5jdGlvbiwgcmVtb3ZlcyBhbGwgc3Vic2NyaXB0aW9ucyBmb3IgdGhhdCBmdW5jdGlvblxuXHQgKiBXaGVuIHBhc3NlZCBhIHRvcGljLCByZW1vdmVzIGFsbCBzdWJzY3JpcHRpb25zIGZvciB0aGF0IHRvcGljIChoaWVyYXJjaHkpXG5cdCAqXG5cdCAqIHZhbHVlIC0gQSB0b2tlbiwgZnVuY3Rpb24gb3IgdG9waWMgdG8gdW5zdWJzY3JpYmUuXG5cdCAqXG5cdCAqIEV4YW1wbGVzXG5cdCAqXG5cdCAqXHRcdC8vIEV4YW1wbGUgMSAtIHVuc3Vic2NyaWJpbmcgd2l0aCBhIHRva2VuXG5cdCAqXHRcdHZhciB0b2tlbiA9IFB1YlN1Yi5zdWJzY3JpYmUoJ215dG9waWMnLCBteUZ1bmMpO1xuXHQgKlx0XHRQdWJTdWIudW5zdWJzY3JpYmUodG9rZW4pO1xuXHQgKlxuXHQgKlx0XHQvLyBFeGFtcGxlIDIgLSB1bnN1YnNjcmliaW5nIHdpdGggYSBmdW5jdGlvblxuXHQgKlx0XHRQdWJTdWIudW5zdWJzY3JpYmUobXlGdW5jKTtcblx0ICpcblx0ICpcdFx0Ly8gRXhhbXBsZSAzIC0gdW5zdWJzY3JpYmluZyBhIHRvcGljXG5cdCAqXHRcdFB1YlN1Yi51bnN1YnNjcmliZSgnbXl0b3BpYycpO1xuXHQgKi9cblx0UHViU3ViLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24odmFsdWUpe1xuXHRcdHZhciBpc1RvcGljICAgID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiBtZXNzYWdlcy5oYXNPd25Qcm9wZXJ0eSh2YWx1ZSksXG5cdFx0XHRpc1Rva2VuICAgID0gIWlzVG9waWMgJiYgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyxcblx0XHRcdGlzRnVuY3Rpb24gPSB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicsXG5cdFx0XHRyZXN1bHQgPSBmYWxzZSxcblx0XHRcdG0sIG1lc3NhZ2UsIHQ7XG5cblx0XHRpZiAoaXNUb3BpYyl7XG5cdFx0XHRkZWxldGUgbWVzc2FnZXNbdmFsdWVdO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGZvciAoIG0gaW4gbWVzc2FnZXMgKXtcblx0XHRcdGlmICggbWVzc2FnZXMuaGFzT3duUHJvcGVydHkoIG0gKSApe1xuXHRcdFx0XHRtZXNzYWdlID0gbWVzc2FnZXNbbV07XG5cblx0XHRcdFx0aWYgKCBpc1Rva2VuICYmIG1lc3NhZ2VbdmFsdWVdICl7XG5cdFx0XHRcdFx0ZGVsZXRlIG1lc3NhZ2VbdmFsdWVdO1xuXHRcdFx0XHRcdHJlc3VsdCA9IHZhbHVlO1xuXHRcdFx0XHRcdC8vIHRva2VucyBhcmUgdW5pcXVlLCBzbyB3ZSBjYW4ganVzdCBzdG9wIGhlcmVcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChpc0Z1bmN0aW9uKSB7XG5cdFx0XHRcdFx0Zm9yICggdCBpbiBtZXNzYWdlICl7XG5cdFx0XHRcdFx0XHRpZiAobWVzc2FnZS5oYXNPd25Qcm9wZXJ0eSh0KSAmJiBtZXNzYWdlW3RdID09PSB2YWx1ZSl7XG5cdFx0XHRcdFx0XHRcdGRlbGV0ZSBtZXNzYWdlW3RdO1xuXHRcdFx0XHRcdFx0XHRyZXN1bHQgPSB0cnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH07XG59KSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9naXQvRXNwYWxpZXJKUy9+L3B1YnN1Yi1qcy9zcmMvcHVic3ViLmpzXG4gKiovIiwiaW1wb3J0IGNvcmUgZnJvbSBcIi4vZXNwYWxpZXIuY29yZVwiO1xyXG5cclxudmFyIHZhbGlkYXRpb24gPSB7XHJcbiAgICByZXF1aXJlZDoge1xyXG4gICAgICAgIGludmFsaWQ6IGZ1bmN0aW9uKGNvbnRyb2wpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChjb250cm9sLmF0dHIoXCJ0eXBlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiY2hlY2tib3hcIjpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gIWNvbnRyb2wuaXMoXCI6Y2hlY2tlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gY29udHJvbC52YWwoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29yZS5pc0VtcHR5T3JTcGFjZXModmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXNzYWdlOiBcIkZpZWxkIGlzIHJlcXVpcmVkLlwiXHJcbiAgICB9LFxyXG4gICAgZW1haWw6IHtcclxuICAgICAgICBpbnZhbGlkOiBmdW5jdGlvbihjb250cm9sKSB7XHJcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGNvbnRyb2wudmFsKCk7XHJcbiAgICAgICAgICAgIHJldHVybiAhY29yZS5pc0VtYWlsKHZhbHVlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1lc3NhZ2U6IFwiSW52YWxpZCBlbWFpbCBhZGRyZXNzLlwiXHJcbiAgICB9LFxyXG4gICAgZGF0ZToge1xyXG4gICAgICAgIGludmFsaWQ6IGZ1bmN0aW9uKGNvbnRyb2wpIHtcclxuICAgICAgICAgICAgdmFyIHZhbHVlID0gY29udHJvbC52YWwoKTtcclxuICAgICAgICAgICAgcmV0dXJuICFjb3JlLmlzRGF0ZSh2YWx1ZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXNzYWdlOiBcIkludmFsaWQgZGF0ZS5cIlxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgdmFsaWRhdGlvbjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9naXQvRXNwYWxpZXJKUy9zcmMvanMvZXNwYWxpZXIudmFsaWRhdGlvbi5qc1xuICoqLyIsImltcG9ydCBtZXNzYWdlRmFjdG9yeSBmcm9tIFwiLi9lc3BhbGllci5tZXNzYWdlRmFjdG9yeVwiO1xyXG5pbXBvcnQgd2FpdHNjcmVlbiBmcm9tIFwiLi9lc3BhbGllci53YWl0c2NyZWVuXCI7XHJcbmltcG9ydCBjb21tb24gZnJvbSBcIi4vZXNwYWxpZXIuY29tbW9uXCI7XHJcbmltcG9ydCBjb3JlIGZyb20gXCIuL2VzcGFsaWVyLmNvcmVcIjtcclxuXHJcbnZhciBnZXRGb290ZXIgPSBmdW5jdGlvbiAodGFibGUpIHtcclxuICAgIHZhciBzdGFydEF0UGFnZSA9IE1hdGgubWF4KDAsIHRhYmxlLnNldHRpbmdzLmN1cnJlbnRQYWdlIC0gMyk7XHJcbiAgICB2YXIgZW5kQXRQYWdlID0gTWF0aC5taW4odGFibGUuc2V0dGluZ3MucGFnZXMgLSAxLCB0YWJsZS5zZXR0aW5ncy5jdXJyZW50UGFnZSArIDMgKyBNYXRoLm1heCgzIC0gdGFibGUuc2V0dGluZ3MuY3VycmVudFBhZ2UsIDApKTtcclxuICAgIHZhciBwYWdpbmdDb250cm9sID0gXCI8dWwgY2xhc3M9XFxcInBhZ2luYXRpb25cXFwiPlwiO1xyXG5cclxuICAgIHBhZ2luZ0NvbnRyb2wgKz0gYDxsaSR7dGFibGUuc2V0dGluZ3MuY3VycmVudFBhZ2UgPT0gMCA/IGAgY2xhc3M9XCJkaXNhYmxlZFwiYCA6IFwiXCJ9PjxhIGRhdGEtcGFnZT1cIiR7KHRhYmxlLnNldHRpbmdzLmN1cnJlbnRQYWdlIC0gMSkgfVwiIGNsYXNzPVwiZXNwYWxpZXItdGFibGUtYnV0dG9uXCIgaHJlZj1cImphdmFzY3JpcHQ6IHZvaWQoMCk7XCI+PHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JmxhcXVvOzwvc3Bhbj48L2E+PC9saT5gO1xyXG5cclxuICAgIGZvciAodmFyIGkgPSBzdGFydEF0UGFnZTsgaSA8PSBlbmRBdFBhZ2U7IGkrKykge1xyXG4gICAgICAgIHBhZ2luZ0NvbnRyb2wgKz0gYDxsaSR7aSA9PT0gdGFibGUuc2V0dGluZ3MuY3VycmVudFBhZ2UgPyBgIGNsYXNzPVwiYWN0aXZlXCJgIDogXCJcIn0+PGEgZGF0YS1wYWdlPVwiJHtpfVwiIGNsYXNzPVwiZXNwYWxpZXItdGFibGUtYnV0dG9uXCIgaHJlZj1cImphdmFzY3JpcHQ6IHZvaWQoMCk7XCI+JHsoaSArIDEpIH08L2E+PC9saT5gO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBuZXh0UGFnZSA9ICh0YWJsZS5zZXR0aW5ncy5jdXJyZW50UGFnZSArIDEpO1xyXG4gICAgcGFnaW5nQ29udHJvbCArPSBgPGxpJHtuZXh0UGFnZSA9PSB0YWJsZS5zZXR0aW5ncy5wYWdlcyA/IGAgY2xhc3M9XCJkaXNhYmxlZFwiYCA6IFwiXCJ9PjxhIGRhdGEtcGFnZT1cIiR7bmV4dFBhZ2V9XCIgY2xhc3M9XCJlc3BhbGllci10YWJsZS1idXR0b25cIiBocmVmPVwiamF2YXNjcmlwdDogdm9pZCgwKTtcIj48c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mcmFxdW87PC9zcGFuPjwvYT48L2xpPmA7XHJcblxyXG4gICAgcmV0dXJuIGA8dGZvb3Q+PHRyPjx0ZCBjb2xzcGFuPVwiNDJcIj4ke3BhZ2luZ0NvbnRyb2x9PC90ZD48L3RyPjwvdGZvb3Q+YDtcclxufTtcclxuXHJcbnZhciByZW5kZXJUYWJsZSA9IGZ1bmN0aW9uICh0YWJsZSkge1xyXG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgdmFyIHJlbmRlcmVkID0gYDx0YWJsZSBjbGFzcz1cIiR7dGFibGUuc2V0dGluZ3MudGFibGVDbGFzc30gdGFibGUgdGFibGUtc3RyaXBlZFwiPmA7XHJcblxyXG4gICAgICAgIGlmICh0YWJsZS5zZXR0aW5ncy5oZWFkZXJUZW1wbGF0ZSkge1xyXG4gICAgICAgICAgICByZW5kZXJlZCArPSB0YWJsZS5zZXR0aW5ncy5oZWFkZXJUZW1wbGF0ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVuZGVyZWQgKz0gXCI8dGJvZHk+XCI7XHJcbiAgICAgICAgdmFyIHN0YXJ0QXRJbmRleCA9IHRhYmxlLnNldHRpbmdzLmN1cnJlbnRQYWdlICogdGFibGUuc2V0dGluZ3MucGFnZVNpemU7XHJcblxyXG4gICAgICAgIGlmICh0YWJsZS5zZXR0aW5ncy5kYXRhKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSBzdGFydEF0SW5kZXg7IGkgPCBNYXRoLm1pbihzdGFydEF0SW5kZXggKyB0YWJsZS5zZXR0aW5ncy5wYWdlU2l6ZSwgdGFibGUuc2V0dGluZ3MuZGF0YS5sZW5ndGgpOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHJlbmRlcmVkICs9IHRhYmxlLnNldHRpbmdzLnJvd1RlbXBsYXRlKHRhYmxlLnNldHRpbmdzLmRhdGFbaV0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZW5kZXJlZCArPSBcIjwvdGJvZHk+XCI7XHJcblxyXG4gICAgICAgICAgICBpZiAodGFibGUuc2V0dGluZ3MucGFnZXMgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICByZW5kZXJlZCArPSBnZXRGb290ZXIodGFibGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlc29sdmUocmVuZGVyZWQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvcmUuc2VuZFJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgdXJsOiB0YWJsZS5zZXR0aW5ncy5mZXRjaFVybCxcclxuICAgICAgICAgICAgICAgIHR5cGU6IFwiUE9TVFwiLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIFBhZ2U6IHRhYmxlLnNldHRpbmdzLmN1cnJlbnRQYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgIFBhZ2VTaXplOiB0YWJsZS5zZXR0aW5ncy5wYWdlU2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICBDcml0ZXJpYTogdGFibGUuc2V0dGluZ3MuZmlsdGVyXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRhYmxlLnNldHRpbmdzLmZldGNoQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICB0YWJsZS5zZXR0aW5ncy5mZXRjaENhbGxiYWNrKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGFibGUuc2V0dGluZ3MucGFnZXMgPSBNYXRoLmNlaWwocmVzdWx0LmRhdGEudG90YWwgLyByZXN1bHQuZGF0YS5wYWdlU2l6ZSk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdC5kYXRhLnJlY29yZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICByZW5kZXJlZCArPSB0YWJsZS5zZXR0aW5ncy5yb3dUZW1wbGF0ZShyZXN1bHQuZGF0YS5yZWNvcmRzW2ldKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlbmRlcmVkICs9IFwiPC90Ym9keT5cIjtcclxuICAgICAgICAgICAgICAgIHJlbmRlcmVkICs9IGdldEZvb3Rlcih0YWJsZSk7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlbmRlcmVkKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcHJvbWlzZS50aGVuKFxyXG4gICAgICAgIGZ1bmN0aW9uIChyZW5kZXJlZCkge1xyXG4gICAgICAgICAgICB0YWJsZS5zZXR0aW5ncy5jb250YWluZXIuaHRtbChyZW5kZXJlZCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGFibGUuc2V0dGluZ3MucmVuZGVyZWRDYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgdGFibGUuc2V0dGluZ3MucmVuZGVyZWRDYWxsYmFjayh0YWJsZS5zZXR0aW5ncy5jb250YWluZXJbMF0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0YWJsZVwiKVswXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxufTtcclxuXHJcbmNsYXNzIFRhYmxlSW5zdGFuY2Uge1xyXG4gICAgY29uc3RydWN0b3IoYXJncykge1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSB7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lcjogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICBjdXJyZW50UGFnZTogMCxcclxuICAgICAgICAgICAgZGF0YTogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICBmZXRjaENhbGxiYWNrOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIGZldGNoVXJsOiBcIlwiLFxyXG4gICAgICAgICAgICBoZWFkZXJUZW1wbGF0ZTogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICBwYWdlU2l6ZTogMTAsXHJcbiAgICAgICAgICAgIHByZWZldGNoUGFnZXM6IDUsXHJcbiAgICAgICAgICAgIHJvd1RlbXBsYXRlOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIHRhYmxlQ2xhc3M6IFwiZXNwYWxpZXItdGFibGVcIixcclxuICAgICAgICAgICAgcmVuZGVyZWRDYWxsYmFjazogdW5kZWZpbmVkXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgJC5leHRlbmQodGhpcy5zZXR0aW5ncywgYXJncyk7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5zZXR0aW5ncy5mZXRjaFVybCAmJiAhdGhpcy5zZXR0aW5ncy5kYXRhKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJZb3UgbXVzdCBlaXRoZXIgc3BlY2lmeSBhIGZldGNoIHVybCBvciBwYXNzIGluIGRhdGEgZm9yIHRoZSB0YWJsZSB0byBkaXNwbGF5LlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5zZXR0aW5ncy5jb250YWluZXIpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIllvdSBtdXN0IHNwZWNpZnkgYSBjb250YWluZXIgdG8gcGxhY2UgdGhlIHRhYmxlIGluLlwiKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnNldHRpbmdzLnJvd1RlbXBsYXRlKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJZb3UgbXVzdCBwcm92aWRlIGEgcm93IHRlbXBsYXRlLlwiKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuZGF0YSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLnBhZ2VzID0gTWF0aC5jZWlsKHRoaXMuc2V0dGluZ3MuZGF0YS5sZW5ndGggLyB0aGlzLnNldHRpbmdzLnBhZ2VTaXplKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQuZXh0ZW5kKHRoaXMuc2V0dGluZ3MsIGFyZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIG5leHQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5jdXJyZW50UGFnZSsrO1xyXG4gICAgICAgIHJlbmRlclRhYmxlKHRoaXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHByZXZpb3VzKCkge1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3MuY3VycmVudFBhZ2UtLTtcclxuICAgICAgICByZW5kZXJUYWJsZSh0aGlzKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBmaWx0ZXIoZmlsdGVyKSB7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5maWx0ZXIgPSBmaWx0ZXI7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5jdXJyZW50UGFnZSA9IDA7XHJcbiAgICAgICAgcmVuZGVyVGFibGUodGhpcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ29Ub1BhZ2UocGFnZSkge1xyXG4gICAgICAgIGlmIChwYWdlIDwgMCB8fCBwYWdlID49IHRoaXMuc2V0dGluZ3MucGFnZXMpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5jdXJyZW50UGFnZSA9IHBhZ2U7XHJcbiAgICAgICAgcmVuZGVyVGFibGUodGhpcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgdGFibGVzID0ge1xyXG4gICAgY3JlYXRlOiBmdW5jdGlvbiAoYXJncykge1xyXG4gICAgICAgIHZhciB0YWJsZSA9IG5ldyBUYWJsZUluc3RhbmNlKGFyZ3MpO1xyXG4gICAgICAgIHRhYmxlLnNldHRpbmdzLmNvbnRhaW5lci5vbihcImNsaWNrXCIsIFwiLmVzcGFsaWVyLXRhYmxlLWJ1dHRvblwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRhYmxlLmdvVG9QYWdlKCQodGhpcykuZGF0YShcInBhZ2VcIikpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJlbmRlclRhYmxlKHRhYmxlKTtcclxuICAgICAgICByZXR1cm4gdGFibGU7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0YWJsZXM7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovZ2l0L0VzcGFsaWVySlMvc3JjL2pzL2VzcGFsaWVyLnRhYmxlcy5qc1xuICoqLyIsImltcG9ydCBjb3JlIGZyb20gXCIuL2VzcGFsaWVyLmNvcmVcIjtcclxuaW1wb3J0IGNvbW1vbiBmcm9tIFwiLi9lc3BhbGllci5jb21tb25cIjtcclxuXHJcbmNsYXNzIERpYWxvZyB7XHJcbiAgICBjb25zdHJ1Y3RvcihhcmdzKSB7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHtcclxuICAgICAgICAgICAgZWxlbWVudDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICBidXR0b25zOiBbXVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgICQuZXh0ZW5kKHRoaXMuc2V0dGluZ3MsIGFyZ3MpO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuc2V0dGluZ3MuZWxlbWVudCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJZb3UgbXVzdCBwYXNzIGFuIGVsZW1lbnQuXCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zZXR0aW5ncy5lbGVtZW50Lmxlbmd0aCAhPT0gMSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJlbGVtZW50IG11c3QgaGF2ZSBleGFjdGx5IG9uZSByb290IGVsZW1lbnQuXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzaG93KCkge1xyXG4gICAgICAgIHZhciBoZWlnaHQsIHNjcm9sbFRvcCwgdG9wLCB3aW5kb3dIZWlnaHQsIGRpYWxvZztcclxuICAgICAgICBjb3JlLmhpZGVNYWluTWVzc2FnZSgpO1xyXG4gICAgICAgIGNvbW1vbi5zaG93VmVsbHVtKCk7XHJcbiAgICAgICAgd2luZG93SGVpZ2h0ID0gY29tbW9uLndpbmRvdy5oZWlnaHQoKTtcclxuICAgICAgICBkaWFsb2cgPSB0aGlzLnNldHRpbmdzLmVsZW1lbnQ7XHJcbiAgICAgICAgZGlhbG9nLmNzcyhcInBvc2l0aW9uXCIsIFwiYWJzb2x1dGVcIik7XHJcbiAgICAgICAgJChcImEsIGJ1dHRvbiwgaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWFcIikuYXR0cihcInRhYmluZGV4XCIsIFwiLTFcIik7XHJcblxyXG4gICAgICAgIGNvbW1vbi5ib2R5LmFwcGVuZChkaWFsb2cpO1xyXG5cclxuICAgICAgICBzY3JvbGxUb3AgPSBjb21tb24ud2luZG93LnNjcm9sbFRvcCgpO1xyXG5cclxuICAgICAgICBoZWlnaHQgPSBkaWFsb2cuaGVpZ2h0KCk7XHJcbiAgICAgICAgdG9wID0gKHdpbmRvd0hlaWdodCAvIDIpIC0gKGhlaWdodCAvIDIpICsgc2Nyb2xsVG9wO1xyXG4gICAgICAgIHRvcCA9IHRvcCA+IDAgPyB0b3AgOiAwO1xyXG4gICAgICAgIGRpYWxvZy5jc3MoXCJ0b3BcIiwgdG9wKTtcclxuICAgICAgICAkKFwiOmZvY3VzXCIpLmJsdXIoKTtcclxuICAgICAgICAkKFwiLmZvY3VzXCIsIGRpYWxvZykuZmlyc3QoKS5mb2N1cygpO1xyXG5cclxuICAgICAgICBkaWFsb2cuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcblxyXG4gICAgICAgIGRpYWxvZy52ZWxvY2l0eShcInRyYW5zaXRpb24ud2hpcmxJblwiLCB7XHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiA0NTBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZm9yKGxldCBidXR0b24gb2YgdGhpcy5zZXR0aW5ncy5idXR0b25zKSB7XHJcbiAgICAgICAgICAgICQoXCIjXCIgKyBidXR0b24ubmFtZSwgZGlhbG9nKS5jbGljaygoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBidXR0b24uaGFuZGxlcih0aGlzKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBoaWRlKCkge1xyXG4gICAgICAgIHZhciBkaWFsb2cgPSAkKHRoaXMuc2V0dGluZ3MuZWxlbWVudCk7XHJcbiAgICAgICAgZGlhbG9nLnZlbG9jaXR5KFwidHJhbnNpdGlvbi53aGlybE91dFwiLCB7XHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAxNTAsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBkaWFsb2cucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAkKFwiI25vdGlmaWNhdGlvbk1lc3NhZ2VcIikucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCQoXCIuZGlhbG9nXCIpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tbW9uLmhpZGVWZWxsdW0oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoYXJncykge1xyXG4gICAgcmV0dXJuIG5ldyBEaWFsb2coYXJncyk7XHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9naXQvRXNwYWxpZXJKUy9zcmMvanMvZXNwYWxpZXIuZGlhbG9nLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==