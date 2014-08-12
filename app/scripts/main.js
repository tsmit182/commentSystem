
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

	collectionInstance.fetch();
	//need to allow previous .fetch() to run before assigning the following variables
	var grouped = collectionInstance.groupBy('videoID');
	var aCommentIsThis = grouped.dQw4w9WgXcQ[1].attributes.comment
	$(".commentsRendered").prepend(aCommentIsThis)