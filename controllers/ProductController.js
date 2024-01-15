const Product = require('../models/ProductModel');

module.exports = {
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error!' });
    }
  },

  getProductById: async (req, res) => {
    const productId = req.params.id;

    try {
      const product = await Product.findById(productId);
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }

      res.json(product);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error!' });
    }
  },

  createProduct: async (req, res) => {
    const { name, description, price, inStock, imageUrl } = req.body;

    try {
      const newProduct = new Product({
        name,
        description,
        price,
        inStock,
        imageUrl,
      });

      const savedProduct = await newProduct.save();
      res.json(savedProduct);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error!' });
    }
  },

  updateProduct: async (req, res) => {
    const productId = req.params.id;
    const { name, description, price, inStock, imageUrl } = req.body;

    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        productId,
        { name, description, price, inStock, imageUrl },
        { new: true }
      );

      if (!updatedProduct) {
        return res.status(404).json({ error: 'Product not found' });
      }

      res.json(updatedProduct);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error!' });
    }
  },

  deleteProduct: async (req, res) => {
    const productId = req.params.id;

    try {
      const deletedProduct = await Product.findByIdAndRemove(productId);

      if (!deletedProduct) {
        return res.status(404).json({ error: 'Product not found' });
      }

      res.json({ message: 'Product deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error!' });
    }
  },
};
