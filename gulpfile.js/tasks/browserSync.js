var browserSync = require("browser-sync").create("espalier:server");
var gulp = require("gulp");
var config = require("../config")

gulp.task("espalier:server", function () {
  browserSync.init({
    server: {
      baseDir: config.demo
    }
  })
});