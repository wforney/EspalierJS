export default function (el, eventName, handler) {
    let handlerRef;

    if (el.addEventListener) {
        handlerRef = handler;
        el.addEventListener(eventName, handler);
    } else {
        let wrappedHandler = (args) => {
            //IE 8 Support ....
            //args.target = args.srcElement;

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