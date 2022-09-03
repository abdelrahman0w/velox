const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
            if (err) {
                res.status(403).json('Token is not valid!');
            } else {
                req.user = user;
                next();
            }
        });
    } else {
        res.status(401).json('You are not authenticated!');
    }
}

const Authorization = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next();
        }
        else {
            res.status(401).json('You are not authorized!');
        }
    });
}

const authAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.isAdmin) {
            next();
        }
        else {
            res.status(401).json('You are not authorized!');
        }
    });
}

module.exports = { verifyToken, Authorization, authAdmin };
