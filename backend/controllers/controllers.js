const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
var {User} = require("../models/models")

var registerHandler =  async (req, res) => {
    try {
      const { username, password } = req.body;
      var hashedPassword = await bcrypt.hash(password,11)
      console.log(req.body)
      if (!username || !password) {
        return res
          .status(202)
          .json({ error: "Username and password are required." });
      }
     
      const newUser = await User.create({username:username,password:hashedPassword})
      await newUser.save();
      res.status(201).send("User registered successfully");
    } catch (error) {
      if(error.code === 11000)return res.status(200).send("User exists")
      res.status(500).send("Error registering user");
    }
  }





  async function Login (req, res){
try{
  const { username, password } = req.body;
  if(!username || !password )return res.status(200).json({"msg":"Fill all fields"})
  var matchingUsername = await User.findOne({"username":username})
if(!matchingUsername)return res.status(200).json({"msg":"Username does not exist"})
  
var passwordMatch = await bcrypt.compare(password,matchingUsername.password)
if(!passwordMatch)return res.status(200).json({"msg":"password mismatch"})
var token = jwt.sign({username},process.env.secret,{expiresIn:"780s"})
var jsonResponse = {
"token":token,
"msg":"Login Successful"
}
return res.status(200).json(jsonResponse)
}catch(err){
return res.status(500).send("Internal Server error")
}
}
  





  module.exports ={
registerHandler,
Login
  }