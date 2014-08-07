var Comment = Backbone.Model.extend({

	idAttribute: '_id'

});



var CommentsPage = Backbone.Collection.extend({

	model: Comment,
	url:"http://tiy-atl-fe-server.herokuapp.com/collections/youtubeCommentSystem"

});
var CommentView = Backbone.View.extend ({

	el: '.commentScreen',

	events: {
		'click .comment_submit' : 'submitComment'
	},

	submitComment : function(event) {
		event.preventDefault();
		
	}

	initialize: function(comment){
		this.render();
	},

	render: function (event) {
		event.preventDefault();
	}

})


