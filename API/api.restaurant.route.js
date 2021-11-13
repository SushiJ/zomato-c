import express from "express";
import {
  getRestaurantBySearch,
  getRestaurants,
  getRestaurantsById,
} from "../controllers/restaurant.controller";

const router = express.Router();

router.get("/", getRestaurants);

router.get("/:_id", getRestaurantsById);

router.get("/search", getRestaurantBySearch);

export default router;
