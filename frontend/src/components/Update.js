import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const [name,setName]=useState();
  const [price,setPrice]=useState();
  const [category,setCategory]=useState();
  const [company,setCompany]=useState();
  const params=useParams()
  const navigate=useNavigate()
  // console.log("params is"+params.id)

  useEffect(()=>{
    getproductdetails();
  },[])

  const getproductdetails=async()=>{
    let result=await fetch(`http://localhost:5000/delete-get/${params.id}`);
    result=await result.json();
    setName(result.name);
    setCategory(result.category);
    setPrice(result.price);
    setCompany(result.company);
  }

  return (
    <section>
      <h1 className="mt-6 text-xl text-center mb-4">Update Products</h1>
      <form className="flex justify-center items-center flex-col space-y-4" onSubmit={(event)=>{
        event.preventDefault();
      }}>
        <input className="w-[50vw]" type="text" placeholder="enter name" name="name" onChange={(event)=>{setName(event.target.value)}} value={name} />
        <input className="w-[50vw]" type="text" placeholder="enter price" name="price" onChange={(event)=>{setPrice(event.target.value)}} value={price} />
        <input className="w-[50vw]" type="text" placeholder="enter category " name="category" onChange={(event)=>{setCategory(event.target.value)}} value={category} />
        <input className="w-[50vw]" type="text" placeholder="enter Company" name="company" onChange={(event)=>{setCompany(event.target.value)}}  value={company} />
        <button type="submit" className="px-3 py-3 bg-red-500 rounded hover:text-white" onClick={async(event)=>{
          let result=await fetch(`http://localhost:5000/update/${params.id}`,{
            method:"PUT",
            body:JSON.stringify({name,price,company,category}),
            headers:{
              "Content-Type":"application/json"
            }
          })
          result=await result.json();
          console.log(result)
          if(result){
           alert("Successfuly ")
         navigate("/")
          }
        }}>Update Product</button>
      </form>
    </section>
  );
};

export default Update;
