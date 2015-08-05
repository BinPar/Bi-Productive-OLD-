Meteor.publishComposite("codeVersions", function() {
  return {
    find: function() {
      return CodeVersions.find({});
    }
  }
});
