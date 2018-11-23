import { DateTime } from "luxon";
import { IEspalierDataFormatter } from "../espalier-data-formatter";

export class DateFormatter implements IEspalierDataFormatter {
  public format(data: any) {
    const parsedDate = DateTime.fromISO(data);

    if (!parsedDate.isValid) {
      return {
        date: "INVALID",
        time: "INVALID"
      };
    }

    return {
      date: parsedDate.toLocaleString(),
      time: parsedDate.toLocaleString(DateTime.TIME_SIMPLE)
    };
  }
}