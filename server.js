var express = require("express");
var passport   = require('passport');
var session    = require('express-session');
var bodyParser = require('body-parser');
var env = require('dotenv').load();
var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
// Set bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// For Passport
 
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
 
app.use(passport.initialize());
 
app.use(passport.session()); // persistent login sessions


// For handlebars

var exphbs = require("express-handlebars");
app.set('views', './app/views');
app.engine("handlebars", exphbs({
  defaultLayout: "main",
  layoutsDir: __dirname + '/app/views/layouts',
	partialsDir: __dirname + 'app/views/partials/'}));
app.set("view engine", "handlebars");


// bring in the models
var db = require("./app/models");

//Routes
var authRoute = require('./app/routes/auth.js')(app,passport);
var patternRoute = require('./app/routes/patterns.js')(app,passport);
//load passport strategies
require('./app/config/passport/passport.js')(passport, db.user);



// listen on port 3000
var port = process.env.PORT || 3000;
db.sequelize.sync({force: true}).then(function() {
  app.listen(port);
  console.log("server running on port " + port);
});