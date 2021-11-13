import express from "express";
import { postMail } from "../controllers/mail.controller";

const router = express.Router();

router.post("/", postMail);

export default router;
