var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Inicio'});
});

router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contacto' });
});

module.exports = router;
