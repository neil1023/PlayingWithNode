var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', function(req, res){ //req = request, res = response
	res.render('index', {
		title: 'WELCOME',
		text: 'Hello',
	});

});

router.get('/signup', function(req, res){
	res.render('signup', {
		title: 'SIGN UP'
	});
});

module.exports = router;
