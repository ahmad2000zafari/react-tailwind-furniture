import React from "react";
import DATA from "../data/data";
import ContentCard from "./ContentCard";
import OrderButton from "./OrderButton";

const Content = () => {
  const listItems = DATA.map((data) => (
    <ContentCard key={data.id} data={data} />
  ));
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="flex flex-col justify-center items-center w-full">
        {listItems}
      </div>
      <OrderButton />
    </div>
  );
};

export default Content;
