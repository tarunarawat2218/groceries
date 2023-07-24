const CartService = require("../service/cartService")

const { success, internalServerError} = require('../response/apiResponse');

const ApiResponseMessages = require("../response/apiResponseMessages");

exports.addToCart = async(req,res) =>{    
    try{
        const {userId, productId, quantity} = req.body;

        
     const cart = await CartService.addToCart(userId, productId, quantity)
    await cart.save();
    success(res,cart,ApiResponseMessages.PRODUCT_ADDED_TO_CART)
}catch{
    internalServerError(res,ApiResponseMessages.INTERNAL_SERVER_ERROR)
}
}
//REMOVE FROM CART
exports.removeFromCart = async(req, res) =>{
    try{
        const {userId, productId} = req.body;
       
        const cart = await CartService.removedFromCart(userId, productId)

    
    await cart.save();

    return cart;
  } catch {
    internalServerError(res,ApiResponseMessages.INTERNAL_SERVER_ERROR)
    
  }
}

//UPDATE CART ITEMS F
