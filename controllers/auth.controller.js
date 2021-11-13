import passport from "passport";
import { UserModel } from "../models";
import {
  findUser,
  findUserIfExists,
  generateJwtToken,
} from "../util/staticsAndMethods";

import { validateSignIn, validateSignUp } from "../validation/auth";

export async function signUp(req, res) {
  try {
    await validateSignUp(req.body.credentials);

    await findUserIfExists(req.body.credentials);

    //Saving to db
    const newUser = await UserModel.create(req.body.credentials);

    // JWT tokens
    const token = generateJwtToken(newUser);

    return res.status(200).json({ token, status: "success" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
export async function signIn(req, res) {
  try {
    await validateSignIn(req.body.credentials);

    //Querying db
    const user = await findUser(req.body.credentials);

    // JWT tokens
    const token = generateJwtToken(user);

    return res.status(200).json({ token, status: "success" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export const googleScope = passport.authenticate("google", {
  scope: [
    "https://www.googleapis.com/auth/userinfo.profile",
    "https://www.googleapis.com/auth/userinfo.email",
  ],
});
