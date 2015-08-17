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
