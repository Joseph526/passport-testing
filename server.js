var express = require('express');
var app = express();
var passport = require('passport');
var session = require('express-session');
var bodyParser = require('body-parser');

// For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
 
app.get('/', function(req, res) {
    res.send('Welcome to Passport with Sequelize');
});
 
app.listen(8080, function(err) {
    if (!err)
        console.log("Site is live");
    else console.log(err)
});