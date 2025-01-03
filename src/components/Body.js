import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import resList from "../utils/mockData";
import { useState } from "react";
import { useEffect } from "react";

const Body = () => {


  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  //searchtext
  const [searchText, setSearchText] = useState(" ");


  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=9.9361698&lng=76.35721649999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();

    

    setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

  }




  return listOfRestaurants.length == 0 ? <Shimmer /> : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(e) => {
            setSearchText(e.target.value);
            
          }} />
          <button onClick={() => {
            //fliter login
           
            const filteredRestaurant = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setFilteredRestaurants(filteredRestaurant);

          }}>search</button>
        </div>
        <button className="filter-btn"
          onClick={() => {
            //filter logic
            setListOfRestaurant(listOfRestaurants.filter((res) => res.info.avgRating > 4));
          }}>
          Top rated restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) =>
        (
          <RestaurantCard key={restaurant.info?.id} resData={restaurant} />
        )
        )}
      </div>
    </div>
  )
}

export default Body;