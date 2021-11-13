import { sign } from "jsonwebtoken";
import { UserModel } from "../models";
import { UserSchema } from "../schemas";
import { compare } from "bcryptjs";

//Generating JWT Tokens
UserSchema.methods.generateJwtToken = function ({ _id }) {
  return sign({ user: _id.toString() }, process.env.JWT_SECRET_KEY);
};

export const generateJwtToken = UserSchema.methods.generateJwtToken;

//Checking if user exists
UserSchema.statics.findUserIfExists = async function ({ email, phoneNumber }) {
  const checkUserByEmail = await UserModel.findOne({
    email,
  });
  const checkUserByPhoneNumber = await UserModel.findOne({
    phoneNumber,
  });

  if (checkUserByEmail || checkUserByPhoneNumber) {
    throw new Error("User Already Exists");
  }
  return false;
};

UserSchema.statics.findUser = async function ({ email, password }) {
  const user = await UserModel.findOne({ email });

  if (!user) throw new Error("User does not exist!!!");

  // Compare passwords
  const doesPasswordMatch = await compare(password, user.password);

  if (!doesPasswordMatch) throw new Error("Invalid Password!!!");

  return user;
};

export const findUserIfExists = UserSchema.statics.findUserIfExists;
export const findUser = UserSchema.statics.findUser;
