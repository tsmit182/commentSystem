var SearchView = Backbone.View.extend({

	className: 'searchScreen',

	events: {
		'click #videoFind' : 'videoFind' 
	},

	initialize: function () {
		this.render();
	},

	render: function(){
		console.log("viewin' ya search view!");
		var search = _.template($("#search_screen").html());
		this.$el.html(search);
		$('.hero-unit').html(this.$el);
	},

	videoFind: function () {
		console.log('yo');
		var urlValue = $('#url_input').val();
		//use RegEx to remove the url before video ID 
		var truncVidID = urlValue.replace(/https?:\/\/www.youtube.com\/watch\?v=/, "");

		App.route.navigate('video/' + truncVidID, { trigger: true });

		// if ($('#url_input').val() === '') {
		// 	$('.vidGoesHere').empty();
		// 	$('.commentsRendered').hide();
		// 	$('#comment_input').hide();
		// 	$('.comment_submit').hide();
		// 	$('.vidGoesHere').append("<p class='disappointment'>Looks like you didn't submit a valid URL. Try again?</p>");
		// } else {
		// 	$('.commentsRendered').show();
		// 	$('#comment_input').show();
		// 	$('.comment_submit').show();				
		// }

		//assigning a variable to be looped over
		//var video = collectionInstance.where({videoID: truncVidID});
	//loop through `video` array, pull & append comment values:
		//the loop is going to run for each `i` in the `video` array
	// 	for (var i in video) {
	// 	//assigning a variable for "for each object in this video"
 //  	var com = video[i];
	//   //pull each comment with `com.attributes.comment`, put it in a div, and append it to `.commentsRendered` 
	//   $(".commentsRendered").append("<div class='commentHolder'>" + com.attributes.comment + "</div>")};	
	// }
	}



});