const express = require('express');
const router = express.Router();
const crypto = require('crypto-js');
const { verifyToken, Authorization, authAdmin } = require('../middleware/auth');
const User = require('../models/User')

// Edit
router.put('/users/:id', Authorization, (req, res) => {
    res.contentType('application/json');

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
                username: user.username
            });
        }
    ).catch(
        (err) => {
            res.json(err);
        }
    );
});

// Delete
router.delete('/users/:id', Authorization, (req, res) => {
    res.contentType('application/json');

    User.findByIdAndDelete(req.params.id).then(
        res.json(
            {
                message: 'User deleted successfully!'
            }
        )
    ).catch(
        (err) => {
            res.json(err);
        }
    );
})

// Get
router.get('/users/', authAdmin, (req, res) => {
    res.contentType('application/json');
    User.find().then(
        (users) => {
            res.json(users);
        }
    ).catch(
        (err) => {
            res.json(err);
        }
    );
}).get('/users/:id', authAdmin, (req, res) => {
    res.contentType('application/json');

    User.findById(req.params.id).then(
        (user) => {
            res.json(
                {
                    username: user.username
                }
            );
        }
    ).catch(
        (err) => {
            res.json(err);
        }
    );
})

module.exports = router;
