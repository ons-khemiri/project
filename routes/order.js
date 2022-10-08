const express = require("express") ;
const { addOrder, getOrders, deleteOrder } = require("../controllers/order");
//const isAgent = require("../middleware/isAgent");

const router = express.Router();
router.post('/addOrder', addOrder);
router.get('/allOrders', getOrders)
router.delete('/:_id', deleteOrder)

module.exports = router;