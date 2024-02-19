const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    description: {
        type: String,
    },
    title: {
        type: String,
    },
    price: {
        type: Number,
    },
    category: {
        type: String,
    }
})

module.exports = mongoose.model("Product", productSchema);