"use strict";

module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		requirejs: {
			production: {
				options: {
					baseUrl: "src",
					mainConfigFile: "src/js/lib/require.config.js",
					name: "../node_modules/almond/almond",
					include: ["js/espalier"],
					out: "release/espalier.js",
					wrap: {
						startFile: "src/js/start.frag",
						endFile: "src/js/end.frag"
					}
				}
			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-requirejs");
};