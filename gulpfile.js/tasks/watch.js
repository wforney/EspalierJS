var gulp     = require('gulp');
var scss     = require('../config/scss');
var watch    = require('gulp-watch');

gulp.task('watch', ['browserSync'], function() {
  watch(scss.src, function() { gulp.start('scss'); });
});