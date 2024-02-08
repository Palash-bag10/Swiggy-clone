import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {

    const [showIndex, setShowIndex] = useState(null)

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId)

    if(resInfo === null) return <Shimmer/>

    const {name, cuisines, avgRating, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    // console.log("MENU DATA", resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (category) => category?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )

    // console.log("CATEGORIES: ", categories)

    return (
        <div className=" w-11/12 border flex flex-col border-black justify-center items-center mx-auto my-6">
            <div className=" w-2/3 flex justify-between border border-fuchsia-500 mx-5 my-5 ">
                <div className=" space-y-2 px-4 py-2">
                    <h1 className=" text-lg font-bold">{name}</h1>
                    <h2 className=" text-sm font-normal text-gray-500"> {cuisines.join(", ")} </h2>
                    <h3 className=" text-lg font-bold"> {costForTwoMessage} </h3>
                </div>
                <div className=" space-y-2 px-4 py-2">
                    <p className=" text-lg font-bold text-green-600">{avgRating} star </p>
                </div>
            </div>

            {/* CATEGORIES */}
            <div className="w-2/3 flex flex-col items-center border border-fuchsia-500 mb-5">
                {categories.map((category, index) => (
                    <RestaurantCategory
                     key={category?.card?.card?.title}
                     menuData={category.card.card}
                     menuItems={index === showIndex ? true : false}
                     setShowIndex={() => setShowIndex(index)}
                    />
                ))}
            </div>
        </div>
    )
}

export default RestaurantMenu;