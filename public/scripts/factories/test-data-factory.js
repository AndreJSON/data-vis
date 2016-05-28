/*global angular*/

angular.module('andrejson').factory('testDataFactory', function ($http) {
	'use strict';
	var data, httpCounter = -3;

	data = {
		days: 0,
		date: [],
		ready: false,
		tests: []
	};

	$http.get('/api/tests', {}).then(function (res) {
		data.tests = res.data;
		httpCounter += 1;
		if (httpCounter === 0) {
			data.ready = true;
		}
	});
	
	$http.get('/api/days', {}).then(function (res) {
		data.days = res.data.days;
		httpCounter += 1;
		if (httpCounter === 0) {
			data.ready = true;
		}
	});
	
	$http.get('/api/dates', {}).then(function (res) {
		data.dates = res.data.dates;
		httpCounter += 1;
		if (httpCounter === 0) {
			data.ready = true;
		}
	});

	return data;
});