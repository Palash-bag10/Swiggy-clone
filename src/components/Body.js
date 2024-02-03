import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";

const Body = () => {
  const [listOfRestaurent, setListOfRestaurent] = useState(resObj);

  useEffect(() => {
    fetchData()
  },[])

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7705131&lng=88.32203849999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();

    console.log(json)
  }

  //   let listOfRestaurent = [
  //     {
  //       info: {
  //         id: "751465",
  //         name: "Koshe Kosha",
  //         cloudinaryImageId: "2d780b832bc0734426963dc0d22e89bb",
  //         costForTwo: "₹500 for two",
  //         cuisines: ["Indian", "North Indian", "Thalis", "Desserts"],
  //         avgRating: 4.4,
  //       },
  //     },
  //     {
  //       info: {
  //         id: "637552",
  //         name: "Chop Nize",
  //         cloudinaryImageId: "btztnlgd6tcurojmrrbl",
  //         costForTwo: "₹200 for two",
  //         cuisines: ["Chinese", "Fast Food"],
  //         avgRating: 3.9,
  //       },
  //     },
  //   ];

  return (
    <div className="body">
      <div className="filter">
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
        {listOfRestaurent.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resObj={restaurant} />
        ))}
        {/* <RestaurantCard resName="KFC" cuisine="Burger, Fast Food" /> */}
      </div>
    </div>
  );
};

export default Body;
