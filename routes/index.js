var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', function(req, res){ //req = request, res = response
	res.render('index', {
		title: 'Hi ppl, this is Neil~~',
		text: 'Swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag swag'
	});

});

module.exports = router;
