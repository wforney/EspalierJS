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
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _espalier = __webpack_require__(2);
	
	var _espalier2 = _interopRequireDefault(_espalier);
	
	_espalier2["default"].showInfo("It seems the libraries have loaded!");
	_espalier2["default"].wire("#standard-form");
	
	var graphProgress = Handlebars.compile($("#graph-progress-template").html());
	
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
	});
	
	var nextKey = new Object();
	
	var Step1 = (function (_espalier$GraphNode) {
	    function Step1() {
	        _classCallCheck(this, Step1);
	
	        _get(Object.getPrototypeOf(Step1.prototype), "constructor", this).call(this);
	        this._internals = new WeakMap();
	    }
	
	    _inherits(Step1, _espalier$GraphNode);
	
	    _createClass(Step1, [{
	        key: "getValue",
	        value: function getValue() {
	            return "Step 1 value";
	        }
	    }, {
	        key: "renderIn",
	        value: function renderIn(container, result, steps) {
	            var progress = graphProgress(steps);
	            container.innerHTML = progress + "<h3>I am step 1. Hear me roar.</h3><a data-graph-event='next' href='javascript: void(0);' class='btn btn-primary'>Next</a>";
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
	
	var Step2dot1 = (function (_espalier$GraphNode2) {
	    function Step2dot1() {
	        _classCallCheck(this, Step2dot1);
	
	        _get(Object.getPrototypeOf(Step2dot1.prototype), "constructor", this).call(this);
	        this._internals = new WeakMap();
	    }
	
	    _inherits(Step2dot1, _espalier$GraphNode2);
	
	    _createClass(Step2dot1, [{
	        key: "getValue",
	        value: function getValue() {
	            return "Step 2 value";
	        }
	    }, {
	        key: "renderIn",
	        value: function renderIn(container, result, steps) {
	            var progress = graphProgress(steps);
	            container.innerHTML = progress + "<h3>I am step 2.1. Hear me growl.</h3><a data-graph-event='back' href='javascript: void(0);' class='btn btn-primary'>Back</a> <a data-graph-event='next' href='javascript: void(0);' class='btn btn-primary'>Next</a>";
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
	            return "StepTwo";
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
	    function Step2dot2() {
	        _classCallCheck(this, Step2dot2);
	
	        _get(Object.getPrototypeOf(Step2dot2.prototype), "constructor", this).call(this);
	        this._internals = new WeakMap();
	    }
	
	    _inherits(Step2dot2, _espalier$GraphNode3);
	
	    _createClass(Step2dot2, [{
	        key: "getValue",
	        value: function getValue() {
	            return "Step 2.2 value";
	        }
	    }, {
	        key: "renderIn",
	        value: function renderIn(container, result, steps) {
	            var progress = graphProgress(steps);
	            container.innerHTML = progress + "<h3>I am step 2.2. Hear me howl.</h3><a data-graph-event='back' href='javascript: void(0);' class='btn btn-primary'>Back</a> <a data-graph-event='next' href='javascript: void(0);' class='btn btn-primary'>Next</a>";
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
	            return "StepTwo";
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
	    function Step3() {
	        _classCallCheck(this, Step3);
	
	        _get(Object.getPrototypeOf(Step3.prototype), "constructor", this).call(this);
	    }
	
	    _inherits(Step3, _espalier$GraphNode4);
	
	    _createClass(Step3, [{
	        key: "getValue",
	        value: function getValue() {
	            return "Step 3 value";
	        }
	    }, {
	        key: "renderIn",
	        value: function renderIn(container, result, steps) {
	            var progress = graphProgress(steps);
	            container.innerHTML = progress + "<h3>I am step 3. Hear me whimper.</h3><a data-graph-event='back' href='javascript: void(0);' class='btn btn-primary'>Back</a>";
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
	            return 2;
	        }
	    }]);
	
	    return Step3;
	})(_espalier2["default"].GraphNode);
	
	_espalier2["default"].graph({
	    steps: [{
	        title: "Step 1"
	    }, {
	        title: "Step 2"
	    }, {
	        title: "Step 3"
	    }],
	    head: new Step1(),
	    container: $("#wizard-container")[0],
	    "default": {}
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
	
	var _espalierTables = __webpack_require__(3);
	
	var _espalierTables2 = _interopRequireDefault(_espalierTables);
	
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
	    },
	    graph: _espalierGraph2["default"],
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
/* 12 */
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
	    transversed: new Object()
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
	
	        this._internals.set(keys.container, args.container);
	        this._internals.set(keys.result, _espalierCore2["default"].extend(args["default"], {}));
	        this._internals.set(keys.currentStep, args.head);
	        this._internals.set(keys.steps, args.steps);
	        this._internals.set(keys.transversed, []);
	
	        var _iteratorNormalCompletion = true;
	        var _didIteratorError = false;
	        var _iteratorError = undefined;
	
	        try {
	            for (var _iterator = args.steps[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                var step = _step.value;
	
	                step.cssClass = "graph-step-not-started";
	                step.disabled = true;
	                step.status = "Not started";
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
	
	        args.steps[0].cssClass = "graph-step-in-progress";
	        args.steps[0].disabled = false;
	        args.steps[0].status = "In progress";
	
	        this._internals.get(keys.currentStep).renderIn(this._internals.get(keys.container), this._internals.get(keys.result), args.steps);
	
	        _espalierCore2["default"].addEventListener(this._internals.get(keys.container), "click", function (e) {
	            var event = e.target.getAttribute("data-graph-event");
	
	            switch (event) {
	                case "next":
	                    _this.next();
	                    return;
	                case "back":
	                    _this.previous();
	                    return;
	            }
	        });
	    }
	
	    _createClass(Graph, [{
	        key: "goto",
	        value: function goto(index) {
	            throw new Error("not implemented yet...");
	            //         let transversed = this._internals.get(keys.transversed);
	            //
	            //         if (index === this.currentIndex) {
	            //             return;
	            //         }
	            //
	            //         if (index > this.currentIndex) {
	            //             throw new Error("Use the next method to move forward in the wizard.");
	            //         }
	            //
	            //         for (let i = this.currentIndex; i >= index; i--) {
	            //            
	            //         }
	            //
	            //         this.currentIndex = index;
	            //         this.steps[this.currentIndex].renderIn(this._internals.get("container"), this._internals.get(keys.result));
	        }
	    }, {
	        key: "next",
	        value: function next() {
	            var step = this._internals.get(keys.currentStep);
	            var value = step.getValue();
	
	            if (value === undefined) {
	                return;
	            }
	
	            var transversed = this._internals.get(keys.transversed);
	            _espalierCore2["default"].setProperty(this._internals.get(keys.result), step.propertyName, value);
	            var nextStep = step.next();
	            transversed.push(step);
	            this._internals.set(keys.currentStep, nextStep);
	
	            var steps = this._internals.get(keys.steps);
	            var lastStepIndex = step.stepIndex;
	            var newStepIndex = nextStep.stepIndex;
	
	            if (lastStepIndex !== newStepIndex) {
	                steps[lastStepIndex].cssClass = "graph-step-completed";
	                steps[lastStepIndex].status = "Completed";
	                steps[newStepIndex].cssClass = "graph-step-in-progress";
	                steps[newStepIndex].disabled = false;
	                steps[newStepIndex].status = "In progress";
	            }
	
	            nextStep.renderIn(this._internals.get(keys.container), this._internals.get(keys.result), steps);
	        }
	    }, {
	        key: "previous",
	        value: function previous() {
	            var transversed = this._internals.get(keys.transversed);
	            var lastNode = transversed.pop();
	            var currentNode = this._internals.get(keys.currentStep);
	            _espalierCore2["default"].setProperty(this._internals.get(keys.result), currentNode.propertyName, null);
	            this._internals.set(keys.currentStep, lastNode);
	
	            var steps = this._internals.get(keys.steps);
	            var lastStepIndex = currentNode.stepIndex;
	            var newStepIndex = lastNode.stepIndex;
	
	            if (lastStepIndex !== newStepIndex) {
	                steps[lastStepIndex].cssClass = "graph-step-not-started";
	                steps[lastStepIndex].disabled = true;
	                steps[lastStepIndex].status = "Not started";
	                steps[newStepIndex].cssClass = "graph-step-in-progress";
	                steps[newStepIndex].status = "In progress";
	            }
	
	            lastNode.renderIn(this._internals.get(keys.container), this._internals.get(keys.result), steps);
	        }
	    }]);
	
	    return Graph;
	})();
	
	exports["default"] = function (args) {
	    return new Graph(args);
	};
	
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

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBjMGJhNGI5Y2QzMWNiNjhiY2I5ZiIsIndlYnBhY2s6Ly8vQzovZ2l0L0VzcGFsaWVySlMvc3JjL2pzL2RlbW8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vL0M6L2dpdC9Fc3BhbGllckpTL3NyYy9qcy9lc3BhbGllci5qcyIsIndlYnBhY2s6Ly8vQzovZ2l0L0VzcGFsaWVySlMvc3JjL2pzL2VzcGFsaWVyLnRhYmxlcy5qcyIsIndlYnBhY2s6Ly8vQzovZ2l0L0VzcGFsaWVySlMvc3JjL2pzL2VzcGFsaWVyLm1lc3NhZ2VGYWN0b3J5LmpzIiwid2VicGFjazovLy9DOi9naXQvRXNwYWxpZXJKUy9zcmMvanMvZXNwYWxpZXIuY29yZS5qcyIsIndlYnBhY2s6Ly8vQzovZ2l0L0VzcGFsaWVySlMvc3JjL2pzL2VzcGFsaWVyLndhaXRzY3JlZW4uanMiLCJ3ZWJwYWNrOi8vL0M6L2dpdC9Fc3BhbGllckpTL3NyYy9qcy9lc3BhbGllci5jb21tb24uanMiLCJ3ZWJwYWNrOi8vL0M6L2dpdC9Fc3BhbGllckpTL34vcHVic3ViLWpzL3NyYy9wdWJzdWIuanMiLCJ3ZWJwYWNrOi8vL0M6L2dpdC9Fc3BhbGllckpTL3NyYy9qcy90ZW1wbGF0ZXMvYm9vdHN0cmFwVGVtcGxhdGVzLmpzIiwid2VicGFjazovLy9DOi9naXQvRXNwYWxpZXJKUy9zcmMvanMvZXNwYWxpZXIuZm9ybXMuanMiLCJ3ZWJwYWNrOi8vL0M6L2dpdC9Fc3BhbGllckpTL3NyYy9qcy9lc3BhbGllci5mb3Jtcy5jb250cm9sLmpzIiwid2VicGFjazovLy9DOi9naXQvRXNwYWxpZXJKUy9zcmMvanMvZXNwYWxpZXIudmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vQzovZ2l0L0VzcGFsaWVySlMvc3JjL2pzL2VzcGFsaWVyLmRpYWxvZy5qcyIsIndlYnBhY2s6Ly8vQzovZ2l0L0VzcGFsaWVySlMvc3JjL2pzL2VzcGFsaWVyLmdyYXBoLmpzIiwid2VicGFjazovLy9DOi9naXQvRXNwYWxpZXJKUy9zcmMvanMvZXNwYWxpZXIuZ3JhcGgubm9kZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FDQ3RDcUIsQ0FBYTs7OztBQUVsQyx1QkFBUyxRQUFRLENBQUMscUNBQXFDLENBQUMsQ0FBQztBQUN6RCx1QkFBUyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzs7QUFFaEMsS0FBSSxhQUFhLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDOztBQUU3RSxLQUFJLGNBQWMsR0FBRyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFDdEUsRUFBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDOztBQUU5QixLQUFJLEtBQUssR0FBRyxzQkFBUyxLQUFLLENBQUM7QUFDdkIsY0FBUyxFQUFFLENBQUMsQ0FBQyxhQUFhLENBQUM7QUFDM0IsZ0JBQVcsRUFBRSxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQy9ELFNBQUksRUFBRSxDQUNGLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQzFDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQzFDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQzFDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQzFDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQzFDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQzFDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQzFDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQzFDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQzFDLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLEVBQzVDLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLEVBQzVDLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLEVBQzVDLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLEVBQzVDLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLEVBQzVDLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLEVBQzVDLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLEVBQzVDLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLEVBQzVDLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLEVBQzVDLEVBQUUsSUFBSSxFQUFFLGFBQWEs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U0FBUyxFQUFFO0FBQ2hDLGVBQU0sSUFBSSxTQUFTLENBQUMsa0RBQWtELENBQUMsQ0FBQztNQUMzRTs7QUFFRCxTQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssU0FBUyxFQUFFO0FBQzdCLGVBQU0sSUFBSSxTQUFTLENBQUMsZ0RBQWdELENBQUM7TUFDeEU7O0FBRUQsU0FBRyxJQUFJLENBQUMsUUFBUSxJQUFJLFNBQVMsRUFBRTtBQUMzQixlQUFNLElBQUksU0FBUyxDQUFDLHlFQUF5RSxDQUFDLENBQUM7TUFDbEc7O0FBRUQsU0FBRyxJQUFJLENBQUMsWUFBWSxJQUFJLFNBQVMsRUFBRTtBQUMvQixlQUFNLElBQUksU0FBUyxDQUFDLG9GQUFvRixDQUFDO01BQzVHOztBQUVELFNBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxTQUFTLEVBQUU7QUFDdkIsZUFBTSxJQUFJLFNBQVMsQ0FBQywrRkFBK0YsQ0FBQztNQUN2SDtFQUNKOztzQkFyQmdCLFNBQVMiLCJmaWxlIjoiZGVtb19jb21waWxlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiYXBwXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImFwcFwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvblxuICoqLyIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgYzBiYTRiOWNkMzFjYjY4YmNiOWZcbiAqKi8iLCJpbXBvcnQgZXNwYWxpZXIgZnJvbSBcIi4uL2VzcGFsaWVyXCI7XHJcblxyXG5lc3BhbGllci5zaG93SW5mbyhcIkl0IHNlZW1zIHRoZSBsaWJyYXJpZXMgaGF2ZSBsb2FkZWQhXCIpO1xyXG5lc3BhbGllci53aXJlKFwiI3N0YW5kYXJkLWZvcm1cIik7XHJcblxyXG5sZXQgZ3JhcGhQcm9ncmVzcyA9IEhhbmRsZWJhcnMuY29tcGlsZSgkKFwiI2dyYXBoLXByb2dyZXNzLXRlbXBsYXRlXCIpLmh0bWwoKSk7XHJcblxyXG52YXIgZGlhbG9nVGVtcGxhdGUgPSBIYW5kbGViYXJzLmNvbXBpbGUoJChcIiNkaWFsb2ctdGVtcGxhdGVcIikuaHRtbCgpKTtcclxuJChcIi5kYXRlcGlja2VyXCIpLmRhdGVwaWNrZXIoKTtcclxuXHJcbnZhciB0YWJsZSA9IGVzcGFsaWVyLnRhYmxlKHtcclxuICAgIGNvbnRhaW5lcjogJChcIiNkZW1vLXRhYmxlXCIpLFxyXG4gICAgcm93VGVtcGxhdGU6IEhhbmRsZWJhcnMuY29tcGlsZSgkKFwiI3Rlc3Qtcm93LXRlbXBsYXRlXCIpLmh0bWwoKSksXHJcbiAgICBkYXRhOiBbXHJcbiAgICAgICAgeyBjb2wxOiBcIlJlY29yZCAxLTFcIiwgY29sMjogXCJSZWNvcmQgMS0yXCIgfSxcclxuICAgICAgICB7IGNvbDE6IFwiUmVjb3JkIDItMVwiLCBjb2wyOiBcIlJlY29yZCAyLTJcIiB9LFxyXG4gICAgICAgIHsgY29sMTogXCJSZWNvcmQgMy0xXCIsIGNvbDI6IFwiUmVjb3JkIDMtMlwiIH0sXHJcbiAgICAgICAgeyBjb2wxOiBcIlJlY29yZCA0LTFcIiwgY29sMjogXCJSZWNvcmQgNC0yXCIgfSxcclxuICAgICAgICB7IGNvbDE6IFwiUmVjb3JkIDUtMVwiLCBjb2wyOiBcIlJlY29yZCA1LTJcIiB9LFxyXG4gICAgICAgIHsgY29sMTogXCJSZWNvcmQgNi0xXCIsIGNvbDI6IFwiUmVjb3JkIDYtMlwiIH0sXHJcbiAgICAgICAgeyBjb2wxOiBcIlJlY29yZCA3LTFcIiwgY29sMjogXCJSZWNvcmQgNy0yXCIgfSxcclxuICAgICAgICB7IGNvbDE6IFwiUmVjb3JkIDgtMVwiLCBjb2wyOiBcIlJlY29yZCA4LTJcIiB9LFxyXG4gICAgICAgIHsgY29sMTogXCJSZWNvcmQgOS0xXCIsIGNvbDI6IFwiUmVjb3JkIDktMlwiIH0sXHJcbiAgICAgICAgeyBjb2wxOiBcIlJlY29yZCAxMC0xXCIsIGNvbDI6IFwiUmVjb3JkIDEwLTJcIiB9LFxyXG4gICAgICAgIHsgY29sMTogXCJSZWNvcmQgMTEtMVwiLCBjb2wyOiBcIlJlY29yZCAxMS0yXCIgfSxcclxuICAgICAgICB7IGNvbDE6IFwiUmVjb3JkIDEyLTFcIiwgY29sMjogXCJSZWNvcmQgMTItMlwiIH0sXHJcbiAgICAgICAgeyBjb2wxOiBcIlJlY29yZCAxMy0xXCIsIGNvbDI6IFwiUmVjb3JkIDEzLTJcIiB9LFxyXG4gICAgICAgIHsgY29sMTogXCJSZWNvcmQgMTQtMVwiLCBjb2wyOiBcIlJlY29yZCAxNC0yXCIgfSxcclxuICAgICAgICB7IGNvbDE6IFwiUmVjb3JkIDE1LTFcIiwgY29sMjogXCJSZWNvcmQgMTUtMlwiIH0sXHJcbiAgICAgICAgeyBjb2wxOiBcIlJlY29yZCAxNi0xXCIsIGNvbDI6IFwiUmVjb3JkIDE2LTJcIiB9LFxyXG4gICAgICAgIHsgY29sMTogXCJSZWNvcmQgMTctMVwiLCBjb2wyOiBcIlJlY29yZCAxNy0yXCIgfSxcclxuICAgICAgICB7IGNvbDE6IFwiUmVjb3JkIDE4LTFcIiwgY29sMjogXCJSZWNvcmQgMTgtMlwiIH0sXHJcbiAgICAgICAgeyBjb2wxOiBcIlJlY29yZCAxOS0xXCIsIGNvbDI6IFwiUmVjb3JkIDE5LTJcIiB9LFxyXG4gICAgICAgIHsgY29sMTogXCJSZWNvcmQgMjAtMVwiLCBjb2wyOiBcIlJlY29yZCAyMC0yXCIgfSxcclxuICAgICAgICB7IGNvbDE6IFwiUmVjb3JkIDIxLTFcIiwgY29sMjogXCJSZWNvcmQgMjEtMlwiIH0sXHJcbiAgICAgICAgeyBjb2wxOiBcIlJlY29yZCAyMi0xXCIsIGNvbDI6IFwiUmVjb3JkIDIyLTJcIiB9LFxyXG4gICAgICAgIHsgY29sMTogXCJSZWNvcmQgMjMtMVwiLCBjb2wyOiBcIlJlY29yZCAyMy0yXCIgfSxcclxuICAgICAgICB7IGNvbDE6IFwiUmVjb3JkIDI0LTFcIiwgY29sMjogXCJSZWNvcmQgMjQtMlwiIH0sXHJcbiAgICAgICAgeyBjb2wxOiBcIlJlY29yZCAyNS0xXCIsIGNvbDI6IFwiUmVjb3JkIDI1LTJcIiB9XHJcbiAgICBdXHJcbn0pO1xyXG5cclxuJChcIiNzZWFyY2gtcmVjb3Jkc1wiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICB2YXIgZmlsdGVyID0ge1xyXG4gICAgICAgIFN0YXJ0RGF0ZTogJChcIiNzdGFydC1kYXRlXCIpLnZhbCgpLFxyXG4gICAgICAgIEVuZERhdGU6ICQoXCIjZW5kLWRhdGVcIikudmFsKCksXHJcbiAgICAgICAgQ2xpZW50SVBBZGRyZXNzOiAkKFwiI2lwLWFkZHJlc3NcIikudmFsKCksXHJcbiAgICAgICAgVXNlck5hbWU6ICQoXCIjdXNlci1uYW1lXCIpLnZhbCgpLFxyXG4gICAgICAgIE1hY0FkZHJlc3M6ICQoXCIjbWFjLWFkZHJlc3NcIikudmFsKCksXHJcbiAgICAgICAgV29ya2luZ1RlbGVwaG9uZU51bWJlcjogJChcIiN3dG5cIikudmFsKCksXHJcbiAgICAgICAgQmlsbGluZ1RlbGVwaG9uZU51bWJlcjogJChcIiNidG5cIikudmFsKClcclxuICAgIH07XHJcblxyXG4gICAgdGFibGUuZmlsdGVyKGZpbHRlcik7XHJcbn0pO1xyXG5cclxuJChcIiNzaG93LWRpYWxvZ1wiKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICBlc3BhbGllci5kaWFsb2coe1xyXG4gICAgICAgIGVsZW1lbnQ6ICQoJC50cmltKGRpYWxvZ1RlbXBsYXRlKCkpKSxcclxuICAgICAgICBidXR0b25zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcInN1Ym1pdFwiLFxyXG4gICAgICAgICAgICAgICAgaGFuZGxlcjogZnVuY3Rpb24gKGRpYWxvZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwic3VibWl0IVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBkaWFsb2cuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCJjYW5jZWxcIixcclxuICAgICAgICAgICAgICAgIGhhbmRsZXI6IGZ1bmN0aW9uIChkaWFsb2cpIHtcclxuICAgICAgICAgICAgICAgICAgICBkaWFsb2cuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxubGV0IG5leHRLZXkgPSBuZXcgT2JqZWN0KCk7XHJcblxyXG5jbGFzcyBTdGVwMSBleHRlbmRzIGVzcGFsaWVyLkdyYXBoTm9kZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuX2ludGVybmFscyA9IG5ldyBXZWFrTWFwKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VmFsdWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiU3RlcCAxIHZhbHVlXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVySW4oY29udGFpbmVyLCByZXN1bHQsIHN0ZXBzKSB7XHJcbiAgICAgICAgbGV0IHByb2dyZXNzID0gZ3JhcGhQcm9ncmVzcyhzdGVwcyk7XHJcbiAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IHByb2dyZXNzICsgXCI8aDM+SSBhbSBzdGVwIDEuIEhlYXIgbWUgcm9hci48L2gzPjxhIGRhdGEtZ3JhcGgtZXZlbnQ9J25leHQnIGhyZWY9J2phdmFzY3JpcHQ6IHZvaWQoMCk7JyBjbGFzcz0nYnRuIGJ0bi1wcmltYXJ5Jz5OZXh0PC9hPlwiO1xyXG4gICAgfVxyXG5cclxuICAgIG5leHQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pbnRlcm5hbHMuaGFzKG5leHRLZXkpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2ludGVybmFscy5zZXQobmV4dEtleSwgbmV3IFN0ZXAyZG90MSgpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9pbnRlcm5hbHMuZ2V0KG5leHRLZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBwcm9wZXJ0eU5hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiU3RlcE9uZVwiO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzdGVwSW5kZXgoKSB7XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIFN0ZXAyZG90MSBleHRlbmRzIGVzcGFsaWVyLkdyYXBoTm9kZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuX2ludGVybmFscyA9IG5ldyBXZWFrTWFwKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VmFsdWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiU3RlcCAyIHZhbHVlXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVySW4oY29udGFpbmVyLCByZXN1bHQsIHN0ZXBzKSB7XHJcbiAgICAgICAgbGV0IHByb2dyZXNzID0gZ3JhcGhQcm9ncmVzcyhzdGVwcyk7XHJcbiAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IHByb2dyZXNzICsgXCI8aDM+SSBhbSBzdGVwIDIuMS4gSGVhciBtZSBncm93bC48L2gzPjxhIGRhdGEtZ3JhcGgtZXZlbnQ9J2JhY2snIGhyZWY9J2phdmFzY3JpcHQ6IHZvaWQoMCk7JyBjbGFzcz0nYnRuIGJ0bi1wcmltYXJ5Jz5CYWNrPC9hPiA8YSBkYXRhLWdyYXBoLWV2ZW50PSduZXh0JyBocmVmPSdqYXZhc2NyaXB0OiB2b2lkKDApOycgY2xhc3M9J2J0biBidG4tcHJpbWFyeSc+TmV4dDwvYT5cIjtcclxuICAgIH1cclxuXHJcbiAgICBuZXh0KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5faW50ZXJuYWxzLmhhcyhuZXh0S2V5KSkge1xyXG4gICAgICAgICAgICB0aGlzLl9pbnRlcm5hbHMuc2V0KG5leHRLZXksIG5ldyBTdGVwMmRvdDIoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5faW50ZXJuYWxzLmdldChuZXh0S2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgcHJvcGVydHlOYW1lKCkge1xyXG4gICAgICAgIHJldHVybiBcIlN0ZXBUd29cIjtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc3RlcEluZGV4KCkge1xyXG4gICAgICAgIHJldHVybiAxO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBTdGVwMmRvdDIgZXh0ZW5kcyBlc3BhbGllci5HcmFwaE5vZGUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLl9pbnRlcm5hbHMgPSBuZXcgV2Vha01hcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFZhbHVlKCkge1xyXG4gICAgICAgIHJldHVybiBcIlN0ZXAgMi4yIHZhbHVlXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVySW4oY29udGFpbmVyLCByZXN1bHQsIHN0ZXBzKSB7XHJcbiAgICAgICAgbGV0IHByb2dyZXNzID0gZ3JhcGhQcm9ncmVzcyhzdGVwcyk7XHJcbiAgICAgICAgY29udGFpbmVyLmlubmVySFRNTCA9IHByb2dyZXNzICsgXCI8aDM+SSBhbSBzdGVwIDIuMi4gSGVhciBtZSBob3dsLjwvaDM+PGEgZGF0YS1ncmFwaC1ldmVudD0nYmFjaycgaHJlZj0namF2YXNjcmlwdDogdm9pZCgwKTsnIGNsYXNzPSdidG4gYnRuLXByaW1hcnknPkJhY2s8L2E+IDxhIGRhdGEtZ3JhcGgtZXZlbnQ9J25leHQnIGhyZWY9J2phdmFzY3JpcHQ6IHZvaWQoMCk7JyBjbGFzcz0nYnRuIGJ0bi1wcmltYXJ5Jz5OZXh0PC9hPlwiO1xyXG4gICAgfVxyXG5cclxuICAgIG5leHQoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pbnRlcm5hbHMuaGFzKG5leHRLZXkpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2ludGVybmFscy5zZXQobmV4dEtleSwgbmV3IFN0ZXAzKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludGVybmFscy5nZXQobmV4dEtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHByb3BlcnR5TmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gXCJTdGVwVHdvXCI7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHN0ZXBJbmRleCgpIHtcclxuICAgICAgICByZXR1cm4gMTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgU3RlcDMgZXh0ZW5kcyBlc3BhbGllci5HcmFwaE5vZGUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRWYWx1ZSgpIHtcclxuICAgICAgICByZXR1cm4gXCJTdGVwIDMgdmFsdWVcIjtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXJJbihjb250YWluZXIsIHJlc3VsdCwgc3RlcHMpIHtcclxuICAgICAgICBsZXQgcHJvZ3Jlc3MgPSBncmFwaFByb2dyZXNzKHN0ZXBzKTtcclxuICAgICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gcHJvZ3Jlc3MgKyBcIjxoMz5JIGFtIHN0ZXAgMy4gSGVhciBtZSB3aGltcGVyLjwvaDM+PGEgZGF0YS1ncmFwaC1ldmVudD0nYmFjaycgaHJlZj0namF2YXNjcmlwdDogdm9pZCgwKTsnIGNsYXNzPSdidG4gYnRuLXByaW1hcnknPkJhY2s8L2E+XCI7XHJcbiAgICB9XHJcblxyXG4gICAgbmV4dCgpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHByb3BlcnR5TmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gXCJTdGVwVGhyZWVcIjtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc3RlcEluZGV4KCkge1xyXG4gICAgICAgIHJldHVybiAyO1xyXG4gICAgfVxyXG59XHJcblxyXG5lc3BhbGllci5ncmFwaCh7XHJcbiAgICBzdGVwczogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiU3RlcCAxXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiU3RlcCAyXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiU3RlcCAzXCJcclxuICAgICAgICB9XHJcbiAgICBdLFxyXG4gICAgaGVhZDogbmV3IFN0ZXAxKCksXHJcbiAgICBjb250YWluZXI6ICQoXCIjd2l6YXJkLWNvbnRhaW5lclwiKVswXSxcclxuICAgIGRlZmF1bHQ6IHt9XHJcbn0pO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L2dpdC9Fc3BhbGllckpTL3NyYy9qcy9kZW1vL2luZGV4LmpzXG4gKiovIiwiaW1wb3J0IGNvcmUgZnJvbSBcIi4vZXNwYWxpZXIuY29yZVwiO1xyXG5pbXBvcnQgbWVzc2FnZUZhY3RvcnkgZnJvbSBcIi4vZXNwYWxpZXIubWVzc2FnZUZhY3RvcnlcIjtcclxuaW1wb3J0IGZvcm1zIGZyb20gXCIuL2VzcGFsaWVyLmZvcm1zXCI7XHJcbmltcG9ydCB3YWl0U2NyZWVuIGZyb20gXCIuL2VzcGFsaWVyLndhaXRzY3JlZW5cIjtcclxuaW1wb3J0IHRhYmxlcyBmcm9tIFwiLi9lc3BhbGllci50YWJsZXNcIjtcclxuaW1wb3J0IGRpYWxvZyBmcm9tIFwiLi9lc3BhbGllci5kaWFsb2dcIjtcclxuaW1wb3J0IGdyYXBoIGZyb20gXCIuL2VzcGFsaWVyLmdyYXBoXCI7XHJcbmltcG9ydCBHcmFwaE5vZGUgZnJvbSBcIi4vZXNwYWxpZXIuZ3JhcGgubm9kZVwiO1xyXG5cclxudmFyIGVzcGFsaWVyID0ge1xyXG4gICAgc2hvd1dhcm5pbmc6IGNvcmUuc2hvd1dhcm5pbmcsXHJcbiAgICBzaG93SW5mbzogY29yZS5zaG93SW5mbyxcclxuICAgIHNlbmRSZXF1ZXN0OiBjb3JlLnNlbmRSZXF1ZXN0LFxyXG4gICAgdGFibGU6IHRhYmxlcy5jcmVhdGUsXHJcbiAgICB3aXJlOiBmb3JtcyxcclxuICAgIHNob3dXYWl0U2NyZWVuOiB3YWl0U2NyZWVuLnNob3csXHJcbiAgICBoaWRlV2FpdFNjcmVlbjogd2FpdFNjcmVlbi5oaWRlLFxyXG4gICAgc2hvcnREYXRlOiBjb3JlLnNob3J0RGF0ZSxcclxuICAgIHNob3J0VGltZTogY29yZS5zaG9ydFRpbWUsXHJcbiAgICBudW1iZXJXaXRoQ29tbWFzOiBjb3JlLm51bWJlcldpdGhDb21tYXMsXHJcbiAgICBwdWJsaXNoOiBjb3JlLnB1Ymxpc2gsXHJcbiAgICBwYXJzZUlTT0RhdGU6IGNvcmUucGFyc2VJU09EYXRlLFxyXG4gICAgc3Vic2NyaWJlOiBjb3JlLnN1YnNjcmliZSxcclxuICAgIGRpYWxvZzogZnVuY3Rpb24gKGFyZ3MpIHtcclxuICAgICAgICByZXR1cm4gZGlhbG9nKGFyZ3MpLnNob3coKTtcclxuICAgIH0sXHJcbiAgICBncmFwaCxcclxuICAgIEdyYXBoTm9kZVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZXNwYWxpZXI7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovZ2l0L0VzcGFsaWVySlMvc3JjL2pzL2VzcGFsaWVyLmpzXG4gKiovIiwiaW1wb3J0IG1lc3NhZ2VGYWN0b3J5IGZyb20gXCIuL2VzcGFsaWVyLm1lc3NhZ2VGYWN0b3J5XCI7XHJcbmltcG9ydCB3YWl0c2NyZWVuIGZyb20gXCIuL2VzcGFsaWVyLndhaXRzY3JlZW5cIjtcclxuaW1wb3J0IGNvbW1vbiBmcm9tIFwiLi9lc3BhbGllci5jb21tb25cIjtcclxuaW1wb3J0IGNvcmUgZnJvbSBcIi4vZXNwYWxpZXIuY29yZVwiO1xyXG5cclxudmFyIGdldEZvb3RlciA9IGZ1bmN0aW9uICh0YWJsZSkge1xyXG4gICAgdmFyIHN0YXJ0QXRQYWdlID0gTWF0aC5tYXgoMCwgdGFibGUuc2V0dGluZ3MuY3VycmVudFBhZ2UgLSAzKTtcclxuICAgIHZhciBlbmRBdFBhZ2UgPSBNYXRoLm1pbih0YWJsZS5zZXR0aW5ncy5wYWdlcyAtIDEsIHRhYmxlLnNldHRpbmdzLmN1cnJlbnRQYWdlICsgMyArIE1hdGgubWF4KDMgLSB0YWJsZS5zZXR0aW5ncy5jdXJyZW50UGFnZSwgMCkpO1xyXG4gICAgdmFyIHBhZ2luZ0NvbnRyb2wgPSBcIjx1bCBjbGFzcz1cXFwicGFnaW5hdGlvblxcXCI+XCI7XHJcblxyXG4gICAgcGFnaW5nQ29udHJvbCArPSBgPGxpJHt0YWJsZS5zZXR0aW5ncy5jdXJyZW50UGFnZSA9PSAwID8gYCBjbGFzcz1cImRpc2FibGVkXCJgIDogXCJcIn0+PGEgZGF0YS1wYWdlPVwiJHsodGFibGUuc2V0dGluZ3MuY3VycmVudFBhZ2UgLSAxKSB9XCIgY2xhc3M9XCJlc3BhbGllci10YWJsZS1idXR0b25cIiBocmVmPVwiamF2YXNjcmlwdDogdm9pZCgwKTtcIj48c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mbGFxdW87PC9zcGFuPjwvYT48L2xpPmA7XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IHN0YXJ0QXRQYWdlOyBpIDw9IGVuZEF0UGFnZTsgaSsrKSB7XHJcbiAgICAgICAgcGFnaW5nQ29udHJvbCArPSBgPGxpJHtpID09PSB0YWJsZS5zZXR0aW5ncy5jdXJyZW50UGFnZSA/IGAgY2xhc3M9XCJhY3RpdmVcImAgOiBcIlwifT48YSBkYXRhLXBhZ2U9XCIke2l9XCIgY2xhc3M9XCJlc3BhbGllci10YWJsZS1idXR0b25cIiBocmVmPVwiamF2YXNjcmlwdDogdm9pZCgwKTtcIj4keyhpICsgMSkgfTwvYT48L2xpPmA7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIG5leHRQYWdlID0gKHRhYmxlLnNldHRpbmdzLmN1cnJlbnRQYWdlICsgMSk7XHJcbiAgICBwYWdpbmdDb250cm9sICs9IGA8bGkke25leHRQYWdlID09IHRhYmxlLnNldHRpbmdzLnBhZ2VzID8gYCBjbGFzcz1cImRpc2FibGVkXCJgIDogXCJcIn0+PGEgZGF0YS1wYWdlPVwiJHtuZXh0UGFnZX1cIiBjbGFzcz1cImVzcGFsaWVyLXRhYmxlLWJ1dHRvblwiIGhyZWY9XCJqYXZhc2NyaXB0OiB2b2lkKDApO1wiPjxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZyYXF1bzs8L3NwYW4+PC9hPjwvbGk+YDtcclxuXHJcbiAgICByZXR1cm4gYDx0Zm9vdD48dHI+PHRkIGNvbHNwYW49XCI0MlwiPiR7cGFnaW5nQ29udHJvbH08L3RkPjwvdHI+PC90Zm9vdD5gO1xyXG59O1xyXG5cclxudmFyIHJlbmRlclRhYmxlID0gZnVuY3Rpb24gKHRhYmxlKSB7XHJcbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICB2YXIgcmVuZGVyZWQgPSBgPHRhYmxlIGNsYXNzPVwiJHt0YWJsZS5zZXR0aW5ncy50YWJsZUNsYXNzfSB0YWJsZSB0YWJsZS1zdHJpcGVkXCI+YDtcclxuXHJcbiAgICAgICAgaWYgKHRhYmxlLnNldHRpbmdzLmhlYWRlclRlbXBsYXRlKSB7XHJcbiAgICAgICAgICAgIHJlbmRlcmVkICs9IHRhYmxlLnNldHRpbmdzLmhlYWRlclRlbXBsYXRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZW5kZXJlZCArPSBcIjx0Ym9keT5cIjtcclxuICAgICAgICB2YXIgc3RhcnRBdEluZGV4ID0gdGFibGUuc2V0dGluZ3MuY3VycmVudFBhZ2UgKiB0YWJsZS5zZXR0aW5ncy5wYWdlU2l6ZTtcclxuXHJcbiAgICAgICAgaWYgKHRhYmxlLnNldHRpbmdzLmRhdGEpIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IHN0YXJ0QXRJbmRleDsgaSA8IE1hdGgubWluKHN0YXJ0QXRJbmRleCArIHRhYmxlLnNldHRpbmdzLnBhZ2VTaXplLCB0YWJsZS5zZXR0aW5ncy5kYXRhLmxlbmd0aCk7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyZWQgKz0gdGFibGUuc2V0dGluZ3Mucm93VGVtcGxhdGUodGFibGUuc2V0dGluZ3MuZGF0YVtpXSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJlbmRlcmVkICs9IFwiPC90Ym9keT5cIjtcclxuXHJcbiAgICAgICAgICAgIGlmICh0YWJsZS5zZXR0aW5ncy5wYWdlcyA+IDApIHtcclxuICAgICAgICAgICAgICAgIHJlbmRlcmVkICs9IGdldEZvb3Rlcih0YWJsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVzb2x2ZShyZW5kZXJlZCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29yZS5zZW5kUmVxdWVzdCh7XHJcbiAgICAgICAgICAgICAgICB1cmw6IHRhYmxlLnNldHRpbmdzLmZldGNoVXJsLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgUGFnZTogdGFibGUuc2V0dGluZ3MuY3VycmVudFBhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgUGFnZVNpemU6IHRhYmxlLnNldHRpbmdzLnBhZ2VTaXplLFxyXG4gICAgICAgICAgICAgICAgICAgIENyaXRlcmlhOiB0YWJsZS5zZXR0aW5ncy5maWx0ZXJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGFibGUuc2V0dGluZ3MuZmV0Y2hDYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhYmxlLnNldHRpbmdzLmZldGNoQ2FsbGJhY2socmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0YWJsZS5zZXR0aW5ncy5wYWdlcyA9IE1hdGguY2VpbChyZXN1bHQuZGF0YS50b3RhbCAvIHJlc3VsdC5kYXRhLnBhZ2VTaXplKTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzdWx0LmRhdGEucmVjb3Jkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlcmVkICs9IHRhYmxlLnNldHRpbmdzLnJvd1RlbXBsYXRlKHJlc3VsdC5kYXRhLnJlY29yZHNbaV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmVuZGVyZWQgKz0gXCI8L3Rib2R5PlwiO1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyZWQgKz0gZ2V0Rm9vdGVyKHRhYmxlKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVuZGVyZWQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBwcm9taXNlLnRoZW4oXHJcbiAgICAgICAgZnVuY3Rpb24gKHJlbmRlcmVkKSB7XHJcbiAgICAgICAgICAgIHRhYmxlLnNldHRpbmdzLmNvbnRhaW5lci5odG1sKHJlbmRlcmVkKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0YWJsZS5zZXR0aW5ncy5yZW5kZXJlZENhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICB0YWJsZS5zZXR0aW5ncy5yZW5kZXJlZENhbGxiYWNrKHRhYmxlLnNldHRpbmdzLmNvbnRhaW5lclswXS5nZXRFbGVtZW50c0J5VGFnTmFtZShcInRhYmxlXCIpWzBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG59O1xyXG5cclxuY2xhc3MgVGFibGVJbnN0YW5jZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihhcmdzKSB7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHtcclxuICAgICAgICAgICAgY29udGFpbmVyOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlOiAwLFxyXG4gICAgICAgICAgICBkYXRhOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIGZldGNoQ2FsbGJhY2s6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgZmV0Y2hVcmw6IFwiXCIsXHJcbiAgICAgICAgICAgIGhlYWRlclRlbXBsYXRlOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIHBhZ2VTaXplOiAxMCxcclxuICAgICAgICAgICAgcHJlZmV0Y2hQYWdlczogNSxcclxuICAgICAgICAgICAgcm93VGVtcGxhdGU6IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgdGFibGVDbGFzczogXCJlc3BhbGllci10YWJsZVwiLFxyXG4gICAgICAgICAgICByZW5kZXJlZENhbGxiYWNrOiB1bmRlZmluZWRcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAkLmV4dGVuZCh0aGlzLnNldHRpbmdzLCBhcmdzKTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnNldHRpbmdzLmZldGNoVXJsICYmICF0aGlzLnNldHRpbmdzLmRhdGEpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIllvdSBtdXN0IGVpdGhlciBzcGVjaWZ5IGEgZmV0Y2ggdXJsIG9yIHBhc3MgaW4gZGF0YSBmb3IgdGhlIHRhYmxlIHRvIGRpc3BsYXkuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLnNldHRpbmdzLmNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiWW91IG11c3Qgc3BlY2lmeSBhIGNvbnRhaW5lciB0byBwbGFjZSB0aGUgdGFibGUgaW4uXCIpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuc2V0dGluZ3Mucm93VGVtcGxhdGUpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIllvdSBtdXN0IHByb3ZpZGUgYSByb3cgdGVtcGxhdGUuXCIpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5kYXRhKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ3MucGFnZXMgPSBNYXRoLmNlaWwodGhpcy5zZXR0aW5ncy5kYXRhLmxlbmd0aCAvIHRoaXMuc2V0dGluZ3MucGFnZVNpemUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJC5leHRlbmQodGhpcy5zZXR0aW5ncywgYXJncyk7XHJcbiAgICB9XHJcblxyXG4gICAgbmV4dCgpIHtcclxuICAgICAgICB0aGlzLnNldHRpbmdzLmN1cnJlbnRQYWdlKys7XHJcbiAgICAgICAgcmVuZGVyVGFibGUodGhpcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJldmlvdXMoKSB7XHJcbiAgICAgICAgdGhpcy5zZXR0aW5ncy5jdXJyZW50UGFnZS0tO1xyXG4gICAgICAgIHJlbmRlclRhYmxlKHRoaXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbHRlcihmaWx0ZXIpIHtcclxuICAgICAgICB0aGlzLnNldHRpbmdzLmZpbHRlciA9IGZpbHRlcjtcclxuICAgICAgICB0aGlzLnNldHRpbmdzLmN1cnJlbnRQYWdlID0gMDtcclxuICAgICAgICByZW5kZXJUYWJsZSh0aGlzKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBnb1RvUGFnZShwYWdlKSB7XHJcbiAgICAgICAgaWYgKHBhZ2UgPCAwIHx8IHBhZ2UgPj0gdGhpcy5zZXR0aW5ncy5wYWdlcykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNldHRpbmdzLmN1cnJlbnRQYWdlID0gcGFnZTtcclxuICAgICAgICByZW5kZXJUYWJsZSh0aGlzKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufTtcclxuXHJcbnZhciB0YWJsZXMgPSB7XHJcbiAgICBjcmVhdGU6IGZ1bmN0aW9uIChhcmdzKSB7XHJcbiAgICAgICAgdmFyIHRhYmxlID0gbmV3IFRhYmxlSW5zdGFuY2UoYXJncyk7XHJcbiAgICAgICAgdGFibGUuc2V0dGluZ3MuY29udGFpbmVyLm9uKFwiY2xpY2tcIiwgXCIuZXNwYWxpZXItdGFibGUtYnV0dG9uXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGFibGUuZ29Ub1BhZ2UoJCh0aGlzKS5kYXRhKFwicGFnZVwiKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmVuZGVyVGFibGUodGFibGUpO1xyXG4gICAgICAgIHJldHVybiB0YWJsZTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHRhYmxlcztcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9naXQvRXNwYWxpZXJKUy9zcmMvanMvZXNwYWxpZXIudGFibGVzLmpzXG4gKiovIiwiaW1wb3J0IGNvcmUgZnJvbSBcIi4vZXNwYWxpZXIuY29yZVwiO1xyXG5pbXBvcnQgYm9vdHN0cmFwVGVtcGxhdGVzIGZyb20gXCIuL3RlbXBsYXRlcy9ib290c3RyYXBUZW1wbGF0ZXNcIjtcclxuXHJcbmNsYXNzIE1lc3NhZ2VEaXNwbGF5ZXIge1xyXG4gICAgY29uc3RydWN0b3IoYXJncykge1xyXG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSB7XHJcbiAgICAgICAgICAgIGF0dGFjaFRvOiBudWxsLFxyXG4gICAgICAgICAgICBtZXNzYWdlQ29udGFpbmVyQ2xhc3M6IFwibWVzc2FnZS1jb250YWluZXJcIixcclxuICAgICAgICAgICAgY2xvc2VNZXNzYWdlQ2xhc3M6IFwiY2xvc2UtbWVzc2FnZVwiLFxyXG4gICAgICAgICAgICBpbmZvTWVzc2FnZUNsYXNzOiBcImluZm8tbWVzc2FnZVwiLFxyXG4gICAgICAgICAgICB3YXJuaW5nTWVzc2FnZUNsYXNzOiBcIndhcm5pbmctbWVzc2FnZVwiLFxyXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2VDbGFzczogXCJlcnJvci1tZXNzYWdlXCIsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3NNZXNzYWdlQ2xhc3M6IFwic3VjY2Vzcy1tZXNzYWdlXCIsXHJcbiAgICAgICAgICAgIG1lc3NhZ2VBdHRhY2htZW50OiBmYWN0b3J5Lm1lc3NhZ2VBdHRhY2htZW50LkZpeGVkLFxyXG4gICAgICAgICAgICBvblJlbW92ZWQ6IGZ1bmN0aW9uICgpIHsgfSxcclxuICAgICAgICAgICAgb25BZGRlZDogZnVuY3Rpb24gKCkgeyB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgJC5leHRlbmQodGhpcy5zZXR0aW5ncywgYXJncyk7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5zZXR0aW5ncy5hdHRhY2hUbykge1xyXG4gICAgICAgICAgICB0aHJvdyAoXCJNZXNzYWdlRmFjdG9yeSByZXF1aXJlcyBhbiBhdHRhY2hUbyBhcmd1bWVudC5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5tZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMubWVzc2FnZSk7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZSA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgdGhpcy5zZXR0aW5ncy5vblJlbW92ZWQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2hvdyhtZXNzYWdlQXJncykge1xyXG4gICAgICAgIGxldCBtZXNzYWdlVHlwZUNsYXNzLCBtZXNzYWdlU2V0dGluZ3MsIG1lc3NhZ2VBdHRhY2htZW50Q2xhc3M7XHJcblxyXG4gICAgICAgIC8vTk9URTogVGhlcmUgc2hvdWxkIG9ubHkgYmUgb25lIG1lc3NhZ2UgZGlzcGxheWVkIHBlciBpbnN0YW5jZS5cclxuICAgICAgICBpZiAodGhpcy5tZXNzYWdlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZS5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vTk9URTogQWxsb3cgdGhlbSB0byBlaXRoZXIgdXNlIGFuIGFycmF5IG9mIG1lc3NhZ2VzIG9yIGFcclxuICAgICAgICAvLyAgICAgIHNpbmdsZSBtZXNzYWdlLlxyXG4gICAgICAgIGlmIChjb3JlLmlzU3RyaW5nKG1lc3NhZ2VBcmdzLm1lc3NhZ2UpKSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2VBcmdzLm1lc3NhZ2UgPSBbbWVzc2FnZUFyZ3MubWVzc2FnZV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtZXNzYWdlU2V0dGluZ3MgPSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2VUeXBlOiBmYWN0b3J5Lm1lc3NhZ2VUeXBlLkluZm8sXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFtdXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgJC5leHRlbmQobWVzc2FnZVNldHRpbmdzLCBtZXNzYWdlQXJncyk7XHJcblxyXG4gICAgICAgIGlmIChtZXNzYWdlU2V0dGluZ3MubWVzc2FnZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJObyBtZXNzYWdlIHRvIGRpc3BsYXkuXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzd2l0Y2ggKG1lc3NhZ2VTZXR0aW5ncy5tZXNzYWdlVHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIGZhY3RvcnkubWVzc2FnZVR5cGUuSW5mbzpcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VUeXBlQ2xhc3MgPSB0aGlzLnNldHRpbmdzLmluZm9NZXNzYWdlQ2xhc3M7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBmYWN0b3J5Lm1lc3NhZ2VUeXBlLlN1Y2Nlc3M6XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlVHlwZUNsYXNzID0gdGhpcy5zZXR0aW5ncy5zdWNjZXNzTWVzc2FnZUNsYXNzO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgZmFjdG9yeS5tZXNzYWdlVHlwZS5FcnJvcjpcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VUeXBlQ2xhc3MgPSB0aGlzLnNldHRpbmdzLmVycm9yTWVzc2FnZUNsYXNzO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgZmFjdG9yeS5tZXNzYWdlVHlwZS5XYXJuaW5nOlxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZVR5cGVDbGFzcyA9IHRoaXMuc2V0dGluZ3Mud2FybmluZ01lc3NhZ2VDbGFzcztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJJbnZhbGlkIG1lc3NhZ2UgdHlwZS5cIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzd2l0Y2ggKHRoaXMuc2V0dGluZ3MubWVzc2FnZUF0dGFjaG1lbnQpIHtcclxuICAgICAgICAgICAgY2FzZSBmYWN0b3J5Lm1lc3NhZ2VBdHRhY2htZW50LkZpeGVkOlxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZUF0dGFjaG1lbnRDbGFzcyA9IFwiZml4ZWRcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGZhY3RvcnkubWVzc2FnZUF0dGFjaG1lbnQuRmxvdzpcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VBdHRhY2htZW50Q2xhc3MgPSBcImZsb3dcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZUF0dGFjaG1lbnRDbGFzcyA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubWVzc2FnZSA9IGJvb3RzdHJhcFRlbXBsYXRlcy5tZXNzYWdlKHtcclxuICAgICAgICAgICAgbWVzc2FnZVR5cGVDbGFzczogbWVzc2FnZVR5cGVDbGFzcyxcclxuICAgICAgICAgICAgbWVzc2FnZXM6IG1lc3NhZ2VTZXR0aW5ncy5tZXNzYWdlLFxyXG4gICAgICAgICAgICBtZXNzYWdlQ29udGFpbmVyQ2xhc3M6IHRoaXMuc2V0dGluZ3MubWVzc2FnZUNvbnRhaW5lckNsYXNzLFxyXG4gICAgICAgICAgICBjbG9zZU1lc3NhZ2VDbGFzczogdGhpcy5zZXR0aW5ncy5jbG9zZU1lc3NhZ2VDbGFzcyxcclxuICAgICAgICAgICAgbWVzc2FnZUF0dGFjaG1lbnRDbGFzczogbWVzc2FnZUF0dGFjaG1lbnRDbGFzcyxcclxuICAgICAgICAgICAgbW9yZVRoYW5PbmU6ICghY29yZS5pc1N0cmluZyhtZXNzYWdlQXJncy5tZXNzYWdlKSAmJiBtZXNzYWdlQXJncy5tZXNzYWdlLmxlbmd0aCA+IDEpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0dGluZ3MuYXR0YWNoVG8uYXBwZW5kQ2hpbGQodGhpcy5tZXNzYWdlKTtcclxuICAgICAgICB0aGlzLnNldHRpbmdzLm9uQWRkZWQodGhpcy5tZXNzYWdlKTtcclxuXHJcbiAgICAgICAgbGV0IGRpc3BsYXllZE1lc3NhZ2UgPSB0aGlzO1xyXG5cclxuICAgICAgICBsZXQgY2xvc2VCdXR0b25zID0gQXJyYXkuZnJvbShjb3JlLmZpbmQoYC4ke3RoaXMuc2V0dGluZ3MuY2xvc2VNZXNzYWdlQ2xhc3N9YCwgdGhpcy5tZXNzYWdlKSk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGJ1dHRvbiBvZiBjbG9zZUJ1dHRvbnMpIHtcclxuICAgICAgICAgICAgY29yZS5hZGRFdmVudExpc3RlbmVyKGJ1dHRvbiwgXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5ZWRNZXNzYWdlLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLm1lc3NhZ2U7XHJcbiAgICB9XHJcbn07XHJcblxyXG52YXIgZmFjdG9yeSA9IHtcclxuICAgIGNyZWF0ZTogZnVuY3Rpb24gKGFyZ3MpIHtcclxuICAgICAgICByZXR1cm4gbmV3IE1lc3NhZ2VEaXNwbGF5ZXIoYXJncyk7XHJcbiAgICB9LFxyXG4gICAgbWVzc2FnZVR5cGU6IHtcclxuICAgICAgICBJbmZvOiBcIkluZm9cIixcclxuICAgICAgICBTdWNjZXNzOiBcInN1Y2Nlc3NcIixcclxuICAgICAgICBFcnJvcjogXCJlcnJvclwiLFxyXG4gICAgICAgIFdhcm5pbmc6IFwid2FybmluZ1wiXHJcbiAgICB9LFxyXG4gICAgbWVzc2FnZUF0dGFjaG1lbnQ6IHtcclxuICAgICAgICBGaXhlZDogXCJGaXhlZFwiLFxyXG4gICAgICAgIEZsb3c6IFwiRmxvd1wiXHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmYWN0b3J5O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L2dpdC9Fc3BhbGllckpTL3NyYy9qcy9lc3BhbGllci5tZXNzYWdlRmFjdG9yeS5qc1xuICoqLyIsImltcG9ydCBtZXNzYWdlRmFjdG9yeSBmcm9tIFwiLi9lc3BhbGllci5tZXNzYWdlRmFjdG9yeVwiO1xyXG5pbXBvcnQgd2FpdHNjcmVlbiBmcm9tIFwiLi9lc3BhbGllci53YWl0c2NyZWVuXCI7XHJcbmltcG9ydCBjb21tb24gZnJvbSBcIi4vZXNwYWxpZXIuY29tbW9uXCI7XHJcbmltcG9ydCBwdWJzdWIgZnJvbSBcInB1YnN1Yi1qc1wiO1xyXG5cclxudmFyIGZpbmQgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIHJvb3QpIHtcclxuICAgIHJvb3QgPSByb290ID8gcm9vdCA6IGRvY3VtZW50O1xyXG4gICAgcmV0dXJuIHJvb3QucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XHJcbn07XHJcblxyXG52YXIgbWFpbk1lc3NhZ2UgPSBtZXNzYWdlRmFjdG9yeS5jcmVhdGUoe1xyXG4gICAgYXR0YWNoVG86IGZpbmQoXCJib2R5XCIpWzBdXHJcbn0pO1xyXG5cclxudmFyIHBhcnNlRGF0ZTtcclxudmFyIHRlc3REYXRlID0gbmV3IERhdGUoJzIwMTEtMDYtMDJUMDk6MzQ6MjkrMDI6MDAnKTtcclxuXHJcbmlmICghdGVzdERhdGUgfHwgK3Rlc3REYXRlICE9PSAxMzA3MDAwMDY5MDAwKSB7XHJcbiAgICBwYXJzZURhdGUgPSBmdW5jdGlvbiAocykge1xyXG4gICAgICAgIHZhciBkYXksIHR6LFxyXG4gICAgICAgICAgICByeCA9IC9eKFxcZHs0fVxcLVxcZFxcZFxcLVxcZFxcZChbdFQgXVtcXGQ6XFwuXSopPykoW3paXXwoWytcXC1dKShcXGRcXGQpOihcXGRcXGQpKT8kLyxcclxuICAgICAgICAgICAgcCA9IHJ4LmV4ZWMocykgfHwgW107XHJcbiAgICAgICAgaWYgKHBbMV0pIHtcclxuICAgICAgICAgICAgZGF5ID0gcFsxXS5zcGxpdCgvXFxELyk7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBMID0gZGF5Lmxlbmd0aDsgaSA8IEw7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgZGF5W2ldID0gcGFyc2VJbnQoZGF5W2ldLCAxMCkgfHwgMDtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgZGF5WzFdIC09IDE7XHJcbiAgICAgICAgICAgIGRheSA9IG5ldyBEYXRlKERhdGUuVVRDLmFwcGx5KERhdGUsIGRheSkpO1xyXG4gICAgICAgICAgICBpZiAoIWRheS5nZXREYXRlKCkpIHJldHVybiBOYU47XHJcbiAgICAgICAgICAgIGlmIChwWzVdKSB7XHJcbiAgICAgICAgICAgICAgICB0eiA9IChwYXJzZUludChwWzVdLCAxMCkgKiA2MCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocFs2XSkgdHogKz0gcGFyc2VJbnQocFs2XSwgMTApO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBbNF0gPT0gJysnKSB0eiAqPSAtMTtcclxuICAgICAgICAgICAgICAgIGlmICh0eikgZGF5LnNldFVUQ01pbnV0ZXMoZGF5LmdldFVUQ01pbnV0ZXMoKSArIHR6KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZGF5O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gTmFOO1xyXG4gICAgfTtcclxufVxyXG5lbHNlIHtcclxuICAgIHBhcnNlRGF0ZSA9IGZ1bmN0aW9uIChzKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHMpO1xyXG4gICAgfTtcclxufVxyXG5cclxudGVzdERhdGUgPSB1bmRlZmluZWQ7XHJcblxyXG52YXIgY29yZSA9IHtcclxuICAgIHNlbmRSZXF1ZXN0OiBmdW5jdGlvbiAocmVxKSB7XHJcbiAgICAgICAgd2FpdHNjcmVlbi5zaG93KCk7XHJcbiAgICAgICAgJChcIi5cIiArIG1haW5NZXNzYWdlLnNldHRpbmdzLm1lc3NhZ2VDb250YWluZXJDbGFzcykucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgIHZhciBhamF4U2V0dGluZ3MgPSB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgIHhockZpZWxkczoge1xyXG4gICAgICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHN0YXR1c0NvZGU6IHtcclxuICAgICAgICAgICAgICAgIDUwMDogZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29yZS5zaG93RXJyb3Ioe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBlcnJvci5yZXNwb25zZUpTT04uTWVzc2FnZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3NzQ2xhc3M6IFwiZXJyb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIDQwMDogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVycm9ycyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAkLmVhY2gocmVzcG9uc2UucmVzcG9uc2VKU09OLmVycm9ycywgZnVuY3Rpb24gKGluZGV4LCBlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3Iuc291cmNlICYmIGVycm9yLnNvdXJjZS5wYXJhbWV0ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzcGVjaWZpY0ZpZWxkID0gJChcIiNcIiArIGVycm9yLnNvdXJjZS5wYXJhbWV0ZXIudG9Mb3dlckNhc2UoKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNwZWNpZmljRmllbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZmllbGRNZXNzYWdlID0gc3BlY2lmaWNGaWVsZC5kYXRhKFwibWVzc2FnZVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkTWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZE1lc3NhZ2Uuc2hvdyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBlcnJvci5kZXRhaWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlVHlwZTogbWVzc2FnZUZhY3RvcnkubWVzc2FnZVR5cGUuRXJyb3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMucHVzaChlcnJvci5kZXRhaWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3JzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29yZS5zaG93RXJyb3IoZXJyb3JzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIHdhaXRzY3JlZW4uaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXEuZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHVic3ViLnB1Ymxpc2gocmVxLmV2ZW50LCByZXNwb25zZS5yZXNwb25zZUpTT04pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcS5vblN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxLm9uU3VjY2VzcyhyZXNwb25zZS5yZXNwb25zZUpTT04pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgICQuZXh0ZW5kKGFqYXhTZXR0aW5ncywgcmVxKTtcclxuXHJcbiAgICAgICAgcmV0dXJuICQuYWpheChhamF4U2V0dGluZ3MpO1xyXG4gICAgfSxcclxuICAgIHNob3dXYXJuaW5nOiBmdW5jdGlvbiAobWVzc2FnZXMpIHtcclxuICAgICAgICBtYWluTWVzc2FnZS5zaG93KHtcclxuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZXMsXHJcbiAgICAgICAgICAgIG1lc3NhZ2VUeXBlOiBtZXNzYWdlRmFjdG9yeS5tZXNzYWdlVHlwZS5XYXJuaW5nXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgc2hvd0Vycm9yOiBmdW5jdGlvbiAobWVzc2FnZXMpIHtcclxuICAgICAgICBtYWluTWVzc2FnZS5zaG93KHtcclxuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZXMsXHJcbiAgICAgICAgICAgIG1lc3NhZ2VUeXBlOiBtZXNzYWdlRmFjdG9yeS5tZXNzYWdlVHlwZS5FcnJvclxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHNob3dJbmZvOiBmdW5jdGlvbiAobWVzc2FnZXMpIHtcclxuICAgICAgICBtYWluTWVzc2FnZS5zaG93KHtcclxuICAgICAgICAgICAgbWVzc2FnZTogbWVzc2FnZXMsXHJcbiAgICAgICAgICAgIG1lc3NhZ2VUeXBlOiBtZXNzYWdlRmFjdG9yeS5tZXNzYWdlVHlwZS5JbmZvXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgaGlkZU1haW5NZXNzYWdlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbWFpbk1lc3NhZ2UucmVtb3ZlKCk7XHJcbiAgICB9LFxyXG4gICAgaXNFbXB0eU9yU3BhY2VzOiBmdW5jdGlvbiAoc3RyKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0ciA9PT0gdW5kZWZpbmVkIHx8IHN0ciA9PT0gbnVsbCB8fCBzdHIubWF0Y2goL15cXHMqJC8pICE9PSBudWxsO1xyXG4gICAgfSxcclxuICAgIGlzRW1haWw6IGZ1bmN0aW9uIChzdHIpIHtcclxuICAgICAgICB2YXIgZW1haWxSZWdleCA9IC9eKChbXFx3LV0rXFwuKStbXFx3LV0rfChbYS16QS1aXXsxfXxbXFx3LV17Mix9KSlAKCgoWzAtMV0/WzAtOV17MSwyfXwyNVswLTVdfDJbMC00XVswLTldKVxcLihbMC0xXT9bMC05XXsxLDJ9fDI1WzAtNV18MlswLTRdWzAtOV0pXFwuKFswLTFdP1swLTldezEsMn18MjVbMC01XXwyWzAtNF1bMC05XSlcXC4oWzAtMV0/WzAtOV17MSwyfXwyNVswLTVdfDJbMC00XVswLTldKSl7MX18KFthLXpBLVpdK1tcXHctXStcXC4pK1thLXpBLVpdezIsNH0pJC87XHJcbiAgICAgICAgcmV0dXJuIGNvcmUuaXNFbXB0eU9yU3BhY2VzKHN0cikgfHwgc3RyLm1hdGNoKGVtYWlsUmVnZXgpO1xyXG4gICAgfSxcclxuICAgIGlzRGF0ZTogZnVuY3Rpb24gKHN0cikge1xyXG4gICAgICAgIHZhciBkID0gbmV3IERhdGUoc3RyKTtcclxuICAgICAgICByZXR1cm4gY29yZS5pc0VtcHR5T3JTcGFjZXMoc3RyKSB8fCAoZCAhPSBcIkludmFsaWQgRGF0ZVwiICYmICFpc05hTihkKSk7XHJcbiAgICB9LFxyXG4gICAgbnVtYmVyV2l0aENvbW1hczogZnVuY3Rpb24gbnVtYmVyV2l0aENvbW1hcyh4KSB7XHJcbiAgICAgICAgdmFyIHBhcnRzID0geC50b1N0cmluZygpLnNwbGl0KFwiLlwiKTtcclxuICAgICAgICBwYXJ0c1swXSA9IHBhcnRzWzBdLnJlcGxhY2UoL1xcQig/PShcXGR7M30pKyg/IVxcZCkpL2csIFwiLFwiKTtcclxuICAgICAgICByZXR1cm4gcGFydHMuam9pbihcIi5cIik7XHJcbiAgICB9LFxyXG4gICAgcGFyc2VJU09EYXRlOiBwYXJzZURhdGUsXHJcbiAgICBzaG9ydERhdGU6IGZ1bmN0aW9uIChkYXRlKSB7XHJcbiAgICAgICAgaWYgKCEoZGF0ZSBpbnN0YW5jZW9mIERhdGUpKSB7XHJcbiAgICAgICAgICAgIGRhdGUgPSBwYXJzZURhdGUoZGF0ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKGRhdGUuZ2V0TW9udGgoKSArIDEpICtcclxuICAgICAgICAgICAgXCIvXCIgKyBkYXRlLmdldERhdGUoKSArXHJcbiAgICAgICAgICAgIFwiL1wiICsgZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgfSxcclxuICAgIHNob3J0VGltZTogZnVuY3Rpb24gKGRhdGUpIHtcclxuICAgICAgICBpZiAoIShkYXRlIGluc3RhbmNlb2YgRGF0ZSkpIHtcclxuICAgICAgICAgICAgZGF0ZSA9IHBhcnNlRGF0ZShkYXRlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBob3VyID0gZGF0ZS5nZXRIb3VycygpO1xyXG4gICAgICAgIHZhciBhbXBtID0gXCJBTVwiO1xyXG5cclxuICAgICAgICBpZiAoaG91ciA+IDExKSB7XHJcbiAgICAgICAgICAgIGhvdXIgLT0gMTI7XHJcbiAgICAgICAgICAgIGFtcG0gPSBcIlBNXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaG91ciA9PT0gMCkge1xyXG4gICAgICAgICAgICBob3VyID0gMTI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgbWludXRlcyA9IFwiMDBcIiArIGRhdGUuZ2V0TWludXRlcygpO1xyXG4gICAgICAgIHJldHVybiBob3VyICsgXCI6XCIgKyBtaW51dGVzLnN1YnN0cmluZyhtaW51dGVzLmxlbmd0aCAtIDIpICsgXCIgXCIgKyBhbXBtO1xyXG4gICAgfSxcclxuICAgIHB1Ymxpc2g6IGZ1bmN0aW9uICh0b3BpYywgbWVzc2FnZSkge1xyXG4gICAgICAgIHB1YnN1Yi5wdWJsaXNoKHRvcGljLCBtZXNzYWdlKTtcclxuICAgIH0sXHJcbiAgICBzdWJzY3JpYmU6IGZ1bmN0aW9uICh0b3BpYywgaGFuZGxlcikge1xyXG4gICAgICAgIHJldHVybiBwdWJzdWIuc3Vic2NyaWJlKHRvcGljLCBmdW5jdGlvbiAodG9waWMsIG1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgaGFuZGxlcihtZXNzYWdlKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBmaW5kLFxyXG4gICAgZXh0ZW5kOiBmdW5jdGlvbiAob3V0KSB7XHJcbiAgICAgICAgb3V0ID0gb3V0IHx8IHt9O1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgb2JqID0gYXJndW1lbnRzW2ldO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFvYmopXHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBvYmopIHtcclxuICAgICAgICAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqW2tleV0gPT09ICdvYmplY3QnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3JlLmV4dGVuZChvdXRba2V5XSwgb2JqW2tleV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0W2tleV0gPSBvYmpba2V5XTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG91dDtcclxuICAgIH0sXHJcbiAgICBjbG9zZXN0OiBmdW5jdGlvbiBjbG9zZXN0KGVsLCBzZWxlY3Rvcikge1xyXG4gICAgICAgIHZhciBtYXRjaGVzRm47XHJcblxyXG4gICAgICAgIC8vIGZpbmQgdmVuZG9yIHByZWZpeFxyXG4gICAgICAgIFtcIm1hdGNoZXNcIiwgXCJ3ZWJraXRNYXRjaGVzU2VsZWN0b3JcIiwgXCJtb3pNYXRjaGVzU2VsZWN0b3JcIiwgXCJtc01hdGNoZXNTZWxlY3RvclwiLCBcIm9NYXRjaGVzU2VsZWN0b3JcIl0uc29tZShmdW5jdGlvbiAoZm4pIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBkb2N1bWVudC5ib2R5W2ZuXSA9PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgIG1hdGNoZXNGbiA9IGZuO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vIHRyYXZlcnNlIHBhcmVudHNcclxuICAgICAgICB3aGlsZSAoZWwgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgbGV0IHBhcmVudCA9IGVsLnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGlmIChwYXJlbnQgIT09IG51bGwgJiYgcGFyZW50W21hdGNoZXNGbl0oc2VsZWN0b3IpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyZW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsID0gcGFyZW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9LFxyXG4gICAgYWRkQ2xhc3M6IGZ1bmN0aW9uIChlbCwgY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgaWYgKGVsLmNsYXNzTGlzdCkge1xyXG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZWwuY2xhc3NOYW1lICs9ICcgJyArIGNsYXNzTmFtZTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uIChlbCwgY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgaWYgKGVsLmNsYXNzTGlzdCkge1xyXG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZWwuY2xhc3NOYW1lID0gZWwuY2xhc3NOYW1lLnJlcGxhY2UobmV3IFJlZ0V4cCgnKF58XFxcXGIpJyArIGNsYXNzTmFtZS5zcGxpdCgnICcpLmpvaW4oJ3wnKSArICcoXFxcXGJ8JCknLCAnZ2knKSwgJyAnKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgYWRkRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24gKGVsLCBldmVudE5hbWUsIGhhbmRsZXIpIHtcclxuICAgICAgICBpZiAoZWwuYWRkRXZlbnRMaXN0ZW5lcikge1xyXG4gICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgaGFuZGxlcik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZWwuYXR0YWNoRXZlbnQoJ29uJyArIGV2ZW50TmFtZSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlci5jYWxsKGVsKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1hdGNoZXM6IGZ1bmN0aW9uIChlbCwgc2VsZWN0b3IpIHtcclxuICAgICAgICB2YXIgX21hdGNoZXMgPSAoZWwubWF0Y2hlcyB8fCBlbC5tYXRjaGVzU2VsZWN0b3IgfHwgZWwubXNNYXRjaGVzU2VsZWN0b3IgfHwgZWwubW96TWF0Y2hlc1NlbGVjdG9yIHx8IGVsLndlYmtpdE1hdGNoZXNTZWxlY3RvciB8fCBlbC5vTWF0Y2hlc1NlbGVjdG9yKTtcclxuXHJcbiAgICAgICAgaWYgKF9tYXRjaGVzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBfbWF0Y2hlcy5jYWxsKGVsLCBzZWxlY3Rvcik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIG5vZGVzID0gZWwucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IG5vZGVzLmxlbmd0aDsgaS0tOykge1xyXG4gICAgICAgICAgICAgICAgaWYgKG5vZGVzW2ldID09PSBlbClcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGlzU3RyaW5nOiBmdW5jdGlvbiAodG9UZXN0KSB7XHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiB0b1Rlc3QgPT09ICdzdHJpbmcnIHx8IHRvVGVzdCBpbnN0YW5jZW9mIFN0cmluZztcclxuICAgIH0sXHJcbiAgICBmaXJzdDogZnVuY3Rpb24gKGFycmF5LCBtYXRjaCkge1xyXG4gICAgICAgIGZvciAobGV0IGFycmF5SXRlbSBvZiBhcnJheSkge1xyXG4gICAgICAgICAgICBpZiAobWF0Y2goYXJyYXlJdGVtKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFycmF5SXRlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5hYmxlIHRvIG1hdGNoIHRoYXQgaXRlbS5cIik7XHJcbiAgICB9LFxyXG4gICAgc2V0UHJvcGVydHk6IGZ1bmN0aW9uIChvYmosIHByb3AsIHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKGNvcmUuaXNTdHJpbmcocHJvcCkpIHtcclxuICAgICAgICAgICAgcHJvcCA9IHByb3Auc3BsaXQoXCIuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHByb3AubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICB2YXIgZSA9IHByb3Auc2hpZnQoKTtcclxuICAgICAgICAgICAgY29yZS5zZXRQcm9wZXJ0eShvYmpbZV0gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqW2VdKSA9PT0gXCJbb2JqZWN0IE9iamVjdF1cIiA/IG9ialtlXSA6IHt9LCBwcm9wLCB2YWx1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgb2JqW3Byb3BbMF1dID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29yZTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9naXQvRXNwYWxpZXJKUy9zcmMvanMvZXNwYWxpZXIuY29yZS5qc1xuICoqLyIsImltcG9ydCBjb21tb24gZnJvbSBcIi4vZXNwYWxpZXIuY29tbW9uXCI7XHJcblxyXG52YXIgcGxlYXNlV2FpdElkID0gXCJlc3BhbGllci13YWl0LXNjcmVlblwiO1xyXG52YXIgcGxlYXNlV2FpdCA9ICQoXCI8ZGl2IC8+XCIpO1xyXG5wbGVhc2VXYWl0LmF0dHIoXCJpZFwiLCBwbGVhc2VXYWl0SWQpO1xyXG5cclxudmFyIGhvdXJnbGFzcyA9ICdkYXRhOmltYWdlL3N2Zyt4bWw7dXRmOCwnICtcclxuICAgIFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIGNsYXNzPVxcXCJ1aWwtZ2VhcnNcXFwiIHZpZXdCb3g9XFxcIjAgMCAxMDAgMTAwXFxcIiBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVxcXCJ4TWlkWU1pZCBtZWV0XFxcIiB3aWR0aD1cXFwiMTIwcHhcXFwiIGhlaWdodD1cXFwiMTIwcHhcXFwiPlwiICtcclxuICAgIFwiICA8cmVjdCBjbGFzcz1cXFwiYmtcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHg9XFxcIjBcXFwiIHk9XFxcIjBcXFwiIHdpZHRoPVxcXCIxMDBcXFwiIGhlaWdodD1cXFwiMTAwXFxcIiAvPlwiICtcclxuICAgIFwiICA8ZyB0cmFuc2Zvcm09XFxcInRyYW5zbGF0ZSgtMjAgLTIwKVxcXCI+XCIgK1xyXG4gICAgXCIgICAgPHBhdGggZmlsbD1cXFwiI2ZhZmFmYVxcXCIgZD1cXFwiTSA3OS45IDUyLjYgQyA4MCA1MS44IDgwIDUwLjkgODAgNTAgcyAwIC0xLjggLTAuMSAtMi42IGwgLTUuMSAtMC40IGMgLTAuMyAtMi40IC0wLjkgLTQuNiAtMS44IC02LjcgbCA0LjIgLTIuOSBjIC0wLjcgLTEuNiAtMS42IC0zLjEgLTIuNiAtNC41IEwgNzAgMzUgYyAtMS40IC0xLjkgLTMuMSAtMy41IC00LjkgLTQuOSBsIDIuMiAtNC42IGMgLTEuNCAtMSAtMi45IC0xLjkgLTQuNSAtMi42IEwgNTkuOCAyNyBjIC0yLjEgLTAuOSAtNC40IC0xLjUgLTYuNyAtMS44IGwgLTAuNCAtNS4xIEMgNTEuOCAyMCA1MC45IDIwIDUwIDIwIHMgLTEuOCAwIC0yLjYgMC4xIGwgLTAuNCA1LjEgYyAtMi40IDAuMyAtNC42IDAuOSAtNi43IDEuOCBsIC0yLjkgLTQuMSBjIC0xLjYgMC43IC0zLjEgMS42IC00LjUgMi42IGwgMi4xIDQuNiBjIC0xLjkgMS40IC0zLjUgMy4xIC01IDQuOSBsIC00LjUgLTIuMSBjIC0xIDEuNCAtMS45IDIuOSAtMi42IDQuNSBsIDQuMSAyLjkgYyAtMC45IDIuMSAtMS41IDQuNCAtMS44IDYuOCBsIC01IDAuNCBDIDIwIDQ4LjIgMjAgNDkuMSAyMCA1MCBzIDAgMS44IDAuMSAyLjYgbCA1IDAuNCBjIDAuMyAyLjQgMC45IDQuNyAxLjggNi44IGwgLTQuMSAyLjkgYyAwLjcgMS42IDEuNiAzLjEgMi42IDQuNSBsIDQuNSAtMi4xIGMgMS40IDEuOSAzLjEgMy41IDUgNC45IGwgLTIuMSA0LjYgYyAxLjQgMSAyLjkgMS45IDQuNSAyLjYgbCAyLjkgLTQuMSBjIDIuMSAwLjkgNC40IDEuNSA2LjcgMS44IGwgMC40IDUuMSBDIDQ4LjIgODAgNDkuMSA4MCA1MCA4MCBzIDEuOCAwIDIuNiAtMC4xIGwgMC40IC01LjEgYyAyLjMgLTAuMyA0LjYgLTAuOSA2LjcgLTEuOCBsIDIuOSA0LjIgYyAxLjYgLTAuNyAzLjEgLTEuNiA0LjUgLTIuNiBMIDY1IDY5LjkgYyAxLjkgLTEuNCAzLjUgLTMgNC45IC00LjkgbCA0LjYgMi4yIGMgMSAtMS40IDEuOSAtMi45IDIuNiAtNC41IEwgNzMgNTkuOCBjIDAuOSAtMi4xIDEuNSAtNC40IDEuOCAtNi43IEwgNzkuOSA1Mi42IFogTSA1MCA2NSBjIC04LjMgMCAtMTUgLTYuNyAtMTUgLTE1IGMgMCAtOC4zIDYuNyAtMTUgMTUgLTE1IHMgMTUgNi43IDE1IDE1IEMgNjUgNTguMyA1OC4zIDY1IDUwIDY1IFpcXFwiPlwiICtcclxuICAgIFwiICAgICAgPGFuaW1hdGVUcmFuc2Zvcm0gdHlwZT1cXFwicm90YXRlXFxcIiBkdXI9XFxcIjJzXFxcIiByZXBlYXRDb3VudD1cXFwiaW5kZWZpbml0ZVxcXCIgdG89XFxcIjAgNTAgNTBcXFwiIGZyb209XFxcIjkwIDUwIDUwXFxcIiBhdHRyaWJ1dGVOYW1lPVxcXCJ0cmFuc2Zvcm1cXFwiIC8+XCIgK1xyXG4gICAgXCIgICAgPC9wYXRoPlwiICtcclxuICAgIFwiICA8L2c+XCIgK1xyXG4gICAgXCIgIDxnIHRyYW5zZm9ybT1cXFwidHJhbnNsYXRlKDIwIDIwKSByb3RhdGUoMTUgNTAuMDAwMiA1MClcXFwiPlwiICtcclxuICAgIFwiICAgIDxwYXRoIGZpbGw9XFxcIiNlZmVmZWZcXFwiIGQ9XFxcIk0gNzkuOSA1Mi42IEMgODAgNTEuOCA4MCA1MC45IDgwIDUwIHMgMCAtMS44IC0wLjEgLTIuNiBsIC01LjEgLTAuNCBjIC0wLjMgLTIuNCAtMC45IC00LjYgLTEuOCAtNi43IGwgNC4yIC0yLjkgYyAtMC43IC0xLjYgLTEuNiAtMy4xIC0yLjYgLTQuNSBMIDcwIDM1IGMgLTEuNCAtMS45IC0zLjEgLTMuNSAtNC45IC00LjkgbCAyLjIgLTQuNiBjIC0xLjQgLTEgLTIuOSAtMS45IC00LjUgLTIuNiBMIDU5LjggMjcgYyAtMi4xIC0wLjkgLTQuNCAtMS41IC02LjcgLTEuOCBsIC0wLjQgLTUuMSBDIDUxLjggMjAgNTAuOSAyMCA1MCAyMCBzIC0xLjggMCAtMi42IDAuMSBsIC0wLjQgNS4xIGMgLTIuNCAwLjMgLTQuNiAwLjkgLTYuNyAxLjggbCAtMi45IC00LjEgYyAtMS42IDAuNyAtMy4xIDEuNiAtNC41IDIuNiBsIDIuMSA0LjYgYyAtMS45IDEuNCAtMy41IDMuMSAtNSA0LjkgbCAtNC41IC0yLjEgYyAtMSAxLjQgLTEuOSAyLjkgLTIuNiA0LjUgbCA0LjEgMi45IGMgLTAuOSAyLjEgLTEuNSA0LjQgLTEuOCA2LjggbCAtNSAwLjQgQyAyMCA0OC4yIDIwIDQ5LjEgMjAgNTAgcyAwIDEuOCAwLjEgMi42IGwgNSAwLjQgYyAwLjMgMi40IDAuOSA0LjcgMS44IDYuOCBsIC00LjEgMi45IGMgMC43IDEuNiAxLjYgMy4xIDIuNiA0LjUgbCA0LjUgLTIuMSBjIDEuNCAxLjkgMy4xIDMuNSA1IDQuOSBsIC0yLjEgNC42IGMgMS40IDEgMi45IDEuOSA0LjUgMi42IGwgMi45IC00LjEgYyAyLjEgMC45IDQuNCAxLjUgNi43IDEuOCBsIDAuNCA1LjEgQyA0OC4yIDgwIDQ5LjEgODAgNTAgODAgcyAxLjggMCAyLjYgLTAuMSBsIDAuNCAtNS4xIGMgMi4zIC0wLjMgNC42IC0wLjkgNi43IC0xLjggbCAyLjkgNC4yIGMgMS42IC0wLjcgMy4xIC0xLjYgNC41IC0yLjYgTCA2NSA2OS45IGMgMS45IC0xLjQgMy41IC0zIDQuOSAtNC45IGwgNC42IDIuMiBjIDEgLTEuNCAxLjkgLTIuOSAyLjYgLTQuNSBMIDczIDU5LjggYyAwLjkgLTIuMSAxLjUgLTQuNCAxLjggLTYuNyBMIDc5LjkgNTIuNiBaIE0gNTAgNjUgYyAtOC4zIDAgLTE1IC02LjcgLTE1IC0xNSBjIDAgLTguMyA2LjcgLTE1IDE1IC0xNSBzIDE1IDYuNyAxNSAxNSBDIDY1IDU4LjMgNTguMyA2NSA1MCA2NSBaXFxcIj5cIiArXHJcbiAgICBcIiAgICAgIDxhbmltYXRlVHJhbnNmb3JtIHR5cGU9XFxcInJvdGF0ZVxcXCIgZHVyPVxcXCIyc1xcXCIgcmVwZWF0Q291bnQ9XFxcImluZGVmaW5pdGVcXFwiIHRvPVxcXCI5MCA1MCA1MFxcXCIgZnJvbT1cXFwiMCA1MCA1MFxcXCIgYXR0cmlidXRlTmFtZT1cXFwidHJhbnNmb3JtXFxcIiAvPlwiICtcclxuICAgIFwiICAgIDwvcGF0aD5cIiArXHJcbiAgICBcIiAgPC9nPlwiICtcclxuICAgIFwiPC9zdmc+XCI7XHJcbnZhciB3YWl0SW1hZ2UgPSAkKFwiPGltZyAvPlwiKTtcclxud2FpdEltYWdlLmF0dHIoXCJzcmNcIiwgaG91cmdsYXNzKTtcclxudmFyIGlubmVyID0gJChcIjxkaXYgLz5cIik7XHJcbmlubmVyLmFwcGVuZCh3YWl0SW1hZ2UpO1xyXG5wbGVhc2VXYWl0LmFwcGVuZChpbm5lcik7XHJcblxyXG52YXIgd2FpdFNjcmVlbiA9IHtcclxuICAgIHNob3c6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAoJChcIiNcIiArIHBsZWFzZVdhaXRJZCkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcGxlYXNlV2FpdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbW1vbi5ib2R5LmFwcGVuZChwbGVhc2VXYWl0KTtcclxuICAgICAgICByZXR1cm4gcGxlYXNlV2FpdDtcclxuICAgIH0sXHJcbiAgICBoaWRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcGxlYXNlV2FpdC5yZW1vdmUoKTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdhaXRTY3JlZW47XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovZ2l0L0VzcGFsaWVySlMvc3JjL2pzL2VzcGFsaWVyLndhaXRzY3JlZW4uanNcbiAqKi8iLCJ2YXIgYm9keSA9ICQoXCJib2R5XCIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgYm9keTogYm9keSxcclxuICAgIHdpbmRvdzogJCh3aW5kb3cpLFxyXG4gICAgc2hvd1ZlbGx1bTogZnVuY3Rpb24oKSB7XHJcbiAgICBcdGlmKCQoXCIuZXNwYWxpZXItdmVsbHVtXCIpLmxlbmd0aCA+IDApIHtcclxuICAgIFx0XHRyZXR1cm47XHJcbiAgICBcdH1cclxuXHJcbiAgICAgICAgdmFyIHZlbGx1bSA9ICQoXCI8ZGl2IGNsYXNzPVxcXCJlc3BhbGllci12ZWxsdW1cXFwiIC8+XCIpO1xyXG4gICAgICAgIGJvZHkuYXBwZW5kKHZlbGx1bSk7XHJcbiAgICB9LFxyXG4gICAgaGlkZVZlbGx1bTogZnVuY3Rpb24oKSB7XHJcbiAgICBcdCQoXCIuZXNwYWxpZXItdmVsbHVtXCIpLnJlbW92ZSgpO1xyXG4gICAgfVxyXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L2dpdC9Fc3BhbGllckpTL3NyYy9qcy9lc3BhbGllci5jb21tb24uanNcbiAqKi8iLCIvKlxuQ29weXJpZ2h0IChjKSAyMDEwLDIwMTEsMjAxMiwyMDEzLDIwMTQgTW9yZ2FuIFJvZGVyaWNrIGh0dHA6Ly9yb2Rlcmljay5ka1xuTGljZW5zZTogTUlUIC0gaHR0cDovL21yZ25yZHJjay5taXQtbGljZW5zZS5vcmdcblxuaHR0cHM6Ly9naXRodWIuY29tL21yb2Rlcmljay9QdWJTdWJKU1xuKi9cbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSl7XG5cdCd1c2Ugc3RyaWN0JztcblxuICAgIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpe1xuICAgICAgICAvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUuXG4gICAgICAgIGRlZmluZShbJ2V4cG9ydHMnXSwgZmFjdG9yeSk7XG5cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jyl7XG4gICAgICAgIC8vIENvbW1vbkpTXG4gICAgICAgIGZhY3RvcnkoZXhwb3J0cyk7XG5cbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBCcm93c2VyIGdsb2JhbHNcbiAgICAgICAgdmFyIFB1YlN1YiA9IHt9O1xuICAgICAgICByb290LlB1YlN1YiA9IFB1YlN1YjtcbiAgICAgICAgZmFjdG9yeShQdWJTdWIpO1xuICAgIH1cbn0oKCB0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JyAmJiB3aW5kb3cgKSB8fCB0aGlzLCBmdW5jdGlvbiAoUHViU3ViKXtcblx0J3VzZSBzdHJpY3QnO1xuXG5cdHZhciBtZXNzYWdlcyA9IHt9LFxuXHRcdGxhc3RVaWQgPSAtMTtcblxuXHRmdW5jdGlvbiBoYXNLZXlzKG9iail7XG5cdFx0dmFyIGtleTtcblxuXHRcdGZvciAoa2V5IGluIG9iail7XG5cdFx0XHRpZiAoIG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpICl7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHQvKipcblx0ICpcdFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IHRocm93cyB0aGUgcGFzc2VkIGV4Y2VwdGlvbiwgZm9yIHVzZSBhcyBhcmd1bWVudCBmb3Igc2V0VGltZW91dFxuXHQgKlx0QHBhcmFtIHsgT2JqZWN0IH0gZXggQW4gRXJyb3Igb2JqZWN0XG5cdCAqL1xuXHRmdW5jdGlvbiB0aHJvd0V4Y2VwdGlvbiggZXggKXtcblx0XHRyZXR1cm4gZnVuY3Rpb24gcmVUaHJvd0V4Y2VwdGlvbigpe1xuXHRcdFx0dGhyb3cgZXg7XG5cdFx0fTtcblx0fVxuXG5cdGZ1bmN0aW9uIGNhbGxTdWJzY3JpYmVyV2l0aERlbGF5ZWRFeGNlcHRpb25zKCBzdWJzY3JpYmVyLCBtZXNzYWdlLCBkYXRhICl7XG5cdFx0dHJ5IHtcblx0XHRcdHN1YnNjcmliZXIoIG1lc3NhZ2UsIGRhdGEgKTtcblx0XHR9IGNhdGNoKCBleCApe1xuXHRcdFx0c2V0VGltZW91dCggdGhyb3dFeGNlcHRpb24oIGV4ICksIDApO1xuXHRcdH1cblx0fVxuXG5cdGZ1bmN0aW9uIGNhbGxTdWJzY3JpYmVyV2l0aEltbWVkaWF0ZUV4Y2VwdGlvbnMoIHN1YnNjcmliZXIsIG1lc3NhZ2UsIGRhdGEgKXtcblx0XHRzdWJzY3JpYmVyKCBtZXNzYWdlLCBkYXRhICk7XG5cdH1cblxuXHRmdW5jdGlvbiBkZWxpdmVyTWVzc2FnZSggb3JpZ2luYWxNZXNzYWdlLCBtYXRjaGVkTWVzc2FnZSwgZGF0YSwgaW1tZWRpYXRlRXhjZXB0aW9ucyApe1xuXHRcdHZhciBzdWJzY3JpYmVycyA9IG1lc3NhZ2VzW21hdGNoZWRNZXNzYWdlXSxcblx0XHRcdGNhbGxTdWJzY3JpYmVyID0gaW1tZWRpYXRlRXhjZXB0aW9ucyA/IGNhbGxTdWJzY3JpYmVyV2l0aEltbWVkaWF0ZUV4Y2VwdGlvbnMgOiBjYWxsU3Vic2NyaWJlcldpdGhEZWxheWVkRXhjZXB0aW9ucyxcblx0XHRcdHM7XG5cblx0XHRpZiAoICFtZXNzYWdlcy5oYXNPd25Qcm9wZXJ0eSggbWF0Y2hlZE1lc3NhZ2UgKSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRmb3IgKHMgaW4gc3Vic2NyaWJlcnMpe1xuXHRcdFx0aWYgKCBzdWJzY3JpYmVycy5oYXNPd25Qcm9wZXJ0eShzKSl7XG5cdFx0XHRcdGNhbGxTdWJzY3JpYmVyKCBzdWJzY3JpYmVyc1tzXSwgb3JpZ2luYWxNZXNzYWdlLCBkYXRhICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0ZnVuY3Rpb24gY3JlYXRlRGVsaXZlcnlGdW5jdGlvbiggbWVzc2FnZSwgZGF0YSwgaW1tZWRpYXRlRXhjZXB0aW9ucyApe1xuXHRcdHJldHVybiBmdW5jdGlvbiBkZWxpdmVyTmFtZXNwYWNlZCgpe1xuXHRcdFx0dmFyIHRvcGljID0gU3RyaW5nKCBtZXNzYWdlICksXG5cdFx0XHRcdHBvc2l0aW9uID0gdG9waWMubGFzdEluZGV4T2YoICcuJyApO1xuXG5cdFx0XHQvLyBkZWxpdmVyIHRoZSBtZXNzYWdlIGFzIGl0IGlzIG5vd1xuXHRcdFx0ZGVsaXZlck1lc3NhZ2UobWVzc2FnZSwgbWVzc2FnZSwgZGF0YSwgaW1tZWRpYXRlRXhjZXB0aW9ucyk7XG5cblx0XHRcdC8vIHRyaW0gdGhlIGhpZXJhcmNoeSBhbmQgZGVsaXZlciBtZXNzYWdlIHRvIGVhY2ggbGV2ZWxcblx0XHRcdHdoaWxlKCBwb3NpdGlvbiAhPT0gLTEgKXtcblx0XHRcdFx0dG9waWMgPSB0b3BpYy5zdWJzdHIoIDAsIHBvc2l0aW9uICk7XG5cdFx0XHRcdHBvc2l0aW9uID0gdG9waWMubGFzdEluZGV4T2YoJy4nKTtcblx0XHRcdFx0ZGVsaXZlck1lc3NhZ2UoIG1lc3NhZ2UsIHRvcGljLCBkYXRhLCBpbW1lZGlhdGVFeGNlcHRpb25zICk7XG5cdFx0XHR9XG5cdFx0fTtcblx0fVxuXG5cdGZ1bmN0aW9uIG1lc3NhZ2VIYXNTdWJzY3JpYmVycyggbWVzc2FnZSApe1xuXHRcdHZhciB0b3BpYyA9IFN0cmluZyggbWVzc2FnZSApLFxuXHRcdFx0Zm91bmQgPSBCb29sZWFuKG1lc3NhZ2VzLmhhc093blByb3BlcnR5KCB0b3BpYyApICYmIGhhc0tleXMobWVzc2FnZXNbdG9waWNdKSksXG5cdFx0XHRwb3NpdGlvbiA9IHRvcGljLmxhc3RJbmRleE9mKCAnLicgKTtcblxuXHRcdHdoaWxlICggIWZvdW5kICYmIHBvc2l0aW9uICE9PSAtMSApe1xuXHRcdFx0dG9waWMgPSB0b3BpYy5zdWJzdHIoIDAsIHBvc2l0aW9uICk7XG5cdFx0XHRwb3NpdGlvbiA9IHRvcGljLmxhc3RJbmRleE9mKCAnLicgKTtcblx0XHRcdGZvdW5kID0gQm9vbGVhbihtZXNzYWdlcy5oYXNPd25Qcm9wZXJ0eSggdG9waWMgKSAmJiBoYXNLZXlzKG1lc3NhZ2VzW3RvcGljXSkpO1xuXHRcdH1cblxuXHRcdHJldHVybiBmb3VuZDtcblx0fVxuXG5cdGZ1bmN0aW9uIHB1Ymxpc2goIG1lc3NhZ2UsIGRhdGEsIHN5bmMsIGltbWVkaWF0ZUV4Y2VwdGlvbnMgKXtcblx0XHR2YXIgZGVsaXZlciA9IGNyZWF0ZURlbGl2ZXJ5RnVuY3Rpb24oIG1lc3NhZ2UsIGRhdGEsIGltbWVkaWF0ZUV4Y2VwdGlvbnMgKSxcblx0XHRcdGhhc1N1YnNjcmliZXJzID0gbWVzc2FnZUhhc1N1YnNjcmliZXJzKCBtZXNzYWdlICk7XG5cblx0XHRpZiAoICFoYXNTdWJzY3JpYmVycyApe1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmICggc3luYyA9PT0gdHJ1ZSApe1xuXHRcdFx0ZGVsaXZlcigpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzZXRUaW1lb3V0KCBkZWxpdmVyLCAwICk7XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0LyoqXG5cdCAqXHRQdWJTdWIucHVibGlzaCggbWVzc2FnZVssIGRhdGFdICkgLT4gQm9vbGVhblxuXHQgKlx0LSBtZXNzYWdlIChTdHJpbmcpOiBUaGUgbWVzc2FnZSB0byBwdWJsaXNoXG5cdCAqXHQtIGRhdGE6IFRoZSBkYXRhIHRvIHBhc3MgdG8gc3Vic2NyaWJlcnNcblx0ICpcdFB1Ymxpc2hlcyB0aGUgdGhlIG1lc3NhZ2UsIHBhc3NpbmcgdGhlIGRhdGEgdG8gaXQncyBzdWJzY3JpYmVyc1xuXHQqKi9cblx0UHViU3ViLnB1Ymxpc2ggPSBmdW5jdGlvbiggbWVzc2FnZSwgZGF0YSApe1xuXHRcdHJldHVybiBwdWJsaXNoKCBtZXNzYWdlLCBkYXRhLCBmYWxzZSwgUHViU3ViLmltbWVkaWF0ZUV4Y2VwdGlvbnMgKTtcblx0fTtcblxuXHQvKipcblx0ICpcdFB1YlN1Yi5wdWJsaXNoU3luYyggbWVzc2FnZVssIGRhdGFdICkgLT4gQm9vbGVhblxuXHQgKlx0LSBtZXNzYWdlIChTdHJpbmcpOiBUaGUgbWVzc2FnZSB0byBwdWJsaXNoXG5cdCAqXHQtIGRhdGE6IFRoZSBkYXRhIHRvIHBhc3MgdG8gc3Vic2NyaWJlcnNcblx0ICpcdFB1Ymxpc2hlcyB0aGUgdGhlIG1lc3NhZ2Ugc3luY2hyb25vdXNseSwgcGFzc2luZyB0aGUgZGF0YSB0byBpdCdzIHN1YnNjcmliZXJzXG5cdCoqL1xuXHRQdWJTdWIucHVibGlzaFN5bmMgPSBmdW5jdGlvbiggbWVzc2FnZSwgZGF0YSApe1xuXHRcdHJldHVybiBwdWJsaXNoKCBtZXNzYWdlLCBkYXRhLCB0cnVlLCBQdWJTdWIuaW1tZWRpYXRlRXhjZXB0aW9ucyApO1xuXHR9O1xuXG5cdC8qKlxuXHQgKlx0UHViU3ViLnN1YnNjcmliZSggbWVzc2FnZSwgZnVuYyApIC0+IFN0cmluZ1xuXHQgKlx0LSBtZXNzYWdlIChTdHJpbmcpOiBUaGUgbWVzc2FnZSB0byBzdWJzY3JpYmUgdG9cblx0ICpcdC0gZnVuYyAoRnVuY3Rpb24pOiBUaGUgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIGEgbmV3IG1lc3NhZ2UgaXMgcHVibGlzaGVkXG5cdCAqXHRTdWJzY3JpYmVzIHRoZSBwYXNzZWQgZnVuY3Rpb24gdG8gdGhlIHBhc3NlZCBtZXNzYWdlLiBFdmVyeSByZXR1cm5lZCB0b2tlbiBpcyB1bmlxdWUgYW5kIHNob3VsZCBiZSBzdG9yZWQgaWZcblx0ICpcdHlvdSBuZWVkIHRvIHVuc3Vic2NyaWJlXG5cdCoqL1xuXHRQdWJTdWIuc3Vic2NyaWJlID0gZnVuY3Rpb24oIG1lc3NhZ2UsIGZ1bmMgKXtcblx0XHRpZiAoIHR5cGVvZiBmdW5jICE9PSAnZnVuY3Rpb24nKXtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBtZXNzYWdlIGlzIG5vdCByZWdpc3RlcmVkIHlldFxuXHRcdGlmICggIW1lc3NhZ2VzLmhhc093blByb3BlcnR5KCBtZXNzYWdlICkgKXtcblx0XHRcdG1lc3NhZ2VzW21lc3NhZ2VdID0ge307XG5cdFx0fVxuXG5cdFx0Ly8gZm9yY2luZyB0b2tlbiBhcyBTdHJpbmcsIHRvIGFsbG93IGZvciBmdXR1cmUgZXhwYW5zaW9ucyB3aXRob3V0IGJyZWFraW5nIHVzYWdlXG5cdFx0Ly8gYW5kIGFsbG93IGZvciBlYXN5IHVzZSBhcyBrZXkgbmFtZXMgZm9yIHRoZSAnbWVzc2FnZXMnIG9iamVjdFxuXHRcdHZhciB0b2tlbiA9ICd1aWRfJyArIFN0cmluZygrK2xhc3RVaWQpO1xuXHRcdG1lc3NhZ2VzW21lc3NhZ2VdW3Rva2VuXSA9IGZ1bmM7XG5cblx0XHQvLyByZXR1cm4gdG9rZW4gZm9yIHVuc3Vic2NyaWJpbmdcblx0XHRyZXR1cm4gdG9rZW47XG5cdH07XG5cblx0LyogUHVibGljOiBDbGVhcnMgYWxsIHN1YnNjcmlwdGlvbnNcblx0ICovXG5cdFB1YlN1Yi5jbGVhckFsbFN1YnNjcmlwdGlvbnMgPSBmdW5jdGlvbiBjbGVhckFsbFN1YnNjcmlwdGlvbnMoKXtcblx0XHRtZXNzYWdlcyA9IHt9O1xuXHR9O1xuXG5cdC8qUHVibGljOiBDbGVhciBzdWJzY3JpcHRpb25zIGJ5IHRoZSB0b3BpY1xuXHQqL1xuXHRQdWJTdWIuY2xlYXJTdWJzY3JpcHRpb25zID0gZnVuY3Rpb24gY2xlYXJTdWJzY3JpcHRpb25zKHRvcGljKXtcblx0XHR2YXIgbTsgXG5cdFx0Zm9yIChtIGluIG1lc3NhZ2VzKXtcblx0XHRcdGlmIChtZXNzYWdlcy5oYXNPd25Qcm9wZXJ0eShtKSAmJiBtLmluZGV4T2YodG9waWMpID09PSAwKXtcblx0XHRcdFx0ZGVsZXRlIG1lc3NhZ2VzW21dO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHQvKiBQdWJsaWM6IHJlbW92ZXMgc3Vic2NyaXB0aW9ucy5cblx0ICogV2hlbiBwYXNzZWQgYSB0b2tlbiwgcmVtb3ZlcyBhIHNwZWNpZmljIHN1YnNjcmlwdGlvbi5cblx0ICogV2hlbiBwYXNzZWQgYSBmdW5jdGlvbiwgcmVtb3ZlcyBhbGwgc3Vic2NyaXB0aW9ucyBmb3IgdGhhdCBmdW5jdGlvblxuXHQgKiBXaGVuIHBhc3NlZCBhIHRvcGljLCByZW1vdmVzIGFsbCBzdWJzY3JpcHRpb25zIGZvciB0aGF0IHRvcGljIChoaWVyYXJjaHkpXG5cdCAqXG5cdCAqIHZhbHVlIC0gQSB0b2tlbiwgZnVuY3Rpb24gb3IgdG9waWMgdG8gdW5zdWJzY3JpYmUuXG5cdCAqXG5cdCAqIEV4YW1wbGVzXG5cdCAqXG5cdCAqXHRcdC8vIEV4YW1wbGUgMSAtIHVuc3Vic2NyaWJpbmcgd2l0aCBhIHRva2VuXG5cdCAqXHRcdHZhciB0b2tlbiA9IFB1YlN1Yi5zdWJzY3JpYmUoJ215dG9waWMnLCBteUZ1bmMpO1xuXHQgKlx0XHRQdWJTdWIudW5zdWJzY3JpYmUodG9rZW4pO1xuXHQgKlxuXHQgKlx0XHQvLyBFeGFtcGxlIDIgLSB1bnN1YnNjcmliaW5nIHdpdGggYSBmdW5jdGlvblxuXHQgKlx0XHRQdWJTdWIudW5zdWJzY3JpYmUobXlGdW5jKTtcblx0ICpcblx0ICpcdFx0Ly8gRXhhbXBsZSAzIC0gdW5zdWJzY3JpYmluZyBhIHRvcGljXG5cdCAqXHRcdFB1YlN1Yi51bnN1YnNjcmliZSgnbXl0b3BpYycpO1xuXHQgKi9cblx0UHViU3ViLnVuc3Vic2NyaWJlID0gZnVuY3Rpb24odmFsdWUpe1xuXHRcdHZhciBpc1RvcGljICAgID0gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiBtZXNzYWdlcy5oYXNPd25Qcm9wZXJ0eSh2YWx1ZSksXG5cdFx0XHRpc1Rva2VuICAgID0gIWlzVG9waWMgJiYgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyxcblx0XHRcdGlzRnVuY3Rpb24gPSB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbicsXG5cdFx0XHRyZXN1bHQgPSBmYWxzZSxcblx0XHRcdG0sIG1lc3NhZ2UsIHQ7XG5cblx0XHRpZiAoaXNUb3BpYyl7XG5cdFx0XHRkZWxldGUgbWVzc2FnZXNbdmFsdWVdO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGZvciAoIG0gaW4gbWVzc2FnZXMgKXtcblx0XHRcdGlmICggbWVzc2FnZXMuaGFzT3duUHJvcGVydHkoIG0gKSApe1xuXHRcdFx0XHRtZXNzYWdlID0gbWVzc2FnZXNbbV07XG5cblx0XHRcdFx0aWYgKCBpc1Rva2VuICYmIG1lc3NhZ2VbdmFsdWVdICl7XG5cdFx0XHRcdFx0ZGVsZXRlIG1lc3NhZ2VbdmFsdWVdO1xuXHRcdFx0XHRcdHJlc3VsdCA9IHZhbHVlO1xuXHRcdFx0XHRcdC8vIHRva2VucyBhcmUgdW5pcXVlLCBzbyB3ZSBjYW4ganVzdCBzdG9wIGhlcmVcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChpc0Z1bmN0aW9uKSB7XG5cdFx0XHRcdFx0Zm9yICggdCBpbiBtZXNzYWdlICl7XG5cdFx0XHRcdFx0XHRpZiAobWVzc2FnZS5oYXNPd25Qcm9wZXJ0eSh0KSAmJiBtZXNzYWdlW3RdID09PSB2YWx1ZSl7XG5cdFx0XHRcdFx0XHRcdGRlbGV0ZSBtZXNzYWdlW3RdO1xuXHRcdFx0XHRcdFx0XHRyZXN1bHQgPSB0cnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiByZXN1bHQ7XG5cdH07XG59KSk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9naXQvRXNwYWxpZXJKUy9+L3B1YnN1Yi1qcy9zcmMvcHVic3ViLmpzXG4gKiovIiwidmFyIHRlbXBsYXRlcyA9IHtcclxuXHRtZXNzYWdlOiBmdW5jdGlvbihkYXRhKSB7XHJcblx0XHR2YXIgcm9vdCA9ICQoXCI8ZGl2IC8+XCIpO1xyXG5cdFx0cm9vdC5hZGRDbGFzcyhkYXRhLm1lc3NhZ2VDb250YWluZXJDbGFzcyk7XHJcblx0XHRyb290LmFkZENsYXNzKGRhdGEubWVzc2FnZVR5cGVDbGFzcyk7XHJcblx0XHRyb290LmFkZENsYXNzKGRhdGEubWVzc2FnZUF0dGFjaG1lbnRDbGFzcyk7XHJcblxyXG5cdFx0dmFyIGNsb3NlQnV0dG9uID0gJChcIjxhIC8+XCIpO1xyXG5cdFx0Y2xvc2VCdXR0b24uYXR0cihcImhyZWZcIiwgXCJqYXZhc2NyaXB0OiB2b2lkKDApO1wiKTtcclxuXHRcdGNsb3NlQnV0dG9uLmFkZENsYXNzKGRhdGEuY2xvc2VNZXNzYWdlQ2xhc3MpO1xyXG5cclxuXHRcdHJvb3QuYXBwZW5kKGNsb3NlQnV0dG9uKTtcclxuXHJcblx0XHRpZiAoZGF0YS5tb3JlVGhhbk9uZSkge1xyXG5cdFx0XHR2YXIgbGlzdCA9ICQoXCI8dWwgLz5cIik7XHJcblxyXG5cdFx0XHQkLmVhY2goZGF0YS5tZXNzYWdlcywgZnVuY3Rpb24oaW5kZXgsIG1lc3NhZ2UpIHtcclxuXHRcdFx0XHRsaXN0LmFwcGVuZChcIjxsaT5cIiArIG1lc3NhZ2UgKyBcIjwvbGk+XCIpO1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHJvb3QuYXBwZW5kKGxpc3QpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cm9vdC5hcHBlbmQoXCI8cD5cIiArIGRhdGEubWVzc2FnZXMgKyBcIjwvcD5cIik7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHJvb3RbMF07XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB0ZW1wbGF0ZXM7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovZ2l0L0VzcGFsaWVySlMvc3JjL2pzL3RlbXBsYXRlcy9ib290c3RyYXBUZW1wbGF0ZXMuanNcbiAqKi8iLCJpbXBvcnQgY29yZSBmcm9tIFwiLi9lc3BhbGllci5jb3JlXCI7XHJcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tIFwiLi9lc3BhbGllci5mb3Jtcy5jb250cm9sXCI7XHJcblxyXG5jbGFzcyBFc3BhbGllckZvcm0ge1xyXG4gICAgY29uc3RydWN0b3IoZm9ybVRvV2lyZSwgYXJncykge1xyXG4gICAgICAgIGlmIChjb3JlLmlzU3RyaW5nKGZvcm1Ub1dpcmUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZm9ybSA9IGNvcmUuZmluZChmb3JtVG9XaXJlKVswXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmZvcm0gPSBmb3JtVG9XaXJlWzBdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHN1Ym1pdDogZmFsc2VcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBsZXQgb25FbnRlciA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgY29kZSA9IChldmVudC5rZXlDb2RlID8gZXZlbnQua2V5Q29kZSA6IGV2ZW50LndoaWNoKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjb2RlID09IDEzKSB7XHJcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0gY29yZS5leHRlbmQob3B0aW9ucywgYXJncyk7XHJcblxyXG4gICAgICAgIHRoaXMuZm9ybS5zZXRBdHRyaWJ1dGUoXCJub3ZhbGlkYXRlXCIsIFwiXCIpO1xyXG4gICAgICAgIHRoaXMuY29udHJvbHMgPSBuZXcgU2V0KCk7XHJcbiAgICAgICAgbGV0IHByb2Nlc3NlZENvbnRyb2xzID0gbmV3IFNldCgpO1xyXG4gICAgICAgIGxldCByYXdDb250cm9scyA9IGNvcmUuZmluZChcImlucHV0LCB0ZXh0YXJlYSwgc2VsZWN0XCIsIHRoaXMuZm9ybSk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGNvbnRyb2wgb2YgcmF3Q29udHJvbHMpIHtcclxuICAgICAgICAgICAgY29udHJvbC5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgb25FbnRlcik7XHJcbiAgICAgICAgICAgIHZhciBjb250cm9sVHlwZSA9IGNvbnRyb2wudHlwZSA/IGNvbnRyb2wudHlwZSA6IGNvbnRyb2wuZ2V0QXR0cmlidXRlKFwidHlwZVwiKTtcclxuICAgICAgICAgICAgdmFyIGxvd2VyQ2FzZUlkID0gY29udHJvbFR5cGUgPT0gXCJyYWRpb1wiID8gY29udHJvbC5uYW1lLnRvTG93ZXJDYXNlKCkgOiBjb250cm9sLmlkLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAocHJvY2Vzc2VkQ29udHJvbHMuaGFzKGxvd2VyQ2FzZUlkKSkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHByb2Nlc3NlZENvbnRyb2xzLmFkZChsb3dlckNhc2VJZCk7XHJcblxyXG4gICAgICAgICAgICBpZiAobG93ZXJDYXNlSWQgfHwgKGNvbnRyb2wudHlwZSA/IGNvbnRyb2wudHlwZSA6IGNvbnRyb2wuZ2V0QXR0cmlidXRlKFwidHlwZVwiKSkgPT0gXCJyYWRpb1wiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRyb2xzLmFkZChGb3JtQ29udHJvbChjb250cm9sKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvcmUuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLmZvcm0sIFwic3VibWl0XCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLnN1Ym1pdCgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgc3VibWl0QnV0dG9ucyA9IGNvcmUuZmluZChcIltkYXRhLWFjdGlvbj1cXFwic3VibWl0XFxcIl1cIiwgdGhpcy5mb3JtKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgc3VibWl0QnV0dG9uIG9mIHN1Ym1pdEJ1dHRvbnMpIHtcclxuICAgICAgICAgICAgY29yZS5hZGRFdmVudExpc3RlbmVyKHN1Ym1pdEJ1dHRvbiwgXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdWJtaXQoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgaGFzRm9jdXMgPSBjb3JlLmZpbmQoXCJbZGF0YS1mb2N1cz1cXFwidHJ1ZVxcXCJdXCIsIHRoaXMuZm9ybSk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGVsIG9mIGhhc0ZvY3VzKSB7XHJcbiAgICAgICAgICAgIGlmIChlbC5vZmZzZXRQYXJlbnQgPT09IG51bGwgfHwgZWwucmVhZE9ubHkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBlbC5mb2N1cygpO1xyXG4gICAgICAgICAgICBlbC5zZWxlY3QoKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN1Ym1pdCgpIHtcclxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnN1Ym1pdCkge1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuc3VibWl0KCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnZhbGlkYXRlKCkpIHtcclxuICAgICAgICAgICAgbGV0IG1ldGhvZCA9IHRoaXMuZm9ybS5nZXRBdHRyaWJ1dGUoXCJtZXRob2RcIik7XHJcblxyXG4gICAgICAgICAgICBjb3JlLnNlbmRSZXF1ZXN0KHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IG1ldGhvZCA/IG1ldGhvZCA6IFwiR0VUXCIsXHJcbiAgICAgICAgICAgICAgICB1cmw6IHRoaXMuZm9ybS5nZXRBdHRyaWJ1dGUoXCJhY3Rpb25cIiksXHJcbiAgICAgICAgICAgICAgICBkYXRhOiAkKHRoaXMuZm9ybSkuc2VyaWFsaXplKCkgLy9UT0RPOiBSZW1vdmUgalF1ZXJ5LlxyXG4gICAgICAgICAgICB9KS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgb25TdWNjZXNzID0gdGhpcy5mb3JtLmdldEF0dHJpYnV0ZShcImRhdGEtc3VjY2Vzc1wiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAob25TdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29yZS5wdWJsaXNoKG9uU3VjY2VzcywgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB2YWxpZGF0ZSgpIHtcclxuICAgICAgICB2YXIgdmFsaWQgPSB0cnVlO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBjb250cm9sIG9mIHRoaXMuY29udHJvbHMpIHtcclxuICAgICAgICAgICAgY29udHJvbC5tZXNzYWdlLnJlbW92ZSgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFjb250cm9sLnZhbGlkYXRlKCkpIHtcclxuICAgICAgICAgICAgICAgIHZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB2YWxpZDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGZvcm1Ub1dpcmUsIGFyZ3MpIHtcclxuICAgIHJldHVybiBuZXcgRXNwYWxpZXJGb3JtKGZvcm1Ub1dpcmUsIGFyZ3MpO1xyXG59O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L2dpdC9Fc3BhbGllckpTL3NyYy9qcy9lc3BhbGllci5mb3Jtcy5qc1xuICoqLyIsImltcG9ydCBjb3JlIGZyb20gXCIuL2VzcGFsaWVyLmNvcmVcIjtcclxuaW1wb3J0IHsgUmVxdWlyZWQsIEVtYWlsLCBEYXRlLCBSZXF1aXJlZERlcGVuZGVudCB9IGZyb20gXCIuL2VzcGFsaWVyLnZhbGlkYXRpb25cIjtcclxuaW1wb3J0IG1lc3NhZ2VGYWN0b3J5IGZyb20gXCIuL2VzcGFsaWVyLm1lc3NhZ2VGYWN0b3J5XCI7XHJcblxyXG5jbGFzcyBGb3JtQ29udHJvbCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250cm9sLCBmb3JtLCB2YWxpZGF0aW9ucywgZXhwbGljaXRWYWxpZGF0aW9ucykge1xyXG4gICAgICAgIHZhciBjb250cm9sVHlwZSA9IGNvbnRyb2wudHlwZSA/IGNvbnRyb2wudHlwZSA6IGNvbnRyb2wuZ2V0QXR0cmlidXRlKFwidHlwZVwiKTtcclxuICAgICAgICB2YXIgbG93ZXJDYXNlSWQgPSBjb250cm9sVHlwZSA9PSBcInJhZGlvXCIgPyBjb250cm9sLm5hbWUudG9Mb3dlckNhc2UoKSA6IGNvbnRyb2wuaWQudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAgICAgaWYgKCFsb3dlckNhc2VJZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFbGVtZW50cyBtdXN0IGhhdmUgYW4gSWQgdG8gYmUgcHJvcGVybHkgd2lyZWQgdG8gYW4gRXNwYWxpZXIgZm9ybSBjb250cm9sLlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY29udHJvbCA9IGNvbnRyb2w7XHJcbiAgICAgICAgdGhpcy5mb3JtID0gZm9ybTtcclxuICAgICAgICB2YXIgZ3JvdXA7XHJcbiAgICAgICAgbGV0IHJlcXVpcmVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoY29udHJvbFR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcInJhZGlvXCI6XHJcbiAgICAgICAgICAgICAgICBncm91cCA9IGNvcmUuY2xvc2VzdChjb250cm9sLCBcIi5yYWRpby1ncm91cFwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgcmFkaW9zID0gY29yZS5maW5kKCdpbnB1dFt0eXBlPVwicmFkaW9cIl0nLCBncm91cCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgZGVwZW5kZW50cyA9IG5ldyBNYXAoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCByYWRpbyBvZiByYWRpb3MpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmFkaW8ucmVxdWlyZWQgfHwgcmFkaW8uZ2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29yZS5hZGRFdmVudExpc3RlbmVyKHJhZGlvLCBcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQga2V5IG9mIGRlcGVuZGVudHMua2V5cygpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBkZXBlbmRlbnQgb2YgZGVwZW5kZW50cy5nZXQoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlcGVuZGVudC5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZGVwZW5kZW50cy5oYXMocmFkaW8pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGRlcGVuZGVudCBvZiBkZXBlbmRlbnRzLmdldChyYWRpbykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlcGVuZGVudC5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlcXVpcmVkRGVwZW5kZW50c1NlbGVjdG9yID0gcmFkaW8uZ2V0QXR0cmlidXRlKFwiZGF0YS1yZXF1aXJlXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXJlcXVpcmVkRGVwZW5kZW50c1NlbGVjdG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlcXVpcmVkRGVwZW5kZW50cyA9IGNvcmUuZmluZChyZXF1aXJlZERlcGVuZGVudHNTZWxlY3RvciwgdGhpcy5mb3JtKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZGVwZW5kZW50Q29udHJvbHMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgcmVxdWlyZWREZXBlbmRlbnQgb2YgcmVxdWlyZWREZXBlbmRlbnRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkZXBlbmRlbnRDb250cm9sID0gZmFjdG9yeShyZXF1aXJlZERlcGVuZGVudCwgZm9ybSwgeyByZXF1aXJlZDogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbnMucHVzaChuZXcgUmVxdWlyZWREZXBlbmRlbnQodGhpcywgcmFkaW8udmFsdWUsIGRlcGVuZGVudENvbnRyb2wpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVwZW5kZW50Q29udHJvbC5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlcGVuZGVudENvbnRyb2xzLnB1c2goZGVwZW5kZW50Q29udHJvbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBkZXBlbmRlbnRzLnNldChyYWRpbywgZGVwZW5kZW50Q29udHJvbHMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJjaGVja2JveFwiOlxyXG4gICAgICAgICAgICAgICAgZ3JvdXAgPSBjb3JlLmNsb3Nlc3QoY29udHJvbCwgXCIuY2hlY2tib3hcIik7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImVtYWlsXCI6XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9ucy5wdXNoKG5ldyBFbWFpbCh0aGlzKSk7XHJcbiAgICAgICAgICAgICAgICBncm91cCA9IGNvcmUuY2xvc2VzdChjb250cm9sLCBcIi5mb3JtLWdyb3VwXCIpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJkYXRlXCI6XHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9ucy5wdXNoKG5ldyBEYXRlKHRoaXMpKTtcclxuICAgICAgICAgICAgICAgIGdyb3VwID0gY29yZS5jbG9zZXN0KGNvbnRyb2wsIFwiLmZvcm0tZ3JvdXBcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNvbnRyb2wuZGF0ZXBpY2tlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2wuZGF0ZXBpY2tlcigpLmF0dHIoXCJ0eXBlXCIsIFwidGV4dFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgZ3JvdXAgPSBjb3JlLmNsb3Nlc3QoY29udHJvbCwgXCIuZm9ybS1ncm91cFwiKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZUZhY3RvcnkuY3JlYXRlKHtcclxuICAgICAgICAgICAgYXR0YWNoVG86IGdyb3VwLFxyXG4gICAgICAgICAgICBtZXNzYWdlQXR0YWNobWVudDogbWVzc2FnZUZhY3RvcnkubWVzc2FnZUF0dGFjaG1lbnQuRmxvdyxcclxuICAgICAgICAgICAgb25SZW1vdmVkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBjb3JlLnJlbW92ZUNsYXNzKGdyb3VwLCBcImhhcy1lcnJvclwiKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25BZGRlZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgY29yZS5hZGRDbGFzcyhncm91cCwgXCJoYXMtZXJyb3JcIik7XHJcbiAgICAgICAgICAgICAgICAvL1RPRE86IEdldCByaWQgb2YgalF1ZXJ5XHJcbiAgICAgICAgICAgICAgICAkKGdyb3VwKS52ZWxvY2l0eShcImNhbGxvdXQudGFkYVwiLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDUwMFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5ncm91cCA9IGdyb3VwO1xyXG4gICAgICAgIHRoaXMub3JpZ2luYWxEaXNwbGF5ID0gdGhpcy5ncm91cC5zdHlsZS5kaXNwbGF5O1xyXG5cclxuICAgICAgICBpZiAoZXhwbGljaXRWYWxpZGF0aW9ucy5yZXF1aXJlZCB8fCByZXF1aXJlZCB8fCBjb250cm9sLnJlcXVpcmVkIHx8IGNvbnRyb2wuZ2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIikpIHtcclxuICAgICAgICAgICAgdmFsaWRhdGlvbnMucHVzaChuZXcgUmVxdWlyZWQodGhpcykpO1xyXG4gICAgICAgICAgICBjb3JlLmFkZENsYXNzKGdyb3VwLCBcInJlcXVpcmVkXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29udHJvbC5zZXRBdHRyaWJ1dGUobG93ZXJDYXNlSWQsIFwiXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhbCgpIHtcclxuICAgICAgICBsZXQgY29udHJvbFR5cGUgPSB0aGlzLmNvbnRyb2wudHlwZSA/IHRoaXMuY29udHJvbC50eXBlIDogdGhpcy5jb250cm9sLmdldEF0dHJpYnV0ZShcInR5cGVcIik7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoY29udHJvbFR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImNoZWNrYm94XCI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29yZS5tYXRjaGVzKHRoaXMuY29udHJvbCwgXCI6Y2hlY2tlZFwiKSA/IHRoaXMuY29udHJvbC52YWx1ZSA6IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgY2FzZSBcInJhZGlvXCI6XHJcbiAgICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWQgPSBjb3JlLmZpbmQoYFtuYW1lPVwiJHt0aGlzLmNvbnRyb2wubmFtZX1cIl06Y2hlY2tlZGApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGVjdGVkLmxlbmd0aCA9PSAxID8gc2VsZWN0ZWRbMF0udmFsdWUgOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb250cm9sLnZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoaWRlKCkge1xyXG4gICAgICAgIHRoaXMuZ3JvdXAuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3coKSB7XHJcbiAgICAgICAgdGhpcy5ncm91cC5zdHlsZS5kaXNwbGF5ID0gdGhpcy5vcmlnaW5hbERpc3BsYXk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmxldCBmYWN0b3J5ID0gZnVuY3Rpb24gKGNvbnRyb2wsIGZvcm0sIGV4cGxpY2l0VmFsaWRhdGlvbnMpIHtcclxuICAgIGV4cGxpY2l0VmFsaWRhdGlvbnMgPSBleHBsaWNpdFZhbGlkYXRpb25zID8gZXhwbGljaXRWYWxpZGF0aW9ucyA6IHt9O1xyXG4gICAgbGV0IHZhbGlkYXRpb25zID0gW107XHJcbiAgICBsZXQgZm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woY29udHJvbCwgZm9ybSwgdmFsaWRhdGlvbnMsIGV4cGxpY2l0VmFsaWRhdGlvbnMpO1xyXG5cclxuICAgIGZvcm1Db250cm9sLnZhbGlkYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBlcnJvcnMgPSBbXTtcclxuICAgICAgICBsZXQgaGFzRXJyb3JzID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmICh2YWxpZGF0aW9ucykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCB2YWxpZGF0aW9uIG9mIHZhbGlkYXRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXZhbGlkYXRpb24uaXNWYWxpZCgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFzRXJyb3JzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGlvbi5tZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5wdXNoKHZhbGlkYXRpb24ubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZXJyb3JzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZm9ybUNvbnRyb2wubWVzc2FnZS5zaG93KHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9ycyxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VUeXBlOiBtZXNzYWdlRmFjdG9yeS5tZXNzYWdlVHlwZS5FcnJvclxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAhaGFzRXJyb3JzO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gZm9ybUNvbnRyb2w7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmYWN0b3J5O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L2dpdC9Fc3BhbGllckpTL3NyYy9qcy9lc3BhbGllci5mb3Jtcy5jb250cm9sLmpzXG4gKiovIiwiaW1wb3J0IGNvcmUgZnJvbSBcIi4vZXNwYWxpZXIuY29yZVwiO1xyXG5pbXBvcnQgZm9ybUNvbnRyb2wgZnJvbSBcIi4vZXNwYWxpZXIuZm9ybXMuY29udHJvbFwiO1xyXG5cclxuY2xhc3MgVmFsaWRhdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250cm9sKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNWYWxpZCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNdXN0IGhhdmUgYW4gaXNWYWxpZCBtZXRob2QuXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubWVzc2FnZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNdXN0IGFkZCBhIG1lc3NhZ2UgcHJpb3IgdG8gY2FsbGluZyBzdXBlci5cIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNvbnRyb2wgPSBjb250cm9sO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBSZXF1aXJlZCBleHRlbmRzIFZhbGlkYXRpb24ge1xyXG4gICAgY29uc3RydWN0b3IoY29udHJvbCkge1xyXG4gICAgICAgIHN1cGVyKGNvbnRyb2wpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzVmFsaWQoKSB7XHJcbiAgICAgICAgcmV0dXJuICFjb3JlLmlzRW1wdHlPclNwYWNlcyh0aGlzLmNvbnRyb2wudmFsKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBtZXNzYWdlKCkge1xyXG4gICAgICAgIHJldHVybiBcIkZpZWxkIGlzIHJlcXVpcmVkLlwiO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBFbWFpbCBleHRlbmRzIFZhbGlkYXRpb24ge1xyXG4gICAgY29uc3RydWN0b3IoY29udHJvbCkge1xyXG4gICAgICAgIHN1cGVyKGNvbnRyb2wpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzVmFsaWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIGNvcmUuaXNFbWFpbCh0aGlzLmNvbnRyb2wudmFsKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBtZXNzYWdlKCkge1xyXG4gICAgICAgIHJldHVybiBcIkludmFsaWQgZW1haWwgYWRkcmVzcy5cIjtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgRGF0ZSBleHRlbmRzIFZhbGlkYXRpb24ge1xyXG4gICAgY29uc3RydWN0b3IoY29udHJvbCkge1xyXG4gICAgICAgIHN1cGVyKGNvbnRyb2wpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzVmFsaWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIGNvcmUuaXNEYXRlKHRoaXMuY29udHJvbC52YWwoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG1lc3NhZ2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiSW52YWxpZCBkYXRlLlwiO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBSZXF1aXJlZERlcGVuZGVudCBleHRlbmRzIFZhbGlkYXRpb24ge1xyXG4gICAgY29uc3RydWN0b3IoY29udHJvbCwgd2hlblZhbCwgZGVwZW5kZW50KSB7XHJcbiAgICAgICAgc3VwZXIoY29udHJvbCk7XHJcbiAgICAgICAgdGhpcy53aGVuVmFsID0gd2hlblZhbDtcclxuICAgICAgICB0aGlzLmRlcGVuZGVudCA9IGRlcGVuZGVudDtcclxuICAgIH1cclxuXHJcbiAgICBpc1ZhbGlkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRyb2wudmFsKCkgIT09IHRoaXMud2hlblZhbCB8fCB0aGlzLmNvbnRyb2wudmFsKCkgPT09IHRoaXMud2hlblZhbCAmJiB0aGlzLmRlcGVuZGVudC52YWxpZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBtZXNzYWdlKCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHsgUmVxdWlyZWQsIEVtYWlsLCBEYXRlLCBSZXF1aXJlZERlcGVuZGVudCB9O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L2dpdC9Fc3BhbGllckpTL3NyYy9qcy9lc3BhbGllci52YWxpZGF0aW9uLmpzXG4gKiovIiwiaW1wb3J0IGNvcmUgZnJvbSBcIi4vZXNwYWxpZXIuY29yZVwiO1xyXG5pbXBvcnQgY29tbW9uIGZyb20gXCIuL2VzcGFsaWVyLmNvbW1vblwiO1xyXG5cclxuY2xhc3MgRGlhbG9nIHtcclxuICAgIGNvbnN0cnVjdG9yKGFyZ3MpIHtcclxuICAgICAgICB0aGlzLnNldHRpbmdzID0ge1xyXG4gICAgICAgICAgICBlbGVtZW50OiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgIGJ1dHRvbnM6IFtdXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgJC5leHRlbmQodGhpcy5zZXR0aW5ncywgYXJncyk7XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5zZXR0aW5ncy5lbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIllvdSBtdXN0IHBhc3MgYW4gZWxlbWVudC5cIik7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNldHRpbmdzLmVsZW1lbnQubGVuZ3RoICE9PSAxKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImVsZW1lbnQgbXVzdCBoYXZlIGV4YWN0bHkgb25lIHJvb3QgZWxlbWVudC5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNob3coKSB7XHJcbiAgICAgICAgY29yZS5oaWRlTWFpbk1lc3NhZ2UoKTtcclxuICAgICAgICBjb21tb24uc2hvd1ZlbGx1bSgpO1xyXG4gICAgICAgIGxldCBkaWFsb2cgPSB0aGlzLnNldHRpbmdzLmVsZW1lbnQ7XHJcbiAgICAgICAgZGlhbG9nLmNzcyhcInBvc2l0aW9uXCIsIFwiYWJzb2x1dGVcIik7XHJcbiAgICAgICAgY29tbW9uLmJvZHkuYXBwZW5kKGRpYWxvZyk7XHJcbiAgICAgICAgdGhpcy5jZW50ZXIoKTtcclxuICAgICAgICBkaWFsb2cuY3NzKFwiZGlzcGxheVwiLCBcIm5vbmVcIik7XHJcblxyXG4gICAgICAgIGRpYWxvZy52ZWxvY2l0eShcInRyYW5zaXRpb24ud2hpcmxJblwiLCB7XHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiA0NTBcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29yZS5hZGRFdmVudExpc3RlbmVyKGRpYWxvZ1swXSwgXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZm9yIChsZXQgYnV0dG9uIG9mIHRoaXMuc2V0dGluZ3MuYnV0dG9ucykge1xyXG4gICAgICAgICAgICAgICAgLy9UT0RPOiBNYXliZSBpcyBhIHNlbGVjdG9yIGluc3RlYWQ/XHJcbiAgICAgICAgICAgICAgICBpZiAoYnV0dG9uLmlkID09PSBldmVudC50YXJnZXQuaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBidXR0b24uaGFuZGxlcih0aGlzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBoaWRlKCkge1xyXG4gICAgICAgIHZhciBkaWFsb2cgPSAkKHRoaXMuc2V0dGluZ3MuZWxlbWVudCk7XHJcbiAgICAgICAgZGlhbG9nLnZlbG9jaXR5KFwidHJhbnNpdGlvbi53aGlybE91dFwiLCB7XHJcbiAgICAgICAgICAgIGR1cmF0aW9uOiAxNTAsXHJcbiAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBkaWFsb2cucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgICAgICAkKFwiI25vdGlmaWNhdGlvbk1lc3NhZ2VcIikucmVtb3ZlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCQoXCIuZGlhbG9nXCIpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tbW9uLmhpZGVWZWxsdW0oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGNlbnRlcigpIHtcclxuICAgICAgICBsZXQgd2luZG93SGVpZ2h0ID0gY29tbW9uLndpbmRvdy5oZWlnaHQoKTtcclxuICAgICAgICBsZXQgZGlhbG9nID0gdGhpcy5zZXR0aW5ncy5lbGVtZW50O1xyXG4gICAgICAgIGxldCBzY3JvbGxUb3AgPSBjb21tb24ud2luZG93LnNjcm9sbFRvcCgpO1xyXG4gICAgICAgIGxldCBoZWlnaHQgPSBkaWFsb2cuaGVpZ2h0KCk7XHJcbiAgICAgICAgbGV0IHRvcCA9ICh3aW5kb3dIZWlnaHQgLyAyKSAtIChoZWlnaHQgLyAyKSArIHNjcm9sbFRvcDtcclxuICAgICAgICB0b3AgPSB0b3AgPiAwID8gdG9wIDogMDtcclxuICAgICAgICBkaWFsb2cuY3NzKFwidG9wXCIsIHRvcCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChhcmdzKSB7XHJcbiAgICByZXR1cm4gbmV3IERpYWxvZyhhcmdzKTtcclxufVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIEM6L2dpdC9Fc3BhbGllckpTL3NyYy9qcy9lc3BhbGllci5kaWFsb2cuanNcbiAqKi8iLCJpbXBvcnQgY29yZSBmcm9tIFwiLi9lc3BhbGllci5jb3JlXCI7XHJcblxyXG5sZXQga2V5cyA9IHtcclxuICAgIGNvbnRhaW5lcjogbmV3IE9iamVjdCgpLFxyXG4gICAgcmVzdWx0OiBuZXcgT2JqZWN0KCksXHJcbiAgICBjdXJyZW50U3RlcDogbmV3IE9iamVjdCgpLFxyXG4gICAgc3RlcHM6IG5ldyBPYmplY3QoKSxcclxuICAgIHRyYW5zdmVyc2VkOiBuZXcgT2JqZWN0KClcclxufVxyXG5cclxuY2xhc3MgR3JhcGgge1xyXG4gICAgY29uc3RydWN0b3IoYXJncykge1xyXG4gICAgICAgIHRoaXMuX2ludGVybmFscyA9IG5ldyBXZWFrTWFwKCk7XHJcblxyXG4gICAgICAgIGlmICghYXJncy5jb250YWluZXIubm9kZU5hbWUpIHtcclxuICAgICAgICAgICAgLy9OT1RFOiBUaGlzIGlzIHByb2JhYmx5IGEgalF1ZXJ5IHNlbGVjdGlvbiBhcnJheS5cclxuICAgICAgICAgICAgYXJncy5jb250YWluZXIgPSBhcmdzLmNvbnRhaW5lclswXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2ludGVybmFscy5zZXQoa2V5cy5jb250YWluZXIsIGFyZ3MuY29udGFpbmVyKTtcclxuICAgICAgICB0aGlzLl9pbnRlcm5hbHMuc2V0KGtleXMucmVzdWx0LCBjb3JlLmV4dGVuZChhcmdzLmRlZmF1bHQsIHt9KSk7XHJcbiAgICAgICAgdGhpcy5faW50ZXJuYWxzLnNldChrZXlzLmN1cnJlbnRTdGVwLCBhcmdzLmhlYWQpO1xyXG4gICAgICAgIHRoaXMuX2ludGVybmFscy5zZXQoa2V5cy5zdGVwcywgYXJncy5zdGVwcyk7XHJcbiAgICAgICAgdGhpcy5faW50ZXJuYWxzLnNldChrZXlzLnRyYW5zdmVyc2VkLCBbXSk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IHN0ZXAgb2YgYXJncy5zdGVwcykge1xyXG4gICAgICAgICAgICBzdGVwLmNzc0NsYXNzID0gXCJncmFwaC1zdGVwLW5vdC1zdGFydGVkXCI7XHJcbiAgICAgICAgICAgIHN0ZXAuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBzdGVwLnN0YXR1cyA9IFwiTm90IHN0YXJ0ZWRcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFyZ3Muc3RlcHNbMF0uY3NzQ2xhc3MgPSBcImdyYXBoLXN0ZXAtaW4tcHJvZ3Jlc3NcIjtcclxuICAgICAgICBhcmdzLnN0ZXBzWzBdLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgYXJncy5zdGVwc1swXS5zdGF0dXMgPSBcIkluIHByb2dyZXNzXCI7XHJcblxyXG4gICAgICAgIHRoaXMuX2ludGVybmFscy5nZXQoa2V5cy5jdXJyZW50U3RlcCkucmVuZGVySW4odGhpcy5faW50ZXJuYWxzLmdldChrZXlzLmNvbnRhaW5lciksIHRoaXMuX2ludGVybmFscy5nZXQoa2V5cy5yZXN1bHQpLCBhcmdzLnN0ZXBzKTtcclxuXHJcbiAgICAgICAgY29yZS5hZGRFdmVudExpc3RlbmVyKHRoaXMuX2ludGVybmFscy5nZXQoa2V5cy5jb250YWluZXIpLCBcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBldmVudCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtZ3JhcGgtZXZlbnRcIik7XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwibmV4dFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJiYWNrXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmV2aW91cygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgZ290byhpbmRleCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vdCBpbXBsZW1lbnRlZCB5ZXQuLi5cIik7XHJcbiAgICAgICAgLy8gICAgICAgICBsZXQgdHJhbnN2ZXJzZWQgPSB0aGlzLl9pbnRlcm5hbHMuZ2V0KGtleXMudHJhbnN2ZXJzZWQpO1xyXG4gICAgICAgIC8vIFxyXG4gICAgICAgIC8vICAgICAgICAgaWYgKGluZGV4ID09PSB0aGlzLmN1cnJlbnRJbmRleCkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyBcclxuICAgICAgICAvLyAgICAgICAgIGlmIChpbmRleCA+IHRoaXMuY3VycmVudEluZGV4KSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVXNlIHRoZSBuZXh0IG1ldGhvZCB0byBtb3ZlIGZvcndhcmQgaW4gdGhlIHdpemFyZC5cIik7XHJcbiAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgLy8gXHJcbiAgICAgICAgLy8gICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5jdXJyZW50SW5kZXg7IGkgPj0gaW5kZXg7IGktLSkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIFxyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgIC8vIFxyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jdXJyZW50SW5kZXggPSBpbmRleDtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuc3RlcHNbdGhpcy5jdXJyZW50SW5kZXhdLnJlbmRlckluKHRoaXMuX2ludGVybmFscy5nZXQoXCJjb250YWluZXJcIiksIHRoaXMuX2ludGVybmFscy5nZXQoa2V5cy5yZXN1bHQpKTtcclxuICAgIH1cclxuXHJcbiAgICBuZXh0KCkge1xyXG4gICAgICAgIGxldCBzdGVwID0gdGhpcy5faW50ZXJuYWxzLmdldChrZXlzLmN1cnJlbnRTdGVwKTtcclxuICAgICAgICBsZXQgdmFsdWUgPSBzdGVwLmdldFZhbHVlKCk7XHJcblxyXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB0cmFuc3ZlcnNlZCA9IHRoaXMuX2ludGVybmFscy5nZXQoa2V5cy50cmFuc3ZlcnNlZCk7XHJcbiAgICAgICAgY29yZS5zZXRQcm9wZXJ0eSh0aGlzLl9pbnRlcm5hbHMuZ2V0KGtleXMucmVzdWx0KSwgc3RlcC5wcm9wZXJ0eU5hbWUsIHZhbHVlKTtcclxuICAgICAgICBsZXQgbmV4dFN0ZXAgPSBzdGVwLm5leHQoKTtcclxuICAgICAgICB0cmFuc3ZlcnNlZC5wdXNoKHN0ZXApO1xyXG4gICAgICAgIHRoaXMuX2ludGVybmFscy5zZXQoa2V5cy5jdXJyZW50U3RlcCwgbmV4dFN0ZXApO1xyXG5cclxuICAgICAgICBsZXQgc3RlcHMgPSB0aGlzLl9pbnRlcm5hbHMuZ2V0KGtleXMuc3RlcHMpXHJcbiAgICAgICAgbGV0IGxhc3RTdGVwSW5kZXggPSBzdGVwLnN0ZXBJbmRleDtcclxuICAgICAgICBsZXQgbmV3U3RlcEluZGV4ID0gbmV4dFN0ZXAuc3RlcEluZGV4O1xyXG5cclxuICAgICAgICBpZiAobGFzdFN0ZXBJbmRleCAhPT0gbmV3U3RlcEluZGV4KSB7XHJcbiAgICAgICAgICAgIHN0ZXBzW2xhc3RTdGVwSW5kZXhdLmNzc0NsYXNzID0gXCJncmFwaC1zdGVwLWNvbXBsZXRlZFwiO1xyXG4gICAgICAgICAgICBzdGVwc1tsYXN0U3RlcEluZGV4XS5zdGF0dXMgPSBcIkNvbXBsZXRlZFwiO1xyXG4gICAgICAgICAgICBzdGVwc1tuZXdTdGVwSW5kZXhdLmNzc0NsYXNzID0gXCJncmFwaC1zdGVwLWluLXByb2dyZXNzXCI7XHJcbiAgICAgICAgICAgIHN0ZXBzW25ld1N0ZXBJbmRleF0uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgc3RlcHNbbmV3U3RlcEluZGV4XS5zdGF0dXMgPSBcIkluIHByb2dyZXNzXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuZXh0U3RlcC5yZW5kZXJJbih0aGlzLl9pbnRlcm5hbHMuZ2V0KGtleXMuY29udGFpbmVyKSwgdGhpcy5faW50ZXJuYWxzLmdldChrZXlzLnJlc3VsdCksIHN0ZXBzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcmV2aW91cygpIHtcclxuICAgICAgICBsZXQgdHJhbnN2ZXJzZWQgPSB0aGlzLl9pbnRlcm5hbHMuZ2V0KGtleXMudHJhbnN2ZXJzZWQpO1xyXG4gICAgICAgIGxldCBsYXN0Tm9kZSA9IHRyYW5zdmVyc2VkLnBvcCgpO1xyXG4gICAgICAgIGxldCBjdXJyZW50Tm9kZSA9IHRoaXMuX2ludGVybmFscy5nZXQoa2V5cy5jdXJyZW50U3RlcCk7XHJcbiAgICAgICAgY29yZS5zZXRQcm9wZXJ0eSh0aGlzLl9pbnRlcm5hbHMuZ2V0KGtleXMucmVzdWx0KSwgY3VycmVudE5vZGUucHJvcGVydHlOYW1lLCBudWxsKTtcclxuICAgICAgICB0aGlzLl9pbnRlcm5hbHMuc2V0KGtleXMuY3VycmVudFN0ZXAsIGxhc3ROb2RlKTtcclxuXHJcbiAgICAgICAgbGV0IHN0ZXBzID0gdGhpcy5faW50ZXJuYWxzLmdldChrZXlzLnN0ZXBzKVxyXG4gICAgICAgIGxldCBsYXN0U3RlcEluZGV4ID0gY3VycmVudE5vZGUuc3RlcEluZGV4O1xyXG4gICAgICAgIGxldCBuZXdTdGVwSW5kZXggPSBsYXN0Tm9kZS5zdGVwSW5kZXg7XHJcblxyXG4gICAgICAgIGlmIChsYXN0U3RlcEluZGV4ICE9PSBuZXdTdGVwSW5kZXgpIHtcclxuICAgICAgICAgICAgc3RlcHNbbGFzdFN0ZXBJbmRleF0uY3NzQ2xhc3MgPSBcImdyYXBoLXN0ZXAtbm90LXN0YXJ0ZWRcIjtcclxuICAgICAgICAgICAgc3RlcHNbbGFzdFN0ZXBJbmRleF0uZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBzdGVwc1tsYXN0U3RlcEluZGV4XS5zdGF0dXMgPSBcIk5vdCBzdGFydGVkXCI7XHJcbiAgICAgICAgICAgIHN0ZXBzW25ld1N0ZXBJbmRleF0uY3NzQ2xhc3MgPSBcImdyYXBoLXN0ZXAtaW4tcHJvZ3Jlc3NcIjtcclxuICAgICAgICAgICAgc3RlcHNbbmV3U3RlcEluZGV4XS5zdGF0dXMgPSBcIkluIHByb2dyZXNzXCI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsYXN0Tm9kZS5yZW5kZXJJbih0aGlzLl9pbnRlcm5hbHMuZ2V0KGtleXMuY29udGFpbmVyKSwgdGhpcy5faW50ZXJuYWxzLmdldChrZXlzLnJlc3VsdCksIHN0ZXBzKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGFyZ3MpIHtcclxuICAgIHJldHVybiBuZXcgR3JhcGgoYXJncyk7XHJcbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBDOi9naXQvRXNwYWxpZXJKUy9zcmMvanMvZXNwYWxpZXIuZ3JhcGguanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBHcmFwaE5vZGUge1xyXG4gICAgY29uc3RydWN0b3IoYXJncykge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbnN0cnVjdG9yID09PSBHcmFwaE5vZGUpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkFic3RyYWN0IGNsYXNzIEdyYXBoTm9kZSBjYW5ub3QgYmUgaW5zdGFudGlhdGVkLlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmdldFZhbHVlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdyYXBoTm9kZSBkZXJpdmF0aW9ucyBtdXN0IGltcGxtZW50IGdldFZhbHVlKClcIilcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5yZW5kZXJJbiA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdyYXBoTm9kZSBkZXJpdmF0aW9ucyBtdXN0IGltcGxlbWVudCByZW5kZXJJbihjb250YWluZXIsIHJlc3VsdCwgc3RlcHMpXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZih0aGlzLnByb3BlcnR5TmFtZSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdyYXBoTm9kZSBkZXJpdmF0aW9ucyBtdXN0IGRlZmluZSBhIHByb3BlcnR5TmFtZSB0aGF0IHdpbGwgYmUgc2V0IHdpdGggaXQncyB2YWx1ZS5cIilcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5uZXh0ID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR3JhcGhOb2RlIGRlcml2YXRpb25zIG11c3QgaW1wbGVtZW50IGEgbWV0aG9kIG5leHQoKSB0aGF0IHJldHVybnMgdGhlIG5leHQgbm9kZSBpbiB0aGUgZ3JhcGguXCIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogQzovZ2l0L0VzcGFsaWVySlMvc3JjL2pzL2VzcGFsaWVyLmdyYXBoLm5vZGUuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9