import { useState } from "react";

import { HiLocationMarker } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { IoMdArrowDropdown, IoMdMenu, IoMdClose } from "react-icons/io";
import { FaUserCircle, FaChevronDown, FaChevronUp } from "react-icons/fa";
// import Drawer from "./Drawer";
import UserMenu from "./UserMenu";
import { AiOutlineArrowLeft } from "react-icons/ai";

function SmNav({ isMenuOpen, setIsMenuOpen }) {
  return (
    <>
      <div className="w-full mx-auto lg:hidden">
        <div className="flex items-center justify-between w-full lg:hidden">
          <div className="flex items-center space-x-2">
            <AiOutlineArrowLeft className="font-semibold" />
            <div className="w-24">
              <img
                src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                alt=""
                className="w-full h-full"
              />
            </div>
          </div>
          <div className="flex space-x-2 text-3xl text-black">
            <button className="px-2 text-base text-white rounded-full bg-zomato-secondary">
              Use App
            </button>
            <FaUserCircle />
          </div>
        </div>
      </div>
    </>
  );
}
function LgNav({ user, isUserMenuOpen, setIsUserMenuOpen }) {
  const userHandler = () => {
    setIsUserMenuOpen((prev) => !prev);
  };

  return (
    <>
      <div className="container hidden px-20 mx-auto lg:inline">
        <div className="items-center justify-around hidden w-full gap-4 lg:flex">
          <div className="w-28">
            <img
              src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="flex items-center w-3/5 p-3 space-x-3 bg-white border border-gray-200 rounded shadow-md">
            <div className="flex items-center pr-2 space-x-2 border-r-2 border-gray-300">
              <span className="text-xl text-zomato-secondary">
                <HiLocationMarker />
              </span>
              <input
                type="text"
                placeholder="Bangalore"
                className="focus:outline-none"
              />
              <IoMdArrowDropdown />
            </div>
            <div className="flex items-center w-full space-x-2">
              <span className="text-xl text-gray-400">
                <FiSearch />
              </span>
              <input
                className="w-3/4 focus:outline-none"
                type="text"
                placeholder="Search for restaurant, cuisine or a dish"
              />
            </div>
          </div>
          {user ? (
            <div className="relative w-20">
              <button
                onClick={userHandler}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <FaUserCircle className="text-4xl text-zomato-secondary-500" />
                <p className="text-xl font-semibold text-gray-700">User</p>
                {isUserMenuOpen ? (
                  <FaChevronUp className="text-md" />
                ) : (
                  <FaChevronDown className="text-md " />
                )}
              </button>
              <div className="absolute transform -translate-x-12">
                {isUserMenuOpen && <UserMenu />}
              </div>
            </div>
          ) : (
            <div className="flex ml-4 space-x-4 ">
              <button className="text-xl text-gray-400 transition ease-in-out hover:text-gray-800">
                Login
              </button>
              <button className="text-xl text-gray-400 transition ease-in-out hover:text-gray-800 whitespace-nowrap">
                Sign Up
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

const RestaurantNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [user, setUser] = useState(true);
  return (
    <>
      <nav className="flex items-center w-full p-4 bg-white shadow-md lg:shadow-none">
        <SmNav
          user={user}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
        <LgNav
          user={user}
          isUserMenuOpen={isUserMenuOpen}
          setIsUserMenuOpen={setIsUserMenuOpen}
        />
      </nav>
    </>
  );
};

export default RestaurantNav;
