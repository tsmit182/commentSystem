var commentTemplate = _.template($("#comment_template").html());


var commentValue = document.getElementById("comment_input").value;

var compilingComment = _.template



//The following prepends `commentValue` to `.commentsRendered`
$(".commentsRendered").prepend(commentValue);