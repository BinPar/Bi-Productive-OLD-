AutoForm.hooks({
	insertClienteForm: {
		onError: function(formType, error) {
			console.log(error.message);
		},
		onSuccess: function(formType, result){
			Router.go("clientes");
		}
	}
});