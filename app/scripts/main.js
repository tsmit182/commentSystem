$(document).ready(function(){
	//load the page with the `search` route showing
		route.search();
		$("#videoFind").click(function(){
			route.comments();
		})
});


//when my document is ready, run the code inside the curly brackets
$(document).ready(function() {
		$("#findNewVideo").click(function(){
			route.search();
		});
	//when `.comment_submit` is clicked, run the code inside the curly brackets
		$(".comment_submit").click(function(){
		//assigning `commentValue` the user-input value of the `#comment_input` textarea
		var commentValue = document.getElementById("comment_input").value;
//making the input content into a new instance of `Comment`:
		//creating the instance:
		var newComment = new Comment ({
			//pulling it from `#comment_input`
			"comment" : document.getElementById("comment_input").value
		});
			//adding the comment instance as soon as it's submitted (since it won't be pulled from the server until the next load)
		$(".commentsRendered").prepend("<div class='commentHolder'>" + commentValue + "</div>");
			//adding the comment instance to the server and saving it
		collectionInstance.add(newComment).save();
			//resetting the form to an empty state
		$("#comment_input").val('');
	});
});


//pulling the comments from the server:

//when the collection instance is done being fetched from the server, run the code inside the curly brackets
collectionInstance.fetch().done(function() {
	//assign a variable for a `collectionInstance` manually sorted by a videoID
	var video = collectionInstance.where({videoID: "dQw4w9WgXcQ"});

	//loop through `video` array, pull & append comment values:
		//the loop is going to run for each `i` in the `video` array
	for (var i in video) {
		//assigning a variable for "for each object in this video"
	  var com = video[i];
	  //pull each comment with `com.attributes.comment`, put it in a div, and append it to `.commentsRendered` 
	  $(".commentsRendered").append("<div class='commentHolder'>" + com.attributes.comment + "</div>")};

});


