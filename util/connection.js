import { connect } from "mongoose";

export default async () => {
  return connect(process.env.MONGODB_URL);
};

// useNewUrlParser: true,
// useUnifiedTopology: true,
// useCreateIndex: true,
// useFindAndModify: false,
