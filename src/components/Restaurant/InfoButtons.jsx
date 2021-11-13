import clsx from "classnames";
import React from "react";

const InfoButtons = (props) => {
  return (
    <React.Fragment>
      <button
        className={clsx(
          "flex items-center gap-3 border border-zomato-secondary px-4 py-2 rounded-lg",
          {
            "bg-zomato-secondary text-white": props.isActive,
          }
        )}
      >
        {props.children}
      </button>
    </React.Fragment>
  );
};

export default InfoButtons;
