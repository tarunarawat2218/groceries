const express = require("express");

const app = express();
app.use(express.json());

const products = require('./routes/productRoute');
const users = require('./routes/userRoute');
const cart = require('./routes/cartRoute')
app.use('/api/v1', products);
app.use('/api/v1', users);
app.use('/api/v1', cart);

module.exports = app; 