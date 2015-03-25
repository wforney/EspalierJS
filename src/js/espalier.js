define(["./espalier.core", "./espalier.validation", "./espalier.messageFactory", "velocity-ui"],
    function(core, validation, messageFactory) {
        "use strict";

        var espalier = {
            showWarning: core.showWarning,
            showInfo: core.showInfo,
            wire: function(form) {
                form = $(form);
                form.attr("novalidate", "");

                form.submit(function(ev) {
                    var invalid = false;

                    $.each($("input, textarea, select", form), function(index, control) {
                        control = $(control);
                        var validations = control.data("validations");
                        var errors = [];

                        $.each(validations, function(vIndex, v) {
                            if (v.invalid(control)) {
                                errors.push(v.message);
                            }
                        });

                        if (errors.length > 0) {
                            invalid = true;
                            control.data("message").show({
                                message: errors,
                                messageType: messageFactory.messageType.Error
                            });
                        }
                    });

                    if (invalid) {
                        ev.preventDefault();
                    }
                });

                $.each($("input, textarea, select", form), function(index, control) {
                    var lowerCaseId = control.id.toLowerCase();
                    control = $(control);
                    var group;
                    var validations = [];

                    switch (control.attr("type")) {
                        case "checkbox":
                            group = control.closest(".checkbox");
                            break;
                        case "email":
                            validations.push(validation.email);
                            group = control.closest(".form-group");
                            break;
                        default:
                            group = control.closest(".form-group");
                            break;
                    }

                    var controlMessage = messageFactory.create({
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

                    if (control.attr("required")) {
                        validations.push(validation.required);
                        group.addClass("required");
                    }

                    control.data("message", controlMessage);
                    control.data("validations", validations);
                    control.attr(lowerCaseId, "");
                });
            }
        };

        return espalier;
    });