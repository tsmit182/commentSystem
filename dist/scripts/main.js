var Comment = Backbone.Model.extend({

	idAttribute: '_id',

	defaults: {
		//hardcode a video id here, something like as follows
		// videoID: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"

		videoID: "",
		author: "",
		comment: "",
		date: "",
		timestamp: "",

	},

		initialize:function(){
			var comment = this.get('comment');
			console.log(comment + ' seems to be initialized.');
			$(".commentsRendered").prepend(comment)
	}
});


var CommentsPage = Backbone.Collection.extend({

	model: Comment,
	url:"http://tiy-atl-fe-server.herokuapp.com/collections/youtubeCommentSystem"

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
//prepending the comment on click of 'submit'
	$(".comment_submit").click(function(){
		var commentValue = document.getElementById("comment_input").value;
		var newComment = new Comment ({
			"comment" : ("comment_input").value
		});
		// $(".commentsRendered").prepend("<div class='commentHolder'>" + commentValue + "</div>");

		collectionInstance.add(newComment).save();
	});
});

