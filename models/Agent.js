const mongoose = require("mongoose") ;
const {Schema , model } = mongoose ;

const AgentSchema = new Schema ({
    name : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique : true,
         },
    password : {
        type: String,
        required: true,
        } ,
    isAgent : {
        type : Boolean},
        })

module.exports = Agent = model('agent', AgentSchema)