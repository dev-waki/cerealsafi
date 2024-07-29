const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

   
var {dbconnection} = require("./db/db.js")
var {router} = require("./router/router.js");

app.use(express.json());   
app.use(cors())
app.use(router)

   

  




var port = 5000
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
