import { useDispatch, useSelector } from "react-redux";
import MenuList from "./MenuList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart())
    }

    return (
        <div className=" w-11/12 flex flex-col justify-between mx-auto items-center  my-10 px-2 cursor-pointer">
            <div className="mb-4">
                <h2 className=" text-2xl font-bold ">Cart</h2>
            </div>
            <div className=" w-1/2 flex flex-col items-center justify-center">
                <button 
                onClick={handleClearCart}
                className=" bg-orange-600 text-white text-xl font-semibold px-2 py-1 rounded-md">Clear Cart</button>
                {cartItems.length === 0 
                    ? (<h3>Your Cart is Empty</h3>) 
                    : (<MenuList menuItems={cartItems}/>)
                }
            </div>
        </div>
    )
}

export default Cart;