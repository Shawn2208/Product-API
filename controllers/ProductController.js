// Import the Product model to interact with the database
const Product = require('../models/ProductModel');

// Export a set of functions to handle CRUD operations for products
module.exports = {
  // Get all products
  getAllProducts: async (req, res) => {
    try {
      // Retrieve all products from the database
      const products = await Product.find();
      // Send the products as a JSON response
      res.json(products);
    } catch (error) {
      // Handle errors by sending a 500 Internal Server Error response
      res.status(500).json({ error: 'Internal Server Error!' });
    }
  },

  // Get a product by its ID
  getProductById: async (req, res) => {
    // Extract the product ID from the request parameters
    const productId = req.params.id;

    try {
      // Find the product in the database by its ID
      const product = await Product.findById(productId);
      // If the product doesn't exist, send a 404 Not Found response
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
      // Send the product as a JSON response
      res.json(product);
    } catch (error) {
      // Handle errors by sending a 500 Internal Server Error response
      res.status(500).json({ error: 'Internal Server Error!' });
    }
  },

  // Create a new product
  createProduct: async (req, res) => {
    // Extract product details from the request body
    const { name, description, price, inStock, imageUrl } = req.body;

    try {
      // Create a new Product instance with the provided details
      const newProduct = new Product({
        name,
        description,
        price,
        inStock,
        imageUrl,
      });

      // Save the new product to the database
      const savedProduct = await newProduct.save();
      // Send the saved product as a JSON response
      res.json(savedProduct);
    } catch (error) {
      // Handle errors by sending a 500 Internal Server Error response
      res.status(500).json({ error: 'Internal Server Error!' });
    }
  },

  // Update a product by its ID
  updateProduct: async (req, res) => {
    // Extract the product ID and updated details from the request parameters and body
    const productId = req.params.id;
    const { name, description, price, inStock, imageUrl } = req.body;

    try {
      // Find and update the product in the database by its ID
      const updatedProduct = await Product.findByIdAndUpdate(
        productId,
        { name, description, price, inStock, imageUrl },
        { new: true } // Return the updated product
      );

      // If the product doesn't exist, send a 404 Not Found response
      if (!updatedProduct) {
        return res.status(404).json({ error: 'Product not found' });
      }

      // Send the updated product as a JSON response
      res.json(updatedProduct);
    } catch (error) {
      // Handle errors by sending a 500 Internal Server Error response
      res.status(500).json({ error: 'Internal Server Error!' });
    }
  },

  // Delete a product by its ID
  deleteProduct: async (req, res) => {
    // Extract the product ID from the request parameters
    const productId = req.params.id;

    try {
      // Find and remove the product from the database by its ID
      const deletedProduct = await Product.findByIdAndRemove(productId);

      // If the product doesn't exist, send a 404 Not Found response
      if (!deletedProduct) {
        return res.status(404).json({ error: 'Product not found' });
      }

      // Send a success message as a JSON response
      res.json({ message: 'Product deleted successfully' });
    } catch (error) {
      // Handle errors by sending a 500 Internal Server Error response
      res.status(500).json({ error: 'Internal Server Error!' });
    }
  },
};
