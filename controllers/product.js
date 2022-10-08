const Product = require("../models/Product");

exports.getProducts = async (req, res) => {
    try {
      const listProducts = await Product.find();
      res.status(200).send({msg :"this is the list of products" ,listProducts });
    } catch (error) {
      res.status(400).send({ msg: "cannot get list of products", error });
    }
  };
  exports.getOneProduct = async (req, res) => {
    try {
      const { _id } = req.params;
      const productToGet = await Product.findOne({ _id });
      res.status(200).send(productToGet);
    } catch (error) {
      res.status(400).send({ msg: "cannot get the product", error });
    }
  };
  exports.deleteProduct = async (req,res) => {
    try {
        const{_id}= req.params;
        await Product.findOneAndDelete({_id});
        res.status(200).send({msg : "Product deleted"});
    } catch (error) {
        res.status(400).send({msg : "cannot delete this Product", error});      
    }
};
exports.editProduct = async (req, res) => {
    try {
      const { _id } = req.params;
      await Product.updateOne({ _id }, { $set: { ...req.body } });
      res
        .status(200)
        .send({ msg: `product with id ${req.params._id} is updated` });
    } catch (error) {
      res.status(400).send({ msg: "cannot edit product ", error });
    }
  };
  exports.addProduct = async (req, res) => {
    try {
      const { name, description,referance, imageURL,price,quantity } = req.body;
      const newProduct = new Product({
        name,
        description,
        referance,
        imageURL,
        price,
        quantity
      });
      await newProduct.save();
     res.status(200).send({ msg: "product added", newProduct });
    } catch (error) {
      res.status(400).send({ msg: "failed to add", error });
    }
  };
  exports.addQuantity =async (req,res)=>{
    try {
      const { _id } = req.params;
      await Product.updateOne({ _id }, { $set: { ...req.body } });
      res
        .status(200)
        .send({ msg: `quantity added for product with id ${req.params._id} ` });
    } catch (error) {
      res.status(400).send({ msg: "cannot update product ", error });
    }
  };