require("dotenv").config();

import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";

import signUpRoute from "./API/api.signUp.route";
import restaurantRoute from "./API/api.restaurant.route";
import foodRoute from "./API/api.food.route";
import menuRoute from "./API/api.menu.route";
import imageRoute from "./API/api.image.route";
import orderRoute from "./API/api.order.route";
import reviewRoute from "./API/api.review.route";
import userRoute from "./API/api.user.route";
import connection from "./util/connection";

import googleAuthConfig from "./config/google.config";
import routeConfig from "./config/route.config";

import mailRoute from "./API/api.mail.route";

const app = express();

googleAuthConfig(passport);
routeConfig(passport);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());
app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", signUpRoute);
app.use("/mail", mailRoute);
app.use("/restaurant", restaurantRoute);
app.use("/food", foodRoute);
app.use("/menu", menuRoute);
app.use("/image", imageRoute);
app.use("/order", orderRoute);
app.use("/review", reviewRoute);
app.use("/user", userRoute);

app.get("/", (_, res) => {
  res.send("Running");
});

app.listen(5000, () =>
  connection()
    .then(() => console.log("Server Running"))
    .catch((error) => console.log(error))
);
