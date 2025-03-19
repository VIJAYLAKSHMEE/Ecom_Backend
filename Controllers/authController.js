const User = require("../Models/User")
const bcrypt=require("bcryptjs")
const jwt = require("jsonwebtoken")

exports.signup = async(req,res)=>{
    const {email,password}=req.body
    const hashedPassword=await bcrypt.hash(password,10)
    const user = new User({email,password:hashedPassword})
    await user.save()
    res.json({message:"user saved successfully"})   

}
exports.login=async(req,res)=>{
    const {email,password}=req.body
    const user = await User.findOne({email})
    if(!user||(await bcrypt.compare(user.password,password))){
        return res.status(400).json({message:"Invaild email or password"})
    }
    const token= jwt.sign({id:user.id},process.env.JWT_SECRET)
    res.json({token})
}