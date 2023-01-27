import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const [Name, SetName] = useState();
  const [Email,SetEmail]=useState();
  const [Password,SetPassword]=useState();
  const Navigate=useNavigate();
  useEffect(()=>{
    if(localStorage.getItem('user')){
      Navigate("/");
      alert("Already Sign IN");
    }
  },[])
  return (
    <section>
      <h1 className="text-4xl text-center mt-4">SignUp</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
        className="flex flex-col  items-center space-y-8 mt-4 "
      >
       
        
        <div className="flex flex-col  md:w-[40vw]">
            <label>Enter Your Name</label>
            <input type="text" placeholder="Enter Name"  className="text-blue-500" value={Name} onChange={(event)=>{SetName(event.target.value)}}/>
        </div>
        <div className="flex flex-col  md:w-[40vw]">
            <label>Enter Your Email</label>
            <input type="email" placeholder="Enter Email"  className="text-blue-500" value={Email} onChange={(event)=>{SetEmail(event.target.value)}}/>
        </div>
        <div className="flex flex-col  md:w-[40vw]">
            <label>Enter Your Password</label>
            <input type="password" placeholder="Enter Password" className="text-blue-500" value={Password} onChange={(event)=>{SetPassword(event.target.value)}} />
        </div>
        <div className="flex flex-col  md:w-[40vw]">
            <button type="submit" className="bg-gray-500 text-white p-4 text-2xl rounded-lg active:bg-red-500" onClick={async()=>{
              console.log(Name,Email,Password)
              let result=await fetch("http://localhost:5000/register",{
                method:"post",
                body:JSON.stringify({Name,Email,Password}),
                headers:{
                  "Content-Type":"application/json"
                },
              })
              // postdata=await postdata.JSON();
              result= await result.json()
              console.log(result);

              if(result){
                Navigate("/");
              }

              localStorage.setItem("user",JSON.stringify(result));


            }}>SignUp</button>
        </div>
        
      </form>
    </section>
  );
};

export default SignUp;
