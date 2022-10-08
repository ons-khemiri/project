const mongoose = require("mongoose");
const schema = mongoose.Schema;

const commentSchema = new schema({
    UserName : { type: String},
    ProductRef : {type: String}, 
    description : {type: String}
})
   module.exports = Comment=mongoose.model('comment',commentSchema);