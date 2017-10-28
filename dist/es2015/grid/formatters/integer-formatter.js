export class IntegerFormatter {
    format(data) {
        const asNumber = Number.parseFloat(data);
        if (isNaN(asNumber)) {
            return "";
        }
        return asNumber.toLocaleString(undefined, { maximumFractionDigits: 0 });
    }
}
