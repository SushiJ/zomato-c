import { ReviewsModel } from "../models";

export async function getReviewsBasedOnRestaurantId(req, res) {
  try {
    const { resid } = req.params;
    const reviews = await ReviewsModel.find({ restaurant: resid });

    return res.json({ reviews });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export async function postNewReview(req, res) {
  try {
    const { reviewData } = req.body;
    await ReviewsModel.create({ ...reviewData });

    return res.json({ review: "Successfully posted review" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export async function deleteReview(req, res) {
  try {
    const { _id } = req.params;
    await ReviewsModel.findByIdAndDelete(_id);

    return res.json({ review: "Successfully deleted the review" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
