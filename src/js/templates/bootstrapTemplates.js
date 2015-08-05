let templates = {
    message: function (data) {
        let message = `<div class="${data.messageContainerClass} ${data.messageTypeClass} ${data.messageAttachmentClass}">` +
            `<a href="javascript: void(0);" class="${data.closeMessageClass}"></a>`;

        if (data.moreThanOne) {
            message += "<ul>";

            for (let message of data.messages) {
                message += `<li>${message}</li>`;
            }

            message += "</ul>";
        } else {
            message += `<p>${data.messages}</p>`;
        }

        message += "</div>";
        return message;
    }
}

export default templates;