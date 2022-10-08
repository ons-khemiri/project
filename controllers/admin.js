const Admin = require("../models/Admin")
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

exports.loginAdmin = async(req,res) =>{
    try {
        const {email , password } = req.body ;
        const foundAdmin = await Admin.findOne({email})
        if (!foundAdmin){
            return res.status(400).send({errors : [{ msg : "bad credential !!"}]})
        }
        const checkPassword = await bcrypt.compare(password,  foundAdmin.password)
        if (!checkPassword){
        return res.status(400).send({errors : [{ msg : "bad credential !!"}]})
    }
    const token = jwt.sign({
        id : foundAdmin._id,  isAdmin : foundAdmin.isAdmin 
    },
    process.env.SCRT_KEY,{expiresIn: "184h"}
    )
    res.status(200).send ({msg : "Login sucess..." , user : foundAdmin , token})
    }
     catch (error) {
        res.status(400).send({errors : [{ msg : "Can not find user !!"}]})
        }
}