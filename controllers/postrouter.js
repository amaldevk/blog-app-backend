const express=require("express")
const router=express.Router()
const postModel=require("../model/postmodel")


router.post("/add",async(req,res)=>{
    let data=req.body
    let post=new postModel(data)
    let result=await post.save()
    res.json({status:"success"})
})

router.get("/view",async(req,res)=>{
    let data=await postModel.find().populate("userId","Name Age Mobile Address Pincode Email -_id").exec()
    res.json(data)
})

module.exports=router