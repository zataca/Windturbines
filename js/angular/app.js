/*
 * De App.js regelt initialisatie en routing
 */
angular.module("blogPrototype", ['blogPrototype.controllers', 'ui.router'])
		.run(['$rootScope', '$state', '$stateParams',
			function($rootScope, $state, $stateParams) {

				$rootScope.$state = $state;
				$rootScope.$stateParams = $stateParams;
			}
		])
		.config(function($stateProvider, $urlRouterProvider) {
			$urlRouterProvider.otherwise("/");
			$stateProvider
					.state('home', {
						url: "/",
						templateUrl: "views/partials/home.html",
						controller: "HomeCtrl"
					}) 
					.state('dashboard', {
						url: "/dashboard",
						templateUrl: "views/partials/dashboard.html",
						controller: "DashboardCtrl"
					})
		});

 