CodeVersions.allow({
  'insert': function(userId, doc) {
    return Roles.userIsInRole(userId, ['superadmin'], 'binpar.com');
  },
  'update': function(userId, doc, fields, modifier) {
    return Roles.userIsInRole(userId, ['superadmin'], 'binpar.com');
  },
  'remove': function(userId, doc) {
    return Roles.userIsInRole(userId, ['superadmin'], 'binpar.com');
  }
});
