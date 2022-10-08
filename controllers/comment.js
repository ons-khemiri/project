const Comment = require("../models/Comment");

exports.getComments = async (req, res) => {
    try {
      const listComments = await Comment.find();
      res.status(200).send({msg :"this is the list of comments" ,listComments });
    } catch (error) {
      res.status(400).send({ msg: "cannot get list of comments", error });
    }
  };
  exports.deleteComment = async (req,res) => {
    try {
        const{_id}= req.params;
        await Comment.findOneAndDelete({_id});
        res.status(200).send({msg : "comment deleted"});
    } catch (error) {
        res.status(400).send({msg : "cannot delete this comment", error});      
    }
};
exports.editComment = async (req, res) => {
    try {
      const { _id } = req.params;
      await Comment.updateOne({ _id }, { $set: { ...req.body } });
      res
        .status(200)
        .send({ msg: `comment with id ${req.params._id} is updated` });
    } catch (error) {
      res.status(400).send({ msg: "cannot edit comment ", error });
    }
  };
  exports.addComment = async (req, res) => {
    try {
      const { UserName, ProductRef ,description } = req.body;
      const newComment = new Comment({
        UserName,
        ProductRef,
        description 
      });
      await newComment.save();
     res.status(200).send({ msg: "comment added", newComment });
    } catch (error) {
      res.status(400).send({ msg: "failed to add", error });
    }
  };