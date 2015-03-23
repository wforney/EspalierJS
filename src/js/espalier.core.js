define(["jquery", "./espalier.messageFactory"], function($, messageFactory) {
    "use strict";

    var events = {};
    var mainMessage = messageFactory.create();

    var core = {
        sendRequest: function(args) {
            ftrHelper.showWaitScreen();
            $(".notificationMessage").remove();

            var ajaxSettings = {
                type: "GET",
                xhrFields: {
                    withCredentials: true
                },
                statusCode: {
                    500: function(error) {
                        ftrHelper.showMessage({
                            message: error.responseJSON.Message,
                            cssClass: "error"
                        });
                    },
                    400: function(error) {
                        $.each(error.responseJSON.Message, function(index, message) {
                            var m = $("#" + message.FieldName.toLowerCase());

                            if (m) {
                                m.data("message").show({
                                    message: message.Message,
                                    messageType: messageFactory.messageType.Error
                                });
                            }
                        });
                    }
                },
                complete: function(response) {
                    ftrHelper.hideWaitScreen();

                    if (response.status === 200) {
                        if (args.event) {
                            amplify.publish(args.event, response.responseJSON);
                        }

                        if (args.onSuccess) {
                            args.onSuccess(response.responseJSON);
                        }
                    }
                }
            };

            $.extend(ajaxSettings, args);

            $.ajax(ajaxSettings);
        },
        showWarning: function(messages) {
            mainMessage.show({
                message: messages,
                messageType: messageFactory.messageType.Warning
            });
        },
        showInfo: function(messages) {
            mainMessage.show({
                message: messages,
                messageType: messageFactory.messageType.Info
            });
        },
        showWaitScreen: function() {
            alert("show the wait screen.");
        },
        hideWaitScreen: function() {
            alert("hide the wait screen.");
        },
        bindErrors: function(form) {
            $.each($("input, textarea, select", form), function(index, control) {
                var lowerCaseId = control.id.toLowerCase();
                control = $(control);
                var group = control.closest(".control-group");

                var notesError = messageFactory.create({
                    appendTo: group,
                    messageAttachment: messageFactory.messageAttachment.Flow,
                    onRemoved: function() {
                        group.removeClass("has-error");
                    },
                    onAdded: function() {
                        group.addClass("has-error");
                        group.velocity("callout.tada", {
                            duration: 500
                        });
                    }
                });

                control.data("message", notesError);
                control.attr(lowerCaseId, "");
            });
        }
    };

    return core;
});