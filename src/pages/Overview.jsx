import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import Slider from "react-slick";
import ReactStars from "react-rating-stars-component";

// components
import { NextArrow, PrevArrow } from "../components/CarouselArrows";
import MenuCollection from "../components/Restaurant/MenuCollection";
import MenuSimilarRestaurantCard from "../components/Restaurant/MenuSimilarRestaurantCard";
import ReviewCard from "../components/Restaurant/ReviewCard";
import MapView from "../components/Restaurant/MapView";

function Overview() {
  const { id } = useParams();

  const [menuImage, setMenuImages] = useState([
    "https://b.zmtcdn.com/data/menus/593/18233593/5b969d0a3ba13ae80c0df1e0d7447b02.jpg",
    "https://b.zmtcdn.com/data/menus/593/18233593/a181458955e1390aa366c636c2d3f0d5.jpg",
  ]);
  const [Reviews, setReviews] = useState([
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

  const cuisines = ["Indian", "Asian", "Italian"];
  const averageCost = 100;

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToScroll: 3,
          slidesToShow: 3,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToScroll: 2,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <>
      <div className="relative flex flex-col gap-6 md:flex-row">
        <div className="w-full md:w-8/12">
          <h2 className="my-4 text-lg font-semibold md:text-xl">
            About this place
          </h2>
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-medium">Menu</h4>
            <Link to={`/restaurant/${id}/menu`}>
              <span className="flex items-center gap-1 text-zomato-secondary">
                See all menu <IoMdArrowDropright />
              </span>
            </Link>
          </div>
          <div className="flex flex-wrap gap-3 my-4">
            <MenuCollection menuTitle="Menu" pages="3" image={menuImage} />
          </div>
          <h4 className="my-4 text-lg font-medium">Cuisines</h4>
          <div className="flex flex-wrap gap-2">
            {cuisines.map((data) => (
              <span className="px-2 py-1 text-gray-600 border border-gray-600 rounded-full">
                {data}
              </span>
            ))}
          </div>
          <div className="my-4">
            <h4 className="text-lg font-medium">Average Cost</h4>
            <h6>${averageCost} for one order (approx.)</h6>
            <small className="text-gray-500">
              Exclusive of applicable taxes and service charges, if any
            </small>
          </div>
          <div className="my-4">
            <h4 className="text-lg font-medium">Similar Restaurants</h4>
            <div>
              <Slider {...settings}>
                <MenuSimilarRestaurantCard
                  image="https://b.zmtcdn.com/data/pictures/chains/1/18216901/c9028cccf313b8a09996ea30e3fe8526_featured_v2.jpg"
                  title="Unplugged Courtyard"
                />
                <MenuSimilarRestaurantCard
                  image="https://b.zmtcdn.com/data/pictures/chains/1/18216901/c9028cccf313b8a09996ea30e3fe8526_featured_v2.jpg"
                  title="Unplugged Courtyard"
                />
                <MenuSimilarRestaurantCard
                  image="https://b.zmtcdn.com/data/pictures/chains/1/18216901/c9028cccf313b8a09996ea30e3fe8526_featured_v2.jpg"
                  title="Unplugged Courtyard"
                />
                <MenuSimilarRestaurantCard
                  image="https://b.zmtcdn.com/data/pictures/chains/1/18216901/c9028cccf313b8a09996ea30e3fe8526_featured_v2.jpg"
                  title="Unplugged Courtyard"
                />
                <MenuSimilarRestaurantCard
                  image="https://b.zmtcdn.com/data/pictures/chains/1/18216901/c9028cccf313b8a09996ea30e3fe8526_featured_v2.jpg"
                  title="Unplugged Courtyard"
                />
                <MenuSimilarRestaurantCard
                  image="https://b.zmtcdn.com/data/pictures/chains/1/18216901/c9028cccf313b8a09996ea30e3fe8526_featured_v2.jpg"
                  title="Unplugged Courtyard"
                />
              </Slider>
            </div>
          </div>
          <div className="flex flex-col w-full gap-4 my-4 md:hidden">
            <MapView
              title="McDonald's"
              phone="+919899795815"
              mapLocation={[12.8847181, 77.6077219]}
              address="Olive Nest Apartment, Arekere, Bengaluru"
            />
          </div>
          <div className="mt-8 mb-4">
            <h4 className="text-lg font-medium">
              Rate your delivery experience
            </h4>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              activeColor="#ffd700"
            />
            {Reviews.map((reviewData) => (
              <ReviewCard {...reviewData} />
            ))}
          </div>
        </div>
        <aside
          style={{ height: "fit-content" }}
          className="sticky flex-col hidden gap-4 p-5 bg-white shadow-md md:flex md:w-4/12 rounded-xl top-2"
        >
          <MapView
            title="McDonald's"
            phone="+919899795815"
            mapLocation={[12.8847181, 77.6077219]}
            address="Olive Nest Apartment, Arekere, Bengaluru"
          />
        </aside>
      </div>
    </>
  );
}

export default Overview;
