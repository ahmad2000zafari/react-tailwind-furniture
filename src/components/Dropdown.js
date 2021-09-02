import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? "grid grid-rows-4 text-center items-center bg-red-200"
          : "hidden"
      }
      onClick={toggle}
    >
      <Link className="p-4 font-semibold" to="/">
        Home
      </Link>
      <Link className="p-4 font-semibold" to="/menu">
        Menu
      </Link>
      <Link className="p-4 font-semibold" to="/about">
        About
      </Link>
      <Link className="p-4 font-semibold" to="/contact">
        Contact
      </Link>
    </div>
  );
};

export default Dropdown;
