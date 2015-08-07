export default function (toTest) {
    return typeof toTest === 'string' || toTest instanceof String;
}