const CartService = require("../service/cartService");
const UserService = require("../service/userService");
const ProductService = require("../service/productService");
const ApiResponse = require('../response/apiResponse');
const ApiResponseMessages = require("../response/apiResponseMessages");

exports.updateCart = async (req, res) => {
    try {
        const { authorization } = req.headers;
        const userId = UserService.getUserIdFromToken(authorization);
        const { productId, quantity } = req.body;

        const product = await ProductService.findProductById(productId);
        if (!product) {
            return ApiResponse.notFound(res, ApiResponseMessages.PRODUCT_NOT_FOUND);
        }

        if (quantity === 0) {
            const cart = await CartService.removeFromCart(productId, userId);
            return ApiResponse.success(res, cart, ApiResponseMessages.PRODUCT_REMOVED_FROM_CART);
        }

        const cart = await CartService.addToCart(userId, product, quantity, productId);
        ApiResponse.success(res, cart, ApiResponseMessages.PRODUCT_ADDED_TO_CART);
    } catch (e) {
        console.error(e);
        ApiResponse.internalServerError(res, ApiResponseMessages.INTERNAL_SERVER_ERROR, e);
    }
};

exports.removeFromCart = async (req, res) => {
    try {
        const { productId } = req.body;
        const { authorization } = req.headers;
        const userId = UserService.getUserIdFromToken(authorization);
        const cart = await CartService.removeFromCart(productId, userId);
        ApiResponse.success(res, cart, ApiResponseMessages.PRODUCT_REMOVED_FROM_CART);
    } catch (e) {
        console.log(e);
        ApiResponse.internalServerError(res, ApiResponseMessages.INTERNAL_SERVER_ERROR);
    }
};

exports.getCartItems = async (req, res) => {
    try {
        const { authorization } = req.headers;
        const userId = UserService.getUserIdFromToken(authorization);

        const cart = await CartService.findCartByUserId(userId);
        if (!cart) {
            ApiResponse.success(res, [], ApiResponseMessages.CART_NOT_FOUND);
        } else {
            ApiResponse.success(res, cart, ApiResponseMessages.CART_FETCH_SUCCESSFULLY);
        }
    } catch (error) {
        ApiResponse.internalServerError(res, ApiResponseMessages.INTERNAL_SERVER_ERROR);
    }
};
2