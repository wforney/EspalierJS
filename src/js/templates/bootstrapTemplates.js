define(["jquery"], function($) {
	"use strict";
	var templates = {
		message: function(data) {
			var root = $("div");
			root.addClass(data.messageContainerClass);
			root.addClass(data.messageTypeClass);
			root.addClass(data.messageAttachmentClass);

			var closeButton = $("a");
			closeButton.attr("href", "javascript: void(0);");
			closeButton.addClass("closeMessageClass");

			root.append(closeButton);

			if (data.moreThanOne) {
				var list = $("ul");

				$.each(data.messages, function(index, message) {
					list.append("<li>" + message + "</li>");
				});

				root.append(list);
			} else {
				root.append("<p>" + data.messages + "</p>");
			}

			return root[0];
		}
	}

	return templates;
});
