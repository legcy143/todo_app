const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema(
    {
        username:{
            type:String
        },
        email:{
            type:String,
            unique:true
        },
        password:{
            type:String
        },
        // todo:{
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: 'todos'
        // },
        
    }
)

module.exports = mongoose.model("Users" ,UserSchema)