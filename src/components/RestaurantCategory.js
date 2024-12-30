import { useState } from "react";
import ItemList from "./ItemList";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";  // For modern arrows

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {

  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div className="my-6 bg-white rounded-xl shadow-xl overflow-hidden">
      <div 
        className="flex justify-between items-center p-4 cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-200 rounded-t-xl"
        onClick={handleClick}
      >
        <span className="font-semibold text-xl text-gray-800">{data.title} ({data.itemCards.length})</span>
        <span className="text-gray-600">
          {showItems ? <FaChevronUp size={20} /> : <FaChevronDown size={20} />}
        </span>
      </div>

      {/* Smoothly reveal items with animations */}
      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
