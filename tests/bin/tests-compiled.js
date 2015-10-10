(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define(factory);
	else if(typeof exports === 'object')
		exports["tests"] = factory();
	else
		root["tests"] = factory();
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
	
	var _graphSpec = __webpack_require__(2);
	
	var _graphSpec2 = _interopRequireDefault(_graphSpec);
	
	exports["default"] = {
		runTests: function runTests() {
			(0, _graphSpec2["default"])();
		}
	};
	module.exports = exports["default"];

/***/ },
/* 2 */
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
	
	var _srcJsEspalierGraph = __webpack_require__(3);
	
	var _srcJsEspalierGraph2 = _interopRequireDefault(_srcJsEspalierGraph);
	
	var _srcJsEspalierGraphNode = __webpack_require__(15);
	
	var _srcJsEspalierGraphNode2 = _interopRequireDefault(_srcJsEspalierGraphNode);
	
	var _srcJsEspalierDomnode = __webpack_require__(7);
	
	var _srcJsEspalierDomnode2 = _interopRequireDefault(_srcJsEspalierDomnode);
	
	var _srcJsEspalierCommon = __webpack_require__(6);
	
	var _srcJsEspalierCommon2 = _interopRequireDefault(_srcJsEspalierCommon);
	
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
	
	var Step1 = (function (_GraphNode) {
	    _inherits(Step1, _GraphNode);
	
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
	            container.innerHTML = getStepContent("step-1", this.getValue(), true, false);
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
	})(_srcJsEspalierGraphNode2["default"]);
	
	var Step2dot1 = (function (_GraphNode2) {
	    _inherits(Step2dot1, _GraphNode2);
	
	    function Step2dot1() {
	        _classCallCheck(this, Step2dot1);
	
	        _get(Object.getPrototypeOf(Step2dot1.prototype), "constructor", this).call(this);
	    }
	
	    return Step2dot1;
	})(_srcJsEspalierGraphNode2["default"]);
	
	var Step2dot2 = (function (_GraphNode3) {
	    _inherits(Step2dot2, _GraphNode3);
	
	    function Step2dot2() {
	        _classCallCheck(this, Step2dot2);
	
	        _get(Object.getPrototypeOf(Step2dot2.prototype), "constructor", this).call(this);
	    }
	
	    return Step2dot2;
	})(_srcJsEspalierGraphNode2["default"]);
	
	var Step3 = (function (_GraphNode4) {
	    _inherits(Step3, _GraphNode4);
	
	    function Step3() {
	        _classCallCheck(this, Step3);
	
	        _get(Object.getPrototypeOf(Step3.prototype), "constructor", this).call(this);
	    }
	
	    return Step3;
	})(_srcJsEspalierGraphNode2["default"]);
	
	exports["default"] = function () {
	    describe("graph", function () {
	        var graphInstance = undefined;
	        var container = undefined;
	
	        it("throws an error when no container is specified in the arguments.", function () {
	            expect(function () {
	                new _srcJsEspalierGraph2["default"]({});
	            }).toThrowError("This was not a single node.");
	        });
	
	        //TODO: Make sure head is passed in.
	        //TODO: Make sure steps are specified, or, perhaps, allow them to not specify steps?
	
	        beforeEach(function () {
	            container = new _srcJsEspalierDomnode2["default"]("<div id='test-graph'></div>");
	            graphInstance = new _srcJsEspalierGraph2["default"]({
	                container: container.getNode(),
	                head: new Step1(),
	                steps: [{ title: "Step 1" }, { title: "Step 2" }, { title: "Step 3" }]
	            });
	        });
	
	        it("has rendered the first step successfully", function () {
	            var foundH3 = _srcJsEspalierCommon2["default"].find("h3", container.getNode());
	            expect(foundH3.length).toBe(1);
	            expect(foundH3[0].id).toBe("step-1");
	        });
	
	        it("should make 1 equal to 2", function () {
	            expect(1).toBe(2);
	        });
	    });
	};
	
	;
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
	
	var _espalierCore = __webpack_require__(4);
	
	var _espalierCore2 = _interopRequireDefault(_espalierCore);
	
	var _helpersSingleOrError = __webpack_require__(10);
	
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
	
	    node.renderIn(graph._internals.get(keys.container), graph._internals.get(keys.result), steps).then(function () {
	        var valueChanged = graph._internals.get(keys.valueChanged);
	
	        if (valueChanged) {
	            valueChanged(graph._internals.get(keys.result));
	        }
	    });
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
	
	            if (step.getPropertyName) {
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
	
	            if (lastNode.getPropertyName) {
	                delete this._internals.get(keys.result)[lastNode.getPropertyName()];
	            }
	
	            this._internals.set(keys.currentStep, lastNode);
	            setStepStates(this);
	        }
	    }, {
	        key: "destroy",
	        value: function destroy() {
	            var currentEvent = this._internals.get(keys.nodeSubsciption);
	
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
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _espalierMessageFactory = __webpack_require__(5);
	
	var _espalierMessageFactory2 = _interopRequireDefault(_espalierMessageFactory);
	
	var _espalierWaitscreen = __webpack_require__(13);
	
	var _espalierWaitscreen2 = _interopRequireDefault(_espalierWaitscreen);
	
	var _espalierCommon = __webpack_require__(6);
	
	var _espalierCommon2 = _interopRequireDefault(_espalierCommon);
	
	var _pubsubJs = __webpack_require__(14);
	
	var _pubsubJs2 = _interopRequireDefault(_pubsubJs);
	
	var _helpersIsString = __webpack_require__(8);
	
	var _helpersIsString2 = _interopRequireDefault(_helpersIsString);
	
	var _helpersAddListener = __webpack_require__(9);
	
	var _helpersAddListener2 = _interopRequireDefault(_helpersAddListener);
	
	var _helpersMatches = __webpack_require__(11);
	
	var _helpersMatches2 = _interopRequireDefault(_helpersMatches);
	
	var mainMessage = _espalierMessageFactory2["default"].create({
	    attachTo: _espalierCommon2["default"].body.getNode()
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
	
	testDate = null;
	
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
	
	var core = {
	    sendRequest: function sendRequest(req) {
	        _espalierWaitscreen2["default"].show();
	        var existingMessages = core.find("." + mainMessage.settings.messageContainerClass);
	
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
	            withCredentials: true
	        };
	
	        core.extend(ajaxSettings, req);
	
	        var promise = new Promise(function (resolve, reject) {
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
	                        resolve(ajaxSuccess(this.responseText, req.event, req.onSuccess));
	                        _espalierWaitscreen2["default"].hide();
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
	                        resolve(ajaxSuccess(this.responseText, req.event, req.onSuccess));
	                    } else if (this.status == 500) {
	                        var jsonResponse = JSON.parse(this.responseText);
	                        core.showError({
	                            message: jsonResponse.Message,
	                            cssClass: "error"
	                        });
	                    } else {
	                        var jsonResponse = JSON.parse(this.responseText);
	                        var errors = [];
	
	                        var _iteratorNormalCompletion2 = true;
	                        var _didIteratorError2 = false;
	                        var _iteratorError2 = undefined;
	
	                        try {
	                            for (var _iterator2 = jsonResponse.errors[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	                                var error = _step2.value;
	
	                                if (error.source && error.source.parameter) {
	                                    var specificField = core.find("#" + error.source.parameter.toLowerCase())[0];
	
	                                    if (specificField) {
	                                        var formControl = _espalierCommon2["default"].controls.get(specificField);
	
	                                        if (formControl) {
	                                            var fieldMessage = formControl.message;
	
	                                            if (fieldMessage) {
	                                                fieldMessage.show({
	                                                    message: error.detail,
	                                                    messageType: _espalierMessageFactory2["default"].messageType.Error
	                                                });
	                                            }
	                                        } else {
	                                            errors.push(error.detail);
	                                        }
	                                    } else {
	                                        errors.push(error.detail);
	                                    }
	                                } else {
	                                    errors.push(error.detail);
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
	                            core.showError(errors);
	                        }
	                    }
	
	                    reject(this.responseText);
	                    _espalierWaitscreen2["default"].hide();
	                }
	            };
	
	            switch (ajaxSettings.type) {
	                case "GET":
	                    request.send();
	                    return;
	                case "POST":
	                case "PUT":
	                    request.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
	                    request.send(JSON.stringify(ajaxSettings.data));
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
	    addEventListener: _helpersAddListener2["default"],
	    matches: _helpersMatches2["default"],
	    isString: _helpersIsString2["default"],
	    first: function first(array, match) {
	        var _iteratorNormalCompletion3 = true;
	        var _didIteratorError3 = false;
	        var _iteratorError3 = undefined;
	
	        try {
	            for (var _iterator3 = array[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	                var arrayItem = _step3.value;
	
	                if (match(arrayItem)) {
	                    return arrayItem;
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
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _espalierCommon = __webpack_require__(6);
	
	var _espalierCommon2 = _interopRequireDefault(_espalierCommon);
	
	var _templatesBootstrapTemplates = __webpack_require__(12);
	
	var _templatesBootstrapTemplates2 = _interopRequireDefault(_templatesBootstrapTemplates);
	
	var _espalierDomnode = __webpack_require__(7);
	
	var _espalierDomnode2 = _interopRequireDefault(_espalierDomnode);
	
	var _helpersAddListener = __webpack_require__(9);
	
	var _helpersAddListener2 = _interopRequireDefault(_helpersAddListener);
	
	var _helpersIsString = __webpack_require__(8);
	
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
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _espalierDomnode = __webpack_require__(7);
	
	var _espalierDomnode2 = _interopRequireDefault(_espalierDomnode);
	
	var find = function find(selector, root) {
	    root = root ? root : document;
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
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _helpersIsString = __webpack_require__(8);
	
	var _helpersIsString2 = _interopRequireDefault(_helpersIsString);
	
	var _helpersAddListener = __webpack_require__(9);
	
	var _helpersAddListener2 = _interopRequireDefault(_helpersAddListener);
	
	var _helpersSingleOrError = __webpack_require__(10);
	
	var _helpersSingleOrError2 = _interopRequireDefault(_helpersSingleOrError);
	
	var _helpersMatches = __webpack_require__(11);
	
	var _helpersMatches2 = _interopRequireDefault(_helpersMatches);
	
	var keys = {
	    node: new Object()
	};
	
	var EspalierNode = (function () {
	    function EspalierNode(node) {
	        _classCallCheck(this, EspalierNode);
	
	        this._internals = new WeakMap();
	
	        if ((0, _helpersIsString2["default"])(node)) {
	            var wrapper = document.createElement("div");
	            wrapper.innerHTML = node;
	            node = wrapper.firstChild;
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
	                var wrapper = document.createElement("div");
	                wrapper.innerHTML = stuff;
	
	                var _iteratorNormalCompletion = true;
	                var _didIteratorError = false;
	                var _iteratorError = undefined;
	
	                try {
	                    for (var _iterator = wrapper.childNodes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
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
	    }]);
	
	    return EspalierNode;
	})();
	
	exports["default"] = EspalierNode;
	module.exports = exports["default"];

/***/ },
/* 8 */
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
/* 9 */
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
	            //IE 8 Support ....
	            args.target = args.srcElement;
	
	            args.preventDefault = function () {
	                args.cancelBubble = true;
	            };
	
	            args.stopPropagation = function () {
	                args.returnValue = false;
	            };
	
	            handler(args);
	        });
	    }
	};
	
	module.exports = exports['default'];

/***/ },
/* 10 */
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
/* 11 */
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
/* 12 */
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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _espalierCommon = __webpack_require__(6);
	
	var _espalierCommon2 = _interopRequireDefault(_espalierCommon);
	
	var _espalierCore = __webpack_require__(4);
	
	var _espalierCore2 = _interopRequireDefault(_espalierCore);
	
	var _espalierDomnode = __webpack_require__(7);
	
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

/***/ }
/******/ ])
});
;
//# sourceMappingURL=tests-compiled.js.map