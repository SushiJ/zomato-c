import { RestaurantModel } from "../models";
import {
  validateRestaurantByCity,
  validateRestaurantWhenSearched,
} from "../validation/restaurant";

import { validateRestaurantId } from "../validation/food";

export async function getRestaurants(req, res) {
  try {
    const { city } = req.query;

    await validateRestaurantByCity(req.query);

    const restaurants = await RestaurantModel.find({ city });
    return res.json({ restaurants });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export async function getRestaurantsById(req, res) {
  try {
    const { _id } = req.params;

    await validateRestaurantId(req.params);

    const restaurant = await RestaurantModel.findById(_id);

    if (!restaurant) {
      return res.status(404).json({ error: error.message });
    }

    return res.json({ restaurant });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export async function getRestaurantBySearch(req, res) {
  try {
    const { searchString } = req.body;

    await validateRestaurantWhenSearched(req.body);

    const restaurants = await RestaurantModel.find({
      name: {
        $regex: searchString,
        $options: "i",
      },
    });

    if (!restaurant) {
      return res
        .status(404)
        .json({ error: `No restaurants found for ${searchString}` });
    }
    return res.json({ restaurants });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
