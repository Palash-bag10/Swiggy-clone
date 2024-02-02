import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";

const Body = () => {
  return (
    <div className="body">
      <div className="search"> Search </div>
      <div className="restaurant-container">
        {/* RestaurantCard */}
        {resObj.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resObj={restaurant} />
        ))}
        {/* <RestaurantCard resName="KFC" cuisine="Burger, Fast Food" /> */}
      </div>
    </div>
  );
};

export default Body;