import axios from "axios";

import { GET_RESTAURANT } from "./restaurant.type";

export const getRestaurant = () => async (dispatch) => {
  try {
    const resturantList = await axios({
      method: "GET",
      url: "http://localhost:4000/restaurant/?city=Bengaluru",
    });

    return dispatch({ type: GET_RESTAURANT, payload: resturantList.data });
  } catch (e) {
    return console.log(e);
  }
};
