ClientesController = AppController.extend({
	waitOn: function() {

	},
	onAfterAction: function () {
		Meta.setTitle('Clientes');
	}
});

Meteor.isClient && Template.registerHelper('TabularTables', TabularTables);

TabularTables.ListaClientes = new Tabular.Table({
	name: "ListaClientes",
	collection: Clientes,
	responsive: true,
	lengthMenu: [[20, 50, 100, 500, 1000], [20, 50, 100, 500, 1000]],
	columns: [
		{data: "Alias", title: "Alias", sWidth: "200px"},
		{data: "Nombre", title: "Razón Social", sWidth: "200px"},
		{data: "NIF", title: "NIF", width:"50px"},
		{
			data: "FechaCreacion",
			title: "Fecha alta", width:"180px", className: "dt-right",
			render: function (val, type, doc) {
				if (val instanceof Date) {
					return moment(val).calendar();
				} else {
					return "Nunca";
				}
			}
		},
		{
			data: "_id",
			title: "Acciones",className: "dt-right",
			width:"0px",render: function (val, type, doc) {
			return '<a href="' + Router.path("cliente.detalles", {_id:val} ) + '">Ver detalles</a>';
		}
		}
	],
	language: TraduccionDataTables
});