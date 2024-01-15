const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/ProductRoute');
const cors = require('cors');
require('dotenv').config();


const app = express();
const port = process.env.PORT || 3000;

app.use(cors()); // Enable CORS for all routes

mongoose.connect(process.env.MONGO_URL);


app.use(express.json());

// use ProductRoute
app.use('/', productRoutes);

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
})
