/*jslint node: true */
'use strict';

var http = require('http');

var tests = [];
var dayAmount = 14;
module.exports = function (app) {
	app.get('/api/tests', function (req, res) {
		res.json(tests);
	});
	
	app.get('/api/tests/:id', function (req, res) {
		res.json(tests[req.params.id]);
	});
	
	app.get('/api/days', function (req, res) {
		res.json({days: dayAmount});
	});
	
	app.get('/api/dates', function (req, res) {
		res.json({dates: ['1/6', '2/6', '3/6', '4/6', '5/6', '6/6', '7/6', '8/6', '9/6', '10/6', '11/6', '12/6', '13/6', '14/6']});
	});
};

function generateTest(id) {
	var randDate, randVit, randSucc, tmp;
	randDate = Math.floor(Math.random() * dayAmount);
	randSucc = Math.random() > 0.5 ? true : false;
	tmp = Math.random();
	if (tmp < 0.5) {
		randVit = 0;
	} else if (tmp < 0.8) {
		randVit = 1;
	} else {
		randVit = 2;
	}
	return {id: id, date: randDate, vitality: randVit, success: randSucc};
}

var counter;
for (counter = 0; counter < 1000; counter += 1) {
	tests.push(generateTest(counter));
}