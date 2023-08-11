const Order = require('../models/orderModel');

const OrderService = {
  createOrder: async (userId, items, total) => {
    try {
      const order = await Order({
        userId,
       items,
        total,
      });
await       order.save();
      return order;
    } catch (error) {
      throw new Error('Failed to create order');
    }
  },

  getOrderById: async (orderId) => {
    try {
      const order = await Order.findById(orderId);
      return order;
    } catch (error) {
      throw new Error('Failed to get order by ID');
    }
  },

  getAllOrders: async () => {
    try {
      const orders = await Order.find();
      return orders;
    } catch (error) {
      throw new Error('Failed to get all orders');
    }
  },

  updateOrderStatus: async (orderId, status) => {
    try {
      const order = await Order.findByIdAndUpdate(orderId, { status }, { new: true });
      return order;
    } catch (error) {
      throw new Error('Failed to update order status');
    }
  },
};

module.exports = OrderService;

