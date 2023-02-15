const mongoose = require("mongoose");


const UserSchema = new mongoose.Schema({
    id:Number,
    name:String,
    age:Number,
    isMarried:Boolean,
    hasChild:Boolean
})

module.exports = mongoose.model("user",UserSchema)