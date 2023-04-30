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
res.status(201).json({success:true,user})

    }catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
}