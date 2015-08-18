ClienteController = AppController.extend({
	waitOn: function() {
		return Meteor.subscribe('clientes', this.params._id);
	},
	data: function() { return Clientes.findOne(this.params._id);},
	onAfterAction: function () {
		Meta.setTitle('Edición de información de cliente');
	}
});