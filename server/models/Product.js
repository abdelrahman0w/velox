const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        qty: {
            type: Number,
            required: true
        },
        new: {
            type: Boolean,
            default: false
        },
        discount: {
            type: Number
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);
