const Product = require('../models/Product');

const getProductList = async() => {
    try{
        return Product.getProductList();
    } catch(e) {
        throw new Error(e.message);
    }
}

const createProduct = async(name) => {
    try{
        return Product.createProduct(name);
    } catch(e) {
        throw new Error(e.message);
    }
}

module.exports = {
    getProductList,
    createProduct
}