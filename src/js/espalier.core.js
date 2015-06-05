define(["./espalier.messageFactory"], function (messageFactory) {
    "use strict";

    var mainMessage = messageFactory.create({
        attachTo: $("body")
    });

    var core = {
        sendRequest: function (req) {
            core.showWaitScreen();
            $(".notificationMessage").remove();

            var ajaxSettings = {
                type: "GET",
                xhrFields: {
                    withCredentials: true
                },
                statusCode: {
                    500: function (error) {
                        core.showError({
                            message: error.responseJSON.Message,
                            cssClass: "error"
                        });
                    },
                    400: function (response) {
                        var errors = [];

                        $.each(response.responseJSON.errors, function (index, error) {
                            if (error.source && error.source.parameter) {
                                var specificField = $("#" + error.source.parameter.toLowerCase());

                                if (specificField) {
                                    var fieldMessage = specificField.data("message");

                                    if (fieldMessage) {
                                        fieldMessage.show({
                                            message: error.detail,
                                            messageType: messageFactory.messageType.Error
                                        });

                                        return;
                                    }
                                }
                            }

                            errors.push(error.detail);
                        });

                        if (errors.length > 0) {
                            core.showError(errors);
                        }
                    }
                },
                complete: function (response) {
                    core.hideWaitScreen();

                    if (response.status === 200) {
                        if (req.event) {
                            amplify.publish(req.event, response.responseJSON);
                        }

                        if (req.onSuccess) {
                            req.onSuccess(response.responseJSON);
                        }
                    }
                }
            };

            $.extend(ajaxSettings, req);

            return $.ajax(ajaxSettings);
        },
        showWarning: function (messages) {
            mainMessage.show({
                message: messages,
                messageType: messageFactory.messageType.Warning
            });
        },
        showError: function (messages) {
            mainMessage.show({
                message: messages,
                messageType: messageFactory.messageType.Error
            });
        },
        showInfo: function (messages) {
            mainMessage.show({
                message: messages,
                messageType: messageFactory.messageType.Info
            });
        },
        showWaitScreen: function () {
            alert("show the wait screen.");
        },
        hideWaitScreen: function () {
            alert("hide the wait screen.");
        },
        isEmptyOrSpaces: function (str) {
            return str === undefined || str === null || str.match(/^\s*$/) !== null;
        },
        isEmail: function (str) {
            var emailRegex = /^(([\w-]+\.)+[\w-]+|([a-zA-Z]{1}|[\w-]{2,}))@((([0-1]?[0-9]{1,2}|25[0-5]|2[0-4][0-9])\.([0-1]?[0-9]{1,2}|25[0-5]|2[0-4][0-9])\.([0-1]?[0-9]{1,2}|25[0-5]|2[0-4][0-9])\.([0-1]?[0-9]{1,2}|25[0-5]|2[0-4][0-9])){1}|([a-zA-Z]+[\w-]+\.)+[a-zA-Z]{2,4})$/;
            return core.isEmptyOrSpaces(str) || str.match(emailRegex);
        }
    };

    return core;
});