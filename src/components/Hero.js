import React from "react";
import OrderButton from "./OrderButton";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center bg-red-100">
      <div className="flex flex-col items-center w-full">
        <div>
          <h1 className="text-center text-2xl sm:text-3xl md:text-5xl   font-black m-8 py-12">
            Find your dream furniture!
          </h1>
        </div>
        <OrderButton />
      </div>
      <div className="m-5 flex flex-col items-center">
        <img
          className="rounded w-1/2 sm:w-full"
          src="https://images.unsplash.com/photo-1511974212900-b42a18e19eb8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fGZ1cm5pdHVyZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="furniture"
        />
      </div>
    </div>
  );
};

export default Hero;
