var gulp 			= require("gulp");
var sass 			= require("gulp-sass");
var config			= require("../config/scss");
var autoprefixer	= require("gulp-autoprefixer");
var handleErrors 	= require("../lib/handleErrors");
var concat 			= require("gulp-concat");

gulp.task("build:demo:scss", function() {
	return gulp.src(config.demoSCSSIn)
		.pipe(sass(config.settings))
    	.on('error', handleErrors)
		.pipe(autoprefixer(config.autoprefixer))
		.pipe(gulp.dest(config.demoSCSSOut));
});

gulp.task("demo:scss", ["build:demo:scss"], function() {
	return gulp.src([
			config.demoSCSSOut + "/site.css",
			"./node_modules/bootstrap-datepicker/dist/css/bootstrap-datepicker3.css"
		])
		.pipe(concat("site.css"))
        .pipe(gulp.dest(config.demoSCSSOut));
});