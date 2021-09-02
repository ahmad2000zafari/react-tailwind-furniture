import React from "react";
import { Link } from "react-router-dom";

const OrderButton = () => {
  return (
    <div
      className="flex justify-between items-center bg-yellow-500 rounded-full hover:bg-yellow-300 transition duration-300 ease-in-out 
      animate-bounce w-44 h-10 p-1 md:w-48 md:h-14"
    >
      <Link
        to="/"
        className="flex flex-row justify-between items-center w-full"
      >
        <h1 className="w-4/5 text-xl pl-4 font-bold">Order Now</h1>
        <svg
          className="w-8 sm:w-10 sm:h-6 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      </Link>
    </div>
  );
};

export default OrderButton;
