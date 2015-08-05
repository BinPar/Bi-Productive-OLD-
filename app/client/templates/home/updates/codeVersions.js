Template.codeVersions.rendered = function() {

};

Template.registerHelper('formatDate', function(date) {
  return moment(date).format('DD/MM/YYYY');
});