import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId)

    if(resInfo === null) return <Shimmer/>

    const {name, cuisines, avgRating, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;


    return (
        <div>
            <h1>{name}</h1>
            <h2> {cuisines.join(", ")} </h2>
            <p> {costForTwoMessage} - {avgRating} star </p>
            <ul>
                {itemCards.map((item) => (
                    <li key={item.card.info.id}> 
                        {item.card.info.name} - {"Rs."} {item.card.info.price / 100 || item.card.info.defaultPrice / 100} 
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default RestaurantMenu;