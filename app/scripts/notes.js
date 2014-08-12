
//Darude-Sandstorm
4ZXPP7qMSz4
//Never Gonna Give You Up
dQw4w9WgXcQ
//The Best of Bach
6JQm5aSjX6g
//Troll Song
gkTb9GP9lVI


//Some sample comments
var firstComment = new Comment({

	videoID: "dQw4w9WgXcQ",
	author: "someTroll",
	comment: "This video is teh lamesauce!!",
	date: "August 4, 2014",
	timestamp: "1:04 AM"

});

var secondComment = new Comment({

	videoID: "dQw4w9WgXcQ",
	author: "SHOOPtheWOOP",
	comment: "luv dis vido THXXXXX",
	date: "August 5, 2014",
	timestamp: "9:15 AM"

});

//This adds `secondComment` to the collection then saves the collection to the specified server
collectionInstance.add(secondComment).save()

var thirdComment = new Comment({

	videoID: "dQw4w9WgXcQ",
	author: "all_the_good_names_were_taken",
	comment: "Anybody want to start a flame war?",
	date: "August 5, 2014",
	timestamp: "10:57 AM"

});


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