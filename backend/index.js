const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("./db/config");
const user = require("./db/user");
const Product = require("./db/product");

app.use(cors()); //use to remove some error
app.use(express.json());

//signup
app.post("/register", async (req, res) => {
  let data = new user(req.body);
  let result = await data.save();
  result = result.toObject();
  delete result.Password;
 
    res.send(result);
  
 
});

//login
app.post("/login", async (req, res) => {
  let data = await user.findOne(req.body).select("-Password");
  if (req.body.Password && req.body.Email) {
    if (data) {
      res.send(data);
    } else {
      res.send({ result: "Incorrect data" });
    }
  } else {
    res.send({ result: "something field missing" });
  }
});

//addproduct
app.post("/add-product", async (req, res) => {
  let product = new Product(req.body);
  const result = await product.save();
  res.send(result);
});

// list product
app.get("/products", async (req, res) => {
  let data = await Product.find();
  if (data.length > 0) {
    res.send(data);
  } else {
    res.send({ result: "No data found" });
  }
  // res.send("woring properly");//this shown error here before comment
});

// delete product
app.delete("/delete/:id", async (req, res) => {
  let deleted = await Product.deleteOne({ _id: req.params.id });
  // res.send(req.body);
  res.send(deleted);
});

//get datta to update datta//get pre data in update field
//api route is same as above but method is seprate so,it did't create problem
app.get("/delete-get/:id", async (req, res) => {
  let result = await Product.findOne({ _id: req.params.id });
  if (result) {
    res.send(result);
  } else {
    res.send({ result: "No data found" });
  }
});

// //update prducts
app.put("/update/:id",async(req,res)=>{
  let result=await Product.updateOne(
    {
        id:req.params.id
    },
    {
        $set:req.body
    }
  )
  if(result){
    res.send(result)
  }
  else{
    res.send("wrong entry")
  }
})

app.listen(5000);

//search api
app.get("/search/:key",async (req,res)=>{
  let result=await Product.find({
    "$or":[
      {name:{$regex:req.params.key}},
      {category:{$regex:req.params.key}},
      {company:{$regex:req.params.key}}
      
    ]
  })
  res.send(result)
})
