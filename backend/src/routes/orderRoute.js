const express = require('express');
const router = express.Router();
const {createOrder, getAllOrders, getOrderById, updateOrderStatus } = require('../controllers/orderController');
const {checkAuthorizationHeaders} = require('../middlewares/checkAuthorizationHeaders');


router.post('/order',checkAuthorizationHeaders, createOrder);


router.get('/order', getAllOrders);


router.get('/id', getOrderById);


router.put('/status',updateOrderStatus);

module.exports = router;
