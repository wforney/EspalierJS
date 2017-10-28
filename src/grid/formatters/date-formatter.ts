import * as moment from "moment";
import { IEspalierDataFormatter } from "../espalier-data-formatter";

export class DateFormatter implements IEspalierDataFormatter {
  public format(data: any) {
    let parsedDate = moment(data);

    if (!parsedDate.isValid()) {
      return {
        date: "INVALID",
        time: "INVALID"
      };
    }

    return {
      date: parsedDate.format("L"),
      time: parsedDate.format("LT")
    };
  };
}
