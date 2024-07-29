var router = require("express").Router()
var {registerHandler,Login} = require("../controllers/controllers")


router.post("/register",registerHandler)
router.post("/login",Login)


module.exports = {
router
}