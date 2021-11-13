import React from "react";
import { TiStarFullOutline } from "react-icons/ti";

function RestaurantInfo(props) {
  return (
    <>
      <div className="my-4">
        <div className="flex flex-col-reverse justify-center gap-3 md:flex-row md:items-center md:justify-between">
          <h1 className="text-xl font-semibold md:text-3xl md:font-bold">
            {props.name}
          </h1>
          <div className="flex items-center gap-6 text-xs md:text-base">
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1 px-2 py-1 font-medium text-white bg-green-600 rounded">
                {props.restaurantRating}
                <TiStarFullOutline />
              </span>
              <span>
                <strong>2</strong>
                <p className="border-b border-dashed">Dining reviews</p>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1 px-2 py-1 font-medium text-white bg-green-600 rounded">
                {props.deliveryRating}
                <TiStarFullOutline />
              </span>
              <span>
                <strong>2</strong>
                <p className="border-b border-dashed">Delivery reviews</p>
              </span>
            </div>
          </div>
        </div>
        <div className="text-base text-gray-600 md:text-lg">
          <h3>{props.cuisine}</h3>
          <h3 className="text-gray-400">{props.address}</h3>
          <h3>
            <span className="text-yellow-500">Open Now</span> - 11am - 8pm
          </h3>
        </div>
      </div>
    </>
  );
}

export default RestaurantInfo;
