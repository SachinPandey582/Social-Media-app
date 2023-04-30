
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

exports.sendRequest= async (req, res) => {
    try {
      const currentUser = req.user;
      // console.log(currentUser,"this is current uesr")ye jo a=main khud hu
       // Assuming you have implemented authentication middleware to get the current user
      const userToRequest = await User.findById(req.params.userId);
  // console.log(userToRequest,"this is useToRequest") ye jo jise bhej raha hu main
      if (!userToRequest) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      // Check if the users are already friends
      if (currentUser.friends.includes(userToRequest._id)) {
        return res.status(400).json({ error: 'You are already friends with this user' });
      }
  
      // Check if a friend request has already been sent
      // if (currentUser.sentRequests.includes(userToRequest._id)) {
      //   return res.status(400).json({ error: 'A friend request has already been sent to this user' });
      // }
  
      // Check if a friend request has already been received
      if (currentUser.friendRequests.includes(userToRequest._id)) {
        return res.status(400).json({ error: 'You have already received a friend request from this user' });
      }
  
      // Send the friend request
      // currentUser.sentRequests.push(userToRequest._id);
      userToRequest.friendRequests.push(currentUser._id);
      await currentUser.save();
      await userToRequest.save();
  
      res.status(200).json({ message: 'Friend request sent successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
// exports.sendRequest= async (req, res) => {
//   console.log("sacho")
//   try {
//     const receiver = await User.findById(req.params.userId);
//     console.log(receiver,"this is reciever") 
//     // ...
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };