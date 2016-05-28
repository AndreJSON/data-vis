/*global angular */

angular.module('andrejson', ['ngMaterial', 'ngRoute', 'ngMdIcons', 'chart.js'])
	.config(function ($routeProvider) {
		'use strict';
		$routeProvider
			.when('/', {
				templateUrl: 'views/home.html'
			})
			.when('/home', {
				templateUrl: 'views/home.html'
			})
			.when('/diagrams', {
				templateUrl: 'views/diagrams.html',
				controller: 'diagramsController'
			})
			.otherwise({
				templateUrl: 'views/404.html'
			});
	})
	.config(function ($mdThemingProvider) {
		'use strict';
		$mdThemingProvider.theme('default')
			.primaryPalette('teal', {
				'default': '500',
				'hue-1': '100',
				'hue-2': '600',
				'hue-3': 'A100'
			})
			.accentPalette('purple', {
				'default': '200'
			});
	});
