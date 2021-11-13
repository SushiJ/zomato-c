import React, { useState } from "react";
import { BsShieldLockFill } from "react-icons/bs";

// component
import FoodItem from "../components/Cart/FoodItem";
import AddressList from "../components/Checkout/AddressList";

function Checkout() {
  const [address] = useState([
    {
      name: "Home",
      address: "123 Main St, New York, NY 10001",
    },
    {
      name: "Work",
      address: "123243 Main St, NCR, New Delhi",
    },
    {
      name: "Gym",
      address: "123 Main St, New York, NY 10001",
    },
  ]);

  const [foods] = useState([
    {
      image:
        "https://b.zmtcdn.com/data/dish_photos/87c/153beb91af9f43e157f3d6fd6ea2587c.jpg?output-format=webp",
      name: "Chilli Paneer Gravy",
      price: "157.50",
      quantity: 4,
      _id: 1,
    },
    {
      image:
        "https://b.zmtcdn.com/data/dish_photos/87c/153beb91af9f43e157f3d6fd6ea2587c.jpg?output-format=webp",
      name: "Chilli Paneer Gravy",
      price: "157.50",
      quantity: 2,
      _id: 2,
    },
  ]);

  return (
    <div className="flex flex-col items-center gap-3 my-10">
      <h1 className="text-xl font-bold text-center md:text-2xl">Checkout</h1>
      <div className="flex flex-col items-center w-full py-3 pt-10 bg-white border-2 border-black rounded-lg shadow-lg md:w-3/5">
        <h3 className="text-lg font-semibold">Summary</h3>
        <div className="flex flex-col items-center w-full gap-2">
          <h5 className="text-base tracking-wider">ORDER FROM</h5>
          <div className="flex flex-col items-center w-full text-gray-400">
            <h4>Domino's Pizza</h4>
            <small>
              5/76, West Ajmal Khan, Padam Singh, Karol Bagh, New Delhi
            </small>
          </div>
          <div className="flex flex-col w-full h-32 h-full gap-2 px-4 my-4 md:w-3/5">
            {foods.map((food) => (
              <FoodItem {...food} key={food._id} />
            ))}
          </div>
          <div className="flex flex-col w-full gap-3 md:w-3/5">
            <h4 className="text-xl font-semibold">Choose Address</h4>
            <AddressList address={address} />
          </div>
        </div>
        <button className="flex items-center justify-center w-full gap-2 px-0 px-4 my-4 text-lg font-medium text-white rounded-lg md:my-8 md:w-4/5 h-14 bg-zomato-secondary">
          Pay Securely <BsShieldLockFill />
        </button>
      </div>
    </div>
  );
}
export default Checkout;
