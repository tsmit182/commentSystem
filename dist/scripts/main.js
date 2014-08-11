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

	}
});

firstComment = new Comment({

	videoID: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
	author: "someTroll",
	comment: "This video is teh lamesauce!!",
	date: "August 4, 2014",
	timestamp: "1:04 AM"

})


var CommentsPage = Backbone.Collection.extend({

	model: Comment,
	url:"http://tiy-atl-fe-server.herokuapp.com/collections/youtubeCommentSystem"

});
var CommentView = Backbone.View.extend ({

	el: '.commentScreen',

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
		$(".commentsRendered").prepend(commentValue);
	});
});
