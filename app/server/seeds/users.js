Meteor.startup(function() {
	//Meteor.users.remove({});
	if(!Meteor.users.find().count()) {
		var info = {
			username: 'DRNachio',
			password: '1234',
			email: 'drnachio@binpar.com',
			profile: {name: 'Ignacio Ferro Picón'}
		};

		var id = Accounts.createUser(info);

		Roles.addUsersToRoles(id, ['superadmin','administración','manager','producción']);
	}
});
