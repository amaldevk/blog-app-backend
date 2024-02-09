const express=require("express")
const router=express.Router()
const blogModel=require("../model/blogmodel")

router.post("/signup",async(req,res)=>{
    let data=req.body
    let blogs=new blogModel(data)
    let result=await blogs.save()
    res.send({status:"success"})
})

module.exports=router