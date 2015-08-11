LogrosDemo = new Mongo.Collection('logrosDemo');

Meteor.methods({
	'LogrosDemo.incValor': function(id) {
		/*Test de latency compensation
		if (Meteor.isServer) {
			Meteor._sleepForMs(5000);
		}*/
		LogrosDemo.update({"_id": id,  "Votos": { $lt: 10 }} , {$inc: {Votos: 1}});
	},
	'LogrosDemo.decValor': function (id) {
		LogrosDemo.update({"_id": id,  "Votos": { $gt: 0 }} , {$inc: {Votos: -1}});
	}
});

