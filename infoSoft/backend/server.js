const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors")
const Users = require("./user.model")
const app = express()
app.use(express.json())
app.use(cors())
mongoose.set("strictQuery",true)


app.get("/all",async(req,res)=>{
    const user = await Users.find()
    res.status(200).send(user)
})

mongoose.connect("mongodb://localhost:27017/infoSoft").then(()=>{
    app.listen(8080,()=>{
        console.log("listening")
    })
})
