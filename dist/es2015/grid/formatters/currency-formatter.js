export class CurrencyFormatter {
    format(data) {
        const asNumber = Number.parseFloat(data);
        if (isNaN(asNumber)) {
            return "";
        }
        return asNumber.toLocaleString(undefined, { style: "currency", currency: "USD" });
    }
}
