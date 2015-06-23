(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else {
        root.espalier = factory();
    }
}(( typeof window === 'object' && window ) || this, function () {