const express = require('express');
const router = express.Router();
const Product = require('../models/Product')

router.get('/products', function (req, res, next) {
    res.contentType('application/json');
    Product.find().then((products) => {
        res.json(products);
    }).catch((err) => {
        res.json(err);
    }
    );
});

module.exports = router;
