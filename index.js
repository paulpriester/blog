var express = require("express"),
	mongoose = require("mongoose"),
	bodyParser = require("body-parser"),
	hbs = require("hbs"),
	passport = require("passport"),
	bcrypt = require("bcrypt-nodejs"),
	session = require("express-session"),
	// User = require("./user"),
	// localAuth = require("./auth"),
	path = require("path"),
	routes = require("./app/routes/routes"),
	app = express();



app.set("view engine", "hbs"); 

app.use("/static", express.static(path.join(__dirname, "app/client")));
app.set("views", path.join(__dirname, "app/views"));
//linking the view folder to the index.js with a symbolic link name "views".

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));



 routes(app);



mongoose.connect("mongodb://localhost/user");
app.listen(8080);

console.log("server is running");