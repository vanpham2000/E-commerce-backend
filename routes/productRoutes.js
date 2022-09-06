
// require express
const express = require('express');
const res = require('express/lib/response');

// use express as a function
const router = express.Router();

const { getAllproducts, getproductsbyID,  getproductsbysize} = require("../controller/productController");

//description GET ALL product from DB

//access will be public
router.get('/', getAllproducts);
router.get('/size',   getproductsbysize);

//route GET /api/products/:id
router.get('/:id',  getproductsbyID);

// router.get('/size',   getproductsbysize);

//route GET /api/products/sq
// router.get('/sq', getsq )

// router.get('/sq', getsq )





module.exports = router;