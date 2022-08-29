const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
    path: path.join(__dirname, '../config/.env')
});

mongoose.connect(
    process.env.MONGO_URI, {
    useNewUrlParser: true,
})
    .then(() => {
        console.log('\u001b[' + 34 + 'm' + 'DB CONNECTED!' + '\u001b[0m')
})
    .catch(err => { console.log(err); });

// module.exports = mongo;
