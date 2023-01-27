import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [product, setProduct] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    getproducts();
  }, []);
  const getproducts = async () => {
    let result = await fetch("http://localhost:5000/products");
    result = await result.json();
    setProduct(result);
    setloading(false);
  };
  // console.log(
  //   "all products added is " +
  //     product.map((curelem) => {
  //       console.log(curelem.name);
  //     })
  // );
  return (
    <section className="flex flex-col justify-center items-center space-y-5 mb-10">
      <h1 className="text-5xl text-red-500 mt-5">All Products</h1>

      <input
        type="search"
        placeholder="search"
        className=" w-[30%] rounded text-red-500"
        onChange={async (event) => {
          if (event.target.value) {
            let result = await fetch(
              `http://localhost:5000/search/${event.target.value}`
            );
            result = await result.json();
            if (result) {
              setProduct(result);
            }
          }
          else{
            getproducts();
          }
        }}
      />

      <table className="flex flex-col justify-between items-center space-x- space--2 w-[80vw] border-red-500 borde-4">
        <div className="w-[100%] flex justify-between">
          <th className="text-center w-[15%]">Index</th>

          <th className="text-center w-[15%]">Name</th>
          <th className="text-center w-[15%]">price</th>
          <th className="text-center w-[15%]">category</th>
          <th className="text-center w-[15%]">company</th>
          <th className="text-center w-[15%]">Operations</th>
        </div>
        {loading && <h1>loading ...</h1>}
        {
        product.length>0 ?
         product.map((curelem, index) => {
          return (
            <tr
              className="w-[100%] flex justify-between items-center border-4 border-blue-500 h-[60px]"
              key={curelem._id}
            >
              <td className="text-center w-[15%] border-red-500 border-x-4 h-[100%]">
                {index + 1}
              </td>

              <td className="text-center w-[15%] border-red-500 border-x-4 h-[100%]">
                {curelem.name}
              </td>
              <td className="text-center w-[15%] border-red-500 border-x-4 h-[100%]">
                {curelem.price}
              </td>
              <td className="text-center w-[15%] border-red-500 border-x-4 h-[100%]">
                {curelem.category}
              </td>
              <td className="text-center w-[15%] border-red-500 border-x-4 h-[100%]">
                {curelem.company}
              </td>
              <td className="text-center w-[15%] border-red-500 border-x-4 h-[100%]">
                <button
                  className="bg-red-500 px-3 py-3 text-white rounded hover:text-blue-500"
                  onClick={async () => {
                    let id = curelem._id;
                    let deleted_api = await fetch(
                      `http://localhost:5000/delete/${id}`,
                      {
                        method: "Delete",
                      }
                    );
                    deleted_api = deleted_api.json();
                    if (deleted_api) {
                      getproducts();
                      alert("deleted successfuly");
                    }

                    console.log("id is" + curelem._id);
                  }}
                >
                  Delete
                </button>
                /{/* update button */}
                <NavLink to={`/update/${curelem._id}`}>
                  <button className="bg-blue-500 text-white hover:text-red-500 px-3 py-3 rounded">
                    Update
                  </button>
                </NavLink>
              </td>
            </tr>
          );
        })
        :<h1 className="mt-10">No Products Found</h1>}
      </table>
    </section>
  );
};

export default Home;
