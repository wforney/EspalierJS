var gulp = require("gulp");
var config = require("../config");

gulp.task("demo:html", function () {
    gulp.src(config.demo + "/**/*.html")
        .pipe(gulp.dest(config.demoOutput));
});