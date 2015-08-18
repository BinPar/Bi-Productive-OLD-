NuevoClienteController = AppController.extend({
	waitOn: function() {
		return Meteor.subscribe('clientes');
	},
	onAfterAction: function () {
		Meta.setTitle('Nuevo cliente');
	}
});