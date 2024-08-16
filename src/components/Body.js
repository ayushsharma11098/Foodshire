import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurant] = useState(resList);


    return (
        <div className="body">
            <div className="filter">
                <button 
                className="filter-btn"
                onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRatingString > 4.5
                    );
                    setListOfRestaurant(filteredList);
                }}
                >Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurants.map(restaurant => 
                        (<RestaurantCard key={restaurant.info.id} resInfo={restaurant} />)
                    )
                }
                
            </div>
        </div>
    )
};

export default Body;