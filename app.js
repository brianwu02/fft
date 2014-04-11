/* 
 * Required Dependencies
 */
var express = require('express');
var MongoStore = require('connect-mongo')(express);
var path = require('path');
var mongoose = require('mongoose');
var passport = require('passport');


/**
 * Controllers
 */

var apiController = require('./controllers/api');

/**
 * API Keys and secrets.js
 */

var secrets = require('./config/secrets');
var passportConf = require('./config/passport');

/**
 * express app
 */

var app = express();


/*
 * Start Server
 */

app.listen(app.get('port'), function() {
  console.log('Express server listening on port %d', app.get('port'));
});

