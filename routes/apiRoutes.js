// import entire models folder
var db = require("../models");
var bcrypt = require('bcrypt');
var passport = require("../config/passport");

// Necessary for certain Sequelize features
const Op = db.Sequelize.Op;

// export this function that's passing an express server instance as an arguement
module.exports = function (app) {

    // Route for logging user out
    app.get("/logout", function (req, res) {
        req.logout();
        res.redirect("/");
    });

    // post route for creating a new user
    app.post("/api/signup", function (req, res) {
        console.log('Create User via signup:', req.body);
        db.User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password
        }).then(function () {
            console.log('Created User via signup');
            res.redirect(307, "/api/login");
        }).catch(function (err) {
            console.log('Error Creating User via signup');
            console.log("error: ", err);
            res.status(401).json(err);
        });
    });

    // post route for saving a new unit to database
    app.post("/api/create-user", function (req, res) {

        //console.log('Create User Data:', req.body);
        console.log('Create User Data:', req.body);
        bcrypt.hash(req.body.password, 10, function (err, password) {
            console.log("hash: ", password);
            // create() requires an object describing the new data we're adding to table
            db.User.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: password,
                userType: req.body.userType
            }).then(function (results) {
                res.json(results);
            }).catch(function (err) {
                //replace with better err handler
                console.log(err)
            });
        });
    });

    app.post("/api/login", passport.authenticate("local"), function (req, res) {
        res.json(req.user);
    });

    // get route to authenticate a user login
    app.get('/api/login', function (req, res) {

        console.log('=================')
        console.log(req.body.email);
        console.log(req.body.password);
        // reference models unit.js & find 1 unit by id passed in url
        db.User.findOne({
            where: {
                email: req.body.email
            }
            // return data as json
        }).then(function (result) {
            console.log("passwd from db: ", result.password);
            bcrypt.compare(req.body.password, result.password, function (err, res) {
                console.log(JSON.stringify(res));
                if (res) {
                    console.log("passwd matches: ", result.password);
                    return res.json({ "login": true });
                }
                else {
                    console.log("passwd does not match: ", result.password);
                    return res.json({ "login": false });
                }
            });
        }).catch(function (err) {
            res.status(500);
        });
    });

    // get route to find one user by its id
    app.get('/api/user/:id', function (req, res) {

        console.log('=================')
        console.log(req.params.id)

        // reference models unit.js & find 1 unit by id passed in url
        db.User.findOne({
            where: {
                id: req.params.id
            }
            // return data as json
        }).then(function (result) {
            return res.json(result);
        })
            .catch(function (err) {
                res.status(500);
            });
    });

}
