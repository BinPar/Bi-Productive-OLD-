Meteor.publishComposite("books", function() {
    return {
        find: function() {
            return Books.find({});
        }
    }
});