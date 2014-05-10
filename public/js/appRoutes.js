angular.module('appRoutes', [])
	.config(['$routeProvider', "$locationProvider", function($routeProvider, $locationProvider) {
		$routeProvider

			// see all polls
			.when('/', {
				templateUrl: 'views/list.html',
				controller: "pollListCtrl"
			})
	
			// see single poll
			.when('/polls/:pollid', {
				templateUrl: 'views/item.html',
				controller: "pollItemCtrl"
			})
		
			// create new poll
			.when('/new', {
				templateUrl: 'views/new.html',
				controller: "pollNewCtrl"
			})
	
			// catch-all redirect back to index
			.otherwise({
				redirectTo: '/'
			});
			
		$locationProvider.html5Mode(true);
		
	}]);
