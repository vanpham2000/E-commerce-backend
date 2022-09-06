require("dotenv").config();
const mongoose = require("mongoose");



MONGO_URI = "mongodb+srv://ADmin:admin@testdb.hox0s.mongodb.net/test";

const connectDB = async() =>{

    try {
        await  mongoose.connect(MONGO_URI,{

            useNewUrlParser: true,
            useUnifiedTopology: true
        });
console.log('DB connected')
        } catch (error){
            console.error('DB failed')
        }
    
}
module.exports = connectDB;