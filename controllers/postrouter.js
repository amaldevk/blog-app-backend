const express=require("express")
const router=express.Router()
const postModel=require("../model/postmodel")


router.post("/add",async(req,res)=>{
    let data=req.body
    let post=new postModel(data)
    let result=await post.save()
    res.json({status:"success"})
})


module.exports=router