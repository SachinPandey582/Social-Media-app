const User = require("../models/users")
const jwt=require("jsonwebtoken")


exports.isAuthenticated=async(req,res,next)=>{
   try{ const {token}=req.cookies;
   if(!token){
       return res.status(401).json({
           message:"please Login First",
       })
   }
   const decoded=await jwt.verify(token,process.env.SECRET);

   req.user=await User.findById(decoded._id)
   next()
}catch(err){
res.send(err.message)
   }
}