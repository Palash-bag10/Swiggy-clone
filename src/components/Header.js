import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const userOnlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext)

  // Subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className=" flex items-center justify-center shadow-md">
      <div className=" w-11/12 flex  items-center justify-between">
        <div>
          <img
            className="logo"
            src={LOGO_URL}
            alt="app logo"
            width={160}
            height={32}
          />
        </div>
        <div >
          <ul className=" flex items-center gap-x-8 text-lg">
            <li> Online Status: {userOnlineStatus ? "✅" : "🔴"} </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/grocery">Grocery</Link>
            </li>
            <li>
              <Link to="/cart">Cart({cartItems.length})</Link>
            </li>
            <button
              className=" bg-orange-400 px-4 py-2 rounded-md font-medium text-yellow-50"
              onClick={() => {
                loginBtn === "Login"
                  ? setLoginBtn("Logout")
                  : setLoginBtn("Login");
              }}
            >
              {loginBtn}
            </button>
            <li> {loggedInUser} </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
