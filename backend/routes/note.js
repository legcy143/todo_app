const express = require("express")
const router = express.Router()

router.get("/fetchnotes" , async(req , res )=>{
    res.send({status:"ok done"})
})


module.exports = router;