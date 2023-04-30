
const Post =require('../models/posts')

exports.CreatePost=async(req,res)=>{
try{
const newPostData={
    text:req.body.text,
    image:req.body.image,
    user:req.user._id
    
}
const newPost=await Post.create(newPostData)

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