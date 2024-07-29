var mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username:{
    required:true,
    unique:true,
    type:mongoose.SchemaTypes.String
    },
    password:{
    required:true,
    type:mongoose.SchemaTypes.String
    }
  });

var User= mongoose.model("User",userSchema,'cerealsusers')
module.exports = {
User
}