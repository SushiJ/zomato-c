import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineArrowLeft } from "react-icons/ai";

function CheckoutNavbar() {
  return (
    <>
      <nav className="flex items-center w-full px-4 py-2 bg-white shadow-md lg-shadow-none">
        <div className="container px-4 mx-auto md:px-20">
          <div className="flex items-center justify-between w-full">
            <AiOutlineArrowLeft />
            <div className="flex gap-3">
              <div className="w-28">
                <img
                  src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
                  alt="logo"
                  className="w-full h-full"
                />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 p-1 border border-gray-300 rounded-full text-zomato-secondary">
                <img
                  src="https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/87-512.png"
                  alt="Aditya Gusain"
                  className="object-cover object-center w-full h-full rounded-full"
                />
              </div>
              Aditya Gusain
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default CheckoutNavbar;
