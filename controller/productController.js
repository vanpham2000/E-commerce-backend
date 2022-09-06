// this is where we do all the fetching

const { default: mongoose } = require('mongoose');
const Product = require('../models/Product');
mongoose.startSession();
// async to the database
// create a function will access the request and response
const getAllproducts = async (req,res) =>{
try{

//use our models to get the data from the database
const products = await Product.find({});

// our frontend with make a request to the end point and recieved all of the products
res.json(products);

console.log('able to to Find the product object');

}catch(error){

console.error(error);

res.status(500).json({message: "server error"});
}
};





const getproductsbyID = async (req,res) =>{
    try{
    
    //find the product by id
    const product = await Product.findById(req.params.id);
    
    // our frontend with make a request to the end point and recieved all of the products
    res.json(product);
    
    console.log('able to Find product by ID');
    
    }catch(error){
    
    console.error(error);
    
    res.status(500).json({message: "server error"});
    }
    };

   
        
    const getproductsbysize = async (req,res) =>{
        try{
        
        //find the product by id
        const product = await Product.find({})
        
        // our frontend with make a request to the end point and recieved all of the products
        res.json(product);
        
        console.log('able to Find product by size');
        
        }catch(error){
        
        console.error(error);
        
        res.status(500).json({message: "server error"});
        }
        };
    
        
        // our frontend with make a request to the end point and recieved all of the products
   
  
module.exports = {getAllproducts, getproductsbysize, getproductsbyID};