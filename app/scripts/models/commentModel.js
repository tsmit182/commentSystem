var Comment = Backbone.Model.extend({

	idAttribute: '_id'

});



var CommentsPage = Backbone.Collection.extend({

	model: Comment,
	url:"http://tiy-atl-fe-server.herokuapp.com/collections/youtubeCommentSystem"

});