var gulp = require("gulp");
var config = require("../config");
var watch = require("gulp-watch");
var runSequence = require("run-sequence");

gulp.task("espalier:watch", function () {
	watch(config.src + "/style/**/*.scss", function () {
		runSequence("espalier:scss", "demo:scss");
	});

	watch(config.demo + "/style/**/*.scss", function () {
		runSequence("demo:scss");
	});

	watch(config.src + "/js/**/*.{js,hbs}", function () {
		runSequence("webpack:dev", "demo:js", "espalier:reload");
	});

	watch(config.demo + "/js/**/*.{js,hbs}", function () {
		runSequence("demo:js", "espalier:reload");
	});

	watch(config.demo + "/**/*.html", function () {
		runSequence("demo:html", "espalier:reload");
	});
});