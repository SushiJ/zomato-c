import React from "react";
import FoodItem from "./FoodItem";

function FoodList(props) {
  return (
    <>
      <div>
        <h2 className="sticky top-0 z-10 w-full px-2 py-1 text-xl font-semibold bg-white">
          {props.name}
        </h2>
        <div className="flex flex-col gap-3">
          {props.items.map((item) => (
            <FoodItem key={item._id} {...item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default FoodList;
