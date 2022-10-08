const express = require("express");
const { getProducts, deleteProduct, editProduct, addProduct, getOneProduct, addQuantity } = require("../controllers/product");
//const isAdmin = require("../middleware/isAdmin");
//const isAgent = require("../middleware/isAgent");
//const isAuth = require("../middleware/isAuth");

const router=express.Router(); 
router.get('/allProducts',getProducts);
router.delete('/:_id', deleteProduct)
router.put('/editProduct/:_id', editProduct)
router.post('/addProduct', addProduct)
router.get('/:_id',getOneProduct);
router.put("/:_id", addQuantity)


module.exports = router;