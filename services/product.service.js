const Product = require('../models/Product');

const getProductList = async() => {
    try{
        return await Product.getProductList();
    } catch(e) {
        throw new Error(e.message);
    }
}

const createProduct = async(name) => {
    try{
        return await Product.createProduct(name);
    } catch(e) {
        throw new Error(e.message);
    }
}

const updateProduct = async(object_id, payload) => {
    try{
        return await Product.updateProduct(object_id, payload);
    } catch(e) {
        throw new Error(e.message);
    }
}

const getProduct = async(object_id) => {
    try{
        return await Product.getProduct(object_id);
    } catch(e) {
        throw new Error(e.message);
    }
}

const isIdValidate = async(id) => {
    try{
        return await Product.isIdValidate(id);
    } catch(e) {
        throw new Error(e.message);
    }
}

module.exports = {
    getProductList,
    createProduct,
    updateProduct,
    getProduct,
    isIdValidate
}