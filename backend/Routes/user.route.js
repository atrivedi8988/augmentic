const express = require("express");
const jwt = require("jsonwebtoken");
const { isAuthenticate, isAdmin } = require("../Middlewaess/auth");
const User = require("../Model/user.schema");

const router = express.Router();

// Get All Users
router.get("/all/users",async(req,res)=>{
  const user = await User.find()
  res.status(200).json({
    success: true,
    user
  })
})

// Sign up User or Create new user

router.post("/createuser", async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json({
    success: true,
    user,
  });
});

// check login user admin or not
router.post("/login", async (req, res) => {
  const user = await User.findOne(req.body);
  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found. This id is invalid",
    });
  }
  if (user.role === "user") {
    return res.status(400).json({
      success: false,
      message: "This is not admin. only admin can access this resources",
    });
  }

  const token = jwt.sign({ id: user._id, email:user.email }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRE_TIME,
  });

  res.status(200).json({
    success:true,
    user,
    token
  })
  
});

// Logout
router.post("/logout",(req,res)=>{
  console.log(req.headers.token)
  token = jwt.verify(req.headers.token,process.env.JWT_SECRET_KEY,(err,decoded)=>{
    if(err){
      console.log(err)
      return res.send(err)
    }
    
  })
  // console.log(token);
  res.send("logout route")
})


module.exports = router;
