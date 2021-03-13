var express = require('express');
var router = express.Router();
const nationMap = require('./variable');

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("nations: ", nationMap);
  res.render('index', { nations: nationMap });
});

module.exports = router;
