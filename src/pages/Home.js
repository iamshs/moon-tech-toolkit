import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ProductCard from "../components/ProductCard";
import { toggle, toggleBrands } from "../features/filter/filterSlice";

const Home = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const activeClass = "bg-indigo-500 text-white font-bold border-none";
  return (
    <div className="">
      <div className=" flex justify-end max-w-7xl mt-5">
        <button
          onClick={() => dispatch(toggle())}
          className="shadow-lg rounded-lg py-4 px-4 font-bold border border-black"
        >
          In Stock
        </button>
        <button
          onClick={() => dispatch(toggleBrands("amd"))}
          className="shadow-lg rounded-lg py-4 px-4 mx-2 font-bold border border-black"
        >
          AMD
        </button>
        <button
          onClick={() => dispatch(toggleBrands("intel"))}
          className="shadow-lg rounded-lg py-4 px-4 font-bold border border-black"
        >
          Intel
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
        {products.map((product) => (
          <ProductCard product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
