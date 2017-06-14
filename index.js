var express = require("express"),
	mongoose = require("mongoose"),
	bodyParser = require("body-parser"),
	hbs = require("hbs"),
	methodOverride = require("method-override")
	passport = require("passport"),
	bcrypt = require("bcrypt-nodejs"),
	session = require("express-session"),
	localAuth = require("./app/auth/passport-local"),
	path = require("path"),
	routes = require("./app/routes/routes"),
	app = express();



app.set("view engine", "hbs"); 

app.use("/static", express.static(path.join(__dirname, "app/client")));
app.set("views", path.join(__dirname, "app/views"));
//linking the view folder to the index.js with a symbolic link name "views".

app.use(session({
	secret: "ItsASecret",
	resave: true,
	saveUninitialized: true
}));


app.use(passport.initialize());
app.use(passport.session());


app.use(methodOverride('_method'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

localAuth(passport);
routes(app, passport);



mongoose.connect("mongodb://localhost/user");
app.listen(8080);

console.log("server is running");