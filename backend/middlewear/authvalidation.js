const {jwt_secret} = require("../config/config")
const jwt = require("jsonwebtoken")

const signupvalidation = (req , res , next)=>{
    try {
        let { username, email, password} = req.body
        let emailregex = /@gmail.com/
        if (username.length >= 1 && email.length > 10 && password.length > 0) {
            if (email.length > 8 && emailregex.test(email)) {
                if (password.length >= 5) {
                    next()
                }
                else {
                    res.status(401).send({ status: "failed", error: "not a valid password" })
                }
            }
            else {
                res.status(401).send({ status: "failed", error: "not a valid email" })
            }
        }
        else {
            res.status(401).send({ status: "failed", error: "all fields are required" })
        }
    } catch (err) {
        console.log("error =>" , err)
        res.status(401).send({ status: "failed", error: "something went wrong "})
    }
}


const loginvalidation = (req , res , next)=>{
    try {
        let { email, password } = req.body
        let emailregex = /@gmail.com/
        if (email.length > 8 && emailregex.test(email)) {
            if (password.length >= 5) {
                next()
            }
            else {
                res.status(401).send({ status: "failed", error: "not a valid password" })
            }
        }
        else {
            res.status(401).send({ status: "failed", error: "not a valid email" })
        }
    } catch (err) {
        console.log("error =>" , err)
        res.status(401).send({ status: "failed", error: "something went wrong "})
    }
}

const fetchuser = (req , res , next)=>{
    const token = req.header("auth-token")
    if(!token){
        return res.status(401).send({ status: "failed", error: "not a valid token"})
    }
    try {
        console.log(token)
        const data = jwt.verify(token , jwt_secret);
        req.user = data.User;
        // console.log("res => " , res , "\n data => " , data)
        // console.log(req.user)
        // console.log(data.User)
        // console.log("veriify")
        next()
    } catch (error) {
        res.status(401).send({ status: "failed", error: "something went wrong "})
    }
}

module.exports = {signupvalidation , loginvalidation, fetchuser}