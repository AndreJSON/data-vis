/*jslint node: true */
'use strict';

var http = require('http');

var tests = [];
module.exports = function (app) {
	app.get('/api/tests', function (req, res) {
		res.json(tests);
	});
	
	app.get('/api/tests/:id', function (req, res) {
		res.json(tests[req.params.id]);
	});
};

function generateTest(id) {
	var randDate, randVit, randSucc, tmp;
	randDate = Math.ceil(Math.random() * 28);
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
for (counter = 0; counter < 200; counter += 1) {
	tests.push(generateTest(counter));
}