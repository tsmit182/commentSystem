var SearchView = Backbone.View.extend({

	className: '.hero-unit',

	events: {
		'click h3' : 'sayYay'
	},

	initialize: function () {
		this.render();
	},

	render: function () {
		var elem = "<h1>Hi!</h1>";
		this.$el.html(elem);
	},

	sayYay: function(){
		alert('yay!');
	}

});