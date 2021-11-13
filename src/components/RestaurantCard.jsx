import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AiTwotoneStar } from "react-icons/ai";

import { useDispatch } from "react-redux";
import { getImage } from "../Redux/reducer/image/image.actions";

function RestaurantCard(props) {
  const [image, setImage] = useState({
    images: [],
  });

  const dispatch = useDispatch();

  useEffect(
    (props) => {
      props.photos &&
        dispatch(getImage(props.photos)).then((data) =>
          setImage(data.payload.image)
        );
    },
    [props.photos]
  );

  const [isPro] = useState(true);
  const [isOff] = useState(true);

  return (
    <Link to={`/restaurant/123`} className="w-full md:w-1/2 lg:w-1/3">
      <div className="p-4 mb-4 transition duration-700 ease-in-out bg-white rounded-2xl hover:shadow-lg ">
        <div className="relative w-full h-56 lg:h-64">
          <div className="absolute flex items-end justify-between w-full bottom-4">
            <div className="flex flex-col items-start gap-2">
              {props.isPro && (
                <span className="px-2 py-1 text-sm text-white rounded bg-zomato-secondary">
                  Pro extra 10% off
                </span>
              )}

              {props.isOff && (
                <span className="px-2 py-1 text-sm text-white rounded bg-zomato-secondary">
                  $20 OFF
                </span>
              )}
            </div>
            <span className="p-1 mr-3 bg-white bg-opacity-75 rounded">
              {props.durationOfDelivery} min
            </span>
          </div>
          <img
            src={image.images.length && image.images[0].location}
            alt="food"
            className="object-cover object-center w-full h-full rounded-2xl"
          />
        </div>
        <div className="flex flex-col gap-2 my-2">
          <div className="flex items-center justify-between">
            <h4 className="text-xl font-medium">The Indo-Asian Kitchen</h4>
            <span className="flex items-center p-1 text-sm text-white bg-green-800 rounded">
              {props.restaurantReviewValue} <AiTwotoneStar />
            </span>
          </div>
          <div className="flex items-center justify-between text-gray-500">
            <p>{props.cuisine.join(", ")}</p>
            <p>{props.averageCost} for one </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default RestaurantCard;
