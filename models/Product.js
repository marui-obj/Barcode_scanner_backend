const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const ProductSchema = Schema({
    name: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['received', 'dispatched', 'not recieved'],
        default: 'not recieved'
    },
    location: {
        type: String,
        default: null
    },
    received_date: {
        type: Date,
        required: true,
        default: Date.now
    },
    dispatched_date: {
        type: Date,
        default: null
    }
    
});

const Product = mongoose.model('Product', ProductSchema);

const createProduct = async(name) => {
    const newProduct = new Product({
        name: name
    });
    return await Product.create(newProduct);
}

const getProductList = async() => {
    return await Product.find({});
}

const updateProduct = async(object_id, payload) => {
    return await Product.findByIdAndUpdate(object_id, { $set: payload });
}

const getProduct = async(object_id) => {
    return await Product.findById(object_id);
}

module.exports = {
    getProductList,
    createProduct,
    updateProduct,
    getProduct
}