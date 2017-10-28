import { IEspalierDataFormatter } from "../espalier-data-formatter";

export class NumberFormatter implements IEspalierDataFormatter {
  public format(data: any) {
    const asNumber = Number.parseFloat(data);

    if (isNaN(asNumber)) {
      return "";
    }

    return asNumber.toLocaleString(undefined, { maximumFractionDigits: 3, minimumFractionDigits: 3 });
  }
}
