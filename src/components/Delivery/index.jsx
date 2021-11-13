import { useState, useEffect } from "react";
import RestaurantCard from "../RestaurantCard";
import Brand from "./Brand";
import DeliveryCarousel from "./DeliveryCarousel";
import { useSelector } from "react-redux";

const Delivery = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const reduxState = useSelector(
    (globalStore) => globalStore.restaurant.restaurants
  );

  useEffect(() => {
    reduxState.restaurants && setRestaurantList(reduxState.restaurants);
    console.log(reduxState.restaurants);
  }, [reduxState.restaurants]);

  return (
    <>
      <div>
        <Brand />
        <DeliveryCarousel />
        <div className="flex flex-wrap justify-between my-10">
          {restaurantList.map((restaurant) => (
            <RestaurantCard {...restaurant} key={restaurant._id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Delivery;
