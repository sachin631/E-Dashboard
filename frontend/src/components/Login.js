import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const Login = () => {
  const [Email, SetEmail] = useState();
  const [Password, SetPassword] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
      alert("Already log IN");
    }
  }, []);

  return (
    <section>
      <h1 className="text-4xl text-center mt-4">LogIN</h1>

      <form
        action="/login"
        method="POST"
        onSubmit={(event) => {
          event.preventDefault();
        }}
        className="flex flex-col  items-center space-y-8 mt-4 "
      >
        <div className="flex flex-col  md:w-[40vw]">
          <label>Enter Your Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            className="text-blue-500"
            value={Email}
            onChange={(event) => {
              SetEmail(event.target.value);
            }}
          />
        </div>
        <div className="flex flex-col  md:w-[40vw]">
          <label>Enter Your Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            className="text-blue-500"
            value={Password}
            onChange={(event) => {
              SetPassword(event.target.value);
            }}
          />
        </div>
        <div className="flex flex-col  md:w-[40vw]">
          <button
            type="submit"
            className="bg-gray-500 text-white p-4 text-2xl rounded-lg active:bg-red-500"
            onClick={async () => {
              let result = await fetch("http://localhost:5000/login", {
                method: "POST",
                body: JSON.stringify({ Email, Password }),
                headers: {
                  "Content-Type": "application/json",
                },
              });
              result = await result.json();
              console.log(result);
              console.log(Email, Password);

              if (result.Name) {
                localStorage.setItem("user", JSON.stringify(result));
                // localStorage.setItem("user",JSON.stringify(result));
                navigate("/");
                alert(`Thanks ${result.Name}`);
              } else {
                alert("please enter valid data!");
              }
            }}
          >
            Login
          </button>
        </div>
      </form>
    </section>
  );
};
export default Login;
