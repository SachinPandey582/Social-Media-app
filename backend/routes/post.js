const express=require("express")
const {CreatePost}=require("../Controllers/post")
const { isAuthenticated } = require("../middleware/auth")
const router=express.Router()

router.route('/post/upload').post(isAuthenticated, CreatePost)


module.exports=router