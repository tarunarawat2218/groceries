const OrderService = require("../service/orderService");
const CartService = require("../service/cartService");
const UserService = require('../service/userService')
const ApiResponse = require('../response/apiResponse');
const ApiResponseMessages = require("../response/apiResponseMessages");

exports.createOrder = async (req, res) => {
    try {
      const { authorization } = req.headers;
      const userId =  UserService.getUserIdFromToken(authorization);
      const { items, total } = req.body;
      console.log(items);
      console.log(total);
      const order = await OrderService.createOrder(userId, items, total);
     await  CartService.clearUserCart(userId)
      ApiResponse.success(res, order, ApiResponseMessages.ORDER_CREATED_SUCCESSFULLY);
    } catch (error) {
      console.error(error);
      ApiResponse.internalServerError(res, ApiResponseMessages.INTERNAL_SERVER_ERROR, error);
    }
  };

exports.getOrderById = async (req, res) => {
    try {
        const { orderId } = req.params;
        const order = await OrderService.getOrderById(orderId);
        if (!order) {
            ApiResponse.notFound(res, ApiResponseMessages.ORDER_NOT_FOUND);
        } else {
            ApiResponse.success(res, order, ApiResponseMessages.ORDER_FETCH_SUCCESSFULLY);
        }
    } catch (error) {
        console.error(error);
        ApiResponse.internalServerError(res, ApiResponseMessages.INTERNAL_SERVER_ERROR, error);
    }
};

exports.getAllOrders = async (req, res) => {
    try {
        const orders = await OrderService.getAllOrders();
        ApiResponse.success(res, orders, ApiResponseMessages.ALL_ORDERS_FETCH_SUCCESSFULLY);
    } catch (error) {
        console.error(error);
        ApiResponse.internalServerError(res, ApiResponseMessages.INTERNAL_SERVER_ERROR, error);
    }
};

exports.updateOrderStatus = async (req, res) => {
    try {
        const { orderId } = req.params;
        const { status } = req.body;

        const order = await OrderService.updateOrderStatus(orderId, status);
        ApiResponse.success(res, order, ApiResponseMessages.ORDER_STATUS_UPDATED);
    } catch (error) {
        console.error(error);
        ApiResponse.internalServerError(res, ApiResponseMessages.INTERNAL_SERVER_ERROR, error);
    }
};
