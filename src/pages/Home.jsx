import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Delivery from "../components/Delivery/index";
import { useDispatch } from "react-redux";

import { getRestaurant } from "../Redux/reducer/restaurant/restaurant.action";

import Dining from "../components/Dining/index";
import NightLife from "../components/NightLife";
import Nutrition from "../components/Nutrition";

const Home = () => {
  const { type } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurant());
  }, []);
  return (
    <>
      <div>
        {type === "delivery" && <Delivery />}
        {type === "dining" && <Dining />}
        {type === "night" && <NightLife />}
        {type === "nutrition" && <Nutrition />}
      </div>
    </>
  );
};

export default Home;
