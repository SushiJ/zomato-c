import { useParams, Link } from "react-router-dom";

import { useState } from "react";
import clx from "classnames";
import { routes } from "./routes";

function MobileTab() {
  const { type } = useParams();

  return (
    <>
      <div className="fixed bottom-0 z-10 flex justify-around w-full py-3 text-gray-500 bg-white shadow-lg lg:hidden">
        {routes[0].map((item) => (
          <Link to={`/${item.id}`} key={item.id}>
            <div
              className={clx("flex-grow", {
                "text-zomato-secondary border-t-2  border-zomato-secondary":
                  type === item.id,
              })}
            >
              <div className="flex flex-col items-center text-xl whitespace-nowrap">
                {item.icon}
                <h5 className="text-sm">{item.name}</h5>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

function LargeTab() {
  const { type } = useParams();
  return (
    <div className="hidden lg:block">
      <div className="container hidden px-20 mx-auto my-8 lg:flex gap-14">
        {routes[1].map((items) => (
          <Link to={`/${items.id}`} key={items.id}>
            <div
              className={clx(
                "flex items-center gap-3 pb-2 transition duration-700 ease-in-out",
                { "border-b-2 border-zomato-secondary": type === items.id }
              )}
            >
              <div
                className={clx("w-16 h-16 bg-gray-100 p-4 rounded-full", {
                  [`bg-${items.activeColor}-100`]: type === items.id,
                })}
              >
                <img
                  src={
                    type === items.id ? items.imageActive : items.imageDefault
                  }
                  alt="options"
                  className="w-full h-full"
                />
              </div>
              <h3
                className={
                  type === items.id
                    ? "text-xl text-zomato-secondary"
                    : "text-xl text-zomato-700"
                }
              >
                {items.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function FoodTab() {
  return (
    <div>
      <MobileTab />
      <LargeTab />
    </div>
  );
}
