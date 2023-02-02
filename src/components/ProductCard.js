import React from "react";
import { BiListPlus } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addToCart, removeFromCart } from "../features/cart/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  return (
    <div className="shadow-lg rounded-3xl border relative  p-3 flex flex-col text-indigo-900">
      {pathname.includes("/cart") && (
        <div className=" absolute top-2 grid place-items-center text-white right-2 bg-indigo-400 w-8 h-8 rounded-full">
          <p>{product.quantity} </p>
        </div>
      )}
      <div className="h-52 w-52 mx-auto">
        <img src={product.image} alt={product.model} />
      </div>
      <h1 className="font-bold text-center">{product.model}</h1>
      <p className="text-center font-semibold mb-3">Rating: {product.rating}</p>
      <div className=" flex-1">
        <ul className="space-y-2">
          {product.keyFeature.map((feature, i) => {
            return (
              <li className="text-sm " key={i}>
                {feature}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="flex gap-2 mt-5">
        {!pathname.includes("/cart") && (
          <button
            className="bg-indigo-500 rounded-full py-1 px-2 flex-1 text-white text-bold"
            onClick={() => dispatch(addToCart(product))}
          >
            Add to cart
          </button>
        )}
        {!pathname.includes("/cart") && (
          <button
            title="Add to wishlist"
            className="bg-indigo-500  py-1 px-2 rounded-full"
          >
            <BiListPlus className="text-white" />
          </button>
        )}
        {pathname.includes("/cart") && (
          <button onClick={() => dispatch(removeFromCart(product))}
           className="bg-red-500 flex w-full text-white items-center justify-between px-6 py-1 px-2 rounded-full">
            <p>Remove</p>
            <RiDeleteBin6Line size={20} />
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
