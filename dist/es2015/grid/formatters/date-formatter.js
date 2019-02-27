export class DateFormatter {
    format(isoDate) {
        const parsedDate = new Date(isoDate);
        return {
            date: parsedDate.toLocaleDateString(),
            time: parsedDate.toLocaleTimeString()
        };
    }
}
