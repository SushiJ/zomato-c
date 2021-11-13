import React, { useState } from "react";
import ReviewCard from "../components/Restaurant/ReviewCard";
import AddReviewCard from "../components/Restaurant/Reviews/AddReviewCard";

function Reviews() {
  const [reviews, setReviews] = useState([
    {
      userName: "Aditya",
      isRestaurantReview: true,
      createdAt: "2020-06-01T12:00:00.000Z",
      reviewText: "This place is a must visit.",
    },
    {
      userName: "Ira",
      isRestaurantReview: true,
      createdAt: "2020-06-01T12:00:00.000Z",
      reviewText: "This place is a must visit.",
    },
    {
      userName: "Kushagra",
      isRestaurantReview: false,
      createdAt: "2020-06-01T12:00:00.000Z",
      reviewText: "This place is a must visit.",
    },
    {
      userName: "Ira",
      isRestaurantReview: false,
      createdAt: "2020-06-01T12:00:00.000Z",
      reviewText: "This place is a must visit.",
    },
  ]);

  return (
    <>
      <div className="relative flex flex-col w-full gap-6 md:flex-row">
        <div className="flex flex-col w-full gap-3 md:w-8/12">
          <div className="md:hidden">
            <AddReviewCard />
          </div>
          {reviews.map((review) => (
            <ReviewCard {...review} />
          ))}
        </div>
        <aside
          style={{ height: "fit-content" }}
          className="sticky flex-col items-start hidden gap-3 p-3 bg-white shadow-md md:flex md:w-4/12 rounded-xl top-2"
        >
          <AddReviewCard />
        </aside>
      </div>
    </>
  );
}

export default Reviews;
