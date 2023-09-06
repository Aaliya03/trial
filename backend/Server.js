const express=require("express")
const mongoose=require("mongoose")
const bodyparser=require("body-parser")
const bcrpyt=require("bcrypt")
const cors=require("cors");
const bodyParser = require("body-parser");
const app=express();

app.use(cors());
app.use(bodyParser.json())

mongoose.connect("mongodb://127.0.0.1:27017/db1");
const UserSchema=new mongoose.Schema(({username:String,email:String,password:String}));
mongoose.pluralize(null)
const User=mongoose.model("user",UserSchema);
app.post("/api/signup",(req,res)=>
{
    try{
        const {username,email,password}=req.body;
        //const handlepassword=await bcrpyt.hash(password,10)
        const newUser= new User({username:username,email:email,password:password})
        newUser.save();
        res.status(201).json({message:"User signed up sucessfully"});
    }
    catch(err)
    {
        res.status(500).json({error:"An error occured"});
    }
});
const PORT=process.env.PORT ||5000;
app.listen(PORT,()=>
{
    console.log(`server is running on port ${PORT}`);
})