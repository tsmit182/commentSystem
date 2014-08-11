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

	},

		initialize:function(){
			var comment = this.get('comment');
			console.log(comment + ' seems to be initialized.');
			$(".commentsRendered").prepend(comment)
	}
});


var CommentsPage = Backbone.Collection.extend({

	model: Comment,
	url:"http://tiy-atl-fe-server.herokuapp.com/collections/youtubeCommentSystem"

});

var collectionInstance = new CommentsPage();