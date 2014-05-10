angular.module("pollServices", ['ngResource'])

	.factory("Poll", function($resource) {

		return $resource('polls/:pollid', {}, {
			query: {
				method: 'GET',
				params: { pollid: 'polls' },
				isArray: true
			}
		});
	
	});

