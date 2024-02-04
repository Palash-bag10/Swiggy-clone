import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurent, setListOfRestaurent] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData()
  },[])

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.572646&lng=88.36389500000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();

    console.log(json)
    setListOfRestaurent(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  return (listOfRestaurent.length === 0) ? (<Shimmer />) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
           className="search-box" 
           type="text" 
           value={searchText} 
           onChange={(e) => setSearchText(e.target.value)} />
          <button
           className="search-btn"
           onClick={() => {
            const filteredRestaurant = listOfRestaurent.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
            setFilteredRestaurants(filteredRestaurant)
           }}
           
           >Search</button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            const filterList = listOfRestaurent.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredRestaurants(filterList)
          }}
        >
          Top Rated Restaurent
        </button>
      </div>
      <div className="restaurant-container">
        {/* RestaurantCard */}
        {filteredRestaurants.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}>
            <RestaurantCard resObj={restaurant} />
          </Link>
        ))}
        {/* <RestaurantCard resName="KFC" cuisine="Burger, Fast Food" /> */}
      </div>
    </div>
  );
};

export default Body;
