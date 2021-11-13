import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import MenuListContainer from "./MenuListContainer";

function FloatMenuBtn(props) {
  const [isClicked, setIsClicked] = useState(false);

  const toggleMenu = () => setIsClicked((prev) => !prev);

  return (
    <>
      <div className="fixed z-30 flex flex-col items-end w-8/12 bottom-2 right-2 md:hidden">
        {isClicked && (
          <div className="h-48 p-3 overflow-y-scroll bg-white">
            {props.menu.map((item) => (
              <MenuListContainer
                {...item}
                key={item._id}
                onClickHandler={props.onClickHandler}
                selected={props.selected}
              />
            ))}
          </div>
        )}
        <button
          onClick={toggleMenu}
          className="flex items-center gap-2 px-3 py-2 text-white bg-yellow-900 rounded-full md:hidden"
        >
          {isClicked ? <MdClose /> : <HiMenu />} Menu
        </button>
      </div>
    </>
  );
}

export default FloatMenuBtn;
