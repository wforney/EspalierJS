describe("Message factory", function(){
	var messageFactory;

	beforeEach(function(done) {
		require(["js/espalier.messageFactory"], function(mf){
			messageFactory = mf;
			done();
		});
	});

	it("throws an error if attachTo is not specified", function() {
		expect(messageFactory.create).toThrow();
	});

	it("places a message in the specified container", function() {
		loadFixtures("MessageFactoryFixture.html");

		var message = messageFactory.create({
			attachTo: $("#top-div")
		});

		message.show({
			message: "Hello there"
		});

		expect($(".message-container")).toExist();
	});
});