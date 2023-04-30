
const Post =require('../models/posts')
const User =require("../models/users")
exports.CreatePost=async(req,res)=>{
try{
const newPostData={
    text:req.body.text,
    image:req.body.image,
    user:req.user._id
    
}
const newPost=await Post.create(newPostData)
const user =await User.findById(req.user._id)
user.posts.push(newPost._id);
await user.save()

res.status(201).json({
    success:true,
    post:newPost
})
}catch(err){
res.status(500).json({
    success:false,
    message:err.message
})
}
}