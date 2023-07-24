const express = require('express');
const { addToCart, removeFromCart} = require('../controllers/cartController');


const router =  express.Router()

router.route('/cart').post(addToCart);
router.route('/cart').post(removeFromCart);
module.exports = router;