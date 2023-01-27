import React from "react";
const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer>
      <div className="bg-sky-700 absolute bottom-0 flex justify-center items-center w-[100%] space-x-4 ">
        <h1 className="text-2xl md:text-4xl text-white">@{date}</h1>
        <h1 className="text-center text-white text-2xl md:text-4xl">E-comm DashBoard Code step by step</h1>
      </div>
    </footer>
  );
};
export default Footer;
