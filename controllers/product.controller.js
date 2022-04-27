const productService = require('../services/product.service');

// middleware
const filterPostProduct = async(req, res, next) => {
    const {name} = req.body;
    if (name == null) res.status(400).send('Name cannot be null');
    else next();
}


const getProductList = async(req, res, next) => {
    try{
        const result = await productService.getProductList();
        res.status(200).send(result);
    } catch(e) {
        console.log(e.message);
        res.sendStatus(500) && next(e)
    }
}

const postProduct = async(req, res, next) => {
    const {name} = req.body;
    try{
        await productService.createProduct(name);
        res.sendStatus(201);
    } catch(e) {
        console.log(e.message);
        res.sendStatus(500) && next(e);
    }
}

const putProduct = async(req, res, next) => {
    const payload = req.body
    const { id } = req.params;
    try{
        await productService.updateProduct(id, payload);
        res.sendStatus(200);
    } catch(e) {
        console.log(e.message);
        res.sendStatus(500) && next(e);
    }
}

const getProduct = async(req, res, next) => {
    const { id } = req.params;
    try{
        const result = await productService.getProduct(id);
        res.status(200).send(result);
    } catch(e) {
        console.log(e.message);
        res.sendStatus(500) && next(e);
    }
}

module.exports = {
    getProductList,
    getProduct,
    postProduct,
    putProduct,
    filterPostProduct,
}