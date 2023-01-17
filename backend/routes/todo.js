const express = require("express")
const router = express.Router()
const Todo = require("../schema/Todo")
const {fetchuser} = require("../middlewear/authvalidation")

router.get("/fetchtodos" , fetchuser ,async (req , res)=>{
    try {
        // let user =await(req.user);
        let todos = await Todo.find({user:req.user.id});
        // await Note.find({ user: req.user.id });
        console.log(todos)
        res.send({status:"sucess" , todos})
    } catch (error) {
        res.status(400).send({status:"failed" , error:"failed to load notes"})
    }
})

router.post("/createtodo" , fetchuser, async (req , res)=>{
    try {
        console.log(req.user)
        let todo = await Todo.create({
            tittle:req.body.tittle,
            description:req.body.description,
            user: req.user.id
        })
        res.send({todo})
    } catch (error) {
        res.status(400).send({status:"failed" , error:"failed"})
    }
})

router.delete("/deletetodo/:id" , fetchuser , async(req , res)=>{
    try {
        let todo = await Todo.findById(req.params.id);
        if(!todo){
           return res.status(400).send({status:"failed" , error:"todo not found"})
        }
        if(todo.user.toString() != req.user.id){
            return res.status(400).send({status:"failed" , error:"failed try again"})
        }
      let deletetodo = await Todo.findOneAndDelete(req.params.id)
      console.log(deletetodo)
        // if(todo)
         res.status(200).send({todo , deletetodo})
        
    } catch (error) {
        console.log(error)
        res.status(400).send({status:"failed" , error:"something went wrong"})
    }
})

module.exports = router;