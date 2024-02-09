const express=require("express")
const router=express.Router()
const blogModel=require("../model/blogmodel")
const bcrypt=require("bcryptjs")

hashPasswordGenerator=async(pass)=>{
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)
}

router.post("/signup",async(req,res)=>{
    let {data}={"data":req.body}
    let password=data.Password
    const hashedPassword=await hashPasswordGenerator(password)
    data.Password=hashedPassword
    let blogs=new blogModel(data)
    let result=  blogs.save()
    res.json({status:"success"})
})

    // hashPasswordGenerator(password).then(
    //     (hashedPassword)=>{
            
    //         data.Password=hashedPassword

    //         console.log(data)

    //         let blogs=new blogModel(data)
    //         let result=  blogs.save()

    //         console.log(result)
           

    

module.exports=router