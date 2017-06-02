var post = require("../../models/blogpost.js");

var newPost = function(req, res) {
	new post ({
		title: req.body.title,
		post: req.body.post
	}).save(function(err) {
		if (err){
			console.log(err);
		}
		else {
			req.redirect("/index")
		}
	})
}