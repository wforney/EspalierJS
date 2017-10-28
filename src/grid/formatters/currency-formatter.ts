import { IEspalierDataFormatter } from "../espalier-data-formatter";

export class CurrencyFormatter implements IEspalierDataFormatter {
  public format(data: any) {
    const asNumber = Number.parseFloat(data);

    if (isNaN(asNumber)) {
      return "";
    }

    return asNumber.toLocaleString(undefined, { style: "currency", currency: "USD" });
  }
}
