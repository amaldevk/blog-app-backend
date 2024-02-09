const mongoose=require("mongoose")
const blogScheme=new mongoose.Schema(
    {
        Name:String,
        Age:String,
        Mobile:String,
        Address:String,
        Pincode:String,
        Email:String,
        Password:String
    }
)

module.exports=mongoose.model("blogs",blogScheme)