import common from "./espalier.common";
import bootstrapTemplates from "./templates/bootstrapTemplates";
import EspalierNode from "./espalier.domnode";
import addListener from "./helpers/add-listener";
import isString from "./helpers/is-string";

class MessageDisplayer {
    constructor(args) {
        args.attachTo = new EspalierNode(args.attachTo);

        this.settings = {
            attachTo: null,
            messageContainerClass: "message-container",
            closeMessageClass: "close-message",
            infoMessageClass: "info-message",
            warningMessageClass: "warning-message",
            errorMessageClass: "error-message",
            successMessageClass: "success-message",
            messageAttachment: factory.messageAttachment.Fixed,
            onRemoved: function () { },
            onAdded: function () { }
        };

        this.settings = common.extend(this.settings, args);

        if (!this.settings.attachTo) {
            throw ("MessageFactory requires an attachTo argument.");
        }
    }

    remove() {
        if (this.message) {
            this.message.remove();
            this.message = undefined;
            this.settings.onRemoved();
        }
    }

    show(messageArgs) {
        let messageTypeClass, messageSettings, messageAttachmentClass;

        //NOTE: There should only be one message displayed per instance.
        if (this.message) {
            this.message.remove();
        }

        //NOTE: Allow them to either use an array of messages or a
        //      single message.
        if (isString(messageArgs.message)) {
            messageArgs.message = [messageArgs.message];
        }

        messageSettings = {
            messageType: factory.messageType.Info,
            message: []
        };

        common.extend(messageSettings, messageArgs);

        if (messageSettings.message.length === 0) {
            console.log("No message to display.");
            return;
        }

        switch (messageSettings.messageType) {
            case factory.messageType.Info:
                messageTypeClass = this.settings.infoMessageClass;
                break;
            case factory.messageType.Success:
                messageTypeClass = this.settings.successMessageClass;
                break;
            case factory.messageType.Error:
                messageTypeClass = this.settings.errorMessageClass;
                break;
            case factory.messageType.Warning:
                messageTypeClass = this.settings.warningMessageClass;
                break;
            default:
                console.log("Invalid message type.");
                return;
        }

        switch (this.settings.messageAttachment) {
            case factory.messageAttachment.Fixed:
                messageAttachmentClass = "fixed";
                break;
            case factory.messageAttachment.Flow:
                messageAttachmentClass = "flow";
                break;
            default:
                messageAttachmentClass = "";
                break;
        }

        this.message = new EspalierNode(bootstrapTemplates.message({
            messageTypeClass: messageTypeClass,
            messages: messageSettings.message,
            messageContainerClass: this.settings.messageContainerClass,
            closeMessageClass: this.settings.closeMessageClass,
            messageAttachmentClass: messageAttachmentClass,
            moreThanOne: (!isString(messageArgs.message) && messageArgs.message.length > 1),
            showButton: messageArgs.showButton
        }));

        this.settings.attachTo.append(this.message.getNode());
        this.settings.onAdded(this.message.getNode());

        let displayedMessage = this;

        let closeButtons = Array.from(common.find(`.${this.settings.closeMessageClass}`, this.message.getNode()));

        for (let button of closeButtons) {
            addListener(button, "click", () => {
                displayedMessage.remove();
            });
        }

        return this.message;
    }
};

var factory = {
    create: function (args) {
        return new MessageDisplayer(args);
    },
    messageType: {
        Info: "Info",
        Success: "success",
        Error: "error",
        Warning: "warning"
    },
    messageAttachment: {
        Fixed: "Fixed",
        Flow: "Flow"
    }
};

export default factory;