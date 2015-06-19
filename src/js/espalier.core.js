define(["./espalier.messageFactory", "./espalier.waitscreen", "./espalier.common", "pubsub"],
    function (messageFactory, waitScreen, common, pubsub) {
        "use strict";

        var mainMessage = messageFactory.create({
            attachTo: common.body
        });

        var core = {
            sendRequest: function (req) {
                waitScreen.show();
                $("." + mainMessage.settings.messageContainerClass).remove();

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
                        waitScreen.hide();

                        if (response.status === 200) {
                            if (req.event) {
                                pubsub.publish(req.event, response.responseJSON);
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
            isEmptyOrSpaces: function (str) {
                return str === undefined || str === null || str.match(/^\s*$/) !== null;
            },
            isEmail: function (str) {
                var emailRegex = /^(([\w-]+\.)+[\w-]+|([a-zA-Z]{1}|[\w-]{2,}))@((([0-1]?[0-9]{1,2}|25[0-5]|2[0-4][0-9])\.([0-1]?[0-9]{1,2}|25[0-5]|2[0-4][0-9])\.([0-1]?[0-9]{1,2}|25[0-5]|2[0-4][0-9])\.([0-1]?[0-9]{1,2}|25[0-5]|2[0-4][0-9])){1}|([a-zA-Z]+[\w-]+\.)+[a-zA-Z]{2,4})$/;
                return core.isEmptyOrSpaces(str) || str.match(emailRegex);
            },
            shortDate: function (date) {
                if (!(date instanceof Date)) {
                    date = new Date(date);
                }

                return (date.getMonth() + 1) +
                    "/" + date.getDate() +
                    "/" + date.getFullYear();
            },
            shortTime: function (date) {
                if (!(date instanceof Date)) {
                    date = new Date(date);
                }

                var hour = date.getHours();
                var ampm = "AM";

                if (hour > 11) {
                    hour -= 12;
                    ampm = "PM";
                }

                if (hour === 0) {
                    hour = 12;
                }

                var minutes = "00" + date.getMinutes();
                return hour + ":" + minutes.substring(minutes.length - 2) + " " + ampm;
            },
            publish: function (topic, message) {
                pubsub.publish(topic, message);
            },
            subscribe: function (topic, handler) {
                return pubsub.subscribe(topic, function (topic, message) {
                    handler(message);
                });
            }
        };

        return core;
    });