const mongoose = require('mongoose');

const schema = mongoose.Schema({
    id: Number,
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true },
    rating: {
        type: Map,
        of: Number,
    }
});

module.exports = mongoose.model('product', schema);
