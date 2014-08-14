
$(document).ready(function() {
	$(".comment_submit").click(function(){
		var commentValue = document.getElementById("comment_input").value;
		//makes the input content into a new instance of `Comment`:
		var newComment = new Comment ({
			"comment" : document.getElementById("comment_input").value
		});
		$(".commentsRendered").prepend("<div class='commentHolder'>" + commentValue + "</div>");

		collectionInstance.add(newComment).save();
		$("#comment_input").val('');
	});
});

// collectionInstance.fetch();

//pulling the comments from the server:
collectionInstance.fetch().done(function() {


	// var grouped = collectionInstance.groupBy('videoID');
	// var aCommentIsThis = grouped.gkTb9GP9lVI[3].attributes.comments
	// $(".commentsRendered").prepend(aCommentIsThis);

	var video = collectionInstance.where({videoID: "gkTb9GP9lVI"});

////This returns a lot of information.
	// for (var i in collectionInstance) {
	// 	var col = collectionInstance[i];
	// 	console.log(col);
	// }

	// $(".commentsRendered").prepend(video.attributes);
	// console.log(video);



	//loop through `video` array, pull & append comment values:
	for (var i in video) {
	  var com = video[i];
	  $(".commentsRendered").append("<div class='commentHolder'>" + com.attributes.comment + "</div>")};

});

