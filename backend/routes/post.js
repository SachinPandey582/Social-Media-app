const express=require("express")
const {CreatePost, sendRequest}=require("../Controllers/post")
const { isAuthenticated } = require("../middleware/auth")
const router=express.Router()

router.route('/post/upload').post(isAuthenticated, CreatePost)
// router.post('/post/:userId').post(isAuthenticated,sendRequest)
router.route('/SendRequest/:userId').post(isAuthenticated, sendRequest)
module.exports=router 