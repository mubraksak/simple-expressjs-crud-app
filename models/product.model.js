// importing mongoDB
const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');

//this create a datase table in mongodb 
const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'product name is required']
        },
        quantity: {
            type: Number,
            required: true,
            default: 0
        },
        price: {
            type: Number,
            required: true,
            default: 0
        },
        Image: {
            type: String,
            required: false
        },

    },
    // this insert and update the time a product was created
    {
        timestamps: true
    }

);

//this statement create a table in the database.
const Product = mongoose.model("Product", ProductSchema);

//this exports product model to the databse
module.exports = Product;