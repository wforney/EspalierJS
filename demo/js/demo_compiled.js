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
	
	var _tableDemoTable = __webpack_require__(27);
	
	var _tableDemoTable2 = _interopRequireDefault(_tableDemoTable);
	
	var _dialogDialogDemo = __webpack_require__(29);
	
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
	
	var _espalierTable = __webpack_require__(3);
	
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
/* 3 */
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
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _espalier = __webpack_require__(2);
	
	var _espalier2 = _interopRequireDefault(_espalier);
	
	var _templatesRow = __webpack_require__(28);
	
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
/* 28 */
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
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _espalier = __webpack_require__(2);
	
	var _espalier2 = _interopRequireDefault(_espalier);
	
	var _templatesDialogTemplate = __webpack_require__(30);
	
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
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(19);
	module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
	    return "<form class=\"col-sm-4 col-sm-offset-4\" style=\"background: white;padding: 1em;border-radius: .15em;box-shadow: 0 0 .5em #81e181;\">\r\n    <div class=\"form-group\">\r\n        <label for=\"exampleInputEmail1\">Email address</label>\r\n        <input required type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"Enter email\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"exampleInputPassword1\">Password</label>\r\n        <input required type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">\r\n    </div>\r\n    <a href=\"javascript: void(0);\" id=\"submit\" class=\"btn btn-default\">Submit</a>\r\n    <a href=\"javascript: void(0);\" id=\"cancel\" class=\"btn btn-danger\">Cancel</a>\r\n</form>";
	},"useData":true});

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBiOGVkNDE3MmE0NGYwNGNmMjVhNiIsIndlYnBhY2s6Ly8vYzovZ2l0L0VzcGFsaWVySlMvc3JjL2pzL2RlbW8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2M6L2dpdC9Fc3BhbGllckpTL3NyYy9qcy9lc3BhbGllci5qcyIsIndlYnBhY2s6Ly8vYzovZ2l0L0VzcGFsaWVySlMvc3JjL2pzL2VzcGFsaWVyLnRhYmxlLmpzIiwid2VicGFjazovLy9jOi9naXQvRXNwYWxpZXJKUy9zcmMvanMvZXNwYWxpZXIubWVzc2FnZUZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vL2M6L2dpdC9Fc3BhbGllckpTL3NyYy9qcy9lc3BhbGllci5jb3JlLmpzIiwid2VicGFjazovLy9jOi9naXQvRXNwYWxpZXJKUy9zcmMvanMvZXNwYWxpZXIud2FpdHNjcmVlbi5qcyIsIndlYnBhY2s6Ly8vYzovZ2l0L0VzcGFsaWVySlMvc3JjL2pzL2VzcGFsaWVyLmNvbW1vbi5qcyIsIndlYnBhY2s6Ly8vYzovZ2l0L0VzcGFsaWVySlMvfi9wdWJzdWItanMvc3JjL3B1YnN1Yi5qcyIsIndlYnBhY2s6Ly8vYzovZ2l0L0VzcGFsaWVySlMvc3JjL2pzL3RlbXBsYXRlcy9ib290c3RyYXBUZW1wbGF0ZXMuanMiLCJ3ZWJwYWNrOi8vL2M6L2dpdC9Fc3BhbGllckpTL3NyYy9qcy9lc3BhbGllci5mb3Jtcy5qcyIsIndlYnBhY2s6Ly8vYzovZ2l0L0VzcGFsaWVySlMvc3JjL2pzL2VzcGFsaWVyLmZvcm1zLmNvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vL2M6L2dpdC9Fc3BhbGllckpTL3NyYy9qcy9lc3BhbGllci52YWxpZGF0aW9uLmpzIiwid2VicGFjazovLy9jOi9naXQvRXNwYWxpZXJKUy9zcmMvanMvZXNwYWxpZXIuZGlhbG9nLmpzIiwid2VicGFjazovLy9jOi9naXQvRXNwYWxpZXJKUy9zcmMvanMvZXNwYWxpZXIuZ3JhcGguanMiLCJ3ZWJwYWNrOi8vL2M6L2dpdC9Fc3BhbGllckpTL3NyYy9qcy9lc3BhbGllci5ncmFwaC5ub2RlLmpzIiwid2VicGFjazovLy9jOi9naXQvRXNwYWxpZXJKUy9zcmMvanMvZGVtby9ncmFwaC9kZW1vR3JhcGguanMiLCJ3ZWJwYWNrOi8vL2M6L2dpdC9Fc3BhbGllckpTL3NyYy9qcy9kZW1vL2dyYXBoL2dyYXBoTm9kZXMuanMiLCJ3ZWJwYWNrOi8vLy4vZ3JhcGgvdGVtcGxhdGVzL2dyYXBoUHJvZ3Jlc3MuaGJzIiwid2VicGFjazovLy9jOi9naXQvRXNwYWxpZXJKUy9+L2hhbmRsZWJhcnMvcnVudGltZS5qcyIsIndlYnBhY2s6Ly8vYzovZ2l0L0VzcGFsaWVySlMvfi9oYW5kbGViYXJzL2Rpc3QvY2pzL2hhbmRsZWJhcnMucnVudGltZS5qcyIsIndlYnBhY2s6Ly8vYzovZ2l0L0VzcGFsaWVySlMvfi9oYW5kbGViYXJzL2Rpc3QvY2pzL2hhbmRsZWJhcnMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vL2M6L2dpdC9Fc3BhbGllckpTL34vaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vL2M6L2dpdC9Fc3BhbGllckpTL34vaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL2V4Y2VwdGlvbi5qcyIsIndlYnBhY2s6Ly8vYzovZ2l0L0VzcGFsaWVySlMvfi9oYW5kbGViYXJzL2Rpc3QvY2pzL2hhbmRsZWJhcnMvc2FmZS1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vL2M6L2dpdC9Fc3BhbGllckpTL34vaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL3J1bnRpbWUuanMiLCJ3ZWJwYWNrOi8vL2M6L2dpdC9Fc3BhbGllckpTL34vaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL25vLWNvbmZsaWN0LmpzIiwid2VicGFjazovLy9jOi9naXQvRXNwYWxpZXJKUy9zcmMvanMvZGVtby90YWJsZS9kZW1vVGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vdGFibGUvdGVtcGxhdGVzL3Jvdy5oYnMiLCJ3ZWJwYWNrOi8vL2M6L2dpdC9Fc3BhbGllckpTL3NyYy9qcy9kZW1vL2RpYWxvZy9kaWFsb2ctZGVtby5qcyIsIndlYnBhY2s6Ly8vLi9kaWFsb2cvdGVtcGxhdGVzL2RpYWxvZy10ZW1wbGF0ZS5oYnMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7cUNDdENxQixDQUFhOzs7OzJDQUNaLEVBQW1COzs7OzJDQUNuQixFQUFtQjs7Ozs2Q0FDbEIsRUFBc0I7Ozs7QUFFN0MsdUJBQVMsUUFBUSxDQUFDLHFDQUFxQyxDQUFDLENBQUM7QUFDekQsdUJBQVMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7O0FBRWhDLEVBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQzs7QUFFOUIsRUFBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxZQUFZO0FBQ2hDLHlDQUFZLENBQUM7RUFDaEIsQ0FBQyxDQUFDOztBQUVILEtBQUksS0FBSyxHQUFHLGlDQUFVLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDOztBQUV4QyxFQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxLQUFLLENBQUMsWUFBWTtBQUNuQyxTQUFJLE1BQU0sR0FBRztBQUNULGtCQUFTLEVBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsRUFBRTtBQUNqQyxnQkFBTyxFQUFF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Ozs7Ozs7Ozs7Ozs7O3FDQ1RJLENBQWdCOzs7O29EQUNWLEVBQTZCOzs7O3NCQUV6QyxZQUFZO0FBQzFCLDJCQUFTLE1BQU0sQ0FBQztBQUNULGdCQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsMkNBQWdCLENBQUMsQ0FBQztBQUNwQyxnQkFBTyxFQUFFLENBQ0w7QUFDSSxlQUFFLEVBQUUsUUFBUTtBQUNaLG9CQUFPLEVBQUUsaUJBQVUsTUFBTSxFQUFFO0FBQ3ZCLHNCQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDakIsdUJBQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztjQUNqQjtVQUNKLEVBQ0Q7QUFDSSxlQUFFLEVBQUUsUUFBUTtBQUNaLG9CQUFPLEVBQUUsaUJBQVUsTUFBTSxFQUFFO0FBQ3ZCLHVCQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7Y0FDakI7VUFDSixDQUNKO01BQ0osQ0FBQyxDQUFDO0VBQ047Ozs7Ozs7O0FDdEJEO0FBQ0Esa0VBQWlFO0FBQ2pFLGdGQUErRSxhQUFhLHFCQUFxQiw2QkFBNkIsZ2dCQUFnZ0IsMkZBQTJGO0FBQ3p1QixFQUFDLGdCQUFnQixFIiwiZmlsZSI6ImRlbW9fY29tcGlsZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImFwcFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJhcHBcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb25cbiAqKi8iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGI4ZWQ0MTcyYTQ0ZjA0Y2YyNWE2XG4gKiovIiwiaW1wb3J0IGVzcGFsaWVyIGZyb20gXCIuLi9lc3BhbGllclwiO1xyXG5pbXBvcnQgRGVtb0dyYXBoIGZyb20gXCIuL2dyYXBoL2RlbW9HcmFwaFwiO1xyXG5pbXBvcnQgZGVtb1RhYmxlIGZyb20gXCIuL3RhYmxlL2RlbW9UYWJsZVwiO1xyXG5pbXBvcnQgZGlhbG9nRGVtbyBmcm9tIFwiLi9kaWFsb2cvZGlhbG9nLWRlbW9cIjtcclxuXHJcbmVzcGFsaWVyLnNob3dJbmZvKFwiSXQgc2VlbXMgdGhlIGxpYnJhcmllcyBoYXZlIGxvYWRlZCFcIik7XHJcbmVzcGFsaWVyLndpcmUoXCIjc3RhbmRhcmQtZm9ybVwiKTtcclxuXHJcbiQoXCIuZGF0ZXBpY2tlclwiKS5kYXRlcGlja2VyKCk7XHJcblxyXG4kKFwiI3Nob3ctZGlhbG9nXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcclxuICAgIGRpYWxvZ0RlbW8oKTtcclxufSk7XHJcblxyXG5sZXQgdGFibGUgPSBkZW1vVGFibGUoJChcIiNkZW1vLXRhYmxlXCIpKTtcclxuXHJcbiQoXCIjc2VhcmNoLXJlY29yZHNcIikuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIGZpbHRlciA9IHtcclxuICAgICAgICBTdGFydERhdGU6ICQoXCIjc3RhcnQtZGF0ZVwiKS52YWwoKSxcclxuICAgICAgICBFbmREYXRlOiAkKFwiI2VuZC1kYXRlXCIpLnZhbCgpLFxyXG4gICAgICAgIENsaWVudElQQWRkcmVzczogJChcIiNpcC1hZGRyZXNzXCIpLnZhbCgpLFxyXG4gICAgICAgIFVzZXJOYW1lOiAkKFwiI3VzZXItbmFtZVwiKS52YWwoKSxcclxuICAgICAgICBNYWNBZGRyZXNzOiAkKFwiI21hYy1hZGRyZXNzXCIpLnZhbCgpLFxyXG4gICAgICAgIFdvcmtpbmdUZWxlcGhvbmVOdW1iZXI6ICQoXCIjd3RuXCIpLnZhbCgpLFxyXG4gICAgICAgIEJpbGxpbmdUZWxlcGhvbmVOdW1iZXI6ICQoXCIjYnRuXCIpLnZhbCgpXHJcbiAgICB9O1xyXG5cclxuICAgIHRhYmxlLmZpbHRlcihmaWx0ZXIpO1xyXG59KTtcclxuXHJcbmxldCBncmFwaCA9IG5ldyBEZW1vR3JhcGgoJChcIiN3aXphcmQtY29udGFpbmVyXCIpLCAoZ3JhcGhWYWx1ZSkgPT4ge1xyXG4gICAgJChcIiNncmFwaC12YWx1ZVwiKS5odG1sKEpTT04uc3RyaW5naWZ5KGdyYXBoVmFsdWUsIG51bGwsIDIpKTtcclxufSk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogYzovZ2l0L0VzcGFsaWVySlMvc3JjL2pzL2RlbW8vaW5kZXguanNcbiAqKi8iLCJpbXBvcnQgY29yZSBmcm9tIFwiLi9lc3BhbGllci5jb3JlXCI7XHJcbmltcG9ydCBtZXNzYWdlRmFjdG9yeSBmcm9tIFwiLi9lc3BhbGllci5tZXNzYWdlRmFjdG9yeVwiO1xyXG5pbXBvcnQgZm9ybXMgZnJvbSBcIi4vZXNwYWxpZXIuZm9ybXNcIjtcclxuaW1wb3J0IHdhaXRTY3JlZW4gZnJvbSBcIi4vZXNwYWxpZXIud2FpdHNjcmVlblwiO1xyXG5pbXBvcnQgVGFibGUgZnJvbSBcIi4vZXNwYWxpZXIudGFibGVcIjtcclxuaW1wb3J0IGRpYWxvZyBmcm9tIFwiLi9lc3BhbGllci5kaWFsb2dcIjtcclxuaW1wb3J0IEdyYXBoIGZyb20gXCIuL2VzcGFsaWVyLmdyYXBoXCI7XHJcbmltcG9ydCBHcmFwaE5vZGUgZnJvbSBcIi4vZXNwYWxpZXIuZ3JhcGgubm9kZVwiO1xyXG5cclxudmFyIGVzcGFsaWVyID0ge1xyXG4gICAgc2hvd1dhcm5pbmc6IGNvcmUuc2hvd1dhcm5pbmcsXHJcbiAgICBzaG93SW5mbzogY29yZS5zaG93SW5mbyxcclxuICAgIHNlbmRSZXF1ZXN0OiBjb3JlLnNlbmRSZXF1ZXN0LFxyXG4gICAgVGFibGUsXHJcbiAgICB3aXJlOiBmb3JtcyxcclxuICAgIHNob3dXYWl0U2NyZWVuOiB3YWl0U2NyZWVuLnNob3csXHJcbiAgICBoaWRlV2FpdFNjcmVlbjogd2FpdFNjcmVlbi5oaWRlLFxyXG4gICAgc2hvcnREYXRlOiBjb3JlLnNob3J0RGF0ZSxcclxuICAgIHNob3J0VGltZTogY29yZS5zaG9ydFRpbWUsXHJcbiAgICBudW1iZXJXaXRoQ29tbWFzOiBjb3JlLm51bWJlcldpdGhDb21tYXMsXHJcbiAgICBwdWJsaXNoOiBjb3JlLnB1Ymxpc2gsXHJcbiAgICBwYXJzZUlTT0RhdGU6IGNvcmUucGFyc2VJU09EYXRlLFxyXG4gICAgc3Vic2NyaWJlOiBjb3JlLnN1YnNjcmliZSxcclxuICAgIGRpYWxvZzogZnVuY3Rpb24gKGFyZ3MpIHtcclxuICAgICAgICByZXR1cm4gZGlhbG9nKGFyZ3MpLnNob3coKTtcclxuICAgIH0sXHJcbiAgICBHcmFwaCxcclxuICAgIEdyYXBoTm9kZVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZXNwYWxpZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogYzovZ2l0L0VzcGFsaWVySlMvc3JjL2pzL2VzcGFsaWVyLmpzXG4gKiovIiwiaW1wb3J0IG1lc3NhZ2VGYWN0b3J5IGZyb20gXCIuL2VzcGFsaWVyLm1lc3NhZ2VGYWN0b3J5XCI7XHJcbmltcG9ydCB3YWl0c2NyZWVuIGZyb20gXCIuL2VzcGFsaWVyLndhaXRzY3JlZW5cIjtcclxuaW1wb3J0IGNvbW1vbiBmcm9tIFwiLi9lc3BhbGllci5jb21tb25cIjtcclxuaW1wb3J0IGNvcmUgZnJvbSBcIi4vZXNwYWxpZXIuY29yZVwiO1xyXG5cclxubGV0IGdldEZvb3RlciA9ICh0YWJsZSkgPT4ge1xyXG4gICAgbGV0IHN0YXJ0QXRQYWdlID0gTWF0aC5tYXgoMCwgdGFibGUuc2V0dGluZ3MuY3VycmVudFBhZ2UgLSAzKTtcclxuICAgIGxldCBlbmRBdFBhZ2UgPSBNYXRoLm1pbih0YWJsZS5zZXR0aW5ncy5wYWdlcyAtIDEsIHRhYmxlLnNldHRpbmdzLmN1cnJlbnRQYWdlICsgMyArIE1hdGgubWF4KDMgLSB0YWJsZS5zZXR0aW5ncy5jdXJyZW50UGFnZSwgMCkpO1xyXG4gICAgbGV0IHBhZ2luZ0NvbnRyb2wgPSBcIjx1bCBjbGFzcz1cXFwicGFnaW5hdGlvblxcXCI+XCI7XHJcblxyXG4gICAgcGFnaW5nQ29udHJvbCArPSBgPGxpJHt0YWJsZS5zZXR0aW5ncy5jdXJyZW50UGFnZSA9PSAwID8gYCBjbGFzcz1cImRpc2FibGVkXCJgIDogXCJcIn0+PGEgZGF0YS1wYWdlPVwiJHsodGFibGUuc2V0dGluZ3MuY3VycmVudFBhZ2UgLSAxKSB9XCIgY2xhc3M9XCJlc3BhbGllci10YWJsZS1idXR0b25cIiBocmVmPVwiamF2YXNjcmlwdDogdm9pZCgwKTtcIj48c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mbGFxdW87PC9zcGFuPjwvYT48L2xpPmA7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0QXRQYWdlOyBpIDw9IGVuZEF0UGFnZTsgaSsrKSB7XHJcbiAgICAgICAgcGFnaW5nQ29udHJvbCArPSBgPGxpJHtpID09PSB0YWJsZS5zZXR0aW5ncy5jdXJyZW50UGFnZSA/IGAgY2xhc3M9XCJhY3RpdmVcImAgOiBcIlwifT48YSBkYXRhLXBhZ2U9XCIke2l9XCIgY2xhc3M9XCJlc3BhbGllci10YWJsZS1idXR0b25cIiBocmVmPVwiamF2YXNjcmlwdDogdm9pZCgwKTtcIj4keyhpICsgMSkgfTwvYT48L2xpPmA7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IG5leHRQYWdlID0gKHRhYmxlLnNldHRpbmdzLmN1cnJlbnRQYWdlICsgMSk7XHJcbiAgICBwYWdpbmdDb250cm9sICs9IGA8bGkke25leHRQYWdlID09IHRhYmxlLnNldHRpbmdzLnBhZ2VzID8gYCBjbGFzcz1cImRpc2FibGVkXCJgIDogXCJcIn0+PGEgZGF0YS1wYWdlPVwiJHtuZXh0UGFnZX1cIiBjbGFzcz1cImVzcGFsaWVyLXRhYmxlLWJ1dHRvblwiIGhyZWY9XCJqYXZhc2NyaXB0OiB2b2lkKDApO1wiPjxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZyYXF1bzs8L3NwYW4+PC9hPjwvbGk+YDtcclxuXHJcbiAgICByZXR1cm4gYDx0Zm9vdD48dHI+PHRkIGNvbHNwYW49XCI0MlwiPiR7cGFnaW5nQ29udHJvbH08L3RkPjwvdHI+PC90Zm9vdD5gO1xyXG59O1xyXG5cclxubGV0IHJlbmRlclRhYmxlID0gKHRhYmxlKSA9PiB7XHJcbiAgICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBsZXQgcmVuZGVyZWQgPSBgPHRhYmxlIGNsYXNzPVwiJHt0YWJsZS5zZXR0aW5ncy50YWJsZUNsYXNzfSB0YWJsZSB0YWJsZS1zdHJpcGVkXCI+YDtcclxuXHJcbiAgICAgICAgaWYgKHRhYmxlLnNldHRpbmdzLmhlYWRlclRlbXBsYXRlKSB7XHJcbiAgICAgICAgICAgIHJlbmRlcmVkICs9IHRhYmxlLnNldHRpbmdzLmhlYWRlclRlbXBsYXRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZW5kZXJlZCArPSBcIjx0Ym9keT5cIjtcclxuICAgICAgICBsZXQgc3RhcnRBdEluZGV4ID0gdGFibGUuc2V0dGluZ3MuY3VycmVudFBhZ2UgKiB0YWJsZS5zZXR0aW5ncy5wYWdlU2l6ZTtcclxuXHJcbiAgICAgICAgaWYgKHRhYmxlLnNldHRpbmdzLmRhdGEpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IHN0YXJ0QXRJbmRleDsgaSA8IE1hdGgubWluKHN0YXJ0QXRJbmRleCArIHRhYmxlLnNldHRpbmdzLnBhZ2VTaXplLCB0YWJsZS5zZXR0aW5ncy5kYXRhLmxlbmd0aCk7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyZWQgKz0gdGFibGUuc2V0dGluZ3Mucm93VGVtcGxhdGUodGFibGUuc2V0dGluZ3MuZGF0YVtpXSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJlbmRlcmVkICs9IFwiPC90Ym9keT5cIjtcclxuXHJcbiAgICAgICAgICAgIGlmICh0YWJsZS5zZXR0aW5ncy5wYWdlcyA+IDApIHtcclxuICAgICAgICAgICAgICAgIHJlbmRlcmVkICs9IGdldEZvb3Rlcih0YWJsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzb2x2ZShyZW5kZXJlZCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29yZS5zZW5kUmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6IHRhYmxlLnNldHRpbmdzLmZldGNoVXJsLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgUGFnZTogdGFibGUuc2V0dGluZ3MuY3VycmVudFBhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgUGFnZVNpemU6IHRhYmxlLnNldHRpbmdzLnBhZ2VTaXplLFxyXG4gICAgICAgICAgICAgICAgICAgIENyaXRlcmlhOiB0YWJsZS5zZXR0aW5ncy5maWx0ZXJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGFibGUuc2V0dGluZ3MuZmV0Y2hDYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhYmxlLnNldHRpbmdzLmZldGNoQ2FsbGJhY2socmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0YWJsZS5zZXR0aW5ncy5wYWdlcyA9IE1hdGguY2VpbChyZXN1bHQuZGF0YS50b3RhbCAvIHJlc3VsdC5kYXRhLnBhZ2VTaXplKTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzdWx0LmRhdGEucmVjb3Jkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcmVkICs9IHRhYmxlLnNldHRpbmdzLnJvd1RlbXBsYXRlKHJlc3VsdC5kYXRhLnJlY29yZHNbaV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmVuZGVyZWQgKz0gXCI8L3Rib2R5PlwiO1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyZWQgKz0gZ2V0Rm9vdGVyKHRhYmxlKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVuZGVyZWQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBwcm9taXNlLnRoZW4oXHJcbiAgICAgICAgZnVuY3Rpb24gKHJlbmRlcmVkKSB7XHJcbiAgICAgICAgICAgIHRhYmxlLnNldHRpbmdzLmNvbnRhaW5lci5odG1sKHJlbmRlcmVkKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0YWJsZS5zZXR0aW5ncy5yZW5kZXJlZENhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICB0YWJsZS5zZXR0aW5ncy5yZW5kZXJlZENhbGxiYWNrKHRhYmxlLnNldHRpbmdzLmNvbnRhaW5lclswXS5nZXRFbGVtZW50c0J5VGFnTmFtZShcInRhYmxlXCIpWzBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFibGUge1xyXG4gICAgY29uc3RydWN0b3IoYXJncykge1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSB7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lcjogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICBjdXJyZW50UGFnZTogMCxcclxuICAgICAgICAgICAgZGF0YTogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICBmZXRjaENhbGxiYWNrOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIGZldGNoVXJsOiBcIlwiLFxyXG4gICAgICAgICAgICBoZWFkZXJUZW1wbGF0ZTogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICBwYWdlU2l6ZTogMTAsXHJcbiAgICAgICAgICAgIHByZWZldGNoUGFnZXM6IDUsXHJcbiAgICAgICAgICAgIHJvd1RlbXBsYXRlOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIHRhYmxlQ2xhc3M6IFwiZXNwYWxpZXItdGFibGVcIixcclxuICAgICAgICAgICAgcmVuZGVyZWRDYWxsYmFjazogdW5kZWZpbmVkXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgJC5leHRlbmQodGhpcy5zZXR0aW5ncywgYXJncyk7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5zZXR0aW5ncy5mZXRjaFVybCAmJiAhdGhpcy5zZXR0aW5ncy5kYXRhKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJZb3UgbXVzdCBlaXRoZXIgc3BlY2lmeSBhIGZldGNoIHVybCBvciBwYXNzIGluIGRhdGEgZm9yIHRoZSB0YWJsZSB0byBkaXNwbGF5LlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5zZXR0aW5ncy5jb250YWluZXIpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIllvdSBtdXN0IHNwZWNpZnkgYSBjb250YWluZXIgdG8gcGxhY2UgdGhlIHRhYmxlIGluLlwiKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnNldHRpbmdzLnJvd1RlbXBsYXRlKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJZb3UgbXVzdCBwcm92aWRlIGEgcm93IHRlbXBsYXRlLlwiKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuZGF0YSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLnBhZ2VzID0gTWF0aC5jZWlsKHRoaXMuc2V0dGluZ3MuZGF0YS5sZW5ndGggLyB0aGlzLnNldHRpbmdzLnBhZ2VTaXplKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQuZXh0ZW5kKHRoaXMuc2V0dGluZ3MsIGFyZ3MpO1xyXG5cclxuICAgICAgICBsZXQgdGFibGUgPSB0aGlzO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuc2V0dGluZ3MuY29udGFpbmVyLm9uKFwiY2xpY2tcIiwgXCIuZXNwYWxpZXItdGFibGUtYnV0dG9uXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGFibGUuZ29Ub1BhZ2UoJCh0aGlzKS5kYXRhKFwicGFnZVwiKSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJlbmRlclRhYmxlKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG5leHQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5jdXJyZW50UGFnZSsrO1xyXG4gICAgICAgIHJlbmRlclRhYmxlKHRoaXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHByZXZpb3VzKCkge1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3MuY3VycmVudFBhZ2UtLTtcclxuICAgICAgICByZW5kZXJUYWJsZSh0aGlzKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBmaWx0ZXIoZmlsdGVyKSB7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5maWx0ZXIgPSBmaWx0ZXI7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5jdXJyZW50UGFnZSA9IDA7XHJcbiAgICAgICAgcmVuZGVyVGFibGUodGhpcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ29Ub1BhZ2UocGFnZSkge1xyXG4gICAgICAgIGlmIChwYWdlIDwgMCB8fCBwYWdlID49IHRoaXMuc2V0dGluZ3MucGFnZXMpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5jdXJyZW50UGFnZSA9IHBhZ2U7XHJcbiAgICAgICAgcmVuZGVyVGFibGUodGhpcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBjOi9naXQvRXNwYWxpZXJKUy9zcmMvanMvZXNwYWxpZXIudGFibGUuanNcbiAqKi8iLCJpbXBvcnQgY29yZSBmcm9tIFwiLi9lc3BhbGllci5jb3JlXCI7XHJcbmltcG9ydCBib290c3RyYXBUZW1wbGF0ZXMgZnJvbSBcIi4vdGVtcGxhdGVzL2Jvb3RzdHJhcFRlbXBsYXRlc1wiO1xyXG5cclxuY2xhc3MgTWVzc2FnZURpc3BsYXllciB7XHJcbiAgICBjb25zdHJ1Y3RvcihhcmdzKSB7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHtcclxuICAgICAgICAgICAgYXR0YWNoVG86IG51bGwsXHJcbiAgICAgICAgICAgIG1lc3NhZ2VDb250YWluZXJDbGFzczogXCJtZXNzYWdlLWNvbnRhaW5lclwiLFxyXG4gICAgICAgICAgICBjbG9zZU1lc3NhZ2VDbGFzczogXCJjbG9zZS1tZXNzYWdlXCIsXHJcbiAgICAgICAgICAgIGluZm9NZXNzYWdlQ2xhc3M6IFwiaW5mby1tZXNzYWdlXCIsXHJcbiAgICAgICAgICAgIHdhcm5pbmdNZXNzYWdlQ2xhc3M6IFwid2FybmluZy1tZXNzYWdlXCIsXHJcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZUNsYXNzOiBcImVycm9yLW1lc3NhZ2VcIixcclxuICAgICAgICAgICAgc3VjY2Vzc01lc3NhZ2VDbGFzczogXCJzdWNjZXNzLW1lc3NhZ2VcIixcclxuICAgICAgICAgICAgbWVzc2FnZUF0dGFjaG1lbnQ6IGZhY3RvcnkubWVzc2FnZUF0dGFjaG1lbnQuRml4ZWQsXHJcbiAgICAgICAgICAgIG9uUmVtb3ZlZDogZnVuY3Rpb24gKCkgeyB9LFxyXG4gICAgICAgICAgICBvbkFkZGVkOiBmdW5jdGlvbiAoKSB7IH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAkLmV4dGVuZCh0aGlzLnNldHRpbmdzLCBhcmdzKTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnNldHRpbmdzLmF0dGFjaFRvKSB7XHJcbiAgICAgICAgICAgIHRocm93IChcIk1lc3NhZ2VGYWN0b3J5IHJlcXVpcmVzIGFuIGF0dGFjaFRvIGFyZ3VtZW50LlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLm1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5tZXNzYWdlKTtcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB0aGlzLnNldHRpbmdzLm9uUmVtb3ZlZCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzaG93KG1lc3NhZ2VBcmdzKSB7XHJcbiAgICAgICAgbGV0IG1lc3NhZ2VUeXBlQ2xhc3MsIG1lc3NhZ2VTZXR0aW5ncywgbWVzc2FnZUF0dGFjaG1lbnRDbGFzcztcclxuXHJcbiAgICAgICAgLy9OT1RFOiBUaGVyZSBzaG91bGQgb25seSBiZSBvbmUgbWVzc2FnZSBkaXNwbGF5ZWQgcGVyIGluc3RhbmNlLlxyXG4gICAgICAgIGlmICh0aGlzLm1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9OT1RFOiBBbGxvdyB0aGVtIHRvIGVpdGhlciB1c2UgYW4gYXJyYXkgb2YgbWVzc2FnZXMgb3IgYVxyXG4gICAgICAgIC8vICAgICAgc2luZ2xlIG1lc3NhZ2UuXHJcbiAgICAgICAgaWYgKGNvcmUuaXNTdHJpbmcobWVzc2FnZUFyZ3MubWVzc2FnZSkpIHtcclxuICAgICAgICAgICAgbWVzc2FnZUFyZ3MubWVzc2FnZSA9IFttZXNzYWdlQXJncy5tZXNzYWdlXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1lc3NhZ2VTZXR0aW5ncyA9IHtcclxuICAgICAgICAgICAgbWVzc2FnZVR5cGU6IGZhY3RvcnkubWVzc2FnZVR5cGUuSW5mbyxcclxuICAgICAgICAgICAgbWVzc2FnZTogW11cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAkLmV4dGVuZChtZXNzYWdlU2V0dGluZ3MsIG1lc3NhZ2VBcmdzKTtcclxuXHJcbiAgICAgICAgaWYgKG1lc3NhZ2VTZXR0aW5ncy5tZXNzYWdlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIk5vIG1lc3NhZ2UgdG8gZGlzcGxheS5cIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN3aXRjaCAobWVzc2FnZVNldHRpbmdzLm1lc3NhZ2VUeXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgZmFjdG9yeS5tZXNzYWdlVHlwZS5JbmZvOlxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZVR5cGVDbGFzcyA9IHRoaXMuc2V0dGluZ3MuaW5mb01lc3NhZ2VDbGFzcztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGZhY3RvcnkubWVzc2FnZVR5cGUuU3VjY2VzczpcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VUeXBlQ2xhc3MgPSB0aGlzLnNldHRpbmdzLnN1Y2Nlc3NNZXNzYWdlQ2xhc3M7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBmYWN0b3J5Lm1lc3NhZ2VUeXBlLkVycm9yOlxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZVR5cGVDbGFzcyA9IHRoaXMuc2V0dGluZ3MuZXJyb3JNZXNzYWdlQ2xhc3M7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBmYWN0b3J5Lm1lc3NhZ2VUeXBlLldhcm5pbmc6XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlVHlwZUNsYXNzID0gdGhpcy5zZXR0aW5ncy53YXJuaW5nTWVzc2FnZUNsYXNzO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkludmFsaWQgbWVzc2FnZSB0eXBlLlwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN3aXRjaCAodGhpcy5zZXR0aW5ncy5tZXNzYWdlQXR0YWNobWVudCkge1xyXG4gICAgICAgICAgICBjYXNlIGZhY3RvcnkubWVzc2FnZUF0dGFjaG1lbnQuRml4ZWQ6XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlQXR0YWNobWVudENsYXNzID0gXCJmaXhlZFwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgZmFjdG9yeS5tZXNzYWdlQXR0YWNobWVudC5GbG93OlxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZUF0dGFjaG1lbnRDbGFzcyA9IFwiZmxvd1wiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlQXR0YWNobWVudENsYXNzID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gYm9vdHN0cmFwVGVtcGxhdGVzLm1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICBtZXNzYWdlVHlwZUNsYXNzOiBtZXNzYWdlVHlwZUNsYXNzLFxyXG4gICAgICAgICAgICBtZXNzYWdlczogbWVzc2FnZVNldHRpbmdzLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgIG1lc3NhZ2VDb250YWluZXJDbGFzczogdGhpcy5zZXR0aW5ncy5tZXNzYWdlQ29udGFpbmVyQ2xhc3MsXHJcbiAgICAgICAgICAgIGNsb3NlTWVzc2FnZUNsYXNzOiB0aGlzLnNldHRpbmdzLmNsb3NlTWVzc2FnZUNsYXNzLFxyXG4gICAgICAgICAgICBtZXNzYWdlQXR0YWNobWVudENsYXNzOiBtZXNzYWdlQXR0YWNobWVudENsYXNzLFxyXG4gICAgICAgICAgICBtb3JlVGhhbk9uZTogKCFjb3JlLmlzU3RyaW5nKG1lc3NhZ2VBcmdzLm1lc3NhZ2UpICYmIG1lc3NhZ2VBcmdzLm1lc3NhZ2UubGVuZ3RoID4gMSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5hdHRhY2hUby5hcHBlbmRDaGlsZCh0aGlzLm1lc3NhZ2UpO1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3Mub25BZGRlZCh0aGlzLm1lc3NhZ2UpO1xyXG5cclxuICAgICAgICBsZXQgZGlzcGxheWVkTWVzc2FnZSA9IHRoaXM7XHJcblxyXG4gICAgICAgIGxldCBjbG9zZUJ1dHRvbnMgPSBBcnJheS5mcm9tKGNvcmUuZmluZChgLiR7dGhpcy5zZXR0aW5ncy5jbG9zZU1lc3NhZ2VDbGFzc31gLCB0aGlzLm1lc3NhZ2UpKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgYnV0dG9uIG9mIGNsb3NlQnV0dG9ucykge1xyXG4gICAgICAgICAgICBjb3JlLmFkZEV2ZW50TGlzdGVuZXIoYnV0dG9uLCBcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXllZE1lc3NhZ2UucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWVzc2FnZTtcclxuICAgIH1cclxufTtcclxuXHJcbnZhciBmYWN0b3J5ID0ge1xyXG4gICAgY3JlYXRlOiBmdW5jdGlvbiAoYXJncykge1xyXG4gICAgICAgIHJldHVybiBuZXcgTWVzc2FnZURpc3BsYXllcihhcmdzKTtcclxuICAgIH0sXHJcbiAgICBtZXNzYWdlVHlwZToge1xyXG4gICAgICAgIEluZm86IFwiSW5mb1wiLFxyXG4gICAgICAgIFN1Y2Nlc3M6IFwic3VjY2Vzc1wiLFxyXG4gICAgICAgIEVycm9yOiBcImVycm9yXCIsXHJcbiAgICAgICAgV2FybmluZzogXCJ3YXJuaW5nXCJcclxuICAgIH0sXHJcbiAgICBtZXNzYWdlQXR0YWNobWVudDoge1xyXG4gICAgICAgIEZpeGVkOiBcIkZpeGVkXCIsXHJcbiAgICAgICAgRmxvdzogXCJGbG93XCJcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZhY3Rvcnk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogYzovZ2l0L0VzcGFsaWVySlMvc3JjL2pzL2VzcGFsaWVyLm1lc3NhZ2VGYWN0b3J5LmpzXG4gKiovIiwiaW1wb3J0IG1lc3NhZ2VGYWN0b3J5IGZyb20gXCIuL2VzcGFsaWVyLm1lc3NhZ2VGYWN0b3J5XCI7XHJcbmltcG9ydCB3YWl0c2NyZWVuIGZyb20gXCIuL2VzcGFsaWVyLndhaXRzY3JlZW5cIjtcclxuaW1wb3J0IGNvbW1vbiBmcm9tIFwiLi9lc3BhbGllci5jb21tb25cIjtcclxuaW1wb3J0IHB1YnN1YiBmcm9tIFwicHVic3ViLWpzXCI7XHJcblxyXG52YXIgZmluZCA9IGZ1bmN0aW9uIChzZWxlY3Rvciwgcm9vdCkge1xyXG4gICAgcm9vdCA9IHJvb3QgPyByb290IDogZG9jdW1lbnQ7XHJcbiAgICByZXR1cm4gcm9vdC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcclxufTtcclxuXHJcbnZhciBtYWluTWVzc2FnZSA9IG1lc3NhZ2VGYWN0b3J5LmNyZWF0ZSh7XHJcbiAgICBhdHRhY2hUbzogZmluZChcImJvZHlcIilbMF1cclxufSk7XHJcblxyXG52YXIgcGFyc2VEYXRlO1xyXG52YXIgdGVzdERhdGUgPSBuZXcgRGF0ZSgnMjAxMS0wNi0wMlQwOTozNDoyOSswMjowMCcpO1xyXG5cclxuaWYgKCF0ZXN0RGF0ZSB8fCArdGVzdERhdGUgIT09IDEzMDcwMDAwNjkwMDApIHtcclxuICAgIHBhcnNlRGF0ZSA9IGZ1bmN0aW9uIChzKSB7XHJcbiAgICAgICAgdmFyIGRheSwgdHosXHJcbiAgICAgICAgICAgIHJ4ID0gL14oXFxkezR9XFwtXFxkXFxkXFwtXFxkXFxkKFt0VCBdW1xcZDpcXC5dKik/KShbelpdfChbK1xcLV0pKFxcZFxcZCk6KFxcZFxcZCkpPyQvLFxyXG4gICAgICAgICAgICBwID0gcnguZXhlYyhzKSB8fCBbXTtcclxuICAgICAgICBpZiAocFsxXSkge1xyXG4gICAgICAgICAgICBkYXkgPSBwWzFdLnNwbGl0KC9cXEQvKTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIEwgPSBkYXkubGVuZ3RoOyBpIDwgTDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBkYXlbaV0gPSBwYXJzZUludChkYXlbaV0sIDEwKSB8fCAwO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBkYXlbMV0gLT0gMTtcclxuICAgICAgICAgICAgZGF5ID0gbmV3IERhdGUoRGF0ZS5VVEMuYXBwbHkoRGF0ZSwgZGF5KSk7XHJcbiAgICAgICAgICAgIGlmICghZGF5LmdldERhdGUoKSkgcmV0dXJuIE5hTjtcclxuICAgICAgICAgICAgaWYgKHBbNV0pIHtcclxuICAgICAgICAgICAgICAgIHR6ID0gKHBhcnNlSW50KHBbNV0sIDEwKSAqIDYwKTtcclxuICAgICAgICAgICAgICAgIGlmIChwWzZdKSB0eiArPSBwYXJzZUludChwWzZdLCAxMCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocFs0XSA9PSAnKycpIHR6ICo9IC0xO1xyXG4gICAgICAgICAgICAgICAgaWYgKHR6KSBkYXkuc2V0VVRDTWludXRlcyhkYXkuZ2V0VVRDTWludXRlcygpICsgdHopO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBkYXk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBOYU47XHJcbiAgICB9O1xyXG59XHJcbmVsc2Uge1xyXG4gICAgcGFyc2VEYXRlID0gZnVuY3Rpb24gKHMpIHtcclxuICAgICAgICByZXR1cm4gbmV3IERhdGUocyk7XHJcbiAgICB9O1xyXG59XHJcblxyXG50ZXN0RGF0ZSA9IHVuZGVmaW5lZDtcclxuXHJcbnZhciBjb3JlID0ge1xyXG4gICAgc2VuZFJlcXVlc3Q6IGZ1bmN0aW9uIChyZXEpIHtcclxuICAgICAgICB3YWl0c2NyZWVuLnNob3coKTtcclxuICAgICAgICAkKFwiLlwiICsgbWFpbk1lc3NhZ2Uuc2V0dGluZ3MubWVzc2FnZUNvbnRhaW5lckNsYXNzKS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgdmFyIGFqYXhTZXR0aW5ncyA9IHtcclxuICAgICAgICAgICAgdHlwZTogXCJHRVRcIixcclxuICAgICAgICAgICAgeGhyRmllbGRzOiB7XHJcbiAgICAgICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3RhdHVzQ29kZToge1xyXG4gICAgICAgICAgICAgICAgNTAwOiBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb3JlLnNob3dFcnJvcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLnJlc3BvbnNlSlNPTi5NZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjc3NDbGFzczogXCJlcnJvclwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgNDAwOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZXJyb3JzID0gW107XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICQuZWFjaChyZXNwb25zZS5yZXNwb25zZUpTT04uZXJyb3JzLCBmdW5jdGlvbiAoaW5kZXgsIGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvci5zb3VyY2UgJiYgZXJyb3Iuc291cmNlLnBhcmFtZXRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNwZWNpZmljRmllbGQgPSAkKFwiI1wiICsgZXJyb3Iuc291cmNlLnBhcmFtZXRlci50b0xvd2VyQ2FzZSgpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3BlY2lmaWNGaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmaWVsZE1lc3NhZ2UgPSBzcGVjaWZpY0ZpZWxkLmRhdGEoXCJtZXNzYWdlXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGRNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkTWVzc2FnZS5zaG93KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLmRldGFpbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2VUeXBlOiBtZXNzYWdlRmFjdG9yeS5tZXNzYWdlVHlwZS5FcnJvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5wdXNoKGVycm9yLmRldGFpbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3JlLnNob3dFcnJvcihlcnJvcnMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgd2FpdHNjcmVlbi5oaWRlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcS5ldmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwdWJzdWIucHVibGlzaChyZXEuZXZlbnQsIHJlc3BvbnNlLnJlc3BvbnNlSlNPTik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVxLm9uU3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXEub25TdWNjZXNzKHJlc3BvbnNlLnJlc3BvbnNlSlNPTik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgJC5leHRlbmQoYWpheFNldHRpbmdzLCByZXEpO1xyXG5cclxuICAgICAgICByZXR1cm4gJC5hamF4KGFqYXhTZXR0aW5ncyk7XHJcbiAgICB9LFxyXG4gICAgc2hvd1dhcm5pbmc6IGZ1bmN0aW9uIChtZXNzYWdlcykge1xyXG4gICAgICAgIG1haW5NZXNzYWdlLnNob3coe1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlcyxcclxuICAgICAgICAgICAgbWVzc2FnZVR5cGU6IG1lc3NhZ2VGYWN0b3J5Lm1lc3NhZ2VUeXBlLldhcm5pbmdcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBzaG93RXJyb3I6IGZ1bmN0aW9uIChtZXNzYWdlcykge1xyXG4gICAgICAgIG1haW5NZXNzYWdlLnNob3coe1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlcyxcclxuICAgICAgICAgICAgbWVzc2FnZVR5cGU6IG1lc3NhZ2VGYWN0b3J5Lm1lc3NhZ2VUeXBlLkVycm9yXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgc2hvd0luZm86IGZ1bmN0aW9uIChtZXNzYWdlcykge1xyXG4gICAgICAgIG1haW5NZXNzYWdlLnNob3coe1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlcyxcclxuICAgICAgICAgICAgbWVzc2FnZVR5cGU6IG1lc3NhZ2VGYWN0b3J5Lm1lc3NhZ2VUeXBlLkluZm9cclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBoaWRlTWFpbk1lc3NhZ2U6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBtYWluTWVzc2FnZS5yZW1vdmUoKTtcclxuICAgIH0sXHJcbiAgICBpc0VtcHR5T3JTcGFjZXM6IGZ1bmN0aW9uIChzdHIpIHtcclxuICAgICAgICByZXR1cm4gc3RyID09PSB1bmRlZmluZWQgfHwgc3RyID09PSBudWxsIHx8IHN0ci5tYXRjaCgvXlxccyokLykgIT09IG51bGw7XHJcbiAgICB9LFxyXG4gICAgaXNFbWFpbDogZnVuY3Rpb24gKHN0cikge1xyXG4gICAgICAgIHZhciBlbWFpbFJlZ2V4ID0gL14oKFtcXHctXStcXC4pK1tcXHctXSt8KFthLXpBLVpdezF9fFtcXHctXXsyLH0pKUAoKChbMC0xXT9bMC05XXsxLDJ9fDI1WzAtNV18MlswLTRdWzAtOV0pXFwuKFswLTFdP1swLTldezEsMn18MjVbMC01XXwyWzAtNF1bMC05XSlcXC4oWzAtMV0/WzAtOV17MSwyfXwyNVswLTVdfDJbMC00XVswLTldKVxcLihbMC0xXT9bMC05XXsxLDJ9fDI1WzAtNV18MlswLTRdWzAtOV0pKXsxfXwoW2EtekEtWl0rW1xcdy1dK1xcLikrW2EtekEtWl17Miw0fSkkLztcclxuICAgICAgICByZXR1cm4gY29yZS5pc0VtcHR5T3JTcGFjZXMoc3RyKSB8fCBzdHIubWF0Y2goZW1haWxSZWdleCk7XHJcbiAgICB9LFxyXG4gICAgaXNEYXRlOiBmdW5jdGlvbiAoc3RyKSB7XHJcbiAgICAgICAgdmFyIGQgPSBuZXcgRGF0ZShzdHIpO1xyXG4gICAgICAgIHJldHVybiBjb3JlLmlzRW1wdHlPclNwYWNlcyhzdHIpIHx8IChkICE9IFwiSW52YWxpZCBEYXRlXCIgJiYgIWlzTmFOKGQpKTtcclxuICAgIH0sXHJcbiAgICBudW1iZXJXaXRoQ29tbWFzOiBmdW5jdGlvbiBudW1iZXJXaXRoQ29tbWFzKHgpIHtcclxuICAgICAgICB2YXIgcGFydHMgPSB4LnRvU3RyaW5nKCkuc3BsaXQoXCIuXCIpO1xyXG4gICAgICAgIHBhcnRzWzBdID0gcGFydHNbMF0ucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgXCIsXCIpO1xyXG4gICAgICAgIHJldHVybiBwYXJ0cy5qb2luKFwiLlwiKTtcclxuICAgIH0sXHJcbiAgICBwYXJzZUlTT0RhdGU6IHBhcnNlRGF0ZSxcclxuICAgIHNob3J0RGF0ZTogZnVuY3Rpb24gKGRhdGUpIHtcclxuICAgICAgICBpZiAoIShkYXRlIGluc3RhbmNlb2YgRGF0ZSkpIHtcclxuICAgICAgICAgICAgZGF0ZSA9IHBhcnNlRGF0ZShkYXRlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAoZGF0ZS5nZXRNb250aCgpICsgMSkgK1xyXG4gICAgICAgICAgICBcIi9cIiArIGRhdGUuZ2V0RGF0ZSgpICtcclxuICAgICAgICAgICAgXCIvXCIgKyBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgICB9LFxyXG4gICAgc2hvcnRUaW1lOiBmdW5jdGlvbiAoZGF0ZSkge1xyXG4gICAgICAgIGlmICghKGRhdGUgaW5zdGFuY2VvZiBEYXRlKSkge1xyXG4gICAgICAgICAgICBkYXRlID0gcGFyc2VEYXRlKGRhdGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGhvdXIgPSBkYXRlLmdldEhvdXJzKCk7XHJcbiAgICAgICAgdmFyIGFtcG0gPSBcIkFNXCI7XHJcblxyXG4gICAgICAgIGlmIChob3VyID4gMTEpIHtcclxuICAgICAgICAgICAgaG91ciAtPSAxMjtcclxuICAgICAgICAgICAgYW1wbSA9IFwiUE1cIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChob3VyID09PSAwKSB7XHJcbiAgICAgICAgICAgIGhvdXIgPSAxMjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBtaW51dGVzID0gXCIwMFwiICsgZGF0ZS5nZXRNaW51dGVzKCk7XHJcbiAgICAgICAgcmV0dXJuIGhvdXIgKyBcIjpcIiArIG1pbnV0ZXMuc3Vic3RyaW5nKG1pbnV0ZXMubGVuZ3RoIC0gMikgKyBcIiBcIiArIGFtcG07XHJcbiAgICB9LFxyXG4gICAgcHVibGlzaDogZnVuY3Rpb24gKHRvcGljLCBtZXNzYWdlKSB7XHJcbiAgICAgICAgcHVic3ViLnB1Ymxpc2godG9waWMsIG1lc3NhZ2UpO1xyXG4gICAgfSxcclxuICAgIHN1YnNjcmliZTogZnVuY3Rpb24gKHRvcGljLCBoYW5kbGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHB1YnN1Yi5zdWJzY3JpYmUodG9waWMsIGZ1bmN0aW9uICh0b3BpYywgbWVzc2FnZSkge1xyXG4gICAgICAgICAgICBoYW5kbGVyKG1lc3NhZ2UpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGZpbmQsXHJcbiAgICBleHRlbmQ6IGZ1bmN0aW9uIChvdXQpIHtcclxuICAgICAgICBvdXQgPSBvdXQgfHwge307XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBvYmogPSBhcmd1bWVudHNbaV07XHJcblxyXG4gICAgICAgICAgICBpZiAoIW9iailcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIG9iaikge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmpba2V5XSA9PT0gJ29iamVjdCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvcmUuZXh0ZW5kKG91dFtrZXldLCBvYmpba2V5XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRba2V5XSA9IG9ialtrZXldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gb3V0O1xyXG4gICAgfSxcclxuICAgIGNsb3Nlc3Q6IGZ1bmN0aW9uIGNsb3Nlc3QoZWwsIHNlbGVjdG9yKSB7XHJcbiAgICAgICAgdmFyIG1hdGNoZXNGbjtcclxuXHJcbiAgICAgICAgLy8gZmluZCB2ZW5kb3IgcHJlZml4XHJcbiAgICAgICAgW1wibWF0Y2hlc1wiLCBcIndlYmtpdE1hdGNoZXNTZWxlY3RvclwiLCBcIm1vek1hdGNoZXNTZWxlY3RvclwiLCBcIm1zTWF0Y2hlc1NlbGVjdG9yXCIsIFwib01hdGNoZXNTZWxlY3RvclwiXS5zb21lKGZ1bmN0aW9uIChmbikge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGRvY3VtZW50LmJvZHlbZm5dID09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgbWF0Y2hlc0ZuID0gZm47XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8gdHJhdmVyc2UgcGFyZW50c1xyXG4gICAgICAgIHdoaWxlIChlbCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBsZXQgcGFyZW50ID0gZWwucGFyZW50RWxlbWVudDtcclxuICAgICAgICAgICAgaWYgKHBhcmVudCAhPT0gbnVsbCAmJiBwYXJlbnRbbWF0Y2hlc0ZuXShzZWxlY3RvcikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwYXJlbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWwgPSBwYXJlbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH0sXHJcbiAgICBhZGRDbGFzczogZnVuY3Rpb24gKGVsLCBjbGFzc05hbWUpIHtcclxuICAgICAgICBpZiAoZWwuY2xhc3NMaXN0KSB7XHJcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlbC5jbGFzc05hbWUgKz0gJyAnICsgY2xhc3NOYW1lO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICByZW1vdmVDbGFzczogZnVuY3Rpb24gKGVsLCBjbGFzc05hbWUpIHtcclxuICAgICAgICBpZiAoZWwuY2xhc3NMaXN0KSB7XHJcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlbC5jbGFzc05hbWUgPSBlbC5jbGFzc05hbWUucmVwbGFjZShuZXcgUmVnRXhwKCcoXnxcXFxcYiknICsgY2xhc3NOYW1lLnNwbGl0KCcgJykuam9pbignfCcpICsgJyhcXFxcYnwkKScsICdnaScpLCAnICcpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhZGRFdmVudExpc3RlbmVyOiBmdW5jdGlvbiAoZWwsIGV2ZW50TmFtZSwgaGFuZGxlcikge1xyXG4gICAgICAgIGlmIChlbC5hZGRFdmVudExpc3RlbmVyKSB7XHJcbiAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBoYW5kbGVyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlbC5hdHRhY2hFdmVudCgnb24nICsgZXZlbnROYW1lLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVyLmNhbGwoZWwpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWF0Y2hlczogZnVuY3Rpb24gKGVsLCBzZWxlY3Rvcikge1xyXG4gICAgICAgIHZhciBfbWF0Y2hlcyA9IChlbC5tYXRjaGVzIHx8IGVsLm1hdGNoZXNTZWxlY3RvciB8fCBlbC5tc01hdGNoZXNTZWxlY3RvciB8fCBlbC5tb3pNYXRjaGVzU2VsZWN0b3IgfHwgZWwud2Via2l0TWF0Y2hlc1NlbGVjdG9yIHx8IGVsLm9NYXRjaGVzU2VsZWN0b3IpO1xyXG5cclxuICAgICAgICBpZiAoX21hdGNoZXMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIF9tYXRjaGVzLmNhbGwoZWwsIHNlbGVjdG9yKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgbm9kZXMgPSBlbC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gbm9kZXMubGVuZ3RoOyBpLS07KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobm9kZXNbaV0gPT09IGVsKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgaXNTdHJpbmc6IGZ1bmN0aW9uICh0b1Rlc3QpIHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIHRvVGVzdCA9PT0gJ3N0cmluZycgfHwgdG9UZXN0IGluc3RhbmNlb2YgU3RyaW5nO1xyXG4gICAgfSxcclxuICAgIGZpcnN0OiBmdW5jdGlvbiAoYXJyYXksIG1hdGNoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgYXJyYXlJdGVtIG9mIGFycmF5KSB7XHJcbiAgICAgICAgICAgIGlmIChtYXRjaChhcnJheUl0ZW0pKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXJyYXlJdGVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmFibGUgdG8gbWF0Y2ggdGhhdCBpdGVtLlwiKTtcclxuICAgIH0sXHJcbiAgICBzZXRQcm9wZXJ0eTogZnVuY3Rpb24gKG9iaiwgcHJvcCwgdmFsdWUpIHtcclxuICAgICAgICBpZiAoY29yZS5pc1N0cmluZyhwcm9wKSkge1xyXG4gICAgICAgICAgICBwcm9wID0gcHJvcC5zcGxpdChcIi5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocHJvcC5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIHZhciBlID0gcHJvcC5zaGlmdCgpO1xyXG4gICAgICAgICAgICBjb3JlLnNldFByb3BlcnR5KG9ialtlXSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmpbZV0pID09PSBcIltvYmplY3QgT2JqZWN0XVwiID8gb2JqW2VdIDoge30sIHByb3AsIHZhbHVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvYmpbcHJvcFswXV0gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjb3JlO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGM6L2dpdC9Fc3BhbGllckpTL3NyYy9qcy9lc3BhbGllci5jb3JlLmpzXG4gKiovIiwiaW1wb3J0IGNvbW1vbiBmcm9tIFwiLi9lc3BhbGllci5jb21tb25cIjtcclxuXHJcbnZhciBwbGVhc2VXYWl0SWQgPSBcImVzcGFsaWVyLXdhaXQtc2NyZWVuXCI7XHJcbnZhciBwbGVhc2VXYWl0ID0gJChcIjxkaXYgLz5cIik7XHJcbnBsZWFzZVdhaXQuYXR0cihcImlkXCIsIHBsZWFzZVdhaXRJZCk7XHJcblxyXG52YXIgaG91cmdsYXNzID0gJ2RhdGE6aW1hZ2Uvc3ZnK3htbDt1dGY4LCcgK1xyXG4gICAgXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgY2xhc3M9XFxcInVpbC1nZWFyc1xcXCIgdmlld0JveD1cXFwiMCAwIDEwMCAxMDBcXFwiIHByZXNlcnZlQXNwZWN0UmF0aW89XFxcInhNaWRZTWlkIG1lZXRcXFwiIHdpZHRoPVxcXCIxMjBweFxcXCIgaGVpZ2h0PVxcXCIxMjBweFxcXCI+XCIgK1xyXG4gICAgXCIgIDxyZWN0IGNsYXNzPVxcXCJia1xcXCIgZmlsbD1cXFwibm9uZVxcXCIgeD1cXFwiMFxcXCIgeT1cXFwiMFxcXCIgd2lkdGg9XFxcIjEwMFxcXCIgaGVpZ2h0PVxcXCIxMDBcXFwiIC8+XCIgK1xyXG4gICAgXCIgIDxnIHRyYW5zZm9ybT1cXFwidHJhbnNsYXRlKC0yMCAtMjApXFxcIj5cIiArXHJcbiAgICBcIiAgICA8cGF0aCBmaWxsPVxcXCIjZmFmYWZhXFxcIiBkPVxcXCJNIDc5LjkgNTIuNiBDIDgwIDUxLjggODAgNTAuOSA4MCA1MCBzIDAgLTEuOCAtMC4xIC0yLjYgbCAtNS4xIC0wLjQgYyAtMC4zIC0yLjQgLTAuOSAtNC42IC0xLjggLTYuNyBsIDQuMiAtMi45IGMgLTAuNyAtMS42IC0xLjYgLTMuMSAtMi42IC00LjUgTCA3MCAzNSBjIC0xLjQgLTEuOSAtMy4xIC0zLjUgLTQuOSAtNC45IGwgMi4yIC00LjYgYyAtMS40IC0xIC0yLjkgLTEuOSAtNC41IC0yLjYgTCA1OS44IDI3IGMgLTIuMSAtMC45IC00LjQgLTEuNSAtNi43IC0xLjggbCAtMC40IC01LjEgQyA1MS44IDIwIDUwLjkgMjAgNTAgMjAgcyAtMS44IDAgLTIuNiAwLjEgbCAtMC40IDUuMSBjIC0yLjQgMC4zIC00LjYgMC45IC02LjcgMS44IGwgLTIuOSAtNC4xIGMgLTEuNiAwLjcgLTMuMSAxLjYgLTQuNSAyLjYgbCAyLjEgNC42IGMgLTEuOSAxLjQgLTMuNSAzLjEgLTUgNC45IGwgLTQuNSAtMi4xIGMgLTEgMS40IC0xLjkgMi45IC0yLjYgNC41IGwgNC4xIDIuOSBjIC0wLjkgMi4xIC0xLjUgNC40IC0xLjggNi44IGwgLTUgMC40IEMgMjAgNDguMiAyMCA0OS4xIDIwIDUwIHMgMCAxLjggMC4xIDIuNiBsIDUgMC40IGMgMC4zIDIuNCAwLjkgNC43IDEuOCA2LjggbCAtNC4xIDIuOSBjIDAuNyAxLjYgMS42IDMuMSAyLjYgNC41IGwgNC41IC0yLjEgYyAxLjQgMS45IDMuMSAzLjUgNSA0LjkgbCAtMi4xIDQuNiBjIDEuNCAxIDIuOSAxLjkgNC41IDIuNiBsIDIuOSAtNC4xIGMgMi4xIDAuOSA0LjQgMS41IDYuNyAxLjggbCAwLjQgNS4xIEMgNDguMiA4MCA0OS4xIDgwIDUwIDgwIHMgMS44IDAgMi42IC0wLjEgbCAwLjQgLTUuMSBjIDIuMyAtMC4zIDQuNiAtMC45IDYuNyAtMS44IGwgMi45IDQuMiBjIDEuNiAtMC43IDMuMSAtMS42IDQuNSAtMi42IEwgNjUgNjkuOSBjIDEuOSAtMS40IDMuNSAtMyA0LjkgLTQuOSBsIDQuNiAyLjIgYyAxIC0xLjQgMS45IC0yLjkgMi42IC00LjUgTCA3MyA1OS44IGMgMC45IC0yLjEgMS41IC00LjQgMS44IC02LjcgTCA3OS45IDUyLjYgWiBNIDUwIDY1IGMgLTguMyAwIC0xNSAtNi43IC0xNSAtMTUgYyAwIC04LjMgNi43IC0xNSAxNSAtMTUgcyAxNSA2LjcgMTUgMTUgQyA2NSA1OC4zIDU4LjMgNjUgNTAgNjUgWlxcXCI+XCIgK1xyXG4gICAgXCIgICAgICA8YW5pbWF0ZVRyYW5zZm9ybSB0eXBlPVxcXCJyb3RhdGVcXFwiIGR1cj1cXFwiMnNcXFwiIHJlcGVhdENvdW50PVxcXCJpbmRlZmluaXRlXFxcIiB0bz1cXFwiMCA1MCA1MFxcXCIgZnJvbT1cXFwiOTAgNTAgNTBcXFwiIGF0dHJpYnV0ZU5hbWU9XFxcInRyYW5zZm9ybVxcXCIgLz5cIiArXHJcbiAgICBcIiAgICA8L3BhdGg+XCIgK1xyXG4gICAgXCIgIDwvZz5cIiArXHJcbiAgICBcIiAgPGcgdHJhbnNmb3JtPVxcXCJ0cmFuc2xhdGUoMjAgMjApIHJvdGF0ZSgxNSA1MC4wMDAyIDUwKVxcXCI+XCIgK1xyXG4gICAgXCIgICAgPHBhdGggZmlsbD1cXFwiI2VmZWZlZlxcXCIgZD1cXFwiTSA3OS45IDUyLjYgQyA4MCA1MS44IDgwIDUwLjkgODAgNTAgcyAwIC0xLjggLTAuMSAtMi42IGwgLTUuMSAtMC40IGMgLTAuMyAtMi40IC0wLjkgLTQuNiAtMS44IC02LjcgbCA0LjIgLTIuOSBjIC0wLjcgLTEuNiAtMS42IC0zLjEgLTIuNiAtNC41IEwgNzAgMzUgYyAtMS40IC0xLjkgLTMuMSAtMy41IC00LjkgLTQuOSBsIDIuMiAtNC42IGMgLTEuNCAtMSAtMi45IC0xLjkgLTQuNSAtMi42IEwgNTkuOCAyNyBjIC0yLjEgLTAuOSAtNC40IC0xLjUgLTYuNyAtMS44IGwgLTAuNCAtNS4xIEMgNTEuOCAyMCA1MC45IDIwIDUwIDIwIHMgLTEuOCAwIC0yLjYgMC4xIGwgLTAuNCA1LjEgYyAtMi40IDAuMyAtNC42IDAuOSAtNi43IDEuOCBsIC0yLjkgLTQuMSBjIC0xLjYgMC43IC0zLjEgMS42IC00LjUgMi42IGwgMi4xIDQuNiBjIC0xLjkgMS40IC0zLjUgMy4xIC01IDQuOSBsIC00LjUgLTIuMSBjIC0xIDEuNCAtMS45IDIuOSAtMi42IDQuNSBsIDQuMSAyLjkgYyAtMC45IDIuMSAtMS41IDQuNCAtMS44IDYuOCBsIC01IDAuNCBDIDIwIDQ4LjIgMjAgNDkuMSAyMCA1MCBzIDAgMS44IDAuMSAyLjYgbCA1IDAuNCBjIDAuMyAyLjQgMC45IDQuNyAxLjggNi44IGwgLTQuMSAyLjkgYyAwLjcgMS42IDEuNiAzLjEgMi42IDQuNSBsIDQuNSAtMi4xIGMgMS40IDEuOSAzLjEgMy41IDUgNC45IGwgLTIuMSA0LjYgYyAxLjQgMSAyLjkgMS45IDQuNSAyLjYgbCAyLjkgLTQuMSBjIDIuMSAwLjkgNC40IDEuNSA2LjcgMS44IGwgMC40IDUuMSBDIDQ4LjIgODAgNDkuMSA4MCA1MCA4MCBzIDEuOCAwIDIuNiAtMC4xIGwgMC40IC01LjEgYyAyLjMgLTAuMyA0LjYgLTAuOSA2LjcgLTEuOCBsIDIuOSA0LjIgYyAxLjYgLTAuNyAzLjEgLTEuNiA0LjUgLTIuNiBMIDY1IDY5LjkgYyAxLjkgLTEuNCAzLjUgLTMgNC45IC00LjkgbCA0LjYgMi4yIGMgMSAtMS40IDEuOSAtMi45IDIuNiAtNC41IEwgNzMgNTkuOCBjIDAuOSAtMi4xIDEuNSAtNC40IDEuOCAtNi43IEwgNzkuOSA1Mi42IFogTSA1MCA2NSBjIC04LjMgMCAtMTUgLTYuNyAtMTUgLTE1IGMgMCAtOC4zIDYuNyAtMTUgMTUgLTE1IHMgMTUgNi43IDE1IDE1IEMgNjUgNTguMyA1OC4zIDY1IDUwIDY1IFpcXFwiPlwiICtcclxuICAgIFwiICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gdHlwZT1cXFwicm90YXRlXFxcIiBkdXI9XFxcIjJzXFxcIiByZXBlYXRDb3VudD1cXFwiaW5kZWZpbml0ZVxcXCIgdG89XFxcIjkwIDUwIDUwXFxcIiBmcm9tPVxcXCIwIDUwIDUwXFxcIiBhdHRyaWJ1dGVOYW1lPVxcXCJ0cmFuc2Zvcm1cXFwiIC8+XCIgK1xyXG4gICAgXCIgICAgPC9wYXRoPlwiICtcclxuICAgIFwiICA8L2c+XCIgK1xyXG4gICAgXCI8L3N2Zz5cIjtcclxudmFyIHdhaXRJbWFnZSA9ICQoXCI8aW1nIC8+XCIpO1xyXG53YWl0SW1hZ2UuYXR0cihcInNyY1wiLCBob3VyZ2xhc3MpO1xyXG52YXIgaW5uZXIgPSAkKFwiPGRpdiAvPlwiKTtcclxuaW5uZXIuYXBwZW5kKHdhaXRJbWFnZSk7XHJcbnBsZWFzZVdhaXQuYXBwZW5kKGlubmVyKTtcclxuXHJcbnZhciB3YWl0U2NyZWVuID0ge1xyXG4gICAgc2hvdzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICgkKFwiI1wiICsgcGxlYXNlV2FpdElkKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwbGVhc2VXYWl0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29tbW9uLmJvZHkuYXBwZW5kKHBsZWFzZVdhaXQpO1xyXG4gICAgICAgIHJldHVybiBwbGVhc2VXYWl0O1xyXG4gICAgfSxcclxuICAgIGhpZGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBwbGVhc2VXYWl0LnJlbW92ZSgpO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2FpdFNjcmVlbjtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBjOi9naXQvRXNwYWxpZXJKUy9zcmMvanMvZXNwYWxpZXIud2FpdHNjcmVlbi5qc1xuICoqLyIsInZhciBib2R5ID0gJChcImJvZHlcIik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBib2R5OiBib2R5LFxyXG4gICAgd2luZG93OiAkKHdpbmRvdyksXHJcbiAgICBzaG93VmVsbHVtOiBmdW5jdGlvbigpIHtcclxuICAgIFx0aWYoJChcIi5lc3BhbGllci12ZWxsdW1cIikubGVuZ3RoID4gMCkge1xyXG4gICAgXHRcdHJldHVybjtcclxuICAgIFx0fVxyXG5cclxuICAgICAgICB2YXIgdmVsbHVtID0gJChcIjxkaXYgY2xhc3M9XFxcImVzcGFsaWVyLXZlbGx1bVxcXCIgLz5cIik7XHJcbiAgICAgICAgYm9keS5hcHBlbmQodmVsbHVtKTtcclxuICAgIH0sXHJcbiAgICBoaWRlVmVsbHVtOiBmdW5jdGlvbigpIHtcclxuICAgIFx0JChcIi5lc3BhbGllci12ZWxsdW1cIikucmVtb3ZlKCk7XHJcbiAgICB9XHJcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogYzovZ2l0L0VzcGFsaWVySlMvc3JjL2pzL2VzcGFsaWVyLmNvbW1vbi5qc1xuICoqLyIsIi8qXG5Db3B5cmlnaHQgKGMpIDIwMTAsMjAxMSwyMDEyLDIwMTMsMjAxNCBNb3JnYW4gUm9kZXJpY2sgaHR0cDovL3JvZGVyaWNrLmRrXG5MaWNlbnNlOiBNSVQgLSBodHRwOi8vbXJnbnJkcmNrLm1pdC1saWNlbnNlLm9yZ1xuXG5odHRwczovL2dpdGh1Yi5jb20vbXJvZGVyaWNrL1B1YlN1YkpTXG4qL1xuKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KXtcblx0J3VzZSBzdHJpY3QnO1xuXG4gICAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCl7XG4gICAgICAgIC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cbiAgICAgICAgZGVmaW5lKFsnZXhwb3J0cyddLCBmYWN0b3J5KTtcblxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKXtcbiAgICAgICAgLy8gQ29tbW9uSlNcbiAgICAgICAgZmFjdG9yeShleHBvcnRzKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEJyb3dzZXIgZ2xvYmFsc1xuICAgICAgICB2YXIgUHViU3ViID0ge307XG4gICAgICAgIHJvb3QuUHViU3ViID0gUHViU3ViO1xuICAgICAgICBmYWN0b3J5KFB1YlN1Yik7XG4gICAgfVxufSgoIHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnICYmIHdpbmRvdyApIHx8IHRoaXMsIGZ1bmN0aW9uIChQdWJTdWIpe1xuXHQndXNlIHN0cmljdCc7XG5cblx0dmFyIG1lc3NhZ2VzID0ge30sXG5cdFx0bGFzdFVpZCA9IC0xO1xuXG5cdGZ1bmN0aW9uIGhhc0tleXMob2JqKXtcblx0XHR2YXIga2V5O1xuXG5cdFx0Zm9yIChrZXkgaW4gb2JqKXtcblx0XHRcdGlmICggb2JqLmhhc093blByb3BlcnR5KGtleSkgKXtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8qKlxuXHQgKlx0UmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgdGhyb3dzIHRoZSBwYXNzZWQgZXhjZXB0aW9uLCBmb3IgdXNlIGFzIGFyZ3VtZW50IGZvciBzZXRUaW1lb3V0XG5cdCAqXHRAcGFyYW0geyBPYmplY3QgfSBleCBBbiBFcnJvciBvYmplY3Rcblx0ICovXG5cdGZ1bmN0aW9uIHRocm93RXhjZXB0aW9uKCBleCApe1xuXHRcdHJldHVybiBmdW5jdGlvbiByZVRocm93RXhjZXB0aW9uKCl7XG5cdFx0XHR0aHJvdyBleDtcblx0XHR9O1xuXHR9XG5cblx0ZnVuY3Rpb24gY2FsbFN1YnNjcmliZXJXaXRoRGVsYXllZEV4Y2VwdGlvbnMoIHN1YnNjcmliZXIsIG1lc3NhZ2UsIGRhdGEgKXtcblx0XHR0cnkge1xuXHRcdFx0c3Vic2NyaWJlciggbWVzc2FnZSwgZGF0YSApO1xuXHRcdH0gY2F0Y2goIGV4ICl7XG5cdFx0XHRzZXRUaW1lb3V0KCB0aHJvd0V4Y2VwdGlvbiggZXggKSwgMCk7XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gY2FsbFN1YnNjcmliZXJXaXRoSW1tZWRpYXRlRXhjZXB0aW9ucyggc3Vic2NyaWJlciwgbWVzc2FnZSwgZGF0YSApe1xuXHRcdHN1YnNjcmliZXIoIG1lc3NhZ2UsIGRhdGEgKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGRlbGl2ZXJNZXNzYWdlKCBvcmlnaW5hbE1lc3NhZ2UsIG1hdGNoZWRNZXNzYWdlLCBkYXRhLCBpbW1lZGlhdGVFeGNlcHRpb25zICl7XG5cdFx0dmFyIHN1YnNjcmliZXJzID0gbWVzc2FnZXNbbWF0Y2hlZE1lc3NhZ2VdLFxuXHRcdFx0Y2FsbFN1YnNjcmliZXIgPSBpbW1lZGlhdGVFeGNlcHRpb25zID8gY2FsbFN1YnNjcmliZXJXaXRoSW1tZWRpYXRlRXhjZXB0aW9ucyA6IGNhbGxTdWJzY3JpYmVyV2l0aERlbGF5ZWRFeGNlcHRpb25zLFxuXHRcdFx0cztcblxuXHRcdGlmICggIW1lc3NhZ2VzLmhhc093blByb3BlcnR5KCBtYXRjaGVkTWVzc2FnZSApICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGZvciAocyBpbiBzdWJzY3JpYmVycyl7XG5cdFx0XHRpZiAoIHN1YnNjcmliZXJzLmhhc093blByb3BlcnR5KHMpKXtcblx0XHRcdFx0Y2FsbFN1YnNjcmliZXIoIHN1YnNjcmliZXJzW3NdLCBvcmlnaW5hbE1lc3NhZ2UsIGRhdGEgKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRmdW5jdGlvbiBjcmVhdGVEZWxpdmVyeUZ1bmN0aW9uKCBtZXNzYWdlLCBkYXRhLCBpbW1lZGlhdGVFeGNlcHRpb25zICl7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uIGRlbGl2ZXJOYW1lc3BhY2VkKCl7XG5cdFx0XHR2YXIgdG9waWMgPSBTdHJpbmcoIG1lc3NhZ2UgKSxcblx0XHRcdFx0cG9zaXRpb24gPSB0b3BpYy5sYXN0SW5kZXhPZiggJy4nICk7XG5cblx0XHRcdC8vIGRlbGl2ZXIgdGhlIG1lc3NhZ2UgYXMgaXQgaXMgbm93XG5cdFx0XHRkZWxpdmVyTWVzc2FnZShtZXNzYWdlLCBtZXNzYWdlLCBkYXRhLCBpbW1lZGlhdGVFeGNlcHRpb25zKTtcblxuXHRcdFx0Ly8gdHJpbSB0aGUgaGllcmFyY2h5IGFuZCBkZWxpdmVyIG1lc3NhZ2UgdG8gZWFjaCBsZXZlbFxuXHRcdFx0d2hpbGUoIHBvc2l0aW9uICE9PSAtMSApe1xuXHRcdFx0XHR0b3BpYyA9IHRvcGljLnN1YnN0ciggMCwgcG9zaXRpb24gKTtcblx0XHRcdFx0cG9zaXRpb24gPSB0b3BpYy5sYXN0SW5kZXhPZignLicpO1xuXHRcdFx0XHRkZWxpdmVyTWVzc2FnZSggbWVzc2FnZSwgdG9waWMsIGRhdGEsIGltbWVkaWF0ZUV4Y2VwdGlvbnMgKTtcblx0XHRcdH1cblx0XHR9O1xuXHR9XG5cblx0ZnVuY3Rpb24gbWVzc2FnZUhhc1N1YnNjcmliZXJzKCBtZXNzYWdlICl7XG5cdFx0dmFyIHRvcGljID0gU3RyaW5nKCBtZXNzYWdlICksXG5cdFx0XHRmb3VuZCA9IEJvb2xlYW4obWVzc2FnZXMuaGFzT3duUHJvcGVydHkoIHRvcGljICkgJiYgaGFzS2V5cyhtZXNzYWdlc1t0b3BpY10pKSxcblx0XHRcdHBvc2l0aW9uID0gdG9waWMubGFzdEluZGV4T2YoICcuJyApO1xuXG5cdFx0d2hpbGUgKCAhZm91bmQgJiYgcG9zaXRpb24gIT09IC0xICl7XG5cdFx0XHR0b3BpYyA9IHRvcGljLnN1YnN0ciggMCwgcG9zaXRpb24gKTtcblx0XHRcdHBvc2l0aW9uID0gdG9waWMubGFzdEluZGV4T2YoICcuJyApO1xuXHRcdFx0Zm91bmQgPSBCb29sZWFuKG1lc3NhZ2VzLmhhc093blByb3BlcnR5KCB0b3BpYyApICYmIGhhc0tleXMobWVzc2FnZXNbdG9waWNdKSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZvdW5kO1xuXHR9XG5cblx0ZnVuY3Rpb24gcHVibGlzaCggbWVzc2FnZSwgZGF0YSwgc3luYywgaW1tZWRpYXRlRXhjZXB0aW9ucyApe1xuXHRcdHZhciBkZWxpdmVyID0gY3JlYXRlRGVsaXZlcnlGdW5jdGlvbiggbWVzc2FnZSwgZGF0YSwgaW1tZWRpYXRlRXhjZXB0aW9ucyApLFxuXHRcdFx0aGFzU3Vic2NyaWJlcnMgPSBtZXNzYWdlSGFzU3Vic2NyaWJlcnMoIG1lc3NhZ2UgKTtcblxuXHRcdGlmICggIWhhc1N1YnNjcmliZXJzICl7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYgKCBzeW5jID09PSB0cnVlICl7XG5cdFx0XHRkZWxpdmVyKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHNldFRpbWVvdXQoIGRlbGl2ZXIsIDAgKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHQvKipcblx0ICpcdFB1YlN1Yi5wdWJsaXNoKCBtZXNzYWdlWywgZGF0YV0gKSAtPiBCb29sZWFuXG5cdCAqXHQtIG1lc3NhZ2UgKFN0cmluZyk6IFRoZSBtZXNzYWdlIHRvIHB1Ymxpc2hcblx0ICpcdC0gZGF0YTogVGhlIGRhdGEgdG8gcGFzcyB0byBzdWJzY3JpYmVyc1xuXHQgKlx0UHVibGlzaGVzIHRoZSB0aGUgbWVzc2FnZSwgcGFzc2luZyB0aGUgZGF0YSB0byBpdCdzIHN1YnNjcmliZXJzXG5cdCoqL1xuXHRQdWJTdWIucHVibGlzaCA9IGZ1bmN0aW9uKCBtZXNzYWdlLCBkYXRhICl7XG5cdFx0cmV0dXJuIHB1Ymxpc2goIG1lc3NhZ2UsIGRhdGEsIGZhbHNlLCBQdWJTdWIuaW1tZWRpYXRlRXhjZXB0aW9ucyApO1xuXHR9O1xuXG5cdC8qKlxuXHQgKlx0UHViU3ViLnB1Ymxpc2hTeW5jKCBtZXNzYWdlWywgZGF0YV0gKSAtPiBCb29sZWFuXG5cdCAqXHQtIG1lc3NhZ2UgKFN0cmluZyk6IFRoZSBtZXNzYWdlIHRvIHB1Ymxpc2hcblx0ICpcdC0gZGF0YTogVGhlIGRhdGEgdG8gcGFzcyB0byBzdWJzY3JpYmVyc1xuXHQgKlx0UHVibGlzaGVzIHRoZSB0aGUgbWVzc2FnZSBzeW5jaHJvbm91c2x5LCBwYXNzaW5nIHRoZSBkYXRhIHRvIGl0J3Mgc3Vic2NyaWJlcnNcblx0KiovXG5cdFB1YlN1Yi5wdWJsaXNoU3luYyA9IGZ1bmN0aW9uKCBtZXNzYWdlLCBkYXRhICl7XG5cdFx0cmV0dXJuIHB1Ymxpc2goIG1lc3NhZ2UsIGRhdGEsIHRydWUsIFB1YlN1Yi5pbW1lZGlhdGVFeGNlcHRpb25zICk7XG5cdH07XG5cblx0LyoqXG5cdCAqXHRQdWJTdWIuc3Vic2NyaWJlKCBtZXNzYWdlLCBmdW5jICkgLT4gU3RyaW5nXG5cdCAqXHQtIG1lc3NhZ2UgKFN0cmluZyk6IFRoZSBtZXNzYWdlIHRvIHN1YnNjcmliZSB0b1xuXHQgKlx0LSBmdW5jIChGdW5jdGlvbik6IFRoZSBmdW5jdGlvbiB0byBjYWxsIHdoZW4gYSBuZXcgbWVzc2FnZSBpcyBwdWJsaXNoZWRcblx0ICpcdFN1YnNjcmliZXMgdGhlIHBhc3NlZCBmdW5jdGlvbiB0byB0aGUgcGFzc2VkIG1lc3NhZ2UuIEV2ZXJ5IHJldHVybmVkIHRva2VuIGlzIHVuaXF1ZSBhbmQgc2hvdWxkIGJlIHN0b3JlZCBpZlxuXHQgKlx0eW91IG5lZWQgdG8gdW5zdWJzY3JpYmVcblx0KiovXG5cdFB1YlN1Yi5zdWJzY3JpYmUgPSBmdW5jdGlvbiggbWVzc2FnZSwgZnVuYyApe1xuXHRcdGlmICggdHlwZW9mIGZ1bmMgIT09ICdmdW5jdGlvbicpe1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIG1lc3NhZ2UgaXMgbm90IHJlZ2lzdGVyZWQgeWV0XG5cdFx0aWYgKCAhbWVzc2FnZXMuaGFzT3duUHJvcGVydHkoIG1lc3NhZ2UgKSApe1xuXHRcdFx0bWVzc2FnZXNbbWVzc2FnZV0gPSB7fTtcblx0XHR9XG5cblx0XHQvLyBmb3JjaW5nIHRva2VuIGFzIFN0cmluZywgdG8gYWxsb3cgZm9yIGZ1dHVyZSBleHBhbnNpb25zIHdpdGhvdXQgYnJlYWtpbmcgdXNhZ2Vcblx0XHQvLyBhbmQgYWxsb3cgZm9yIGVhc3kgdXNlIGFzIGtleSBuYW1lcyBmb3IgdGhlICdtZXNzYWdlcycgb2JqZWN0XG5cdFx0dmFyIHRva2VuID0gJ3VpZF8nICsgU3RyaW5nKCsrbGFzdFVpZCk7XG5cdFx0bWVzc2FnZXNbbWVzc2FnZV1bdG9rZW5dID0gZnVuYztcblxuXHRcdC8vIHJldHVybiB0b2tlbiBmb3IgdW5zdWJzY3JpYmluZ1xuXHRcdHJldHVybiB0b2tlbjtcblx0fTtcblxuXHQvKiBQdWJsaWM6IENsZWFycyBhbGwgc3Vic2NyaXB0aW9uc1xuXHQgKi9cblx0UHViU3ViLmNsZWFyQWxsU3Vic2NyaXB0aW9ucyA9IGZ1bmN0aW9uIGNsZWFyQWxsU3Vic2NyaXB0aW9ucygpe1xuXHRcdG1lc3NhZ2VzID0ge307XG5cdH07XG5cblx0LypQdWJsaWM6IENsZWFyIHN1YnNjcmlwdGlvbnMgYnkgdGhlIHRvcGljXG5cdCovXG5cdFB1YlN1Yi5jbGVhclN1YnNjcmlwdGlvbnMgPSBmdW5jdGlvbiBjbGVhclN1YnNjcmlwdGlvbnModG9waWMpe1xuXHRcdHZhciBtOyBcblx0XHRmb3IgKG0gaW4gbWVzc2FnZXMpe1xuXHRcdFx0aWYgKG1lc3NhZ2VzLmhhc093blByb3BlcnR5KG0pICYmIG0uaW5kZXhPZih0b3BpYykgPT09IDApe1xuXHRcdFx0XHRkZWxldGUgbWVzc2FnZXNbbV07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdC8qIFB1YmxpYzogcmVtb3ZlcyBzdWJzY3JpcHRpb25zLlxuXHQgKiBXaGVuIHBhc3NlZCBhIHRva2VuLCByZW1vdmVzIGEgc3BlY2lmaWMgc3Vic2NyaXB0aW9uLlxuXHQgKiBXaGVuIHBhc3NlZCBhIGZ1bmN0aW9uLCByZW1vdmVzIGFsbCBzdWJzY3JpcHRpb25zIGZvciB0aGF0IGZ1bmN0aW9uXG5cdCAqIFdoZW4gcGFzc2VkIGEgdG9waWMsIHJlbW92ZXMgYWxsIHN1YnNjcmlwdGlvbnMgZm9yIHRoYXQgdG9waWMgKGhpZXJhcmNoeSlcblx0ICpcblx0ICogdmFsdWUgLSBBIHRva2VuLCBmdW5jdGlvbiBvciB0b3BpYyB0byB1bnN1YnNjcmliZS5cblx0ICpcblx0ICogRXhhbXBsZXNcblx0ICpcblx0ICpcdFx0Ly8gRXhhbXBsZSAxIC0gdW5zdWJzY3JpYmluZyB3aXRoIGEgdG9rZW5cblx0ICpcdFx0dmFyIHRva2VuID0gUHViU3ViLnN1YnNjcmliZSgnbXl0b3BpYycsIG15RnVuYyk7XG5cdCAqXHRcdFB1YlN1Yi51bnN1YnNjcmliZSh0b2tlbik7XG5cdCAqXG5cdCAqXHRcdC8vIEV4YW1wbGUgMiAtIHVuc3Vic2NyaWJpbmcgd2l0aCBhIGZ1bmN0aW9uXG5cdCAqXHRcdFB1YlN1Yi51bnN1YnNjcmliZShteUZ1bmMpO1xuXHQgKlxuXHQgKlx0XHQvLyBFeGFtcGxlIDMgLSB1bnN1YnNjcmliaW5nIGEgdG9waWNcblx0ICpcdFx0UHViU3ViLnVuc3Vic2NyaWJlKCdteXRvcGljJyk7XG5cdCAqL1xuXHRQdWJTdWIudW5zdWJzY3JpYmUgPSBmdW5jdGlvbih2YWx1ZSl7XG5cdFx0dmFyIGlzVG9waWMgICAgPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIG1lc3NhZ2VzLmhhc093blByb3BlcnR5KHZhbHVlKSxcblx0XHRcdGlzVG9rZW4gICAgPSAhaXNUb3BpYyAmJiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnLFxuXHRcdFx0aXNGdW5jdGlvbiA9IHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyxcblx0XHRcdHJlc3VsdCA9IGZhbHNlLFxuXHRcdFx0bSwgbWVzc2FnZSwgdDtcblxuXHRcdGlmIChpc1RvcGljKXtcblx0XHRcdGRlbGV0ZSBtZXNzYWdlc1t2YWx1ZV07XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Zm9yICggbSBpbiBtZXNzYWdlcyApe1xuXHRcdFx0aWYgKCBtZXNzYWdlcy5oYXNPd25Qcm9wZXJ0eSggbSApICl7XG5cdFx0XHRcdG1lc3NhZ2UgPSBtZXNzYWdlc1ttXTtcblxuXHRcdFx0XHRpZiAoIGlzVG9rZW4gJiYgbWVzc2FnZVt2YWx1ZV0gKXtcblx0XHRcdFx0XHRkZWxldGUgbWVzc2FnZVt2YWx1ZV07XG5cdFx0XHRcdFx0cmVzdWx0ID0gdmFsdWU7XG5cdFx0XHRcdFx0Ly8gdG9rZW5zIGFyZSB1bmlxdWUsIHNvIHdlIGNhbiBqdXN0IHN0b3AgaGVyZVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKGlzRnVuY3Rpb24pIHtcblx0XHRcdFx0XHRmb3IgKCB0IGluIG1lc3NhZ2UgKXtcblx0XHRcdFx0XHRcdGlmIChtZXNzYWdlLmhhc093blByb3BlcnR5KHQpICYmIG1lc3NhZ2VbdF0gPT09IHZhbHVlKXtcblx0XHRcdFx0XHRcdFx0ZGVsZXRlIG1lc3NhZ2VbdF07XG5cdFx0XHRcdFx0XHRcdHJlc3VsdCA9IHRydWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fTtcbn0pKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGM6L2dpdC9Fc3BhbGllckpTL34vcHVic3ViLWpzL3NyYy9wdWJzdWIuanNcbiAqKi8iLCJ2YXIgdGVtcGxhdGVzID0ge1xyXG5cdG1lc3NhZ2U6IGZ1bmN0aW9uKGRhdGEpIHtcclxuXHRcdHZhciByb290ID0gJChcIjxkaXYgLz5cIik7XHJcblx0XHRyb290LmFkZENsYXNzKGRhdGEubWVzc2FnZUNvbnRhaW5lckNsYXNzKTtcclxuXHRcdHJvb3QuYWRkQ2xhc3MoZGF0YS5tZXNzYWdlVHlwZUNsYXNzKTtcclxuXHRcdHJvb3QuYWRkQ2xhc3MoZGF0YS5tZXNzYWdlQXR0YWNobWVudENsYXNzKTtcclxuXHJcblx0XHR2YXIgY2xvc2VCdXR0b24gPSAkKFwiPGEgLz5cIik7XHJcblx0XHRjbG9zZUJ1dHRvbi5hdHRyKFwiaHJlZlwiLCBcImphdmFzY3JpcHQ6IHZvaWQoMCk7XCIpO1xyXG5cdFx0Y2xvc2VCdXR0b24uYWRkQ2xhc3MoZGF0YS5jbG9zZU1lc3NhZ2VDbGFzcyk7XHJcblxyXG5cdFx0cm9vdC5hcHBlbmQoY2xvc2VCdXR0b24pO1xyXG5cclxuXHRcdGlmIChkYXRhLm1vcmVUaGFuT25lKSB7XHJcblx0XHRcdHZhciBsaXN0ID0gJChcIjx1bCAvPlwiKTtcclxuXHJcblx0XHRcdCQuZWFjaChkYXRhLm1lc3NhZ2VzLCBmdW5jdGlvbihpbmRleCwgbWVzc2FnZSkge1xyXG5cdFx0XHRcdGxpc3QuYXBwZW5kKFwiPGxpPlwiICsgbWVzc2FnZSArIFwiPC9saT5cIik7XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0cm9vdC5hcHBlbmQobGlzdCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyb290LmFwcGVuZChcIjxwPlwiICsgZGF0YS5tZXNzYWdlcyArIFwiPC9wPlwiKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gcm9vdFswXTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRlbXBsYXRlcztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBjOi9naXQvRXNwYWxpZXJKUy9zcmMvanMvdGVtcGxhdGVzL2Jvb3RzdHJhcFRlbXBsYXRlcy5qc1xuICoqLyIsImltcG9ydCBjb3JlIGZyb20gXCIuL2VzcGFsaWVyLmNvcmVcIjtcclxuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gXCIuL2VzcGFsaWVyLmZvcm1zLmNvbnRyb2xcIjtcclxuXHJcbmNsYXNzIEVzcGFsaWVyRm9ybSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihmb3JtVG9XaXJlLCBhcmdzKSB7XHJcbiAgICAgICAgaWYgKGNvcmUuaXNTdHJpbmcoZm9ybVRvV2lyZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5mb3JtID0gY29yZS5maW5kKGZvcm1Ub1dpcmUpWzBdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZm9ybSA9IGZvcm1Ub1dpcmVbMF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgc3VibWl0OiBmYWxzZVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGxldCBvbkVudGVyID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBjb2RlID0gKGV2ZW50LmtleUNvZGUgPyBldmVudC5rZXlDb2RlIDogZXZlbnQud2hpY2gpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNvZGUgPT0gMTMpIHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3VibWl0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSBjb3JlLmV4dGVuZChvcHRpb25zLCBhcmdzKTtcclxuXHJcbiAgICAgICAgdGhpcy5mb3JtLnNldEF0dHJpYnV0ZShcIm5vdmFsaWRhdGVcIiwgXCJcIik7XHJcbiAgICAgICAgdGhpcy5jb250cm9scyA9IG5ldyBTZXQoKTtcclxuICAgICAgICBsZXQgcHJvY2Vzc2VkQ29udHJvbHMgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgbGV0IHJhd0NvbnRyb2xzID0gY29yZS5maW5kKFwiaW5wdXQsIHRleHRhcmVhLCBzZWxlY3RcIiwgdGhpcy5mb3JtKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgY29udHJvbCBvZiByYXdDb250cm9scykge1xyXG4gICAgICAgICAgICBjb250cm9sLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCBvbkVudGVyKTtcclxuICAgICAgICAgICAgdmFyIGNvbnRyb2xUeXBlID0gY29udHJvbC50eXBlID8gY29udHJvbC50eXBlIDogY29udHJvbC5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpO1xyXG4gICAgICAgICAgICB2YXIgbG93ZXJDYXNlSWQgPSBjb250cm9sVHlwZSA9PSBcInJhZGlvXCIgPyBjb250cm9sLm5hbWUudG9Mb3dlckNhc2UoKSA6IGNvbnRyb2wuaWQudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChwcm9jZXNzZWRDb250cm9scy5oYXMobG93ZXJDYXNlSWQpKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcHJvY2Vzc2VkQ29udHJvbHMuYWRkKGxvd2VyQ2FzZUlkKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChsb3dlckNhc2VJZCB8fCAoY29udHJvbC50eXBlID8gY29udHJvbC50eXBlIDogY29udHJvbC5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpKSA9PSBcInJhZGlvXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udHJvbHMuYWRkKEZvcm1Db250cm9sKGNvbnRyb2wpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29yZS5hZGRFdmVudExpc3RlbmVyKHRoaXMuZm9ybSwgXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuc3VibWl0KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBzdWJtaXRCdXR0b25zID0gY29yZS5maW5kKFwiW2RhdGEtYWN0aW9uPVxcXCJzdWJtaXRcXFwiXVwiLCB0aGlzLmZvcm0pO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBzdWJtaXRCdXR0b24gb2Ygc3VibWl0QnV0dG9ucykge1xyXG4gICAgICAgICAgICBjb3JlLmFkZEV2ZW50TGlzdGVuZXIoc3VibWl0QnV0dG9uLCBcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBoYXNGb2N1cyA9IGNvcmUuZmluZChcIltkYXRhLWZvY3VzPVxcXCJ0cnVlXFxcIl1cIiwgdGhpcy5mb3JtKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgZWwgb2YgaGFzRm9jdXMpIHtcclxuICAgICAgICAgICAgaWYgKGVsLm9mZnNldFBhcmVudCA9PT0gbnVsbCB8fCBlbC5yZWFkT25seSkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGVsLmZvY3VzKCk7XHJcbiAgICAgICAgICAgIGVsLnNlbGVjdCgpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3VibWl0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc3VibWl0KSB7XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5zdWJtaXQoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMudmFsaWRhdGUoKSkge1xyXG4gICAgICAgICAgICBsZXQgbWV0aG9kID0gdGhpcy5mb3JtLmdldEF0dHJpYnV0ZShcIm1ldGhvZFwiKTtcclxuXHJcbiAgICAgICAgICAgIGNvcmUuc2VuZFJlcXVlc3Qoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogbWV0aG9kID8gbWV0aG9kIDogXCJHRVRcIixcclxuICAgICAgICAgICAgICAgIHVybDogdGhpcy5mb3JtLmdldEF0dHJpYnV0ZShcImFjdGlvblwiKSxcclxuICAgICAgICAgICAgICAgIGRhdGE6ICQodGhpcy5mb3JtKS5zZXJpYWxpemUoKSAvL1RPRE86IFJlbW92ZSBqUXVlcnkuXHJcbiAgICAgICAgICAgIH0pLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBvblN1Y2Nlc3MgPSB0aGlzLmZvcm0uZ2V0QXR0cmlidXRlKFwiZGF0YS1zdWNjZXNzXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChvblN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb3JlLnB1Ymxpc2gob25TdWNjZXNzLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHZhbGlkYXRlKCkge1xyXG4gICAgICAgIHZhciB2YWxpZCA9IHRydWU7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGNvbnRyb2wgb2YgdGhpcy5jb250cm9scykge1xyXG4gICAgICAgICAgICBjb250cm9sLm1lc3NhZ2UucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWNvbnRyb2wudmFsaWRhdGUoKSkge1xyXG4gICAgICAgICAgICAgICAgdmFsaWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHZhbGlkO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoZm9ybVRvV2lyZSwgYXJncykge1xyXG4gICAgcmV0dXJuIG5ldyBFc3BhbGllckZvcm0oZm9ybVRvV2lyZSwgYXJncyk7XHJcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogYzovZ2l0L0VzcGFsaWVySlMvc3JjL2pzL2VzcGFsaWVyLmZvcm1zLmpzXG4gKiovIiwiaW1wb3J0IGNvcmUgZnJvbSBcIi4vZXNwYWxpZXIuY29yZVwiO1xyXG5pbXBvcnQgeyBSZXF1aXJlZCwgRW1haWwsIERhdGUsIFJlcXVpcmVkRGVwZW5kZW50IH0gZnJvbSBcIi4vZXNwYWxpZXIudmFsaWRhdGlvblwiO1xyXG5pbXBvcnQgbWVzc2FnZUZhY3RvcnkgZnJvbSBcIi4vZXNwYWxpZXIubWVzc2FnZUZhY3RvcnlcIjtcclxuXHJcbmNsYXNzIEZvcm1Db250cm9sIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRyb2wsIGZvcm0sIHZhbGlkYXRpb25zLCBleHBsaWNpdFZhbGlkYXRpb25zKSB7XHJcbiAgICAgICAgdmFyIGNvbnRyb2xUeXBlID0gY29udHJvbC50eXBlID8gY29udHJvbC50eXBlIDogY29udHJvbC5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpO1xyXG4gICAgICAgIHZhciBsb3dlckNhc2VJZCA9IGNvbnRyb2xUeXBlID09IFwicmFkaW9cIiA/IGNvbnRyb2wubmFtZS50b0xvd2VyQ2FzZSgpIDogY29udHJvbC5pZC50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgICBpZiAoIWxvd2VyQ2FzZUlkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkVsZW1lbnRzIG11c3QgaGF2ZSBhbiBJZCB0byBiZSBwcm9wZXJseSB3aXJlZCB0byBhbiBFc3BhbGllciBmb3JtIGNvbnRyb2wuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jb250cm9sID0gY29udHJvbDtcclxuICAgICAgICB0aGlzLmZvcm0gPSBmb3JtO1xyXG4gICAgICAgIHZhciBncm91cDtcclxuICAgICAgICBsZXQgcmVxdWlyZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgc3dpdGNoIChjb250cm9sVHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwicmFkaW9cIjpcclxuICAgICAgICAgICAgICAgIGdyb3VwID0gY29yZS5jbG9zZXN0KGNvbnRyb2wsIFwiLnJhZGlvLWdyb3VwXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCByYWRpb3MgPSBjb3JlLmZpbmQoJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScsIGdyb3VwKTtcclxuICAgICAgICAgICAgICAgIGxldCBkZXBlbmRlbnRzID0gbmV3IE1hcCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHJhZGlvIG9mIHJhZGlvcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyYWRpby5yZXF1aXJlZCB8fCByYWRpby5nZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb3JlLmFkZEV2ZW50TGlzdGVuZXIocmFkaW8sIFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrZXkgb2YgZGVwZW5kZW50cy5rZXlzKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGRlcGVuZGVudCBvZiBkZXBlbmRlbnRzLmdldChrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVwZW5kZW50LmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFkZXBlbmRlbnRzLmhhcyhyYWRpbykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgZGVwZW5kZW50IG9mIGRlcGVuZGVudHMuZ2V0KHJhZGlvKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVwZW5kZW50LnNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVxdWlyZWREZXBlbmRlbnRzU2VsZWN0b3IgPSByYWRpby5nZXRBdHRyaWJ1dGUoXCJkYXRhLXJlcXVpcmVcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghcmVxdWlyZWREZXBlbmRlbnRzU2VsZWN0b3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVxdWlyZWREZXBlbmRlbnRzID0gY29yZS5maW5kKHJlcXVpcmVkRGVwZW5kZW50c1NlbGVjdG9yLCB0aGlzLmZvcm0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkZXBlbmRlbnRDb250cm9scyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCByZXF1aXJlZERlcGVuZGVudCBvZiByZXF1aXJlZERlcGVuZGVudHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRlcGVuZGVudENvbnRyb2wgPSBmYWN0b3J5KHJlcXVpcmVkRGVwZW5kZW50LCBmb3JtLCB7IHJlcXVpcmVkOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9ucy5wdXNoKG5ldyBSZXF1aXJlZERlcGVuZGVudCh0aGlzLCByYWRpby52YWx1ZSwgZGVwZW5kZW50Q29udHJvbCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXBlbmRlbnRDb250cm9sLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVwZW5kZW50Q29udHJvbHMucHVzaChkZXBlbmRlbnRDb250cm9sKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGRlcGVuZGVudHMuc2V0KHJhZGlvLCBkZXBlbmRlbnRDb250cm9scyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImNoZWNrYm94XCI6XHJcbiAgICAgICAgICAgICAgICBncm91cCA9IGNvcmUuY2xvc2VzdChjb250cm9sLCBcIi5jaGVja2JveFwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiZW1haWxcIjpcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25zLnB1c2gobmV3IEVtYWlsKHRoaXMpKTtcclxuICAgICAgICAgICAgICAgIGdyb3VwID0gY29yZS5jbG9zZXN0KGNvbnRyb2wsIFwiLmZvcm0tZ3JvdXBcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImRhdGVcIjpcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25zLnB1c2gobmV3IERhdGUodGhpcykpO1xyXG4gICAgICAgICAgICAgICAgZ3JvdXAgPSBjb3JlLmNsb3Nlc3QoY29udHJvbCwgXCIuZm9ybS1ncm91cFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoY29udHJvbC5kYXRlcGlja2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbC5kYXRlcGlja2VyKCkuYXR0cihcInR5cGVcIiwgXCJ0ZXh0XCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBncm91cCA9IGNvcmUuY2xvc2VzdChjb250cm9sLCBcIi5mb3JtLWdyb3VwXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlRmFjdG9yeS5jcmVhdGUoe1xyXG4gICAgICAgICAgICBhdHRhY2hUbzogZ3JvdXAsXHJcbiAgICAgICAgICAgIG1lc3NhZ2VBdHRhY2htZW50OiBtZXNzYWdlRmFjdG9yeS5tZXNzYWdlQXR0YWNobWVudC5GbG93LFxyXG4gICAgICAgICAgICBvblJlbW92ZWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGNvcmUucmVtb3ZlQ2xhc3MoZ3JvdXAsIFwiaGFzLWVycm9yXCIpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbkFkZGVkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBjb3JlLmFkZENsYXNzKGdyb3VwLCBcImhhcy1lcnJvclwiKTtcclxuICAgICAgICAgICAgICAgIC8vVE9ETzogR2V0IHJpZCBvZiBqUXVlcnlcclxuICAgICAgICAgICAgICAgICQoZ3JvdXApLnZlbG9jaXR5KFwiY2FsbG91dC50YWRhXCIsIHtcclxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogNTAwXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmdyb3VwID0gZ3JvdXA7XHJcbiAgICAgICAgdGhpcy5vcmlnaW5hbERpc3BsYXkgPSB0aGlzLmdyb3VwLnN0eWxlLmRpc3BsYXk7XHJcblxyXG4gICAgICAgIGlmIChleHBsaWNpdFZhbGlkYXRpb25zLnJlcXVpcmVkIHx8IHJlcXVpcmVkIHx8IGNvbnRyb2wucmVxdWlyZWQgfHwgY29udHJvbC5nZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiKSkge1xyXG4gICAgICAgICAgICB2YWxpZGF0aW9ucy5wdXNoKG5ldyBSZXF1aXJlZCh0aGlzKSk7XHJcbiAgICAgICAgICAgIGNvcmUuYWRkQ2xhc3MoZ3JvdXAsIFwicmVxdWlyZWRcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb250cm9sLnNldEF0dHJpYnV0ZShsb3dlckNhc2VJZCwgXCJcIik7XHJcbiAgICB9XHJcblxyXG4gICAgdmFsKCkge1xyXG4gICAgICAgIGxldCBjb250cm9sVHlwZSA9IHRoaXMuY29udHJvbC50eXBlID8gdGhpcy5jb250cm9sLnR5cGUgOiB0aGlzLmNvbnRyb2wuZ2V0QXR0cmlidXRlKFwidHlwZVwiKTtcclxuXHJcbiAgICAgICAgc3dpdGNoIChjb250cm9sVHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiY2hlY2tib3hcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb3JlLm1hdGNoZXModGhpcy5jb250cm9sLCBcIjpjaGVja2VkXCIpID8gdGhpcy5jb250cm9sLnZhbHVlIDogdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICBjYXNlIFwicmFkaW9cIjpcclxuICAgICAgICAgICAgICAgIGxldCBzZWxlY3RlZCA9IGNvcmUuZmluZChgW25hbWU9XCIke3RoaXMuY29udHJvbC5uYW1lfVwiXTpjaGVja2VkYCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZWN0ZWQubGVuZ3RoID09IDEgPyBzZWxlY3RlZFswXS52YWx1ZSA6IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbnRyb2wudmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhpZGUoKSB7XHJcbiAgICAgICAgdGhpcy5ncm91cC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvdygpIHtcclxuICAgICAgICB0aGlzLmdyb3VwLnN0eWxlLmRpc3BsYXkgPSB0aGlzLm9yaWdpbmFsRGlzcGxheTtcclxuICAgIH1cclxufVxyXG5cclxubGV0IGZhY3RvcnkgPSBmdW5jdGlvbiAoY29udHJvbCwgZm9ybSwgZXhwbGljaXRWYWxpZGF0aW9ucykge1xyXG4gICAgZXhwbGljaXRWYWxpZGF0aW9ucyA9IGV4cGxpY2l0VmFsaWRhdGlvbnMgPyBleHBsaWNpdFZhbGlkYXRpb25zIDoge307XHJcbiAgICBsZXQgdmFsaWRhdGlvbnMgPSBbXTtcclxuICAgIGxldCBmb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbChjb250cm9sLCBmb3JtLCB2YWxpZGF0aW9ucywgZXhwbGljaXRWYWxpZGF0aW9ucyk7XHJcblxyXG4gICAgZm9ybUNvbnRyb2wudmFsaWRhdGUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IGVycm9ycyA9IFtdO1xyXG4gICAgICAgIGxldCBoYXNFcnJvcnMgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKHZhbGlkYXRpb25zKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHZhbGlkYXRpb24gb2YgdmFsaWRhdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIGlmICghdmFsaWRhdGlvbi5pc1ZhbGlkKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBoYXNFcnJvcnMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0aW9uLm1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzLnB1c2godmFsaWRhdGlvbi5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChlcnJvcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBmb3JtQ29udHJvbC5tZXNzYWdlLnNob3coe1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JzLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZVR5cGU6IG1lc3NhZ2VGYWN0b3J5Lm1lc3NhZ2VUeXBlLkVycm9yXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICFoYXNFcnJvcnM7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBmb3JtQ29udHJvbDtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZhY3Rvcnk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogYzovZ2l0L0VzcGFsaWVySlMvc3JjL2pzL2VzcGFsaWVyLmZvcm1zLmNvbnRyb2wuanNcbiAqKi8iLCJpbXBvcnQgY29yZSBmcm9tIFwiLi9lc3BhbGllci5jb3JlXCI7XHJcbmltcG9ydCBmb3JtQ29udHJvbCBmcm9tIFwiLi9lc3BhbGllci5mb3Jtcy5jb250cm9sXCI7XHJcblxyXG5jbGFzcyBWYWxpZGF0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRyb2wpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1ZhbGlkID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk11c3QgaGF2ZSBhbiBpc1ZhbGlkIG1ldGhvZC5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5tZXNzYWdlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk11c3QgYWRkIGEgbWVzc2FnZSBwcmlvciB0byBjYWxsaW5nIHN1cGVyLlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY29udHJvbCA9IGNvbnRyb2w7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIFJlcXVpcmVkIGV4dGVuZHMgVmFsaWRhdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250cm9sKSB7XHJcbiAgICAgICAgc3VwZXIoY29udHJvbCk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNWYWxpZCgpIHtcclxuICAgICAgICByZXR1cm4gIWNvcmUuaXNFbXB0eU9yU3BhY2VzKHRoaXMuY29udHJvbC52YWwoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG1lc3NhZ2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiRmllbGQgaXMgcmVxdWlyZWQuXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIEVtYWlsIGV4dGVuZHMgVmFsaWRhdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250cm9sKSB7XHJcbiAgICAgICAgc3VwZXIoY29udHJvbCk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNWYWxpZCgpIHtcclxuICAgICAgICByZXR1cm4gY29yZS5pc0VtYWlsKHRoaXMuY29udHJvbC52YWwoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG1lc3NhZ2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiSW52YWxpZCBlbWFpbCBhZGRyZXNzLlwiO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBEYXRlIGV4dGVuZHMgVmFsaWRhdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250cm9sKSB7XHJcbiAgICAgICAgc3VwZXIoY29udHJvbCk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNWYWxpZCgpIHtcclxuICAgICAgICByZXR1cm4gY29yZS5pc0RhdGUodGhpcy5jb250cm9sLnZhbCgpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbWVzc2FnZSgpIHtcclxuICAgICAgICByZXR1cm4gXCJJbnZhbGlkIGRhdGUuXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIFJlcXVpcmVkRGVwZW5kZW50IGV4dGVuZHMgVmFsaWRhdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250cm9sLCB3aGVuVmFsLCBkZXBlbmRlbnQpIHtcclxuICAgICAgICBzdXBlcihjb250cm9sKTtcclxuICAgICAgICB0aGlzLndoZW5WYWwgPSB3aGVuVmFsO1xyXG4gICAgICAgIHRoaXMuZGVwZW5kZW50ID0gZGVwZW5kZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGlzVmFsaWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udHJvbC52YWwoKSAhPT0gdGhpcy53aGVuVmFsIHx8IHRoaXMuY29udHJvbC52YWwoKSA9PT0gdGhpcy53aGVuVmFsICYmIHRoaXMuZGVwZW5kZW50LnZhbGlkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG1lc3NhZ2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBSZXF1aXJlZCwgRW1haWwsIERhdGUsIFJlcXVpcmVkRGVwZW5kZW50IH07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogYzovZ2l0L0VzcGFsaWVySlMvc3JjL2pzL2VzcGFsaWVyLnZhbGlkYXRpb24uanNcbiAqKi8iLCJpbXBvcnQgY29yZSBmcm9tIFwiLi9lc3BhbGllci5jb3JlXCI7XHJcbmltcG9ydCBjb21tb24gZnJvbSBcIi4vZXNwYWxpZXIuY29tbW9uXCI7XHJcblxyXG5jbGFzcyBEaWFsb2cge1xyXG4gICAgY29uc3RydWN0b3IoYXJncykge1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQ6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgYnV0dG9uczogW11cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAkLmV4dGVuZCh0aGlzLnNldHRpbmdzLCBhcmdzKTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnNldHRpbmdzLmVsZW1lbnQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IG11c3QgcGFzcyBhbiBlbGVtZW50LlwiKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2V0dGluZ3MuZWxlbWVudC5sZW5ndGggIT09IDEpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZWxlbWVudCBtdXN0IGhhdmUgZXhhY3RseSBvbmUgcm9vdCBlbGVtZW50LlwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2hvdygpIHtcclxuICAgICAgICBjb3JlLmhpZGVNYWluTWVzc2FnZSgpO1xyXG4gICAgICAgIGNvbW1vbi5zaG93VmVsbHVtKCk7XHJcbiAgICAgICAgbGV0IGRpYWxvZyA9IHRoaXMuc2V0dGluZ3MuZWxlbWVudDtcclxuICAgICAgICBkaWFsb2cuY3NzKFwicG9zaXRpb25cIiwgXCJhYnNvbHV0ZVwiKTtcclxuICAgICAgICBjb21tb24uYm9keS5hcHBlbmQoZGlhbG9nKTtcclxuICAgICAgICB0aGlzLmNlbnRlcigpO1xyXG4gICAgICAgIGRpYWxvZy5jc3MoXCJkaXNwbGF5XCIsIFwibm9uZVwiKTtcclxuXHJcbiAgICAgICAgZGlhbG9nLnZlbG9jaXR5KFwidHJhbnNpdGlvbi53aGlybEluXCIsIHtcclxuICAgICAgICAgICAgZHVyYXRpb246IDQ1MFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBjb3JlLmFkZEV2ZW50TGlzdGVuZXIoZGlhbG9nWzBdLCBcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBidXR0b24gb2YgdGhpcy5zZXR0aW5ncy5idXR0b25zKSB7XHJcbiAgICAgICAgICAgICAgICAvL1RPRE86IE1heWJlIGlzIGEgc2VsZWN0b3IgaW5zdGVhZD9cclxuICAgICAgICAgICAgICAgIGlmIChidXR0b24uaWQgPT09IGV2ZW50LnRhcmdldC5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5oYW5kbGVyKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGUoKSB7XHJcbiAgICAgICAgdmFyIGRpYWxvZyA9ICQodGhpcy5zZXR0aW5ncy5lbGVtZW50KTtcclxuICAgICAgICBkaWFsb2cudmVsb2NpdHkoXCJ0cmFuc2l0aW9uLndoaXJsT3V0XCIsIHtcclxuICAgICAgICAgICAgZHVyYXRpb246IDE1MCxcclxuICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGRpYWxvZy5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICQoXCIjbm90aWZpY2F0aW9uTWVzc2FnZVwiKS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJChcIi5kaWFsb2dcIikubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb21tb24uaGlkZVZlbGx1bSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgY2VudGVyKCkge1xyXG4gICAgICAgIGxldCB3aW5kb3dIZWlnaHQgPSBjb21tb24ud2luZG93LmhlaWdodCgpO1xyXG4gICAgICAgIGxldCBkaWFsb2cgPSB0aGlzLnNldHRpbmdzLmVsZW1lbnQ7XHJcbiAgICAgICAgbGV0IHNjcm9sbFRvcCA9IGNvbW1vbi53aW5kb3cuc2Nyb2xsVG9wKCk7XHJcbiAgICAgICAgbGV0IGhlaWdodCA9IGRpYWxvZy5oZWlnaHQoKTtcclxuICAgICAgICBsZXQgdG9wID0gKHdpbmRvd0hlaWdodCAvIDIpIC0gKGhlaWdodCAvIDIpICsgc2Nyb2xsVG9wO1xyXG4gICAgICAgIHRvcCA9IHRvcCA+IDAgPyB0b3AgOiAwO1xyXG4gICAgICAgIGRpYWxvZy5jc3MoXCJ0b3BcIiwgdG9wKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGFyZ3MpIHtcclxuICAgIHJldHVybiBuZXcgRGlhbG9nKGFyZ3MpO1xyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogYzovZ2l0L0VzcGFsaWVySlMvc3JjL2pzL2VzcGFsaWVyLmRpYWxvZy5qc1xuICoqLyIsImltcG9ydCBjb3JlIGZyb20gXCIuL2VzcGFsaWVyLmNvcmVcIjtcclxuXHJcbmxldCBrZXlzID0ge1xyXG4gICAgY29udGFpbmVyOiBuZXcgT2JqZWN0KCksXHJcbiAgICByZXN1bHQ6IG5ldyBPYmplY3QoKSxcclxuICAgIGN1cnJlbnRTdGVwOiBuZXcgT2JqZWN0KCksXHJcbiAgICBzdGVwczogbmV3IE9iamVjdCgpLFxyXG4gICAgdHJhbnN2ZXJzZWQ6IG5ldyBPYmplY3QoKSxcclxuICAgIGluZGV4SGVhZE5vZGVzOiBuZXcgT2JqZWN0KCksXHJcbiAgICB2YWx1ZUNoYW5nZWQ6IG5ldyBPYmplY3QoKVxyXG59XHJcblxyXG5sZXQgc2V0U3RlcFN0YXRlcyA9IChncmFwaCkgPT4ge1xyXG4gICAgbGV0IGhlYWROb2RlcyA9IGdyYXBoLl9pbnRlcm5hbHMuZ2V0KGtleXMuaW5kZXhIZWFkTm9kZXMpO1xyXG4gICAgbGV0IG5vZGUgPSBncmFwaC5faW50ZXJuYWxzLmdldChrZXlzLmN1cnJlbnRTdGVwKTtcclxuICAgIGxldCBjdXJyZW50SW5kZXggPSBub2RlLnN0ZXBJbmRleDtcclxuICAgIGxldCBzdGVwcyA9IGdyYXBoLl9pbnRlcm5hbHMuZ2V0KGtleXMuc3RlcHMpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RlcHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoaSA8IGN1cnJlbnRJbmRleCkge1xyXG4gICAgICAgICAgICBzdGVwc1tpXS5jc3NDbGFzcyA9IFwiZ3JhcGgtc3RlcC1jb21wbGV0ZWRcIjtcclxuICAgICAgICAgICAgc3RlcHNbaV0uc3RhdHVzID0gXCJDb21wbGV0ZWRcIjtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaSA9PT0gY3VycmVudEluZGV4KSB7XHJcbiAgICAgICAgICAgIHN0ZXBzW2ldLmNzc0NsYXNzID0gXCJncmFwaC1zdGVwLWluLXByb2dyZXNzXCI7XHJcbiAgICAgICAgICAgIHN0ZXBzW2ldLnN0YXR1cyA9IFwiSW4gcHJvZ3Jlc3NcIjtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaSA+IGN1cnJlbnRJbmRleCkge1xyXG4gICAgICAgICAgICBzdGVwc1tpXS5jc3NDbGFzcyA9IFwiZ3JhcGgtc3RlcC1ub3Qtc3RhcnRlZFwiO1xyXG4gICAgICAgICAgICBzdGVwc1tpXS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHN0ZXBzW2ldLnN0YXR1cyA9IFwiTm90IHN0YXJ0ZWRcIjtcclxuICAgICAgICAgICAgaGVhZE5vZGVzLnNldChpLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICghaGVhZE5vZGVzLmdldChjdXJyZW50SW5kZXgpKSB7XHJcbiAgICAgICAgaGVhZE5vZGVzLnNldChjdXJyZW50SW5kZXgsIG5vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIG5vZGUucmVuZGVySW4oZ3JhcGguX2ludGVybmFscy5nZXQoa2V5cy5jb250YWluZXIpLCBncmFwaC5faW50ZXJuYWxzLmdldChrZXlzLnJlc3VsdCksIHN0ZXBzKTtcclxuXHJcbiAgICBsZXQgdmFsdWVDaGFuZ2VkID0gZ3JhcGguX2ludGVybmFscy5nZXQoa2V5cy52YWx1ZUNoYW5nZWQpO1xyXG5cclxuICAgIGlmICh2YWx1ZUNoYW5nZWQpIHtcclxuICAgICAgICB2YWx1ZUNoYW5nZWQoZ3JhcGguX2ludGVybmFscy5nZXQoa2V5cy5yZXN1bHQpKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JhcGgge1xyXG4gICAgY29uc3RydWN0b3IoYXJncykge1xyXG4gICAgICAgIHRoaXMuX2ludGVybmFscyA9IG5ldyBXZWFrTWFwKCk7XHJcblxyXG4gICAgICAgIGlmICghYXJncy5jb250YWluZXIubm9kZU5hbWUpIHtcclxuICAgICAgICAgICAgLy9OT1RFOiBUaGlzIGlzIHByb2JhYmx5IGEgalF1ZXJ5IHNlbGVjdGlvbiBhcnJheS5cclxuICAgICAgICAgICAgYXJncy5jb250YWluZXIgPSBhcmdzLmNvbnRhaW5lclswXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBoZWFkTm9kZXMgPSBuZXcgTWFwKCk7XHJcblxyXG4gICAgICAgIHRoaXMuX2ludGVybmFscy5zZXQoa2V5cy5jb250YWluZXIsIGFyZ3MuY29udGFpbmVyKTtcclxuICAgICAgICB0aGlzLl9pbnRlcm5hbHMuc2V0KGtleXMucmVzdWx0LCBjb3JlLmV4dGVuZChhcmdzLmRlZmF1bHQsIHt9KSk7XHJcbiAgICAgICAgdGhpcy5faW50ZXJuYWxzLnNldChrZXlzLmN1cnJlbnRTdGVwLCBhcmdzLmhlYWQpO1xyXG4gICAgICAgIHRoaXMuX2ludGVybmFscy5zZXQoa2V5cy5zdGVwcywgYXJncy5zdGVwcyk7XHJcbiAgICAgICAgdGhpcy5faW50ZXJuYWxzLnNldChrZXlzLnZhbHVlQ2hhbmdlZCwgYXJncy52YWx1ZUNoYW5nZWQpO1xyXG4gICAgICAgIHRoaXMuX2ludGVybmFscy5zZXQoa2V5cy50cmFuc3ZlcnNlZCwgW10pO1xyXG4gICAgICAgIHRoaXMuX2ludGVybmFscy5zZXQoa2V5cy5pbmRleEhlYWROb2RlcywgaGVhZE5vZGVzKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcmdzLnN0ZXBzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGFyZ3Muc3RlcHNbaV0uaW5kZXggPSBpO1xyXG4gICAgICAgICAgICBoZWFkTm9kZXMuc2V0KGksIGZhbHNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGhlYWROb2Rlcy5zZXQoMCwgYXJncy5oZWFkKTtcclxuICAgICAgICB0aGlzLmdvdG8oMCk7XHJcblxyXG4gICAgICAgIGNvcmUuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLl9pbnRlcm5hbHMuZ2V0KGtleXMuY29udGFpbmVyKSwgXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZXZlbnQgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWdyYXBoLWV2ZW50XCIpO1xyXG5cclxuICAgICAgICAgICAgc3dpdGNoIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIm5leHRcIjpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiYmFja1wiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJldmlvdXMoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiZ290b1wiOlxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtZ3JhcGgtaW5kZXhcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nb3RvKE51bWJlcihpbmRleCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZ290byhpbmRleCkge1xyXG4gICAgICAgIGxldCBoZWFkTm9kZXMgPSB0aGlzLl9pbnRlcm5hbHMuZ2V0KGtleXMuaW5kZXhIZWFkTm9kZXMpO1xyXG4gICAgICAgIGxldCBub2RlVG9Hb1RvID0gaGVhZE5vZGVzLmdldChpbmRleCk7XHJcbiAgICAgICAgbGV0IHRyYW5zdmVyc2VkID0gdGhpcy5faW50ZXJuYWxzLmdldChrZXlzLnRyYW5zdmVyc2VkKTtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5faW50ZXJuYWxzLmdldChrZXlzLnJlc3VsdCk7XHJcblxyXG4gICAgICAgIGlmICh0cmFuc3ZlcnNlZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGxldCBwb3BwZWROb2RlO1xyXG5cclxuICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgICAgcG9wcGVkTm9kZSA9IHRyYW5zdmVyc2VkLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHJlc3VsdFtwb3BwZWROb2RlLnByb3BlcnR5TmFtZV07XHJcbiAgICAgICAgICAgIH0gd2hpbGUgKHBvcHBlZE5vZGUgIT09IG5vZGVUb0dvVG8pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5faW50ZXJuYWxzLnNldChrZXlzLmN1cnJlbnRTdGVwLCBub2RlVG9Hb1RvKTtcclxuICAgICAgICBzZXRTdGVwU3RhdGVzKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG5leHQoKSB7XHJcbiAgICAgICAgbGV0IHN0ZXAgPSB0aGlzLl9pbnRlcm5hbHMuZ2V0KGtleXMuY3VycmVudFN0ZXApO1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IHN0ZXAuZ2V0VmFsdWUoKTtcclxuXHJcbiAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IG5leHRTdGVwID0gc3RlcC5uZXh0KCk7XHJcblxyXG4gICAgICAgIGlmIChzdGVwLnN0ZXBJbmRleCA+IG5leHRTdGVwLnN0ZXBJbmRleCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHN0ZXAgaW5kZXguIEl0IG11c3QgYmUgZXF1YWwgdG8gb3IgZ3JlYXRlciB0aGFuIHRoZSBsYXN0IHN0ZXAncyBpbmRleC5cIilcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB0cmFuc3ZlcnNlZCA9IHRoaXMuX2ludGVybmFscy5nZXQoa2V5cy50cmFuc3ZlcnNlZCk7XHJcbiAgICAgICAgdHJhbnN2ZXJzZWQucHVzaChzdGVwKTtcclxuICAgICAgICBjb3JlLnNldFByb3BlcnR5KHRoaXMuX2ludGVybmFscy5nZXQoa2V5cy5yZXN1bHQpLCBzdGVwLnByb3BlcnR5TmFtZSwgdmFsdWUpO1xyXG4gICAgICAgIHRoaXMuX2ludGVybmFscy5zZXQoa2V5cy5jdXJyZW50U3RlcCwgbmV4dFN0ZXApO1xyXG4gICAgICAgIHNldFN0ZXBTdGF0ZXModGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJldmlvdXMoKSB7XHJcbiAgICAgICAgbGV0IHRyYW5zdmVyc2VkID0gdGhpcy5faW50ZXJuYWxzLmdldChrZXlzLnRyYW5zdmVyc2VkKTtcclxuICAgICAgICBsZXQgbGFzdE5vZGUgPSB0cmFuc3ZlcnNlZC5wb3AoKTtcclxuICAgICAgICBkZWxldGUgdGhpcy5faW50ZXJuYWxzLmdldChrZXlzLnJlc3VsdClbbGFzdE5vZGUucHJvcGVydHlOYW1lXTtcclxuICAgICAgICB0aGlzLl9pbnRlcm5hbHMuc2V0KGtleXMuY3VycmVudFN0ZXAsIGxhc3ROb2RlKTtcclxuICAgICAgICBzZXRTdGVwU3RhdGVzKHRoaXMpO1xyXG4gICAgfVxyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogYzovZ2l0L0VzcGFsaWVySlMvc3JjL2pzL2VzcGFsaWVyLmdyYXBoLmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JhcGhOb2RlIHtcclxuICAgIGNvbnN0cnVjdG9yKGFyZ3MpIHtcclxuICAgICAgICBpZiAodGhpcy5jb25zdHJ1Y3RvciA9PT0gR3JhcGhOb2RlKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJBYnN0cmFjdCBjbGFzcyBHcmFwaE5vZGUgY2Fubm90IGJlIGluc3RhbnRpYXRlZC5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5nZXRWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHcmFwaE5vZGUgZGVyaXZhdGlvbnMgbXVzdCBpbXBsbWVudCBnZXRWYWx1ZSgpXCIpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5yZW5kZXJJbiA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdyYXBoTm9kZSBkZXJpdmF0aW9ucyBtdXN0IGltcGxlbWVudCByZW5kZXJJbihjb250YWluZXIsIHJlc3VsdCwgc3RlcHMpXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcGVydHlOYW1lID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR3JhcGhOb2RlIGRlcml2YXRpb25zIG11c3QgZGVmaW5lIGEgcHJvcGVydHlOYW1lIHRoYXQgd2lsbCBiZSBzZXQgd2l0aCBpdCdzIHZhbHVlLlwiKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubmV4dCA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdyYXBoTm9kZSBkZXJpdmF0aW9ucyBtdXN0IGltcGxlbWVudCBhIG1ldGhvZCBuZXh0KCkgdGhhdCByZXR1cm5zIHRoZSBuZXh0IG5vZGUgaW4gdGhlIGdyYXBoLlwiKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGM6L2dpdC9Fc3BhbGllckpTL3NyYy9qcy9lc3BhbGllci5ncmFwaC5ub2RlLmpzXG4gKiovIiwiaW1wb3J0IGVzcGFsaWVyIGZyb20gXCIuLi8uLi9lc3BhbGllclwiO1xyXG5pbXBvcnQgU3RlcDEgZnJvbSBcIi4vZ3JhcGhOb2Rlc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVtb0dyYXBoIGV4dGVuZHMgZXNwYWxpZXIuR3JhcGgge1xyXG4gICAgY29uc3RydWN0b3IoY29udGFpbmVyLCB2YWx1ZUNoYW5nZWQpIHtcclxuICAgICAgICBzdXBlcih7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lcixcclxuICAgICAgICAgICAgZGVmYXVsdDoge30sXHJcbiAgICAgICAgICAgIGhlYWQ6IG5ldyBTdGVwMSgpLFxyXG4gICAgICAgICAgICBzdGVwczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlN0ZXAgMVwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlN0ZXAgMlwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlN0ZXAgM1wiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIHZhbHVlQ2hhbmdlZFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogYzovZ2l0L0VzcGFsaWVySlMvc3JjL2pzL2RlbW8vZ3JhcGgvZGVtb0dyYXBoLmpzXG4gKiovIiwiaW1wb3J0IGVzcGFsaWVyIGZyb20gXCIuLi8uLi9lc3BhbGllclwiO1xyXG5pbXBvcnQgZ3JhcGhQcm9ncmVzcyBmcm9tIFwiLi90ZW1wbGF0ZXMvZ3JhcGhQcm9ncmVzc1wiO1xyXG5cclxubGV0IG5leHRLZXkgPSBuZXcgT2JqZWN0KCk7XHJcblxyXG5sZXQgZ2V0U3RlcENvbnRlbnQgPSAoc3RlcElkLCBzdGVwVGV4dCwgaGFzTmV4dCwgaGFzQmFjaykgPT4ge1xyXG4gICAgbGV0IHN0ZXBDb250ZW50ID0gYDxoMyBpZD1cIiR7c3RlcElkfVwiPiR7c3RlcFRleHR9PC9oMz5gO1xyXG4gICAgXHJcbiAgICBpZihoYXNCYWNrKSB7XHJcbiAgICAgICAgc3RlcENvbnRlbnQgKz0gYDxhIGRhdGEtZ3JhcGgtZXZlbnQ9J2JhY2snIGhyZWY9J2phdmFzY3JpcHQ6IHZvaWQoMCk7JyBjbGFzcz0nYnRuIGJ0bi1wcmltYXJ5Jz5CYWNrPC9hPiBgXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmKGhhc05leHQpIHtcclxuICAgICAgICBzdGVwQ29udGVudCArPSBgPGEgZGF0YS1ncmFwaC1ldmVudD1cIm5leHRcIiBocmVmPVwiamF2YXNjcmlwdDogdm9pZCgwKTtcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPk5leHQ8L2E+YDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIHN0ZXBDb250ZW50O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RlcDEgZXh0ZW5kcyBlc3BhbGllci5HcmFwaE5vZGUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLl9pbnRlcm5hbHMgPSBuZXcgV2Vha01hcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFZhbHVlKCkge1xyXG4gICAgICAgIHJldHVybiBcIlRoaXMgaXMgc3RlcCAxXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVySW4oY29udGFpbmVyLCByZXN1bHQsIHN0ZXBzKSB7XHJcbiAgICAgICAgbGV0IHByb2dyZXNzID0gZ3JhcGhQcm9ncmVzcyhzdGVwcyk7XHJcbiAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IHByb2dyZXNzICsgZ2V0U3RlcENvbnRlbnQoXCJzdGVwLTFcIiwgdGhpcy5nZXRWYWx1ZSgpLCB0cnVlLCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmV4dCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2ludGVybmFscy5oYXMobmV4dEtleSkpIHtcclxuICAgICAgICAgICAgdGhpcy5faW50ZXJuYWxzLnNldChuZXh0S2V5LCBuZXcgU3RlcDJkb3QxKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludGVybmFscy5nZXQobmV4dEtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHByb3BlcnR5TmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gXCJTdGVwT25lXCI7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHN0ZXBJbmRleCgpIHtcclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgU3RlcDJkb3QxIGV4dGVuZHMgZXNwYWxpZXIuR3JhcGhOb2RlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5faW50ZXJuYWxzID0gbmV3IFdlYWtNYXAoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRWYWx1ZSgpIHtcclxuICAgICAgICByZXR1cm4gXCJUaGlzIGlzIHN0ZXAgMi4xXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVySW4oY29udGFpbmVyLCByZXN1bHQsIHN0ZXBzKSB7XHJcbiAgICAgICAgbGV0IHByb2dyZXNzID0gZ3JhcGhQcm9ncmVzcyhzdGVwcyk7XHJcbiAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IHByb2dyZXNzICsgZ2V0U3RlcENvbnRlbnQoXCJzdGVwLTJkb3QxXCIsIHRoaXMuZ2V0VmFsdWUoKSwgdHJ1ZSwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmV4dCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2ludGVybmFscy5oYXMobmV4dEtleSkpIHtcclxuICAgICAgICAgICAgdGhpcy5faW50ZXJuYWxzLnNldChuZXh0S2V5LCBuZXcgU3RlcDJkb3QyKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludGVybmFscy5nZXQobmV4dEtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHByb3BlcnR5TmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gXCJTdGVwVHdvRG90T25lXCI7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHN0ZXBJbmRleCgpIHtcclxuICAgICAgICByZXR1cm4gMTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgU3RlcDJkb3QyIGV4dGVuZHMgZXNwYWxpZXIuR3JhcGhOb2RlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5faW50ZXJuYWxzID0gbmV3IFdlYWtNYXAoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRWYWx1ZSgpIHtcclxuICAgICAgICByZXR1cm4gXCJUaGlzIGlzIHN0ZXAgMi4yXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVySW4oY29udGFpbmVyLCByZXN1bHQsIHN0ZXBzKSB7XHJcbiAgICAgICAgbGV0IHByb2dyZXNzID0gZ3JhcGhQcm9ncmVzcyhzdGVwcyk7XHJcbiAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IHByb2dyZXNzICsgZ2V0U3RlcENvbnRlbnQoXCJzdGVwLTJkb3QyXCIsIHRoaXMuZ2V0VmFsdWUoKSwgdHJ1ZSwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmV4dCgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2ludGVybmFscy5oYXMobmV4dEtleSkpIHtcclxuICAgICAgICAgICAgdGhpcy5faW50ZXJuYWxzLnNldChuZXh0S2V5LCBuZXcgU3RlcDMoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5faW50ZXJuYWxzLmdldChuZXh0S2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcHJvcGVydHlOYW1lKCkge1xyXG4gICAgICAgIHJldHVybiBcIlN0ZXBUd29Eb3RUd29cIjtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc3RlcEluZGV4KCkge1xyXG4gICAgICAgIHJldHVybiAxO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBTdGVwMyBleHRlbmRzIGVzcGFsaWVyLkdyYXBoTm9kZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuX2ludGVybmFscyA9IG5ldyBXZWFrTWFwKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VmFsdWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiVGhpcyBpcyBzdGVwIDNcIjtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJJbihjb250YWluZXIsIHJlc3VsdCwgc3RlcHMpIHtcclxuICAgICAgICBsZXQgcHJvZ3Jlc3MgPSBncmFwaFByb2dyZXNzKHN0ZXBzKTtcclxuICAgICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gcHJvZ3Jlc3MgKyBnZXRTdGVwQ29udGVudChcInN0ZXAtM1wiLCB0aGlzLmdldFZhbHVlKCksIHRydWUsIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIG5leHQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pbnRlcm5hbHMuaGFzKG5leHRLZXkpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2ludGVybmFscy5zZXQobmV4dEtleSwgbmV3IFN0ZXA0KCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludGVybmFscy5nZXQobmV4dEtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHByb3BlcnR5TmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gXCJTdGVwVGhyZWVcIjtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc3RlcEluZGV4KCkge1xyXG4gICAgICAgIHJldHVybiAyO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBTdGVwNCBleHRlbmRzIGVzcGFsaWVyLkdyYXBoTm9kZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFZhbHVlKCkge1xyXG4gICAgICAgIHJldHVybiBcIlRoaXMgaXMgc3RlcCA0XCI7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVySW4oY29udGFpbmVyLCByZXN1bHQsIHN0ZXBzKSB7XHJcbiAgICAgICAgbGV0IHByb2dyZXNzID0gZ3JhcGhQcm9ncmVzcyhzdGVwcyk7XHJcbiAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IHByb2dyZXNzICsgZ2V0U3RlcENvbnRlbnQoXCJzdGVwLTRcIiwgdGhpcy5nZXRWYWx1ZSgpLCBmYWxzZSwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmV4dCgpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHByb3BlcnR5TmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gXCJTdGVwVGhyZWVcIjtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc3RlcEluZGV4KCkge1xyXG4gICAgICAgIHJldHVybiAzO1xyXG4gICAgfVxyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogYzovZ2l0L0VzcGFsaWVySlMvc3JjL2pzL2RlbW8vZ3JhcGgvZ3JhcGhOb2Rlcy5qc1xuICoqLyIsInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcImM6XFxcXGdpdFxcXFxFc3BhbGllckpTXFxcXG5vZGVfbW9kdWxlc1xcXFxoYW5kbGViYXJzXFxcXHJ1bnRpbWUuanNcIik7XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCIxXCI6ZnVuY3Rpb24oZGVwdGgwLGhlbHBlcnMscGFydGlhbHMsZGF0YSkge1xuICAgIHZhciBoZWxwZXIsIGFsaWFzMT1oZWxwZXJzLmhlbHBlck1pc3NpbmcsIGFsaWFzMj1cImZ1bmN0aW9uXCIsIGFsaWFzMz10aGlzLmVzY2FwZUV4cHJlc3Npb247XG5cbiAgcmV0dXJuIFwiICAgIDxhIGRhdGEtZ3JhcGgtZXZlbnQ9XFxcImdvdG9cXFwiIGRhdGEtZ3JhcGgtaW5kZXg9XFxcIlwiXG4gICAgKyBhbGlhczMoKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy5pbmRleCB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuaW5kZXggOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMxKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMyID8gaGVscGVyLmNhbGwoZGVwdGgwLHtcIm5hbWVcIjpcImluZGV4XCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIlxcXCIgY2xhc3M9XFxcImJ0biBcIlxuICAgICsgYWxpYXMzKCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMuY3NzQ2xhc3MgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmNzc0NsYXNzIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMSksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMiA/IGhlbHBlci5jYWxsKGRlcHRoMCx7XCJuYW1lXCI6XCJjc3NDbGFzc1wiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCJcXFwiPlwiXG4gICAgKyBhbGlhczMoKChoZWxwZXIgPSAoaGVscGVyID0gaGVscGVycy50aXRsZSB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAudGl0bGUgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMxKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMyID8gaGVscGVyLmNhbGwoZGVwdGgwLHtcIm5hbWVcIjpcInRpdGxlXCIsXCJoYXNoXCI6e30sXCJkYXRhXCI6ZGF0YX0pIDogaGVscGVyKSkpXG4gICAgKyBcIiAoXCJcbiAgICArIGFsaWFzMygoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLnN0YXR1cyB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuc3RhdHVzIDogZGVwdGgwKSkgIT0gbnVsbCA/IGhlbHBlciA6IGFsaWFzMSksKHR5cGVvZiBoZWxwZXIgPT09IGFsaWFzMiA/IGhlbHBlci5jYWxsKGRlcHRoMCx7XCJuYW1lXCI6XCJzdGF0dXNcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSlcbiAgICArIFwiKTwvYT5cXHJcXG5cIjtcbn0sXCJjb21waWxlclwiOls2LFwiPj0gMi4wLjAtYmV0YS4xXCJdLFwibWFpblwiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICB2YXIgc3RhY2sxO1xuXG4gIHJldHVybiBcIjxzZWN0aW9uIGlkPVxcXCJncmFwaC1wcm9ncmVzc1xcXCI+XFxyXFxuXCJcbiAgICArICgoc3RhY2sxID0gaGVscGVycy5lYWNoLmNhbGwoZGVwdGgwLGRlcHRoMCx7XCJuYW1lXCI6XCJlYWNoXCIsXCJoYXNoXCI6e30sXCJmblwiOnRoaXMucHJvZ3JhbSgxLCBkYXRhLCAwKSxcImludmVyc2VcIjp0aGlzLm5vb3AsXCJkYXRhXCI6ZGF0YX0pKSAhPSBudWxsID8gc3RhY2sxIDogXCJcIilcbiAgICArIFwiPC9zZWN0aW9uPlwiO1xufSxcInVzZURhdGFcIjp0cnVlfSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2dyYXBoL3RlbXBsYXRlcy9ncmFwaFByb2dyZXNzLmhic1xuICoqIG1vZHVsZSBpZCA9IDE4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBDcmVhdGUgYSBzaW1wbGUgcGF0aCBhbGlhcyB0byBhbGxvdyBicm93c2VyaWZ5IHRvIHJlc29sdmVcbi8vIHRoZSBydW50aW1lIG9uIGEgc3VwcG9ydGVkIHBhdGguXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9janMvaGFuZGxlYmFycy5ydW50aW1lJylbJ2RlZmF1bHQnXTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGM6L2dpdC9Fc3BhbGllckpTL34vaGFuZGxlYmFycy9ydW50aW1lLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfaW1wb3J0ID0gcmVxdWlyZSgnLi9oYW5kbGViYXJzL2Jhc2UnKTtcblxudmFyIGJhc2UgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfaW1wb3J0KTtcblxuLy8gRWFjaCBvZiB0aGVzZSBhdWdtZW50IHRoZSBIYW5kbGViYXJzIG9iamVjdC4gTm8gbmVlZCB0byBzZXR1cCBoZXJlLlxuLy8gKFRoaXMgaXMgZG9uZSB0byBlYXNpbHkgc2hhcmUgY29kZSBiZXR3ZWVuIGNvbW1vbmpzIGFuZCBicm93c2UgZW52cylcblxudmFyIF9TYWZlU3RyaW5nID0gcmVxdWlyZSgnLi9oYW5kbGViYXJzL3NhZmUtc3RyaW5nJyk7XG5cbnZhciBfU2FmZVN0cmluZzIgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfU2FmZVN0cmluZyk7XG5cbnZhciBfRXhjZXB0aW9uID0gcmVxdWlyZSgnLi9oYW5kbGViYXJzL2V4Y2VwdGlvbicpO1xuXG52YXIgX0V4Y2VwdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfRXhjZXB0aW9uKTtcblxudmFyIF9pbXBvcnQyID0gcmVxdWlyZSgnLi9oYW5kbGViYXJzL3V0aWxzJyk7XG5cbnZhciBVdGlscyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9pbXBvcnQyKTtcblxudmFyIF9pbXBvcnQzID0gcmVxdWlyZSgnLi9oYW5kbGViYXJzL3J1bnRpbWUnKTtcblxudmFyIHJ1bnRpbWUgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfaW1wb3J0Myk7XG5cbnZhciBfbm9Db25mbGljdCA9IHJlcXVpcmUoJy4vaGFuZGxlYmFycy9uby1jb25mbGljdCcpO1xuXG52YXIgX25vQ29uZmxpY3QyID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQoX25vQ29uZmxpY3QpO1xuXG4vLyBGb3IgY29tcGF0aWJpbGl0eSBhbmQgdXNhZ2Ugb3V0c2lkZSBvZiBtb2R1bGUgc3lzdGVtcywgbWFrZSB0aGUgSGFuZGxlYmFycyBvYmplY3QgYSBuYW1lc3BhY2VcbmZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgdmFyIGhiID0gbmV3IGJhc2UuSGFuZGxlYmFyc0Vudmlyb25tZW50KCk7XG5cbiAgVXRpbHMuZXh0ZW5kKGhiLCBiYXNlKTtcbiAgaGIuU2FmZVN0cmluZyA9IF9TYWZlU3RyaW5nMlsnZGVmYXVsdCddO1xuICBoYi5FeGNlcHRpb24gPSBfRXhjZXB0aW9uMlsnZGVmYXVsdCddO1xuICBoYi5VdGlscyA9IFV0aWxzO1xuICBoYi5lc2NhcGVFeHByZXNzaW9uID0gVXRpbHMuZXNjYXBlRXhwcmVzc2lvbjtcblxuICBoYi5WTSA9IHJ1bnRpbWU7XG4gIGhiLnRlbXBsYXRlID0gZnVuY3Rpb24gKHNwZWMpIHtcbiAgICByZXR1cm4gcnVudGltZS50ZW1wbGF0ZShzcGVjLCBoYik7XG4gIH07XG5cbiAgcmV0dXJuIGhiO1xufVxuXG52YXIgaW5zdCA9IGNyZWF0ZSgpO1xuaW5zdC5jcmVhdGUgPSBjcmVhdGU7XG5cbl9ub0NvbmZsaWN0MlsnZGVmYXVsdCddKGluc3QpO1xuXG5pbnN0WydkZWZhdWx0J10gPSBpbnN0O1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBpbnN0O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogYzovZ2l0L0VzcGFsaWVySlMvfi9oYW5kbGViYXJzL2Rpc3QvY2pzL2hhbmRsZWJhcnMucnVudGltZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuZXh0ZW5kID0gZXh0ZW5kO1xuXG4vLyBPbGRlciBJRSB2ZXJzaW9ucyBkbyBub3QgZGlyZWN0bHkgc3VwcG9ydCBpbmRleE9mIHNvIHdlIG11c3QgaW1wbGVtZW50IG91ciBvd24sIHNhZGx5LlxuZXhwb3J0cy5pbmRleE9mID0gaW5kZXhPZjtcbmV4cG9ydHMuZXNjYXBlRXhwcmVzc2lvbiA9IGVzY2FwZUV4cHJlc3Npb247XG5leHBvcnRzLmlzRW1wdHkgPSBpc0VtcHR5O1xuZXhwb3J0cy5ibG9ja1BhcmFtcyA9IGJsb2NrUGFyYW1zO1xuZXhwb3J0cy5hcHBlbmRDb250ZXh0UGF0aCA9IGFwcGVuZENvbnRleHRQYXRoO1xudmFyIGVzY2FwZSA9IHtcbiAgJyYnOiAnJmFtcDsnLFxuICAnPCc6ICcmbHQ7JyxcbiAgJz4nOiAnJmd0OycsXG4gICdcIic6ICcmcXVvdDsnLFxuICAnXFwnJzogJyYjeDI3OycsXG4gICdgJzogJyYjeDYwOydcbn07XG5cbnZhciBiYWRDaGFycyA9IC9bJjw+XCInYF0vZyxcbiAgICBwb3NzaWJsZSA9IC9bJjw+XCInYF0vO1xuXG5mdW5jdGlvbiBlc2NhcGVDaGFyKGNocikge1xuICByZXR1cm4gZXNjYXBlW2Nocl07XG59XG5cbmZ1bmN0aW9uIGV4dGVuZChvYmogLyogLCAuLi5zb3VyY2UgKi8pIHtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gYXJndW1lbnRzW2ldKSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGFyZ3VtZW50c1tpXSwga2V5KSkge1xuICAgICAgICBvYmpba2V5XSA9IGFyZ3VtZW50c1tpXVtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbnZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG5cbmV4cG9ydHMudG9TdHJpbmcgPSB0b1N0cmluZztcbi8vIFNvdXJjZWQgZnJvbSBsb2Rhc2hcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9iZXN0aWVqcy9sb2Rhc2gvYmxvYi9tYXN0ZXIvTElDRU5TRS50eHRcbi8qZXNsaW50LWRpc2FibGUgZnVuYy1zdHlsZSwgbm8tdmFyICovXG52YXIgaXNGdW5jdGlvbiA9IGZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcbn07XG4vLyBmYWxsYmFjayBmb3Igb2xkZXIgdmVyc2lvbnMgb2YgQ2hyb21lIGFuZCBTYWZhcmlcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5pZiAoaXNGdW5jdGlvbigveC8pKSB7XG4gIGV4cG9ydHMuaXNGdW5jdGlvbiA9IGlzRnVuY3Rpb24gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nICYmIHRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xuICB9O1xufVxudmFyIGlzRnVuY3Rpb247XG5leHBvcnRzLmlzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uO1xuLyplc2xpbnQtZW5hYmxlIGZ1bmMtc3R5bGUsIG5vLXZhciAqL1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uICh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyA/IHRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBBcnJheV0nIDogZmFsc2U7XG59O2V4cG9ydHMuaXNBcnJheSA9IGlzQXJyYXk7XG5cbmZ1bmN0aW9uIGluZGV4T2YoYXJyYXksIHZhbHVlKSB7XG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBhcnJheS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGlmIChhcnJheVtpXSA9PT0gdmFsdWUpIHtcbiAgICAgIHJldHVybiBpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbmZ1bmN0aW9uIGVzY2FwZUV4cHJlc3Npb24oc3RyaW5nKSB7XG4gIGlmICh0eXBlb2Ygc3RyaW5nICE9PSAnc3RyaW5nJykge1xuICAgIC8vIGRvbid0IGVzY2FwZSBTYWZlU3RyaW5ncywgc2luY2UgdGhleSdyZSBhbHJlYWR5IHNhZmVcbiAgICBpZiAoc3RyaW5nICYmIHN0cmluZy50b0hUTUwpIHtcbiAgICAgIHJldHVybiBzdHJpbmcudG9IVE1MKCk7XG4gICAgfSBlbHNlIGlmIChzdHJpbmcgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH0gZWxzZSBpZiAoIXN0cmluZykge1xuICAgICAgcmV0dXJuIHN0cmluZyArICcnO1xuICAgIH1cblxuICAgIC8vIEZvcmNlIGEgc3RyaW5nIGNvbnZlcnNpb24gYXMgdGhpcyB3aWxsIGJlIGRvbmUgYnkgdGhlIGFwcGVuZCByZWdhcmRsZXNzIGFuZFxuICAgIC8vIHRoZSByZWdleCB0ZXN0IHdpbGwgZG8gdGhpcyB0cmFuc3BhcmVudGx5IGJlaGluZCB0aGUgc2NlbmVzLCBjYXVzaW5nIGlzc3VlcyBpZlxuICAgIC8vIGFuIG9iamVjdCdzIHRvIHN0cmluZyBoYXMgZXNjYXBlZCBjaGFyYWN0ZXJzIGluIGl0LlxuICAgIHN0cmluZyA9ICcnICsgc3RyaW5nO1xuICB9XG5cbiAgaWYgKCFwb3NzaWJsZS50ZXN0KHN0cmluZykpIHtcbiAgICByZXR1cm4gc3RyaW5nO1xuICB9XG4gIHJldHVybiBzdHJpbmcucmVwbGFjZShiYWRDaGFycywgZXNjYXBlQ2hhcik7XG59XG5cbmZ1bmN0aW9uIGlzRW1wdHkodmFsdWUpIHtcbiAgaWYgKCF2YWx1ZSAmJiB2YWx1ZSAhPT0gMCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2UgaWYgKGlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBibG9ja1BhcmFtcyhwYXJhbXMsIGlkcykge1xuICBwYXJhbXMucGF0aCA9IGlkcztcbiAgcmV0dXJuIHBhcmFtcztcbn1cblxuZnVuY3Rpb24gYXBwZW5kQ29udGV4dFBhdGgoY29udGV4dFBhdGgsIGlkKSB7XG4gIHJldHVybiAoY29udGV4dFBhdGggPyBjb250ZXh0UGF0aCArICcuJyA6ICcnKSArIGlkO1xufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGM6L2dpdC9Fc3BhbGllckpTL34vaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL3V0aWxzLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQgPSBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH07XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLkhhbmRsZWJhcnNFbnZpcm9ubWVudCA9IEhhbmRsZWJhcnNFbnZpcm9ubWVudDtcbmV4cG9ydHMuY3JlYXRlRnJhbWUgPSBjcmVhdGVGcmFtZTtcblxudmFyIF9pbXBvcnQgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbnZhciBVdGlscyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9pbXBvcnQpO1xuXG52YXIgX0V4Y2VwdGlvbiA9IHJlcXVpcmUoJy4vZXhjZXB0aW9uJyk7XG5cbnZhciBfRXhjZXB0aW9uMiA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKF9FeGNlcHRpb24pO1xuXG52YXIgVkVSU0lPTiA9ICczLjAuMSc7XG5leHBvcnRzLlZFUlNJT04gPSBWRVJTSU9OO1xudmFyIENPTVBJTEVSX1JFVklTSU9OID0gNjtcblxuZXhwb3J0cy5DT01QSUxFUl9SRVZJU0lPTiA9IENPTVBJTEVSX1JFVklTSU9OO1xudmFyIFJFVklTSU9OX0NIQU5HRVMgPSB7XG4gIDE6ICc8PSAxLjAucmMuMicsIC8vIDEuMC5yYy4yIGlzIGFjdHVhbGx5IHJldjIgYnV0IGRvZXNuJ3QgcmVwb3J0IGl0XG4gIDI6ICc9PSAxLjAuMC1yYy4zJyxcbiAgMzogJz09IDEuMC4wLXJjLjQnLFxuICA0OiAnPT0gMS54LngnLFxuICA1OiAnPT0gMi4wLjAtYWxwaGEueCcsXG4gIDY6ICc+PSAyLjAuMC1iZXRhLjEnXG59O1xuXG5leHBvcnRzLlJFVklTSU9OX0NIQU5HRVMgPSBSRVZJU0lPTl9DSEFOR0VTO1xudmFyIGlzQXJyYXkgPSBVdGlscy5pc0FycmF5LFxuICAgIGlzRnVuY3Rpb24gPSBVdGlscy5pc0Z1bmN0aW9uLFxuICAgIHRvU3RyaW5nID0gVXRpbHMudG9TdHJpbmcsXG4gICAgb2JqZWN0VHlwZSA9ICdbb2JqZWN0IE9iamVjdF0nO1xuXG5mdW5jdGlvbiBIYW5kbGViYXJzRW52aXJvbm1lbnQoaGVscGVycywgcGFydGlhbHMpIHtcbiAgdGhpcy5oZWxwZXJzID0gaGVscGVycyB8fCB7fTtcbiAgdGhpcy5wYXJ0aWFscyA9IHBhcnRpYWxzIHx8IHt9O1xuXG4gIHJlZ2lzdGVyRGVmYXVsdEhlbHBlcnModGhpcyk7XG59XG5cbkhhbmRsZWJhcnNFbnZpcm9ubWVudC5wcm90b3R5cGUgPSB7XG4gIGNvbnN0cnVjdG9yOiBIYW5kbGViYXJzRW52aXJvbm1lbnQsXG5cbiAgbG9nZ2VyOiBsb2dnZXIsXG4gIGxvZzogbG9nLFxuXG4gIHJlZ2lzdGVySGVscGVyOiBmdW5jdGlvbiByZWdpc3RlckhlbHBlcihuYW1lLCBmbikge1xuICAgIGlmICh0b1N0cmluZy5jYWxsKG5hbWUpID09PSBvYmplY3RUeXBlKSB7XG4gICAgICBpZiAoZm4pIHtcbiAgICAgICAgdGhyb3cgbmV3IF9FeGNlcHRpb24yWydkZWZhdWx0J10oJ0FyZyBub3Qgc3VwcG9ydGVkIHdpdGggbXVsdGlwbGUgaGVscGVycycpO1xuICAgICAgfVxuICAgICAgVXRpbHMuZXh0ZW5kKHRoaXMuaGVscGVycywgbmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGVscGVyc1tuYW1lXSA9IGZuO1xuICAgIH1cbiAgfSxcbiAgdW5yZWdpc3RlckhlbHBlcjogZnVuY3Rpb24gdW5yZWdpc3RlckhlbHBlcihuYW1lKSB7XG4gICAgZGVsZXRlIHRoaXMuaGVscGVyc1tuYW1lXTtcbiAgfSxcblxuICByZWdpc3RlclBhcnRpYWw6IGZ1bmN0aW9uIHJlZ2lzdGVyUGFydGlhbChuYW1lLCBwYXJ0aWFsKSB7XG4gICAgaWYgKHRvU3RyaW5nLmNhbGwobmFtZSkgPT09IG9iamVjdFR5cGUpIHtcbiAgICAgIFV0aWxzLmV4dGVuZCh0aGlzLnBhcnRpYWxzLCBuYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHR5cGVvZiBwYXJ0aWFsID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aHJvdyBuZXcgX0V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnQXR0ZW1wdGluZyB0byByZWdpc3RlciBhIHBhcnRpYWwgYXMgdW5kZWZpbmVkJyk7XG4gICAgICB9XG4gICAgICB0aGlzLnBhcnRpYWxzW25hbWVdID0gcGFydGlhbDtcbiAgICB9XG4gIH0sXG4gIHVucmVnaXN0ZXJQYXJ0aWFsOiBmdW5jdGlvbiB1bnJlZ2lzdGVyUGFydGlhbChuYW1lKSB7XG4gICAgZGVsZXRlIHRoaXMucGFydGlhbHNbbmFtZV07XG4gIH1cbn07XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyRGVmYXVsdEhlbHBlcnMoaW5zdGFuY2UpIHtcbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2hlbHBlck1pc3NpbmcnLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgIC8vIEEgbWlzc2luZyBmaWVsZCBpbiBhIHt7Zm9vfX0gY29uc3R1Y3QuXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTb21lb25lIGlzIGFjdHVhbGx5IHRyeWluZyB0byBjYWxsIHNvbWV0aGluZywgYmxvdyB1cC5cbiAgICAgIHRocm93IG5ldyBfRXhjZXB0aW9uMlsnZGVmYXVsdCddKCdNaXNzaW5nIGhlbHBlcjogXCInICsgYXJndW1lbnRzW2FyZ3VtZW50cy5sZW5ndGggLSAxXS5uYW1lICsgJ1wiJyk7XG4gICAgfVxuICB9KTtcblxuICBpbnN0YW5jZS5yZWdpc3RlckhlbHBlcignYmxvY2tIZWxwZXJNaXNzaW5nJywgZnVuY3Rpb24gKGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgICB2YXIgaW52ZXJzZSA9IG9wdGlvbnMuaW52ZXJzZSxcbiAgICAgICAgZm4gPSBvcHRpb25zLmZuO1xuXG4gICAgaWYgKGNvbnRleHQgPT09IHRydWUpIHtcbiAgICAgIHJldHVybiBmbih0aGlzKTtcbiAgICB9IGVsc2UgaWYgKGNvbnRleHQgPT09IGZhbHNlIHx8IGNvbnRleHQgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGludmVyc2UodGhpcyk7XG4gICAgfSBlbHNlIGlmIChpc0FycmF5KGNvbnRleHQpKSB7XG4gICAgICBpZiAoY29udGV4dC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGlmIChvcHRpb25zLmlkcykge1xuICAgICAgICAgIG9wdGlvbnMuaWRzID0gW29wdGlvbnMubmFtZV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW5zdGFuY2UuaGVscGVycy5lYWNoKGNvbnRleHQsIG9wdGlvbnMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGludmVyc2UodGhpcyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChvcHRpb25zLmRhdGEgJiYgb3B0aW9ucy5pZHMpIHtcbiAgICAgICAgdmFyIGRhdGEgPSBjcmVhdGVGcmFtZShvcHRpb25zLmRhdGEpO1xuICAgICAgICBkYXRhLmNvbnRleHRQYXRoID0gVXRpbHMuYXBwZW5kQ29udGV4dFBhdGgob3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoLCBvcHRpb25zLm5hbWUpO1xuICAgICAgICBvcHRpb25zID0geyBkYXRhOiBkYXRhIH07XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmbihjb250ZXh0LCBvcHRpb25zKTtcbiAgICB9XG4gIH0pO1xuXG4gIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCdlYWNoJywgZnVuY3Rpb24gKGNvbnRleHQsIG9wdGlvbnMpIHtcbiAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgIHRocm93IG5ldyBfRXhjZXB0aW9uMlsnZGVmYXVsdCddKCdNdXN0IHBhc3MgaXRlcmF0b3IgdG8gI2VhY2gnKTtcbiAgICB9XG5cbiAgICB2YXIgZm4gPSBvcHRpb25zLmZuLFxuICAgICAgICBpbnZlcnNlID0gb3B0aW9ucy5pbnZlcnNlLFxuICAgICAgICBpID0gMCxcbiAgICAgICAgcmV0ID0gJycsXG4gICAgICAgIGRhdGEgPSB1bmRlZmluZWQsXG4gICAgICAgIGNvbnRleHRQYXRoID0gdW5kZWZpbmVkO1xuXG4gICAgaWYgKG9wdGlvbnMuZGF0YSAmJiBvcHRpb25zLmlkcykge1xuICAgICAgY29udGV4dFBhdGggPSBVdGlscy5hcHBlbmRDb250ZXh0UGF0aChvcHRpb25zLmRhdGEuY29udGV4dFBhdGgsIG9wdGlvbnMuaWRzWzBdKSArICcuJztcbiAgICB9XG5cbiAgICBpZiAoaXNGdW5jdGlvbihjb250ZXh0KSkge1xuICAgICAgY29udGV4dCA9IGNvbnRleHQuY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5kYXRhKSB7XG4gICAgICBkYXRhID0gY3JlYXRlRnJhbWUob3B0aW9ucy5kYXRhKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBleGVjSXRlcmF0aW9uKGZpZWxkLCBpbmRleCwgbGFzdCkge1xuICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgZGF0YS5rZXkgPSBmaWVsZDtcbiAgICAgICAgZGF0YS5pbmRleCA9IGluZGV4O1xuICAgICAgICBkYXRhLmZpcnN0ID0gaW5kZXggPT09IDA7XG4gICAgICAgIGRhdGEubGFzdCA9ICEhbGFzdDtcblxuICAgICAgICBpZiAoY29udGV4dFBhdGgpIHtcbiAgICAgICAgICBkYXRhLmNvbnRleHRQYXRoID0gY29udGV4dFBhdGggKyBmaWVsZDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXQgPSByZXQgKyBmbihjb250ZXh0W2ZpZWxkXSwge1xuICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICBibG9ja1BhcmFtczogVXRpbHMuYmxvY2tQYXJhbXMoW2NvbnRleHRbZmllbGRdLCBmaWVsZF0sIFtjb250ZXh0UGF0aCArIGZpZWxkLCBudWxsXSlcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChjb250ZXh0ICYmIHR5cGVvZiBjb250ZXh0ID09PSAnb2JqZWN0Jykge1xuICAgICAgaWYgKGlzQXJyYXkoY29udGV4dCkpIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IGNvbnRleHQubGVuZ3RoOyBpIDwgajsgaSsrKSB7XG4gICAgICAgICAgZXhlY0l0ZXJhdGlvbihpLCBpLCBpID09PSBjb250ZXh0Lmxlbmd0aCAtIDEpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgcHJpb3JLZXkgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgZm9yICh2YXIga2V5IGluIGNvbnRleHQpIHtcbiAgICAgICAgICBpZiAoY29udGV4dC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAvLyBXZSdyZSBydW5uaW5nIHRoZSBpdGVyYXRpb25zIG9uZSBzdGVwIG91dCBvZiBzeW5jIHNvIHdlIGNhbiBkZXRlY3RcbiAgICAgICAgICAgIC8vIHRoZSBsYXN0IGl0ZXJhdGlvbiB3aXRob3V0IGhhdmUgdG8gc2NhbiB0aGUgb2JqZWN0IHR3aWNlIGFuZCBjcmVhdGVcbiAgICAgICAgICAgIC8vIGFuIGl0ZXJtZWRpYXRlIGtleXMgYXJyYXkuXG4gICAgICAgICAgICBpZiAocHJpb3JLZXkpIHtcbiAgICAgICAgICAgICAgZXhlY0l0ZXJhdGlvbihwcmlvcktleSwgaSAtIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJpb3JLZXkgPSBrZXk7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChwcmlvcktleSkge1xuICAgICAgICAgIGV4ZWNJdGVyYXRpb24ocHJpb3JLZXksIGkgLSAxLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpID09PSAwKSB7XG4gICAgICByZXQgPSBpbnZlcnNlKHRoaXMpO1xuICAgIH1cblxuICAgIHJldHVybiByZXQ7XG4gIH0pO1xuXG4gIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCdpZicsIGZ1bmN0aW9uIChjb25kaXRpb25hbCwgb3B0aW9ucykge1xuICAgIGlmIChpc0Z1bmN0aW9uKGNvbmRpdGlvbmFsKSkge1xuICAgICAgY29uZGl0aW9uYWwgPSBjb25kaXRpb25hbC5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIC8vIERlZmF1bHQgYmVoYXZpb3IgaXMgdG8gcmVuZGVyIHRoZSBwb3NpdGl2ZSBwYXRoIGlmIHRoZSB2YWx1ZSBpcyB0cnV0aHkgYW5kIG5vdCBlbXB0eS5cbiAgICAvLyBUaGUgYGluY2x1ZGVaZXJvYCBvcHRpb24gbWF5IGJlIHNldCB0byB0cmVhdCB0aGUgY29uZHRpb25hbCBhcyBwdXJlbHkgbm90IGVtcHR5IGJhc2VkIG9uIHRoZVxuICAgIC8vIGJlaGF2aW9yIG9mIGlzRW1wdHkuIEVmZmVjdGl2ZWx5IHRoaXMgZGV0ZXJtaW5lcyBpZiAwIGlzIGhhbmRsZWQgYnkgdGhlIHBvc2l0aXZlIHBhdGggb3IgbmVnYXRpdmUuXG4gICAgaWYgKCFvcHRpb25zLmhhc2guaW5jbHVkZVplcm8gJiYgIWNvbmRpdGlvbmFsIHx8IFV0aWxzLmlzRW1wdHkoY29uZGl0aW9uYWwpKSB7XG4gICAgICByZXR1cm4gb3B0aW9ucy5pbnZlcnNlKHRoaXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gb3B0aW9ucy5mbih0aGlzKTtcbiAgICB9XG4gIH0pO1xuXG4gIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCd1bmxlc3MnLCBmdW5jdGlvbiAoY29uZGl0aW9uYWwsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gaW5zdGFuY2UuaGVscGVyc1snaWYnXS5jYWxsKHRoaXMsIGNvbmRpdGlvbmFsLCB7IGZuOiBvcHRpb25zLmludmVyc2UsIGludmVyc2U6IG9wdGlvbnMuZm4sIGhhc2g6IG9wdGlvbnMuaGFzaCB9KTtcbiAgfSk7XG5cbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ3dpdGgnLCBmdW5jdGlvbiAoY29udGV4dCwgb3B0aW9ucykge1xuICAgIGlmIChpc0Z1bmN0aW9uKGNvbnRleHQpKSB7XG4gICAgICBjb250ZXh0ID0gY29udGV4dC5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgIHZhciBmbiA9IG9wdGlvbnMuZm47XG5cbiAgICBpZiAoIVV0aWxzLmlzRW1wdHkoY29udGV4dCkpIHtcbiAgICAgIGlmIChvcHRpb25zLmRhdGEgJiYgb3B0aW9ucy5pZHMpIHtcbiAgICAgICAgdmFyIGRhdGEgPSBjcmVhdGVGcmFtZShvcHRpb25zLmRhdGEpO1xuICAgICAgICBkYXRhLmNvbnRleHRQYXRoID0gVXRpbHMuYXBwZW5kQ29udGV4dFBhdGgob3B0aW9ucy5kYXRhLmNvbnRleHRQYXRoLCBvcHRpb25zLmlkc1swXSk7XG4gICAgICAgIG9wdGlvbnMgPSB7IGRhdGE6IGRhdGEgfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZuKGNvbnRleHQsIG9wdGlvbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gb3B0aW9ucy5pbnZlcnNlKHRoaXMpO1xuICAgIH1cbiAgfSk7XG5cbiAgaW5zdGFuY2UucmVnaXN0ZXJIZWxwZXIoJ2xvZycsIGZ1bmN0aW9uIChtZXNzYWdlLCBvcHRpb25zKSB7XG4gICAgdmFyIGxldmVsID0gb3B0aW9ucy5kYXRhICYmIG9wdGlvbnMuZGF0YS5sZXZlbCAhPSBudWxsID8gcGFyc2VJbnQob3B0aW9ucy5kYXRhLmxldmVsLCAxMCkgOiAxO1xuICAgIGluc3RhbmNlLmxvZyhsZXZlbCwgbWVzc2FnZSk7XG4gIH0pO1xuXG4gIGluc3RhbmNlLnJlZ2lzdGVySGVscGVyKCdsb29rdXAnLCBmdW5jdGlvbiAob2JqLCBmaWVsZCkge1xuICAgIHJldHVybiBvYmogJiYgb2JqW2ZpZWxkXTtcbiAgfSk7XG59XG5cbnZhciBsb2dnZXIgPSB7XG4gIG1ldGhvZE1hcDogeyAwOiAnZGVidWcnLCAxOiAnaW5mbycsIDI6ICd3YXJuJywgMzogJ2Vycm9yJyB9LFxuXG4gIC8vIFN0YXRlIGVudW1cbiAgREVCVUc6IDAsXG4gIElORk86IDEsXG4gIFdBUk46IDIsXG4gIEVSUk9SOiAzLFxuICBsZXZlbDogMSxcblxuICAvLyBDYW4gYmUgb3ZlcnJpZGRlbiBpbiB0aGUgaG9zdCBlbnZpcm9ubWVudFxuICBsb2c6IGZ1bmN0aW9uIGxvZyhsZXZlbCwgbWVzc2FnZSkge1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbG9nZ2VyLmxldmVsIDw9IGxldmVsKSB7XG4gICAgICB2YXIgbWV0aG9kID0gbG9nZ2VyLm1ldGhvZE1hcFtsZXZlbF07XG4gICAgICAoY29uc29sZVttZXRob2RdIHx8IGNvbnNvbGUubG9nKS5jYWxsKGNvbnNvbGUsIG1lc3NhZ2UpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWNvbnNvbGVcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydHMubG9nZ2VyID0gbG9nZ2VyO1xudmFyIGxvZyA9IGxvZ2dlci5sb2c7XG5cbmV4cG9ydHMubG9nID0gbG9nO1xuXG5mdW5jdGlvbiBjcmVhdGVGcmFtZShvYmplY3QpIHtcbiAgdmFyIGZyYW1lID0gVXRpbHMuZXh0ZW5kKHt9LCBvYmplY3QpO1xuICBmcmFtZS5fcGFyZW50ID0gb2JqZWN0O1xuICByZXR1cm4gZnJhbWU7XG59XG5cbi8qIFthcmdzLCBdb3B0aW9ucyAqL1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGM6L2dpdC9Fc3BhbGllckpTL34vaGFuZGxlYmFycy9kaXN0L2Nqcy9oYW5kbGViYXJzL2Jhc2UuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBlcnJvclByb3BzID0gWydkZXNjcmlwdGlvbicsICdmaWxlTmFtZScsICdsaW5lTnVtYmVyJywgJ21lc3NhZ2UnLCAnbmFtZScsICdudW1iZXInLCAnc3RhY2snXTtcblxuZnVuY3Rpb24gRXhjZXB0aW9uKG1lc3NhZ2UsIG5vZGUpIHtcbiAgdmFyIGxvYyA9IG5vZGUgJiYgbm9kZS5sb2MsXG4gICAgICBsaW5lID0gdW5kZWZpbmVkLFxuICAgICAgY29sdW1uID0gdW5kZWZpbmVkO1xuICBpZiAobG9jKSB7XG4gICAgbGluZSA9IGxvYy5zdGFydC5saW5lO1xuICAgIGNvbHVtbiA9IGxvYy5zdGFydC5jb2x1bW47XG5cbiAgICBtZXNzYWdlICs9ICcgLSAnICsgbGluZSArICc6JyArIGNvbHVtbjtcbiAgfVxuXG4gIHZhciB0bXAgPSBFcnJvci5wcm90b3R5cGUuY29uc3RydWN0b3IuY2FsbCh0aGlzLCBtZXNzYWdlKTtcblxuICAvLyBVbmZvcnR1bmF0ZWx5IGVycm9ycyBhcmUgbm90IGVudW1lcmFibGUgaW4gQ2hyb21lIChhdCBsZWFzdCksIHNvIGBmb3IgcHJvcCBpbiB0bXBgIGRvZXNuJ3Qgd29yay5cbiAgZm9yICh2YXIgaWR4ID0gMDsgaWR4IDwgZXJyb3JQcm9wcy5sZW5ndGg7IGlkeCsrKSB7XG4gICAgdGhpc1tlcnJvclByb3BzW2lkeF1dID0gdG1wW2Vycm9yUHJvcHNbaWR4XV07XG4gIH1cblxuICBpZiAoRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UpIHtcbiAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCBFeGNlcHRpb24pO1xuICB9XG5cbiAgaWYgKGxvYykge1xuICAgIHRoaXMubGluZU51bWJlciA9IGxpbmU7XG4gICAgdGhpcy5jb2x1bW4gPSBjb2x1bW47XG4gIH1cbn1cblxuRXhjZXB0aW9uLnByb3RvdHlwZSA9IG5ldyBFcnJvcigpO1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBFeGNlcHRpb247XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBjOi9naXQvRXNwYWxpZXJKUy9+L2hhbmRsZWJhcnMvZGlzdC9janMvaGFuZGxlYmFycy9leGNlcHRpb24uanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG4vLyBCdWlsZCBvdXQgb3VyIGJhc2ljIFNhZmVTdHJpbmcgdHlwZVxuZnVuY3Rpb24gU2FmZVN0cmluZyhzdHJpbmcpIHtcbiAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG59XG5cblNhZmVTdHJpbmcucHJvdG90eXBlLnRvU3RyaW5nID0gU2FmZVN0cmluZy5wcm90b3R5cGUudG9IVE1MID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gJycgKyB0aGlzLnN0cmluZztcbn07XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IFNhZmVTdHJpbmc7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBjOi9naXQvRXNwYWxpZXJKUy9+L2hhbmRsZWJhcnMvZGlzdC9janMvaGFuZGxlYmFycy9zYWZlLXN0cmluZy5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkID0gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5jaGVja1JldmlzaW9uID0gY2hlY2tSZXZpc2lvbjtcblxuLy8gVE9ETzogUmVtb3ZlIHRoaXMgbGluZSBhbmQgYnJlYWsgdXAgY29tcGlsZVBhcnRpYWxcblxuZXhwb3J0cy50ZW1wbGF0ZSA9IHRlbXBsYXRlO1xuZXhwb3J0cy53cmFwUHJvZ3JhbSA9IHdyYXBQcm9ncmFtO1xuZXhwb3J0cy5yZXNvbHZlUGFydGlhbCA9IHJlc29sdmVQYXJ0aWFsO1xuZXhwb3J0cy5pbnZva2VQYXJ0aWFsID0gaW52b2tlUGFydGlhbDtcbmV4cG9ydHMubm9vcCA9IG5vb3A7XG5cbnZhciBfaW1wb3J0ID0gcmVxdWlyZSgnLi91dGlscycpO1xuXG52YXIgVXRpbHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfaW1wb3J0KTtcblxudmFyIF9FeGNlcHRpb24gPSByZXF1aXJlKCcuL2V4Y2VwdGlvbicpO1xuXG52YXIgX0V4Y2VwdGlvbjIgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChfRXhjZXB0aW9uKTtcblxudmFyIF9DT01QSUxFUl9SRVZJU0lPTiRSRVZJU0lPTl9DSEFOR0VTJGNyZWF0ZUZyYW1lID0gcmVxdWlyZSgnLi9iYXNlJyk7XG5cbmZ1bmN0aW9uIGNoZWNrUmV2aXNpb24oY29tcGlsZXJJbmZvKSB7XG4gIHZhciBjb21waWxlclJldmlzaW9uID0gY29tcGlsZXJJbmZvICYmIGNvbXBpbGVySW5mb1swXSB8fCAxLFxuICAgICAgY3VycmVudFJldmlzaW9uID0gX0NPTVBJTEVSX1JFVklTSU9OJFJFVklTSU9OX0NIQU5HRVMkY3JlYXRlRnJhbWUuQ09NUElMRVJfUkVWSVNJT047XG5cbiAgaWYgKGNvbXBpbGVyUmV2aXNpb24gIT09IGN1cnJlbnRSZXZpc2lvbikge1xuICAgIGlmIChjb21waWxlclJldmlzaW9uIDwgY3VycmVudFJldmlzaW9uKSB7XG4gICAgICB2YXIgcnVudGltZVZlcnNpb25zID0gX0NPTVBJTEVSX1JFVklTSU9OJFJFVklTSU9OX0NIQU5HRVMkY3JlYXRlRnJhbWUuUkVWSVNJT05fQ0hBTkdFU1tjdXJyZW50UmV2aXNpb25dLFxuICAgICAgICAgIGNvbXBpbGVyVmVyc2lvbnMgPSBfQ09NUElMRVJfUkVWSVNJT04kUkVWSVNJT05fQ0hBTkdFUyRjcmVhdGVGcmFtZS5SRVZJU0lPTl9DSEFOR0VTW2NvbXBpbGVyUmV2aXNpb25dO1xuICAgICAgdGhyb3cgbmV3IF9FeGNlcHRpb24yWydkZWZhdWx0J10oJ1RlbXBsYXRlIHdhcyBwcmVjb21waWxlZCB3aXRoIGFuIG9sZGVyIHZlcnNpb24gb2YgSGFuZGxlYmFycyB0aGFuIHRoZSBjdXJyZW50IHJ1bnRpbWUuICcgKyAnUGxlYXNlIHVwZGF0ZSB5b3VyIHByZWNvbXBpbGVyIHRvIGEgbmV3ZXIgdmVyc2lvbiAoJyArIHJ1bnRpbWVWZXJzaW9ucyArICcpIG9yIGRvd25ncmFkZSB5b3VyIHJ1bnRpbWUgdG8gYW4gb2xkZXIgdmVyc2lvbiAoJyArIGNvbXBpbGVyVmVyc2lvbnMgKyAnKS4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVXNlIHRoZSBlbWJlZGRlZCB2ZXJzaW9uIGluZm8gc2luY2UgdGhlIHJ1bnRpbWUgZG9lc24ndCBrbm93IGFib3V0IHRoaXMgcmV2aXNpb24geWV0XG4gICAgICB0aHJvdyBuZXcgX0V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnVGVtcGxhdGUgd2FzIHByZWNvbXBpbGVkIHdpdGggYSBuZXdlciB2ZXJzaW9uIG9mIEhhbmRsZWJhcnMgdGhhbiB0aGUgY3VycmVudCBydW50aW1lLiAnICsgJ1BsZWFzZSB1cGRhdGUgeW91ciBydW50aW1lIHRvIGEgbmV3ZXIgdmVyc2lvbiAoJyArIGNvbXBpbGVySW5mb1sxXSArICcpLicpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB0ZW1wbGF0ZSh0ZW1wbGF0ZVNwZWMsIGVudikge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICBpZiAoIWVudikge1xuICAgIHRocm93IG5ldyBfRXhjZXB0aW9uMlsnZGVmYXVsdCddKCdObyBlbnZpcm9ubWVudCBwYXNzZWQgdG8gdGVtcGxhdGUnKTtcbiAgfVxuICBpZiAoIXRlbXBsYXRlU3BlYyB8fCAhdGVtcGxhdGVTcGVjLm1haW4pIHtcbiAgICB0aHJvdyBuZXcgX0V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnVW5rbm93biB0ZW1wbGF0ZSBvYmplY3Q6ICcgKyB0eXBlb2YgdGVtcGxhdGVTcGVjKTtcbiAgfVxuXG4gIC8vIE5vdGU6IFVzaW5nIGVudi5WTSByZWZlcmVuY2VzIHJhdGhlciB0aGFuIGxvY2FsIHZhciByZWZlcmVuY2VzIHRocm91Z2hvdXQgdGhpcyBzZWN0aW9uIHRvIGFsbG93XG4gIC8vIGZvciBleHRlcm5hbCB1c2VycyB0byBvdmVycmlkZSB0aGVzZSBhcyBwc3VlZG8tc3VwcG9ydGVkIEFQSXMuXG4gIGVudi5WTS5jaGVja1JldmlzaW9uKHRlbXBsYXRlU3BlYy5jb21waWxlcik7XG5cbiAgZnVuY3Rpb24gaW52b2tlUGFydGlhbFdyYXBwZXIocGFydGlhbCwgY29udGV4dCwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAgIGNvbnRleHQgPSBVdGlscy5leHRlbmQoe30sIGNvbnRleHQsIG9wdGlvbnMuaGFzaCk7XG4gICAgfVxuXG4gICAgcGFydGlhbCA9IGVudi5WTS5yZXNvbHZlUGFydGlhbC5jYWxsKHRoaXMsIHBhcnRpYWwsIGNvbnRleHQsIG9wdGlvbnMpO1xuICAgIHZhciByZXN1bHQgPSBlbnYuVk0uaW52b2tlUGFydGlhbC5jYWxsKHRoaXMsIHBhcnRpYWwsIGNvbnRleHQsIG9wdGlvbnMpO1xuXG4gICAgaWYgKHJlc3VsdCA9PSBudWxsICYmIGVudi5jb21waWxlKSB7XG4gICAgICBvcHRpb25zLnBhcnRpYWxzW29wdGlvbnMubmFtZV0gPSBlbnYuY29tcGlsZShwYXJ0aWFsLCB0ZW1wbGF0ZVNwZWMuY29tcGlsZXJPcHRpb25zLCBlbnYpO1xuICAgICAgcmVzdWx0ID0gb3B0aW9ucy5wYXJ0aWFsc1tvcHRpb25zLm5hbWVdKGNvbnRleHQsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBpZiAocmVzdWx0ICE9IG51bGwpIHtcbiAgICAgIGlmIChvcHRpb25zLmluZGVudCkge1xuICAgICAgICB2YXIgbGluZXMgPSByZXN1bHQuc3BsaXQoJ1xcbicpO1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGxpbmVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgIGlmICghbGluZXNbaV0gJiYgaSArIDEgPT09IGwpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxpbmVzW2ldID0gb3B0aW9ucy5pbmRlbnQgKyBsaW5lc1tpXTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQgPSBsaW5lcy5qb2luKCdcXG4nKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBfRXhjZXB0aW9uMlsnZGVmYXVsdCddKCdUaGUgcGFydGlhbCAnICsgb3B0aW9ucy5uYW1lICsgJyBjb3VsZCBub3QgYmUgY29tcGlsZWQgd2hlbiBydW5uaW5nIGluIHJ1bnRpbWUtb25seSBtb2RlJyk7XG4gICAgfVxuICB9XG5cbiAgLy8gSnVzdCBhZGQgd2F0ZXJcbiAgdmFyIGNvbnRhaW5lciA9IHtcbiAgICBzdHJpY3Q6IGZ1bmN0aW9uIHN0cmljdChvYmosIG5hbWUpIHtcbiAgICAgIGlmICghKG5hbWUgaW4gb2JqKSkge1xuICAgICAgICB0aHJvdyBuZXcgX0V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnXCInICsgbmFtZSArICdcIiBub3QgZGVmaW5lZCBpbiAnICsgb2JqKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvYmpbbmFtZV07XG4gICAgfSxcbiAgICBsb29rdXA6IGZ1bmN0aW9uIGxvb2t1cChkZXB0aHMsIG5hbWUpIHtcbiAgICAgIHZhciBsZW4gPSBkZXB0aHMubGVuZ3RoO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBpZiAoZGVwdGhzW2ldICYmIGRlcHRoc1tpXVtuYW1lXSAhPSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIGRlcHRoc1tpXVtuYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgbGFtYmRhOiBmdW5jdGlvbiBsYW1iZGEoY3VycmVudCwgY29udGV4dCkge1xuICAgICAgcmV0dXJuIHR5cGVvZiBjdXJyZW50ID09PSAnZnVuY3Rpb24nID8gY3VycmVudC5jYWxsKGNvbnRleHQpIDogY3VycmVudDtcbiAgICB9LFxuXG4gICAgZXNjYXBlRXhwcmVzc2lvbjogVXRpbHMuZXNjYXBlRXhwcmVzc2lvbixcbiAgICBpbnZva2VQYXJ0aWFsOiBpbnZva2VQYXJ0aWFsV3JhcHBlcixcblxuICAgIGZuOiBmdW5jdGlvbiBmbihpKSB7XG4gICAgICByZXR1cm4gdGVtcGxhdGVTcGVjW2ldO1xuICAgIH0sXG5cbiAgICBwcm9ncmFtczogW10sXG4gICAgcHJvZ3JhbTogZnVuY3Rpb24gcHJvZ3JhbShpLCBkYXRhLCBkZWNsYXJlZEJsb2NrUGFyYW1zLCBibG9ja1BhcmFtcywgZGVwdGhzKSB7XG4gICAgICB2YXIgcHJvZ3JhbVdyYXBwZXIgPSB0aGlzLnByb2dyYW1zW2ldLFxuICAgICAgICAgIGZuID0gdGhpcy5mbihpKTtcbiAgICAgIGlmIChkYXRhIHx8IGRlcHRocyB8fCBibG9ja1BhcmFtcyB8fCBkZWNsYXJlZEJsb2NrUGFyYW1zKSB7XG4gICAgICAgIHByb2dyYW1XcmFwcGVyID0gd3JhcFByb2dyYW0odGhpcywgaSwgZm4sIGRhdGEsIGRlY2xhcmVkQmxvY2tQYXJhbXMsIGJsb2NrUGFyYW1zLCBkZXB0aHMpO1xuICAgICAgfSBlbHNlIGlmICghcHJvZ3JhbVdyYXBwZXIpIHtcbiAgICAgICAgcHJvZ3JhbVdyYXBwZXIgPSB0aGlzLnByb2dyYW1zW2ldID0gd3JhcFByb2dyYW0odGhpcywgaSwgZm4pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHByb2dyYW1XcmFwcGVyO1xuICAgIH0sXG5cbiAgICBkYXRhOiBmdW5jdGlvbiBkYXRhKHZhbHVlLCBkZXB0aCkge1xuICAgICAgd2hpbGUgKHZhbHVlICYmIGRlcHRoLS0pIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5fcGFyZW50O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sXG4gICAgbWVyZ2U6IGZ1bmN0aW9uIG1lcmdlKHBhcmFtLCBjb21tb24pIHtcbiAgICAgIHZhciBvYmogPSBwYXJhbSB8fCBjb21tb247XG5cbiAgICAgIGlmIChwYXJhbSAmJiBjb21tb24gJiYgcGFyYW0gIT09IGNvbW1vbikge1xuICAgICAgICBvYmogPSBVdGlscy5leHRlbmQoe30sIGNvbW1vbiwgcGFyYW0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gb2JqO1xuICAgIH0sXG5cbiAgICBub29wOiBlbnYuVk0ubm9vcCxcbiAgICBjb21waWxlckluZm86IHRlbXBsYXRlU3BlYy5jb21waWxlclxuICB9O1xuXG4gIGZ1bmN0aW9uIHJldChjb250ZXh0KSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzFdO1xuXG4gICAgdmFyIGRhdGEgPSBvcHRpb25zLmRhdGE7XG5cbiAgICByZXQuX3NldHVwKG9wdGlvbnMpO1xuICAgIGlmICghb3B0aW9ucy5wYXJ0aWFsICYmIHRlbXBsYXRlU3BlYy51c2VEYXRhKSB7XG4gICAgICBkYXRhID0gaW5pdERhdGEoY29udGV4dCwgZGF0YSk7XG4gICAgfVxuICAgIHZhciBkZXB0aHMgPSB1bmRlZmluZWQsXG4gICAgICAgIGJsb2NrUGFyYW1zID0gdGVtcGxhdGVTcGVjLnVzZUJsb2NrUGFyYW1zID8gW10gOiB1bmRlZmluZWQ7XG4gICAgaWYgKHRlbXBsYXRlU3BlYy51c2VEZXB0aHMpIHtcbiAgICAgIGRlcHRocyA9IG9wdGlvbnMuZGVwdGhzID8gW2NvbnRleHRdLmNvbmNhdChvcHRpb25zLmRlcHRocykgOiBbY29udGV4dF07XG4gICAgfVxuXG4gICAgcmV0dXJuIHRlbXBsYXRlU3BlYy5tYWluLmNhbGwoY29udGFpbmVyLCBjb250ZXh0LCBjb250YWluZXIuaGVscGVycywgY29udGFpbmVyLnBhcnRpYWxzLCBkYXRhLCBibG9ja1BhcmFtcywgZGVwdGhzKTtcbiAgfVxuICByZXQuaXNUb3AgPSB0cnVlO1xuXG4gIHJldC5fc2V0dXAgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgIGlmICghb3B0aW9ucy5wYXJ0aWFsKSB7XG4gICAgICBjb250YWluZXIuaGVscGVycyA9IGNvbnRhaW5lci5tZXJnZShvcHRpb25zLmhlbHBlcnMsIGVudi5oZWxwZXJzKTtcblxuICAgICAgaWYgKHRlbXBsYXRlU3BlYy51c2VQYXJ0aWFsKSB7XG4gICAgICAgIGNvbnRhaW5lci5wYXJ0aWFscyA9IGNvbnRhaW5lci5tZXJnZShvcHRpb25zLnBhcnRpYWxzLCBlbnYucGFydGlhbHMpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb250YWluZXIuaGVscGVycyA9IG9wdGlvbnMuaGVscGVycztcbiAgICAgIGNvbnRhaW5lci5wYXJ0aWFscyA9IG9wdGlvbnMucGFydGlhbHM7XG4gICAgfVxuICB9O1xuXG4gIHJldC5fY2hpbGQgPSBmdW5jdGlvbiAoaSwgZGF0YSwgYmxvY2tQYXJhbXMsIGRlcHRocykge1xuICAgIGlmICh0ZW1wbGF0ZVNwZWMudXNlQmxvY2tQYXJhbXMgJiYgIWJsb2NrUGFyYW1zKSB7XG4gICAgICB0aHJvdyBuZXcgX0V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnbXVzdCBwYXNzIGJsb2NrIHBhcmFtcycpO1xuICAgIH1cbiAgICBpZiAodGVtcGxhdGVTcGVjLnVzZURlcHRocyAmJiAhZGVwdGhzKSB7XG4gICAgICB0aHJvdyBuZXcgX0V4Y2VwdGlvbjJbJ2RlZmF1bHQnXSgnbXVzdCBwYXNzIHBhcmVudCBkZXB0aHMnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gd3JhcFByb2dyYW0oY29udGFpbmVyLCBpLCB0ZW1wbGF0ZVNwZWNbaV0sIGRhdGEsIDAsIGJsb2NrUGFyYW1zLCBkZXB0aHMpO1xuICB9O1xuICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiB3cmFwUHJvZ3JhbShjb250YWluZXIsIGksIGZuLCBkYXRhLCBkZWNsYXJlZEJsb2NrUGFyYW1zLCBibG9ja1BhcmFtcywgZGVwdGhzKSB7XG4gIGZ1bmN0aW9uIHByb2coY29udGV4dCkge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1sxXTtcblxuICAgIHJldHVybiBmbi5jYWxsKGNvbnRhaW5lciwgY29udGV4dCwgY29udGFpbmVyLmhlbHBlcnMsIGNvbnRhaW5lci5wYXJ0aWFscywgb3B0aW9ucy5kYXRhIHx8IGRhdGEsIGJsb2NrUGFyYW1zICYmIFtvcHRpb25zLmJsb2NrUGFyYW1zXS5jb25jYXQoYmxvY2tQYXJhbXMpLCBkZXB0aHMgJiYgW2NvbnRleHRdLmNvbmNhdChkZXB0aHMpKTtcbiAgfVxuICBwcm9nLnByb2dyYW0gPSBpO1xuICBwcm9nLmRlcHRoID0gZGVwdGhzID8gZGVwdGhzLmxlbmd0aCA6IDA7XG4gIHByb2cuYmxvY2tQYXJhbXMgPSBkZWNsYXJlZEJsb2NrUGFyYW1zIHx8IDA7XG4gIHJldHVybiBwcm9nO1xufVxuXG5mdW5jdGlvbiByZXNvbHZlUGFydGlhbChwYXJ0aWFsLCBjb250ZXh0LCBvcHRpb25zKSB7XG4gIGlmICghcGFydGlhbCkge1xuICAgIHBhcnRpYWwgPSBvcHRpb25zLnBhcnRpYWxzW29wdGlvbnMubmFtZV07XG4gIH0gZWxzZSBpZiAoIXBhcnRpYWwuY2FsbCAmJiAhb3B0aW9ucy5uYW1lKSB7XG4gICAgLy8gVGhpcyBpcyBhIGR5bmFtaWMgcGFydGlhbCB0aGF0IHJldHVybmVkIGEgc3RyaW5nXG4gICAgb3B0aW9ucy5uYW1lID0gcGFydGlhbDtcbiAgICBwYXJ0aWFsID0gb3B0aW9ucy5wYXJ0aWFsc1twYXJ0aWFsXTtcbiAgfVxuICByZXR1cm4gcGFydGlhbDtcbn1cblxuZnVuY3Rpb24gaW52b2tlUGFydGlhbChwYXJ0aWFsLCBjb250ZXh0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMucGFydGlhbCA9IHRydWU7XG5cbiAgaWYgKHBhcnRpYWwgPT09IHVuZGVmaW5lZCkge1xuICAgIHRocm93IG5ldyBfRXhjZXB0aW9uMlsnZGVmYXVsdCddKCdUaGUgcGFydGlhbCAnICsgb3B0aW9ucy5uYW1lICsgJyBjb3VsZCBub3QgYmUgZm91bmQnKTtcbiAgfSBlbHNlIGlmIChwYXJ0aWFsIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICByZXR1cm4gcGFydGlhbChjb250ZXh0LCBvcHRpb25zKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBub29wKCkge1xuICByZXR1cm4gJyc7XG59XG5cbmZ1bmN0aW9uIGluaXREYXRhKGNvbnRleHQsIGRhdGEpIHtcbiAgaWYgKCFkYXRhIHx8ICEoJ3Jvb3QnIGluIGRhdGEpKSB7XG4gICAgZGF0YSA9IGRhdGEgPyBfQ09NUElMRVJfUkVWSVNJT04kUkVWSVNJT05fQ0hBTkdFUyRjcmVhdGVGcmFtZS5jcmVhdGVGcmFtZShkYXRhKSA6IHt9O1xuICAgIGRhdGEucm9vdCA9IGNvbnRleHQ7XG4gIH1cbiAgcmV0dXJuIGRhdGE7XG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogYzovZ2l0L0VzcGFsaWVySlMvfi9oYW5kbGViYXJzL2Rpc3QvY2pzL2hhbmRsZWJhcnMvcnVudGltZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbi8qZ2xvYmFsIHdpbmRvdyAqL1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSBmdW5jdGlvbiAoSGFuZGxlYmFycykge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICB2YXIgcm9vdCA9IHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnID8gZ2xvYmFsIDogd2luZG93LFxuICAgICAgJEhhbmRsZWJhcnMgPSByb290LkhhbmRsZWJhcnM7XG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gIEhhbmRsZWJhcnMubm9Db25mbGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAocm9vdC5IYW5kbGViYXJzID09PSBIYW5kbGViYXJzKSB7XG4gICAgICByb290LkhhbmRsZWJhcnMgPSAkSGFuZGxlYmFycztcbiAgICB9XG4gIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBjOi9naXQvRXNwYWxpZXJKUy9+L2hhbmRsZWJhcnMvZGlzdC9janMvaGFuZGxlYmFycy9uby1jb25mbGljdC5qc1xuICoqLyIsImltcG9ydCBlc3BhbGllciBmcm9tIFwiLi4vLi4vZXNwYWxpZXJcIjtcclxuaW1wb3J0IHJvd1RlbXBsYXRlIGZyb20gXCIuL3RlbXBsYXRlcy9yb3dcIjtcclxuXHJcbmxldCBkYXRhID0gW1xyXG5cdHtcclxuXHRcdFwiY29sMVwiOiBcIlJlY29yZCAxLTFcIixcclxuXHRcdFwiY29sMlwiOiBcIlJlY29yZCAxLTJcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJjb2wxXCI6IFwiUmVjb3JkIDItMVwiLFxyXG5cdFx0XCJjb2wyXCI6IFwiUmVjb3JkIDItMlwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcImNvbDFcIjogXCJSZWNvcmQgMy0xXCIsXHJcblx0XHRcImNvbDJcIjogXCJSZWNvcmQgMy0yXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiY29sMVwiOiBcIlJlY29yZCA0LTFcIixcclxuXHRcdFwiY29sMlwiOiBcIlJlY29yZCA0LTJcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJjb2wxXCI6IFwiUmVjb3JkIDUtMVwiLFxyXG5cdFx0XCJjb2wyXCI6IFwiUmVjb3JkIDUtMlwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcImNvbDFcIjogXCJSZWNvcmQgNi0xXCIsXHJcblx0XHRcImNvbDJcIjogXCJSZWNvcmQgNi0yXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiY29sMVwiOiBcIlJlY29yZCA3LTFcIixcclxuXHRcdFwiY29sMlwiOiBcIlJlY29yZCA3LTJcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJjb2wxXCI6IFwiUmVjb3JkIDgtMVwiLFxyXG5cdFx0XCJjb2wyXCI6IFwiUmVjb3JkIDgtMlwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcImNvbDFcIjogXCJSZWNvcmQgOS0xXCIsXHJcblx0XHRcImNvbDJcIjogXCJSZWNvcmQgOS0yXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiY29sMVwiOiBcIlJlY29yZCAxMC0xXCIsXHJcblx0XHRcImNvbDJcIjogXCJSZWNvcmQgMTAtMlwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcImNvbDFcIjogXCJSZWNvcmQgMTEtMVwiLFxyXG5cdFx0XCJjb2wyXCI6IFwiUmVjb3JkIDExLTJcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJjb2wxXCI6IFwiUmVjb3JkIDEyLTFcIixcclxuXHRcdFwiY29sMlwiOiBcIlJlY29yZCAxMi0yXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiY29sMVwiOiBcIlJlY29yZCAxMy0xXCIsXHJcblx0XHRcImNvbDJcIjogXCJSZWNvcmQgMTMtMlwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcImNvbDFcIjogXCJSZWNvcmQgMTQtMVwiLFxyXG5cdFx0XCJjb2wyXCI6IFwiUmVjb3JkIDE0LTJcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJjb2wxXCI6IFwiUmVjb3JkIDE1LTFcIixcclxuXHRcdFwiY29sMlwiOiBcIlJlY29yZCAxNS0yXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiY29sMVwiOiBcIlJlY29yZCAxNi0xXCIsXHJcblx0XHRcImNvbDJcIjogXCJSZWNvcmQgMTYtMlwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcImNvbDFcIjogXCJSZWNvcmQgMTctMVwiLFxyXG5cdFx0XCJjb2wyXCI6IFwiUmVjb3JkIDE3LTJcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJjb2wxXCI6IFwiUmVjb3JkIDE4LTFcIixcclxuXHRcdFwiY29sMlwiOiBcIlJlY29yZCAxOC0yXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiY29sMVwiOiBcIlJlY29yZCAxOS0xXCIsXHJcblx0XHRcImNvbDJcIjogXCJSZWNvcmQgMTktMlwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcImNvbDFcIjogXCJSZWNvcmQgMjAtMVwiLFxyXG5cdFx0XCJjb2wyXCI6IFwiUmVjb3JkIDIwLTJcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJjb2wxXCI6IFwiUmVjb3JkIDIxLTFcIixcclxuXHRcdFwiY29sMlwiOiBcIlJlY29yZCAyMS0yXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiY29sMVwiOiBcIlJlY29yZCAyMi0xXCIsXHJcblx0XHRcImNvbDJcIjogXCJSZWNvcmQgMjItMlwiXHJcblx0fSxcclxuXHR7XHJcblx0XHRcImNvbDFcIjogXCJSZWNvcmQgMjMtMVwiLFxyXG5cdFx0XCJjb2wyXCI6IFwiUmVjb3JkIDIzLTJcIlxyXG5cdH0sXHJcblx0e1xyXG5cdFx0XCJjb2wxXCI6IFwiUmVjb3JkIDI0LTFcIixcclxuXHRcdFwiY29sMlwiOiBcIlJlY29yZCAyNC0yXCJcclxuXHR9LFxyXG5cdHtcclxuXHRcdFwiY29sMVwiOiBcIlJlY29yZCAyNS0xXCIsXHJcblx0XHRcImNvbDJcIjogXCJSZWNvcmQgMjUtMlwiXHJcblx0fVxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKGNvbnRhaW5lcikgPT4ge1xyXG5cdHJldHVybiBuZXcgZXNwYWxpZXIuVGFibGUoe1xyXG5cdFx0Y29udGFpbmVyLFxyXG5cdFx0cm93VGVtcGxhdGUsXHJcblx0XHRkYXRhXHJcblx0fSk7XHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBjOi9naXQvRXNwYWxpZXJKUy9zcmMvanMvZGVtby90YWJsZS9kZW1vVGFibGUuanNcbiAqKi8iLCJ2YXIgSGFuZGxlYmFycyA9IHJlcXVpcmUoXCJjOlxcXFxnaXRcXFxcRXNwYWxpZXJKU1xcXFxub2RlX21vZHVsZXNcXFxcaGFuZGxlYmFyc1xcXFxydW50aW1lLmpzXCIpO1xubW9kdWxlLmV4cG9ydHMgPSAoSGFuZGxlYmFyc1tcImRlZmF1bHRcIl0gfHwgSGFuZGxlYmFycykudGVtcGxhdGUoe1wiY29tcGlsZXJcIjpbNixcIj49IDIuMC4wLWJldGEuMVwiXSxcIm1haW5cIjpmdW5jdGlvbihkZXB0aDAsaGVscGVycyxwYXJ0aWFscyxkYXRhKSB7XG4gICAgdmFyIGhlbHBlciwgYWxpYXMxPWhlbHBlcnMuaGVscGVyTWlzc2luZywgYWxpYXMyPVwiZnVuY3Rpb25cIiwgYWxpYXMzPXRoaXMuZXNjYXBlRXhwcmVzc2lvbjtcblxuICByZXR1cm4gXCI8dHI+XFxyXFxuXHQ8dGQ+XCJcbiAgICArIGFsaWFzMygoKGhlbHBlciA9IChoZWxwZXIgPSBoZWxwZXJzLmNvbDEgfHwgKGRlcHRoMCAhPSBudWxsID8gZGVwdGgwLmNvbDEgOiBkZXB0aDApKSAhPSBudWxsID8gaGVscGVyIDogYWxpYXMxKSwodHlwZW9mIGhlbHBlciA9PT0gYWxpYXMyID8gaGVscGVyLmNhbGwoZGVwdGgwLHtcIm5hbWVcIjpcImNvbDFcIixcImhhc2hcIjp7fSxcImRhdGFcIjpkYXRhfSkgOiBoZWxwZXIpKSlcbiAgICArIFwiPC90ZD5cXHJcXG5cdDx0ZD5cIlxuICAgICsgYWxpYXMzKCgoaGVscGVyID0gKGhlbHBlciA9IGhlbHBlcnMuY29sMiB8fCAoZGVwdGgwICE9IG51bGwgPyBkZXB0aDAuY29sMiA6IGRlcHRoMCkpICE9IG51bGwgPyBoZWxwZXIgOiBhbGlhczEpLCh0eXBlb2YgaGVscGVyID09PSBhbGlhczIgPyBoZWxwZXIuY2FsbChkZXB0aDAse1wibmFtZVwiOlwiY29sMlwiLFwiaGFzaFwiOnt9LFwiZGF0YVwiOmRhdGF9KSA6IGhlbHBlcikpKVxuICAgICsgXCI8L3RkPlxcclxcbjwvdHI+XCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vdGFibGUvdGVtcGxhdGVzL3Jvdy5oYnNcbiAqKiBtb2R1bGUgaWQgPSAyOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IGVzcGFsaWVyIGZyb20gXCIuLi8uLi9lc3BhbGllclwiO1xyXG5pbXBvcnQgZGlhbG9nVGVtcGxhdGUgZnJvbSBcIi4vdGVtcGxhdGVzL2RpYWxvZy10ZW1wbGF0ZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xyXG5cdGVzcGFsaWVyLmRpYWxvZyh7XHJcbiAgICAgICAgZWxlbWVudDogJCgkLnRyaW0oZGlhbG9nVGVtcGxhdGUoKSkpLFxyXG4gICAgICAgIGJ1dHRvbnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwic3VibWl0XCIsXHJcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiBmdW5jdGlvbiAoZGlhbG9nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoXCJzdWJtaXQhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpYWxvZy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcImNhbmNlbFwiLFxyXG4gICAgICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24gKGRpYWxvZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpYWxvZy5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9KTtcclxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGM6L2dpdC9Fc3BhbGllckpTL3NyYy9qcy9kZW1vL2RpYWxvZy9kaWFsb2ctZGVtby5qc1xuICoqLyIsInZhciBIYW5kbGViYXJzID0gcmVxdWlyZShcImM6XFxcXGdpdFxcXFxFc3BhbGllckpTXFxcXG5vZGVfbW9kdWxlc1xcXFxoYW5kbGViYXJzXFxcXHJ1bnRpbWUuanNcIik7XG5tb2R1bGUuZXhwb3J0cyA9IChIYW5kbGViYXJzW1wiZGVmYXVsdFwiXSB8fCBIYW5kbGViYXJzKS50ZW1wbGF0ZSh7XCJjb21waWxlclwiOls2LFwiPj0gMi4wLjAtYmV0YS4xXCJdLFwibWFpblwiOmZ1bmN0aW9uKGRlcHRoMCxoZWxwZXJzLHBhcnRpYWxzLGRhdGEpIHtcbiAgICByZXR1cm4gXCI8Zm9ybSBjbGFzcz1cXFwiY29sLXNtLTQgY29sLXNtLW9mZnNldC00XFxcIiBzdHlsZT1cXFwiYmFja2dyb3VuZDogd2hpdGU7cGFkZGluZzogMWVtO2JvcmRlci1yYWRpdXM6IC4xNWVtO2JveC1zaGFkb3c6IDAgMCAuNWVtICM4MWUxODE7XFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJleGFtcGxlSW5wdXRFbWFpbDFcXFwiPkVtYWlsIGFkZHJlc3M8L2xhYmVsPlxcclxcbiAgICAgICAgPGlucHV0IHJlcXVpcmVkIHR5cGU9XFxcImVtYWlsXFxcIiBjbGFzcz1cXFwiZm9ybS1jb250cm9sXFxcIiBpZD1cXFwiZXhhbXBsZUlucHV0RW1haWwxXFxcIiBwbGFjZWhvbGRlcj1cXFwiRW50ZXIgZW1haWxcXFwiPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiZm9ybS1ncm91cFxcXCI+XFxyXFxuICAgICAgICA8bGFiZWwgZm9yPVxcXCJleGFtcGxlSW5wdXRQYXNzd29yZDFcXFwiPlBhc3N3b3JkPC9sYWJlbD5cXHJcXG4gICAgICAgIDxpbnB1dCByZXF1aXJlZCB0eXBlPVxcXCJwYXNzd29yZFxcXCIgY2xhc3M9XFxcImZvcm0tY29udHJvbFxcXCIgaWQ9XFxcImV4YW1wbGVJbnB1dFBhc3N3b3JkMVxcXCIgcGxhY2Vob2xkZXI9XFxcIlBhc3N3b3JkXFxcIj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6IHZvaWQoMCk7XFxcIiBpZD1cXFwic3VibWl0XFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kZWZhdWx0XFxcIj5TdWJtaXQ8L2E+XFxyXFxuICAgIDxhIGhyZWY9XFxcImphdmFzY3JpcHQ6IHZvaWQoMCk7XFxcIiBpZD1cXFwiY2FuY2VsXFxcIiBjbGFzcz1cXFwiYnRuIGJ0bi1kYW5nZXJcXFwiPkNhbmNlbDwvYT5cXHJcXG48L2Zvcm0+XCI7XG59LFwidXNlRGF0YVwiOnRydWV9KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vZGlhbG9nL3RlbXBsYXRlcy9kaWFsb2ctdGVtcGxhdGUuaGJzXG4gKiogbW9kdWxlIGlkID0gMzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=