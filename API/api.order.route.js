import express from "express";
import passport from "passport";
import {
  postNewOrdersBasedOnId,
  getOrdersBasedOnId,
} from "../controllers/order.controller";

const router = express.Router();

router.get(
  "/:_id",
  passport.authenticate("jwt", { session: false }),
  getOrdersBasedOnId
);
router.post(
  "/new/:_id",
  passport.authenticate("jwt", { session: false }),
  postNewOrdersBasedOnId
);

export default router;
