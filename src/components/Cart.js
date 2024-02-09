import { useSelector } from "react-redux";
import MenuList from "./MenuList";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className=" w-11/12 flex flex-col justify-between mx-auto items-center  my-10 px-2 cursor-pointer">
            <div className="mb-4">
                <h2 className=" text-2xl font-bold ">Cart</h2>
            </div>
            <div className=" w-1/2">
                <MenuList menuItems={cartItems}/>
            </div>
        </div>
    )
}

export default Cart;