const express = require("express");
const { register, login, editUser, getUsers} = require("../controllers/user");
//const isAdmin = require("../middleware/isAdmin");
const isAuth = require("../middleware/isAuth");
const { registerValidation,validation,loginValidation} = require("../middleware/validator");

const router = express.Router();
router.post("/register",registerValidation(), validation, register);
router.post("/login", loginValidation(), validation, login);
router.get("/allUsers",getUsers);
router.get("/current",isAuth, (req, res) => {res.send(req.user)})
router.put("/:_id",editUser);


module.exports = router;