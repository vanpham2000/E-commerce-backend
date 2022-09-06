
// we need to import the .env file in 
require("dotenv").config();

// import the Items file in data folder
const productData =  require('./data/product');

// import our connection to monogoDB
const connectDB =  require('./config/db');

// import the items in our model
const Product =  require('./models/Product');


// call the function connectDB to access database
connectDB();

// importData function delete everything in our database and insert the items
// async function because we work with the database
const importData = async() =>{
try{

await Product.collection.deleteMany({});

await Product.collection.insertMany(productData);
console.log("Data import Completed");

process.exit();

}catch(error){

console.error("Error data import");
process.exit(1);

}

};

// call the function
importData();