import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    },[])

    const fetchMenu = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.572646&lng=88.36389500000001&restaurantId=25140&catalog_qa=undefined&submitAction=ENTER");

        const json = await data.json();

        console.log(json);
        setResInfo(json.data);

    }

    if(resInfo === null) return <Shimmer/>

    const {name, cuisines, avgRating, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;


    return (
        <div>
            <h1>{name}</h1>
            <h2> {cuisines.join(", ")} </h2>
            <p> {costForTwoMessage} - {avgRating} star </p>
            <ul>
                {itemCards.map((item) => (
                    <li key={item.card.info.id}> 
                        {item.card.info.name} - {"Rs."} {item.card.info.price / 100 || item.card.info.defaultPrice / 100} 
                        {/* <p>  </p>  */}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default RestaurantMenu;