var Poll = require('./models/poll');

module.exports = function(app) {
	
	// send all routes to angular front end
	app.get('*', function(req,res) {
		res.sendfile('./public/index.html');
		//res.render('index', { title: 'Polls' });
	});
	
	/******** RESTFUL routing********/
	
	// get all polls
	app.get('/polls', function(req,res) {
		
		Poll.find({}, 'question', function(err, doc) {
			res.json(doc);
		});
	});
	
	// get single polls
	app.get('/polls/:id', function(req,res) {
		
		var pollID = req.params.id;
		Poll.findById(pollID, '', {
			lean: true
		},
		function(err,doc) {
			if (doc) {
				var userVoted = false,
				userChoice,
				totalVotes = 0;
				for (c in doc.choices) {
					var choice = doc.choices[c];
					for (v in choice.votes) {
						var vote = choice.votes[v];
						totalVotes++;
						if (vote.ip == (req.header('x-forwarded-for') || req.ip)) {
							userVoted = true;
							userChoice = {
								_id: choice._id,
								text: choice.text
							};
						}
					}
				}
				poll.userVoted = userVoted;
				poll.userChoice = userChoice;
				poll.totalVotes = totalVotes;
				res.json(doc);
			} else {
				res.json({
					error: true
				});
			}
		});
	});
	
	// create new poll
	app.post('/polls', function(req,res) {
		var reqBody = req.body,
		choices = reqBody.choices.filter(function(v) {
			return v.text != '';
		}),
		pollObj = {
			question: reqBody.question,
			choices: choices
		};
		var poll = new Poll(pollObj);
		poll.save(function(err,doc) {
			if (err || !doc)
				throw err;
			else
				res.json(doc);
		});
	});
}
