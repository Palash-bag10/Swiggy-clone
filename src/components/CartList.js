import { useDispatch } from "react-redux";
import { MENU_IMAGE_URL } from "../utils/constants";
import { removeItem } from "../utils/cartSlice";

const CartList = ({menuItems}) => {
    console.log("MENU", menuItems)

    const dispatch = useDispatch()

    const handleAddItem = (menuItem) => {
        dispatch(removeItem(menuItem.card.info.id))
    }


  return (
    <div className="flex flex-col justify-between  my-3 px-2 cursor-pointer">
      {menuItems.map((menuItem) => (
        <div
          key={menuItem.card.info.id}
          className="flex justify-between p-4 border-b-2 "
        >
          <div className="w-10/12 flex flex-col">
            <p className=" text-base font-semibold">
              {" "}
              {menuItem.card.info.name}{" "}
            </p>
            <p className=" text-base font-semibold">
              Rs.{" "}
              {menuItem.card.info.price / 100 ||
                menuItem.card.info.defaultPrice / 100}{" "}
            </p>
            <p className=" mt-3 text-sm font-light">
              {" "}
              {menuItem.card.info.description}{" "}
            </p>
          </div>
          {/* img */}
          <div className=" w-2/12 p-3">
            <img
              src={MENU_IMAGE_URL + menuItem.card.info.imageId}
              alt=""
              className=" rounded-lg "
            />
            <div className="absolute">
              <button
                onClick={() => handleAddItem(menuItem)}
                className=" bg-pink-600 text-white font-bold rounded-2xl drop-shadow-xl px-3 py-1 -translate-y-6 -translate-x-3.5"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartList;