var CommentsView = Backbone.View.extend({

	className: 'searchScreen',

	initialize: function (attrs) {
		this.options = attrs;
		this.render();
	},

	render: function(){
		console.log("viewin' ya comments view!");
		var comments = _.template($("#comment_screen").html());
		var rendered = comments(this.options);
		$('.hero-unit').html(rendered);
	}

});