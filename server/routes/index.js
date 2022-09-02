const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
    res.contentType('application/json');
    res.json(
        {
            title: "VELOX API",
            message: "Welcome to The Server!"
        }
    )
});

module.exports = router;
