import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurent, setListOfRestaurent] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData()
  },[])

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7705131&lng=88.32203849999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();

    console.log(json)
    setListOfRestaurent(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
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
            setFilteredRestaurant(filteredRestaurant)
           }}
           
           >Search</button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            const filterList = listOfRestaurent.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurent(filterList)
          }}
        >
          Top Rated Restaurent
        </button>
      </div>
      <div className="restaurant-container">
        {/* RestaurantCard */}
        {filteredRestaurant.map((restaurant, i) => (
          <RestaurantCard key={i} resObj={restaurant} />
        ))}
        {/* <RestaurantCard resName="KFC" cuisine="Burger, Fast Food" /> */}
      </div>
    </div>
  );
};

export default Body;
