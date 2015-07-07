var gulp     = require('gulp');
var scss     = require('../config/scss');
var watch    = require('gulp-watch');

gulp.task('watch', function() {
  watch(scss.src, function() { 
  	gulp.start('espalier-scss');
  	gulp.start('demo-scss'); 
  });
});