HomeController = AppController.extend({
  waitOn: function() {
    return [this.subscribe('codeVersions'),Meteor.subscribe('logrosDemo')];
  },
  data: {
    codeVersions: function(){
      var index = 0;
      var versions = CodeVersions.find({}, {sort: {Creation: -1}});
      return versions.map(function(cv, index, cursor) {
            cv._index = index++;
            cv.cssClass = (index % 2) == 0 ? "timeline-inverted":"timeline";
            return cv;
        });

      return versions;

    }
  },
  onAfterAction: function () {
    Meta.setTitle('Bi-Productive');
  }
});

HomeController.events({
  'click [data-action=doSomething]': function (event, template) {    
    event.preventDefault();
  }
});
