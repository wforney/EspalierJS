module.exports = function (grunt) {
	"use strict";

	grunt.initConfig({
		browserify: {
            dist: {
                options: {
                    browserifyOptions: {
                        entries: ["./src/js/espalier.js"],
                        standalone: "espalier",
                        debug: true
                    }
                },
                files: {
                    './dist/espalier.js': "./src/**/*.js"
                }
            }
        }
	});

    grunt.loadNpmTasks("grunt-browserify");
	grunt.registerTask("default", ["browserify"]);
};