const express = require("express");
const { editComment, addComment, deleteComment, getComments } = require("../controllers/comment");
const isAdmin = require("../middleware/isAdmin");
const isAuth = require("../middleware/isAuth");

const router=express.Router(); 
router.get('/allComments',getComments);
router.delete('/:_id',isAdmin,isAuth, deleteComment)
router.put('/:_id',isAuth,editComment);
router.post('/addComment',isAuth,addComment);

module.exports = router;