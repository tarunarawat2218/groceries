const Cart = require('../models/cartModel')

exports.findCartByUserId = async (userId) => {
    return Cart.findOne({userId});
}
exports.addToCart = async (userId, product, quantity, productId) => {
    const totalPrice = product.price * quantity;
    const cart = await exports.findCartByUserId(userId)
    if (!cart) {
        const cart = new Cart({userId: userId, items: []})
        cart.items.push({productId, quantity, price: totalPrice});
        await cart.save();
        return cart
    } else {
        const existingItem = cart.items.find(item => item.productId.toString() === productId)
        if (!existingItem) {
            cart.items.push({productId, quantity, price: totalPrice});
        } else {
            existingItem.quantity = quantity;
            existingItem.price = totalPrice;
        }

    }
    cart.total = cart.items.reduce((total, item) => total + item.price, 0);

    await cart.save();
    return cart
}
exports.removeFromCart = async (productId, userId) => {
    const cart = await exports.findCartByUserId(userId);
    const cartIndex = cart.items.findIndex(item => item.productId.toString() === productId);
    if (cartIndex === -1) {
        return null; // Item not found in the cart, you may want to handle this case accordingly
    }
    const removedItem = cart.items.splice(cartIndex, 1)[0]; // Use [0] to access the removed item directly
    cart.total -= removedItem.price; // Subtract the price of the removed item from the total
    await cart.save();
    return cart;
};

exports.updateCartItemQuantity = async (cart, productId, newQuantity) => {
    const itemIndex = cart.items.findIndex((item) => item.productId.toString() === productId);

    if (itemIndex === -1) {
        return null; // Product not found in the cart
    }

    cart.items[itemIndex].quantity = newQuantity;
    cart.items[itemIndex].price = cart.items[itemIndex].quantity * cart.items[itemIndex].productId.price;

    // Recalculate the total price for the cart
    cart.total = cart.items.reduce((total, item) => total + item.price, 0);

    // Save the updated cart to the database
    await cart.save();

    return cart;
}
exports.clearUserCart = async (userId) => {

    const cart = await exports.findCartByUserId(userId)

    // Clear all items from the cart
    cart.items = [];
    cart.total = 0;

    // Save the updated cart to the database
    await cart.save();

    return cart;
};
exports.getCartTotalPrice = async (cart) => {

    // Calculate the total price of the cart
    const totalPrice = cart.items.reduce((total, item) => total + item.price, 0);

    return totalPrice;
};