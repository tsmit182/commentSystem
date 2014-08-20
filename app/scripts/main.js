//when my document is ready, run the code inside the curly brackets
$(document).ready(function(){
	//load the page with the `search` route showing
	route.search();
	//when this instance of a collection is fetched, run the following parameter code
	collectionInstance.fetch().done(function(){
		//when the #videoFind button is clicked, run its parameters	
		$("#videoFind").click(function(){
			//assign a variable to the user-input text in the #url_input field
			var urlValue = $('#url_input').val();
			//use RegEx to remove the url before video ID 
			var truncVidID = urlValue.replace(/https?:\/\/www.youtube.com\/watch\?v=/, "");
			//assign a variable to the collection, where the collection's videoID equals the input URL value
			var video = collectionInstance.where({videoID: truncVidID});

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
			//pulling the comment value from `#comment_input`
			"comment" : document.getElementById("comment_input").value,
			//pulling the input from occluded `#url_input` and then truncating it to only the video ID using regular expressions
			"videoID" : document.getElementById("url_input").value.replace(/https?:\/\/www.youtube.com\/watch\?v=/, "")
		});

			//adding the comment instance as soon as it's submitted (since it won't be pulled from the server until the next load)
		$(".commentsRendered").prepend("<div class='commentHolder'>" + commentValue + "</div>");
			//adding the comment instance to the server and saving it
		collectionInstance.add(newComment).save();
			//resetting the form to an empty state
		$("#comment_input").val('');
	});
});