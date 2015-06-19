/// <reference path="../../../typings/jquery/jquery.d.ts"/>
/// <reference path="../../../typings/jasmine/jasmine.d.ts"/>
/// <reference path="../../../typings/jasmine-jquery/jasmine-jquery.d.ts"/>
describe("Message factory", function () {
	var messageFactory;

	beforeEach(function (done) {
		require(["js/espalier.messageFactory"], function (mf) {
			messageFactory = mf;
			done();
		});
	});

	it("throws an error if attachTo is not specified", function () {
		expect(messageFactory.create).toThrow();
	});

	describe("creates a message displayer", function () {
		var message;
		var emptyDiv;

		beforeEach(function () {
			loadFixtures("emptyDivFixture.html");
			emptyDiv = $("#empty-div");
			message = messageFactory.create({
				attachTo: emptyDiv
			});
		});

		it("and it shouldn't have added anything to the DOM yet...", function () {
			expect($(".message-container")).not.toExist();
		});

		describe("when show is called", function () {
			beforeEach(function () {
				message.show({
					message: "Hello there"
				});
			});

			it("the message is added to the DOM", function () {
				expect($(".message-container")).toExist();
			});

			it("and the close button removes the message from the DOM.", function () {
				var button = $("." + message.settings.closeMessageClass, emptyDiv);
				expect(button).toExist();
				button.click();

				expect($(".message-container")).not.toExist();
			});
		});
	});
});