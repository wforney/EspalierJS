var gulp = require("gulp");
var gutil = require('gulp-util');
var path = require("path");
var config = require("../config");
var webpack = require("webpack");
var concat = require("gulp-concat");
var logger = require("../lib/compileLogger");
var gulpSequence = require("gulp-sequence");
//var browserSync = require("browser-sync");//.create("espalier:server");
var jasmine = require('gulp-jasmine-phantom');

gulp.task("espalier:tests:js", function (callback) {
    var built = false;
    var jsSrc = path.resolve(config.tests + "/spec/tests");

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
            tests: ["./tests.js"]
        },
        output: {
            path: config.tests + "/bin",
            filename: "tests-compiled.js",
            library: "tests",
            libraryTarget: "umd"
        }
    }).watch(200, function (err, stats) {
        logger(err, stats);

        gulp.src([
            "./node_modules/babel-core/browser-polyfill.js",
            "./node_modules/jasmine-core/lib/jasmine-core/jasmine.js",
            "./node_modules/jasmine-core/lib/jasmine-core/jasmine-html.js",
            "./node_modules/jasmine-core/lib/jasmine-core/boot.js",
            "./node_modules/jasmine-reporters/src/junit_reporter.js",
            "./node_modules/handlebars/dist/handlebars.runtime.js"
        ]).pipe(concat("test-reqs.js"))
            .pipe(gulp.dest(config.tests + "/bin"));

        // On the initial compile, let gulp know the task is done
        if (!built) {
            built = true;
            callback();
        }
    });
});

gulp.task("espalier:tests:runner", function (callback) {
    var built = false;
    var jsSrc = path.resolve(config.tests + "/spec/tests");

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
            tests: ["./phantom-runner.js"]
        },
        output: {
            path: config.tests + "/bin",
            filename: "phantom-runner.js",
            library: "tests",
            libraryTarget: "umd"
        }
    }).watch(200, function (err, stats) {
        logger(err, stats);

        gulp.src([
            "./node_modules/babel-core/browser-polyfill.js",
            "./node_modules/jasmine-core/lib/jasmine-core/jasmine.js",
        // "./node_modules/jasmine-core/lib/jasmine-core/jasmine-html.js",
            "./node_modules/jasmine-core/lib/jasmine-core/node_boot.js",
        // "./node_modules/jasmine-reporters/src/junit_reporter.js",
            "./node_modules/handlebars/dist/handlebars.runtime.js",
            config.tests + "/bin/phantom-runner.js"
        ]).pipe(concat("runner.js"))
            .pipe(gulp.dest(config.tests + "/bin"));

        // On the initial compile, let gulp know the task is done
        if (!built) {
            built = true;
            callback();
        }
    });
});

gulp.task("espalier:tests:css", function () {
    return gulp.src("./node_modules/jasmine-core/lib/jasmine-core/jasmine.css")
        .pipe(gulp.dest(config.tests + "/bin"));
});

gulp.task("espalier:tests:run", function () {
    return gulp.src(config.tests + "/bin/runner.js")
        .pipe(jasmine({
            integration: true
        }));
        
    //     var args = [config.tests + "/bin/runner.js"],
    //         phantomjsProcess = require('child_process').spawn('phantomjs', args),
    //         completed = false;
    // 
    //     phantomjsProcess.stdout.on('data', function (data) {
    //         gutil.log(gutil.colors.green("Data, data: " + data));
    //         completed = true;
    //     });
    // 
    //     phantomjsProcess.stderr.on('data', function (data) {
    //         gutil.log(gutil.colors.green("StdError, data: " + data));
    //         gutil.log(gutil.colors.red(data));
    //     });
    // 
    //     phantomjsProcess.on('close', function (code) {
    //         if (code && !completed) {
    //             return callback(new Error('phantomjs failed with code: ' + code));
    //         }
    //         callback();
    //     });
    
    //     var server = browserSync.create("espalier:tests");
    // 
    //     server.init({
    //         ui: { port: 9001 },
    //         port: 7357,
    //         server: {
    //             baseDir: config.tests,
    //             index: "tests.html"
    //         },
    //         open: false
    //     }, function () {
    //         var args = ['--webdriver=4444'],
    //             phantomjsProcess = childProcess.spawn('phantomjs', args),
    //             completed = false;
    // 
    //         phantomjsProcess.stdout.on('data', function (data) {
    //             if (data.toString().indexOf('running on port') >= 0) {
    //                 fn().on('end', function () {
    //                     completed = true;
    //                     phantomjsProcess.kill();
    //                 });
    //             }
    //         });
    // 
    //         phantomjsProcess.stderr.on('data', function (data) {
    //             gutil.log(gutil.colors.red(data));
    //         });
    // 
    //         phantomjsProcess.on('close', function (code) {
    //             server.exit();
    //             if (code && !completed) {
    //                 return callback(new Error('phantomjs failed with code: ' + code + '\n' +
    //                     'Check that port 4444 is free and that there are no other ' +
    //                     'instances of phantomjs running.'));
    //             }
    //             callback();
    //         });
    //     });
});

gulp.task("espalier:tests", function (callback) {
    gulpSequence("espalier:tests:js", "espalier:tests:css", "espalier:tests:runner", "espalier:tests:run", callback);
});