import React from "react";
import { TiStar } from "react-icons/ti";

function MenuSimilarRestaurantCard(props) {
  return (
    <>
      <div className="mx-2">
        <div className="bg-white rounded-md shadow">
          <div className="w-full h-48">
            <img
              src={props.image}
              alt="food"
              className="object-cover object-center w-full h-full rounded-t-md"
            />
          </div>
          <div className="flex flex-col gap-2 p-3">
            <h3 className="text-lg font-semibold">{props.title}</h3>
            <div className="flex items-center justify-between text-sm">
              <span className="flex items-center gap-1">
                <span className="flex items-center gap-1 p-1 text-white bg-green-700 rounded">
                  30 <TiStar />
                </span>
                Dining
              </span>
            </div>
            <h4>Street Food, Beverages, Tea</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuSimilarRestaurantCard;
