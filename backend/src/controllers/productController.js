// const Product = require("../models/productModel");
const ProductService = require("../service/productService");
const ApiResponse = require('../response/apiResponse');
const ApiResponseMessages = require("../response/apiResponseMessages");

exports.createProduct = async (req, res) => {
    try {
        // Extract the product details from the request body
        const {name, category, price, description, imageUrl} = req.body;

        const savedProduct = await ProductService.addToProduct(
            name,
            category,
            price,
            description,
            imageUrl,
        );
        ApiResponse.created(
            res,
            {product: savedProduct},
            ApiResponseMessages.PRODUCT_ADDED_SUCCESSFULLY
        );
    } catch (error) {
        ApiResponse.internalServerError(res, ApiResponseMessages.INTERNAL_SERVER_ERROR);
    }
};


exports.getAllProducts = async (req, res) => {
    const products = await ProductService.getAllProducts();
    ApiResponse.success(res, products, ApiResponseMessages.PRODUCT_ADDED_SUCCESSFULLY);
};
exports.searchAllProducts = async (req, res) => {
    const {name} = req.params;
    const products = await ProductService.getAllProductsByName(name);
    ApiResponse.success(res, products, ApiResponseMessages.PRODUCT_ADDED_SUCCESSFULLY);
};

//DELETE PRODUCTS
exports.deleteProduct = async (req, res) => {
    try {
        const {id} = req.body;
        const deletedProduct = await ProductService.deleteProductsById(id);
        if (!deletedProduct) {
            ApiResponse.notFound(res, deletedProduct, ApiResponseMessages.PRODUCT_NOT_FOUND);
        } else
            ApiResponse.success(
                res,
                deletedProduct,
                ApiResponseMessages.PRODUCT_REMOVED_FROM_CART
            );
    } catch (error) {
        console.log(error)
        ApiResponse.internalServerError(
            res,
            ApiResponseMessages.PRODUCT_NOT_FROM_CART, error
        );
    }
};
