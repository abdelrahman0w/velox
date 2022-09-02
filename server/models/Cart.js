const mongoose = require('mongoose');

const cartSchema = mongoose.Schema(
    {
        uid: {
            type: String,
            required: true,
            unique: true
        },
        products: [
            {
                productID: {
                    type: String
                },
                qty: {
                    type: Number,
                    default: 1
                }
            }
        ]
    },
    { timestamps: true }
);

module.exports = mongoose.model('Cart', cartSchema);
