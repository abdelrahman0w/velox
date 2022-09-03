const express = require('express');
const router = express.Router();
const crypto = require('crypto-js');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const User = require('../models/User');

dotenv.config();

// Register
router.post('/auth/register', (req, res, next) => {
    const newUser = User({
        username: req.body.username,
        password: crypto.AES.encrypt(req.body.password, process.env.PASSPHRASE)
    })

    newUser.save().then(
        res.json(
            {
                message: 'User Registered Successfully!',
                username: req.body.username
            }
        )
    ).catch(
        (err) => {
            res.json(err)
        }
    );
});

// login
router.post('/auth/login', (req, res, next) => {
    User.findOne({ username: req.body.username }).then(
        (user) => {
            if (!user) {
                res.json({
                    message: 'User not found!'
                })
            } else {
                const bytes = crypto.AES.decrypt(user.password, process.env.PASSPHRASE);
                const originalPassword = bytes.toString(crypto.enc.Utf8);

                if (originalPassword === req.body.password) {
                    const accessToken = jwt.sign(
                        {
                            id: user._id,
                            isAdmin: user.isAdmin,
                        },
                        process.env.ACCESS_TOKEN_SECRET,
                        { expiresIn: '7d' }
                    );
                    res.json({
                        message: 'User logged in successfully!',
                        username: user.username,
                        accessToken
                    })
                } else {
                    res.json({
                        message: 'Password is incorrect!'
                    })
                }
            }
        }
    ).catch(
        (err) => {
            res.json(err)
        }
    )
});

module.exports = router;
