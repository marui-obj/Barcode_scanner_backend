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

const createProducts = async(name, amount) => {
    var array_obj = [];
    try{
        for(var i=0; i<amount; i++) array_obj.push({name: name});
        return await Product.createProducts(array_obj);
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

const updateProductsByLocation = async(loc, payload) => {
    try{
        const option = payload.map((item) => {
            return{
                updateOne: {
                    filter: { _id: item.id },
                    update: { location: loc }
                }
            };
        });
        return await Product.updateBulk(option)
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
    createProducts,
    updateProduct,
    updateProductsByLocation,
    getProduct,
    isIdValidate
}