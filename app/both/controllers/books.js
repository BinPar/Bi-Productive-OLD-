BooksController = AppController.extend({
    waitOn: function() {
        return this.subscribe('books');
    },
    data: {
        items: Books.find({})
    },
    onAfterAction: function () {
        Meta.setTitle('Books');
    }
});

Meteor.isClient && Template.registerHelper('TabularTables', TabularTables);
TabularTables.ListaLibros = new Tabular.Table({
    name: "ListaLibros",
    collection: Books,
    columns: [
        {data: "title", title: "Título"},
        {data: "author", title: "Autor"},
        {data: "copies", title: "Copias"}
    ],
    language: TraduccionDataTables
});