const mongoose =require("mongoose")
const userSchema=new mongoose.Schema({
    _id: ObjectId,
    name: String,
    email: String,
    password: String,
    dob: Date,
    bio: String,
    posts: [{ type: ObjectId, ref: 'Post' }],
    friends: [{ type: ObjectId, ref: 'User' }],
    friendRequests: [{ type: ObjectId, ref: 'User' }]
  })
module.exports=mongoose.model("User",userSchema)