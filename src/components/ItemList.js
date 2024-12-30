import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item)=>{
    //dispatch an action
    dispatch(addItem(item));
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out p-4"
        >
          <div className="relative">
            <img
              src={CDN_URL + item.card.info.imageId}
              alt={item.card.info.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
          </div>
          
          <div className="flex flex-col">
            <h3 className="font-semibold text-lg text-gray-800 mb-2">{item.card.info.name}</h3>
            <p className="text-sm text-gray-600 mb-4">{item.card.info.description}</p>
            <div className="flex justify-between items-center text-gray-700">
              <span className="font-medium text-xl">₹ {item.card.info.price / 100 || 100}</span>
              <button 
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700 transition-all duration-300"
              onClick={() => handleAddItem(item)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
