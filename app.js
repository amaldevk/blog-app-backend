const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const blogRouter=require("./controllers/blogrouter")
const postRouter=require("./controllers/postrouter")
const app=express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://amaldev123:amaldev1234@cluster0.dtrzikf.mongodb.net/blogDb?retryWrites=true&w=majority",
{
    useNewUrlParser:true
}
)

app.use("/api/blog",blogRouter)
app.use("/api/post",postRouter)

app.listen(3001,()=>{
    console.log("server running")
})