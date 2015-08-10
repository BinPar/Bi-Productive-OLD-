CodeVersions = new Mongo.Collection('codeVersions');

CodeVersions.helpers({

});

CodeVersions.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});