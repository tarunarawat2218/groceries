const express = require('express');
const {addToCart, removeFromCart, getCartItems, clearCart, getCartTotalPrice} = require('../controllers/cartController');
const {checkAuthorizationHeaders} = require('../middlewares/checkAuthorizationHeaders');


const router = express.Router()

router.post('/cart', checkAuthorizationHeaders, addToCart);
router.delete('/cart', checkAuthorizationHeaders, removeFromCart);
router.get('/cart', checkAuthorizationHeaders, getCartItems);
router.get('/cart/price', checkAuthorizationHeaders, getCartTotalPrice);
router.delete('/cart', checkAuthorizationHeaders, clearCart);



module.exports = router;