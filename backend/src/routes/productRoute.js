const express = require('express');
const {getAllProducts, createProduct, searchAllProducts, deleteProduct} = require('../controllers/productController');

const router = express.Router();

router.route("/products").get(getAllProducts);
router.route("/products").post(createProduct);
router.route("/products").get(searchAllProducts);
router.route("/products").delete(deleteProduct)

module.exports = router;