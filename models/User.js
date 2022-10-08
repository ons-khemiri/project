const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const UserSchema = new Schema({
	name: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	isAdmin: { type: Boolean},
	isAgent: { type: Boolean},
	phone: Number,
	cart: [{ type: mongoose.Types.ObjectId, ref: "product" }],
});
module.exports = User = model("user", UserSchema);