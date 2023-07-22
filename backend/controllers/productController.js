const Product = require("../models/productModel");
const { success, created, unauthorized, notFound, internalServerError } = require("../response/apiResponse");

const ApiResponseMessages = require("../response/apiResponseMessages");

exports.createProduct = async (req, res, next) => {
  try {
    // Extract the product details from the request body
    const { name, category, price, description, imageUrl } = req.body;

    // Create a new product instance
    const newProduct = new Product({
      name,
      category,
      price,
      description,
      imageUrl,
    });

    // Save the product to the database
    const savedProduct = await newProduct.save();

    created(
      res,
      { product: savedProduct },
      ApiResponseMessages.PRODUCT_ADDED_SUCCESSFULLY̥
    );
  } catch (error) {
    // Handle any errors that occur during product creation
    res.status(500).json({
      success: false,
      error: "Failed to create product",
    });
  }
};

exports.getAllProducts = async (req, res) => {
  const products = await Product.find();
  success(res, products, ApiResponseMessages.PRODUCT_ADDED_SUCCESSFULLY̥);
};
exports.searchAllProducts = async (req, res) => {
  const { name } = req.params;
  const products = await Product.find({ name: name });
  success(res, products, ApiResponseMessages.PRODUCT_ADDED_SUCCESSFULLY̥);
};

//DELETE PRODUCTS
exports.deleteProduct= async (req, res) => {
    try {
      const { id } = req.body;
  
      const deletedProduct = await Product.findByIdAndDelete(id);
  
      if (!deletedProduct) {
        notFound(res, deletedProduct, ApiResponseMessages.PRODUCT_NOT_FOUND );
      }else
  
      success(res, deletedProduct, ApiResponseMessages.PRODUCT_REMOVED_FROM_CART);
    } catch (error) {
      internalServerError(res, deletedProduct, ApiResponseMessages.PRODUCT_NOT_FROM_CART);
    }
  };