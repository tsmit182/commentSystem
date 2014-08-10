
//Underscore's documentation:
var compiled = _.template("hello: <%= name %>");
compiled({name: 'moe'});


var list = "<% _.each(people, function(name) { %> <li><%= name %></li> <% }); %>";
_.template(list, {people: ['moe', 'curly', 'larry']});


var template = _.template("<b><%- value %></b>");
template({value: '<script>'});





var comment = _.template("<%= userComment %>");
comment({userComment: commentValue});


//Gonna make a list of a few comments so that I can try to display them on my page


var commentList = [
	{
		id : 1,
		comment : "Hello World"
	},

	{
		id : 2,
		comment: "Second comment"
	}

	{
		id: 3,
		comment: "Third!"
	}
];



// The following takes the attributes of previously defined "firstComment" and prepends them
		$(".commentsRendered").prepend(firstComment.attributes.comment);