const mongoose=require("mongoose");

const userschema=new mongoose.Schema({
    Name:String,
    Email:String,
    Password:String,
   
});

module.exports=mongoose.model("users",userschema);