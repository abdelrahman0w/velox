const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(
    process.env.MONGO_URI,
    {
        useNewUrlParser: true,
    }
).then(() => {
    console.log('\u001b[34m' + 'DB CONNECTED!' + '\u001b[0m')
}).catch(
    err => {
        console.log('\u001b[31m' + 'CONNECTION FAILED!' + '\u001b[0m')
        console.log(err);
    }
);
