(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
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
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _srcJsEspalierGraph = __webpack_require__(3);
	
	var _srcJsEspalierGraph2 = _interopRequireDefault(_srcJsEspalierGraph);
	
	var _srcJsEspalierGraphNode = __webpack_require__(18);
	
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
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _espalierMessageFactory = __webpack_require__(5);
	
	var _espalierMessageFactory2 = _interopRequireDefault(_espalierMessageFactory);
	
	var _espalierWaitscreen = __webpack_require__(14);
	
	var _espalierWaitscreen2 = _interopRequireDefault(_espalierWaitscreen);
	
	var _espalierCommon = __webpack_require__(6);
	
	var _espalierCommon2 = _interopRequireDefault(_espalierCommon);
	
	var _helpersIsString = __webpack_require__(8);
	
	var _helpersIsString2 = _interopRequireDefault(_helpersIsString);
	
	var _helpersAddListener = __webpack_require__(9);
	
	var _helpersAddListener2 = _interopRequireDefault(_helpersAddListener);
	
	var _helpersMatches = __webpack_require__(11);
	
	var _helpersMatches2 = _interopRequireDefault(_helpersMatches);
	
	var _ajaxRequest = __webpack_require__(15);
	
	var _ajaxRequest2 = _interopRequireDefault(_ajaxRequest);
	
	var _helpersMainMessage = __webpack_require__(16);
	
	var _helpersMainMessage2 = _interopRequireDefault(_helpersMainMessage);
	
	var _pubsubJs = __webpack_require__(17);
	
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
	
	var _templatesBootstrapTemplates = __webpack_require__(13);
	
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
	
	var _espalierCommon = __webpack_require__(6);
	
	var _espalierCommon2 = _interopRequireDefault(_espalierCommon);
	
	var _Repeater = __webpack_require__(12);
	
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
	        key: "prepend",
	        value: function prepend(stuff) {
	            var node = this.getNode();
	
	            if ((0, _helpersIsString2["default"])(stuff)) {
	                node.insertBefore(str2DOMElement(stuff), node.firstChild);
	                return;
	            }
	
	            node.insertBefore(stuff, node.firstChild);
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
	
	var _espalierDomnode = __webpack_require__(7);
	
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
	        key: "count",
	        value: function count() {
	            return internals.get(this).get(keys.settings).src.count();
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
	                        }, navigation.filter);
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
/* 13 */
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
/* 14 */
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
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var _espalierMessageFactory = __webpack_require__(5);
	
	var _espalierMessageFactory2 = _interopRequireDefault(_espalierMessageFactory);
	
	var _espalierCommon = __webpack_require__(6);
	
	var _espalierCommon2 = _interopRequireDefault(_espalierCommon);
	
	var _helpersMainMessage = __webpack_require__(16);
	
	var _helpersMainMessage2 = _interopRequireDefault(_helpersMainMessage);
	
	var _pubsubJs = __webpack_require__(17);
	
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
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	var _espalierMessageFactory = __webpack_require__(5);
	
	var _espalierMessageFactory2 = _interopRequireDefault(_espalierMessageFactory);
	
	var _espalierCommon = __webpack_require__(6);
	
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
/* 17 */
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
/* 18 */
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

/***/ }
/******/ ])
});
;
//# sourceMappingURL=tests-compiled.js.map