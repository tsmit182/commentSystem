var Comment = Backbone.Model.extend({

	idAttribute: '_id',

	defaults: {
		//hardcode a video id here, something like as follows
		// videoID: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"

		author: "",
		comment: "",
		videoID: ""

	}
});

firstComment = new Comment({
	author: "someTroll",
	comment: "This video is teh lamesauce!!",
	videoID: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
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
// var commentTemplate = _.template($("#comment_template").html());

//My initial variable to get the value inside of the textarea element:
// var commentValue = document.getElementById("comment_input").value;
// commentValue

//Thought above wasn't functioning quite as I'd thought, so I wrote:
// var commentValue = comment_input.value
//But both seem to be functioning similarly


// var compilingComment = _.template



//The following prepends `commentValue` to `.commentsRendered`   [[OR RATHER IT WAS AT ONE POINT]]
//It seems to prepend when *assigned* as a variable, and wasn't when *called* as a variable
// var comments_rendered = $(".commentsRendered").prepend(commentValue);


//Working toward clicking ".comment_submit" in order to prepend the user-entered data
// $(".comment_submit").click(function(){
// 	$(".commentsRendered").prepend(commentValue);
// });


//Zomg this seems to work for prepending the comment
//	$(".comment_submit").click(function(){
// 		var commentValue = document.getElementById("comment_input").value;
// 		$(".commentsRendered").prepend(commentValue);
// 	});





$(document).ready(function() {

	$(".comment_submit").click(function(){
		var commentValue = document.getElementById("comment_input").value;
		$(".commentsRendered").before(commentValue);
	});
});




