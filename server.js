/*jslint node: true, nomen: true, es5: true*/
'use strict';

//Getting it all started.
var express = require('express');
var app = express();

//Paths and routing.
var port = 8080;
require('./backend/routes.js')(app);
app.use(express.static(__dirname + '/public'));
app.use('/angular', express.static(__dirname + '/node_modules/angular'));
app.use('/angular-animate', express.static(__dirname + '/node_modules/angular-animate'));
app.use('/angular-aria', express.static(__dirname + '/node_modules/angular-aria'));
app.use('/angular-chart', express.static(__dirname + '/node_modules/angular-chart.js'));
app.use('/angular-material', express.static(__dirname + '/node_modules/angular-material'));
app.use('/angular-material-icons', express.static(__dirname + '/node_modules/angular-material-icons'));
app.use('/angular-route', express.static(__dirname + '/node_modules/angular-route'));
app.use('/chart', express.static(__dirname + '/node_modules/chart.js'));
app.use('/stylesheets', express.static(__dirname + '/css/stylesheets'));
app.use('/images', express.static(__dirname + '/images'));
app.use('/favicon.ico', express.static(__dirname + '/images/favicon.ico'));

app.listen(port);
console.log("Server is now listening on port: " + port);