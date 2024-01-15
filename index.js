const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/ProductRoute');
require('dotenv').config();


const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URL);


app.use(express.json());

// use ProductRoute
app.use('/', productRoutes);

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
})
