import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { MENU_TYPE } from "../utils/constants";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { resInfo, loading, error } = useRestaurantMenu(resId);  // Destructure the hook return

  const [showIndex, setShowIndex] = useState(null);

  if (loading) return <Shimmer />;  // Show loading spinner
  if (error) return <div>Error: {error}</div>;  // Show error message if API fails

  if (resInfo == null) return <Shimmer />;  // Fallback if data is empty

  const {
    name,
    cuisines,
    avgRating,
    costForTwoMessage,
    locality,
    totalRatingsString,
    cloudinaryImageId,
    availability,
  } = resInfo?.data?.cards[2]?.card?.card?.info;

  const itemCards = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards ||
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards ||
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[3]?.card?.card?.itemCards ||
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[0]?.card?.card?.itemCards;

  const categories = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) => c.card?.card?.["@type"] === MENU_TYPE
  );

  const isOpen = availability?.opened ? "Open Now" : "Closed";

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      {/* Restaurant Header */}
      <div className="text-center max-w-4xl mx-auto mb-8">
        <h1 className="font-extrabold text-4xl text-indigo-800 mb-2">{name}</h1>
        <p className="font-medium text-lg text-gray-700">{cuisines.join(", ")} | {costForTwoMessage}</p>
        <p className="mt-2 text-gray-500 text-sm">{locality}</p>
        <p className="mt-1 text-gray-400 text-sm">{totalRatingsString}</p>

        {/* Restaurant Status (Open/Closed) */}
        <div className="mt-4 text-sm text-gray-600">
          <span className={`font-medium ${availability?.opened ? 'text-green-500' : 'text-red-500'}`}>{isOpen}</span>
        </div>
      </div>

      {/* Category Listings */}
      <div className="space-y-6">
        {categories?.map((category, index) => (
          <RestaurantCategory
            key={category.card.card.title}
            data={category?.card?.card}
            showItems={index === showIndex}
            setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
