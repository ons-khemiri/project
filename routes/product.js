const express = require("express");
const { getProducts, deleteProduct, editProduct, addProduct, getOneProduct, addQuantity } = require("../controllers/product");
const isAdmin = require("../middleware/isAdmin");
const isAgent = require("../middleware/isAgent");
const isAuth = require("../middleware/isAuth");

const router=express.Router(); 
router.get('/allProducts',getProducts);
router.delete('/:_id',isAdmin, deleteProduct)
router.put('/editProduct/:_id',isAgent, editProduct)
router.post('/addProduct',isAgent, addProduct)
router.get('/:_id',getOneProduct);
router.put("/:_id",isAuth, addQuantity)


module.exports = router;