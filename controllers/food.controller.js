import { FoodModel } from "../models";
import { validateCategory, validateRestaurantId } from "../validation/food";

export async function getFoodsByRestaurant(req, res) {
  try {
    const { _id } = req.params;

    await validateRestaurantId(req.params);

    const foods = await FoodModel.find({ restaurant: _id });
    return res.json({ foods });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export async function getFoodByCategory(req, res) {
  try {
    const { category } = req.params;

    await validateCategory(req.params);

    const foods = await FoodModel.find({
      category: {
        $regex: category,
        $options: "i",
      },
    });

    return res.json({ foods });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
