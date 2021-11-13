import JwtPassport from "passport-jwt";

import { UserModel } from "../models";

const JWTStrategy = JwtPassport.Strategy;

const ExtractedJwt = JwtPassport.ExtractJwt;

const options = {
  jwtFromRequest: ExtractedJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: "JWT_SECRET_KEY",
};

export default (passport) => {
  passport.use(
    new JWTStrategy(options, async (jwt__payload, done) => {
      try {
        const doesUserExists = await UserModel.findById({
          jwt__payload,
        });

        if (!doesUserExists) {
          return done(null, false);
        }

        return done(null, doesUserExists);
      } catch (error) {
        throw new Error(error);
      }
    })
  );
};
