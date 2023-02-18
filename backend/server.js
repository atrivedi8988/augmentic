const express = require("express");
const cors = require("cors")
const app = express()
app.use(cors())
app.use(express.json())

//config files
const dotenv = require("dotenv")
dotenv.config()

// All Routes 
const user = require("./Routes/user.route.js")
app.use("/",user)




// connecting to the database
const mongoose = require("mongoose")
mongoose.set("strictQuery",false)
mongoose.connect(process.env.MONGODB_URI).then(()=>{
    app.listen(8080,()=>{
        console.log("listening on port")
    })
})

