CodeVersions.allow({
  'insert': function(userId, doc) {
    return Roles.userIsInRole(userId, ['superadmin']);
  },
  'update': function(userId, doc, fields, modifier) {
    return Roles.userIsInRole(userId, ['superadmin']);
  },
  'remove': function(userId, doc) {
    return Roles.userIsInRole(userId, ['superadmin']);
  }
});
