import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("");
    console.log("Body Render");
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5563537&lng=77.3424926&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        const a = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListOfRestaurant(a);
        setFilteredRestaurant(a);
    };

    
    return listOfRestaurants.length === 0 ? ( 
        <Shimmer /> 
    ) : (
        
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" 
                    value={searchText} 
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }} 
                    />
                    <button onClick={() => {
                        console.log(searchText);
                        const filteredRestaurant = listOfRestaurants.filter(
                            (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredRestaurant(filteredRestaurant);
                    }}>Search</button>
                </div>
                <button 
                className="filter-btn"
                onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRatingString > 4.5
                    );
                    setFilteredRestaurant(filteredList);
                }}
                >Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                    filteredRestaurant.map(restaurant => 
                        (<RestaurantCard key={restaurant.info.id} resInfo={restaurant} />)
                    )
                }
                
            </div>
        </div>
    )
};

export default Body;