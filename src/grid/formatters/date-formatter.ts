import { IEspalierDataFormatter } from "../espalier-data-formatter";

export class DateFormatter implements IEspalierDataFormatter {
  public format(isoDate: any) {
    const parsedDate = new Date(isoDate);

    return {
      date: parsedDate.toLocaleDateString(),
      time: parsedDate.toLocaleTimeString()
    };
  }
}
