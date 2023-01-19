const express = require("express")
const router = express.Router();
const {signupvalidation , loginvalidation ,  fetchuser} = require("../middlewear/authvalidation");
const User = require("../schema/User")
var jwt = require("jsonwebtoken")
const {jwt_secret} = require("../config/config")
 
router.post("/signup" , signupvalidation , async(req , res)=>{
    try {
   let user;
   user = await User.findOne({email:req.body.email})
   if(user){
    return res.status(200).send({status:"failed" , message:"user exist with this email"})
   }
   user = await User.create({
    username:req.body.username,
    email:req.body.email,
    password:req.body.password
   })
   const data = {
    User:{
       id: user.id
    }
   }
   const authtoken = jwt.sign(data, jwt_secret, { expiresIn: '24h' }) 
//    console.log("\n\ndata => ",data , "\n\n")
//    console.log(user)
   let userdetail = {username : user.username , email:user.email}
   res.status(200).send({status:"sucess"  , userdetail , authtoken})
    } catch (err) {
        console.log(err)
        res.status(200).send({status:"failed" , error:"failed"})

    }
})


// login route
router.post("/login" , loginvalidation , async(req , res)=>{
    try {
        let user;
        const {email , password} = req.body
        user = await User.findOne({email:req.body.email})
        if(user){
            if(password == user.password){
                let userdetail = {username : user.username , email:user.email}
                const data = {
                    User:{
                       id: user.id
                    }
                   }
                   const authtoken = jwt.sign(data, jwt_secret, { expiresIn: '24h' }) 
                return res.status(200).send({status:"sucess", userdetail , authtoken})
            }
            else{
                return res.status(200).send({status:"failed" , message:"wrong password"})
            }
        }
        else{
            return res.status(200).send({status:"failed" , message:"user not found"})
        }
    } catch (err) {
        res.status(400).send({status:"failed" , error:"failed"})
    }
})

router.post("/fetchuser" ,fetchuser, async(req , res)=>{
    try {
        userId = req.user.id;
        let user = await User.findById(userId).select("-password")
        if(!user){
            return res.status(404).send({status:"deactive" , error : "user not found may be account deactivated"})
        }
        res.status(200).send({user})
        // res.send({user})
    } catch (err) {
        console.log(err)
        res.status(401).send({status:"failed" , error:"failed to fetch user" , err})
    }
})
module.exports = router