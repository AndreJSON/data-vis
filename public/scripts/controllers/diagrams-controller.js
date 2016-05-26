/*global angular*/

angular.module('andrejson').controller('diagramsController', function ($scope, $log, $timeout, testDataFactory) {
	'use strict';
	$timeout(function () {
		$log.info(testDataFactory.tests);
	});
});