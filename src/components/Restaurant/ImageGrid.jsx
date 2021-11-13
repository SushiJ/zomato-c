import React from "react";
import { AiOutlineCamera, AIOutlineCamera } from "react-icons/ai";

function ImageGrid(props) {
  return (
    <>
      <div className="w-full h-60 md:hidden">
        <img
          src={props.images.length && props.images[0]}
          alt="restaurant"
          className="object-cover w-full h-full rounded-lg"
        />
      </div>
      <div className="hidden w-full gap-1 h-96 md:flex">
        <div className="w-full h-full overflow-hidden rounded-lg">
          <img
            src={props.images.length && props.images[0]}
            alt="restaurant"
            className="object-cover w-full h-full transition duration-700 transform rounded-lg hover:scale-110"
          />
        </div>
        <div className="flex flex-col w-1/4 h-full gap-1 overflow-hidden rounded-lg">
          <img
            src={props.images.length > 1 && props.images[1]}
            alt="restaurant"
            className="object-cover w-full transition duration-700 transform rounded-lg h-2/4 hover:scale-110"
          />

          <img
            src={props.images.length > 2 && props.images[2]}
            alt="restaurant"
            className="object-cover w-full transition duration-700 transform rounded-lg h-2/4 hover:scale-110"
          />
        </div>
        <div className="flex flex-col w-1/4 h-full gap-1 overflow-hidden rounded-lg">
          <div className="relative w-full h-2/4">
            <img
              src={props.images.length > 3 && props.images[3]}
              alt="restaurant"
              className="object-cover w-full h-full rounded-lg"
            />
            <div className="absolute inset-0 w-full h-full bg-black rounded-lg bg-opacity-40" />
            <h4 className="absolute z-20 w-full h-full font-semibold text-center text-white inset-y-2/4">
              View Gallery
            </h4>
          </div>
          <div className="relative w-full rounded-lg h-2/4">
            <img
              src={props.images.length > 4 && props.images[4]}
              alt="restaurant"
              className="object-cover w-full h-full rounded-lg"
            />
            <div className="absolute inset-0 w-full h-full bg-gray-400 rounded-lg bg-opacity-90" />
            <div className="absolute z-20 flex flex-col items-center w-full h-full font-semibold text-center text-white inset-y-1/4">
              <div className="p-3 bg-black bg-opacity-50 rounded-full">
                <AiOutlineCamera />
              </div>
              <h4>View Gallery</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageGrid;
