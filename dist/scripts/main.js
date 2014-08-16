var Comment = Backbone.Model.extend({

	idAttribute: '_id',

	defaults: {
		//hardcode a video id here, something like as follows
		// videoID: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"

		// videoID: "dQw4w9WgXcQ",
		videoID: "",
		author: "",
		comment: "",
		date: "",
		timestamp: ""

	},

		initialize:function(){
				//Commented out while working on loading comments from a specific video
			// var comment = this.get('comment');
			// // console.log(comment + ' seems to be initialized.');
			// $(".commentsRendered").prepend(comment)
	}
});


var CommentsPage = Backbone.Collection.extend({

	model: Comment,
	url:"http://tiy-atl-fe-server.herokuapp.com/collections/youtube2"

});

var collectionInstance = new CommentsPage();
var CommentView = Backbone.View.extend ({

	template: _.template

	el: $('.commentScreen'),


});

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
$(document).ready(function(){
	//load the page with the `search` route showing
	route.search();
	//when this instance of a collection is fetched, run the following parameter code
	collectionInstance.fetch().done(function(){
		//when the #videoFind button is clicked, run its parameters	
		$("#videoFind").click(function(){
			//assign a variable to the user-input text in the #url_input field
			var urlValue = $('#url_input').val();
			//assign a variable to the collection, where the collection's videoID equals the input URL value
			var video = collectionInstance.where({videoID: urlValue});

		//loop through `video` array, pull & append comment values:
			//the loop is going to run for each `i` in the `video` array
			for (var i in video) {
			//assigning a variable for "for each object in this video"
	  	var com = video[i];
		  //pull each comment with `com.attributes.comment`, put it in a div, and append it to `.commentsRendered` 
		  $(".commentsRendered").append("<div class='commentHolder'>" + com.attributes.comment + "</div>")};
		  route.comments();
		});
	});
});


//when my document is ready, run the code inside the curly brackets
$(document).ready(function() {
		//when user clicks #findNewVideo button, the next two lines are run
		$("#findNewVideo").click(function(){
			//empties `.commentsRendered` div
			$('.commentsRendered').empty();
			//returns user to search route
			route.search();
		});
	//when `.comment_submit` is clicked, run the code inside the curly brackets
		$(".comment_submit").click(function(){
		//assigning `commentValue` the user-input value of the `#comment_input` textarea
		var commentValue = document.getElementById("comment_input").value;

//making the input content into a new instance of `Comment`:
		//creating the instance:
		var newComment = new Comment ({
			//pulling the comment and videoID values from `#comment_input` and (occluded) `#url_input`
			"comment" : document.getElementById("comment_input").value,
			"videoID" : document.getElementById("url_input").value
		});
			//adding the comment instance as soon as it's submitted (since it won't be pulled from the server until the next load)
		$(".commentsRendered").prepend("<div class='commentHolder'>" + commentValue + "</div>");
			//adding the comment instance to the server and saving it
		collectionInstance.add(newComment).save();
			//resetting the form to an empty state
		$("#comment_input").val('');
	});
});


// //pulling the comments from the server:

// //when the collection instance is done being fetched from the server, run the code inside the curly brackets
// collectionInstance.fetch().done(function() {
// 	//assign a variable for a `collectionInstance` manually sorted by a videoID
// 	var video = collectionInstance.where({videoID: "dQw4w9WgXcQ"});

// 	//loop through `video` array, pull & append comment values:
// 		//the loop is going to run for each `i` in the `video` array
// 	for (var i in video) {
// 		//assigning a variable for "for each object in this video"
// 	  var com = video[i];
// 	  //pull each comment with `com.attributes.comment`, put it in a div, and append it to `.commentsRendered` 
// 	  $(".commentsRendered").append("<div class='commentHolder'>" + com.attributes.comment + "</div>")};

// });


