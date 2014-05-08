module.exports = function(app) {
	
	// send all routes to angular front end
	app.get('*', function(req,res) {
		res.sendfile('./public/index.html');
		//res.render('index', { title: 'Polls' });
	});
}
