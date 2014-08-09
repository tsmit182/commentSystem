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


var commentList = [
	{
		id : 1,
		comment : "Hello World"
	},

	{
		id : 2,
		comment: "Second comment"
	},

	{
		id: 3,
		comment: "Third!"
	}
];


$(document).ready(function() {

	$(".comment_submit").click(function(){
		var commentValue = document.getElementById("comment_input").value;
		$(".commentsRendered").prepend(commentValue);
	});
});
