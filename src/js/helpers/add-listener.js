export default function (el, eventName, handler) {
    if (el.addEventListener) {
        el.addEventListener(eventName, handler);
    } else {
        el.attachEvent('on' + eventName, function (args) {
            args.target = args.srcElement;
            handler(args);
        });
    }
}