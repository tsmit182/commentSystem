//Creating a router constructor
var ThisRouter = Backbone.Router.extend({

	routes: {
		'' : 'search',
		'video/:id' : 'comments'
	},

//the route in which my search shall go
	search: function() {

		var searchview = new SearchView();
		console.log('routin to ya search view!');

		// $(".searchScreen").show();
		// $(".commentScreen").hide();
	},

//the route in which comments shall go
	comments: function(id) {
 
		var commentsview = new CommentsView({ com_id: id });
		console.log('routin to ya comments view!');
		// $(".commentScreen").show();
		// $(".searchScreen").hide();
	}

});

