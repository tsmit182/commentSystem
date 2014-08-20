var CommentView = Backbone.View.extend ({

  tagName: "li",

  className: "document-row",

	events: {
		'click button' : 'alertClicked'
	},

	alertClicked: function () {
		alert('clicked')
	}

});

datCom = new CommentView();