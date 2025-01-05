import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import resList from "../utils/mockData";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Body = () => {


  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  //searchtext
  const [searchText, setSearchText] = useState(" ");


  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();

    

    setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

  }

  // console.log(filteredRestaurants)


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
             setFilteredRestaurants(listOfRestaurants.filter((res) => res.info.avgRating > 4.3));
          }}>
          Top rated restaurant
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) =>
        (
         <Link key={restaurant.info?.id} to={"/restaurant/"+restaurant.info?.id}><RestaurantCard  resData={restaurant} /></Link>
        )
        )}
      </div>
    </div>
  )
}

export default Body;