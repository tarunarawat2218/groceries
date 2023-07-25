const Product = require('../models/productModel')

exports.findProductByUserId = async (productId) => {
    const product = await Product.findById(productId);
    return product
}
exports.addToProduct = async (name,
                              category,
                              price,
                              description,
                              imageUrl,) => {
    const newProduct = new Product({
        name,
        category,
        price,
        description,
        imageUrl,
    });

    // Save the product to the database
    return await newProduct.save()
}


exports.getAllProducts = async () => {
    return Product.find();
};
exports.getAllProductsByName = async (name) => {
    return Product.find({name: name});
};
exports.deleteProductsById = async (id) => {
    return Product.findByIdAndDelete(id);
};