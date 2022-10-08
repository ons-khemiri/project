const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
    try {
		const { name, email, password, phone } = req.body;
		const foundUser = await User.findOne({ email });
		if (foundUser) {
			return res
				.status(400)
				.send({ errors: [{ msg: "Email should be unique try again !!" }] });
		}
		const saltRounds = 10;
		const hashedPassword = await bcrypt.hash(password, saltRounds);
		const newUser = new User({ ...req.body });
		newUser.password = hashedPassword;
		await newUser.save();
		const token = jwt.sign(
			{
				id: newUser._id,
			},
			process.env.SECRET_KEY,
			{ expiresIn: "200h" }
		);
		res.status(200).send({ msg: "Register Succ ...", user: newUser, token });
	} catch (error) {
		res
			.status(400)
			.send({ errors: [{ msg: "Can not regsiter the User !!! !!" }] });
	}
};
exports.login = async (req, res) => {
	try {
		const { email, password } = req.body;
		const foundUser = await User.findOne({ email });
		if (!foundUser) {
			return res.status(400).send({ errors: [{ msg: "Bad credential !!" }] });
		}
		const checkPassword = await bcrypt.compare(password, foundUser.password);
		if (!checkPassword) {
			return res.status(400).send({ errors: [{ msg: "Bad credential !!" }] });
		}
		const token = jwt.sign(
			{
				id: foundUser._id,
			},
			process.env.SECRET_KEY,
			{ expiresIn: "1h" }
		);
		res.status(200).send({ msg: "Login Succ ...", user: foundUser, token });
	} catch (error) {
		res
			.status(400)
			.send({ errors: [{ msg: "Can not login the User !!! !!" }] });
	}
};
exports.getUsers = async (req,res) => {
    try {
        const listusers = await User.find().populate("cart");
        res.status(200).send({msg : 'Users list',listusers})
        
    } catch (error) {
        res.status(400).send({msg : 'cannot get all Users', error})
    }
  };
  exports.editUser = async (req, res) => {
    try {
      const { _id } = req.params;
      await User.updateOne({ _id }, { $set: { ...req.body } });
      res
        .status(200)
        .send({ msg: `user with id ${req.params._id} is updated` });
    } catch (error) {
      res.status(400).send({ msg: "cannot edit user ", error });
    }
  };
  exports.deleteUser = async (req,res) => {
    try {
        const{_id}= req.params;
        await User.findOneAndDelete({_id});
        res.status(200).send({msg : "User deleted"});
    } catch (error) {
        res.status(400).send({msg : "cannot delete this User", error});      
    }
};