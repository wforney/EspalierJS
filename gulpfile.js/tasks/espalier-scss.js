var gulp 			= require("gulp");
var browserSync 	= require("browser-sync");
var sass 			= require("gulp-sass");
var config			= require("../config/scss");
var autoprefixer	= require("gulp-autoprefixer");
var handleErrors 	= require("../lib/handleErrors");

gulp.task("espalier:scss", function() {
	return gulp.src(config.src)
		.pipe(sass(config.settings))
    	.on('error', handleErrors)
		.pipe(autoprefixer(config.autoprefixer))
		.pipe(gulp.dest(config.dest))
		.pipe(browserSync.reload({stream:true}));
});