require('dotenv').config();

const express = require("express");
const app = express();
const connectDB = require("./config/db");
const productRoutes = require('./routes/productRoutes');


connectDB();


// use express json because we need json data onto our react client 
app.use(express.json());

// our route

app.use('/api/product',productRoutes)






const PORT = process.env.PORT || 5000;
app.listen(PORT, () => 
    console.log(`Example app listening on port ${PORT}`)
  );