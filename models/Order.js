const mongoose = require("mongoose") ; 
const {Schema , model } = mongoose ;

const OrderSchema = new Schema({
    email : {
        type: String,
        required: true,
       },

       productname : {
        type: String,  
        required : true 
    },

    adresse : {
        type: String, 
        required: true,
    } ,
    phone : {
        type: Number,
        required: true,
       }
})
module.exports = Order = model('order', OrderSchema);