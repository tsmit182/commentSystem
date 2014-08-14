
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

