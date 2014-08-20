//Creating a router constructor
var ThisRouter = Backbone.Router.extend({

	routes: {
		'' : 'search',
		'video/:id' : 'comments',
		'sayhi' : 'hi'
	},

//the route in which my search shall go
	search: function() {
		// $(".searchScreen").show();
		// $(".commentScreen").hide();
			
		var searchview = new SearchView();
		$('.hero-unit').html(myview.el);



		// $("#videoFind").click(function(){
		// 	var urlValue = document.getElementById("url_input").value.replace(/https:\/\/www.youtube.com\/watch\?v=/, "")
		// 	console.log(urlValue);
		// 	route.navigate();
		// });
	},

//the route in which comments shall go
	comments: function(id) {
		$(".commentScreen").show();
		$(".searchScreen").hide();
	},

//borrowing Tim's 'hi' route for some testing attempts
  hi: function (text) {
    alert('Hello ');
  }

});

//creating an instance of my router
var route = new ThisRouter();

Backbone.history.start();