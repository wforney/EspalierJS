var gulp = require("gulp");
var path = require("path");
var config = require("../config");
var webpack = require("webpack");
var concat = require("gulp-concat");
var logger = require("../lib/compileLogger");

gulp.task("demo:js", function (callback) {
    var built = false;
    var jsSrc = path.resolve(config.demo + "/js");

    webpack({
        context: jsSrc,
        plugins: [],
        devtool: "#source-map",
        resolve: {
            extensions: ["", ".js", ".hbs"]
        },
        module: {
            loaders: [
                { test: /\.hbs/, loader: "handlebars-loader" },
                {
                    test: /\.js/,
                    loader: "babel-loader?stage=1",
                    exclude: "/node_modules/"
                }
            ]
        },
        entry: {
            demo: ["./"]
        },
        output: {
            path: config.demoOutput + "/assets/js",
            filename: "demo_compiled.js",
            library: "app",
            libraryTarget: "umd"
        }
    }).watch(200, function (err, stats) {
        logger(err, stats);

        gulp.src([
            "./node_modules/babel-core/browser-polyfill.min.js",
            "./node_modules/handlebars/dist/handlebars.runtime.js",
            "./node_modules/velocity-animate/velocity.js",
            "./node_modules/velocity-animate/velocity.ui.js"
        ]).pipe(concat("bundled.js"))
            .pipe(gulp.dest(config.demoOutput + "/assets/js"));

        // On the initial compile, let gulp know the task is done
        if (!built) {
            built = true;
            callback();
        }
    });

});