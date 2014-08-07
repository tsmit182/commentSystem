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