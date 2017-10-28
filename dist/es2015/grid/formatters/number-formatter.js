export class NumberFormatter {
    format(data) {
        const asNumber = Number.parseFloat(data);
        if (isNaN(asNumber)) {
            return "";
        }
        return asNumber.toLocaleString(undefined, { maximumFractionDigits: 3, minimumFractionDigits: 3 });
    }
}
