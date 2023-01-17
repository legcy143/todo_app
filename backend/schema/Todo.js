const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    tittle:{
        type:String
    },
    description:{
        type:String
    }
})

module.exports = mongoose.model("Todo" , todoSchema )