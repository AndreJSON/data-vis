/*global angular*/

angular.module('andrejson').controller('diagramsController', function ($scope, $http, $log, $timeout) {
	'use strict';
	$timeout(function () {
		$http.get('/api/tests/23', {})
			.then(function (res) {
				$log.info(res.data);
			},
			function () {
				$log.info("PANIC!");
			}
		);
	});
});