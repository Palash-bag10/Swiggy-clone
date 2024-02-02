import { CDN_URL } from "../utils/constants";

const styleCard = {
  backgroundColor: "lightgreen",
};

const RestaurantCard = ({ resObj }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resObj?.info;
//   const { deliveryTime } = resObj?.info?.sla;

  return (
    <div className="restaurant-card" style={styleCard}>
      <img
        src={ CDN_URL + cloudinaryImageId}
        alt="res-logo"
        className="res-logo"
      />
      <h3> {name} </h3>
      <h5> {cuisines.join(", ")} </h5>
      <h5>{avgRating} stars</h5>
      <h5>{costForTwo}</h5>
      {/* <h5>{deliveryTime} mins</h5> */}
    </div>
  );
};

export default RestaurantCard;
