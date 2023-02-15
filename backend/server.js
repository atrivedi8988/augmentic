const express = require("express");
const app = express()
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

