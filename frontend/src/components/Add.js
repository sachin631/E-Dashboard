import React, { useState } from "react";

const Add = () => {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [category, setCategory] = useState();
  const [company, setCompany] = useState();
  const [error,setError]=useState(false);
  return (
    <section className="flex flex-col justify-center items-center space-y-4 mt-6">
      <h1 className="text-2xl">Add New Product</h1>
      <form
        className="flex flex-col justify-center items-center space-y-6"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <input
          type="text"
          name="pname"
          placeholder="Enter  Name"
          className="w-[40vw]"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        {!name && error && <span className="text-red-500">Invalid name</span> }
        <input
          type="text"
          name="price"
          placeholder="enter Price"
          className="w-[40vw]"
          onChange={(event) => {
            setPrice(event.target.value);
          }}
        />
         {!price && error && <span className="text-red-500">Invalid price</span> }
        <input
          type="text"
          name="pcategory"
          placeholder="enter Category"
          className="w-[40vw]"
          onChange={(event) => {
            setCategory(event.target.value);
          }}
        />
         {!category && error && <span className="text-red-500">Invalid category</span> }
        <input
          type="text"
          name="pcompany"
          placeholder="enter Company"
          className="w-[40vw]"
          onChange={(event) => {
            setCompany(event.target.value);
          }}
        />
         {!company && error && <span className="text-red-500">Invalid company</span> }
        {/* btn onlcik fn() */}
        <button
          type="submit"
          className="bg-red-500 text-white px-4 py-4 rounded-md"
          onClick={async () => {


            if (!name || !price || !category || !company) {
              setError(true)
              return false;
            }

            const userId = JSON.parse(localStorage.getItem("user"))._id;
            console.log(userId);
            let result = await fetch("http://localhost:5000/add-product", {
              method: "post",
              body: JSON.stringify({ name, price, category, company }),
              headers: {
                "Content-Type": "application/json",
              },
            });
            result = await result.json();
            console.log(result);
          }}
        >
          Add Product
        </button>
      </form>
    </section>
  );
};

export default Add;
