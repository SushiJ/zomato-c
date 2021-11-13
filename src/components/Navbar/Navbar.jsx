import React, { useState } from "react";

// Icons
import { FaUserAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { RiSearch2Line } from "react-icons/ri";

// components
import SignUp from "../Auth/SignUp";
import SignIn from "../Auth/SignIn";

function MobileNav({
  user,
  isDropdownOpen,
  setIsDropdownOpen,
  signIn,
  signUp,
}) {
  return (
    <>
      <div className="flex items-center justify-between w-full lg:hidden">
        <div className="w-28">
          <img
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
            alt=""
            className="w-full h-full"
          />
        </div>
        <div className="relative flex items-center gap-3">
          <button className="px-3 py-2 text-white rounded-full bg-zomato-secondary ">
            Use App
          </button>
          {user ? (
            <>
              <div
                onClick={() => setIsDropdownOpen((prev) => !prev)}
                className="p-1 border border-gray-300 rounded-full text-zomato-secondary w-14 h-14"
              >
                <img
                  src="https://c8.alamy.com/comp/TC2FPE/young-man-avatar-cartoon-character-profile-picture-TC2FPE.jpg"
                  alt=""
                  className="object-cover w-full h-full rounded-full"
                />
              </div>
              {isDropdownOpen && (
                <div className="absolute z-30 flex-col w-32 gap-2 py-3 pl-3 pr-3 bg-white border-2 border-gray-300 rounded shadow-lg top-16 right-1">
                  <button>Sign Out</button>
                </div>
              )}
            </>
          ) : (
            <>
              <span
                onClick={() => setIsDropdownOpen((prev) => !prev)}
                className="p-1 border border-gray-300 rounded-full text-zomato-secondary"
              >
                <FaUserAlt />
              </span>
              {isDropdownOpen && (
                <div className="absolute flex flex-col w-full gap-2 py-3 bg-white shadow-lg -bottom-20 -right-4">
                  <button onClick={signIn}>Sign In</button>
                  <button onClick={signUp}>Sign Out</button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}

function LargeNav({ user, isDropdownOpen, setIsDropdownOpen, signIn, signUp }) {
  return (
    <>
      <div className="container hidden px-32 mx-auto lg:inline">
        <div className="items-center justify-around hidden w-full gap-4 lg:flex ">
          <div className="w-28">
            <img
              src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
              alt="logo"
              className="w-full h-full"
            />
          </div>
          <div className="flex items-center w-3/4 gap-3 p-3 bg-white border border-gray-200 rounded shadow-md">
            <div className="flex items-center gap-2 pr-2 border-r-2 border-gray-300">
              <span className="text-zomato-secondary">
                <HiLocationMarker />
              </span>
              <input
                type="text"
                placeholder="Delhi NCR"
                className="focus:outline-none"
              />
              <IoMdArrowDropdown />
            </div>
            <div className="flex items-center w-full gap-2">
              <RiSearch2Line />
              <input
                type="text"
                placeholder="Search for restaurantm cusine or a dish"
                className="w-full focus:outline-none"
              />
            </div>
          </div>
          {user ? (
            <div className="relative w-14">
              <div
                onClick={() => setIsDropdownOpen((prev) => !prev)}
                className="w-full p-1 border border-gray-300 rounded-full text-zomato-secondary h-14"
              >
                <img
                  src="https://c8.alamy.com/comp/TC2FPE/young-man-avatar-cartoon-character-profile-picture-TC2FPE.jpg"
                  className="object-cover w-full h-full rounded-full"
                />
              </div>
              {isDropdownOpen && (
                <div className="absolute z-30 flex-col w-32 gap-2 py-3 pl-3 pr-3 bg-white border-2 border-gray-300 rounded shadow-lg top-20">
                  <button>Logout</button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex gap-6 ml-28">
              <button
                onClick={signIn}
                className="text-xl text-gray-500 hover:text-gray-800"
              >
                Login
              </button>
              <button
                onClick={signUp}
                className="text-xl text-gray-500 hover:text-gray-800"
              >
                Signup
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

function Navbar() {
  const [user, setUser] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  const [openSignin, setOpenSignin] = useState(false);

  const openSignInModal = () => {
    setOpenSignin(true);
  };

  const openSignUpModal = () => {
    setOpenSignup(true);
  };

  return (
    <>
      <SignIn isOpen={openSignin} setIsOpen={setOpenSignin} />
      <SignUp isOpen={openSignup} setIsOpen={setOpenSignup} />

      <nav className="flex items-center w-full p-4 bg-white shadow-md lg:shadow-none">
        <MobileNav
          user={user}
          isDropdownOpen={isDropdownOpen}
          setIsDropdownOpen={setIsDropdownOpen}
          signIn={openSignInModal}
          signUp={openSignUpModal}
        />
        <LargeNav
          user={user}
          isDropdownOpen={isDropdownOpen}
          setIsDropdownOpen={setIsDropdownOpen}
          signIn={openSignInModal}
          signUp={openSignUpModal}
        />
      </nav>
    </>
  );
}

export default Navbar;
