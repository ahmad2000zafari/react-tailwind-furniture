import React from "react";

const ContentCard = (props) => {
  return (
    <div className="flex flex-col justify-center items-center bg-white font-mono my-12 sm:my-20 w-5/6 md:w-2/3 lg:w-1/2 border shadow-lg rounded-xl">
      <div className="w-full rounded-xl">
        <img
          src={props.data.image}
          alt="furniture"
          className="object-fill w-full mb-10 rounded-t-xl"
        />
      </div>
      <div className="flex flex-col justify-center items-center mt-6 mb-12">
        <h2 className="text-center text-2xl mb-2">{props.data.description}</h2>
        <span className="text-lg">{props.data.price}</span>
      </div>
    </div>
  );
};

export default ContentCard;
