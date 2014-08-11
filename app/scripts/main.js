
$(document).ready(function() {
//prepending the comment on click of 'submit'
	$(".comment_submit").click(function(){
		var commentValue = document.getElementById("comment_input").value;
		var newComment = new Comment ({
			"comment" : document.getElementById("comment_input").value
		});
		// $(".commentsRendered").prepend("<div class='commentHolder'>" + commentValue + "</div>");

		collectionInstance.add(newComment).save();
	});
});

