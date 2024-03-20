const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const cartCollection = "carts";

const cartSchema = new mongoose.Schema({
    cartId: {
        type: Number,
        required: true,
    },
    productId: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        default: 1,
    },
});

module.exports = mongoose.model(cartCollection, cartSchema);
