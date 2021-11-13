import mongoose from "mongoose";
const { model } = mongoose;

import {
  UserSchema,
  FoodSchema,
  ReviewSchema,
  RestaurantSchema,
  OrderSchema,
  MenuSchema,
  ImageSchema,
} from "../schemas";

export const FoodModel = model("Foods", FoodSchema);

export const UserModel = model("Users", UserSchema);

export const ReviewsModel = model("Reviews", ReviewSchema);

export const RestaurantModel = model("Restaurants", RestaurantSchema);

export const OrderModel = model("Orders", OrderSchema);

export const MenuModel = model("Menus", MenuSchema);

export const ImageModel = model("Images", ImageSchema);
