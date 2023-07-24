const Cart = require('../models/cartModel')
const{notFound} = require('../response/apiResponse.js')
const ApiResponseMessages = require('../response/apiResponseMessages.js')

exports.addToCart = async(req,res) =>{
    
        const {userId, productId, quantity} = req.body;

        const product = await product.findById(productId);
        if(!product){
           return  notFound(res,product,ApiResponseMessages.PRODUCT_NOT_FOUND )
        }
        const totalPrice = product.price * quantity;
        // Find the user's cart by user ID
         const cart = await Cart.findOne({user:userId});
         if(!cart){
           const cart = new Cart({user: userId, items:[]})
         
         // Check if the product is already in the cart
         const existingItem = cart.items.find(item => item.productId.toString() === productId)
         // If the product is already in the cart, update the quantity and total price
      existingItem.quantity += quantity;
      existingItem.price += totalPrice;
        }else{
        // If the product is not in the cart, add a new cart item
      cart.items.push({ productId, quantity, price: totalPrice });
    }
    // Update the total price of the car
    cart.total += totalPrice;


   
}
exports.removeFromCart = async(req, res) =>{
  
      const {userId, productId} = req.body;
      const cart = await Cart.findOne({user:userId});
      if(!cart){
          notFound(res, cart, ApiResponseMessages.PRODUCT_NOT_FOUND)
          
      }
      const cartIndex = cart.items.findIndex(item => item.productId.toString() === productId);
      if(cartIndex === -1){
          return null
      }
      const removedItems = cart.items.splice(cartIndex,1)[0];
      cart.total -= removedItems.price;
    }