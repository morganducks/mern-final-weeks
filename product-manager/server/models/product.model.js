const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    productName: String,
    productPrice: Number,
    productDesc: String,
}, { timestamps: true });

module.exports = mongoose.model('Product', ProductSchema);

