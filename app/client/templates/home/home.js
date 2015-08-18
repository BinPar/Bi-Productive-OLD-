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

Template.home.onRendered(function () {
	this.find('#demoList')._uihooks = {
		moveElement: function (node, next) {
			var $node = $(node), $next = $(next);
			var oldTop = $node.offset().top;
			var height = $(node).outerHeight(true);
			var list= $node.parent();

			list.children().each(function(){
				$(this).data("lastPos",list.children().index(this));
			});

			var inBetween = [];

			$node.insertBefore(next);

			list.children().each(function(){
				if($(this).data("lastPos") != list.children().index(this) && this != node) inBetween.push(this);
			});


			var newTop = $node.offset().top;

			$node
				.removeClass('animate')
				.addClass('topMost')
				.css('top', oldTop - newTop);

			$.each(inBetween,function(){
				$(this)
				.removeClass('animate')
				.removeClass('topMost')
				.css('top', oldTop < newTop ? height : -1 * height)
			});

			$node.offset();

			$node.addClass('animate').css('top', 0);

			$.each(inBetween,function(){
				$(this).addClass('animate').css('top', 0);
			});
		}
	}
});