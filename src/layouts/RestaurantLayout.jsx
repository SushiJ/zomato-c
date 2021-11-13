import React, { useState } from "react";
import { BiBookmarkPlus } from "react-icons/bi";
import { TiStarOutline } from "react-icons/ti";
import { RiDirectionLine, RiShareForwardLine } from "react-icons/ri";
import RestaurantNav from "../components/Navbar/RestaurantNav";
import ImageGrid from "../components/Restaurant/ImageGrid";
import InfoButtons from "../components/Restaurant/InfoButtons";
import RestaurantInfo from "../components/Restaurant/RestaurantInfo";
import Tabs from "../components/Restaurant/Tabs";
import CartContainer from "../components/Cart/CartContainer";

const RestaurantLayout = ({ children }) => {
  const [restaurant, setRestaurant] = useState({
    images: [
      "https://b.zmtcdn.com/data/pictures/4/19661324/87a5c17c03666f6adc7fe5f0378c4095.jpg",
      "https://b.zmtcdn.com/data/pictures/chains/4/19661324/9afa14e3bfb56780332464e457019b5b.jpg",
      "https://b.zmtcdn.com/data/reviews_photos/c22/ce297cb16332fa4974941227c44eac22_1618340672.jpg",
      "https://b.zmtcdn.com/data/pictures/4/19661324/75bbd18943ab1119c2848186c62a5d1d.jpg",
      "https://b.zmtcdn.com/data/dish_photos/710/22f2975bde4cefb6c34fcb9d66f42710.jpg",
    ],
    name: "The Indo-Asian Kitchen",
    cuisine: "North Indian, Chinese, Kebab, Mughlai",
    address: "Karol Bagh, New Delhi",
    restaurantRating: 4.3,
    deliveryRating: 3.5,
  });
  return (
    <React.Fragment>
      <RestaurantNav />
      <div className="container px-4 pb-10 mx-auto lg:px-20">
        <ImageGrid images={restaurant.images} />
        <RestaurantInfo
          name={restaurant?.name}
          restaurantRating={restaurant?.restaurantRating || 0}
          deliveryRating={restaurant?.deliveryRating || 0}
          cuisine={restaurant?.cuisine}
          address={restaurant?.address}
        />
        <div className="flex flex-wrap gap-3 my-4">
          <InfoButtons isActive>
            <TiStarOutline /> Add Review
          </InfoButtons>
          <InfoButtons>
            <RiDirectionLine /> Direction
          </InfoButtons>
          <InfoButtons>
            <BiBookmarkPlus /> Bookmark
          </InfoButtons>
          <InfoButtons>
            <RiShareForwardLine /> Share
          </InfoButtons>
        </div>
        <div className="my-10">
          <Tabs />
        </div>
        {children}
      </div>
      <CartContainer />
    </React.Fragment>
  );
};

export default RestaurantLayout;
