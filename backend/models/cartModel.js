const mongoose = require('mongoose');


    const cartItemSchema = new mongoose.Schema({
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          default: 1,
        },
        price: {
          type: Number,
          required: true,
        },
      }, { _id: false });
      
      const cartSchema = new mongoose.Schema({
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
          required: true,
        },
        items: [cartItemSchema],
        total: {
          type: Number,
          required: true,
          default: 0,
        },
      }, { timestamps: true });
      
    
    const Cart = mongoose.model('Cart', cartSchema);
    
    module.exports = Cart;
    