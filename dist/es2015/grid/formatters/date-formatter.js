import * as moment from "moment";
export class DateFormatter {
    format(data) {
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
    }
    ;
}
