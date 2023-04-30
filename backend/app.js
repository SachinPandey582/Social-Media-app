const express=require("express")
const app =express()
require('dotenv').config({path:'./config/config.env'})

//these are middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))


const post =require("./routes/post")
const user =require("./routes/user")


app.use("/api/v1",post)
app.use("/api/v1",user)

module.exports=app