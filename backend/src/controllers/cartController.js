const CartService = require("../service/cartService")
const UserService = require("../service/userService")
const ProductService = require("../service/productService")
const ApiResponse = require('../response/apiResponse');
const ApiResponseMessages = require("../response/apiResponseMessages");

exports.addToCart = async (req, res) => {
    try {
        const {authorization} = req.headers;
        const userId = UserService.getUserIdFromToken(authorization)
        const {productId, quantity} = req.body;

        const product = await ProductService.findProductByUserId(productId);
        if (!product) {
            return ApiResponse.notFound(res, product, ApiResponseMessages.PRODUCT_NOT_FOUND)
        }
        const cart = await CartService.addToCart(userId, product, quantity, productId);
        ApiResponse.success(res, cart, ApiResponseMessages.PRODUCT_ADDED_TO_CART)
    } catch (e) {
        ApiResponse.internalServerError(res, ApiResponseMessages.INTERNAL_SERVER_ERROR)
    }
}

exports.removeFromCart = async (req, res) => {
    try {
        const {productId} = req.body;
        const {authorization} = req.headers;
        const userId = UserService.getUserIdFromToken(authorization)
        const cart = await CartService.findCartByUserId(userId);
        if (!cart) {
            ApiResponse.notFound(res, cart, ApiResponseMessages.PRODUCT_NOT_FOUND)
        }
        ApiResponse.success(res, {productId}, ApiResponseMessages.PRODUCT_ADDED_TO_CART)
        return cart;
    } catch {
        ApiResponse.internalServerError(res, ApiResponseMessages.INTERNAL_SERVER_ERROR)

    }
}

exports.getCartItems = async (req, res) => {
    try {
        const {authorization} = req.headers;
        const userId = UserService.getUserIdFromToken(authorization)

        const cart = await CartService.findCartByUserId(userId);
        if (!cart) {
            ApiResponse.success(res, cart, ApiResponseMessages.CART_NOT_FOUND)
        } else
            ApiResponse.success(res, [], ApiResponseMessages.CART_NOT_FOUND)
    } catch (error) {
        ApiResponse.internalServerError(res, ApiResponseMessages.INTERNAL_SERVER_ERROR)
    }
};
// exports.getCartItems = async (req, res) => {
//     try {
//         const {authorization} = req.headers;
//         const userId = UserService.getUserIdFromToken(authorization)
//         const productId = req.params.productId;
//         const newQuantity = req.body.quantity;
//
//         const cart = await CartService.findCartByUserId(userId);
//         if (!cart) {
//             ApiResponse.notFound(res, ApiResponseMessages.PRODUCT_NOT_FOUND)
//         }
//         // Assuming the client sends the new quantity in the request body
//
//         const updatedCart = await CartService.updateCartItemQuantity(userId, productId, newQuantity);
//         if (!updatedCart) {
//             ApiResponse.notFound(res, cart, ApiResponseMessages.PRODUCT_NOT_FOUND)
//         }
//
//         res.json(updatedCart);
//     } catch (error) {
//         ApiResponse.internalServerError(res, ApiResponseMessages.INTERNAL_SERVER_ERROR)
//     }
//
// };
//total price of carts
exports.getCartTotalPrice = async (req, res) => {
    try {
        // Assuming you have the user ID available in req.user, obtained from authentication middleware
        const {authorization} = req.headers;
        const userId = UserService.getUserIdFromToken(authorization)
        const cart = await CartService.findCartByUserId(userId);
        if (!cart) {
            return null; // Cart not found for the user
        }

        const totalPrice = await CartService.getCartTotalPrice(userId);
        if (totalPrice === null) {
            ApiResponse.notFound(res, cart, ApiResponseMessages.CART_NOT_FOUND);
        }

        res.json({total: totalPrice});
    } catch (error) {
        ApiResponse.internalServerError(res, ApiResponseMessages.INTERNAL_SERVER_ERROR, error)
    }
};


//Clear the Cart
exports.clearCart = async (req, res) => {
    try {
        // Assuming you have the user ID available in req.user, obtained from authentication middleware
        const {authorization} = req.headers;
        const userId = UserService.getUserIdFromToken(authorization)
        const cart = await CartService.findCartByUserId(userId);
        if (!cart) {
            return null; // Cart not found for the user
        }

        const clearedCart = await CartService.clearUserCart(userId);
        if (!clearedCart) {
            ApiResponse.notFound(res, cart, ApiResponseMessages.CART_NOT_FOUND);
        }

        res.json({message: 'Cart cleared successfully'});
    } catch (error) {
        ApiResponse.internalServerError(res, ApiResponseMessages.INTERNAL_SERVER_ERROR)

    }
};
