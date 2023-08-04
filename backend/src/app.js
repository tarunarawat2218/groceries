const express = require("express");
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const products = require('./routes/productRoute');
const users = require('./routes/userRoute');
const cart = require('./routes/cartRoute')
app.use('/api/v1', products);
app.use('/api/v1/auth', users);
app.use('/api/v1', cart);

const swaggerDocument = YAML.load('./swagger.yaml'); // Replace with your Swagger specification file
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app; 