
var dotenv = require("dotenv").config();
var bodyParser = require("body-parser");
var express = require("express");
var session = require("express-session");
// Requiring passport as we've configured it
var passport = require("./config/passport");

var path  = require("path")

//import bodyParser from 'body-parser'
//import express from 'express'

//const cookieParser = require('cookie-parser') ;
const db = require("./models");

const port = process.env.PORT || 5000;

const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
//app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

const router = express.Router()

// app.use(express.static(path.join(__dirname, 'build')));

// app.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
//   });

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }
// console.log that your server is up and running
//app.listen(port, () => console.log(`Listening on port ${port}`));
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

require("./routes/htmlroutes.js")(app);
require("./routes/apiRoutes")(app);
// force: false won't create database if exists
var syncOptions = { force: false};



// set PORT for express
// Heroku needs process.env.PORT
var PORT = process.env.PORT || 5000;



// If running a test, set syncOptions.force to true
//  force : true clears the `testdb`
if (process.env.NODE_ENV === "development") {
    //syncOptions.force = true; //drops all tables
    syncOptions.force = false;
}

// Syncing models  to database & then starts the server 
db.sequelize.sync(syncOptions).then(function() {
    app.listen(PORT, function() {
        console.log(
            "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
            PORT,
            PORT
        );
    });
});
