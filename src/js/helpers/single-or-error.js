export default function (val) {
    if (val) {
        if (val.nodeName) {
            return val;
        }

        if (val[0].nodeName) {
            return val[0];
        }
    }

    throw new Error("This was not a single node.");
}