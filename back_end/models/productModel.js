const mongoose = require('mongoose')

const productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        new_price: {
            type: Number,
            required: false,
        },
        old_price: {
            type: Number,
            required: true,
        },
        popular:{
            type: Boolean,
            required:true,
        },
        new:{
            type: Boolean,
            required:true,
        }
    },
    {
        timestamps: true
    }
)


const Product = mongoose.model('Product', productSchema);

module.exports = Product;