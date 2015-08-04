var gulp = require("gulp");
var config = require("../config");
var watch = require("gulp-watch");
var runSequence = require("run-sequence");

gulp.task("espalier:watch", function () {
	watch(config.scssPath + "/**/*.scss", function () {
		runSequence("espalier:scss", "demo:scss");
	});
	watch(config.jsPath + "/**/*.{js,hbs}", function () {
		runSequence("webpack:dev", "demo:js", "espalier:reload");
	});
	//TODO: Restructure things so the demo code is in another path.
	// watch(config.src + "/**/*.html", function () {
	// 	runSequence("done:html", "espalier:reload");
	// });
});