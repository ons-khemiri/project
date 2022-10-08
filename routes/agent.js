const express = require("express") ;
const { loginAgent } = require("../controllers/agent");
const isAgent = require("../middleware/isAgent");
const { validation, loginValidation } = require("../middleware/validator");

const router = express.Router();

router.post("/loginAgent", validation , loginValidation(), loginAgent);
router.get ("/currentAgent"  , (req,res) =>{res.send(req.agent)});

module.exports = router;