const express = require("express") ;
const { addOrder, getOrders, deleteOrder } = require("../controllers/order");
const isAgent = require("../middleware/isAgent");
const isAuth = require("../middleware/isAuth");

const router = express.Router();
router.post('/addOrder',isAuth, addOrder);
router.get('/allOrders',isAgent, getOrders)
router.delete('/:_id',isAgent, deleteOrder)

module.exports = router;