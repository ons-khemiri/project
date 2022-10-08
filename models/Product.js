const mongoose = require("mongoose");
const {Schema , model } = mongoose ;

const productSchema = new Schema({
 name : { type: String},
 description : {type: String},
 referance : {type: String}, 
imageURL : {type : String },
price: { type: Number},
quantity: { type: Number},
add_quantity: { type: Number, require: true,dafualt:0 }
})
module.exports = Product= model('product',productSchema);