var body = $("body");

export default {
    body: body,
    window: $(window),
    showVellum: function() {
    	if($(".espalier-vellum").length > 0) {
    		return;
    	}

        var vellum = $("<div class=\"espalier-vellum\" />");
        body.append(vellum);
    },
    hideVellum: function() {
    	$(".espalier-vellum").remove();
    }
};