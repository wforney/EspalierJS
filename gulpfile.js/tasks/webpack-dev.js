var assign       = require("object-assign");
var config       = require("../config/webpack")("dev");
var gulp         = require("gulp");
var webpack      = require("webpack");
var browserSync  = require("browser-sync");
var logger       = require("../lib/compileLogger");

gulp.task("webpack:dev", function(callback) {
  var built = false;

  webpack(config).watch(200, function(err, stats) {
  	logger(err, stats);
    browserSync.reload();
    // On the initial compile, let gulp know the task is done
    if(!built) { 
    	built = true;
    	callback();
    }
  });
});