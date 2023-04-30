const mongoose =require('mongoose')


const connection =mongoose.connect(`mongodb+srv://sachinpandey:sachinpandey@cluster0.ijlptdk.mongodb.net/socialmedia`)
module.exports={connection}