// import { useState } from "react";
import { Link } from "react-router-dom";
// import { useContext } from 'react';
// import UserContext from '../utills/useContext';
import { useLocation } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";

const Title = () => {
  return (
    <img
      className="h-14 p-2 m-2"
      id="logo"
      alt="image"
      src="http://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4"
    />
  );
};

const Header = () => {
  //  const {user} = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  //const [isMobileMenuVisible,setIsMobileMenuVisible] = useState(false)
  console.log(cartItems);
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  return (
    <div className="relative">
      <nav className="bg-blue-400 shadow-lg  fixed top-0 left-0 right-0">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <Title />

            <ul className="items-center hidden  md:flex ">
              <li className=" text-white  text-xl uppercase p-2 m-2 hover:bg-yellow-600 hover:underline">
                <Link to="/" className="">
                  Home
                </Link>
              </li>
              <li className="text-white  uppercase text-xl p-2 m-2 hover:bg-yellow-600 hover:underline">
                <Link to="/about">About</Link>
              </li>
              <li className=" text-white uppercase text-xl p-2 m-2 hover:bg-yellow-600 hover:underline">
                <Link to="/contact">Contact</Link>
              </li>
              <li className=" text-white uppercase text-xl p-2 m-2 hover:bg-yellow-600 hover:underline">
                <Link to="/instamart">InstaMart</Link>
              </li>
              <li className=" text-white uppercase text-xl  p-2 m-2  hover:bg-yellow-600 hover:underline">
                <Link className="text-3xl" to="/cart">
                  <AiOutlineShoppingCart />
                </Link>
              </li>
            </ul>
            <div className="md:hidden flex items-center">
              <button className="outline-none mobile-menu-button">
                <svg
                  className=" w-6 h-6 text-white hover:text-yellow-500 "
                  x-show="!showMenu"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className={" mobile-menu  hidden"}>
          <ul className="">
            <li className="active">
              <a
                href="index.html"
                className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default Header;
