const mongoose =require("mongoose")
const postSchema=new mongoose.Schema({
    _id: ObjectId,
    user: { type: ObjectId, ref: 'User' },
    text: String,
    image: String,
    createdAt: Date,
    likes: [{ type: ObjectId, ref: 'User' }],
    comments: [{
      user: { type: ObjectId, ref: 'User' },
      text: String,
      createdAt: Date
    }]
  })
module.exports=mongoose.model("Post",postSchema)