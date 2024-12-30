import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

// Debounce function limiting number of times search function is called
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

const Body = () => {
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  // Debounce the searchText for performance
  const debouncedSearchText = useDebounce(searchText, 400); //Debounce delay of 400ms

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    // Filter restaurants based on the debounced search text
    if (debouncedSearchText === "") {
      setFilteredRestaurant(listOfRestaurants); // Reset to all restaurants
    } else {
      const filtered = listOfRestaurants.filter((res) =>
        res.info.name.toLowerCase().includes(debouncedSearchText.toLowerCase())
      );
      setFilteredRestaurant(filtered);
    }
  }, [debouncedSearchText, listOfRestaurants]);

  const fetchData = async () => {
    const data = await fetch(
      "https://food-wagon-backend.onrender.com/api/restaurants?lat=28.5650&lng=77.3250"
    );
    const json = await data.json();
    const a = json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setListOfRestaurant(a);
    setFilteredRestaurant(a);
  };

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return (
      <h1 className="text-center text-xl mt-8 text-red-600">
        Looks like you're offline! Check Internet Connection!
      </h1>
    );
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="mt-0 bg-gradient-to-b from-blue-100 via-purple-200 to-pink-200 min-h-screen text-gray-800 py-5">
      <div className="flex flex-col sm:flex-row items-center justify-between px-6 gap-6">
        {/* Search Bar */}
        <div className="relative w-full sm:w-2/3 lg:w-1/2">
          <input
            className="w-full border-2 border-indigo-300 px-6 py-3 rounded-xl text-gray-800 shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
            type="text"
            placeholder="Search for restaurants..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <svg
            className="absolute top-1/2 right-3 transform -translate-y-1/2 text-indigo-500 w-5 h-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="16" y1="16" x2="21" y2="21" />
          </svg>
        </div>
      </div>

      {/* Grid Layout with enhanced card size */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-4 py-6">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
            className=""
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
