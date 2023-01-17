const mongoose = require("mongoose")
//const uri = `mongodb+srv://prince:<password>@cluster0.pcwb0o1.mongodb.net/?retryWrites=true&w=majority`
const uri = `mongodb+srv://prince:JgKuEqs24Y4s2ut@cluster0.pcwb0o1.mongodb.net/test`

mongoose.set('strictQuery', false)
const connectToDb = async() => {
    //return mongoose.connect(uri , console.log("ok db connect done"))
    return mongoose.connect(uri , console.log("ok db connect done"))
};

module.exports = connectToDb;
