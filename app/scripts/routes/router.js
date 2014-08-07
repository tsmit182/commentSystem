var ThisRouter = Backbone.Router.extend({

	routes: {
		'' : 'search',
		'comments' : 'comments'
	},

	search: function() {
		$(".searchScreen").show();
		$(".commentScreen").hide();
	},

	comments: function () {
		$(".commentScreen").show();
		$(".searchScreen").hide();
	}

});