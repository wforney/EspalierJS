export default function (el, eventName, handler) {
    var handlerRef;
    if (el.addEventListener) {
        handlerRef = handler;
         el.addEventListener(eventName, handler);
    } else {
        var wrappedHandler = function (args) {
            //IE 8 Support ....
            args.target = args.srcElement;

            args.preventDefault = function () {
                args.cancelBubble = true;
            }

            args.stopPropagation = function () {
                args.returnValue = false;
            }

            handler(args);
        };
        
        handlerRef = el.attachEvent('on' + eventName, wrappedHandler);
    }
    return handlerRef;
}