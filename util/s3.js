import AWS from "aws-sdk";
import dotenv from "dotenv";

dotenv.config();

const s3_bucket = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_ID,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: "ap-south-1",
});

export const s3Upload = (options) => {
  return new Promise((resolve, reject) => {
    s3_bucket.upload(options, (error, data) => {
      if (error) return reject(error);
      return resolve(data);
    });
  });
};
