const express = require("express");
const mongoose = require("mongoose");
const User = require("../models/User");
const Product = require("../models/Product");
const { getCart, EmptyCart, addCart, DeleteItemCart } = require("../controllers/cart");
//const isAuth = require("../middleware/isAuth");
const toId = mongoose.Types.ObjectId;

const router = express.Router();
router.get("/:user",getCart )
router.get("/:user/:product",addCart);
router.delete("/:user/:product/",DeleteItemCart );
router.delete("/:user",EmptyCart );

module.exports = router;