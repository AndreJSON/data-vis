/*global angular*/

angular.module('andrejson').controller('diagramsController', function ($scope, $log, $timeout, testDataFactory) {
	'use strict';
	$scope.data = {};
	$scope.lineLabel = [];
	$scope.lineData = [];
	
	$scope.loadTests = function () {
		if (!testDataFactory.ready) {
			$timeout(5, $scope.loadTests);
		} else {
			$scope.data = testDataFactory;
			$log.info("Tests loaded.");
			$scope.extractData();
		}
	};
	
	$scope.extractData = function () {
		var i;
		for (i = 0; i < $scope.data.days; i += 1) {
			$scope.lineLabel.push($scope.data.dates[i]);
			$scope.lineData.push(0);
		}
		for (i = 0; i < $scope.data.tests.length; i += 1) {
			$scope.lineData[$scope.data.tests[i].date] += 1;
		}
		$log.info($scope.lineLabel);
	};
	
	$timeout(function () {
		$scope.loadTests();
	});
});