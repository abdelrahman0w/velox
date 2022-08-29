const mongoose = require('mongoose');

const schema = mongoose.Schema(
    {
    },
    { timestamps: true }
);

module.exports = mongoose.model('Product', schema);
