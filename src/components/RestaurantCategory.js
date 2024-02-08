import { useState } from "react";
import MenuList from "./MenuList";

const RestaurantCategory = ({menuData, menuItems, setShowIndex}) => {

    const handleClick = () => {
        setShowIndex();
    }

    return (
        <div className=" w-full flex flex-col border-b-8 border-gray-200 ">
            {/* Header */}
            <div 
            onClick={handleClick}
            className="flex justify-between  my-3 px-2 cursor-pointer">
                <span className=" text-lg font-bold"> {menuData.title} ({menuData.itemCards.length}) </span>
                <span> {menuItems ? "⏫" : "⏬"} </span>
            </div>

            {/* Body */}
            <div >
                {menuItems && <MenuList menuItems={menuData.itemCards}/>}
            </div>
        </div>
    )
}

export default RestaurantCategory;