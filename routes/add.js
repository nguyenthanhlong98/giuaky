var express = require('express');
var router = express.Router();

/* GET home page. */
// router.post('/', function(req, res) {
//   res.render('add', { title: 'Express' });
// });

router.get('/', function(req, res) {
  res.render('add', { title: 'Express' });
});

module.exports = router;
