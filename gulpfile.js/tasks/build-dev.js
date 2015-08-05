var gulp = require("gulp");
var gulpSequence = require("gulp-sequence");

gulp.task("build:dev", function(callback) {
	gulpSequence("clean", ["espalier:scss", "demo:scss"], "webpack:dev", "demo:js", "demo:html", "espalier:watch", "espalier:server", callback);
});