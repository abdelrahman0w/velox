const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  res.set('Content-Type', 'text/plain');
  res.send('The Server is Running!');
});

module.exports = router;
