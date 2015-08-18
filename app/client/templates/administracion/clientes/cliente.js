AutoForm.hooks({
    updateClienteFrom: {
        onError: function (formType, error) {
            console.log(error.message);
        },
        onSuccess: function (formType, result) {
            Router.go("clientes");
        }
    }
});

Template.clienteDetalles.helpers({
    beforeRemove: function () {
        return function (collection, id) {
            var reg = collection.findOne(id);
            new Confirmation({
                message: "¿Estás seguro de querer eliminar la información del cliente " + reg.nombre + "?",
                title: "Confirmar eliminación",
                cancelText: "Cancelar",
                okText: "Eliminar",
                success: false
            }, function (ok) {
                if(ok){
                    Router.go("clientes");;
                    collection.remove({_id:id});
                }
            });
        };
    }
});
