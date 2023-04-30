const User=require("../models/users")

exports.register=async(req,res)=>{
    try{
const {name,email,password}=req.body
let user=await User.findOne({email})
if(user){
    return res.status(400).json({success:false,message:"user already registered"})
}
user=await User.create({
    name,
    email,
    password,
   
})
// res.status(201).json({success:true,user})
//while you were registering there was no cookie and nothing 
const token =await user.generateToken()

res.status(201).cookie("token",token,{expires:new Date(Date.now()+90*24*60*60*1000),httpOnly:true}).json({
    success:true,
    user,
})
// now you will get logged in while you register
    }catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
}


exports.login=async(req,res)=>{
    try{
const {email,password}=req.body
const  user=await User.findOne({email})
if(!user){
    return res.status(400).json({success:false,
    message:"User Does not exist"})
}

const isMatch=await user.matchPassword(password)

if(!isMatch){
    return res.status(400).json({success:false,
        message:"Incorrect Password"})
}
const token =await user.generateToken()

res.status(200).cookie("token",token,{expires:new Date(Date.now()+90*24*60*60*1000),httpOnly:true}).json({
    success:true,
    user,
})
    }catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
}