var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('kotlin-team', { title: 'Android Heroes' });
});

router.get('/kotlin-team', (req, res) => {
  res.render('kotlin-team', { title: 'Kotlin Team' });
});

router.get('/jetpack', (req, res) => {
  res.render('jetpack', { title: 'Jetpack Compose' });
});

router.get('/firebase', (req, res) => {
  res.render('firebase', { title: 'Firebase Team' });
});

router.get('/android-studio', (req, res) => {
  res.render('android-studio', { title: 'Android Studio Team' });
});

module.exports = router;
