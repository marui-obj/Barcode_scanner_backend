const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');

router.get('/', productController.getProductList);

router.post('/', productController.filterPostProduct, productController.postProduct);

router.put('/:id', productController.putProduct);

router.get('/:id', productController.filterGetProduct, productController.getProduct);

router.post('/:amount', productController.filterPostProduct, productController.postProducts);

router.put('/location/:location', productController.putProductByLocation);

module.exports = router;