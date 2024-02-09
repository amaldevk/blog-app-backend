const mongoose=require("mongoose")
const { type } = require("os")
const postSchema=new mongoose.Schema(
    {
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"user"
        },
        post:{
            type:String,
            required:true
        },
        postdate:{
            type:Date,
            default:Date.now
        }
    }
)

module.exports=mongoose.model("blogposts",postSchema)