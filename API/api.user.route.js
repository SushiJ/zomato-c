import express from "express";
import { getUser, updateUser } from "../controllers/user.controller";
const router = express.Router();

router.get("/:_id", getUser);
router.post("/:_id", updateUser);

export default router;
