Meteor.publishComposite("items", function() {
  return {
    find: function() {
      return Items.find({});
    }
  }
});
