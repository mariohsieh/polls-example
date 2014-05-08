angular.module('appRoutes', [])
	.config(['$routeProvider', "$locationProvider", function($routeProvider, $locationProvider) {
		$routeProvider
		
			.when('/', {
				templateUrl: 'views/list.html',
				controller: "pollListCtrl"
			})
			
			.when('/poll/:pollid', {
				templateUrl: 'views/item.html',
				controller: "pollItemCtrl"
			})
			
			.when('/new', {
				templateUrl: 'views/new.html',
				controller: "pollNewCtrl"
			})
			
			.otherwise({
				redirectTo: '/'
			});
			
		$locationProvider.html5Mode(true);
		
	}]);
