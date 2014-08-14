var Comment = Backbone.Model.extend({

	idAttribute: '_id',

	defaults: {
		//hardcode a video id here, something like as follows
		// videoID: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"

		videoID: "gkTb9GP9lVI",
		author: "",
		comment: "",
		date: "",
		timestamp: "",

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

	el: $('.commentScreen'),

	events: {
		'click .comment_submit' : 'submitComment'
	},

	submitComment: function(event) {
		event.preventDefault();
		
	},

	initialize: function(comment) {
		this.render();
		// console.log("initialize is functioning");
	},

	render: function (event) {
		event.preventDefault();
	}

})

var ThisRouter = Backbone.Router.extend({

	routes: {
		'' : 'search',
		'video/:id' : 'comments'
	},

	search: function() {
		$(".searchScreen").show();
		$(".commentScreen").hide();
	},

	comments: function() {
		$(".commentScreen").show();
		$(".searchScreen").hide();
	}

});

$(document).ready(function() {
	$(".comment_submit").click(function(){
		var commentValue = document.getElementById("comment_input").value;
		//makes the input content into a new instance of `Comment`
		var newComment = new Comment ({
			"comment" : document.getElementById("comment_input").value
		});
		// $(".commentsRendered").prepend("<div class='commentHolder'>" + commentValue + "</div>");

		collectionInstance.add(newComment).save();
	});
});

// collectionInstance.fetch();

//pulling the comments from the server


collectionInstance.fetch().done(function() {
	// var grouped = collectionInstance.groupBy('videoID');
	// var aCommentIsThis = grouped.gkTb9GP9lVI[3].attributes.comments
	// $(".commentsRendered").prepend(aCommentIsThis);

	var video = collectionInstance.where({videoID: "4ZXPP7qMSz4"});
	// $(".commentsRendered").prepend(video.attributes);
	// console.log(video);

	for (var i in video) {
	  var com = video[i];
	  $(".commentsRendered").prepend(com.attributes.comment)};


	//need to loop through the arrays in `video` and spit out the comment data

});

