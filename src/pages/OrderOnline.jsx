import React, { useState } from "react";
import { AiOutlineCompass } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import FloatMenuBtn from "../components/Restaurant/Order-Online/FloatMenuBtn";
import FoodList from "../components/Restaurant/Order-Online/FoodList";

// Component: MenuListContainer
import MenuListContainer from "../components/Restaurant/Order-Online/MenuListContainer";

function OrderOnline() {
  const [menu, setMenu] = useState([
    {
      name: "Recommended",
      items: [
        {
          image:
            "https://b.zmtcdn.com/data/dish_photos/87c/153beb91af9f43e157f3d6fd6ea2587c.jpg?output-format=webp",
          name: "Chilli Paneer Gravy",
          price: "157.50",
          rating: 4,
          descript:
            "Chicken NoodelsChicken Fried Rice+Chilli ChickenChicken Manchurian+Chilli PotatoHoney Chilli Potato+Chicken Chilli Garlic Momos [2 ... read more",
        },
        {
          image:
            "https://b.zmtcdn.com/data/dish_photos/87c/153beb91af9f43e157f3d6fd6ea2587c.jpg?output-format=webp",
          name: "Chilli Paneer Gravy",
          price: "157.50",
          rating: 4,
          descript:
            "Chicken NoodelsChicken Fried Rice+Chilli ChickenChicken Manchurian+Chilli PotatoHoney Chilli Potato+Chicken Chilli Garlic Momos [2 ... read more",
        },
        {
          image:
            "https://b.zmtcdn.com/data/dish_photos/87c/153beb91af9f43e157f3d6fd6ea2587c.jpg?output-format=webp",
          name: "Chilli Paneer Gravy",
          price: "157.50",
          rating: 4,
          descript:
            "Chicken NoodelsChicken Fried Rice+Chilli ChickenChicken Manchurian+Chilli PotatoHoney Chilli Potato+Chicken Chilli Garlic Momos [2 ... read more",
        },
      ],
    },
    {
      name: "Combos",
      items: [
        {
          image:
            "https://b.zmtcdn.com/data/dish_photos/87c/153beb91af9f43e157f3d6fd6ea2587c.jpg?output-format=webp",
          name: "Chilli Paneer Gravy",
          price: "157.50",
          rating: 4,
          descript:
            "Chicken NoodelsChicken Fried Rice+Chilli ChickenChicken Manchurian+Chilli PotatoHoney Chilli Potato+Chicken Chilli Garlic Momos [2 ... read more",
        },
        {
          image:
            "https://b.zmtcdn.com/data/dish_photos/87c/153beb91af9f43e157f3d6fd6ea2587c.jpg?output-format=webp",
          name: "Chilli Paneer Gravy",
          price: "157.50",
          rating: 4,
          descript:
            "Chicken NoodelsChicken Fried Rice+Chilli ChickenChicken Manchurian+Chilli PotatoHoney Chilli Potato+Chicken Chilli Garlic Momos [2 ... read more",
        },
      ],
    },
    {
      name: "Half and Half Combos",
      items: [
        {
          image:
            "https://b.zmtcdn.com/data/dish_photos/87c/153beb91af9f43e157f3d6fd6ea2587c.jpg?output-format=webp",
          name: "Chilli Paneer Gravy",
          price: "157.50",
          rating: 4,
          descript:
            "Chicken NoodelsChicken Fried Rice+Chilli ChickenChicken Manchurian+Chilli PotatoHoney Chilli Potato+Chicken Chilli Garlic Momos [2 ... read more",
        },
      ],
    },
  ]);

  const [selected, setSelected] = useState("Recommended");

  const onClickHandler = (e) => {
    if (e.target.id) {
      setSelected(e.target.id);
    }
    return;
  };

  return (
    <>
      <div className="flex w-full h-screen">
        <aside className="flex-col hidden w-1/4 h-screen gap-3 overflow-y-scroll border-r border-gray-200 md:flex">
          {menu.map((item) => (
            <MenuListContainer
              {...item}
              key={item._id}
              onClickHandler={onClickHandler}
              selected={selected}
            />
          ))}
        </aside>
        <div className="w-full px-3 md:w-3/4">
          <div className="pl-3 mb-4">
            <h2 className="text-xl font-semibold">Order Online</h2>
            <h4 className="flex items-center gap-2 font-light text-gray-500">
              <AiOutlineCompass /> Live Track Your Order | <BiTimeFive /> 45min
            </h4>
          </div>
          <section className="flex flex-col h-screen gap-3 overflow-y-scroll md:gap-5">
            {/* Component FoodList */}
            {menu.map((item) => (
              <FoodList {...item} key={item._id} />
            ))}
          </section>
        </div>
      </div>
      <FloatMenuBtn
        menu={menu}
        onClickHandler={onClickHandler}
        selected={selected}
      />
    </>
  );
}

export default OrderOnline;