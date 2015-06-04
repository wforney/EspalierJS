define(["jquery", "./espalier.messageFactory"], function($, messageFactory) {
    "use strict";

    var events = {};
    var mainMessage = messageFactory.create({ 
        attachTo: $("body")
    });

    var core = {
        sendRequest: function(args) {
            core.showWaitScreen();
            $(".notificationMessage").remove();

            var ajaxSettings = {
                type: "GET",
                xhrFields: {
                    withCredentials: true
                },
                statusCode: {
                    500: function(error) {
                        core.showMessage({
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
                    core.hideWaitScreen();

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
        isEmptyOrSpaces: function(str) {
            return str === undefined || str === null || str.match(/^\s*$/) !== null;
        },
        isEmail: function(str) {
            var emailRegex = /^(([\w-]+\.)+[\w-]+|([a-zA-Z]{1}|[\w-]{2,}))@((([0-1]?[0-9]{1,2}|25[0-5]|2[0-4][0-9])\.([0-1]?[0-9]{1,2}|25[0-5]|2[0-4][0-9])\.([0-1]?[0-9]{1,2}|25[0-5]|2[0-4][0-9])\.([0-1]?[0-9]{1,2}|25[0-5]|2[0-4][0-9])){1}|([a-zA-Z]+[\w-]+\.)+[a-zA-Z]{2,4})$/;
            return core.isEmptyOrSpaces(str) || str.match(emailRegex);
        }
    };

    return core;
});