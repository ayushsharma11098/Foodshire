import { CDN_URL } from "../utils/constants";
import star from "../../assets/star.svg";
import yellowstar from "../../assets/yellowstar.svg";

const RestaurantCard = ({ resData }) => {
  const { name, avgRating, cuisines, cloudinaryImageId, locality } = resData?.info;
  const { slaString } = resData?.info?.sla;
  const { header, subHeader } = resData?.info?.aggregatedDiscountInfoV3 || {};
  const discountInfo = header && subHeader ? `${header} ${subHeader}` : "";

  const isTopRated = avgRating >= 4.5;

  return (
    <div className="relative max-w-sm bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-lg border border-gray-200">
      
      {/* Top Rated Ribbon */}
      {isTopRated && (
        <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-2 py-1 rounded-bl-lg shadow-lg z-10">
          TOP RATED
        </div>
      )}

      {/* Restaurant Image */}
      <div className="relative">
        <img
          loading="lazy"
          src={cloudinaryImageId ? CDN_URL + cloudinaryImageId : "placeholder-image-url"}
          alt={name || "Restaurant Image"}
          className="w-full h-48 object-cover rounded-t-xl"
        />
        {discountInfo && (
          <p className="absolute bottom-0 left-0 bg-black bg-opacity-70 text-white text-xs px-3 py-1 rounded-tr-lg shadow-md">
            {discountInfo}
          </p>
        )}
      </div>

      {/* Card Content */}
      <div className="p-5">
        {/* Name */}
        <h3 className="text-lg font-bold text-gray-800 truncate">{name || "Restaurant Name"}</h3>
        
        {/* Rating, Time */}
        <div className="flex items-center gap-2 mt-2">
          <img
            src={avgRating >= 4 ? star : yellowstar}
            alt="Rating"
            className="w-5 h-5"
          />
          <h4 className="text-sm font-semibold text-gray-700">{avgRating || "N/A"}</h4>
          <span className="mx-1 text-gray-500">|</span>
          <h4 className="text-sm text-gray-500">{slaString || "Time Info"}</h4>
        </div>

        {/* Cuisines */}
        <p className="text-sm text-gray-500 mt-2 truncate">
          {cuisines?.length ? cuisines.join(", ") : "No cuisines available"}
        </p>

        {/* Location */}
        <p className="text-sm text-gray-500">{locality || "Unknown Location"}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
