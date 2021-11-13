import express from "express";
import {
  deleteReview,
  getReviewsBasedOnRestaurantId,
  postNewReview,
} from "../controllers/review.controller";

const router = express.Router();

router.get("/:resid", getReviewsBasedOnRestaurantId);
router.post("/new", postNewReview);
router.delete("/delete", deleteReview);

export default router;
