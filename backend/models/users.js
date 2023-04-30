const mongoose =require("mongoose")
const bcrypt=require("bcrypt")
const userSchema=new mongoose.Schema({
    // _id: ObjectId,
    name: String, 
    email: String, 
    password: String,
    dob: String,
    bio: String,
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
    friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    friendRequests: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
  })

  userSchema.pre("save",async function(next){
if(this.isModified("password")){
  this.password=await bcrypt.hash(this.password,10)
}
next()
  })
module.exports=mongoose.model("User",userSchema)