var CommentView = Backbone.View.extend ({

	el: '.commentScreen',

	events: {
		'click .comment_submit' : 'submitComment'
	},

	initialize: function(comment){
		this.render();
	},

	render: function (event) {
		event.preventDefault();
	}

})