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
	
	var _srcJsEspalier = __webpack_require__(2);
	
	var _srcJsEspalier2 = _interopRequireDefault(_srcJsEspalier);
	
	var _graphDemoGraph = __webpack_require__(27);
	
	var _graphDemoGraph2 = _interopRequireDefault(_graphDemoGraph);
	
	var _tableDemoTable = __webpack_require__(38);
	
	var _tableDemoTable2 = _interopRequireDefault(_tableDemoTable);
	
	var _dialogDialogDemo = __webpack_require__(40);
	
	var _dialogDialogDemo2 = _interopRequireDefault(_dialogDialogDemo);
	
	_srcJsEspalier2["default"].showInfo("It seems the libraries have loaded!");
	_srcJsEspalier2["default"].wire("#standard-form");
	
	_srcJsEspalier2["default"].el("#show-dialog")[0].onclick = function () {
	    (0, _dialogDialogDemo2["default"])();
	};
	
	var table = (0, _tableDemoTable2["default"])(_srcJsEspalier2["default"].el("#demo-table"));
	
	var graph = new _graphDemoGraph2["default"](_srcJsEspalier2["default"].el("#wizard-container"), function (graphValue) {
	    _srcJsEspalier2["default"].el("#graph-value").innerHtml = JSON.stringify(graphValue, null, 2);
	});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _espalierCore = __webpack_require__(13);
	
	var _espalierCore2 = _interopRequireDefault(_espalierCore);
	
	var _espalierMessageFactory = __webpack_require__(4);
	
	var _espalierMessageFactory2 = _interopRequireDefault(_espalierMessageFactory);
	
	var _espalierForms = __webpack_require__(15);
	
	var _espalierForms2 = _interopRequireDefault(_espalierForms);
	
	var _espalierWaitscreen = __webpack_require__(12);
	
	var _espalierWaitscreen2 = _interopRequireDefault(_espalierWaitscreen);
	
	var _espalierTable = __webpack_require__(3);
	
	var _espalierTable2 = _interopRequireDefault(_espalierTable);
	
	var _espalierDialog = __webpack_require__(24);
	
	var _espalierDialog2 = _interopRequireDefault(_espalierDialog);
	
	var _espalierGraph = __webpack_require__(25);
	
	var _espalierGraph2 = _interopRequireDefault(_espalierGraph);
	
	var _espalierGraphNode = __webpack_require__(26);
	
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
	    el: _espalierCore2["default"].find,
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
	
	var _espalierWaitscreen = __webpack_require__(12);
	
	var _espalierWaitscreen2 = _interopRequireDefault(_espalierWaitscreen);
	
	var _espalierCommon = __webpack_require__(5);
	
	var _espalierCommon2 = _interopRequireDefault(_espalierCommon);
	
	var _espalierCore = __webpack_require__(13);
	
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
	
	var _templatesBootstrapTemplates = __webpack_require__(11);
	
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
	                moreThanOne: !(0, _helpersIsString2["default"])(messageArgs.message) && messageArgs.message.length > 1
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

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _espalierDomnode = __webpack_require__(6);
	
	var _espalierDomnode2 = _interopRequireDefault(_espalierDomnode);
	
	var find = function find(selector, root) {
	    root = root ? root : document;
	    return Array.from(root.querySelectorAll(selector));
	};
	
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
	
	var body = new _espalierDomnode2["default"](find("body"));
	
	exports["default"] = {
	    body: body,
	    window: window,
	    showVellum: function showVellum() {
	        if (find(".vellum").length > 0) {
	            return;
	        }
	
	        body.append("<div class=\"vellum\" />");
	    },
	    hideVellum: function hideVellum() {
	        var vellum = find(".vellum");
	
	        if (vellum.length > 0) {
	            vellum[0].parentNode.removeChild(vellum[0]);
	        }
	    },
	    find: find,
	    extend: extend
	};
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
	
	var _helpersIsString = __webpack_require__(7);
	
	var _helpersIsString2 = _interopRequireDefault(_helpersIsString);
	
	var _helpersAddListener = __webpack_require__(8);
	
	var _helpersAddListener2 = _interopRequireDefault(_helpersAddListener);
	
	var _helpersSingleOrError = __webpack_require__(9);
	
	var _helpersSingleOrError2 = _interopRequireDefault(_helpersSingleOrError);
	
	var _helpersMatches = __webpack_require__(10);
	
	var _helpersMatches2 = _interopRequireDefault(_helpersMatches);
	
	var rootNode = document.createElement("div");
	var keys = {
	    node: new Object()
	};
	
	var EspalierNode = (function () {
	    function EspalierNode(node) {
	        _classCallCheck(this, EspalierNode);
	
	        this._internals = new WeakMap();
	
	        if ((0, _helpersIsString2["default"])(node)) {
	            rootNode.innerHTML = node;
	            node = rootNode.firstChild;
	        }
	
	        node = (0, _helpersSingleOrError2["default"])(node);
	
	        this._internals.set(keys.node, node);
	    }
	
	    _createClass(EspalierNode, [{
	        key: "getNode",
	        value: function getNode() {
	            return this._internals.get(keys.node);
	        }
	    }, {
	        key: "append",
	        value: function append(stuff) {
	            var node = this.getNode();
	
	            if ((0, _helpersIsString2["default"])(stuff)) {
	                rootNode.innerHTML = stuff;
	
	                var _iteratorNormalCompletion = true;
	                var _didIteratorError = false;
	                var _iteratorError = undefined;
	
	                try {
	                    for (var _iterator = rootNode.childNodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                        var child = _step.value;
	
	                        node.appendChild(child);
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
	
	                return;
	            }
	
	            node.appendChild(stuff);
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
	            node.parentNode.removeChild(node);
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
	    if (el.addEventListener) {
	        el.addEventListener(eventName, handler);
	    } else {
	        el.attachEvent('on' + eventName, function (args) {
	            args.target = args.srcElement;
	            handler(args);
	        });
	    }
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
	    if (val.nodeName) {
	        return val;
	    }
	
	    if (val[0].nodeName) {
	        return val[0];
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
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var templates = {
	    message: function message(data) {
	        var message = "<div class=\"" + data.messageContainerClass + " " + data.messageTypeClass + " " + data.messageAttachmentClass + "\">" + ("<a href=\"javascript: void(0);\" class=\"" + data.closeMessageClass + "\"></a>");
	
	        if (data.moreThanOne) {
	            message += "<ul>";
	
	            var _iteratorNormalCompletion = true;
	            var _didIteratorError = false;
	            var _iteratorError = undefined;
	
	            try {
	                for (var _iterator = data.messages[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                    var _message = _step.value;
	
	                    _message += "<li>" + _message + "</li>";
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
	
	            message += "</ul>";
	        } else {
	            message += "<p>" + data.messages + "</p>";
	        }
	
	        message += "</div>";
	        return message;
	    }
	};
	
	exports["default"] = templates;
	module.exports = exports["default"];

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _espalierCommon = __webpack_require__(5);
	
	var _espalierCommon2 = _interopRequireDefault(_espalierCommon);
	
	var _espalierCore = __webpack_require__(13);
	
	var _espalierCore2 = _interopRequireDefault(_espalierCore);
	
	var pleaseWaitId = "espalier-wait-screen";
	var hourglass = "data:image/svg+xml;utf8," + "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"uil-gears\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid meet\" width=\"120px\" height=\"120px\">" + "  <rect class=\"bk\" fill=\"none\" x=\"0\" y=\"0\" width=\"100\" height=\"100\" />" + "  <g transform=\"translate(-20 -20)\">" + "    <path fill=\"#fafafa\" d=\"M 79.9 52.6 C 80 51.8 80 50.9 80 50 s 0 -1.8 -0.1 -2.6 l -5.1 -0.4 c -0.3 -2.4 -0.9 -4.6 -1.8 -6.7 l 4.2 -2.9 c -0.7 -1.6 -1.6 -3.1 -2.6 -4.5 L 70 35 c -1.4 -1.9 -3.1 -3.5 -4.9 -4.9 l 2.2 -4.6 c -1.4 -1 -2.9 -1.9 -4.5 -2.6 L 59.8 27 c -2.1 -0.9 -4.4 -1.5 -6.7 -1.8 l -0.4 -5.1 C 51.8 20 50.9 20 50 20 s -1.8 0 -2.6 0.1 l -0.4 5.1 c -2.4 0.3 -4.6 0.9 -6.7 1.8 l -2.9 -4.1 c -1.6 0.7 -3.1 1.6 -4.5 2.6 l 2.1 4.6 c -1.9 1.4 -3.5 3.1 -5 4.9 l -4.5 -2.1 c -1 1.4 -1.9 2.9 -2.6 4.5 l 4.1 2.9 c -0.9 2.1 -1.5 4.4 -1.8 6.8 l -5 0.4 C 20 48.2 20 49.1 20 50 s 0 1.8 0.1 2.6 l 5 0.4 c 0.3 2.4 0.9 4.7 1.8 6.8 l -4.1 2.9 c 0.7 1.6 1.6 3.1 2.6 4.5 l 4.5 -2.1 c 1.4 1.9 3.1 3.5 5 4.9 l -2.1 4.6 c 1.4 1 2.9 1.9 4.5 2.6 l 2.9 -4.1 c 2.1 0.9 4.4 1.5 6.7 1.8 l 0.4 5.1 C 48.2 80 49.1 80 50 80 s 1.8 0 2.6 -0.1 l 0.4 -5.1 c 2.3 -0.3 4.6 -0.9 6.7 -1.8 l 2.9 4.2 c 1.6 -0.7 3.1 -1.6 4.5 -2.6 L 65 69.9 c 1.9 -1.4 3.5 -3 4.9 -4.9 l 4.6 2.2 c 1 -1.4 1.9 -2.9 2.6 -4.5 L 73 59.8 c 0.9 -2.1 1.5 -4.4 1.8 -6.7 L 79.9 52.6 Z M 50 65 c -8.3 0 -15 -6.7 -15 -15 c 0 -8.3 6.7 -15 15 -15 s 15 6.7 15 15 C 65 58.3 58.3 65 50 65 Z\">" + "      <animateTransform type=\"rotate\" dur=\"2s\" repeatCount=\"indefinite\" to=\"0 50 50\" from=\"90 50 50\" attributeName=\"transform\" />" + "    </path>" + "  </g>" + "  <g transform=\"translate(20 20) rotate(15 50.0002 50)\">" + "    <path fill=\"#efefef\" d=\"M 79.9 52.6 C 80 51.8 80 50.9 80 50 s 0 -1.8 -0.1 -2.6 l -5.1 -0.4 c -0.3 -2.4 -0.9 -4.6 -1.8 -6.7 l 4.2 -2.9 c -0.7 -1.6 -1.6 -3.1 -2.6 -4.5 L 70 35 c -1.4 -1.9 -3.1 -3.5 -4.9 -4.9 l 2.2 -4.6 c -1.4 -1 -2.9 -1.9 -4.5 -2.6 L 59.8 27 c -2.1 -0.9 -4.4 -1.5 -6.7 -1.8 l -0.4 -5.1 C 51.8 20 50.9 20 50 20 s -1.8 0 -2.6 0.1 l -0.4 5.1 c -2.4 0.3 -4.6 0.9 -6.7 1.8 l -2.9 -4.1 c -1.6 0.7 -3.1 1.6 -4.5 2.6 l 2.1 4.6 c -1.9 1.4 -3.5 3.1 -5 4.9 l -4.5 -2.1 c -1 1.4 -1.9 2.9 -2.6 4.5 l 4.1 2.9 c -0.9 2.1 -1.5 4.4 -1.8 6.8 l -5 0.4 C 20 48.2 20 49.1 20 50 s 0 1.8 0.1 2.6 l 5 0.4 c 0.3 2.4 0.9 4.7 1.8 6.8 l -4.1 2.9 c 0.7 1.6 1.6 3.1 2.6 4.5 l 4.5 -2.1 c 1.4 1.9 3.1 3.5 5 4.9 l -2.1 4.6 c 1.4 1 2.9 1.9 4.5 2.6 l 2.9 -4.1 c 2.1 0.9 4.4 1.5 6.7 1.8 l 0.4 5.1 C 48.2 80 49.1 80 50 80 s 1.8 0 2.6 -0.1 l 0.4 -5.1 c 2.3 -0.3 4.6 -0.9 6.7 -1.8 l 2.9 4.2 c 1.6 -0.7 3.1 -1.6 4.5 -2.6 L 65 69.9 c 1.9 -1.4 3.5 -3 4.9 -4.9 l 4.6 2.2 c 1 -1.4 1.9 -2.9 2.6 -4.5 L 73 59.8 c 0.9 -2.1 1.5 -4.4 1.8 -6.7 L 79.9 52.6 Z M 50 65 c -8.3 0 -15 -6.7 -15 -15 c 0 -8.3 6.7 -15 15 -15 s 15 6.7 15 15 C 65 58.3 58.3 65 50 65 Z\">" + "      <animateTransform type=\"rotate\" dur=\"2s\" repeatCount=\"indefinite\" to=\"90 50 50\" from=\"0 50 50\" attributeName=\"transform\" />" + "    </path>" + "  </g>" + "</svg>";
	
	var pleaseWaitDiv = "<div id=\"" + pleaseWaitId + "\"><div><img src=\"" + hourglass + "\" alt=\"Please wait\" /></div></div>";
	var pleaseWait = false;
	
	exports["default"] = {
	    show: function show() {
	        if (pleaseWait) {
	            return pleaseWait;
	        }
	
	        _espalierCommon2["default"].body.appendChild(pleaseWaitDiv);
	        pleaseWait = _espalierCore2["default"].find("#" + pleaseWaitId);
	        return pleaseWait;
	    },
	    hide: function hide() {
	        pleaseWait.parentNode.removeChild(pleaseWait);
	        pleaseWait = false;
	    }
	};
	module.exports = exports["default"];

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _espalierMessageFactory = __webpack_require__(4);
	
	var _espalierMessageFactory2 = _interopRequireDefault(_espalierMessageFactory);
	
	var _espalierWaitscreen = __webpack_require__(12);
	
	var _espalierWaitscreen2 = _interopRequireDefault(_espalierWaitscreen);
	
	var _espalierCommon = __webpack_require__(5);
	
	var _espalierCommon2 = _interopRequireDefault(_espalierCommon);
	
	var _pubsubJs = __webpack_require__(14);
	
	var _pubsubJs2 = _interopRequireDefault(_pubsubJs);
	
	var _helpersIsString = __webpack_require__(7);
	
	var _helpersIsString2 = _interopRequireDefault(_helpersIsString);
	
	var _helpersAddListener = __webpack_require__(8);
	
	var _helpersAddListener2 = _interopRequireDefault(_helpersAddListener);
	
	var _helpersMatches = __webpack_require__(10);
	
	var _helpersMatches2 = _interopRequireDefault(_helpersMatches);
	
	var mainMessage = _espalierMessageFactory2["default"].create({
	    attachTo: _espalierCommon2["default"].body.getNode()
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
	
	testDate = null;
	
	var core = {
	    sendRequest: function sendRequest(req) {
	        _espalierWaitscreen2["default"].show();
	        var existingMessages = core.find("." + mainMessage.settings.messageContainerClass);
	        existingMessages.parentNode.remove.remove(existingMessages);
	
	        var ajaxSettings = {
	            type: "GET",
	            withCredentials: true
	        };
	
	        core.extend(ajaxSettings, req);
	
	        var promise = new Promise(function (resolve, reject) {
	            var request = undefined;
	
	            if (ajaxSettings.withCredentials) {
	                if ("withCredentials" in request) {
	                    request = new XMLHttpRequest();
	                    request.open(ajaxSettings.type, ajaxSettings.url, true);
	                } else if (typeof XDomainRequest != "undefined") {
	                    request = new XDomainRequest();
	                    request.open(ajaxSettings.type, ajaxSettings.url);
	                }
	            }
	
	            if (!request) {
	                throw new Error("CORS not supported");
	            }
	
	            request.onreadystatechange = function () {
	                if (this.readyState === 4) {
	                    _espalierWaitscreen2["default"].hide();
	                    var jsonResponse = JSON.parse(this.responseText);
	
	                    if (this.status >= 200 && this.status < 400) {
	                        if (req.event) {
	                            _pubsubJs2["default"].publish(req.event, JSON.parse(jsonResponse));
	                        }
	
	                        if (req.onSuccess) {
	                            req.onSuccess(jsonResponse);
	                        }
	
	                        resolve(jsonResponse);
	                        return;
	                    } else if (this.status == 500) {
	                        core.showError({
	                            message: jsonResponse.Message,
	                            cssClass: "error"
	                        });
	                    } else {
	                        var errors = [];
	
	                        var _iteratorNormalCompletion = true;
	                        var _didIteratorError = false;
	                        var _iteratorError = undefined;
	
	                        try {
	                            for (var _iterator = jsonResponse.errors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                                var error = _step.value;
	
	                                if (error.source && error.source.parameter) {
	                                    var specificField = core.find("#" + error.source.parameter.toLowerCase());
	
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
	
	                        if (errors.length > 0) {
	                            core.showError(errors);
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
	                    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
	                    request.send(ajaxSettings.data);
	                    return;
	            }
	
	            request = null;
	        });
	
	        return promise;
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
/* 14 */
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
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _espalierCore = __webpack_require__(13);
	
	var _espalierCore2 = _interopRequireDefault(_espalierCore);
	
	var _espalierFormsControl = __webpack_require__(16);
	
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
	
	                _espalierCore2["default"].addEventListener(control, "keypress", onEnter);
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
	                    data: new FormData(this.form)
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
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _espalierCore = __webpack_require__(13);
	
	var _espalierCore2 = _interopRequireDefault(_espalierCore);
	
	var _configIndex = __webpack_require__(17);
	
	var _configIndex2 = _interopRequireDefault(_configIndex);
	
	var _espalierValidation = __webpack_require__(23);
	
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
	                _configIndex2["default"].fieldMessageAnimation(group);
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
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _fieldMessageAnimation = __webpack_require__(18);
	
	var _fieldMessageAnimation2 = _interopRequireDefault(_fieldMessageAnimation);
	
	var _fixedMessageAnimation = __webpack_require__(20);
	
	var _fixedMessageAnimation2 = _interopRequireDefault(_fixedMessageAnimation);
	
	var _showDialogAnimation = __webpack_require__(21);
	
	var _showDialogAnimation2 = _interopRequireDefault(_showDialogAnimation);
	
	var _hideDialogAnimation = __webpack_require__(22);
	
	var _hideDialogAnimation2 = _interopRequireDefault(_hideDialogAnimation);
	
	exports["default"] = {
	    fieldMessageAnimation: _fieldMessageAnimation2["default"],
	    fixedMessageAnimation: _fixedMessageAnimation2["default"],
	    showDialogAnimation: _showDialogAnimation2["default"],
	    hideDialogAnimation: _hideDialogAnimation2["default"]
	};
	module.exports = exports["default"];

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _fadeIn = __webpack_require__(19);
	
	var _fadeIn2 = _interopRequireDefault(_fadeIn);
	
	exports["default"] = function (el) {
	    (0, _fadeIn2["default"])(el);
	};
	
	module.exports = exports["default"];

/***/ },
/* 19 */
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
	
	    el.style.filter = "";
	
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
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _fadeIn = __webpack_require__(19);
	
	var _fadeIn2 = _interopRequireDefault(_fadeIn);
	
	exports["default"] = function (el) {
	    (0, _fadeIn2["default"])(el);
	};
	
	module.exports = exports["default"];

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _fadeIn = __webpack_require__(19);
	
	var _fadeIn2 = _interopRequireDefault(_fadeIn);
	
	exports["default"] = function (el) {
	    (0, _fadeIn2["default"])(el);
	};
	
	module.exports = exports["default"];

/***/ },
/* 22 */
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
/* 23 */
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
	
	var _espalierCore = __webpack_require__(13);
	
	var _espalierCore2 = _interopRequireDefault(_espalierCore);
	
	var _espalierFormsControl = __webpack_require__(16);
	
	var _espalierFormsControl2 = _interopRequireDefault(_espalierFormsControl);
	
	var Validation = function Validation(control) {
	    _classCallCheck(this, Validation);
	
	    if (this.isValid === undefined) {
	        throw new TypeError("Must have an isValid method.");
	    }
	
	    if (this.getMessage === undefined) {
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
	        key: "getMessage",
	        value: function getMessage() {
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
	        key: "getMessage",
	        value: function getMessage() {
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
	        key: "getMessage",
	        value: function getMessage() {
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
	        key: "getMessage",
	        value: function getMessage() {
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
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _espalierCore = __webpack_require__(13);
	
	var _espalierCore2 = _interopRequireDefault(_espalierCore);
	
	var _configIndex = __webpack_require__(17);
	
	var _configIndex2 = _interopRequireDefault(_configIndex);
	
	var _espalierCommon = __webpack_require__(5);
	
	var _espalierCommon2 = _interopRequireDefault(_espalierCommon);
	
	var _espalierDomnode = __webpack_require__(6);
	
	var _espalierDomnode2 = _interopRequireDefault(_espalierDomnode);
	
	var center = function center(dialog) {
	    var windowHeight = _espalierCommon2["default"].window.innerHeight;
	    var scrollTop = _espalierCommon2["default"].window.scrollY;
	    var height = dialog.offsetHeight;
	    var top = windowHeight / 2 - height / 2 + scrollTop;
	    top = top > 0 ? top : 0;
	    dialog.style.top = top + "px";
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
	    }
	
	    _createClass(Dialog, [{
	        key: "show",
	        value: function show() {
	            var _this = this;
	
	            _espalierCore2["default"].hideMainMessage();
	            _espalierCommon2["default"].showVellum();
	            var dialog = this.settings.element.getNode();
	
	            dialog.style.position = "absolute";
	            _espalierCommon2["default"].body.append(dialog);
	            center(dialog);
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
	                _espalierCommon2["default"].hideVellum();
	            }
	
	            return this;
	        }
	    }]);
	
	    return Dialog;
	})();
	
	exports["default"] = function (args) {
	    return new Dialog(args);
	};
	
	module.exports = exports["default"];

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _espalierCore = __webpack_require__(13);
	
	var _espalierCore2 = _interopRequireDefault(_espalierCore);
	
	var _helpersSingleOrError = __webpack_require__(9);
	
	var _helpersSingleOrError2 = _interopRequireDefault(_helpersSingleOrError);
	
	var keys = {
	    container: new Object(),
	    result: new Object(),
	    currentStep: new Object(),
	    steps: new Object(),
	    transversed: new Object(),
	    indexHeadNodes: new Object(),
	    valueChanged: new Object(),
	    nodeSubsciption: new Object()
	};
	
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
	
	var setStepStates = function setStepStates(graph) {
	    var headNodes = graph._internals.get(keys.indexHeadNodes);
	    var node = graph._internals.get(keys.currentStep);
	    var currentIndex = node.getStepIndex();
	    var steps = graph._internals.get(keys.steps);
	
	    for (var i = 0; i < steps.length; i++) {
	        steps[i].disabled = false;
	
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
	
	    var currentEvent = graph._internals.get(keys.nodeSubsciption);
	
	    if (currentEvent) {
	        _espalierCore2["default"].unsubscribe(currentEvent);
	    }
	
	    graph._internals.set(keys.nodeSubsciption, _espalierCore2["default"].subscribe(node, function (graphEvent) {
	        handleNavigation(graph, graphEvent, -1);
	    }));
	
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
	        args.container = (0, _helpersSingleOrError2["default"])(args.container);
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
	            var target = e.target;
	
	            while (target && target != args.container) {
	                var _event = target.getAttribute("data-graph-event");
	                handleNavigation(_this, _event, Number(target.getAttribute("data-graph-index")));
	                target = target.parentNode;
	            }
	        });
	    }
	
	    _createClass(Graph, [{
	        key: "goto",
	        value: function goto(index) {
	            var currentNode = this._internals.get(keys.currentStep);
	
	            if (index > currentNode.getStepIndex()) {
	                throw new Error("You can only goto an index less than or equal to the current node's index.");
	            }
	
	            var headNodes = this._internals.get(keys.indexHeadNodes);
	            var nodeToGoTo = headNodes.get(index);
	
	            if (nodeToGoTo !== currentNode) {
	                var transversed = this._internals.get(keys.transversed);
	                var result = this._internals.get(keys.result);
	
	                if (transversed.length > 0) {
	                    var poppedNode = undefined;
	
	                    do {
	                        poppedNode = transversed.pop();
	                        delete result[poppedNode.getPropertyName()];
	                    } while (poppedNode !== nodeToGoTo);
	                }
	
	                this._internals.set(keys.currentStep, nodeToGoTo);
	            }
	
	            setStepStates(this);
	        }
	    }, {
	        key: "next",
	        value: function next() {
	            var step = this._internals.get(keys.currentStep);
	
	            if (!step.isValid()) {
	                return;
	            }
	
	            var nextStep = step.next();
	
	            if (step.getStepIndex() > nextStep.getStepIndex()) {
	                throw new Error("Invalid step index. It must be equal to or greater than the last step's index.");
	            }
	
	            var transversed = this._internals.get(keys.transversed);
	            transversed.push(step);
	
	            if (step.getPropertyName()) {
	                var value = step.getValue();
	                _espalierCore2["default"].setProperty(this._internals.get(keys.result), step.getPropertyName(), value);
	            }
	
	            this._internals.set(keys.currentStep, nextStep);
	            setStepStates(this);
	        }
	    }, {
	        key: "previous",
	        value: function previous() {
	            var currentNode = this._internals.get(keys.currentStep);
	
	            if (currentNode.back) {
	                currentNode.back();
	            }
	
	            var transversed = this._internals.get(keys.transversed);
	            var lastNode = transversed.pop();
	
	            delete this._internals.get(keys.result)[lastNode.getPropertyName()];
	            this._internals.set(keys.currentStep, lastNode);
	            setStepStates(this);
	        }
	    }]);
	
	    return Graph;
	})();
	
	exports["default"] = Graph;
	module.exports = exports["default"];

/***/ },
/* 26 */
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
	
	    if (this.isValid === undefined) {
	        throw new TypeError("GraphNode derivations must implment isValid()");
	    }
	
	    if (this.renderIn == undefined) {
	        throw new TypeError("GraphNode derivations must implement renderIn(container, result, steps)");
	    }
	};
	
	exports["default"] = GraphNode;
	module.exports = exports["default"];

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _srcJsEspalier = __webpack_require__(2);
	
	var _srcJsEspalier2 = _interopRequireDefault(_srcJsEspalier);
	
	var _graphNodes = __webpack_require__(28);
	
	var _graphNodes2 = _interopRequireDefault(_graphNodes);
	
	var DemoGraph = (function (_espalier$Graph) {
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
	
	    _inherits(DemoGraph, _espalier$Graph);
	
	    return DemoGraph;
	})(_srcJsEspalier2["default"].Graph);
	
	exports["default"] = DemoGraph;
	module.exports = exports["default"];

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }
	
	var _srcJsEspalier = __webpack_require__(2);
	
	var _srcJsEspalier2 = _interopRequireDefault(_srcJsEspalier);
	
	var _templatesGraphProgress = __webpack_require__(29);
	
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
	    function Step1() {
	        _classCallCheck(this, Step1);
	
	        _get(Object.getPrototypeOf(Step1.prototype), "constructor", this).call(this);
	        this._internals = new WeakMap();
	    }
	
	    _inherits(Step1, _espalier$GraphNode);
	
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
	        key: "getPropertyName",
	        value: function getPropertyName() {
	            return "StepOne";
	        }
	    }, {
	        key: "getStepIndex",
	        value: function getStepIndex() {
	            return 0;
	        }
	    }]);
	
	    return Step1;
	})(_srcJsEspalier2["default"].GraphNode);
	
	exports["default"] = Step1;
	
	var Step2dot1 = (function (_espalier$GraphNode2) {
	    function Step2dot1() {
	        _classCallCheck(this, Step2dot1);
	
	        _get(Object.getPrototypeOf(Step2dot1.prototype), "constructor", this).call(this);
	        this._internals = new WeakMap();
	    }
	
	    _inherits(Step2dot1, _espalier$GraphNode2);
	
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
	        key: "getPropertyName",
	        value: function getPropertyName() {
	            return "StepTwoDotOne";
	        }
	    }, {
	        key: "getStepIndex",
	        value: function getStepIndex() {
	            return 1;
	        }
	    }]);
	
	    return Step2dot1;
	})(_srcJsEspalier2["default"].GraphNode);
	
	var Step2dot2 = (function (_espalier$GraphNode3) {
	    function Step2dot2() {
	        _classCallCheck(this, Step2dot2);
	
	        _get(Object.getPrototypeOf(Step2dot2.prototype), "constructor", this).call(this);
	        this._internals = new WeakMap();
	    }
	
	    _inherits(Step2dot2, _espalier$GraphNode3);
	
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
	        key: "getPropertyName",
	        value: function getPropertyName() {
	            return "StepTwoDotTwo";
	        }
	    }, {
	        key: "getStepIndex",
	        value: function getStepIndex() {
	            return 1;
	        }
	    }]);
	
	    return Step2dot2;
	})(_srcJsEspalier2["default"].GraphNode);
	
	var Step3 = (function (_espalier$GraphNode4) {
	    function Step3() {
	        _classCallCheck(this, Step3);
	
	        _get(Object.getPrototypeOf(Step3.prototype), "constructor", this).call(this);
	        this._internals = new WeakMap();
	    }
	
	    _inherits(Step3, _espalier$GraphNode4);
	
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
	        key: "getPropertyName",
	        value: function getPropertyName() {
	            return "StepThree";
	        }
	    }, {
	        key: "getStepIndex",
	        value: function getStepIndex() {
	            return 2;
	        }
	    }]);
	
	    return Step3;
	})(_srcJsEspalier2["default"].GraphNode);
	
	var Step4 = (function (_espalier$GraphNode5) {
	    function Step4() {
	        _classCallCheck(this, Step4);
	
	        _get(Object.getPrototypeOf(Step4.prototype), "constructor", this).call(this);
	    }
	
	    _inherits(Step4, _espalier$GraphNode5);
	
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
	            var progress = (0, _templatesGraphProgress2["default"])(steps);
	            container.innerHTML = progress + getStepContent("step-4", this.getValue(), false, true);
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
	        key: "getStepIndex",
	        value: function getStepIndex() {
	            return 3;
	        }
	    }]);
	
	    return Step4;
	})(_srcJsEspalier2["default"].GraphNode);
	
	module.exports = exports["default"];

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(30);
	module.exports = (Handlebars["default"] || Handlebars).template({"1":function(depth0,helpers,partials,data) {
	    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;
	
	  return "    <a data-graph-event=\"goto\" data-graph-index=\""
	    + alias3(((helper = (helper = helpers.index || (depth0 != null ? depth0.index : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"index","hash":{},"data":data}) : helper)))
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
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// Create a simple path alias to allow browserify to resolve
	// the runtime on a supported path.
	'use strict';
	
	module.exports = __webpack_require__(31)['default'];

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireWildcard = function _interopRequireWildcard(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	};
	
	exports.__esModule = true;
	
	var _import = __webpack_require__(33);
	
	var base = _interopRequireWildcard(_import);
	
	// Each of these augment the Handlebars object. No need to setup here.
	// (This is done to easily share code between commonjs and browse envs)
	
	var _SafeString = __webpack_require__(35);
	
	var _SafeString2 = _interopRequireWildcard(_SafeString);
	
	var _Exception = __webpack_require__(34);
	
	var _Exception2 = _interopRequireWildcard(_Exception);
	
	var _import2 = __webpack_require__(32);
	
	var Utils = _interopRequireWildcard(_import2);
	
	var _import3 = __webpack_require__(36);
	
	var runtime = _interopRequireWildcard(_import3);
	
	var _noConflict = __webpack_require__(37);
	
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
/* 32 */
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
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _interopRequireWildcard = function _interopRequireWildcard(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	};
	
	exports.__esModule = true;
	exports.HandlebarsEnvironment = HandlebarsEnvironment;
	exports.createFrame = createFrame;
	
	var _import = __webpack_require__(32);
	
	var Utils = _interopRequireWildcard(_import);
	
	var _Exception = __webpack_require__(34);
	
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
/* 34 */
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
/* 35 */
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
/* 36 */
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
	
	var _import = __webpack_require__(32);
	
	var Utils = _interopRequireWildcard(_import);
	
	var _Exception = __webpack_require__(34);
	
	var _Exception2 = _interopRequireWildcard(_Exception);
	
	var _COMPILER_REVISION$REVISION_CHANGES$createFrame = __webpack_require__(33);
	
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
/* 37 */
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
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _srcJsEspalier = __webpack_require__(2);
	
	var _srcJsEspalier2 = _interopRequireDefault(_srcJsEspalier);
	
	var _templatesRow = __webpack_require__(39);
	
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
		return new _srcJsEspalier2["default"].Table({
			container: container,
			rowTemplate: _templatesRow2["default"],
			data: data
		});
	};
	
	module.exports = exports["default"];

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(30);
	module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
	    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;
	
	  return "<tr>\r\n	<td>"
	    + alias3(((helper = (helper = helpers.col1 || (depth0 != null ? depth0.col1 : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"col1","hash":{},"data":data}) : helper)))
	    + "</td>\r\n	<td>"
	    + alias3(((helper = (helper = helpers.col2 || (depth0 != null ? depth0.col2 : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"col2","hash":{},"data":data}) : helper)))
	    + "</td>\r\n</tr>";
	},"useData":true});

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _srcJsEspalier = __webpack_require__(2);
	
	var _srcJsEspalier2 = _interopRequireDefault(_srcJsEspalier);
	
	var _templatesDialogTemplate = __webpack_require__(41);
	
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
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var Handlebars = __webpack_require__(30);
	module.exports = (Handlebars["default"] || Handlebars).template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
	    return "<form class=\"column one-third-tablet push-one-third-tablet\" style=\"background: white;padding: 1em;border-radius: .15em;box-shadow: 0 0 .5em #81e181;\">\r\n    <div class=\"form-group\">\r\n        <label for=\"exampleInputEmail1\">Email address</label>\r\n        <input required type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"Enter email\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n        <label for=\"exampleInputPassword1\">Password</label>\r\n        <input required type=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">\r\n    </div>\r\n    <a href=\"javascript: void(0);\" id=\"submit\" class=\"btn btn-default\">Submit</a>\r\n    <a href=\"javascript: void(0);\" id=\"cancel\" class=\"btn btn-danger\">Cancel</a>\r\n</form>";
	},"useData":true});

/***/ }
/******/ ])
});
;
//# sourceMappingURL=demo_compiled.js.map