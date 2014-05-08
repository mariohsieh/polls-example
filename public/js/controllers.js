// all controllers

angular.module("controllers", [])

	// managing the poll list
	.controller("pollListCtrl", function($scope) {
		$scope.polls = [];
	})
	

	// voting/viewing poll results
	.controller("pollItemCtrl", function($scope) {
		$scope.poll = {};
		$scope.vote = function() {};
	})

	// creating a new poll
	.controller("pollNewCtrl", function($scope) {
		$scope.poll = {
			question: '',
			choices: [{
				text: ''},{text: ''}, {text: ''
			}]
		};
		$scope.addChoice = function() {
			$scope.poll.choices.push({text: ''});
		};
		$scope.createPoll = function() {};
	});
