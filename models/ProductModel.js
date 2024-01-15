// Import the Mongoose library
const mongoose = require('mongoose');

// Define a Mongoose schema for the 'Product' model
const productSchema = new mongoose.Schema({
    // Fields for the product
    name: String,           // Product name (string)
    description: String,    // Product description (string)
    price: Number,          // Product price (number)
    inStock: Boolean,       // Product availability (boolean)
    imageUrl: String,       // Product image URL (string)
});

// Create a Mongoose model named 'Product' based on the defined schema
const Product = mongoose.model('Product', productSchema);

// Export the 'Product' model for use in other parts of the application
module.exports = Product;
