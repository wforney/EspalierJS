var gulp = require("gulp");
var sass = require("gulp-sass");
var config = require("../config");
var autoprefixer = require("gulp-autoprefixer");
var handleErrors = require("../lib/handleErrors");

gulp.task("espalier:scss", function () {
    return gulp.src(config.src + "/style/espalier.scss")
        .pipe(sass({
            indentedSyntax: true, // Enable .sass syntax!
            imagePath: "assets/images" // Used by the image-url helper
        }))
        .on('error', handleErrors)
        .pipe(autoprefixer({ browsers: ["last 2 version"] }))
        .pipe(gulp.dest(config.output));
});