const express = require("express");

const app = express();
app.use(express.json());

const products = require('./routes/productRoute');
const users = require('./routes/userRoute')
app.use('/api/v1', products)
app.use('/api/v1', users)

module.exports = app;