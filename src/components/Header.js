import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const data = useContext(UserContext);

  //Subscribing to store using selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className="bg-gray-900 text-white shadow-md">
  <div className="container mx-auto flex justify-between items-center py-4 px-6">
    {/* Logo */}
    <div className="flex items-center space-x-4">
      <Link to="/" className="flex items-center">
        <img
          src={LOGO_URL}
          alt="Logo"
          className="h-12 object-contain"
        />
        <h3 className="font-bold text-xl mb-0 ml-2 text-transparent bg-clip-text bg-gradient-to-t from-green-500 to-lime-600">
          Foodshire
        </h3>
      </Link>
    </div>

    {/* Navigation Links */}
    <nav className="hidden md:flex items-center space-x-8">
      <Link
        to="/"
        className="text-gray-200 hover:text-yellow-400 transition-colors text-sm font-medium tracking-wide"
      >
        Home
      </Link>
      <Link
        to="/about"
        className="text-gray-200 hover:text-yellow-400 transition-colors text-sm font-medium tracking-wide"
      >
        About Us
      </Link>
      <Link
        to="/contact"
        className="text-gray-200 hover:text-yellow-400 transition-colors text-sm font-medium tracking-wide"
      >
        Contact
      </Link>
      <Link
        to="/grocery"
        className="text-gray-200 hover:text-yellow-400 transition-colors text-sm font-medium tracking-wide"
      >
        Grocery
      </Link>
      <Link
        to="/cart"
        className="relative text-gray-200 hover:text-yellow-400 transition-colors text-sm font-medium tracking-wide"
      >
        Cart
        <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
          {cartItems.length}
        </span>
      </Link>
    </nav>

    {/* Online Status and User Info */}
    <div className="flex items-center space-x-6">
      <span
        className={`${
          onlineStatus ? "text-green-500" : "text-red-500"
        } text-xs font-medium uppercase tracking-widest`}
      >
        {onlineStatus ? "Online" : "Offline"}
      </span>
      <button
        className="px-5 py-2 border border-gray-300 rounded-full text-xs text-white font-semibold hover:bg-gray-700 transition-all uppercase tracking-wider"
        onClick={() => setBtnName(btnName === "Login" ? "Logout" : "Login")}
      >
        {btnName}
      </button>
      {data.loggedInUser && (
        <span className="text-gray-200 text-sm font-medium tracking-wide">
          {data.loggedInUser}
        </span>
      )}
    </div>

    {/* Mobile Menu Button */}
    <div className="md:hidden">
      <button className="text-white focus:outline-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
    </div>
  </div>
</header>

  );
};

export default Header;
