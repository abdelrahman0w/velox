const express = require('express');
const router = express.Router();
const crypto = require('crypto-js');
const { Authorization } = require('../middleware/auth');
const User = require('../models/User')

router.put('/users/:id', Authorization, (req, res) => {
    if (req.body.password) {
        req.body.password = crypto.AES.encrypt(
            req.body.password,
            process.env.PASSPHRASE
        );
    }

    User.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
    ).then(
        (user) => {
            res.json({
                message: 'User updated successfully!',
                username: user.username,
                email: user.email
            });
        }
    ).catch(
        (err) => {
            res.json(err);
        }
    );
});

module.exports = router;
