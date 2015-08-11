LogrosDemo = new Mongo.Collection('logrosDemo');

Meteor.methods({
	'LogrosDemo.incValor': function(id) {
		/*Test de latency compensation
		if (Meteor.isServer) {
			Meteor._sleepForMs(5000);
		}*/
		var elemento = LogrosDemo.findOne({_id: id});
		if (elemento.Votos < 10) {
			elemento.Votos++;
			LogrosDemo.update (id, {$set: {Votos:elemento.Votos}}, function(error) {if (error) {alert(error.reason);}});
		}

	},
	'LogrosDemo.decValor': function (id) {
		LogrosDemo.update(id, {$inc: {Votos: -1}});
	}
});

