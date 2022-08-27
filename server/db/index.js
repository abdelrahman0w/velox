const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
    path: path.join(__dirname, '../config/.env')
});

// const mongo = mongoose.connect(
//     process.env.DB
// );

// module.exports = mongo;
