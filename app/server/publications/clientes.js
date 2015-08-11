Meteor.publishComposite("clientes", function() {
	return {
		find: function() {
			return Clientes.find({});
		}
	}
});
