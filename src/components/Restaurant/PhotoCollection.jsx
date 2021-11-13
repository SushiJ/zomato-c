import React from "react";

function PhotoCollection(props) {
  return (
    <>
      <div
        className="flex flex-col w-32 h-32 md:w-48 md:h-48"
        onClick={props.openViewer}
      >
        <div className="w-full h-full overflow-hidden rounded-lg">
          <img
            src={props.image}
            alt="restaurant"
            className="object-cover object-center w-full h-full transition transform rounded-lg duration-400 hover:scale-110"
          />
        </div>
      </div>
    </>
  );
}

export default PhotoCollection;
