var mongoose = require("mongoose");

var Blogpost = new mongoose.Schema({
	title: String,
	post: String,
	date: {
		month: String,
		day: String,
		year: String
	},

	user: String,
	comments: [
		{
			comment: String,
			user: String
		}
	]

});

module.exports = mongoose.model("posts", Blogpost);
//blogpost name of the schema. "posts" is the name of the model.