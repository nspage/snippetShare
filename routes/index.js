var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SnippetShare' });
});

/* GET account page. */
router.get('/account', function(req, res, next) {
  res.render('account', { title: 'Your snippetShare account' });
});


module.exports = router;
