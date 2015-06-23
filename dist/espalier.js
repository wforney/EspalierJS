(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else {
        root.espalier = factory();
    }
}(( typeof window === 'object' && window ) || this, function () {/**
 * @license almond 0.3.1 Copyright (c) 2011-2014, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/almond for details
 */
//Going sloppy to avoid 'use strict' string cost, but strict practices should
//be followed.
/*jslint sloppy: true */
/*global setTimeout: false */

var requirejs, require, define;
(function (undef) {
    var main, req, makeMap, handlers,
        defined = {},
        waiting = {},
        config = {},
        defining = {},
        hasOwn = Object.prototype.hasOwnProperty,
        aps = [].slice,
        jsSuffixRegExp = /\.js$/;

    function hasProp(obj, prop) {
        return hasOwn.call(obj, prop);
    }

    /**
     * Given a relative module name, like ./something, normalize it to
     * a real name that can be mapped to a path.
     * @param {String} name the relative name
     * @param {String} baseName a real name that the name arg is relative
     * to.
     * @returns {String} normalized name
     */
    function normalize(name, baseName) {
        var nameParts, nameSegment, mapValue, foundMap, lastIndex,
            foundI, foundStarMap, starI, i, j, part,
            baseParts = baseName && baseName.split("/"),
            map = config.map,
            starMap = (map && map['*']) || {};

        //Adjust any relative paths.
        if (name && name.charAt(0) === ".") {
            //If have a base name, try to normalize against it,
            //otherwise, assume it is a top-level require that will
            //be relative to baseUrl in the end.
            if (baseName) {
                name = name.split('/');
                lastIndex = name.length - 1;

                // Node .js allowance:
                if (config.nodeIdCompat && jsSuffixRegExp.test(name[lastIndex])) {
                    name[lastIndex] = name[lastIndex].replace(jsSuffixRegExp, '');
                }

                //Lop off the last part of baseParts, so that . matches the
                //"directory" and not name of the baseName's module. For instance,
                //baseName of "one/two/three", maps to "one/two/three.js", but we
                //want the directory, "one/two" for this normalization.
                name = baseParts.slice(0, baseParts.length - 1).concat(name);

                //start trimDots
                for (i = 0; i < name.length; i += 1) {
                    part = name[i];
                    if (part === ".") {
                        name.splice(i, 1);
                        i -= 1;
                    } else if (part === "..") {
                        if (i === 1 && (name[2] === '..' || name[0] === '..')) {
                            //End of the line. Keep at least one non-dot
                            //path segment at the front so it can be mapped
                            //correctly to disk. Otherwise, there is likely
                            //no path mapping for a path starting with '..'.
                            //This can still fail, but catches the most reasonable
                            //uses of ..
                            break;
                        } else if (i > 0) {
                            name.splice(i - 1, 2);
                            i -= 2;
                        }
                    }
                }
                //end trimDots

                name = name.join("/");
            } else if (name.indexOf('./') === 0) {
                // No baseName, so this is ID is resolved relative
                // to baseUrl, pull off the leading dot.
                name = name.substring(2);
            }
        }

        //Apply map config if available.
        if ((baseParts || starMap) && map) {
            nameParts = name.split('/');

            for (i = nameParts.length; i > 0; i -= 1) {
                nameSegment = nameParts.slice(0, i).join("/");

                if (baseParts) {
                    //Find the longest baseName segment match in the config.
                    //So, do joins on the biggest to smallest lengths of baseParts.
                    for (j = baseParts.length; j > 0; j -= 1) {
                        mapValue = map[baseParts.slice(0, j).join('/')];

                        //baseName segment has  config, find if it has one for
                        //this name.
                        if (mapValue) {
                            mapValue = mapValue[nameSegment];
                            if (mapValue) {
                                //Match, update name to the new value.
                                foundMap = mapValue;
                                foundI = i;
                                break;
                            }
                        }
                    }
                }

                if (foundMap) {
                    break;
                }

                //Check for a star map match, but just hold on to it,
                //if there is a shorter segment match later in a matching
                //config, then favor over this star map.
                if (!foundStarMap && starMap && starMap[nameSegment]) {
                    foundStarMap = starMap[nameSegment];
                    starI = i;
                }
            }

            if (!foundMap && foundStarMap) {
                foundMap = foundStarMap;
                foundI = starI;
            }

            if (foundMap) {
                nameParts.splice(0, foundI, foundMap);
                name = nameParts.join('/');
            }
        }

        return name;
    }

    function makeRequire(relName, forceSync) {
        return function () {
            //A version of a require function that passes a moduleName
            //value for items that may need to
            //look up paths relative to the moduleName
            var args = aps.call(arguments, 0);

            //If first arg is not require('string'), and there is only
            //one arg, it is the array form without a callback. Insert
            //a null so that the following concat is correct.
            if (typeof args[0] !== 'string' && args.length === 1) {
                args.push(null);
            }
            return req.apply(undef, args.concat([relName, forceSync]));
        };
    }

    function makeNormalize(relName) {
        return function (name) {
            return normalize(name, relName);
        };
    }

    function makeLoad(depName) {
        return function (value) {
            defined[depName] = value;
        };
    }

    function callDep(name) {
        if (hasProp(waiting, name)) {
            var args = waiting[name];
            delete waiting[name];
            defining[name] = true;
            main.apply(undef, args);
        }

        if (!hasProp(defined, name) && !hasProp(defining, name)) {
            throw new Error('No ' + name);
        }
        return defined[name];
    }

    //Turns a plugin!resource to [plugin, resource]
    //with the plugin being undefined if the name
    //did not have a plugin prefix.
    function splitPrefix(name) {
        var prefix,
            index = name ? name.indexOf('!') : -1;
        if (index > -1) {
            prefix = name.substring(0, index);
            name = name.substring(index + 1, name.length);
        }
        return [prefix, name];
    }

    /**
     * Makes a name map, normalizing the name, and using a plugin
     * for normalization if necessary. Grabs a ref to plugin
     * too, as an optimization.
     */
    makeMap = function (name, relName) {
        var plugin,
            parts = splitPrefix(name),
            prefix = parts[0];

        name = parts[1];

        if (prefix) {
            prefix = normalize(prefix, relName);
            plugin = callDep(prefix);
        }

        //Normalize according
        if (prefix) {
            if (plugin && plugin.normalize) {
                name = plugin.normalize(name, makeNormalize(relName));
            } else {
                name = normalize(name, relName);
            }
        } else {
            name = normalize(name, relName);
            parts = splitPrefix(name);
            prefix = parts[0];
            name = parts[1];
            if (prefix) {
                plugin = callDep(prefix);
            }
        }

        //Using ridiculous property names for space reasons
        return {
            f: prefix ? prefix + '!' + name : name, //fullName
            n: name,
            pr: prefix,
            p: plugin
        };
    };

    function makeConfig(name) {
        return function () {
            return (config && config.config && config.config[name]) || {};
        };
    }

    handlers = {
        require: function (name) {
            return makeRequire(name);
        },
        exports: function (name) {
            var e = defined[name];
            if (typeof e !== 'undefined') {
                return e;
            } else {
                return (defined[name] = {});
            }
        },
        module: function (name) {
            return {
                id: name,
                uri: '',
                exports: defined[name],
                config: makeConfig(name)
            };
        }
    };

    main = function (name, deps, callback, relName) {
        var cjsModule, depName, ret, map, i,
            args = [],
            callbackType = typeof callback,
            usingExports;

        //Use name if no relName
        relName = relName || name;

        //Call the callback to define the module, if necessary.
        if (callbackType === 'undefined' || callbackType === 'function') {
            //Pull out the defined dependencies and pass the ordered
            //values to the callback.
            //Default to [require, exports, module] if no deps
            deps = !deps.length && callback.length ? ['require', 'exports', 'module'] : deps;
            for (i = 0; i < deps.length; i += 1) {
                map = makeMap(deps[i], relName);
                depName = map.f;

                //Fast path CommonJS standard dependencies.
                if (depName === "require") {
                    args[i] = handlers.require(name);
                } else if (depName === "exports") {
                    //CommonJS module spec 1.1
                    args[i] = handlers.exports(name);
                    usingExports = true;
                } else if (depName === "module") {
                    //CommonJS module spec 1.1
                    cjsModule = args[i] = handlers.module(name);
                } else if (hasProp(defined, depName) ||
                           hasProp(waiting, depName) ||
                           hasProp(defining, depName)) {
                    args[i] = callDep(depName);
                } else if (map.p) {
                    map.p.load(map.n, makeRequire(relName, true), makeLoad(depName), {});
                    args[i] = defined[depName];
                } else {
                    throw new Error(name + ' missing ' + depName);
                }
            }

            ret = callback ? callback.apply(defined[name], args) : undefined;

            if (name) {
                //If setting exports via "module" is in play,
                //favor that over return value and exports. After that,
                //favor a non-undefined return value over exports use.
                if (cjsModule && cjsModule.exports !== undef &&
                        cjsModule.exports !== defined[name]) {
                    defined[name] = cjsModule.exports;
                } else if (ret !== undef || !usingExports) {
                    //Use the return value from the function.
                    defined[name] = ret;
                }
            }
        } else if (name) {
            //May just be an object definition for the module. Only
            //worry about defining if have a module name.
            defined[name] = callback;
        }
    };

    requirejs = require = req = function (deps, callback, relName, forceSync, alt) {
        if (typeof deps === "string") {
            if (handlers[deps]) {
                //callback in this case is really relName
                return handlers[deps](callback);
            }
            //Just return the module wanted. In this scenario, the
            //deps arg is the module name, and second arg (if passed)
            //is just the relName.
            //Normalize module name, if it contains . or ..
            return callDep(makeMap(deps, callback).f);
        } else if (!deps.splice) {
            //deps is a config object, not an array.
            config = deps;
            if (config.deps) {
                req(config.deps, config.callback);
            }
            if (!callback) {
                return;
            }

            if (callback.splice) {
                //callback is an array, which means it is a dependency list.
                //Adjust args if there are dependencies
                deps = callback;
                callback = relName;
                relName = null;
            } else {
                deps = undef;
            }
        }

        //Support require(['a'])
        callback = callback || function () {};

        //If relName is a function, it is an errback handler,
        //so remove it.
        if (typeof relName === 'function') {
            relName = forceSync;
            forceSync = alt;
        }

        //Simulate async callback;
        if (forceSync) {
            main(undef, deps, callback, relName);
        } else {
            //Using a non-zero value because of concern for what old browsers
            //do, and latest browsers "upgrade" to 4 if lower value is used:
            //http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#dom-windowtimers-settimeout:
            //If want a value immediately, use require('id') instead -- something
            //that works in almond on the global level, but not guaranteed and
            //unlikely to work in other AMD implementations.
            setTimeout(function () {
                main(undef, deps, callback, relName);
            }, 4);
        }

        return req;
    };

    /**
     * Just drops the config on the floor, but returns req in case
     * the config return value is used.
     */
    req.config = function (cfg) {
        return req(cfg);
    };

    /**
     * Expose module registry for debugging and tooling
     */
    requirejs._defined = defined;

    define = function (name, deps, callback) {
        if (typeof name !== 'string') {
            throw new Error('See almond README: incorrect module build, no module name');
        }

        //This module may not have dependencies
        if (!deps.splice) {
            //deps is not an array, so probably means
            //an object literal or factory function for
            //the value. Adjust args.
            callback = deps;
            deps = [];
        }

        if (!hasProp(defined, name) && !hasProp(waiting, name)) {
            waiting[name] = [name, deps, callback];
        }
    };

    define.amd = {
        jQuery: true
    };
}());

define("../node_modules/almond/almond", function(){});

define('js/templates/bootstrapTemplates',[], function() {
	"use strict";
	var templates = {
		message: function(data) {
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

				$.each(data.messages, function(index, message) {
					list.append("<li>" + message + "</li>");
				});

				root.append(list);
			} else {
				root.append("<p>" + data.messages + "</p>");
			}

			return root[0];
		}
	}

	return templates;
});

define('js/espalier.messageFactory',["./templates/bootstrapTemplates"], function(bootstrapTemplates) {
  "use strict";

  var MessageDisplayer = function(args) {
    this.settings = {
      attachTo: null,
      messageContainerClass: "message-container",
      closeMessageClass: "close-message",
      infoMessageClass: "info-message",
      warningMessageClass: "warning-message",
      errorMessageClass: "error-message",
      successMessageClass: "success-message",
      messageAttachment: factory.messageAttachment.Fixed,
      onRemoved: function() {},
      onAdded: function() {}
    };

    var scope = this;

    $.extend(this.settings, args);

    if(!this.settings.attachTo) {
      throw("MessageFactory requires an attachTo argument.");
    }

    this.remove = function() {
      if (scope.message) {
        scope.message.remove();
        scope.message = undefined;
        scope.settings.onRemoved();
      }
    };
  };

  MessageDisplayer.prototype.show = function(messageArgs) {
    var messageTypeClass, messageSettings, messageAttachmentClass;

    //NOTE: There should only be one message displayed per instance.
    if (this.message) {
      this.message.remove();
    }

    //NOTE: Allow them to either use an array of messages or a
    //      single message.
    if (typeof messageArgs.message === 'string') {
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

    this.message = bootstrapTemplates.message({
      messageTypeClass: messageTypeClass,
      messages: messageSettings.message,
      messageContainerClass: this.settings.messageContainerClass,
      closeMessageClass: this.settings.closeMessageClass,
      messageAttachmentClass: messageAttachmentClass,
      moreThanOne: (typeof messageArgs.message !== 'string' &&
        messageArgs.message.length > 1)
    });

    this.message = $(this.message);
    this.settings.attachTo.append(this.message);
    this.settings.onAdded(this.message);
    this.message.on("click", "." + this.settings.closeMessageClass, this.remove);
    return this.message;
  };

  var factory = {
    create: function(args) {
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

  return factory;
});
define('js/espalier.common',[], function () {
    var body = $("body");

    return {
        body: body
    };
});
define('js/espalier.waitscreen',["./espalier.common"], function (common) {
    "use strict";

    var pleaseWaitId = "espalier-wait-screen";
    var pleaseWait = $("<div />");
    pleaseWait.attr("id", pleaseWaitId);

    var hourglass = 'data:image/svg+xml;utf8,' +
        "<svg xmlns=\"http://www.w3.org/2000/svg\" class=\"uil-gears\" viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid meet\" width=\"120px\" height=\"120px\">" +
        "  <rect class=\"bk\" fill=\"none\" x=\"0\" y=\"0\" width=\"100\" height=\"100\" />" +
        "  <g transform=\"translate(-20 -20)\">" +
        "    <path fill=\"#fafafa\" d=\"M 79.9 52.6 C 80 51.8 80 50.9 80 50 s 0 -1.8 -0.1 -2.6 l -5.1 -0.4 c -0.3 -2.4 -0.9 -4.6 -1.8 -6.7 l 4.2 -2.9 c -0.7 -1.6 -1.6 -3.1 -2.6 -4.5 L 70 35 c -1.4 -1.9 -3.1 -3.5 -4.9 -4.9 l 2.2 -4.6 c -1.4 -1 -2.9 -1.9 -4.5 -2.6 L 59.8 27 c -2.1 -0.9 -4.4 -1.5 -6.7 -1.8 l -0.4 -5.1 C 51.8 20 50.9 20 50 20 s -1.8 0 -2.6 0.1 l -0.4 5.1 c -2.4 0.3 -4.6 0.9 -6.7 1.8 l -2.9 -4.1 c -1.6 0.7 -3.1 1.6 -4.5 2.6 l 2.1 4.6 c -1.9 1.4 -3.5 3.1 -5 4.9 l -4.5 -2.1 c -1 1.4 -1.9 2.9 -2.6 4.5 l 4.1 2.9 c -0.9 2.1 -1.5 4.4 -1.8 6.8 l -5 0.4 C 20 48.2 20 49.1 20 50 s 0 1.8 0.1 2.6 l 5 0.4 c 0.3 2.4 0.9 4.7 1.8 6.8 l -4.1 2.9 c 0.7 1.6 1.6 3.1 2.6 4.5 l 4.5 -2.1 c 1.4 1.9 3.1 3.5 5 4.9 l -2.1 4.6 c 1.4 1 2.9 1.9 4.5 2.6 l 2.9 -4.1 c 2.1 0.9 4.4 1.5 6.7 1.8 l 0.4 5.1 C 48.2 80 49.1 80 50 80 s 1.8 0 2.6 -0.1 l 0.4 -5.1 c 2.3 -0.3 4.6 -0.9 6.7 -1.8 l 2.9 4.2 c 1.6 -0.7 3.1 -1.6 4.5 -2.6 L 65 69.9 c 1.9 -1.4 3.5 -3 4.9 -4.9 l 4.6 2.2 c 1 -1.4 1.9 -2.9 2.6 -4.5 L 73 59.8 c 0.9 -2.1 1.5 -4.4 1.8 -6.7 L 79.9 52.6 Z M 50 65 c -8.3 0 -15 -6.7 -15 -15 c 0 -8.3 6.7 -15 15 -15 s 15 6.7 15 15 C 65 58.3 58.3 65 50 65 Z\">" +
        "      <animateTransform type=\"rotate\" dur=\"2s\" repeatCount=\"indefinite\" to=\"0 50 50\" from=\"90 50 50\" attributeName=\"transform\" />" +
        "    </path>" +
        "  </g>" +
        "  <g transform=\"translate(20 20) rotate(15 50.0002 50)\">" +
        "    <path fill=\"#efefef\" d=\"M 79.9 52.6 C 80 51.8 80 50.9 80 50 s 0 -1.8 -0.1 -2.6 l -5.1 -0.4 c -0.3 -2.4 -0.9 -4.6 -1.8 -6.7 l 4.2 -2.9 c -0.7 -1.6 -1.6 -3.1 -2.6 -4.5 L 70 35 c -1.4 -1.9 -3.1 -3.5 -4.9 -4.9 l 2.2 -4.6 c -1.4 -1 -2.9 -1.9 -4.5 -2.6 L 59.8 27 c -2.1 -0.9 -4.4 -1.5 -6.7 -1.8 l -0.4 -5.1 C 51.8 20 50.9 20 50 20 s -1.8 0 -2.6 0.1 l -0.4 5.1 c -2.4 0.3 -4.6 0.9 -6.7 1.8 l -2.9 -4.1 c -1.6 0.7 -3.1 1.6 -4.5 2.6 l 2.1 4.6 c -1.9 1.4 -3.5 3.1 -5 4.9 l -4.5 -2.1 c -1 1.4 -1.9 2.9 -2.6 4.5 l 4.1 2.9 c -0.9 2.1 -1.5 4.4 -1.8 6.8 l -5 0.4 C 20 48.2 20 49.1 20 50 s 0 1.8 0.1 2.6 l 5 0.4 c 0.3 2.4 0.9 4.7 1.8 6.8 l -4.1 2.9 c 0.7 1.6 1.6 3.1 2.6 4.5 l 4.5 -2.1 c 1.4 1.9 3.1 3.5 5 4.9 l -2.1 4.6 c 1.4 1 2.9 1.9 4.5 2.6 l 2.9 -4.1 c 2.1 0.9 4.4 1.5 6.7 1.8 l 0.4 5.1 C 48.2 80 49.1 80 50 80 s 1.8 0 2.6 -0.1 l 0.4 -5.1 c 2.3 -0.3 4.6 -0.9 6.7 -1.8 l 2.9 4.2 c 1.6 -0.7 3.1 -1.6 4.5 -2.6 L 65 69.9 c 1.9 -1.4 3.5 -3 4.9 -4.9 l 4.6 2.2 c 1 -1.4 1.9 -2.9 2.6 -4.5 L 73 59.8 c 0.9 -2.1 1.5 -4.4 1.8 -6.7 L 79.9 52.6 Z M 50 65 c -8.3 0 -15 -6.7 -15 -15 c 0 -8.3 6.7 -15 15 -15 s 15 6.7 15 15 C 65 58.3 58.3 65 50 65 Z\">" +
        "      <animateTransform type=\"rotate\" dur=\"2s\" repeatCount=\"indefinite\" to=\"90 50 50\" from=\"0 50 50\" attributeName=\"transform\" />" +
        "    </path>" +
        "  </g>" +
        "</svg>";
    var waitImage = $("<img />");
    waitImage.attr("src", hourglass);
    var inner = $("<div />");
    inner.append(waitImage);
    pleaseWait.append(inner);

    var waitScreen = {
        show: function () {
            if ($("#" + pleaseWaitId).length > 0) {
                return pleaseWait;
            }

            common.body.append(pleaseWait);
            return pleaseWait;
        },
        hide: function () {
            pleaseWait.remove();
        }
    };

    return waitScreen;
});
/*
Copyright (c) 2010,2011,2012,2013,2014 Morgan Roderick http://roderick.dk
License: MIT - http://mrgnrdrck.mit-license.org

https://github.com/mroderick/PubSubJS
*/
(function (root, factory){
	'use strict';

    if (typeof define === 'function' && define.amd){
        // AMD. Register as an anonymous module.
        define('pubsub',['exports'], factory);

    } else if (typeof exports === 'object'){
        // CommonJS
        factory(exports);

    } else {
        // Browser globals
        var PubSub = {};
        root.PubSub = PubSub;
        factory(PubSub);
    }
}(( typeof window === 'object' && window ) || this, function (PubSub){
	'use strict';

	var messages = {},
		lastUid = -1;

	function hasKeys(obj){
		var key;

		for (key in obj){
			if ( obj.hasOwnProperty(key) ){
				return true;
			}
		}
		return false;
	}

	/**
	 *	Returns a function that throws the passed exception, for use as argument for setTimeout
	 *	@param { Object } ex An Error object
	 */
	function throwException( ex ){
		return function reThrowException(){
			throw ex;
		};
	}

	function callSubscriberWithDelayedExceptions( subscriber, message, data ){
		try {
			subscriber( message, data );
		} catch( ex ){
			setTimeout( throwException( ex ), 0);
		}
	}

	function callSubscriberWithImmediateExceptions( subscriber, message, data ){
		subscriber( message, data );
	}

	function deliverMessage( originalMessage, matchedMessage, data, immediateExceptions ){
		var subscribers = messages[matchedMessage],
			callSubscriber = immediateExceptions ? callSubscriberWithImmediateExceptions : callSubscriberWithDelayedExceptions,
			s;

		if ( !messages.hasOwnProperty( matchedMessage ) ) {
			return;
		}

		for (s in subscribers){
			if ( subscribers.hasOwnProperty(s)){
				callSubscriber( subscribers[s], originalMessage, data );
			}
		}
	}

	function createDeliveryFunction( message, data, immediateExceptions ){
		return function deliverNamespaced(){
			var topic = String( message ),
				position = topic.lastIndexOf( '.' );

			// deliver the message as it is now
			deliverMessage(message, message, data, immediateExceptions);

			// trim the hierarchy and deliver message to each level
			while( position !== -1 ){
				topic = topic.substr( 0, position );
				position = topic.lastIndexOf('.');
				deliverMessage( message, topic, data, immediateExceptions );
			}
		};
	}

	function messageHasSubscribers( message ){
		var topic = String( message ),
			found = Boolean(messages.hasOwnProperty( topic ) && hasKeys(messages[topic])),
			position = topic.lastIndexOf( '.' );

		while ( !found && position !== -1 ){
			topic = topic.substr( 0, position );
			position = topic.lastIndexOf( '.' );
			found = Boolean(messages.hasOwnProperty( topic ) && hasKeys(messages[topic]));
		}

		return found;
	}

	function publish( message, data, sync, immediateExceptions ){
		var deliver = createDeliveryFunction( message, data, immediateExceptions ),
			hasSubscribers = messageHasSubscribers( message );

		if ( !hasSubscribers ){
			return false;
		}

		if ( sync === true ){
			deliver();
		} else {
			setTimeout( deliver, 0 );
		}
		return true;
	}

	/**
	 *	PubSub.publish( message[, data] ) -> Boolean
	 *	- message (String): The message to publish
	 *	- data: The data to pass to subscribers
	 *	Publishes the the message, passing the data to it's subscribers
	**/
	PubSub.publish = function( message, data ){
		return publish( message, data, false, PubSub.immediateExceptions );
	};

	/**
	 *	PubSub.publishSync( message[, data] ) -> Boolean
	 *	- message (String): The message to publish
	 *	- data: The data to pass to subscribers
	 *	Publishes the the message synchronously, passing the data to it's subscribers
	**/
	PubSub.publishSync = function( message, data ){
		return publish( message, data, true, PubSub.immediateExceptions );
	};

	/**
	 *	PubSub.subscribe( message, func ) -> String
	 *	- message (String): The message to subscribe to
	 *	- func (Function): The function to call when a new message is published
	 *	Subscribes the passed function to the passed message. Every returned token is unique and should be stored if
	 *	you need to unsubscribe
	**/
	PubSub.subscribe = function( message, func ){
		if ( typeof func !== 'function'){
			return false;
		}

		// message is not registered yet
		if ( !messages.hasOwnProperty( message ) ){
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
	PubSub.clearAllSubscriptions = function clearAllSubscriptions(){
		messages = {};
	};

	/*Public: Clear subscriptions by the topic
	*/
	PubSub.clearSubscriptions = function clearSubscriptions(topic){
		var m; 
		for (m in messages){
			if (messages.hasOwnProperty(m) && m.indexOf(topic) === 0){
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
	PubSub.unsubscribe = function(value){
		var isTopic    = typeof value === 'string' && messages.hasOwnProperty(value),
			isToken    = !isTopic && typeof value === 'string',
			isFunction = typeof value === 'function',
			result = false,
			m, message, t;

		if (isTopic){
			delete messages[value];
			return;
		}

		for ( m in messages ){
			if ( messages.hasOwnProperty( m ) ){
				message = messages[m];

				if ( isToken && message[value] ){
					delete message[value];
					result = value;
					// tokens are unique, so we can just stop here
					break;
				}

				if (isFunction) {
					for ( t in message ){
						if (message.hasOwnProperty(t) && message[t] === value){
							delete message[t];
							result = true;
						}
					}
				}
			}
		}

		return result;
	};
}));

define('js/espalier.core',["./espalier.messageFactory", "./espalier.waitscreen", "./espalier.common", "pubsub"],
    function (messageFactory, waitScreen, common, pubsub) {
        "use strict";

        var mainMessage = messageFactory.create({
            attachTo: common.body
        });

        var parseDate;
        var testDate = new Date('2011-06-02T09:34:29+02:00');

        if (!testDate || +testDate !== 1307000069000) {
            parseDate = function (s) {
                var day, tz,
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
                        tz = (parseInt(p[5], 10) * 60);
                        if (p[6]) tz += parseInt(p[6], 10);
                        if (p[4] == '+') tz *= -1;
                        if (tz) day.setUTCMinutes(day.getUTCMinutes() + tz);
                    }
                    return day;
                }
                return NaN;
            };
        }
        else {
            parseDate = function (s) {
                return new Date(s);
            };
        }

        testDate = undefined;

        var core = {
            sendRequest: function (req) {
                waitScreen.show();
                $("." + mainMessage.settings.messageContainerClass).remove();

                var ajaxSettings = {
                    type: "GET",
                    xhrFields: {
                        withCredentials: true
                    },
                    statusCode: {
                        500: function (error) {
                            core.showError({
                                message: error.responseJSON.Message,
                                cssClass: "error"
                            });
                        },
                        400: function (response) {
                            var errors = [];

                            $.each(response.responseJSON.errors, function (index, error) {
                                if (error.source && error.source.parameter) {
                                    var specificField = $("#" + error.source.parameter.toLowerCase());

                                    if (specificField) {
                                        var fieldMessage = specificField.data("message");

                                        if (fieldMessage) {
                                            fieldMessage.show({
                                                message: error.detail,
                                                messageType: messageFactory.messageType.Error
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
                    complete: function (response) {
                        waitScreen.hide();

                        if (response.status === 200) {
                            if (req.event) {
                                pubsub.publish(req.event, response.responseJSON);
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
            showWarning: function (messages) {
                mainMessage.show({
                    message: messages,
                    messageType: messageFactory.messageType.Warning
                });
            },
            showError: function (messages) {
                mainMessage.show({
                    message: messages,
                    messageType: messageFactory.messageType.Error
                });
            },
            showInfo: function (messages) {
                mainMessage.show({
                    message: messages,
                    messageType: messageFactory.messageType.Info
                });
            },
            isEmptyOrSpaces: function (str) {
                return str === undefined || str === null || str.match(/^\s*$/) !== null;
            },
            isEmail: function (str) {
                var emailRegex = /^(([\w-]+\.)+[\w-]+|([a-zA-Z]{1}|[\w-]{2,}))@((([0-1]?[0-9]{1,2}|25[0-5]|2[0-4][0-9])\.([0-1]?[0-9]{1,2}|25[0-5]|2[0-4][0-9])\.([0-1]?[0-9]{1,2}|25[0-5]|2[0-4][0-9])\.([0-1]?[0-9]{1,2}|25[0-5]|2[0-4][0-9])){1}|([a-zA-Z]+[\w-]+\.)+[a-zA-Z]{2,4})$/;
                return core.isEmptyOrSpaces(str) || str.match(emailRegex);
            },
            parseISODate: parseDate,
            shortDate: function (date) {
                if (!(date instanceof Date)) {
                    date = parseDate(date);
                }

                return (date.getMonth() + 1) +
                    "/" + date.getDate() +
                    "/" + date.getFullYear();
            },
            shortTime: function (date) {
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
            publish: function (topic, message) {
                pubsub.publish(topic, message);
            },
            subscribe: function (topic, handler) {
                return pubsub.subscribe(topic, function (topic, message) {
                    handler(message);
                });
            }
        };

        return core;
    });
define('js/espalier.validation',["./espalier.core"], function(core) {
    "use strict";

    var validation = {
        required: {
            invalid: function(control) {
                switch (control.attr("type")) {
                    case "checkbox":
                        return !control.is(":checked");
                        break;
                    default:
                        var value = control.val();
                        return core.isEmptyOrSpaces(value);
                        break;
                }
            },
            message: "Field is required."
        },
        email: {
            invalid: function(control) {
                var value = control.val();
                return !core.isEmail(value);
            },
            message: "Invalid email address."
        }
    };

    return validation;
});
define('js/espalier.tables',["./espalier.messageFactory", "./espalier.waitscreen", "./espalier.common", "./espalier.core"],
    function (messageFactory, waitScreen, common, core) {
        "use strict";

		var getFooter = function (table) {
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

			var nextPage = (table.settings.currentPage + 1);
			var next = $("<li><a data-page=\"" + nextPage + "\" class=\"espalier-table-button\" href=\"javascript: void(0);\"><span aria-hidden=\"true\">&raquo;</span></a></li>");

			if (nextPage == table.settings.pages) {
				next.addClass("disabled");
			}

			pagingControl.append(next);

			return $("<tfoot />").append($("<tr />").append($("<td colspan=\"42\" />").append(pagingControl)));
		};

		var renderTable = function (table) {
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
				table.settings.container.html(rendered);
			} else {
				core.sendRequest({
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
					table.settings.container.html(rendered);
				});
			}
		};

		var TableInstance = function (args) {
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
				tableClass: "espalier-table"
			};

			$.extend(this.settings, args);

			if (!this.settings.fetchUrl && !this.settings.data) {
				throw new TypeError("You must either specify a fetch url or pass in data for the table to display.");
			}

			if (!this.settings.container) {
				throw new TypeError("You must specify a container to place the table in.")
			}

			if (!this.settings.rowTemplate) {
				throw new TypeError("You must provide a row template.")
			}

			if (this.settings.data) {
				this.settings.pages = Math.ceil(this.settings.data.length / this.settings.pageSize);
			}

			$.extend(this.settings, args);
		};

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
			create: function (args) {
				var table = new TableInstance(args);
				table.settings.container.on("click", ".espalier-table-button", function () {
					table.goToPage($(this).data("page"));
				});
				renderTable(table);
				return table;
			}
		};

		return tables;
	});
/// <reference path="../../typings/jquery/jquery.d.ts"/>
define('js/espalier',["./espalier.core", "./espalier.validation", "./espalier.messageFactory", "./espalier.waitscreen",
    "./espalier.tables"],
    function (core, validation, messageFactory, waitScreen, tables) {
        "use strict";

        var espalier = {
            showWarning: core.showWarning,
            showInfo: core.showInfo,
            sendRequest: core.sendRequest,
            table: tables.create,
            wire: function (form) {
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
                                messageType: messageFactory.messageType.Error
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
                            validations.push(validation.email);
                            group = control.closest(".form-group");
                            break;
                        default:
                            group = control.closest(".form-group");
                            break;
                    }

                    var controlMessage = messageFactory.create({
                        attachTo: group,
                        messageAttachment: messageFactory.messageAttachment.Flow,
                        onRemoved: function () {
                            group.removeClass("has-error");
                        },
                        onAdded: function () {
                            group.addClass("has-error");
                            group.velocity("callout.tada", {
                                duration: 500
                            });
                        }
                    });

                    if (control.attr("required")) {
                        validations.push(validation.required);
                        group.addClass("required");
                    }

                    control.data("message", controlMessage);
                    control.data("validations", validations);
                    control.attr(lowerCaseId, "");
                });
            },
            showWaitScreen: waitScreen.show,
            hideWaitScreen: waitScreen.hide,
            shortDate: core.shortDate,
            shortTime: core.shortTime,
            publish: core.publish,
            parseISODate: core.parseISODate,
            subscribe: core.subscribe
        };

        return espalier;
    });
    return require('js/espalier');
}));