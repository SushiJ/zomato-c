import express from "express";
import {
  getFoodsByRestaurant,
  getFoodByCategory,
} from "../controllers/food.controller";

const router = express.Router();

router.get("/r/:_id", getFoodsByRestaurant);

router.get("/c/:category", getFoodByCategory);

export default router;
