const express = require('express');
const {updateCart, removeFromCart, getCartItems} = require('../controllers/cartController');
const {checkAuthorizationHeaders} = require('../middlewares/checkAuthorizationHeaders');


const router = express.Router()
router.get('/cart', checkAuthorizationHeaders, getCartItems);
router.post('/cart', checkAuthorizationHeaders, updateCart);
router.delete('/cart', checkAuthorizationHeaders, removeFromCart);




module.exports = router;