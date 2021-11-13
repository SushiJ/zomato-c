import Slider from "react-slick";
import { NextArrow, PrevArrow } from "../CarouselArrows";
import { categories } from "./categories";
import NutritionCarouselCard from "./NutritionCarouselCard";

const NutritionCarousel = () => {
  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <div className="flex flex-wrap justify-between gap-3 lg:hidden lg:gap-0 ">
        {categories.map((nutrition) => (
          <NutritionCarouselCard {...nutrition} />
        ))}
      </div>
      <div className="hidden lg:block">
        <Slider {...settings}>
          {categories.map((nutrition) => (
            <NutritionCarouselCard {...nutrition} />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default NutritionCarousel;
