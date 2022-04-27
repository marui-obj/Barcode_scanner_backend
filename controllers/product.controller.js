const productService = require('../services/product.service');

// middleware
const filterPostProduct = async(req, res, next) =>{
    const {name} = req.body;
    if (name == null) res.status(400).send('User cannot be null');
    else next();
}
// end middleware

const product_list = async(req, res, next) => {
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
        res.sendStatus(201)
    } catch(e) {
        console.log(e.message);
        res.sendStatus(500) && next(e);
    }
}

module.exports = {
    product_list,
    postProduct,
    filterPostProduct
}