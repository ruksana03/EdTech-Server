const { Schema, default: mongoose } = require("mongoose");

const CartSchema = new Schema({
    menuId: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
},{versionKey: false})

const Cart = mongoose.model("Cart", CartSchema);

module.exports = Cart;