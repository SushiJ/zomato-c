import React from "react";
import MenuCategory from "./MenuCategory";

function MenuListContainer(props) {
  return (
    <>
      <div className="flex flex-col w-full gap-3">
        <MenuCategory
          name={props.name}
          items={props.items}
          onClickHandler={props.onClickHandler}
          isActive={props.selected === props.name}
        />
      </div>
    </>
  );
}

export default MenuListContainer;