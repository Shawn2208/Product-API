https://productapi-mqf6.onrender.com/products


# Product API

This is a simple RESTful API for managing products. It allows you to perform CRUD (Create, Read, Update, Delete) operations on products.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Features

- Create a new product
- Retrieve all products
- Retrieve a single product by ID
- Update a product by ID
- Delete a product by ID

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB installed locally or a MongoDB Atlas account

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Shawn2208/Product-API.git


2. Change into the project directory:


  cd product-api
  
3. Install dependencies:


npm install

# Environment Variables
Create a .env file in the root directory and add the following variables:

4. Replace the placeholder values with your MongoDB connection details.

PORT=3000
MONGO_URL=mongodb+srv://your-username:your-password@your-cluster.mongodb.net/your-database

5. Start the server:

npm start

Your API will be accessible at http://localhost:3000 (or the port specified in your .env file).

# API Endpoints

GET /products: Retrieve all products.

GET /products/:id: Retrieve a single product by ID.

POST /products: Create a new product.

PUT /products/:id: Update a product by ID.

DELETE /products/:id: Delete a product by ID.

License

This project is licensed under the MIT License.

You can customize based on your specific project details. Make sure to replace placeholders with your actual information.

