const express=require("express")
const {register, login} =require("../Controllers/user")

const router=express.Router()
router.route("/register").post(register)
router.route("/login").post(login)
module.exports=router;