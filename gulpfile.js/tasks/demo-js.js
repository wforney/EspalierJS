var gulp      = require("gulp");
var path      = require("path");
var config    = require("../config");
var webpack   = require("webpack");
var concat      = require("gulp-concat");
var logger       = require("../lib/compileLogger");

gulp.task("demo:js", function(callback) {
  var built = false;
  var jsSrc = path.resolve(config.jsPath + "/demo");

  webpack({
    context: jsSrc,
    plugins: [],
    devtool: "#inline-source-map",
    resolve: {
      extensions: ["", ".js"]
    },
    module: {
      loaders: [
        {
          loader: "babel-loader?stage=1",
          exclude: "/node_modules/"
        }
      ]
    },
    entry: {
      demo: [ "./" ]
    },
    output: {
      path: config.jsPath + "/demo",
      filename: "demo_compiled.js",
      library: "app",
      libraryTarget: "umd"
    }
  }).watch(200, function(err, stats) {
    logger(err, stats);

    gulp.src([
            "./node_modules/jquery/dist/jquery.js",
            "./node_modules/handlebars/dist/handlebars.js",
            "./node_modules/velocity-animate/velocity.js",
            "./node_modules/velocity-animate/velocity.ui.js",
            "./node_modules/bootstrap-sass/assets/javascripts/bootstrap.js",
            "./node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.js",
            "./dist/espalier.js",
            config.jsPath + "/demo/demo_compiled.js"
        ]).pipe(concat("bundled.js"))
        .pipe(gulp.dest(config.demoJS));

    // On the initial compile, let gulp know the task is done
    if(!built) { 
      built = true;
      callback();
    }
  });

});