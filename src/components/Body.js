import { useEffect, useState } from "react";
import RestaurantCard, {withDiscountLable} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurent, setListOfRestaurent] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const userOnlineStatus = useOnlineStatus();

  const RestaurantCardDiscount = withDiscountLable(RestaurantCard)

  console.log("DATA RENDER", listOfRestaurent);

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

  if(userOnlineStatus === false) {
    return (
      <h1> Looks like you are offline! Please check your internet connection </h1>
    )
  }

  return (listOfRestaurent.length === 0) ? (<Shimmer />) : (
    <div className=" mt-5">
      <div className=" w-11/12 gap-x-10 flex items-center mx-auto justify-center p-5 mb-5">
        <div className=" flex gap-x-4">
          <input
           className=" outline-none bg-slate-200 rounded-md" 
           type="text" 
           value={searchText} 
           onChange={(e) => setSearchText(e.target.value)} />
          <button
           className=" bg-orange-400 px-3 py-1 text-lg font-medium text-white rounded-sm"
           onClick={() => {
            const filteredRestaurant = listOfRestaurent.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
            setFilteredRestaurants(filteredRestaurant)
           }}
           
           >Search</button>
        </div>

        <button
          className=" bg-indigo-400 px-3 py-1 text-lg font-medium text-white rounded-sm"
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
      <div className=" w-11/12 flex flex-wrap justify-center items-center mx-auto">
        {/* RestaurantCard */}
        {filteredRestaurants.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}>
            {
              restaurant.info.aggregatedDiscountInfoV3
              ? <RestaurantCardDiscount resObj={restaurant}/>
              : <RestaurantCard resObj={restaurant} />
            }
            
          </Link>
        ))}
      </div>
    </div> 
  );
};

export default Body;
