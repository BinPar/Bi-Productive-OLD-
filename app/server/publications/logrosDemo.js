Meteor.publish('logrosDemo', function() {
	return LogrosDemo.find();
});