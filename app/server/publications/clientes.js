Meteor.publishComposite("clientes", function() {
	return {
		find: function() {
			return Clientes.find({});
		}
	}
});

Meteor.publishComposite("cliente", function(id) {
	return {
		find: function() {
			return Clientes.find({_id : id});
		}
	}
});
