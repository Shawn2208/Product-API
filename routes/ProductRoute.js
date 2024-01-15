// Import the Express library
const express = require('express');
// Create an Express router
const router = express.Router();
// Import the product controller module
const productController = require('../controllers/ProductController');

// Define routes for product operations

// Route: GET all products
router.get('/products', productController.getAllProducts);

// Route: GET a single product by ID
router.get('/products/:id', productController.getProductById);

// Route: CREATE a new product
router.post('/products', productController.createProduct);

// Route: UPDATE a product by ID
router.put('/products/:id', productController.updateProduct);

// Route: DELETE a product by ID
router.delete('/products/:id', productController.deleteProduct);

// Export the router for use in other parts of the application
module.exports = router;
