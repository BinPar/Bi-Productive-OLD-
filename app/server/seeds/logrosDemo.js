Meteor.startup(function() {
	if (LogrosDemo.find({}).count() === 0) {
		LogrosDemo.insert({Votos: 0, Nombre: "Realizado por BinPar"});
		LogrosDemo.insert({Votos: 0, Nombre: "Código abierto"});
		LogrosDemo.insert({Votos: 0, Nombre: "Uno nosequé que qué se yo"});
		LogrosDemo.insert({Votos: 0, Nombre: "En GitHub"});
		LogrosDemo.insert({Votos: 0, Nombre: "Reactivo"});
		LogrosDemo.insert({Votos: 0, Nombre: "Responsivo"});
		LogrosDemo.insert({Votos: 0, Nombre: "Versión HTML5"});
		LogrosDemo.insert({Votos: 0, Nombre: "Versión iOS"});
		LogrosDemo.insert({Votos: 0, Nombre: "Versión Android"});
		LogrosDemo.insert({Votos: 0, Nombre: "Dámelo todo papi"});
	}
});