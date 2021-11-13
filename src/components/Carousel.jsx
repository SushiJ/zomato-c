import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import DeliveryCategory from "./DeliveryCategory";

const DeliveryCarousel = () => {
  return (
    <>
      <h1 className="mb-4 text-xl font-semibold">
        Inspiration for your first order
      </h1>
      <div className="flex flex-wrap justify-between gap-3 lg:hidden">
        {categories.map((food) => (
          <DeliveryCategory {...food} />
        ))}
      </div>
      <div className="hidden lg:block">
        <Slider {...settings}>
          {categories.map((food) => (
            <DeliveryCategory {...food} />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default DeliveryCarousel;
