const mongoose = require('mongoose');

const orderSchema = mongoose.Schema(
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
        ],
        amount: {
            type: Number,
            required: true
        },
        status: {
            type: String,
            default: "Pending"
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Order', orderSchema);
