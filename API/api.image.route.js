import express from "express";
import { postImage, uploadSingle } from "../controllers/image.controller";

const router = express.Router();

router.post("/", uploadSingle, postImage);

export default router;
