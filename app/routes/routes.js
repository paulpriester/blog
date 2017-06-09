var r = require("./routes.json"),
    passport = require("passport");

var controllers = {
	pages: require("./controllers/pages"),
	session: require("./controllers/session"),
	blogCtrl: require("./controllers/blogcontrol")
};

module.exports = function(app) {
	app.get(r.home, controllers.pages.home);
	app.get(r.login, controllers.pages.login);
	app.get(r.index, controllers.session, controllers.pages.index); //r.index is the actually route, controllers.session checks if the user is login, controllers.pages.indes renders the page
	app.get(r.post, controllers.session, controllers.pages.post);
	app.get(r.create, controllers.session, controllers.blogCtrl.create);
	app.get(r.update, controllers.session, controllers.blogCtrl.update);
	app.get(r.signup, controllers.pages.signup);

	app.post(r.login, passport.authenticate("local-login", {
		successRedirect: r.index,
		failureRedirect: r.login
	}));

	app.post(r.create, controllers.session, controllers.blogCtrl.create);
	app.put(r.update, controllers.session, controllers.blogCtrl.update);
	app.delete(r.delete, controllers.session, controllers.blogCtrl.delete);
	
};