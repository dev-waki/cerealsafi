 const mongoose = require("mongoose");
  require("dotenv").config()
 
 // Connect to MongoDB
var dbconnection = mongoose.connect(process.env.mongoconnection)
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB connection error:", err));


module.exports = {   
dbconnection
}  