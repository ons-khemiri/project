const Agent = require("../models/Agent")
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

exports.loginAgent = async(req,res) =>{
    try {
        const {email , password } = req.body ;
        const foundAgent = await Agent.findOne({email})
        if (!foundAgent){
            return res.status(400).send({errors : [{ msg : "bad credential !!"}]})
        }
        const checkPassword = await bcrypt.compare(password,  foundAgent.password)
        if (!checkPassword){
        return res.status(400).send({errors : [{ msg : "bad credential !!"}]})
    }
    const token = jwt.sign({
        id : foundAgent._id,  isAgent : foundAgent.isAgent 
    },
    process.env.SCRT_KEY,{expiresIn: "184h"}
    )
    res.status(200).send ({msg : "Login sucess..." , user : foundAgent , token})
    }
     catch (error) {
        res.status(400).send({errors : [{ msg : "Can not find user !!"}]})
        }
}