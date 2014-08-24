var CommentsView = Backbone.View.extend({

	className: 'searchScreen',

	events: {
		'click #findNewVideo' : 'findNewVideo',
		'click .comment_submit' : 'submitComment'
	},

	initialize: function (attrs) {
		this.options = attrs;
		this.render();
	},

	render: function(){
		console.log("viewin' ya comments view!");
		var comments = _.template($("#comment_screen").html());
		var rendered = comments(this.options);
		this.$el.html(search);
		$('.hero-unit').html(this.$el);
	},

	findNewVideo: function () {
		App.route.navigate('', { trigger: true });
	}

});