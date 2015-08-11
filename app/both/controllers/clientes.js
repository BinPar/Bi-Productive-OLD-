ClientesController = AppController.extend({
	onAfterAction: function () {
		Meta.setTitle('Clientes');
	}
});

TabularTables = {};

Meteor.isClient && Template.registerHelper('TabularTables', TabularTables);

TabularTables.ListaClientes = new Tabular.Table({
	name: "ListaClientes",
	collection: Clientes,
	columns: [
		{data: "Alias", title: "Nombre"},
		{data: "Nombre", title: "Razón Social"},
		{data: "NIF", title: "NIF"},
		{
		 data: "FechaCreacion",
		 title: "Fecha de alta",
		 render: function (val, type, doc) {
		 if (val instanceof Date) {
		  return moment(val).calendar();
		 } else {
		  return "Never";
		 }
		 }
		 }/*,
		 {data: "summary", title: "Summary"},
		 {
		 tmpl: Meteor.isClient && Template.bookCheckOutCell
		 }*/
	],
	language: TraduccionDataTables
});