const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
name:{
type: String,
required: true

},
imageUrl:{

    type:String,
    required: true
},

description:{
type:{
    type: String,
    required: true

},

price:{
type:Number,
required: true


},

countInStock:{

    type:Number,
    required: true
},





size:{

    type:Array,
    default: [],
    required: true
}

}
})

const Product = mongoose.model('product', ProductSchema);
module.exports = Product;