import React, { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems,setShowIndex, dummy }) => {

  // console.log(dummy);

  const handleClick = () => {
    setShowIndex();
  };
  
  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
      {/*accordian Header */}
      <div className="flex justify-between cursor-pointer" onClick={handleClick}>
        <span className="font-bold">
          {data.title} ({data.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
      {/*accordian body*/}
    { showItems && <ItemList items={data.itemCards} dummy={dummy}></ItemList>}
    </div>
  );
};

export default RestaurantCategory;
