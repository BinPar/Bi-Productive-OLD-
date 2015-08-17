Template.clientes.events({
	'click tbody > tr > td': function (event) {
		var dataTable = $(event.target).closest('table').DataTable();
		var rowData = dataTable.row($(event.currentTarget).parent()[0]).data();
		if (rowData && rowData._id) {
			Router.go("cliente.detalles", {_id: rowData._id});
		}
	}
});
Template.clientes.events({
	'draw.dt .binpar-resizeable': function (event) {
		if(!window.binParResizeableRedrawind) {
			window.binParResizeableRedrawind = true;
			window.binpar_update_size();
			window.binParResizeableRedrawind = false;
		}
	}
});

Template.clientes.rendered = function() {
	$(".dataTables_filter .form-control").focus();

}