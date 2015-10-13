import tests from "./tests";

let cons = console;
cons.log("Starting tests....... argh");
// 
// var myReporter = {
// 	jasmineStarted: function (suiteInfo) {
// 		cons.log('Running suite with ' + suiteInfo.totalSpecsDefined);
// 	},
// 	suiteStarted: function (result) {
// 		cons.log('Suite started: ' + result.description + ' whose full description is: ' + result.fullName);
// 	},
// 	specStarted: function (result) {
// 		cons.log('Spec started: ' + result.description + ' whose full description is: ' + result.fullName);
// 	},
// 	specDone: function (result) {
// 		cons.log('Spec: ' + result.description + ' was ' + result.status);
// 		for (var i = 0; i < result.failedExpectations.length; i++) {
// 			cons.log('Failure: ' + result.failedExpectations[i].message);
// 			cons.log(result.failedExpectations[i].stack);
// 		}
// 	},
// 	suiteDone: function (result) {
// 		cons.log('Suite: ' + result.description + ' was ' + result.status);
// 		for (var i = 0; i < result.failedExpectations.length; i++) {
// 			cons.log('AfterAll ' + result.failedExpectations[i].message);
// 			cons.log(result.failedExpectations[i].stack);
// 		}
// 	},
// 	jasmineDone: function () {
// 		cons.log('Finished suite');
// 	}
// };
// 
// jasmine.getEnv().addReporter(myReporter);

tests.runTests();

phantom.exit();