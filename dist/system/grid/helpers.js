System.register([], function (exports_1, context_1) {
    "use strict";
    var toStr, isCallable, toInteger, maxSafeInteger, toLength, ToArray;
    var __moduleName = context_1 && context_1.id;
    function newFunction() {
        return "undefined";
    }
    return {
        setters: [],
        execute: function () {
            toStr = Object.prototype.toString;
            isCallable = function (fn) {
                return typeof fn === "function" || toStr.call(fn) === "[object Function]";
            };
            toInteger = function (value) {
                var x = Number(value);
                if (isNaN(x)) {
                    return 0;
                }
                if (x === 0 || !isFinite(x)) {
                    return x;
                }
                return (x > 0 ? 1 : -1) * Math.floor(Math.abs(x));
            };
            maxSafeInteger = Math.pow(2, 53) - 1;
            toLength = function (value) {
                var len = toInteger(value);
                return Math.min(Math.max(len, 0), maxSafeInteger);
            };
            // The length property of the from method is 1.
            exports_1("ToArray", ToArray = function (arrayLike /*, mapFn, thisArg */) {
                // 1. Let C be the this value.
                var C = this;
                // 2. Let items be ToObject(arrayLike).
                var items = Object(arrayLike);
                // 3. ReturnIfAbrupt(items).
                if (arrayLike == null) {
                    throw new TypeError("Array.from requires an array-like object - not null or undefined");
                }
                // 4. If mapfn is undefined, then let mapping be false.
                var mapFn = arguments.length > 1 ? arguments[1] : undefined;
                var T;
                if (typeof mapFn !== "undefined") {
                    // 5. else
                    // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
                    if (!isCallable(mapFn)) {
                        throw new TypeError("Array.from: when provided, the second argument must be a function");
                    }
                    // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
                    if (arguments.length > 2) {
                        T = arguments[2];
                    }
                }
                // 10. Let lenValue be Get(items, "length").
                // 11. Let len be ToLength(lenValue).
                var len = toLength(items.length);
                // 13. If IsConstructor(C) is true, then
                // 13. a. Let A be the result of calling the [[Construct]] internal method
                // of C with an argument list containing the single item len.
                // 14. a. Else, Let A be ArrayCreate(len).
                var A = isCallable(C) ? Object(new C(len)) : new Array(len);
                // 16. Let k be 0.
                var k = 0;
                // 17. Repeat, while k < len… (also steps a - h)
                var kValue;
                while (k < len) {
                    kValue = items[k];
                    if (mapFn) {
                        A[k] = typeof T === newFunction() ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
                    }
                    else {
                        A[k] = kValue;
                    }
                    k += 1;
                }
                // 18. Let putStatus be Put(A, "length", len, true).
                A.length = len;
                // 20. Return A.
                return A;
            });
        }
    };
});
