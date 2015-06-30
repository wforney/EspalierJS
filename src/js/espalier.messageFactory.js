import bootstrapTemplates from "./templates/bootstrapTemplates";

class MessageDisplayer {
  constructor(args) {
    this.settings = {
      attachTo: null,
      messageContainerClass: "message-container",
      closeMessageClass: "close-message",
      infoMessageClass: "info-message",
      warningMessageClass: "warning-message",
      errorMessageClass: "error-message",
      successMessageClass: "success-message",
      messageAttachment: factory.messageAttachment.Fixed,
      onRemoved: function() {},
      onAdded: function() {}
    };

    var scope = this;

    $.extend(this.settings, args);

    if(!this.settings.attachTo) {
      throw("MessageFactory requires an attachTo argument.");
    }

    this.remove = function () {
      if (scope.message) {
        scope.message.remove();
        scope.message = undefined;
        scope.settings.onRemoved();
      }
    };
  }
};

MessageDisplayer.prototype.show = function(messageArgs) {
  var messageTypeClass, messageSettings, messageAttachmentClass;

  //NOTE: There should only be one message displayed per instance.
  if (this.message) {
    this.message.remove();
  }

  //NOTE: Allow them to either use an array of messages or a
  //      single message.
  if (typeof messageArgs.message === 'string') {
    messageArgs.message = [messageArgs.message];
  }

  messageSettings = {
    messageType: factory.messageType.Info,
    message: []
  };

  $.extend(messageSettings, messageArgs);

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

  this.message = bootstrapTemplates.message({
    messageTypeClass: messageTypeClass,
    messages: messageSettings.message,
    messageContainerClass: this.settings.messageContainerClass,
    closeMessageClass: this.settings.closeMessageClass,
    messageAttachmentClass: messageAttachmentClass,
    moreThanOne: (typeof messageArgs.message !== 'string' &&
      messageArgs.message.length > 1)
  });

  this.message = $(this.message);
  this.settings.attachTo.append(this.message);
  this.settings.onAdded(this.message);
  this.message.on("click", "." + this.settings.closeMessageClass, this.remove);
  return this.message;
};

var factory = {
  create: function(args) {
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