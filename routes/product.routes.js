const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');

router.get('/', productController.product_list);

router.post('/', productController.filterPostProduct ,productController.postProduct);

module.exports = router;