
var dotenv = require("dotenv").config();
var bodyParser = require("body-parser");
var express = require("express");

//import bodyParser from 'body-parser'
//import express from 'express'

//const cookieParser = require('cookie-parser') ;
//const session = require('express-session');
const db = require("./models");

const app = express()
const port = process.env.PORT || 5000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
const router = express.Router()

// console.log that your server is up and running
//app.listen(port, () => console.log(`Listening on port ${port}`));

// force: false won't create database if exists
var syncOptions = { force: true };


// set PORT for express
// Heroku needs process.env.PORT
var PORT = process.env.PORT || 5000;

// If running a test, set syncOptions.force to true
//  force : true clears the `testdb`
if (process.env.NODE_ENV === "test") {
    syncOptions.force = true;
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