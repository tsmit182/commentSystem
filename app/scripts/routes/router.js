//Creating a router constructor
var ThisRouter = Backbone.Router.extend({

	routes: {
		'' : 'search',
		'video/:id' : 'comments'
	},

//the route in which my search shall go
	search: function() {
		$(".searchScreen").show();
		$(".commentScreen").hide();
	},

//the route in which comments shall go
	comments: function(id) {
		$(".commentScreen").show();
		$(".searchScreen").hide();
	}

});

//creating an instance of my router
var route = new ThisRouter();