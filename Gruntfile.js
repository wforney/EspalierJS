module.exports = function (grunt) {
	"use strict";

	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		requirejs: {
			production: {
				options: {
					baseUrl: "src",
					mainConfigFile: "src/js/lib/require.config.js",
					name: "../node_modules/almond/almond",
					include: ["js/espalier"],
					out: "dist/espalier.js",
					wrap: {
						startFile: "src/js/start.frag",
						endFile: "src/js/end.frag"
					},
					optimize: 'none'
				}
			}
		},
		sass: {
			dist: {
				options: {
					style: "expanded"
				},
				files: {
					"dist/espalier.css": "src/content/css/espalier.scss"
				}
			}
		}
	});

	grunt.loadNpmTasks("grunt-contrib-requirejs");
	grunt.loadNpmTasks("grunt-contrib-sass");
	grunt.registerTask("default", ["requirejs", "sass"]);
};