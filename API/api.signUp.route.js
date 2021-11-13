import express from "express";
import passport from "passport";
import { googleScope, signIn, signUp } from "../controllers/auth.controller";

const router = express.Router();

router.post("/signup", signUp);
router.post("/signin", signIn);

router.get("/google", googleScope);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/",
  }),
  (req, res) => {
    return res.json({ token: req.session.passport.user.token });
  }
);

export default router;
