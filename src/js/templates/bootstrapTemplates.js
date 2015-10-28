let templates = {
    message: function (data) {
        let errorDisplay = `<div class="${data.messageContainerClass} ${data.messageTypeClass} ${data.messageAttachmentClass}">`;

        if (data.showButton) {
            errorDisplay += `<a href="javascript: void(0);" class="${data.closeMessageClass}"></a>`;
        }

        if (data.moreThanOne) {
            errorDisplay += "<ul>";

            for (let message of data.messages) {
                errorDisplay += `<li>${message}</li>`;
            }

            errorDisplay += "</ul>";
        } else {
            errorDisplay += `<p>${data.messages}</p>`;
        }

        errorDisplay += "</div>";
        return errorDisplay;
    }
}

export default templates;