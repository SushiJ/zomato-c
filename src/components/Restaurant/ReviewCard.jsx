import React, { useState } from "react";
import { TiStarFullOutline } from "react-icons/ti";
import dayjs from "dayjs";

function ReviewCard(props) {
  return (
    <>
      <div className="flex flex-col gap-3 my-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full">
              <img
                src="https://b.zmtcdn.com/data/user_profile_pictures/d76/cc84183f68cc34027812bdf62585cd76.jpg"
                alt="avatar"
                className="object-center w-full h-full rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold">{props.userName}</h3>
              <small className="text-gray-500">
                5 Reviews &#8226; 3 Followers
              </small>
            </div>
          </div>
          <button className="px-2 py-1 border rounded-lg text-zomato-secondary border-zomato-secondary">
            Follow
          </button>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 px-2 py-1 text-xs text-white bg-green-700 rounded-lg">
              3 <TiStarFullOutline />
            </span>
            <h5 className="uppercase font-regular">
              {props.isRestaurantReview ? "Dining" : "Delivery"}
            </h5>
            <small className="text-gray-500">
              {dayjs(props.createdAt).format("MMM DD, YYYY")}
            </small>
          </div>
          <div className="w-full">
            <p className="w-full text-base font-light text-gray-600">
              {props.reviewText}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReviewCard;
