var mongoose = require('mongoose');

var voteSchema = new mongoose.Schema({
	ip: 'String'
});

var choiceSchema = new mongoose.Schema({
	text: String,
	votes: [voteSchema]
});

/*
exports.pollSchema = new mongoose.Schema({
	question: {
		type: String, required: true
	},
	choices: [choiceSchema]
});
*/

// try this first, if no work then use above
module.exports = mongoose.model('Poll', {
	question: {
		type: String, required: true
	},
	choices: [choiceSchema]
});
