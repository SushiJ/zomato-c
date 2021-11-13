import multer from "multer";
import { s3Upload } from "../util/s3";

// Multer
const storage = multer.memoryStorage();
const upload = multer({ storage });

export const uploadSingle = upload.single("file");

export async function postImage(req, res) {
  try {
    const file = req.file;

    //s3 bucket options
    const bucketOptions = {
      Bucket: "bucket-zomato-clone",
      Key: file.originalname,
      Body: file.buffer,
      contentType: file.mimetype,
      ACL: "public-read",
    };

    const uploadImage = await s3Upload(bucketOptions);

    return res.status(200).json({ uploadImage });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
