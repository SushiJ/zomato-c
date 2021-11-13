import { IoMdArrowDropright } from "react-icons/io";

const PictureCarouselCard = () => {
  return (
    <>
      <div className="relative w-full h-64 px-4 overflow-hidden">
        <div className="w-full h-full ">
          <img
            src="https://b.zmtcdn.com/data/pictures/2/18503752/a1cd82498e16a143ecda57f57cb353b3.jpg?output-format=webp"
            alt="food"
            className="object-cover w-full h-full transition duration-700 ease-in-out rounded-lg"
          />
          <div
            className="absolute inset-0 w-full h-full rounded-lg"
            style={{
              background:
                "linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 85%)",
            }}
          />
        </div>
        <div className="absolute w-full text-white left-8 bottom-2">
          <h4 className="z-10">Trending This Week</h4>
          <h6 className="z-10 flex items-center">
            15 Places <IoMdArrowDropright />
          </h6>
        </div>
      </div>
    </>
  );
};

export default PictureCarouselCard;
