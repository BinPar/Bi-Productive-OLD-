AutoForm.hooks({
	updateClienteFrom: {
		onError: function (formType, error) {
			console.log(error.message);
		}
	}
});

if (Meteor.isClient) {
	Template.clienteDetalles.helpers({
		beforeRemove: function () {
			return function (collection, id) {
				var doc = collection.findOne(id);
				if (confirm('¿Desea eliminar "' + doc.nombre + '"?')) {
					Router.go("clientes");
					this.remove();
				}
			};
		}
	});
}