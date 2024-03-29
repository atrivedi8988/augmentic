const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name:String,
    email:String,
    phone:Number,
    role:{
        type:String,
        default:"user"
    }
})

module.exports = mongoose.model("user",UserSchema)