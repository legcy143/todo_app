const express = require("express")
const app = express()
const {port , domain} = require("./config/config")
const connectToDb = require("./config/db")
connectToDb()
const cors = require("cors")

app.use(express.json());
app.use(cors())

app.use("/api/auth" , require("./routes/auth"))
app.use("/api/todo" , require("./routes/todo"))
app.use("/api/note" , require("./routes/note"))

// routes
app.get("/" , (req,res)=>{
    res.send("ok auth how")
})


app.listen(port , console.log(`app run at http://${domain}:${port}`))
