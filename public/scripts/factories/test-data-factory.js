/*global angular*/

angular.module('andrejson').factory('testDataFactory', function ($http) {
	'use strict';
	var data;

	data = {
		tests: [],
		getTests: function () {
			return this.tests;
		}
	};

	$http.get('/api/tests', {}).then(function (res) {
		data.tests = res.data;
	});

	return data;
});