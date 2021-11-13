import { ImageModel, MenuModel } from "../models";

export async function getMenuListOfRestaurant(req, res) {
  try {
    const { _id } = req.params;
    const menus = await MenuModel.findById({ _id });
    return res.json({ menus });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export async function getImagesOfMenus(req, res) {
  try {
    const { _id } = req.params;

    const menus = await ImageModel.findOne({ _id });

    return res.json({ menus });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
