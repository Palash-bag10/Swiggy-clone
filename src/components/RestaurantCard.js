import { CDN_URL } from "../utils/constants";

const styleCard = {
  backgroundColor: "#EEEDEB",
};

const RestaurantCard = ({ resObj }) => {
  console.log(resObj?.info)
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = resObj?.info;
  //   const { deliveryTime } = resObj?.info?.sla;

  return (
    <div 
    data-testid="resCard"
    className=" h-[300px] w-[200px] p-4 m-2 flex flex-col items-center justify-center gap-y-5 rounded overflow-hidden shadow-lg" style={styleCard}>
      <div className=" w-[100px] ">
        <img src={CDN_URL + cloudinaryImageId} alt="res-logo" className=" w-full aspect-square object-cover"/>
      </div>
      <div className="">
        <h3 className=" font-bold text-[18px] text-gray-700"> {name} </h3>
        <h5 className=" font-semibold text-[16px] text-green-600">{avgRating} stars</h5>
        <h5 className=" font-light text-sm text-gray-700"> {cuisines.join(", ")} </h5>
        <h5 className=" uppercase">{costForTwo}</h5>
        {/* <h5>{deliveryTime} mins</h5> */}
      </div>
    </div>
  );
};

  // Higher Order Component:
  // It takes a component and return enhanced component (RestaurentCardDiscount)

  export const withDiscountLable = (RestaurantCard) => {
    return (props) => {
      return(
        <div>
          <label className=" absolute bg-green-600 text-white p-1 rounded-lg text-[12px] font-bold"> FLAT DEAL </label>
          <RestaurantCard {...props}/>
        </div>
      )
    }
  }


export default RestaurantCard;
