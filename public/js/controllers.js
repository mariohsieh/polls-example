// all controllers

angular.module("controllers", [])

	// managing the poll list 
	.controller("pollListCtrl", function($scope, Poll) {
		$scope.polls = Poll.query();
	});
/*	
	// voting/viewing poll results
	.controller("pollItemCtrl", function($scope, $routeParams, Poll) {
		$scope.poll = Poll.get({
			pollid: $routeParams.pollid
		});
		$scope.vote = function() {};
	})

	// creating a new poll
	.controller("pollNewCtrl", function($scope, $location, Poll) {
		$scope.poll = {
			question: '',
			choices: [
				{text: ''},
				{text: ''},
				{text: ''}
			]
		};
		
		$scope.addChoice = function() {
			$scope.poll.choices.push({text: ''});
		};

		$scope.createPoll = function() {
			var poll = $scope.poll;
			if(poll.question.length > 0) {
				var choiceCount = 0;
				var length = poll.choices.length;
				for (var i=0; i<length;i++) {
					var choice = poll.choices[i];
					if (choice.text.length > 0) {
						choiceCount++;
					}
				}
				if (choiceCount > 1) {
					var newPoll = new Poll(poll);
					newPoll.$save(function(p, resp) {
						if (!p.error) {
							$location.path('polls');
						} else {
							alert('Count not create poll');
						}
					});
				} else {
					alert('You must enter at least two choices');
				}
			} else {
				alert('You must enter a question');
			}
		};
*/
	//});

