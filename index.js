// Import required libraries and modules
const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/ProductRoute');
const cors = require('cors');
require('dotenv').config(); // Load environment variables from .env file

// Create an instance of Express
const app = express();
const port = process.env.PORT || 3000; // Set the port for the server to run on

// Enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Connect to MongoDB using the provided URL from environment variables
mongoose.connect(process.env.MONGO_URL);

// Parse incoming JSON requests
app.use(express.json());

// Use the product routes defined in ProductRoute.js
app.use('/', productRoutes);

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
