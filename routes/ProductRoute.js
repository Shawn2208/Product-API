const express = require('express');
const router = express.Router();
const productController = require('../controllers/ProductController');

// GET all products
router.get('/products', productController.getAllProducts);

// GET a single product by ID
router.get('/products/:id', productController.getProductById);

// CREATE a new product
router.post('/products', productController.createProduct);

// UPDATE a product by ID
router.put('/products/:id', productController.updateProduct);

// DELETE a product by ID
router.delete('/products/:id', productController.deleteProduct);

module.exports = router;