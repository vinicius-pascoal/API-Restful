const mongoose = require('mongoose')

const Schema = new mongoose.Schema ({
    name: String,
    brand: Number,
    price: String
})

const model = mongoose.model('products', Schema)

module.exports = model