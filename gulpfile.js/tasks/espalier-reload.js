var gulp = require("gulp");
var browserSync = require("browser-sync").get("espalier:server");

gulp.task("espalier:reload", function (callback) {
	browserSync.reload();
	callback();
});