Template.home.rendered = function() {

};
Template.home.helpers({
	listaDemo: function() {
		return LogrosDemo.find({}, {sort: {Votos: -1}});
	}
});

Template.home.events({
	'click .btnMas':  function (event){
		Meteor.call('LogrosDemo.incValor',this._id);
	},
	'click .btnMenos':  function (event){
		Meteor.call('LogrosDemo.decValor',this._id);
	}
});