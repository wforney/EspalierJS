import messageFactory from "../espalier.messageFactory";
import common from "../espalier.common";

let mainMessage = messageFactory.create({
    attachTo: common.body.getNode()
});

export default {
    showWarning: function (messages) {
        mainMessage.show({
            message: messages,
            messageType: messageFactory.messageType.Warning,
            showButton: true
        });
    },
    showError: function (messages) {
        mainMessage.show({
            message: messages,
            messageType: messageFactory.messageType.Error,
            showButton: true
        });
    },
    showInfo: function (messages) {
        mainMessage.show({
            message: messages,
            messageType: messageFactory.messageType.Info,
            showButton: true
        });
    },
    hideMainMessage: function () {
        mainMessage.remove();
    }
};