const mongoose = require("mongoose");
const schema = mongoose.Schema;

const cartSchema = new schema({
    
        total:{type: Number, require: true }},
);
module.exports = Cart=mongoose.model('cart',cartSchema)