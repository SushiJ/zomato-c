import express from "express";
import {
  getMenuListOfRestaurant,
  getImagesOfMenus,
} from "../controllers/menu.controller";

const router = express.Router();

router.get("/list/:_id", getMenuListOfRestaurant);

router.get("/image/:_id", getImagesOfMenus);

export default router;
