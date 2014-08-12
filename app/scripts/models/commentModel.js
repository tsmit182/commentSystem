var Comment = Backbone.Model.extend({

	idAttribute: '_id',

	defaults: {
		//hardcode a video id here, something like as follows
		// videoID: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"

		videoID: "gkTb9GP9lVI",
		author: "",
		comment: "",
		date: "",
		timestamp: "",

	},

		initialize:function(){
				//Commented out while working on loading comments from a specific video
			// var comment = this.get('comment');
			// // console.log(comment + ' seems to be initialized.');
			// $(".commentsRendered").prepend(comment)
	}
});


var CommentsPage = Backbone.Collection.extend({

	model: Comment,
	url:"http://tiy-atl-fe-server.herokuapp.com/collections/youtube2"

});

var collectionInstance = new CommentsPage();