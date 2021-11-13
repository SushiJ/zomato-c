import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import ReactStars from "react-rating-stars-component";

function FoodItem(props) {
  return (
    <>
      <div className="flex items-start gap-2 py-2">
        {props?.image && (
          <div className="w-3/12 h-24 md:h-28 lg:h-36 md:px-3">
            <img
              src={props.image}
              alt="food item"
              className="w-full h-auto rounded-lg md:h-full"
            />
          </div>
        )}
        <div className="flex flex-col w-3/4 gap-1 md:w-7/12">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">{props?.name}</h3>
            <button className="flex items-center gap-2 px-2 py-1 border rounded-lg md:hidden text-zomato-secondary border-zomato-secondary bg-zomato-secondary">
              <AiOutlinePlus /> Add
            </button>
          </div>
          <ReactStars count={5} value={props?.rating || 0} />
          <h5>$ {props?.price}</h5>
          <p className="truncate">{props?.descript}</p>
        </div>
        <div className="hidden w-2/12 md:block">
          <button className="flex items-center gap-2 px-2 py-1 border rounded-lg text-zomato-secondary border-zomato-secondary bg-zomato-50">
            <AiOutlinePlus /> Add
          </button>
        </div>
      </div>
    </>
  );
}

export default FoodItem;
