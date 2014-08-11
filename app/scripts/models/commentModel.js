var Comment = Backbone.Model.extend({

	idAttribute: '_id',

	defaults: {
		//hardcode a video id here, something like as follows
		// videoID: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"

		videoID: "",
		author: "",
		comment: "",
		date: "",
		timestamp: "",

	}
});

firstComment = new Comment({

	videoID: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
	author: "someTroll",
	comment: "This video is teh lamesauce!!",
	date: "August 4, 2014",
	timestamp: "1:04 AM"

})


var CommentsPage = Backbone.Collection.extend({

	model: Comment,
	url:"http://tiy-atl-fe-server.herokuapp.com/collections/youtubeCommentSystem"

});