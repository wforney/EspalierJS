import { DateTime } from "luxon";
export class DateFormatter {
    format(data) {
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
