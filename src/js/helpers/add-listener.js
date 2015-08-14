export default function (el, eventName, handler) {
    if (el.addEventListener) {
        el.addEventListener(eventName, handler);
    } else {
        el.attachEvent('on' + eventName, function (args) {
            //IE 8 Support ....
            args.target = args.srcElement;

            args.preventDefault = function () {
                args.cancelBubble = true;
            }

            args.stopPropagation = function () {
                args.returnValue = false;
            }

            handler(args);
        });
    }
}